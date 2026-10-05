import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { ensureSeeded, getLibraryDb, type LibraryBook } from "@/lib/library-db";

/** Готовность БД: открывает IndexedDB и при первом запуске заливает 15 учебников. */
function useLibraryReady() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    ensureSeeded()
      .then(() => alive && setReady(true))
      .catch((e: unknown) => alive && setError(e instanceof Error ? e.message : "Ошибка хранилища"));
    return () => {
      alive = false;
    };
  }, []);
  return { ready, error };
}

/** Все книги полки. `undefined` — пока грузится. Обновляется «вживую» после добавления/удаления. */
export function useLibraryBooks(): { books: LibraryBook[] | undefined; error: string | null } {
  const { ready, error } = useLibraryReady();
  const books = useLiveQuery(
    () => (ready ? getLibraryDb().books.orderBy("createdAt").toArray() : undefined),
    [ready],
  );
  return { books, error };
}

/** Одна книга по id. `null` — не найдена, `undefined` — ещё грузится. */
export function useLibraryBook(id: string): { book: LibraryBook | null | undefined; error: string | null } {
  const { ready, error } = useLibraryReady();
  const book = useLiveQuery(
    async () => (ready ? ((await getLibraryDb().books.get(id)) ?? null) : undefined),
    [ready, id],
  );
  return { book, error };
}
