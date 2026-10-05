import { Link } from "@tanstack/react-router";
import { Bookmark, FileText, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import { Blocks } from "@/components/page-content";
import type { LibraryBook } from "@/lib/library-db";
import { useLibrary } from "@/lib/store";
import { cn } from "@/lib/utils";

const PAPER = "#f4f1ea";
const INK = "#241f18";
const INK_MUTED = "#6b6254";

export function BookReader({ book }: { book: LibraryBook }) {
  const count = book.pages.length;
  const hydrate = useLibrary((s) => s.hydrate);
  const hydrated = useLibrary((s) => s.hydrated);
  const saved = useLibrary((s) => s.progress[book.id]?.page);
  const bookmarks = useLibrary((s) => s.bookmarks[book.id]) ?? [];
  const setProgress = useLibrary((s) => s.setPage);
  const toggleBookmark = useLibrary((s) => s.toggleBookmark);

  const [page, setPage] = useState(0);
  const restored = useRef(false);
  const scroller = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // Один раз возвращаемся на сохранённую страницу.
  useEffect(() => {
    if (!hydrated || restored.current || count === 0) return;
    restored.current = true;
    setPage(Math.min(Math.max(saved ?? 0, 0), count - 1));
  }, [hydrated, saved, count]);

  const go = useCallback(
    (next: number) => {
      if (count === 0) return;
      const clamped = Math.min(Math.max(next, 0), count - 1);
      setPage(clamped);
      setProgress(book.id, clamped);
      scroller.current?.scrollTo({ top: 0 });
    },
    [book.id, count, setProgress],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(page + 1);
      if (e.key === "ArrowLeft") go(page - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, page]);

  // Ссылка на оригинальный PDF живёт, пока открыт ридер.
  const pdfUrl = useMemo(() => (book.pdfBlob ? URL.createObjectURL(book.pdfBlob) : null), [book.pdfBlob]);
  useEffect(() => () => void (pdfUrl && URL.revokeObjectURL(pdfUrl)), [pdfUrl]);

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    touch.current = t ? { x: t.clientX, y: t.clientY } : null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touch.current;
    const t = e.changedTouches[0];
    touch.current = null;
    if (!start || !t) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(page + (dx < 0 ? 1 : -1));
  };

  const current = book.pages[page];
  const percent = count ? Math.round(((page + 1) / count) * 100) : 0;
  const bookmarked = bookmarks.includes(page);
  const atStart = page <= 0;
  const atEnd = page >= count - 1;

  return (
    <div
      className="flex h-dvh flex-col"
      style={{ background: PAPER, color: INK, fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {/* Верхняя полоса прогресса чтения */}
      <div
        className="h-1 w-full shrink-0"
        style={{ background: "rgb(36 31 24 / 0.12)" }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label="Прогресс чтения"
      >
        <div
          className="h-full transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%`, background: "#8a5a2b" }}
        />
      </div>

      <header className="flex shrink-0 items-center gap-1 px-2 py-1.5 md:px-6">
        <Link
          to="/"
          aria-label="На полку"
          className="inline-flex size-11 items-center justify-center rounded-md transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          <X className="size-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base leading-tight font-semibold">{book.title}</p>
          <p className="truncate font-sans text-xs" style={{ color: INK_MUTED }}>
            {current?.chapterTitle ? `Гл. ${current.chapter}. ${current.chapterTitle}` : book.author}
          </p>
        </div>
        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Открыть оригинал PDF"
            className="inline-flex size-11 items-center justify-center rounded-md transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            <FileText className="size-5" />
          </a>
        ) : null}
        <button
          type="button"
          aria-label="Закладка"
          aria-pressed={bookmarked}
          onClick={() => toggleBookmark(book.id, page)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-md transition-transform duration-150 ease-out active:scale-[0.96]",
            bookmarked && "text-[#8a5a2b]",
          )}
        >
          <Bookmark className={cn("size-5", bookmarked && "fill-current")} />
        </button>
      </header>

      <main
        ref={scroller}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <article className="reader-prose mx-auto w-full max-w-[42rem] px-5 py-4 md:px-8 md:py-8">
          {!current ? (
            <p className="py-16 text-center" style={{ color: INK_MUTED }}>
              {pdfUrl
                ? "Текст не извлечён — откройте оригинал PDF кнопкой сверху."
                : "В этой книге пока нет страниц."}
            </p>
          ) : (
            <>
              {current.imageUrl ? (
                <figure className="mb-5">
                  <img
                    src={current.imageUrl}
                    alt=""
                    loading="lazy"
                    className="mx-auto max-h-[60dvh] w-auto max-w-full rounded-sm"
                  />
                </figure>
              ) : null}
              {current.blocks?.length ? (
                <Blocks blocks={current.blocks} />
              ) : (
                current.text
                  .split(/\n{2,}/)
                  .filter((para) => para.trim())
                  .map((para, i) => <p key={i}>{para}</p>)
              )}
            </>
          )}
        </article>
      </main>

      <footer
        className="shrink-0 border-t px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-6"
        style={{ borderColor: "rgb(36 31 24 / 0.14)" }}
      >
        <div className="mx-auto flex max-w-[42rem] items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={atStart}
            className="h-11 min-w-[6.5rem] rounded-md border px-3 font-sans text-sm font-medium transition-[transform,opacity] duration-150 ease-out active:scale-[0.96] disabled:pointer-events-none disabled:opacity-35"
            style={{ borderColor: "rgb(36 31 24 / 0.25)" }}
          >
            ◄ Назад
          </button>
          <div className="text-center font-sans text-xs tabular-nums" style={{ color: INK_MUTED }}>
            <p className="text-sm font-medium" style={{ color: INK }}>
              Страница {count ? page + 1 : 0} из {count}
            </p>
            <p>{percent}% прочитано</p>
          </div>
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={atEnd}
            className="h-11 min-w-[6.5rem] rounded-md border px-3 font-sans text-sm font-medium transition-[transform,opacity] duration-150 ease-out active:scale-[0.96] disabled:pointer-events-none disabled:opacity-35"
            style={{ borderColor: "rgb(36 31 24 / 0.25)", background: "#8a5a2b", color: "#fffaf0" }}
          >
            Вперед ►
          </button>
        </div>
      </footer>
    </div>
  );
}
