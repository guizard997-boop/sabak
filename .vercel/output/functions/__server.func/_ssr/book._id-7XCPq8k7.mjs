import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, i as List, o as ChevronLeft, s as Bookmark, t as X } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-BJUkK6M2.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as getBook, o as useLibrary, r as cn, t as BookCover } from "./books-B1pYdlRm.mjs";
import { t as katex } from "../_libs/katex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book._id-7XCPq8k7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Formula({ tex }) {
	const html = katex.renderToString(tex, {
		throwOnError: false,
		displayMode: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "formula",
		dangerouslySetInnerHTML: { __html: html }
	});
}
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: blocks.map((block, i) => {
		switch (block.t) {
			case "h": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif",
				children: block.v
			}, i);
			case "h2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif",
				children: block.v
			}, i);
			case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.v }, i);
			case "tex": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { tex: block.v }, i);
			case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mb-3 list-disc pl-4",
				children: block.v.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}, i);
			case "ol": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mb-3 list-decimal pl-4",
				children: block.v.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}, i);
			case "note": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "callout",
				children: [block.k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 font-sans text-[0.68rem] font-medium tracking-[0.14em] text-ink-muted uppercase",
					children: block.k
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-0",
					children: block.v
				})]
			}, i);
			case "ex": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "exercise",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-sans text-[0.68rem] font-medium tracking-[0.14em] text-ink-muted uppercase",
					children: "Упражнения"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "list-decimal pl-4",
					children: block.v.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})]
			}, i);
			case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "my-3 border-l-2 border-ink/20 pl-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 italic",
					children: block.v
				}), block.by ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-0 font-sans text-xs text-ink-muted",
					children: block.by
				}) : null]
			}, i);
			case "verse": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "my-3 italic",
				children: block.v.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: line
				}, line))
			}, i);
			case "dlg": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-3 space-y-2",
				children: block.v.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: [line.who, ": "]
					}), line.text]
				}, line.text))
			}, i);
			default: return null;
		}
	}) });
}
function PageContent({ book, page, index }) {
	if (page.kind === "cover") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-cover": book.id,
		className: "relative size-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, {
			book,
			className: "size-full rounded-none"
		})
	});
	if (page.kind === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-[0.68rem] tracking-[0.16em] text-ink-muted uppercase",
				children: [
					book.subjectLabel,
					" · ",
					book.grade,
					" класс"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-serif text-[1.8rem] leading-tight font-semibold tracking-tight",
				children: book.title
			}),
			book.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-ink-muted",
				children: book.subtitle
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 mb-0",
				children: book.authors
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-sans text-xs text-ink-muted",
				children: [book.publisher, book.year ? ` · ${book.year}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: page.blocks ?? [] })
			})
		]
	});
	if (page.kind === "toc") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sheet-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Содержание" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: book.title })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Оглавление" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-2 space-y-2",
				children: (page.toc ?? []).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "list-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-goto": String(row.page),
						className: "flex w-full items-baseline justify-between gap-3 border-b border-dotted border-ink/20 py-1 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 font-sans text-xs text-ink-muted",
							children: row.n
						}), row.title] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs text-ink-muted tabular-nums",
							children: row.page + 1
						})]
					})
				}, row.n))
			})
		]
	});
	if (page.kind === "chapter") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-sans text-[0.68rem] tracking-[0.18em] text-ink-muted uppercase",
			children: ["Глава ", page.chapter]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 text-[1.6rem]",
			children: page.chapterTitle
		})]
	});
	if (page.kind === "end") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet justify-center",
		children: [page.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: page.title }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: page.blocks ?? [] })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sheet-header",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Гл. ",
				page.chapter,
				". ",
				page.chapterTitle
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums",
				children: page.pageNum ?? index
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: page.blocks ?? [] })]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-sans text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-40 disabled:pointer-events-none active:scale-[0.96]", {
	variants: {
		variant: {
			solid: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-raised",
			quiet: "bg-raised text-fg hover:bg-surface border border-border",
			paper: "bg-paper text-ink hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3",
			md: "h-11 px-4",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "ghost",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function BookReader({ book }) {
	const mountRef = (0, import_react.useRef)(null);
	const templateRef = (0, import_react.useRef)(null);
	const apiRef = (0, import_react.useRef)(null);
	const [page, setPage] = (0, import_react.useState)(0);
	const [tocOpen, setTocOpen] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const progress = useLibrary((s) => s.progress[book.id]);
	const bookmarks = useLibrary((s) => s.bookmarks[book.id] ?? []);
	const setProgress = useLibrary((s) => s.setPage);
	const toggleBookmark = useLibrary((s) => s.toggleBookmark);
	const hydrate = useLibrary((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		const mount = mountRef.current;
		const template = templateRef.current;
		if (!mount || !template) return;
		let cancelled = false;
		let pf = null;
		let host = null;
		let onKey = null;
		let onGoto = null;
		import("../_libs/page-flip.mjs").then((n) => n.t).then(({ PageFlip }) => {
			if (cancelled || !mountRef.current || !templateRef.current) return;
			host = document.createElement("div");
			host.className = "book-host w-full";
			mount.appendChild(host);
			const clones = [...templateRef.current.children].map((node) => node.cloneNode(true));
			for (const clone of clones) host.appendChild(clone);
			const instance = new PageFlip(host, {
				width: 420,
				height: 620,
				size: "stretch",
				minWidth: 280,
				maxWidth: 540,
				minHeight: 400,
				maxHeight: 780,
				showCover: true,
				drawShadow: true,
				flippingTime: 800,
				usePortrait: true,
				maxShadowOpacity: .45,
				mobileScrollSupport: true,
				swipeDistance: 28,
				startZIndex: 2,
				autoSize: true,
				clickEventForward: true
			});
			instance.loadFromHTML(clones);
			pf = instance;
			apiRef.current = instance;
			instance.on("flip", (e) => {
				const idx = Number(e.data) || 0;
				setPage(idx);
				setProgress(book.id, idx);
			});
			instance.on("init", () => {
				const start = useLibrary.getState().progress[book.id]?.page ?? 0;
				if (start > 0) instance.turnToPage(start);
				setPage(instance.getCurrentPageIndex());
				setReady(true);
			});
			onGoto = (event) => {
				const btn = event.target?.closest?.("[data-goto]");
				if (!btn || !pf) return;
				event.preventDefault();
				event.stopPropagation();
				pf.turnToPage(Number(btn.dataset.goto));
			};
			host.addEventListener("click", onGoto);
			onKey = (event) => {
				if (event.key === "ArrowRight") instance.flipNext();
				if (event.key === "ArrowLeft") instance.flipPrev();
			};
			window.addEventListener("keydown", onKey);
		});
		return () => {
			cancelled = true;
			if (onKey) window.removeEventListener("keydown", onKey);
			if (host && onGoto) host.removeEventListener("click", onGoto);
			try {
				pf?.destroy();
			} catch {}
			apiRef.current = null;
			mount.innerHTML = "";
			setReady(false);
		};
	}, [book.id, setProgress]);
	const count = book.compiled.length;
	const bookmarked = bookmarks.includes(page);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reader-stage flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2 px-3 py-2 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "На полку",
						className: "inline-flex size-11 items-center justify-center rounded-md text-fg transition-transform duration-150 ease-out hover:bg-raised active:scale-[0.96]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-serif text-base leading-tight",
							children: book.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-sans text-xs text-muted",
							children: book.authors
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						"aria-label": "Оглавление",
						onClick: () => setTocOpen((v) => !v),
						className: cn(tocOpen && "bg-raised"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						"aria-label": "Закладка",
						onClick: () => toggleBookmark(book.id, page),
						className: cn(bookmarked && "text-accent"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-5", bookmarked && "fill-current") })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: templateRef,
						className: "hidden",
						"aria-hidden": true,
						children: book.compiled.map((leaf, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "page-leaf",
							"data-density": leaf.density,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContent, {
								book,
								page: leaf,
								index
							})
						}, `${book.id}-${index}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: mountRef,
						className: "mx-auto w-full max-w-[980px]"
					}),
					!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute font-serif text-muted",
						children: "Открываем том…"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-center justify-between gap-3 px-3 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						"aria-label": "Назад",
						onClick: () => apiRef.current?.flipPrev(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-xs tracking-wide text-muted tabular-nums",
						children: [
							page + 1,
							" / ",
							count
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						"aria-label": "Вперёд",
						onClick: () => apiRef.current?.flipNext(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}),
			tocOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 right-0 z-20 flex w-[min(100%,20rem)] flex-col border-l border-border bg-surface p-4 shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg",
						children: "Оглавление"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						"aria-label": "Закрыть",
						onClick: () => setTocOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "min-h-0 flex-1 overflow-auto",
					children: book.chapters.map((chapter) => {
						const idx = book.compiled.findIndex((pg) => pg.kind === "chapter" && pg.chapter === chapter.n);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-baseline gap-3 border-b border-border py-3 text-left",
							onClick: () => {
								apiRef.current?.turnToPage(idx < 0 ? 0 : idx);
								setTocOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 font-sans text-xs text-muted",
								children: chapter.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif",
								children: chapter.title
							})]
						}, chapter.n);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "sr-only",
				children: ["Прогресс сохранён: страница ", progress?.page ?? 0]
			})
		]
	});
}
function BookPage() {
	const { id } = Route.useParams();
	const book = getBook(id);
	if (!book) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-3 bg-bg px-6 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-2xl",
			children: "Такого тома нет"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "font-sans text-sm text-muted underline",
			children: "На полку"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookReader, { book });
}
//#endregion
export { BookPage as component };
