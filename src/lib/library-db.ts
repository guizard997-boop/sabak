import Dexie, { type Table } from "dexie";
import type { Block, Lang, Subject } from "@/lib/books/types";

/**
 * Клиентская офлайн-библиотека (IndexedDB через Dexie).
 *
 * ВАЖНО: это НЕ `src/lib/db.ts`. Тот файл — серверный слой Postgres (Neon/PGLite),
 * который использует авторизация; он работает только на сервере. Книги живут в
 * браузере/WebView, поэтому для них отдельный файл.
 */

/** Одна страница книги. */
export type BookPage = {
  /** Плоский текст страницы (абзацы разделены пустой строкой). */
  text: string;
  /** Иллюстрация, схема или график над текстом: data:-URL или обычный URL. */
  imageUrl?: string;
  /** Богатая разметка (формулы KaTeX, заметки, упражнения) — у встроенных учебников. */
  blocks?: Block[];
  chapter?: string;
  chapterTitle?: string;
};

export type LibraryBook = {
  id: string;
  title: string;
  author: string;
  subject: Subject;
  subjectLabel: string;
  grade: string;
  lang: Lang;
  blurb?: string;
  /** Пользовательская обложка (data:-URL). Без неё рисуется встроенная SVG-обложка. */
  coverUrl?: string;
  pages: BookPage[];
  /** Оригинальный PDF, если был загружен. */
  pdfBlob?: Blob;
  /** true — учебник из набора по умолчанию. */
  builtin: boolean;
  createdAt: number;
};

type MetaRow = { key: string; value: string };

class LibraryDb extends Dexie {
  books!: Table<LibraryBook, string>;
  meta!: Table<MetaRow, string>;

  constructor() {
    super("sabak-library");
    this.version(1).stores({
      books: "id, subject, builtin, createdAt",
      meta: "key",
    });
  }
}

let instance: LibraryDb | null = null;

/** Ленивое создание: на сервере (SSR) IndexedDB нет, поэтому не открываем его при импорте. */
export function getLibraryDb(): LibraryDb {
  if (typeof indexedDB === "undefined") {
    throw new Error("library-db доступна только в браузере (IndexedDB).");
  }
  instance ??= new LibraryDb();
  return instance;
}

const SEED_KEY = "seeded-v1";
let seedPromise: Promise<void> | null = null;

/**
 * Авто-заправка: при первом запуске кладёт 15 учебников на полку.
 * Флаг в `meta` не даёт вернуть их обратно, если пользователь удалил книгу.
 */
export function ensureSeeded(): Promise<void> {
  seedPromise ??= (async () => {
    const db = getLibraryDb();
    const done = await db.meta.get(SEED_KEY);
    if (done) return;
    const { createInitialBooks } = await import("@/data/initialBooks");
    const seed = createInitialBooks();
    await db.transaction("rw", db.books, db.meta, async () => {
      await db.books.bulkPut(seed);
      await db.meta.put({ key: SEED_KEY, value: String(Date.now()) });
    });
  })().catch((err) => {
    seedPromise = null; // дать шанс повторить
    throw err;
  });
  return seedPromise;
}

export async function addBook(book: LibraryBook): Promise<void> {
  await getLibraryDb().books.put(book);
}

export async function deleteBook(id: string): Promise<void> {
  await getLibraryDb().books.delete(id);
}
