import { physicsBook } from "./content/physics";
import { chemistryBook } from "./content/chemistry";
import { biologyBook } from "./content/biology";
import { algebraBook } from "./content/algebra";
import { geometryBook } from "./content/geometry";
import { englishBook } from "./content/english";
import { russianBook } from "./content/russian";
import { kyrgyzLangBook } from "./content/kyrgyz-lang";
import { kyrgyzLitBook } from "./content/kyrgyz-lit";
import { literatureBook } from "./content/literature";
import { historyKgBook } from "./content/history-kg";
import { sovereignBook } from "./content/sovereign";
import { geographyBook } from "./content/geography";
import { religionsBook } from "./content/religions";
import { informaticsBook } from "./content/informatics";
import type { Book } from "./types";

export const books: Book[] = [
  physicsBook,
  chemistryBook,
  biologyBook,
  algebraBook,
  geometryBook,
  informaticsBook,
  englishBook,
  russianBook,
  kyrgyzLangBook,
  kyrgyzLitBook,
  literatureBook,
  historyKgBook,
  sovereignBook,
  geographyBook,
  religionsBook,
];

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export { SUBJECTS } from "./types";
export type { Book, BookMeta, Subject } from "./types";
