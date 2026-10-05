export type Subject =
  | "physics"
  | "chemistry"
  | "biology"
  | "algebra"
  | "geometry"
  | "english"
  | "russian"
  | "kyrgyz"
  | "kyrgyz-lit"
  | "literature"
  | "history"
  | "civics"
  | "geography"
  | "religion"
  | "informatics";

export type Lang = "ru" | "ky" | "en";

export type Block =
  | { t: "p"; v: string }
  | { t: "h"; v: string }
  | { t: "h2"; v: string }
  | { t: "tex"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ol"; v: string[] }
  | { t: "note"; v: string; k?: string }
  | { t: "ex"; v: string[] }
  | { t: "quote"; v: string; by?: string }
  | { t: "verse"; v: string[] }
  | { t: "dlg"; v: { who: string; text: string }[] };

export type Chapter = {
  n: string;
  title: string;
  blocks: Block[];
};

export type BookMeta = {
  id: string;
  title: string;
  subtitle?: string;
  authors: string;
  subject: Subject;
  subjectLabel: string;
  grade: string;
  lang: Lang;
  year?: string;
  publisher?: string;
  blurb: string;
  pagesEstimate: number;
};

export type CompiledPage = {
  kind: "cover" | "title" | "toc" | "chapter" | "text" | "end";
  chapter?: string;
  chapterTitle?: string;
  title?: string;
  blocks?: Block[];
  pageNum?: number;
  density: "hard" | "soft";
  toc?: { n: string; title: string; page: number }[];
};

export type Book = BookMeta & {
  chapters: Chapter[];
  compiled: CompiledPage[];
};

export const SUBJECTS: { id: Subject | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "physics", label: "Физика" },
  { id: "chemistry", label: "Химия" },
  { id: "biology", label: "Биология" },
  { id: "algebra", label: "Алгебра" },
  { id: "geometry", label: "Геометрия" },
  { id: "informatics", label: "Информатика" },
  { id: "english", label: "English" },
  { id: "russian", label: "Русский" },
  { id: "kyrgyz", label: "Кыргыз тили" },
  { id: "kyrgyz-lit", label: "Адабият" },
  { id: "literature", label: "Литература" },
  { id: "history", label: "История" },
  { id: "civics", label: "Граждановедение" },
  { id: "geography", label: "География" },
  { id: "religion", label: "Религии" },
];
