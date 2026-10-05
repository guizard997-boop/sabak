import { create } from "zustand";

type Progress = { page: number; updatedAt: number };

type LibraryState = {
  hydrated: boolean;
  progress: Record<string, Progress>;
  bookmarks: Record<string, number[]>;
  hydrate: () => void;
  setPage: (id: string, page: number) => void;
  toggleBookmark: (id: string, page: number) => void;
};

const KEY = "sabak-library-v1";

function readStorage(): Pick<LibraryState, "progress" | "bookmarks"> {
  if (typeof localStorage === "undefined") return { progress: {}, bookmarks: {} };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { progress: {}, bookmarks: {} };
    const parsed = JSON.parse(raw) as Partial<LibraryState>;
    return {
      progress: parsed.progress ?? {},
      bookmarks: parsed.bookmarks ?? {},
    };
  } catch {
    return { progress: {}, bookmarks: {} };
  }
}

function persist(state: Pick<LibraryState, "progress" | "bookmarks">) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore quota */
  }
}

export const useLibrary = create<LibraryState>((set, get) => ({
  hydrated: false,
  progress: {},
  bookmarks: {},
  hydrate: () => {
    if (get().hydrated) return;
    set({ ...readStorage(), hydrated: true });
  },
  setPage: (id, page) => {
    const next = {
      progress: { ...get().progress, [id]: { page, updatedAt: Date.now() } },
      bookmarks: get().bookmarks,
    };
    persist(next);
    set(next);
  },
  toggleBookmark: (id, page) => {
    const current = get().bookmarks[id] ?? [];
    const has = current.includes(page);
    const list = has ? current.filter((p) => p !== page) : [...current, page].sort((a, b) => a - b);
    const next = { progress: get().progress, bookmarks: { ...get().bookmarks, [id]: list } };
    persist(next);
    set(next);
  },
}));

export function lastReadId(progress: Record<string, Progress>): string | null {
  const entries = Object.entries(progress);
  if (!entries.length) return null;
  entries.sort((a, b) => b[1].updatedAt - a[1].updatedAt);
  return entries[0]?.[0] ?? null;
}
