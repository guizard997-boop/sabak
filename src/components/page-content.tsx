import katex from "katex";
import { BookCover } from "@/components/book-cover";
import type { Block, Book, CompiledPage } from "@/lib/books/types";

function Formula({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, { throwOnError: false, displayMode: true });
  return <div className="formula" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h":
            return (
              <h2 key={i} className="font-serif">
                {block.v}
              </h2>
            );
          case "h2":
            return (
              <h3 key={i} className="font-serif">
                {block.v}
              </h3>
            );
          case "p":
            return <p key={i}>{block.v}</p>;
          case "tex":
            return <Formula key={i} tex={block.v} />;
          case "ul":
            return (
              <ul key={i} className="mb-3 list-disc pl-4">
                {block.v.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-3 list-decimal pl-4">
                {block.v.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "note":
            return (
              <aside key={i} className="callout">
                {block.k ? (
                  <p className="mb-1 font-sans text-[0.68rem] font-medium tracking-[0.14em] text-ink-muted uppercase">
                    {block.k}
                  </p>
                ) : null}
                <p className="mb-0">{block.v}</p>
              </aside>
            );
          case "ex":
            return (
              <div key={i} className="exercise">
                <p className="mb-2 font-sans text-[0.68rem] font-medium tracking-[0.14em] text-ink-muted uppercase">
                  Упражнения
                </p>
                <ol className="list-decimal pl-4">
                  {block.v.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-3 border-l-2 border-ink/20 pl-3">
                <p className="mb-1 italic">{block.v}</p>
                {block.by ? <p className="mb-0 font-sans text-xs text-ink-muted">{block.by}</p> : null}
              </blockquote>
            );
          case "verse":
            return (
              <p key={i} className="my-3 italic">
                {block.v.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            );
          case "dlg":
            return (
              <div key={i} className="my-3 space-y-2">
                {block.v.map((line) => (
                  <p key={line.text} className="mb-0">
                    <span className="font-medium">{line.who}: </span>
                    {line.text}
                  </p>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export function PageContent({ book, page, index }: { book: Book; page: CompiledPage; index: number }) {
  if (page.kind === "cover") {
    return (
      <div data-cover={book.id} className="relative size-full">
        <BookCover book={book} className="size-full rounded-none" />
      </div>
    );
  }

  if (page.kind === "title") {
    return (
      <div className="sheet">
        <p className="font-sans text-[0.68rem] tracking-[0.16em] text-ink-muted uppercase">
          {book.subjectLabel} · {book.grade} класс
        </p>
        <h1 className="mt-6 font-serif text-[1.8rem] leading-tight font-semibold tracking-tight">{book.title}</h1>
        {book.subtitle ? <p className="mt-2 text-ink-muted">{book.subtitle}</p> : null}
        <p className="mt-6 mb-0">{book.authors}</p>
        <p className="mt-1 font-sans text-xs text-ink-muted">
          {book.publisher}
          {book.year ? ` · ${book.year}` : ""}
        </p>
        <div className="mt-8">
          <Blocks blocks={page.blocks ?? []} />
        </div>
      </div>
    );
  }

  if (page.kind === "toc") {
    return (
      <div className="sheet">
        <p className="sheet-header">
          <span>Содержание</span>
          <span>{book.title}</span>
        </p>
        <h2>Оглавление</h2>
        <ol className="mt-2 space-y-2">
          {(page.toc ?? []).map((row) => (
            <li key={row.n} className="list-none">
              <button
                type="button"
                data-goto={String(row.page)}
                className="flex w-full items-baseline justify-between gap-3 border-b border-dotted border-ink/20 py-1 text-left"
              >
                <span>
                  <span className="mr-2 font-sans text-xs text-ink-muted">{row.n}</span>
                  {row.title}
                </span>
                <span className="font-sans text-xs text-ink-muted tabular-nums">{row.page + 1}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (page.kind === "chapter") {
    return (
      <div className="sheet justify-center">
        <p className="font-sans text-[0.68rem] tracking-[0.18em] text-ink-muted uppercase">Глава {page.chapter}</p>
        <h2 className="mt-4 text-[1.6rem]">{page.chapterTitle}</h2>
      </div>
    );
  }

  if (page.kind === "end") {
    return (
      <div className="sheet justify-center">
        {page.title ? <h2>{page.title}</h2> : null}
        <Blocks blocks={page.blocks ?? []} />
      </div>
    );
  }

  return (
    <div className="sheet">
      <div className="sheet-header">
        <span>
          Гл. {page.chapter}. {page.chapterTitle}
        </span>
        <span className="tabular-nums">{page.pageNum ?? index}</span>
      </div>
      <Blocks blocks={page.blocks ?? []} />
    </div>
  );
}
