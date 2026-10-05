import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { a as lastReadId, n as books, o as useLibrary, r as cn, t as BookCover } from "./books-B1pYdlRm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vVxoPXAj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUBJECTS = [
	{
		id: "all",
		label: "Все"
	},
	{
		id: "physics",
		label: "Физика"
	},
	{
		id: "chemistry",
		label: "Химия"
	},
	{
		id: "biology",
		label: "Биология"
	},
	{
		id: "algebra",
		label: "Алгебра"
	},
	{
		id: "geometry",
		label: "Геометрия"
	},
	{
		id: "informatics",
		label: "Информатика"
	},
	{
		id: "english",
		label: "English"
	},
	{
		id: "russian",
		label: "Русский"
	},
	{
		id: "kyrgyz",
		label: "Кыргыз тили"
	},
	{
		id: "kyrgyz-lit",
		label: "Адабият"
	},
	{
		id: "literature",
		label: "Литература"
	},
	{
		id: "history",
		label: "История"
	},
	{
		id: "civics",
		label: "Граждановедение"
	},
	{
		id: "geography",
		label: "География"
	},
	{
		id: "religion",
		label: "Религии"
	}
];
function LibraryHome() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [subject, setSubject] = (0, import_react.useState)("all");
	const hydrate = useLibrary((s) => s.hydrate);
	const progress = useLibrary((s) => s.progress);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	const resumeId = lastReadId(progress);
	const resume = resumeId ? books.find((b) => b.id === resumeId) : void 0;
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return books.filter((book) => {
			if (subject !== "all" && book.subject !== subject) return false;
			if (!q) return true;
			return [
				book.title,
				book.subtitle ?? "",
				book.authors,
				book.subjectLabel,
				book.blurb
			].join(" ").toLowerCase().includes(q);
		});
	}, [query, subject]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-4 pt-8 pb-4 md:px-10 md:pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.68rem] tracking-[0.22em] text-muted uppercase",
						children: "9 класс · Кыргызстан"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-serif text-4xl tracking-tight md:text-5xl",
						children: "Сабак"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
						children: "Полка учебников с живым перелистыванием. Листайте за угол страницы — как бумажный том."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 flex h-12 items-center gap-3 rounded-xl border border-border bg-surface px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Найти учебник",
							className: "h-full w-full bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2 overflow-x-auto pb-1",
						children: SUBJECTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSubject(item.id),
							className: cn("h-9 shrink-0 rounded-full border px-3 font-sans text-xs transition-colors duration-150", subject === item.id ? "border-accent bg-accent text-accent-fg" : "border-border bg-surface text-muted hover:text-fg"),
							children: item.label
						}, item.id))
					})
				]
			}),
			resume && !query && subject === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 pb-6 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book/$id",
					params: { id: resume.id },
					className: "flex items-center gap-4 rounded-xl border border-border bg-surface p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, { book: resume })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[0.68rem] tracking-[0.16em] text-muted uppercase",
								children: "Продолжить"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-serif text-lg",
								children: resume.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-sans text-xs text-muted tabular-nums",
								children: [
									"страница ",
									(progress[resume.id]?.page ?? 0) + 1,
									" из ",
									resume.compiled.length
								]
							})
						]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4 pb-16 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "library-grid grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
					children: filtered.map((book) => {
						const saved = progress[book.id]?.page;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/book/$id",
							params: { id: book.id },
							className: "shelf-book group block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, { book }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-[0.95rem] leading-snug",
										children: book.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 truncate font-sans text-xs text-muted",
										children: book.authors
									}),
									saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-sans text-[0.65rem] tracking-wide text-subtle uppercase tabular-nums",
										children: ["стр. ", saved + 1]
									}) : null
								]
							})]
						}, book.id);
					})
				}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-16 text-center font-serif text-muted",
					children: "На полке нет такого тома."
				}) : null]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryHome, {});
}
//#endregion
export { Home as component };
