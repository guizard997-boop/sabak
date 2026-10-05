import type { BookPage } from "@/lib/library-db";

const TARGET_CHARS = 1400;

/**
 * Разбивает текст книги на страницы.
 * 1) Если есть строки-разделители `[PAGE]` — режем по ним.
 * 2) Иначе режем по абзацам (пустая строка) и копим абзацы до ~1400 знаков на страницу.
 */
export function parseBookText(raw: string): BookPage[] {
  const text = raw.replace(/\r\n?/g, "\n").replace(/^\uFEFF/, "").trim();
  if (!text) return [];

  if (/^\s*\[PAGE\]\s*$/im.test(text)) {
    return text
      .split(/^\s*\[PAGE\]\s*$/im)
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((chunk) => ({ text: chunk }));
  }

  const paragraphs = text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  const pages: BookPage[] = [];
  let bucket: string[] = [];
  let size = 0;
  const flush = () => {
    if (bucket.length) pages.push({ text: bucket.join("\n\n") });
    bucket = [];
    size = 0;
  };
  for (const para of paragraphs) {
    if (bucket.length && size + para.length > TARGET_CHARS) flush();
    bucket.push(para);
    size += para.length;
  }
  flush();
  return pages;
}

/** Читает текстовый файл; если UTF-8 даёт «кракозябры» (старые .txt в cp1251) — перечитывает как windows-1251. */
export async function readTextFile(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const utf8 = new TextDecoder("utf-8").decode(buf);
  if (!utf8.includes("\uFFFD")) return utf8;
  try {
    return new TextDecoder("windows-1251").decode(buf);
  } catch {
    return utf8;
  }
}

/** Картинка → уменьшенный JPEG data:-URL (обложка ≤ 600 px по ширине), чтобы не раздувать хранилище. */
export async function imageToDataUrl(file: File, maxWidth = 600): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / bitmap.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Не удалось обработать изображение");
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.85);
}
