import { Link } from "@tanstack/react-router";
import { Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AddBookModal } from "@/components/AddBookModal";
import { BookCover } from "@/components/book-cover";
import { SUBJECTS } from "@/lib/books/types";
import type { Subject } from "@/lib/books/types";
import { deleteBook } from "@/lib/library-db";
import { lastReadId, useLibrary } from "@/lib/store";
import { useLibraryBooks } from "@/lib/use-library-books";
import { cn } from "@/lib/utils";

export function LibraryHome() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState<Subject | "all">("all");
  const [adding, setAdding] = useState(false);
  const hydrate = useLibrary((s) => s.hydrate);
  const progress = useLibrary((s) => s.progress);
  const { books, error } = useLibraryBooks();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const resumeId = lastReadId(progress);
  const resume = resumeId ? books?.find((b) => b.id === resumeId) : undefined;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (books ?? []).filter((book) => {
      if (subject !== "all" && book.subject !== subject) return false;
      if (!q) return true;
      return [book.title, book.author, book.subjectLabel, book.blurb ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [books, query, subject]);

  const onDelete = async (id: string, title: string) => {
    if (window.confirm(`Удалить «${title}» с полки?`)) await deleteBook(id);
  };

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="px-4 pt-8 pb-4 md:px-10 md:pt-12">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] text-muted uppercase">9 класс · Кыргызстан</p>
            <h1 className="mt-2 font-serif text-4xl tracking-tight md:text-5xl">Сабак</h1>
          </div>
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="mt-1 inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-accent px-4 font-sans text-sm font-medium text-accent-fg transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            <Plus className="size-4" />
            Добавить
          </button>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Учебники и ваши книги — всё хранится на устройстве и читается без интернета.
        </p>

        <label className="mt-6 flex h-12 items-center gap-3 rounded-xl border border-border bg-surface px-4">
          <Search className="size-4 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Найти учебник"
            className="h-full w-full bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
          />
        </label>

        <div className="mt-4 flex flex-nowrap gap-2 overflow-x-auto pb-1">
          {SUBJECTS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSubject(item.id)}
              className={cn(
                "h-9 shrink-0 rounded-full border px-3 font-sans text-xs transition-colors duration-150",
                subject === item.id
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-muted hover:text-fg",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {resume && !query && subject === "all" ? (
        <section className="px-4 pb-6 md:px-10">
          <Link
            to="/book/$id"
            params={{ id: resume.id }}
            className="flex items-center gap-4 rounded-xl border border-border bg-surface p-3"
          >
            <div className="w-16 shrink-0">
              <BookCover book={resume} imageUrl={resume.coverUrl} />
            </div>
            <div className="min-w-0">
              <p className="font-sans text-[0.68rem] tracking-[0.16em] text-muted uppercase">Продолжить</p>
              <p className="truncate font-serif text-lg">{resume.title}</p>
              <p className="font-sans text-xs text-muted tabular-nums">
                страница {Math.min((progress[resume.id]?.page ?? 0) + 1, resume.pages.length || 1)} из{" "}
                {resume.pages.length}
              </p>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="px-4 pb-16 md:px-10">
        <div className="library-grid grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((book) => {
            const saved = progress[book.id]?.page;
            return (
              <div key={book.id} className="relative">
                <Link to="/book/$id" params={{ id: book.id }} className="shelf-book group block">
                  <BookCover book={book} imageUrl={book.coverUrl} />
                  <div className="mt-3">
                    <p className="font-serif text-[0.95rem] leading-snug">{book.title}</p>
                    <p className="mt-0.5 truncate font-sans text-xs text-muted">{book.author}</p>
                    {saved ? (
                      <p className="mt-1 font-sans text-[0.65rem] tracking-wide text-subtle uppercase tabular-nums">
                        стр. {saved + 1}
                      </p>
                    ) : null}
                  </div>
                </Link>
                {!book.builtin ? (
                  <button
                    type="button"
                    aria-label={`Удалить «${book.title}»`}
                    onClick={() => void onDelete(book.id, book.title)}
                    className="absolute top-2 right-2 z-10 inline-flex size-9 items-center justify-center rounded-full bg-black/60 text-white transition-transform duration-150 ease-out active:scale-[0.92]"
                  >
                    <Trash2 className="size-4" />
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
        {error ? (
          <p className="py-16 text-center font-serif text-muted">Не удалось открыть хранилище: {error}</p>
        ) : books === undefined ? (
          <p className="py-16 text-center font-serif text-muted">Готовим полку…</p>
        ) : filtered.length === 0 ? (
          <p className="py-16 text-center font-serif text-muted">На полке нет такого тома.</p>
        ) : null}
      </section>

      <AddBookModal open={adding} onOpenChange={setAdding} />
    </div>
  );
}
