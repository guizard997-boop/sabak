import { books } from "@/lib/books";
import type { Block, Book } from "@/lib/books/types";
import type { BookPage, LibraryBook } from "@/lib/library-db";

/** Блоки → плоский текст (для поиска и страниц без разметки). */
function blocksToText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.t) {
        case "p":
        case "h":
        case "h2":
        case "tex":
        case "note":
        case "quote":
          return b.v;
        case "ul":
        case "ol":
        case "ex":
        case "verse":
          return b.v.join("\n");
        case "dlg":
          return b.v.map((l) => `${l.who}: ${l.text}`).join("\n");
        default:
          return "";
      }
    })
    .filter(Boolean)
    .join("\n\n");
}

function toPages(book: Book): BookPage[] {
  const pages: BookPage[] = [];
  for (const leaf of book.compiled) {
    if (leaf.kind === "title") {
      const blocks: Block[] = [
        { t: "h", v: book.title },
        { t: "p", v: `${book.authors}${book.publisher ? ` · ${book.publisher}` : ""}${book.year ? `, ${book.year}` : ""}` },
        ...(leaf.blocks ?? []),
      ];
      pages.push({ text: blocksToText(blocks), blocks });
    } else if (leaf.kind === "chapter") {
      const blocks: Block[] = [{ t: "h", v: `Глава ${leaf.chapter}. ${leaf.chapterTitle}` }];
      pages.push({
        text: blocksToText(blocks),
        blocks,
        chapter: leaf.chapter,
        chapterTitle: leaf.chapterTitle,
      });
    } else if (leaf.kind === "text" && leaf.blocks?.length) {
      pages.push({
        text: blocksToText(leaf.blocks),
        blocks: leaf.blocks,
        chapter: leaf.chapter,
        chapterTitle: leaf.chapterTitle,
      });
    }
    // cover / toc / end — это элементы «листаемой» обложки, в новом ридере не нужны
  }
  return pages;
}

/** 15 учебников 9 класса: Алгебра, Геометрия, Физика, Химия, Биология, Литература,
 *  Кыргыз адабияты, История Кыргызстана, Информатика и др. */
export function createInitialBooks(): LibraryBook[] {
  const now = Date.now();
  return books.map((book, i) => ({
    id: book.id,
    title: book.title,
    author: book.authors,
    subject: book.subject,
    subjectLabel: book.subjectLabel,
    grade: book.grade,
    lang: book.lang,
    blurb: book.blurb,
    pages: toPages(book),
    builtin: true,
    createdAt: now + i, // сохраняет порядок полки
  }));
}
