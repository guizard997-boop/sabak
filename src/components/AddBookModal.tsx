import * as Dialog from "@radix-ui/react-dialog";
import { ImagePlus, X } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SUBJECTS } from "@/lib/books/types";
import type { Subject } from "@/lib/books/types";
import { addBook, type LibraryBook } from "@/lib/library-db";
import { imageToDataUrl, parseBookText, readTextFile } from "@/lib/parse-book";

const SUBJECT_OPTIONS = SUBJECTS.filter((s): s is { id: Subject; label: string } => s.id !== "all");

const fieldClass =
  "h-11 w-full rounded-md border border-border bg-raised px-3 text-sm text-fg outline-none placeholder:text-subtle focus-visible:border-accent";

export function AddBookModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState<Subject>("literature");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [textFile, setTextFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const coverInput = useRef<HTMLInputElement>(null);

  // Предпросмотр обложки (object URL освобождаем при смене/закрытии).
  useEffect(() => {
    if (!coverFile) {
      setCoverPreview(null);
      return;
    }
    const url = URL.createObjectURL(coverFile);
    setCoverPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [coverFile]);

  const reset = () => {
    setTitle("");
    setAuthor("");
    setSubject("literature");
    setCoverFile(null);
    setTextFile(null);
    setPdfFile(null);
    setError(null);
  };

  const onPick =
    (setter: (f: File | null) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.files?.[0] ?? null);
      setError(null);
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return setError("Введите название книги.");
    if (!textFile && !pdfFile) return setError("Выберите файл с текстом (.txt, .md) или PDF.");

    setBusy(true);
    setError(null);
    try {
      const pages = textFile ? parseBookText(await readTextFile(textFile)) : [];
      if (textFile && pages.length === 0) {
        throw new Error("Файл пустой — нечего показывать на страницах.");
      }
      const coverUrl = coverFile ? await imageToDataUrl(coverFile) : undefined;
      const label = SUBJECT_OPTIONS.find((s) => s.id === subject)?.label ?? "";

      const book: LibraryBook = {
        id: `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        title: title.trim(),
        author: author.trim() || "Автор не указан",
        subject,
        subjectLabel: label,
        grade: "",
        lang: "ru",
        coverUrl,
        pages,
        pdfBlob: pdfFile ?? undefined,
        builtin: false,
        createdAt: Date.now(),
      };
      await addBook(book);
      reset();
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Не удалось сохранить книгу.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (busy ? undefined : onOpenChange(v))}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 max-h-[92dvh] overflow-y-auto rounded-t-2xl border border-border bg-surface p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-fg shadow-2xl outline-none md:inset-x-auto md:top-1/2 md:left-1/2 md:bottom-auto md:w-[28rem] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl">
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="font-serif text-xl">Добавить книгу</Dialog.Title>
            <Dialog.Close asChild>
              <Button size="icon" aria-label="Закрыть" disabled={busy}>
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Название, автор, предмет, обложка и файл книги. Книга сохранится на этом устройстве.
          </Dialog.Description>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => coverInput.current?.click()}
                aria-label="Выбрать обложку"
                className="relative flex aspect-[2/3] w-28 shrink-0 items-center justify-center overflow-hidden rounded-md border border-dashed border-border-strong bg-raised text-muted transition-transform duration-150 ease-out active:scale-[0.97]"
              >
                {coverPreview ? (
                  <img src={coverPreview} alt="Предпросмотр обложки" className="size-full object-cover" />
                ) : (
                  <span className="flex flex-col items-center gap-1 px-2 text-center font-sans text-xs">
                    <ImagePlus className="size-5" />
                    Обложка
                  </span>
                )}
              </button>
              <input
                ref={coverInput}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onPick(setCoverFile)}
              />
              <div className="min-w-0 flex-1 space-y-3">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Название"
                  aria-label="Название"
                  className={fieldClass}
                />
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Автор"
                  aria-label="Автор"
                  className={fieldClass}
                />
              </div>
            </div>

            <label className="block">
              <span className="mb-1 block font-sans text-xs text-muted">Предмет</span>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as Subject)}
                className={fieldClass}
              >
                {SUBJECT_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block font-sans text-xs text-muted">
                Текст книги (.txt, .md) — разделитель страниц <code>[PAGE]</code>, иначе по абзацам
              </span>
              <input
                type="file"
                accept=".txt,.md,text/plain,text/markdown"
                onChange={onPick(setTextFile)}
                className="block w-full font-sans text-sm text-muted file:mr-3 file:h-9 file:rounded-md file:border-0 file:bg-raised file:px-3 file:text-fg"
              />
            </label>

            <label className="block">
              <span className="mb-1 block font-sans text-xs text-muted">Оригинал PDF (необязательно)</span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={onPick(setPdfFile)}
                className="block w-full font-sans text-sm text-muted file:mr-3 file:h-9 file:rounded-md file:border-0 file:bg-raised file:px-3 file:text-fg"
              />
            </label>

            {error ? (
              <p role="alert" className="font-sans text-sm text-[#e5897a]">
                {error}
              </p>
            ) : null}

            <Button type="submit" variant="solid" className="w-full" disabled={busy}>
              {busy ? "Сохраняем…" : "Добавить на полку"}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
