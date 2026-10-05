import { createFileRoute, Link } from "@tanstack/react-router";
import { BookReader } from "@/components/BookReader";
import { useLibraryBook } from "@/lib/use-library-books";

export const Route = createFileRoute("/book/$id")({
  component: BookPage,
});

function BookPage() {
  const { id } = Route.useParams();
  const { book, error } = useLibraryBook(id);

  if (book === undefined && !error) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-bg px-6 text-muted">
        <p className="font-serif">Открываем том…</p>
      </main>
    );
  }
  if (!book) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-bg px-6 text-fg">
        <h1 className="font-serif text-2xl">{error ? "Хранилище недоступно" : "Такого тома нет"}</h1>
        <Link to="/" className="font-sans text-sm text-muted underline">
          На полку
        </Link>
      </main>
    );
  }
  return <BookReader book={book} />;
}
