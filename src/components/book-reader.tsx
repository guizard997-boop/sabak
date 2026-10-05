import { Link } from "@tanstack/react-router";
import { Bookmark, ChevronLeft, ChevronRight, List, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageContent } from "@/components/page-content";
import { Button } from "@/components/ui/button";
import type { Book } from "@/lib/books/types";
import { useLibrary } from "@/lib/store";
import { cn } from "@/lib/utils";

type FlipApi = {
  flipNext: (c?: string) => void;
  flipPrev: (c?: string) => void;
  turnToPage: (n: number) => void;
  destroy: () => void;
  getPageCount: () => number;
  getCurrentPageIndex: () => number;
  on: (event: string, cb: (e: { data: unknown }) => void) => void;
};

export function BookReader({ book }: { book: Book }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const templateRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<FlipApi | null>(null);
  const [page, setPage] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const progress = useLibrary((s) => s.progress[book.id]);
  const bookmarks = useLibrary((s) => s.bookmarks[book.id]);
  const setProgress = useLibrary((s) => s.setPage);
  const toggleBookmark = useLibrary((s) => s.toggleBookmark);
  const hydrate = useLibrary((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const mount = mountRef.current;
    const template = templateRef.current;
    if (!mount || !template) return;
    let cancelled = false;
    let pf: FlipApi | null = null;
    let host: HTMLDivElement | null = null;
    let onKey: ((event: KeyboardEvent) => void) | null = null;
    let onGoto: ((event: Event) => void) | null = null;

    void import("page-flip/dist/js/page-flip.module.js").then(({ PageFlip }) => {
      if (cancelled || !mountRef.current || !templateRef.current) return;
      host = document.createElement("div");
      host.className = "book-host w-full";
      mount.appendChild(host);

      const clones = [...templateRef.current.children].map((node) => node.cloneNode(true) as HTMLElement);
      for (const clone of clones) host.appendChild(clone);

      const instance = new PageFlip(host, {
        width: 420,
        height: 620,
        size: "stretch",
        minWidth: 280,
        maxWidth: 540,
        minHeight: 400,
        maxHeight: 780,
        showCover: true,
        drawShadow: true,
        flippingTime: 800,
        usePortrait: true,
        maxShadowOpacity: 0.45,
        mobileScrollSupport: true,
        swipeDistance: 28,
        startZIndex: 2,
        autoSize: true,
        clickEventForward: true,
      });
      instance.loadFromHTML(clones);
      pf = instance;
      apiRef.current = instance;

      instance.on("flip", (e: { data: unknown }) => {
        const idx = Number(e.data) || 0;
        setPage(idx);
        setProgress(book.id, idx);
      });
      instance.on("init", () => {
        const start = useLibrary.getState().progress[book.id]?.page ?? 0;
        if (start > 0) instance.turnToPage(start);
        setPage(instance.getCurrentPageIndex());
        setReady(true);
      });

      onGoto = (event: Event) => {
        const target = event.target as HTMLElement | null;
        const btn = target?.closest?.("[data-goto]") as HTMLElement | null;
        if (!btn || !pf) return;
        event.preventDefault();
        event.stopPropagation();
        pf.turnToPage(Number(btn.dataset.goto));
      };
      host.addEventListener("click", onGoto);

      onKey = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") instance.flipNext();
        if (event.key === "ArrowLeft") instance.flipPrev();
      };
      window.addEventListener("keydown", onKey);
    });

    return () => {
      cancelled = true;
      if (onKey) window.removeEventListener("keydown", onKey);
      if (host && onGoto) host.removeEventListener("click", onGoto);
      try {
        pf?.destroy();
      } catch {
        /* already gone */
      }
      apiRef.current = null;
      mount.innerHTML = "";
      setReady(false);
    };
  }, [book.id, setProgress]);

  const count = book.compiled.length;
  const bookmarked = bookmarks.includes(page);

  return (
    <div className="reader-stage flex min-h-dvh flex-col bg-bg text-fg">
      <header className="flex items-center gap-2 px-3 py-2 md:px-6">
        <Link
          to="/"
          aria-label="На полку"
          className="inline-flex size-11 items-center justify-center rounded-md text-fg transition-transform duration-150 ease-out hover:bg-raised active:scale-[0.96]"
        >
          <X className="size-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-base leading-tight">{book.title}</p>
          <p className="truncate font-sans text-xs text-muted">{book.authors}</p>
        </div>
        <Button
          size="icon"
          aria-label="Оглавление"
          onClick={() => setTocOpen((v) => !v)}
          className={cn(tocOpen && "bg-raised")}
        >
          <List className="size-5" />
        </Button>
        <Button
          size="icon"
          aria-label="Закладка"
          onClick={() => toggleBookmark(book.id, page)}
          className={cn(bookmarked && "text-accent")}
        >
          <Bookmark className={cn("size-5", bookmarked && "fill-current")} />
        </Button>
      </header>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 md:px-8">
        <div ref={templateRef} className="hidden" aria-hidden>
          {book.compiled.map((leaf, index) => (
            <div key={`${book.id}-${index}`} className="page-leaf" data-density={leaf.density}>
              <PageContent book={book} page={leaf} index={index} />
            </div>
          ))}
        </div>
        <div ref={mountRef} className="mx-auto w-full max-w-[980px]" />
        {!ready ? <p className="absolute font-serif text-muted">Открываем том…</p> : null}
      </div>

      <footer className="flex items-center justify-between gap-3 px-3 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-6">
        <Button size="icon" aria-label="Назад" onClick={() => apiRef.current?.flipPrev()}>
          <ChevronLeft className="size-5" />
        </Button>
        <p className="font-sans text-xs tracking-wide text-muted tabular-nums">
          {page + 1} / {count}
        </p>
        <Button size="icon" aria-label="Вперёд" onClick={() => apiRef.current?.flipNext()}>
          <ChevronRight className="size-5" />
        </Button>
      </footer>

      {tocOpen ? (
        <aside className="fixed inset-y-0 right-0 z-20 flex w-[min(100%,20rem)] flex-col border-l border-border bg-surface p-4 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-serif text-lg">Оглавление</p>
            <Button size="icon" aria-label="Закрыть" onClick={() => setTocOpen(false)}>
              <X className="size-5" />
            </Button>
          </div>
          <nav className="min-h-0 flex-1 overflow-auto">
            {book.chapters.map((chapter) => {
              const idx = book.compiled.findIndex((pg) => pg.kind === "chapter" && pg.chapter === chapter.n);
              return (
                <button
                  key={chapter.n}
                  type="button"
                  className="flex w-full items-baseline gap-3 border-b border-border py-3 text-left"
                  onClick={() => {
                    apiRef.current?.turnToPage(idx < 0 ? 0 : idx);
                    setTocOpen(false);
                  }}
                >
                  <span className="w-6 font-sans text-xs text-muted">{chapter.n}</span>
                  <span className="font-serif">{chapter.title}</span>
                </button>
              );
            })}
          </nav>
        </aside>
      ) : null}

      <span className="sr-only">Прогресс сохранён: страница {progress?.page ?? 0}</span>
    </div>
  );
}
