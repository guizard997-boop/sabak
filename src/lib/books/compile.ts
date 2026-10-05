import type { Block, Book, BookMeta, Chapter, CompiledPage } from "./types";

function weight(block: Block): number {
  switch (block.t) {
    case "h":
      return 48;
    case "h2":
      return 36;
    case "p":
      return Math.max(28, Math.ceil(block.v.length / 2.2));
    case "tex":
      return 56;
    case "ul":
    case "ol":
      return 24 + block.v.length * 28;
    case "note":
      return 40 + Math.ceil(block.v.length / 2.4);
    case "ex":
      return 36 + block.v.length * 32;
    case "quote":
      return 40 + Math.ceil(block.v.length / 2.6);
    case "verse":
      return 28 + block.v.length * 22;
    case "dlg":
      return 20 + block.v.length * 26;
    default:
      return 32;
  }
}

const PAGE_BUDGET = 420;

export function compileBook(meta: BookMeta, chapters: Chapter[]): Book {
  const pages: CompiledPage[] = [];

  pages.push({ kind: "cover", density: "hard" });
  pages.push({
    kind: "title",
    density: "hard",
    title: meta.title,
    blocks: [
      { t: "p", v: meta.blurb },
      {
        t: "note",
        k: "О тексте",
        v: "Внутри — полный учебный курс по программе 9 класса: теория, формулы, примеры и упражнения. Текст написан для чтения в этом приложении и следует программе указанных изданий.",
      },
    ],
  });

  const tocIndex = pages.length;
  pages.push({ kind: "toc", density: "soft", toc: [] });

  const toc: { n: string; title: string; page: number }[] = [];
  let bodyPage = 1;

  for (const chapter of chapters) {
    pages.push({
      kind: "chapter",
      density: "soft",
      chapter: chapter.n,
      chapterTitle: chapter.title,
      pageNum: bodyPage,
    });
    toc.push({ n: chapter.n, title: chapter.title, page: pages.length - 1 });
    bodyPage += 1;

    let bucket: Block[] = [];
    let used = 0;

    const flush = () => {
      if (!bucket.length) return;
      pages.push({
        kind: "text",
        density: "soft",
        chapter: chapter.n,
        chapterTitle: chapter.title,
        blocks: bucket,
        pageNum: bodyPage,
      });
      bodyPage += 1;
      bucket = [];
      used = 0;
    };

    for (const block of chapter.blocks) {
      const w = weight(block);
      const isHeading = block.t === "h" || block.t === "h2";
      if (bucket.length && (used + w > PAGE_BUDGET || (isHeading && used > PAGE_BUDGET * 0.55))) {
        flush();
      }
      bucket.push(block);
      used += w;
    }
    flush();
  }

  pages.push({
    kind: "end",
    density: "hard",
    title: "Конец учебника",
    blocks: [{ t: "p", v: "Прогресс сохраняется на этом устройстве. Можно вернуться к любой главе с полки." }],
  });

  if (pages.length % 2 !== 0) {
    pages.push({
      kind: "end",
      density: "hard",
      title: "",
      blocks: [],
    });
  }

  pages[tocIndex] = { kind: "toc", density: "soft", toc, pageNum: 0 };

  return { ...meta, chapters, compiled: pages };
}
