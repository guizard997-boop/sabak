import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/books-B1pYdlRm.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Art({ id }) {
	switch (id) {
		case "physics": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1b6564"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "78",
					width: "118",
					height: "150",
					fill: "#d8c48a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: "#1a1612",
					strokeWidth: "1.2",
					children: [
						Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M14 ${90 + i * 14} H132`,
							opacity: "0.25"
						}, `h${i}`)),
						Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M${28 + i * 14} 78 V228`,
							opacity: "0.25"
						}, `v${i}`)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "108",
							cy: "148",
							r: "28",
							fill: "#efe6c9",
							stroke: "#1a1612"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "108",
							cy: "148",
							r: "3",
							fill: "#1a1612"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M108 148 L126 136",
							stroke: "#b42318",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M36 118 H78",
							stroke: "#1a1612"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 170 V118" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "44",
							y: "168",
							width: "52",
							height: "10",
							fill: "#4a4a4a"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 173 C108 173 118 168 128 173 C138 178 148 170 158 173" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "48",
					fill: "#e7f1ea",
					fontSize: "22",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "ФИЗИКА"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "154",
					y: "250",
					fill: "#0e3a3c",
					fontSize: "72",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "chemistry": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1f6a3e"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "58",
					cy: "150",
					r: "46",
					fill: "none",
					stroke: "#d6e86a",
					strokeWidth: "10"
				}),
				Array.from({ length: 12 }, (_, i) => {
					const a = i / 12 * Math.PI * 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: 58 + Math.cos(a) * 46,
						cy: 150 + Math.sin(a) * 46,
						r: "6",
						fill: "#d6e86a"
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: "#d6e86a",
					strokeWidth: "1.4",
					transform: "translate(118,118)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 0 L10 16 L-10 16 L-20 0 L-10 -16 L10 -16 Z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "20",
							cy: "0",
							r: "3",
							fill: "#d6e86a"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "-20",
							cy: "0",
							r: "3",
							fill: "#d6e86a"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "78",
					fill: "#e8f5e4",
					fontSize: "18",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					transform: "rotate(90 168 78)",
					children: "ХИМИЯ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "268",
					fill: "#d6e86a",
					fontSize: "56",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "biology": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#2d6b32"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "150",
					r: "62",
					fill: "#1e4c24"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 88 A62 62 0 0 1 100 212 A40 40 0 0 0 100 88",
					fill: "#c45c2c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 88 A62 62 0 0 0 100 212 A40 40 0 0 1 100 88",
					fill: "#3d8a8a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "100",
					cy: "150",
					r: "28",
					fill: "#f3f6e8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "100",
					y: "160",
					textAnchor: "middle",
					fill: "#2d6b32",
					fontSize: "28",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "42",
					fill: "#f3f6e8",
					fontSize: "18",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "БИОЛОГИЯ"
				})
			]
		});
		case "algebra": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#6fa8c4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "#102030",
					strokeWidth: "0.6",
					opacity: "0.25",
					children: [Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M0 ${i * 26} H200` }, i)), Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M${i * 26} 0 V300` }, `v${i}`))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 220 L80 40 L160 160",
					fill: "none",
					stroke: "#102030",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "48",
					fill: "#102030",
					fontSize: "22",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "АЛГЕБРА"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "270",
					fill: "#102030",
					fontSize: "48",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "geometry": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#d37a32"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 230 L100 70 L160 230 Z",
					fill: "none",
					stroke: "#2a1408",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M70 150 L130 150 L100 70 Z",
					fill: "none",
					stroke: "#2a1408",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "178",
					y: "70",
					fill: "#2a1408",
					fontSize: "16",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					transform: "rotate(90 178 70)",
					children: "ГЕОМЕТРИЯ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "274",
					fill: "#2a1408",
					fontSize: "42",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "7–11"
				})
			]
		});
		case "informatics": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#5a2438"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "28",
					y: "150",
					width: "90",
					height: "70",
					rx: "6",
					fill: "#c4a574"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M118 186 H160 V140",
					fill: "none",
					stroke: "#e8d3b0",
					strokeWidth: "8",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "128",
					r: "10",
					fill: "#e8d3b0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "48",
					fill: "#f4e6ea",
					fontSize: "16",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "ИНФОРМАТИКА"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "78",
					fill: "#e8d3b0",
					fontSize: "28",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "7–9"
				})
			]
		});
		case "english": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1d7ec4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "40",
					r: "36",
					fill: "#f4d36a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M-10 210 C60 150 140 230 220 170 L220 300 L-10 300 Z",
					fill: "#3fa34d"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 150 L90 118 L168 132 L90 142 Z",
					fill: "#eef6ff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "70",
					cy: "132",
					r: "10",
					fill: "#1d7ec4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "56",
					fill: "#f4fbff",
					fontSize: "14",
					fontFamily: "Manrope, sans-serif",
					fontWeight: "700",
					children: "Take Off"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "78",
					fill: "#f4fbff",
					fontSize: "12",
					fontFamily: "Manrope, sans-serif",
					children: "with English"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "268",
					fill: "#f4d36a",
					fontSize: "64",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "russian": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#8a6a2b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "18",
					y: "18",
					width: "164",
					height: "264",
					fill: "none",
					stroke: "#f8eed6",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "48",
					fill: "#f8eed6",
					fontSize: "16",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					transform: "rotate(90 168 48)",
					children: "РУССКИЙ ЯЗЫК"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "36",
					y: "180",
					fill: "#f8eed6",
					fontSize: "88",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "kyrgyz-lang": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1d4f86"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "64",
					fill: "#eaf2fb",
					fontSize: "20",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "КЫРГЫЗ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "90",
					fill: "#eaf2fb",
					fontSize: "20",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "ТИЛИ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: "#eaf2fb",
					strokeWidth: "1.2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "120",
							y: "40",
							width: "48",
							height: "56"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "120",
							y: "108",
							width: "48",
							height: "56"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "120",
							y: "176",
							width: "48",
							height: "56"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "260",
					fill: "#eaf2fb",
					fontSize: "64",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "kyrgyz-lit": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#6b3a1e"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "150",
					width: "120",
					height: "90",
					fill: "#c4a574"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 150 L100 110 L160 150",
					fill: "#8c5a32"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "48",
					fill: "#f6ead8",
					fontSize: "16",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "Кыргыз"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "72",
					fill: "#f6ead8",
					fontSize: "16",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "адабияты"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "148",
					y: "270",
					fill: "#f6ead8",
					fontSize: "48",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "literature": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#cbb99a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "54",
					y: "86",
					width: "92",
					height: "110",
					fill: "#5d5346"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "62",
					y: "96",
					width: "76",
					height: "50",
					fill: "#9aa7b0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "48",
					fill: "#2a2218",
					fontSize: "16",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "ЛИТЕРАТУРА"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "72",
					fill: "#2a2218",
					fontSize: "22",
					fontFamily: "Literata, serif",
					children: "9"
				})
			]
		});
		case "history-kg": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1f4d73"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "18",
					y: "86",
					width: "164",
					height: "70",
					fill: "#d9d3c6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "28",
					y: "100",
					width: "40",
					height: "44",
					fill: "#4d5c66"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "80",
					y: "100",
					width: "28",
					height: "50",
					fill: "#6a7c86"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M80 94 L94 70 L108 94",
					fill: "#6a7c86"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "48",
					fill: "#eef5fb",
					fontSize: "14",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "ИСТОРИЯ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "68",
					fill: "#eef5fb",
					fontSize: "14",
					fontFamily: "Literata, serif",
					children: "КЫРГЫЗСТАНА"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "270",
					fill: "#eef5fb",
					fontSize: "48",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "sovereign": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1a5fa0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "20",
					y: "70",
					width: "160",
					height: "90",
					fill: "#9ec0e0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "86",
					y: "108",
					width: "10",
					height: "52",
					fill: "#c4a032"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "70",
					y: "96",
					width: "42",
					height: "22",
					fill: "#c0392b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "91",
					cy: "107",
					r: "6",
					fill: "#f4d36a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "188",
					fill: "#f2f7fc",
					fontSize: "11",
					fontFamily: "Manrope, sans-serif",
					fontWeight: "600",
					children: "СУВЕРЕННЫЙ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "206",
					fill: "#f2f7fc",
					fontSize: "11",
					fontFamily: "Manrope, sans-serif",
					fontWeight: "600",
					children: "КЫРГЫЗСТАН"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "270",
					fill: "#f2f7fc",
					fontSize: "48",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		case "geography": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#2f4c7a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 80 C70 70 90 90 120 86 C150 82 170 100 176 130 C180 160 150 190 120 200 C80 214 50 190 36 150 C28 120 24 90 40 80 Z",
					fill: "#d9e4f2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M70 120 C90 110 130 130 140 160",
					fill: "none",
					stroke: "#2f4c7a",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "178",
					y: "48",
					fill: "#eef3fa",
					fontSize: "13",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					transform: "rotate(90 178 48)",
					children: "ГЕОГРАФИЯ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "18",
					y: "270",
					fill: "#eef3fa",
					fontSize: "28",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "8–9"
				})
			]
		});
		case "religions": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 300",
			className: "absolute inset-0 size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "300",
					fill: "#1c2430"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 40 L160 100 L100 160 L40 100 Z",
					fill: "#c5b8a8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 100 L160 160 L100 220 L40 160 Z",
					fill: "#3d4654"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "48",
					fill: "#f3efe4",
					fontSize: "13",
					fontFamily: "Manrope, sans-serif",
					fontWeight: "600",
					children: "ИСТОРИЯ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "66",
					fill: "#f3efe4",
					fontSize: "13",
					fontFamily: "Manrope, sans-serif",
					fontWeight: "600",
					children: "РАЗВИТИЯ РЕЛИГИЙ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "24",
					y: "270",
					fill: "#c5b8a8",
					fontSize: "48",
					fontFamily: "Literata, serif",
					fontWeight: "700",
					children: "9"
				})
			]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-raised" });
	}
}
function BookCover({ book, className, showMeta = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-cover": book.id,
		className: cn("book-cover", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, { id: book.id }), showMeta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 bottom-0 z-2 p-3 bg-linear-to-t from-black/50 to-transparent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-sm leading-tight",
				children: book.title
			})
		}) : null]
	});
}
var KEY = "sabak-library-v1";
function readStorage() {
	if (typeof localStorage === "undefined") return {
		progress: {},
		bookmarks: {}
	};
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {
			progress: {},
			bookmarks: {}
		};
		const parsed = JSON.parse(raw);
		return {
			progress: parsed.progress ?? {},
			bookmarks: parsed.bookmarks ?? {}
		};
	} catch {
		return {
			progress: {},
			bookmarks: {}
		};
	}
}
function persist(state) {
	try {
		localStorage.setItem(KEY, JSON.stringify(state));
	} catch {}
}
var useLibrary = create((set, get) => ({
	hydrated: false,
	progress: {},
	bookmarks: {},
	hydrate: () => {
		if (get().hydrated) return;
		set({
			...readStorage(),
			hydrated: true
		});
	},
	setPage: (id, page) => {
		const next = {
			progress: {
				...get().progress,
				[id]: {
					page,
					updatedAt: Date.now()
				}
			},
			bookmarks: get().bookmarks
		};
		persist(next);
		set(next);
	},
	toggleBookmark: (id, page) => {
		const current = get().bookmarks[id] ?? [];
		const list = current.includes(page) ? current.filter((p) => p !== page) : [...current, page].sort((a, b) => a - b);
		const next = {
			progress: get().progress,
			bookmarks: {
				...get().bookmarks,
				[id]: list
			}
		};
		persist(next);
		set(next);
	}
}));
function lastReadId(progress) {
	const entries = Object.entries(progress);
	if (!entries.length) return null;
	entries.sort((a, b) => b[1].updatedAt - a[1].updatedAt);
	return entries[0]?.[0] ?? null;
}
function weight(block) {
	switch (block.t) {
		case "h": return 48;
		case "h2": return 36;
		case "p": return Math.max(28, Math.ceil(block.v.length / 2.2));
		case "tex": return 56;
		case "ul":
		case "ol": return 24 + block.v.length * 28;
		case "note": return 40 + Math.ceil(block.v.length / 2.4);
		case "ex": return 36 + block.v.length * 32;
		case "quote": return 40 + Math.ceil(block.v.length / 2.6);
		case "verse": return 28 + block.v.length * 22;
		case "dlg": return 20 + block.v.length * 26;
		default: return 32;
	}
}
var PAGE_BUDGET = 420;
function compileBook(meta, chapters) {
	const pages = [];
	pages.push({
		kind: "cover",
		density: "hard"
	});
	pages.push({
		kind: "title",
		density: "hard",
		title: meta.title,
		blocks: [{
			t: "p",
			v: meta.blurb
		}, {
			t: "note",
			k: "О тексте",
			v: "Внутри — полный учебный курс по программе 9 класса: теория, формулы, примеры и упражнения. Текст написан для чтения в этом приложении и следует программе указанных изданий."
		}]
	});
	const tocIndex = pages.length;
	pages.push({
		kind: "toc",
		density: "soft",
		toc: []
	});
	const toc = [];
	let bodyPage = 1;
	for (const chapter of chapters) {
		pages.push({
			kind: "chapter",
			density: "soft",
			chapter: chapter.n,
			chapterTitle: chapter.title,
			pageNum: bodyPage
		});
		toc.push({
			n: chapter.n,
			title: chapter.title,
			page: pages.length - 1
		});
		bodyPage += 1;
		let bucket = [];
		let used = 0;
		const flush = () => {
			if (!bucket.length) return;
			pages.push({
				kind: "text",
				density: "soft",
				chapter: chapter.n,
				chapterTitle: chapter.title,
				blocks: bucket,
				pageNum: bodyPage
			});
			bodyPage += 1;
			bucket = [];
			used = 0;
		};
		for (const block of chapter.blocks) {
			const w = weight(block);
			const isHeading = block.t === "h" || block.t === "h2";
			if (bucket.length && (used + w > PAGE_BUDGET || isHeading && used > PAGE_BUDGET * .55)) flush();
			bucket.push(block);
			used += w;
		}
		flush();
	}
	pages.push({
		kind: "end",
		density: "hard",
		title: "Конец учебника",
		blocks: [{
			t: "p",
			v: "Прогресс сохраняется на этом устройстве. Можно вернуться к любой главе с полки."
		}]
	});
	if (pages.length % 2 !== 0) pages.push({
		kind: "end",
		density: "hard",
		title: "",
		blocks: []
	});
	pages[tocIndex] = {
		kind: "toc",
		density: "soft",
		toc,
		pageNum: 0
	};
	return {
		...meta,
		chapters,
		compiled: pages
	};
}
var p$14 = (v) => ({
	t: "p",
	v
});
var h$14 = (v) => ({
	t: "h",
	v
});
var h2$14 = (v) => ({
	t: "h2",
	v
});
var tex$4 = (v) => ({
	t: "tex",
	v
});
var ul$14 = (v) => ({
	t: "ul",
	v
});
var ol = (v) => ({
	t: "ol",
	v
});
var note$14 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$11 = (v) => ({
	t: "ex",
	v
});
var physicsBook = compileBook({
	id: "physics",
	title: "Физика",
	subtitle: "Механика",
	authors: "И. К. Кикоин, А. К. Кикоин",
	subject: "physics",
	subjectLabel: "Физика",
	grade: "9",
	lang: "ru",
	year: "1992",
	publisher: "Просвещение",
	blurb: "Классический курс механики для 9 класса: движение, силы Ньютона, импульс, работа и энергия. Формулы, рисунки в тексте задач и разбор приёмов решения.",
	pagesEstimate: 256
}, [
	{
		n: "1",
		title: "Что изучает механика",
		blocks: [
			h$14("Механическое движение"),
			p$14("Механика описывает движение тел и причины, которые это движение изменяют. Тело движется, если с течением времени меняется его положение относительно других тел. Чтобы говорить о движении, нужно выбрать тело отсчёта — то, которое в данной задаче считаем неподвижным."),
			p$14("Система отсчёта — это тело отсчёта, связанная с ним система координат и прибор для измерения времени. В школьных задачах чаще всего берут Землю, дорогу или стену лаборатории."),
			h2$14("Материальная точка"),
			p$14("Если размеры тела малы по сравнению с расстоянием, на которое оно перемещается, тело заменяют материальной точкой — моделью с массой, но без размеров. Земля на орбите — почти точка. Тот же Земной шар при изучении суток — уже протяжённое тело, которое вращается."),
			note$14("Траектория — линия, вдоль которой движется точка. Путь — длина траектории. Перемещение — вектор из начальной точки в конечную. Путь всегда неотрицателен, перемещение может быть нулевым, если тело вернулось.", "Три величины"),
			tex$4("\\vec{s} = \\vec{r} - \\vec{r}_0"),
			p$14("Прямолинейное движение — траектория прямая. Криволинейное — дуга, окружность, парабола. Равномерное — модуль скорости постоянен. Равноускоренное — ускорение постоянно по модулю и направлению.")
		]
	},
	{
		n: "2",
		title: "Скорость и равномерное движение",
		blocks: [
			h$14("Средняя и мгновенная скорость"),
			p$14("Средняя путевая скорость — отношение пути ко времени. Она удобна, когда важно «сколько километров в час», но не показывает направление. Векторная средняя скорость — отношение перемещения ко времени."),
			tex$4("v_{\\text{ср}} = \\frac{s}{t}, \\qquad \\langle \\vec{v} \\rangle = \\frac{\\Delta \\vec{r}}{\\Delta t}"),
			p$14("Мгновенная скорость — предел средней при бесконечно малом интервале. На графике координаты это наклон касательной. На спидометре автомобиля как раз мгновенный модуль скорости."),
			h2$14("Равномерное прямолинейное движение"),
			p$14("Если скорость постоянна и по модулю, и по направлению, движение равномерное прямолинейное. Координата меняется линейно:"),
			tex$4("x = x_0 + v_x t"),
			p$14("График x(t) — прямая. График v(t) — горизонтальная линия. Площадь под графиком v(t) численно равна перемещению."),
			note$14("Относительная скорость. Если лодка плывёт со скоростью \\vec{v}_{лд} относительно воды, а течение имеет скорость \\vec{v}_{дз} относительно берега, то скорость лодки относительно берега \\vec{v}_{лз} = \\vec{v}_{лд} + \\vec{v}_{дз}.", "Сложение скоростей"),
			ex$11([
				"Велосипедист проехал 12 км за 40 мин. Найдите среднюю путевую скорость в м/с и км/ч.",
				"Катер идёт по течению 18 км/ч, скорость течения 3 км/ч. Какова скорость катера в стоячей воде?",
				"Пешеход прошёл 400 м на север и 300 м на восток. Найдите путь и модуль перемещения."
			])
		]
	},
	{
		n: "3",
		title: "Ускорение. Равноускоренное движение",
		blocks: [
			h$14("Ускорение"),
			p$14("Ускорение показывает, как быстро меняется скорость. Если за время Δt скорость изменилась на Δv, среднее ускорение"),
			tex$4("\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}"),
			p$14("Единица ускорения — м/с². Знак проекции ускорения зависит от выбранной оси: если скорость растёт в направлении оси, aₓ > 0."),
			h2$14("Формулы равноускоренного движения"),
			tex$4("v_x = v_{0x} + a_x t"),
			tex$4("s_x = v_{0x} t + \\frac{a_x t^2}{2}"),
			tex$4("v_x^2 - v_{0x}^2 = 2 a_x s_x"),
			p$14("Последняя формула удобна, когда время неизвестно. Если тело тормозит до остановки, v = 0, и тормозной путь s = v₀² / (2a)."),
			h2$14("Свободное падение"),
			p$14("Вблизи Земли все тела падают с одинаковым ускорением g ≈ 9,8 м/с², направленным вниз, если сопротивлением воздуха можно пренебречь. Это открытие Галилея: перо и молоток на Луне падают одинаково."),
			tex$4("h = \\frac{g t^2}{2}, \\qquad v = g t \\quad (\\text{падение из покоя})"),
			note$14("Тело, брошенное вертикально вверх со скоростью v₀, поднимается время t = v₀/g и на высоту H = v₀²/(2g). В верхней точке скорость равна нулю, ускорение по-прежнему g вниз.", "Вверх и вниз"),
			ex$11([
				"Автомобиль разгоняется с 0 до 20 м/с за 10 с. Найдите ускорение и путь.",
				"Камень бросили вверх со скоростью 20 м/с. Через сколько секунд он вернётся? Примите g = 10 м/с².",
				"Поезд тормозит с ускорением 0,5 м/с² с скорости 72 км/ч. Найдите тормозной путь."
			])
		]
	},
	{
		n: "4",
		title: "Законы Ньютона",
		blocks: [
			h$14("Первый закон — инерция"),
			p$14("Существуют системы отсчёта, в которых тело сохраняет скорость, если на него не действуют силы или равнодействующая равна нулю. Такие системы называют инерциальными. Земля — почти инерциальная система для школьных задач."),
			p$14("Инерция — свойство тела сохранять скорость. Чем больше масса, тем «упрямее» тело: его труднее разогнать и труднее остановить."),
			h2$14("Второй закон"),
			p$14("Ускорение тела пропорционально равнодействующей силе и обратно пропорционально массе:"),
			tex$4("\\vec{F} = m \\vec{a} \\qquad \\text{или} \\qquad \\vec{a} = \\frac{\\vec{F}}{m}"),
			p$14("Сила измеряется в ньютонах: 1 Н = 1 кг·м/с². Это сила, которая телу массой 1 кг сообщает ускорение 1 м/с²."),
			h2$14("Третий закон"),
			p$14("Силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению. Они приложены к разным телам, поэтому не уравновешивают друг друга."),
			tex$4("\\vec{F}_{12} = - \\vec{F}_{21}"),
			note$14("Когда вы прыгаете с лодки на берег, лодка отплывает назад. Импульс, который вы получили вперёд, лодка получила назад. Третий закон Ньютона — это всегда пара.", "Пара сил"),
			p$14("Вес — сила, с которой тело давит на опору или растягивает подвес. В покое P = mg. При ускорении вверх P = m(g + a), в свободном падении вес равен нулю — невесомость.")
		]
	},
	{
		n: "5",
		title: "Силы в механике",
		blocks: [
			h$14("Сила тяжести"),
			p$14("Земля притягивает тело с силой, которую вблизи поверхности считают постоянной:"),
			tex$4("\\vec{F}_т = m \\vec{g}"),
			p$14("Точка приложения — центр тяжести. Для однородного шара это геометрический центр."),
			h2$14("Сила упругости. Закон Гука"),
			p$14("Деформированная пружина стремится вернуться. При малых деформациях сила пропорциональна удлинению и направлена против смещения:"),
			tex$4("F_{упр} = - k x"),
			p$14("k — жёсткость, единица Н/м. Знак минус напоминает: сила против смещения. На графике F(x) — прямая через начало координат, пока пружина не вышла из области упругости."),
			h2$14("Сила трения"),
			p$14("Трение покоя не даёт телу сдвинуться: оно подстраивается под внешнюю силу, пока не достигнет максимума μN. Трение скольжения при движении обычно считают постоянным:"),
			tex$4("F_{тр} = \\mu N"),
			p$14("N — сила нормальной реакции опоры. На горизонтальной поверхности N = mg. На наклонной плоскости с углом α: N = mg cos α, составляющая тяжести вдоль спуска mg sin α."),
			ul$14([
				"Трение покоя — причина ходьбы: нога толкает Землю назад, Земля толкает нас вперёд.",
				"Трение скольжения нагревает трущиеся поверхности.",
				"Трение качения обычно меньше трения скольжения — поэтому колёса выгодны."
			]),
			ex$11([
				"Пружина жёсткостью 200 Н/м растянута на 4 см. Найдите силу упругости.",
				"Брусок 2 кг лежит на горизонтальном столе, μ = 0,3. Какая минимальная сила сдвинет брусок?",
				"На наклонной плоскости 30° лежит брусок. Чему равна сила трения покоя, если брусок не скользит? Масса 1 кг."
			])
		]
	},
	{
		n: "6",
		title: "Импульс. Закон сохранения",
		blocks: [
			h$14("Импульс тела"),
			p$14("Импульс — произведение массы на скорость. Это вектор. Второй закон Ньютона удобно записать через изменение импульса:"),
			tex$4("\\vec{p} = m \\vec{v}, \\qquad \\vec{F}\\Delta t = \\Delta \\vec{p}"),
			p$14("Произведение силы на время называют импульсом силы. Удар молотка короткий, сила большая — изменение импульса гвоздя заметное."),
			h2$14("Замкнутая система"),
			p$14("Если сумма внешних сил равна нулю (или проекция на выбранную ось равна нулю), суммарный импульс системы сохраняется:"),
			tex$4("m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{u}_1 + m_2 \\vec{u}_2"),
			p$14("Отдача ружья, стыковка кораблей, разрыв снаряда — классические задачи на сохранение импульса."),
			note$14("Абсолютно неупругий удар: тела слипаются и дальше движутся с общей скоростью u = (m₁v₁ + m₂v₂)/(m₁ + m₂). Кинетическая энергия при этом частично переходит во внутреннюю — тела нагреваются.", "Неупругий удар"),
			p$14("Реактивное движение — частный случай сохранения импульса. Ракета выбрасывает газ назад, сама получает импульс вперёд. Именно так работают двигатели в космосе, где нет опоры, от которой можно оттолкнуться."),
			ex$11(["Тележка 4 кг едет со скоростью 2 м/с. На неё падает мешок 1 кг с нулевой горизонтальной скоростью и остаётся. Найдите скорость после.", "Снаряд массой 10 кг летел 200 м/с и разорвался на две равные части. Одна полетела вперёд 300 м/с. Скорость второй?"])
		]
	},
	{
		n: "7",
		title: "Работа, мощность, энергия",
		blocks: [
			h$14("Механическая работа"),
			p$14("Работа постоянной силы на прямолинейном перемещении:"),
			tex$4("A = F s \\cos \\alpha"),
			p$14("α — угол между силой и перемещением. Если сила перпендикулярна перемещению, работа равна нулю (сила тяжести на горизонтальном пути). Если сила тормозит, работа отрицательна."),
			p$14("Единица работы — джоуль: 1 Дж = 1 Н·м. Мощность — работа в единицу времени:"),
			tex$4("N = \\frac{A}{t} = F v"),
			p$14("Единица мощности — ватт. 1 л.с. ≈ 735 Вт — старая единица, ещё встречается в характеристиках машин."),
			h2$14("Кинетическая и потенциальная энергия"),
			tex$4("E_k = \\frac{m v^2}{2}, \\qquad E_p = m g h, \\qquad E_{p,\\text{пруж}} = \\frac{k x^2}{2}"),
			p$14("Работа равнодействующей равна изменению кинетической энергии. Работа силы тяжести равна убыли потенциальной энергии."),
			h2$14("Закон сохранения механической энергии"),
			p$14("Если работают только силы тяжести и упругости (консервативные силы), сумма кинетической и потенциальной энергии постоянна:"),
			tex$4("E_k + E_p = \\text{const}"),
			p$14("Маятник, горка, пружинный пистолет — энергия перетекает из одной формы в другую. Трение забирает механическую энергию: часть уходит в тепло."),
			note$14("Тело соскальзывает с высоты h без трения. Скорость у подножия v = √(2gh) — та же, что при свободном падении с той же высоты. Форма горки не важна, важен перепад высот.", "Горка"),
			ex$11([
				"Камень массой 2 кг упал с 5 м. Найдите кинетическую энергию у земли. g = 10 м/с².",
				"Пружину жёсткостью 400 Н/м сжали на 5 см. Какую кинетическую энергию получит шарик, если трения нет?",
				"Подъёмный кран равномерно поднимает груз 500 кг на 8 м за 20 с. Найдите мощность."
			])
		]
	},
	{
		n: "8",
		title: "Колебания и волны — взгляд вперёд",
		blocks: [
			h$14("Гармонические колебания"),
			p$14("Груз на пружине и математический маятник при малых углах совершают почти гармонические колебания. Смещение меняется по синусу или косинусу."),
			tex$4("x = A \\cos(\\omega t + \\varphi_0), \\qquad T = 2\\pi \\sqrt{\\frac{m}{k}}, \\qquad T = 2\\pi \\sqrt{\\frac{l}{g}}"),
			p$14("A — амплитуда, T — период, частота ν = 1/T. Циклическая частота ω = 2πν."),
			h2$14("Энергия колебаний"),
			p$14("В крайних точках вся энергия — потенциальная, в положении равновесия — кинетическая. Сумма сохраняется, если нет трения. Реальный маятник затухает: энергия уходит в тепло."),
			h2$14("Как решать задачи по механике"),
			ol([
				"Сделайте рисунок: тело, оси, все силы.",
				"Выберите систему отсчёта и запишите второй закон в проекциях.",
				"Если удар или взрыв — сначала импульс, потом энергия.",
				"Проверьте единицы: км/ч в м/с, г в кг, см в м.",
				"Оцените ответ: скорость пешехода не 80 м/с, высота комнаты не 80 м."
			]),
			note$14("На обложке этого тома — типичный набор механики 9 класса: сила нормальной реакции N, скорость v, сила тяжести, ускорение a, динамометр и пружина. Всё, что вы прочитали, — язык этих стрелок.", "К обложке")
		]
	}
]);
var p$13 = (v) => ({
	t: "p",
	v
});
var h$13 = (v) => ({
	t: "h",
	v
});
var h2$13 = (v) => ({
	t: "h2",
	v
});
var tex$3 = (v) => ({
	t: "tex",
	v
});
var ul$13 = (v) => ({
	t: "ul",
	v
});
var note$13 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$10 = (v) => ({
	t: "ex",
	v
});
var chemistryBook = compileBook({
	id: "chemistry",
	title: "Химия",
	subtitle: "Неорганическая химия",
	authors: "Курс 9 класса",
	subject: "chemistry",
	subjectLabel: "Химия",
	grade: "9",
	lang: "ru",
	year: "2011",
	publisher: "Мектеп",
	blurb: "Атом, периодический закон, связь, классы соединений, растворы и расчёты. Курс закрывает программу 9 класса и готовит к органике.",
	pagesEstimate: 208
}, [
	{
		n: "1",
		title: "Атом. Периодический закон",
		blocks: [
			h$13("Строение атома"),
			p$13("Атом состоит из положительного ядра и электронных оболочек. В ядре — протоны и нейтроны. Число протонов равно атомному номеру Z и определяет элемент. Электроны занимают уровни: на первом максимум 2, на втором 8, на третьем 18, но в периодах заполнение идёт по своим правилам."),
			tex$3("A = Z + N"),
			p$13("A — массовое число, N — число нейтронов. Изотопы — атомы одного элемента с разным N. Водород: протий ¹H, дейтерий ²H, тритий ³H."),
			h2$13("Периодический закон"),
			p$13("Свойства элементов находятся в периодической зависимости от заряда ядра. Горизонталь — период, вертикаль — группа. В коротких периодах металличность растёт вниз и влево, неметалличность — вверх и вправо. Благородные газы замыкают периоды: их внешний уровень завершён."),
			ul$13([
				"Щелочные металлы (IA): ns¹, легко отдают электрон.",
				"Галогены (VIIA): ns²np⁵, легко принимают электрон.",
				"Главные подгруппы — свойства предсказуемее, побочные — d-элементы, металлы с переменной степенью окисления."
			]),
			note$13("На обложке учебника — круговая схема элементов и структурные формулы. Круг напоминает: таблица не список, а периодичность.", "К обложке")
		]
	},
	{
		n: "2",
		title: "Химическая связь",
		blocks: [
			h$13("Ионная и ковалентная связь"),
			p$13("Ионная связь — электростатическое притяжение после передачи электрона (NaCl). Ковалентная — общая электронная пара. Если атомы одинаковы (Cl₂, O₂, N₂) — связь неполярная. Если электроотрицательности разные (HCl, H₂O) — полярная."),
			tex$3("\\chi(\\text{F}) = 4,0; \\quad \\chi(\\text{O}) = 3,5; \\quad \\chi(\\text{H}) = 2,1"),
			p$13("Чем больше разность электроотрицательностей, тем полярнее связь. Металлическая связь — «электронный газ» в решётке катионов: отсюда ковкость, блеск, электропроводность."),
			h2$13("Валентность и степень окисления"),
			p$13("Валентность — число связей. Степень окисления — условный заряд, если все общие пары отдать более электроотрицательному атому. В H₂SO₄ сера имеет степень окисления +6, кислород −2, водород +1."),
			ex$10(["Расставьте степени окисления в KMnO₄, NH₃, Fe₂O₃, HNO₃.", "Какая связь в молекулах N₂, HCl, NaBr, CO₂?"])
		]
	},
	{
		n: "3",
		title: "Классы неорганических соединений",
		blocks: [
			h$13("Оксиды, кислоты, основания, соли"),
			p$13("Оксиды: основные (Na₂O, CaO), кислотные (SO₃, CO₂, P₂O₅), амфотерные (ZnO, Al₂O₃). Основные оксиды реагируют с кислотами, кислотные — с щелочами. Амфотерные — и с теми, и с другими."),
			tex$3("\\mathrm{CaO + 2HCl \\rightarrow CaCl_2 + H_2O}"),
			tex$3("\\mathrm{CO_2 + 2NaOH \\rightarrow Na_2CO_3 + H_2O}"),
			h2$13("Кислоты и основания"),
			p$13("Кислота в водном растворе даёт H⁺ (точнее H₃O⁺). Основание даёт OH⁻. Сильные кислоты: HCl, HBr, HI, HNO₃, H₂SO₄ (первая ступень). Сильные основания: щёлочи NaOH, KOH, Ca(OH)₂."),
			p$13("Нейтрализация: кислота + основание → соль + вода. Соли бывают средние, кислые (гидросульфат), основные (гидроксохлорид)."),
			note$13("Индикаторы: лакмус в кислоте красный, в щелочи синий; фенолфталеин в щелочи малиновый, в кислоте бесцветный; метилоранж — от красного к жёлтому.", "Индикаторы")
		]
	},
	{
		n: "4",
		title: "Реакции и расчёты",
		blocks: [
			h$13("Типы реакций"),
			ul$13([
				"Соединение: A + B → AB",
				"Разложение: AB → A + B",
				"Замещение: активный металл вытесняет менее активный из соли или водород из кислоты",
				"Обмен: AB + CD → AD + CB, идёт, если выпадает осадок, газ или вода"
			]),
			tex$3("\\mathrm{Zn + 2HCl \\rightarrow ZnCl_2 + H_2\\uparrow}"),
			tex$3("\\mathrm{AgNO_3 + NaCl \\rightarrow AgCl\\downarrow + NaNO_3}"),
			h2$13("Количество вещества"),
			tex$3("n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}"),
			p$13("Nₐ = 6,02·10²³ моль⁻¹. Молярный объём газа при н.у. — 22,4 л/моль. По уравнению реакции стехиометрические коэффициенты — это моли."),
			ex$10([
				"Сколько литров водорода (н.у.) получится из 13 г цинка и избытка HCl?",
				"Какая масса NaOH нужна для нейтрализации 4,9 г H₂SO₄?",
				"Объём CO₂ при н.у. из 10 г CaCO₃ при полном разложении."
			])
		]
	},
	{
		n: "5",
		title: "Растворы. Электролиты",
		blocks: [
			h$13("Растворимость и концентрация"),
			p$13("Раствор — однородная смесь. Массовая доля вещества:"),
			tex$3("w = \\frac{m_{\\text{в-ва}}}{m_{\\text{раствора}}}"),
			p$13("Молярная концентрация c = n/V (моль/л). Растворимость зависит от температуры: у большинства солей растёт, у газов — падает."),
			h2$13("Электролитическая диссоциация"),
			p$13("Электролиты в растворе распадаются на ионы и проводят ток. Сильные электролиты диссоциируют практически полностью (сильные кислоты, щёлочи, растворимые соли). Слабые — частично (CH₃COOH, NH₃·H₂O)."),
			tex$3("\\mathrm{NaCl \\rightarrow Na^+ + Cl^-}, \\qquad \\mathrm{CH_3COOH \\rightleftharpoons CH_3COO^- + H^+}"),
			p$13("Ионные уравнения пишут только для сильных электролитов в виде ионов. Осадок, газ и слабый электролит оставляют молекулярной формулой.")
		]
	},
	{
		n: "6",
		title: "Металлы и неметаллы",
		blocks: [
			h$13("Металлы"),
			p$13("В ряду активности: K Ca Na Mg Al Zn Fe Ni Sn Pb (H) Cu Hg Ag Au. Металлы до водорода вытесняют H₂ из кислот (кроме HNO₃ и конц. H₂SO₄ — там окисляет анион). Металлы после водорода — нет."),
			p$13("Щелочные металлы хранят под керосином: с водой реагируют бурно. Алюминий пассивируется оксидной плёнкой — поэтому кастрюли не растворяются."),
			h2$13("Неметаллы. Углерод и кремний"),
			p$13("Аллотропия углерода: алмаз, графит, фуллерен, графен. Кремний — основа полупроводников и силикатов земной коры. Оксид кремния SiO₂ — кварц, песок, стекло."),
			note$13("Органическая химия начинается с углерода. На обложке видны бензольные кольца C₆H₆ — ароматическая система с шестью π-электронами. Это мост из 9 класса в 10–11.", "К обложке")
		]
	}
]);
var p$12 = (v) => ({
	t: "p",
	v
});
var h$12 = (v) => ({
	t: "h",
	v
});
var h2$12 = (v) => ({
	t: "h2",
	v
});
var ul$12 = (v) => ({
	t: "ul",
	v
});
var note$12 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$9 = (v) => ({
	t: "ex",
	v
});
var biologyBook = compileBook({
	id: "biology",
	title: "Биология",
	subtitle: "Общие закономерности жизни",
	authors: "Курс 9 класса",
	subject: "biology",
	subjectLabel: "Биология",
	grade: "9",
	lang: "ru",
	year: "2013",
	publisher: "Мектеп",
	blurb: "Клетка, обмен веществ, генетика, размножение, эволюция и экология — каркас общей биологии 9 класса.",
	pagesEstimate: 192
}, [
	{
		n: "1",
		title: "Клетка — единица жизни",
		blocks: [
			h$12("Клеточная теория"),
			p$12("Все живые организмы состоят из клеток. Новая клетка возникает только делением существующей. Клетка — единица строения, функционирования и развития. Исключение — вирусы: они неклеточные, размножаются только внутри клетки-хозяина."),
			h2$12("Органоиды"),
			ul$12([
				"Ядро — хранит ДНК, управляет синтезом белков.",
				"Митохондрии — «станции» АТФ, клеточное дыхание.",
				"Хлоропласты (растения) — фотосинтез.",
				"Рибосомы — сборка белка.",
				"ЭПС и аппарат Гольджи — синтез и упаковка веществ.",
				"Мембрана — избирательный барьер, транспорт, рецепторы."
			]),
			note$12("Прокариоты (бактерии) не имеют ядра. Эукариоты — растения, животные, грибы, протисты — ядро есть. Это главное деление клеточного мира.", "Два мира")
		]
	},
	{
		n: "2",
		title: "Обмен веществ и энергия",
		blocks: [
			h$12("Метаболизм"),
			p$12("Жизнь — поток превращений. Катаболизм расщепляет органику и даёт энергию (дыхание). Анаболизм строит сложные молекулы (фотосинтез, синтез белка). АТФ — универсальная «монета» энергии."),
			h2$12("Фотосинтез и дыхание"),
			p$12("Фотосинтез: CO₂ + H₂O + свет → глюкоза + O₂. Свет ловят пигменты хлорофилла. Дыхание: глюкоза + O₂ → CO₂ + H₂O + АТФ. Эти процессы замыкают круговорот углерода и кислорода на планете."),
			p$12("Ферменты — биологические катализаторы. Каждый работает в своём pH и температуре. Кипячение денатурирует белок — поэтому вареное яйцо не «сырое наоборот»."),
			ex$9(["Почему в темноте растение не выделяет кислород, но дышит?", "Где больше митохондрий: в мышце или в жировой клетке? Почему?"])
		]
	},
	{
		n: "3",
		title: "Генетика",
		blocks: [
			h$12("ДНК и ген"),
			p$12("ДНК — двойная спираль: A-T, G-C. Ген — участок ДНК, кодирующий белок или РНК. Репликация копирует ДНК перед делением. Транскрипция — ДНК → мРНК, трансляция — мРНК → белок на рибосоме."),
			h2$12("Законы Менделя"),
			p$12("Моногибридное скрещивание: в F1 все потомки единообразны (доминирование), в F2 расщепление 3:1 по фенотипу. Дигибридное — 9:3:3:1 при независимом наследовании."),
			p$12("Генотип — набор генов, фенотип — признаки. Гомозигота AA или aa, гетерозигота Aa. Рецессивный признак проявляется только у гомозиготы."),
			note$12("На обложке — спираль ДНК, хромосомы, микроскоп и силуэт животного. Это четыре языка биологии 9 класса: молекула, клетка, организм, вид.", "К обложке"),
			ex$9(["Кареглазый гетерозигота Aa и голубоглазый aa. Какова вероятность голубоглазого ребёнка?", "Чем мутация отличается от модификации?"])
		]
	},
	{
		n: "4",
		title: "Размножение и развитие",
		blocks: [
			h$12("Митоз и мейоз"),
			p$12("Митоз даёт две одинаковые диплоидные клетки — рост, регенерация. Мейоз — четыре гаплоидные гаметы, кроссинговер перемешивает гены. Оплодотворение восстанавливает диплоидность."),
			h2$12("Онтогенез"),
			p$12("От зиготы до смерти. У животных: дробление, гаструла, органогенез. У человека внутриутробный период около 40 недель. Постэмбриональное развитие может быть прямым (человек) или с метаморфозом (лягушка, бабочка).")
		]
	},
	{
		n: "5",
		title: "Эволюция и экология",
		blocks: [
			h$12("Движущие силы эволюции"),
			ul$12([
				"Наследственная изменчивость — сырьё.",
				"Борьба за существование — ограниченные ресурсы.",
				"Естественный отбор — выживают и оставляют потомство приспособленные.",
				"Изоляция — путь к новым видам."
			]),
			p$12("Доказательства: палеонтология, сравнительная анатомия (гомологичные органы), эмбриология, молекулярные часы ДНК."),
			h2$12("Экосистема"),
			p$12("Продуценты (растения) → консументы (животные) → редуценты (грибы, бактерии). Правило 10%: на следующий трофический уровень переходит около десятой части энергии. Биосфера — все экосистемы Земли."),
			note$12("Общие закономерности жизни, вынесенные на обложку, — это и есть программа 9 класса: клетка, ген, вид, экосистема. Дальше — профильная биология.", "Итог")
		]
	}
]);
var p$11 = (v) => ({
	t: "p",
	v
});
var h$11 = (v) => ({
	t: "h",
	v
});
var h2$11 = (v) => ({
	t: "h2",
	v
});
var tex$2 = (v) => ({
	t: "tex",
	v
});
var ul$11 = (v) => ({
	t: "ul",
	v
});
var note$11 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$8 = (v) => ({
	t: "ex",
	v
});
var algebraBook = compileBook({
	id: "algebra",
	title: "Алгебра",
	subtitle: "9 класс",
	authors: "Курс 9 класса",
	subject: "algebra",
	subjectLabel: "Алгебра",
	grade: "9",
	lang: "ru",
	year: "2012",
	publisher: "Мектеп",
	blurb: "Квадратичная функция, неравенства, прогрессии, степень с рациональным показателем и первые шаги тригонометрии.",
	pagesEstimate: 224
}, [
	{
		n: "1",
		title: "Квадратичная функция",
		blocks: [
			h$11("Парабола"),
			p$11("Функция y = ax² + bx + c, a ≠ 0, называется квадратичной. График — парабола. Если a > 0, ветви вверх, если a < 0 — вниз. Ось симметрии x = −b/(2a), вершина в этой точке."),
			tex$2("y = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{D}{4a}, \\qquad D = b^2 - 4ac"),
			p$11("Это выделение квадрата. Сдвиг по горизонтали и вертикали читается сразу: вершина (−b/2a, −D/4a)."),
			h2$11("Корни и дискриминант"),
			tex$2("x = \\frac{-b \\pm \\sqrt{D}}{2a}"),
			ul$11([
				"D > 0 — два различных корня, парабола пересекает ось x в двух точках.",
				"D = 0 — один корень (кратности 2), касается оси.",
				"D < 0 — действительных корней нет."
			]),
			note$11("Теорема Виета для приведённого уравнения x² + px + q = 0: сумма корней −p, произведение q. Удобно подбирать корни «в уме».", "Виета"),
			ex$8([
				"Найдите вершину и корни y = x² − 6x + 5.",
				"При каком k уравнение x² − 4x + k = 0 имеет два корня?",
				"Разложите на множители x² − 5x + 6."
			])
		]
	},
	{
		n: "2",
		title: "Неравенства",
		blocks: [
			h$11("Квадратные неравенства"),
			p$11("Решать y = ax² + bx + c > 0 значит смотреть, где парабола выше оси. Метод интервалов: отметить корни на прямой, знаки по промежуткам. В корне, если неравенство нестрогое, точка закрашена."),
			p$11("Дробно-рациональные неравенства сводят к сравнению с нулём. Критические точки — нули числителя и знаменателя. Знаменатель не равен нулю — эти точки всегда выколоты."),
			tex$2("\\frac{(x-1)(x+2)}{x-3} \\ge 0"),
			h2$11("Системы"),
			p$11("Система неравенств — пересечение множеств решений. Совокупность (знак ∨) — объединение. На числовой прямой штрихуют общее."),
			ex$8([
				"Решите x² − 4x − 5 < 0.",
				"Решите (x − 2)/(x + 1) ≥ 0.",
				"Найдите наибольшее целое решение x² ≤ 10."
			])
		]
	},
	{
		n: "3",
		title: "Прогрессии",
		blocks: [
			h$11("Арифметическая прогрессия"),
			p$11("Каждый следующий член получается прибавлением постоянного d — разности. Формулы:"),
			tex$2("a_n = a_1 + (n-1)d, \\qquad S_n = \\frac{2a_1 + (n-1)d}{2}\\, n = \\frac{a_1 + a_n}{2}\\, n"),
			h2$11("Геометрическая прогрессия"),
			p$11("Каждый следующий умножается на постоянное q — знаменатель."),
			tex$2("b_n = b_1 q^{n-1}, \\qquad S_n = b_1 \\frac{q^n - 1}{q - 1}\\ (q \\ne 1)"),
			p$11("При |q| < 1 бесконечная сумма S = b₁/(1 − q). Это ряд геометрической прогрессии — первый шаг к рядам в старших классах."),
			note$11("Характеристическое свойство: у арифметической средний член — среднее арифметическое соседей, у геометрической — среднее геометрическое.", "Признак"),
			ex$8([
				"a₁ = 5, d = 3. Найдите a₁₀ и S₁₀.",
				"Геометрическая: 2, 6, 18, … Найдите S₆.",
				"Бесконечная: 1 + 1/2 + 1/4 + … Чему равна сумма?"
			])
		]
	},
	{
		n: "4",
		title: "Степень с рациональным показателем",
		blocks: [
			h$11("Корни и степени"),
			tex$2("a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m"),
			p$11("Основание a ≥ 0, если n чётное. Свойства степеней сохраняются:"),
			tex$2("a^p a^q = a^{p+q}, \\quad (a^p)^q = a^{pq}, \\quad (ab)^p = a^p b^p"),
			h2$11("Иррациональные выражения"),
			p$11("Вынесение из-под корня, внесение, освобождение знаменателя от иррациональности умножением на сопряжённое — техника, которая нужна и в геометрии, и в физике."),
			tex$2("\\frac{1}{\\sqrt{a}+\\sqrt{b}} = \\frac{\\sqrt{a}-\\sqrt{b}}{a-b}"),
			ex$8([
				"Упростите √50 − √8 + √18.",
				"Вычислите 16^{3/4} и 27^{-2/3}.",
				"Освободите знаменатель: 1/(√7 − √3)."
			])
		]
	},
	{
		n: "5",
		title: "Тригонометрия начала",
		blocks: [
			h$11("Синус, косинус, тангенс острого угла"),
			p$11("В прямоугольном треугольнике: sin = противолежащий / гипотенуза, cos = прилежащий / гипотенуза, tan = противолежащий / прилежащий."),
			tex$2("\\sin^2 \\alpha + \\cos^2 \\alpha = 1, \\qquad \\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}"),
			p$11("Значения: 0°, 30°, 45°, 60°, 90° нужно знать наизусть. sin 30° = 1/2, cos 30° = √3/2, sin 45° = cos 45° = √2/2."),
			h2$11("Единичная окружность"),
			p$11("Угол откладывают от оси x против часовой стрелки. Координаты точки на окружности радиуса 1 — (cos α, sin α). Это готовит к 10 классу, где углы уже любые."),
			note$11("На обложке алгебры 9 класса часто сетка координат — намёк, что функция живёт на плоскости, а не только в формуле.", "К обложке")
		]
	}
]);
var p$10 = (v) => ({
	t: "p",
	v
});
var h$10 = (v) => ({
	t: "h",
	v
});
var h2$10 = (v) => ({
	t: "h2",
	v
});
var tex$1 = (v) => ({
	t: "tex",
	v
});
var ul$10 = (v) => ({
	t: "ul",
	v
});
var note$10 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$7 = (v) => ({
	t: "ex",
	v
});
var geometryBook = compileBook({
	id: "geometry",
	title: "Геометрия",
	subtitle: "7–11",
	authors: "А. В. Погорелов",
	subject: "geometry",
	subjectLabel: "Геометрия",
	grade: "7–11",
	lang: "ru",
	year: "1993",
	publisher: "Просвещение",
	blurb: "Планиметрия 9 класса по Погорелову: подобие, Пифагор, окружность, векторы и координаты. Строгость плюс счёт.",
	pagesEstimate: 384
}, [
	{
		n: "1",
		title: "Треугольники. Подобие",
		blocks: [
			h$10("Признаки равенства и подобия"),
			p$10("Два треугольника равны, если совпадают две стороны и угол между ними; сторона и два прилежащих угла; три стороны. Подобие — равенство углов и пропорциональность сторон. Коэффициент подобия k — отношение сходственных сторон."),
			tex$1("\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{CA}{C'A'} = k"),
			p$10("Площади подобных фигур относятся как k², объёмы тел — как k³. Это ключ ко многим задачам «по картинке»."),
			h2$10("Теорема Фалеса"),
			p$10("Параллельные прямые, пересекающие стороны угла, отсекают пропорциональные отрезки. Средняя линия треугольника параллельна основанию и равна его половине."),
			note$10("На обложке Погорелова — треугольник с высотами. Высоты пересекаются в ортоцентре, медианы в центроиде (делятся 2:1), серединные перпендикуляры — в центре описанной окружности.", "Замечательные точки")
		]
	},
	{
		n: "2",
		title: "Теорема Пифагора и метрика",
		blocks: [
			h$10("Пифагор"),
			tex$1("c^2 = a^2 + b^2"),
			p$10("В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов. Обратная тоже верна: если a² + b² = c², угол между a и b прямой."),
			p$10("Следствия: катет есть среднее геометрическое гипотенузы и проекции катета на неё; высота к гипотенузе — среднее геометрическое проекций."),
			h2$10("Формулы площади"),
			tex$1("S = \\tfrac12 ab \\sin C = \\sqrt{p(p-a)(p-b)(p-c)} = \\tfrac12 a h_a"),
			p$10("Формула Герона работает для любого треугольника. p — полупериметр. Для прямоугольного достаточно половины произведения катетов."),
			ex$7([
				"Катеты 6 и 8. Найдите гипотенузу, высоту к ней и площадь.",
				"Стороны 5, 5, 6. Найдите площадь по Герону.",
				"В равностороннем треугольнике сторона 6. Высота и площадь?"
			])
		]
	},
	{
		n: "3",
		title: "Окружность",
		blocks: [
			h$10("Вписанный и центральный угол"),
			p$10("Центральный угол равен дуге, на которую опирается. Вписанный — половине этой дуги. Углы, опирающиеся на одну дугу, равны. Угол, опирающийся на диаметр, — прямой (теорема Фалеса об окружности)."),
			h2$10("Касательная и хорда"),
			p$10("Касательная перпендикулярна радиусу в точке касания. Отрезки касательных из одной точки равны. Угол между касательной и хордой равен углу в другом сегменте."),
			tex$1("\\text{мощность точки: }\\quad PA \\cdot PB = PC \\cdot PD = PT^2"),
			ul$10([
				"Вписанный четырёхугольник: сумма противоположных углов 180°.",
				"Описанный четырёхугольник: суммы противоположных сторон равны.",
				"Правильный n-угольник вписывается и описывается."
			])
		]
	},
	{
		n: "4",
		title: "Векторы и координаты",
		blocks: [
			h$10("Вектор"),
			p$10("Вектор задаётся началом и концом, либо координатами. Сложение — правило треугольника или параллелограмма. Умножение на число меняет длину и, при минусе, направление."),
			tex$1("\\vec{a} = (x; y), \\quad |\\vec{a}| = \\sqrt{x^2 + y^2}"),
			tex$1("\\vec{a}\\cdot\\vec{b} = x_1 x_2 + y_1 y_2 = |\\vec{a}||\\vec{b}|\\cos \\varphi"),
			p$10("Скалярное произведение равно нулю ⇔ векторы перпендикулярны. Это быстрый способ доказать прямой угол без тригонометрии."),
			h2$10("Метод координат"),
			p$10("Расстояние между точками A(x₁, y₁) и B(x₂, y₂):"),
			tex$1("|AB| = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}"),
			p$10("Уравнение окружности с центром (a, b) и радиусом R: (x − a)² + (y − b)² = R². Прямая: ax + by + c = 0."),
			note$10("Погорелов строит геометрию как строгую аксиоматику, но в 9 классе уже свободно живут и вектор, и координата, и классическая синтетика. Выбирайте язык задачи.", "Стиль курса")
		]
	},
	{
		n: "5",
		title: "Правильные многоугольники",
		blocks: [
			h$10("Формулы"),
			tex$1("\\alpha = \\frac{(n-2)180^\\circ}{n}"),
			tex$1("R = \\frac{a}{2\\sin(\\pi/n)}, \\qquad r = \\frac{a}{2\\tan(\\pi/n)}"),
			p$10("α — внутренний угол правильного n-угольника, R — радиус описанной окружности, r — вписанной, a — сторона. Для квадрата R = a√2 / 2, r = a/2."),
			p$10("Для равностороннего треугольника высота равна √3/2 · a. Центр описанной и вписанной окружностей совпадает с центроидом и делит высоту в отношении 2:1. Отсюда:"),
			tex$1("R_{\\triangle} = \\frac{a\\sqrt{3}}{3}, \\qquad r_{\\triangle} = \\frac{a\\sqrt{3}}{6}"),
			p$10("Правильный шестиугольник складывается из шести равносторонних треугольников, поэтому R = a, r = a√3 / 2."),
			ex$7(["Сторона правильного шестиугольника 4. Найдите R, r и площадь.", "Квадрат вписан в окружность радиуса 5. Сторона квадрата?"])
		]
	}
]);
var p$9 = (v) => ({
	t: "p",
	v
});
var h$9 = (v) => ({
	t: "h",
	v
});
var h2$9 = (v) => ({
	t: "h2",
	v
});
var ul$9 = (v) => ({
	t: "ul",
	v
});
var note$9 = (v, k) => ({
	t: "note",
	v,
	k
});
var dlg = (v) => ({
	t: "dlg",
	v
});
var ex$6 = (v) => ({
	t: "ex",
	v
});
var englishBook = compileBook({
	id: "english",
	title: "Take Off with English",
	subtitle: "Pupil’s Book",
	authors: "Grade 9 course",
	subject: "english",
	subjectLabel: "English",
	grade: "9",
	lang: "en",
	year: "2014",
	publisher: "Pupil’s Book",
	blurb: "Dialogues, tenses, conditionals and a travel-themed reader for Grade 9. Read aloud, then do the tasks.",
	pagesEstimate: 160
}, [
	{
		n: "1",
		title: "Welcome aboard",
		blocks: [
			h$9("Classroom English"),
			p$9("This course follows a 9th-grade English programme: present and past tenses, conditionals, vocabulary for travel, school and Kyrgyzstan, plus short reading passages. Work through the dialogues aloud."),
			dlg([
				{
					who: "Aida",
					text: "Have you ever flown? I took off from Manas last June."
				},
				{
					who: "Timur",
					text: "Not yet. I usually take the train to Osh. It’s slower, but I can read."
				},
				{
					who: "Aida",
					text: "If I had more time, I would travel around Issyk-Kul by bike."
				}
			]),
			h2$9("Useful chunks"),
			ul$9([
				"take off — взлететь; also: снять одежду. Контекст решает.",
				"look forward to + V-ing — ждать с нетерпением.",
				"used to + V — раньше делал, сейчас нет.",
				"as soon as / unless / in case — связки времени и условия."
			]),
			note$9("The original pupil’s book is built around travel. We keep that metaphor: each unit is a leg of the journey.", "Course map")
		]
	},
	{
		n: "2",
		title: "Tenses that move",
		blocks: [
			h$9("Present perfect vs past simple"),
			p$9("Use past simple for a finished time: yesterday, in 2019, last summer. Use present perfect for experience and results that matter now: I have been to Bishkek three times. I have lost my pass — so I cannot enter."),
			ul$9([
				"I went to the museum on Monday. (when is known)",
				"I have already seen that exhibition. (experience)",
				"She has lived here since 2018. (started in the past, still true)"
			]),
			h2$9("Future in English"),
			p$9("will — решение в момент речи, обещание, прогноз. be going to — план и видимая улика (Look at those clouds — it’s going to snow). Present continuous — договорённость с временем: I’m meeting the tutor at 5."),
			ex$6([
				"Choose: I (saw / have seen) this film last year.",
				"Complete: If it rains tomorrow, we … (stay) at home.",
				"Write four sentences about places you have never visited."
			])
		]
	},
	{
		n: "3",
		title: "Conditionals",
		blocks: [
			h$9("Zero, first, second"),
			p$9("Zero: facts. If you heat ice, it melts. First: real future. If I pass the test, I will call you. Second: unreal now. If I were you, I would revise phrasal verbs every day."),
			p$9("Unless = if not. I won’t go unless you come too. Wish + past: I wish I spoke Kyrgyz more fluently — о желании в настоящем."),
			note$9("Were is used with I/he/she in the second conditional in careful English: If I were taller… In speech people also say If I was.", "Grammar note")
		]
	},
	{
		n: "4",
		title: "Reading: a letter from Karakol",
		blocks: [
			h$9("Text"),
			p$9("Dear friend, we arrived in Karakol after a dusty ride. The mountains stood so close that the afternoon light turned the slopes copper. In the bazaar a woman sold smoked Issyk-Kul trout and jam from sea-buckthorn. My host family asked whether I liked kymyz. I said I would try a little. At night the stars looked nearer than the streetlamps. If you ever come, bring a warm jacket — July evenings here are honest."),
			h2$9("Tasks"),
			ex$6([
				"Find three adjectives of place and weather.",
				"Change the letter into the past perfect where it fits.",
				"Write a reply of 80–100 words about a place in your region."
			])
		]
	},
	{
		n: "5",
		title: "Phrasal verbs and school life",
		blocks: [
			h$9("High-frequency verbs"),
			ul$9([
				"look up — искать в словаре; look after — присматривать; look forward to — ждать.",
				"give up — бросить; give in — уступить.",
				"turn on / off / up / down — техника и звук.",
				"get on with — ладить; get through — справиться, дозвониться."
			]),
			dlg([{
				who: "Teacher",
				text: "Hand in your essays by Friday. Don’t put it off."
			}, {
				who: "Student",
				text: "I’ll go over the draft tonight and fill in the gaps."
			}]),
			p$9("A short essay frame: In my opinion… / One reason is… / For example… / On the other hand… / To sum up… Keep sentences short. Examiners prefer clear English to decorated English.")
		]
	}
]);
var p$8 = (v) => ({
	t: "p",
	v
});
var h$8 = (v) => ({
	t: "h",
	v
});
var h2$8 = (v) => ({
	t: "h2",
	v
});
var ul$8 = (v) => ({
	t: "ul",
	v
});
var note$8 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$5 = (v) => ({
	t: "ex",
	v
});
var russianBook = compileBook({
	id: "russian",
	title: "Русский язык",
	subtitle: "9 класс",
	authors: "Курс 9 класса",
	subject: "russian",
	subjectLabel: "Русский язык",
	grade: "9",
	lang: "ru",
	year: "2010",
	publisher: "Мектеп",
	blurb: "Сложное предложение, обороты, текст и пунктуация — то, что спрашивают на выпускном по русскому в 9 классе.",
	pagesEstimate: 208
}, [
	{
		n: "1",
		title: "Сложное предложение",
		blocks: [
			h$8("ССП и СПП"),
			p$8("Сложносочинённое предложение соединяет равноправные части союзами и, а, но, или, да. Между частями обычно ставится запятая: Гром грянул, и дождь хлынул стеной."),
			p$8("Сложноподчинённое — есть главная и придаточная. Придаточные: изъяснительные (что, будто), определительные (который, где), обстоятельственные (когда, если, хотя, чтобы, потому что)."),
			h2$8("Знаки"),
			ul$8([
				"Запятая перед подчинительным союзом: Я знал, что урок начнётся вовремя.",
				"Тире в бессоюзном, если вторая часть — результат или противопоставление: Наклонился — пропасть.",
				"Двоеточие, если вторая часть поясняет: Одно было ясно: пути назад нет."
			]),
			note$8("Однородные придаточные, соединённые и, запятой не разделяются: Он сказал, что устал и что придёт завтра.", "Ловушка")
		]
	},
	{
		n: "2",
		title: "Причастие и деепричастие",
		blocks: [
			h$8("Обороты"),
			p$8("Причастный оборот выделяется запятыми, если стоит после определяемого слова: Книга, прочитанная за ночь, лежала на столе. Перед словом — обычно без запятых: Прочитанная за ночь книга…"),
			p$8("Деепричастный оборот всегда обособляется: Сверив ответ, он закрыл тетрадь. Деепричастие обозначает добавочное действие подлежащего — нельзя: Подъезжая к станции, у меня слетела шляпа."),
			ex$5([
				"Расставьте запятые: Ученик решивший задачу поднял руку.",
				"Исправьте: Открыв окно, запахло черёмухой.",
				"Образуйте причастия от глаголов нести, решить, колоть."
			])
		]
	},
	{
		n: "3",
		title: "Текст и стиль",
		blocks: [
			h$8("Типы речи"),
			p$8("Повествование — что произошло. Описание — какой предмет. Рассуждение — почему, тезис → аргументы → вывод. В сочинении 9 класса чаще всего рассуждение: формулируйте тезис одним предложением."),
			h2$8("Средства связи"),
			p$8("Лексический повтор, синонимы, местоимения, союзы, вводные слова (итак, во-первых, напротив). Избегайте канцелярита: осуществлять проверку → проверить."),
			note$8("Орфография, которая «сыпется» в 9 классе: н/нн в причастиях, слитно/раздельно не с разными частями речи, правописание приставок пре-/при-, гласные в корне -лаг-/-лож-, -раст-/-рос-.", "Орфография")
		]
	},
	{
		n: "4",
		title: "Пунктуация прямой речи",
		blocks: [
			h$8("Схемы"),
			p$8("А: «П». — слова автора, затем прямая речь. «П», — а. — речь, затем автор. «П, — а, — п». — автор внутри. После вопросительного и восклицательного знака запятая не ставится: «Кто там?» — спросили за дверью."),
			p$8("Цитата оформляется как прямая речь или вводится как часть своего предложения с кавычками. Стихотворная цитата часто без кавычек, с абзаца и сохранением строк."),
			ex$5(["Оформите: Учитель сказал завтра пишем изложение.", "Перестройте диалог в косвенную речь."])
		]
	}
]);
var p$7 = (v) => ({
	t: "p",
	v
});
var h$7 = (v) => ({
	t: "h",
	v
});
var h2$7 = (v) => ({
	t: "h2",
	v
});
var ul$7 = (v) => ({
	t: "ul",
	v
});
var note$7 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$4 = (v) => ({
	t: "ex",
	v
});
var kyrgyzLangBook = compileBook({
	id: "kyrgyz-lang",
	title: "Кыргыз тили",
	subtitle: "9-класс",
	authors: "9-класс курсу",
	subject: "kyrgyz",
	subjectLabel: "Кыргыз тили",
	grade: "9",
	lang: "ky",
	year: "2012",
	publisher: "Мектеп",
	blurb: "Морфология, үндөшүү, татаал сүйлөм, стиль жана жазуу иштери — 9-класстын кыргыз тили программасы.",
	pagesEstimate: 176
}, [
	{
		n: "1",
		title: "Сөз жана сүйлөм",
		blocks: [
			h$7("Морфологиянын кайталоосу"),
			p$7("Кыргыз тилинде сөз түркүмдөрү: зат атооч, сын атооч, сан атооч, ат атооч, этиш, тактооч, жандооч, байламта, сырдык сөз. Зат атооч жөндөлөт: аталыш, илик, барыш, табыш, жатыш, чыгыш, жактама."),
			p$7("Үндөшүү мыйзамы — сөздүн ичиндеги үндүүлөр бири-бирине ылайыкталат. Катуу үндүүлөр: а, о, у, ы. Жумушак: э, ө, ү, и. Жалгамалар үндөшүүгө баш иет: бала-лар, эне-лер."),
			h2$7("Этиштин формалары"),
			ul$7([
				"Учур чак: -а/-е, -й: жаза-т, иштей-т.",
				"Өткөн чак: -ды/-ди/-ду/-дү: барды, келди.",
				"Келер чак: -а/-е + чакчыл: бара-т, же -ар/-ер.",
				"Ыңгайлар: буйрук, каалоо-тилек, шарт."
			]),
			note$7("Сүйлөмдүн түзүлүшү: ээ + баяндооч. Толуктооч, бышыктооч, аныктооч — сүйлөм мүчөлөрү. Тескери сөз тартиби ырда жана басым үчүн керек, бирок маанини бузбашы керек.", "Синтаксис")
		]
	},
	{
		n: "2",
		title: "Жөнөкөй жана татаал сүйлөм",
		blocks: [
			h$7("Татаал сүйлөм"),
			p$7("Тең байланыштуу татаал сүйлөмдө бөлүктөр тең укуктуу, байламталар: жана, да, бирок, же. Багындырма байланышта багынынкы сүйлөм негизгиге баш иет: качан, эгер, себеби, үчүн."),
			p$7("Тыныш белгилери: бөлүктөрдүн ортосунда үтүр. Каршы мааниде тире да коюлат. Цитата жана диалог сызыкча менен жазылат."),
			ex$4([
				"Сүйлөмдү татаалдандырыңыз: Жаан жаады. Биз үйдө калдык.",
				"Жөндөмөлөрдү коюңуз: мектеп, китеп, тоо (илик, барыш, жатыш).",
				"Үндөшүүгө ылайык жалгама тандаңыз: көл—, шаар—, үй—."
			])
		]
	},
	{
		n: "3",
		title: "Лексика жана стиль",
		blocks: [
			h$7("Синоним, антоним, омоним"),
			p$7("Жакшы — жакшы, сонун, мыкты. Антоним: жакшы — жаман. Омоним: ат (имя) жана ат (лошадь). Фразеологизмдер тилди байытат: көзүн ачуу, колдуу болуу, сөзүн жерге таштабоо."),
			h2$7("Расмий жана көркөм стиль"),
			p$7("Арыз, мүнөздөмө, баяндама — расмий стиль: кыска, так, канцелярдык штамптарсыз. Эссе жана чыгарма — көркөм: эпитет, салыштыруу, метафора. 9-класста эссенин тезиси бир сүйлөм менен берилет."),
			note$7("Кыргыз тили — мамлекеттик тил. Аны так жазуу — жарандык маданият. Орус тили менен кошо эки тилде окуу — байлык, бирок ар бир тилдин өз мыйзамы бар.", "Маданият")
		]
	},
	{
		n: "4",
		title: "Жазуу иштери",
		blocks: [
			h$7("Дилбаяндын планы"),
			ul$7([
				"Киришүү: теманы өз сөзүң менен.",
				"Негизги бөлүк: эки-үч аргумент, мисал.",
				"Корутунду: тезисти кайталабастан жыйынтык."
			]),
			p$7("Көчүрмө жана дилбаян алдында орфографиялык оор жерлерди кайталаңыз: узун үндүүлөр, з/с, п/б уңгуларда, сын атоочтун -луу/-дүү жалгамасы."),
			ex$4(["«Менин айылым» деген темада 8–10 сүйлөм жазыңыз.", "Фразеологизмге маани бериңиз: ит өлгөн жер, көзүнө чөп салуу."])
		]
	}
]);
var p$6 = (v) => ({
	t: "p",
	v
});
var h$6 = (v) => ({
	t: "h",
	v
});
var h2$6 = (v) => ({
	t: "h2",
	v
});
var verse$1 = (v) => ({
	t: "verse",
	v
});
var quote$1 = (v, by) => ({
	t: "quote",
	v,
	by
});
var note$6 = (v, k) => ({
	t: "note",
	v,
	k
});
var ul$6 = (v) => ({
	t: "ul",
	v
});
var kyrgyzLitBook = compileBook({
	id: "kyrgyz-lit",
	title: "Кыргыз адабияты",
	subtitle: "9-класс",
	authors: "А. А. Оморова, Д. К. Досматова",
	subject: "kyrgyz-lit",
	subjectLabel: "Кыргыз адабияты",
	grade: "9",
	lang: "ky",
	year: "2011",
	publisher: "Мектеп",
	blurb: "Манас, акындар поэзиясы, XX кылым прозасынын темалары жана чыгарма жазуунун ыкмасы.",
	pagesEstimate: 200
}, [
	{
		n: "1",
		title: "Манас — элдин дастаны",
		blocks: [
			h$6("Оозеки эпос"),
			p$6("«Манас» — дүйнөдөгү эң чоң оозеки дастандардын бири. Аны манасчылар муундан муунга жеткиришкен. Манас — элди бириктирген баатыр, Каныкей — акылман жар, Бакай — кеңешчи, Сыргак менен Серек — чоролор. 9-класста үзүндүлөр окулат: баатырдын төрөлүшү, керээз, кырк чоро."),
			quote$1("Манас деген баатыр бар, манасы жок эл болбойт. Дастан — тарыхтын өзү эмес, элдин эсиндеги тарых.", "Окуу эскертмеси"),
			h2$6("Кандай окуйт"),
			p$6("Эпосту прозадай жутуп койбой: кайталоолор, гипербола, туруктуу эпитеттер — ырдын эти. «Ак шурудай Каныкей», «көк жал Манас» — бул формулалар. Аларды таап, дептерге жазып коюңуз.")
		]
	},
	{
		n: "2",
		title: "Токтогул жана акындык поэзия",
		blocks: [
			h$6("Токтогул Сатылганов"),
			p$6("Токтогул (1864–1933) — акын, комузчу, импровизатор. Сибирге сүргүнгө айдалган. Ырларында элдин оорусу, адилеттик, эмгек. «Кедейдин арманы», «Беш каман» — программалык тексттер."),
			verse$1([
				"Эл үчүн ырдаган акын",
				"өзүнчө жылдыз эмес —",
				"элдин үнү."
			]),
			p$6("Айтыш — акындардын мелдеши. Импровизация, уйкай, сатира. 9-класста айтыштын ыкмасын билүү: каршылашка жооп, эл алдында сый.")
		]
	},
	{
		n: "3",
		title: "XX кылым прозасы",
		blocks: [
			h$6("Чыңгыз Айтматов — темалар"),
			p$6("Айтматовдун чыгармалары мектеп программасынын өзөгү. Биз бул жерде сюжетти кайра басып чыгарбайбыз — автордук укук бар. Окуучуга кереги: кайсы суроолорду берүү."),
			ul$6([
				"Адам жана жаратылыш: ким кимди багат?",
				"Эс тутум жана манкурт: өз атын унутуу эмнеге алып келет?",
				"Сүйүү жана милдет: жеке бакыт менен эл алдындагы жоопкерчилик.",
				"Тил: эмне үчүн каармандар эки тилде сүйлөйт, эмне үчүн жер-суу аттары маанилүү."
			]),
			note$6("Чыгарманы толук окугуңуз керек — мектеп китепканасынан же үйдөгү томдон. Бул колдонмо — компас, тексттин орду эмес.", "Маанилүү")
		]
	},
	{
		n: "4",
		title: "Анализдин ыкмасы",
		blocks: [
			h$6("План"),
			ul$6([
				"Тема жана идея — айырмалаңыз. Тема — эмне жөнүндө, идея — автор эмне дейт.",
				"Композиция: экспозиция, түйүн, кульминация, чечилиш.",
				"Каарман: портрет, кеп, кылык, башкаларга мамиле.",
				"Пейзаж жана деталь: алар сюжетти кайталабастан маани кошот."
			]),
			h2$6("Чыгарма жазуу"),
			p$6("Цитатаны кыска алыңыз. Өз оюңузду «мага жакты» менен бүтүрбөңүз: эмне үчүн жакты, кайсы сап далил. Кыргыз адабиятында оозеки үн менен жазма үн катар жүрөт — муну байкасаңыз, баа жогорулайт.")
		]
	}
]);
var p$5 = (v) => ({
	t: "p",
	v
});
var h$5 = (v) => ({
	t: "h",
	v
});
var h2$5 = (v) => ({
	t: "h2",
	v
});
var verse = (v) => ({
	t: "verse",
	v
});
var quote = (v, by) => ({
	t: "quote",
	v,
	by
});
var ul$5 = (v) => ({
	t: "ul",
	v
});
var note$5 = (v, k) => ({
	t: "note",
	v,
	k
});
var literatureBook = compileBook({
	id: "literature",
	title: "Литература",
	subtitle: "9 класс",
	authors: "И. Г. Маранцман",
	subject: "literature",
	subjectLabel: "Литература",
	grade: "9",
	lang: "ru",
	year: "1992",
	publisher: "Просвещение",
	blurb: "Пушкин, Лермонтов, Гоголь и школа анализа текста. Публичные стихи XIX века — в полном виде, проза — как метод чтения.",
	pagesEstimate: 240
}, [
	{
		n: "1",
		title: "Пушкин. Лирика",
		blocks: [
			h$5("Поэт и время"),
			p$5("Александр Пушкин (1799–1837) собирает русскую литературную речь. В 9 классе читают лирику и «Евгения Онегина» как «энциклопедию русской жизни». Лирический герой — не биография автора, но и не чужой человек: это маска, через которую говорит эпоха."),
			verse([
				"Я вас любил: любовь ещё, быть может,",
				"В душе моей угасла не совсем;",
				"Но пусть она вас больше не тревожит;",
				"Я не хочу печалить вас ничем."
			]),
			p$5("Разбор: анафора «я», отказ от пафоса, глаголы в прошедшем, финал — этический жест, не мелодрама. Это образец того, как чувство становится формой.")
		]
	},
	{
		n: "2",
		title: "Лермонтов. Одиночество",
		blocks: [
			h$5("«Парус», «Мцыри», лирика"),
			verse([
				"Белеет парус одинокой",
				"В тумане моря голубом!..",
				"Что ищет он в стране далёкой?",
				"Что кинул он в краю родном?.."
			]),
			p$5("Антитеза: ищет / кинул, страна далёкая / край родной. Море — свобода и угроза. У Лермонтова одиночество не поза, а устройство мира: герой не совпадает ни с толпой, ни с покоем."),
			quote("Печально я гляжу на наше поколенье! — это не ругань, а диагноз. Ищите в стихотворении, чем поколение болеет: бездействием, знанием без воли.", "К анализу")
		]
	},
	{
		n: "3",
		title: "Гоголь. Смех и страх",
		blocks: [
			h$5("«Ревизор», «Мёртвые души» — оптика"),
			p$5("Смех Гоголя не развлекательный. Чиновники боятся не правды, а начальства. Хлестаков — пустота, которую все согласны заполнить своими страхами. Чичиков покупает мёртвые души — капитал без живых людей."),
			ul$5([
				"Гротеск: нос, шинель, перебор деталей.",
				"Говорящие фамилии: Земляника, Ляпкин-Тяпкин.",
				"Немой сцена — театр останавливается, зритель остаётся один."
			]),
			note$5("Цитируйте коротко. Пересказ сюжета без идеи — не сочинение. Идея «Ревизора»: страх важнее факта.", "Сочинение")
		]
	},
	{
		n: "4",
		title: "Как писать о тексте",
		blocks: [
			h$5("План анализа стихотворения"),
			ul$5([
				"Тема и мотив (не путать: мотив повторяется, тема — ось).",
				"Композиция: строфы, кольцо, антитеза.",
				"Тропы: метафора, сравнение, эпитет, олицетворение — не список, а работа в тексте.",
				"Ритм и звук: ямб, ассонанс. Зачем они здесь.",
				"Лирический герой: чего хочет, чего боится."
			]),
			h2$5("Проза"),
			p$5("Эпизод — клетка романа. Разберите один эпизод глубоко, чем весь том поверхностно. Вопрос «зачем автор показал это сейчас» сильнее вопроса «что произошло».")
		]
	}
]);
var p$4 = (v) => ({
	t: "p",
	v
});
var h$4 = (v) => ({
	t: "h",
	v
});
var h2$4 = (v) => ({
	t: "h2",
	v
});
var ul$4 = (v) => ({
	t: "ul",
	v
});
var note$4 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$3 = (v) => ({
	t: "ex",
	v
});
var historyKgBook = compileBook({
	id: "history-kg",
	title: "История Кыргызстана",
	subtitle: "XX–XXI века",
	authors: "М. К. Иманакулов",
	subject: "history",
	subjectLabel: "История",
	grade: "9",
	lang: "ru",
	year: "2014",
	publisher: "Мектеп",
	blurb: "От Туркестана и 1916 года к советской модернизации и независимости. Факты, институты, память.",
	pagesEstimate: 176
}, [
	{
		n: "1",
		title: "Туркестан и начало XX века",
		blocks: [
			h$4("Коканд, империя, край"),
			p$4("К концу XIX века север Кыргызстана вошёл в Российскую империю, юг — после падения Кокандского ханства. Возникли уезды, переселенческие сёла, города Пишпек, Пржевальск, Ош как торговые узлы. Для кочевников ломка привычного хозяйства — скот, пастбища, налоговая система — стала главным социальным сюжетом эпохи."),
			h2$4("1916 год"),
			p$4("Восстание 1916 года — ключевая трагедия: мобилизация на тыловые работы, столкновения, исход через перевалы. В памяти народа это «Үркүн». Изучая событие, разделяйте факты, оценки современников и позднейшие интерпретации."),
			note$4("Источник важнее учебника. Дневник, приказ, статистика, устное предание — разные жанры. Спрашивайте: кто написал, зачем, чего не сказал.", "Метод")
		]
	},
	{
		n: "2",
		title: "Советский Кыргызстан",
		blocks: [
			h$4("Нация и модернизация"),
			p$4("В 1920–30-е складывается советская кыргызская государственность: автономная область, затем республика. Латиница, потом кириллица, школы, театр, газета. Одновременно — коллективизация, оседание кочевников, репрессии. История 9 класса не должна быть ни глянцем, ни сплошным чёрным цветом: держите оба ряда фактов."),
			ul$4([
				"Индустрия: шахты, ТЭЦ, заводы Фрунзе.",
				"Война 1941–1945: фронт и тыл, эвакуация, панфиловцы как место памяти.",
				"После войны: ирригация, хлопок на юге, курорт Иссык-Куль, наука."
			]),
			h2$4("Культура"),
			p$4("Письменность, Айтматов, опера, архитектура центра Фрунзе. Русский язык как язык социальной мобильности, кыргызский — как язык дома и поэзии. Это напряжение никуда не исчезло.")
		]
	},
	{
		n: "3",
		title: "Независимость. XX–XXI",
		blocks: [
			h$4("1991 и дальше"),
			p$4("31 августа 1991 года — суверенитет. Конституция, валюта сом (1993), вступление в ООН, СНГ, позднее ЕАЭС и ОТГ. Переходная экономика: рынок, миграция, роль золота «Кумтор», энергетика и вода как политика."),
			p$4("Политическая история независимости — смена президентов и Mobilization 2005, 2010, 2020. Для школьника важно не заучивать ярлыки, а понимать институты: парламент, суд, местное самоуправление, права человека."),
			h2$4("Общество"),
			ul$4([
				"Демография и урбанизация: Бишкек, Ош, регионы.",
				"Трудовая миграция в Россию и Казахстан.",
				"Языки: государственный кыргызский, официальный русский.",
				"Память: Манас, 1916, война, независимость — разные слои одной страны."
			]),
			ex$3([
				"Составьте ленту времени: 1916 — 1924 — 1936 — 1941 — 1991 — 1993.",
				"Чем отличается источник от учебника? Приведите пример.",
				"Какие ресурсы Кыргызстана имеют внешнеполитическое значение?"
			])
		]
	}
]);
var p$3 = (v) => ({
	t: "p",
	v
});
var h$3 = (v) => ({
	t: "h",
	v
});
var h2$3 = (v) => ({
	t: "h2",
	v
});
var ul$3 = (v) => ({
	t: "ul",
	v
});
var note$3 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$2 = (v) => ({
	t: "ex",
	v
});
var sovereignBook = compileBook({
	id: "sovereign",
	title: "Суверенный Кыргызстан",
	subtitle: "Граждановедение",
	authors: "Курс 9 класса",
	subject: "civics",
	subjectLabel: "Граждановедение",
	grade: "9",
	lang: "ru",
	year: "2012",
	publisher: "Мектеп",
	blurb: "Суверенитет, символы, Конституция, ветви власти и навыки гражданина.",
	pagesEstimate: 128
}, [
	{
		n: "1",
		title: "Государство и суверенитет",
		blocks: [
			h$3("Что такое суверенное государство"),
			p$3("Суверенитет — верховенство власти внутри страны и независимость вовне. Признаки государства: территория, население, власть, право, способность вступать в отношения с другими государствами. Кыргызская Республика — унитарное государство."),
			p$3("31 августа — День независимости. Конституция закрепляет права человека, разделение властей, статус государственного языка. Школьный курс граждановедения учит не лозунгам, а устройству: кто принимает закон, кто исполняет, кто судит."),
			note$3("На обложке — площадь и флаг. Символ работает, только если за ним есть институты: честные выборы, суд, бюджет, школа.", "К обложке")
		]
	},
	{
		n: "2",
		title: "Символы и Конституция",
		blocks: [
			h$3("Флаг, герб, гимн"),
			p$3("Красное поле флага — смелость. Тундук в солнце — дом и единство. Сорок лучей — сорок племён. Герб: орёл, Иссык-Куль, горы, восходящее солнце, хлопок и пшеница. Гимн знают стоя. Это не декорация урока — это язык, на котором государство говорит о себе."),
			h2$3("Права и обязанности"),
			ul$3([
				"Право на жизнь, достоинство, образование, труд, судебную защиту.",
				"Свобода слова не равна праву оскорблять и клеветать.",
				"Обязанности: соблюдать Конституцию, беречь природу, защищать Отечество, платить законные налоги."
			]),
			p$3("Гражданство приобретается по рождению и по закону. Двойное гражданство регулируется отдельно. Документы: паспорт, ID, свидетельство — это не «бумажки», а связь человека и государства.")
		]
	},
	{
		n: "3",
		title: "Ветви власти и местное самоуправление",
		blocks: [
			h$3("Кто есть кто"),
			p$3("Законодательная власть — Жогорку Кенеш. Исполнительная — президент и кабинет. Судебная — независимые суды. Местное самоуправление — айыл окмоту, мэрии, кенеши. Бюджет школы и дороги часто решается ближе к дому, чем кажется."),
			h2$3("Как участвовать"),
			p$3("Голосовать, наблюдать за выборами, писать обращения, работать в школьном самоуправлении, проверять факты, а не репостить слух. Гражданственность — навык, как уравнение: без практики ржавеет."),
			ex$2([
				"Назовите три признака государства и приложите их к КР.",
				"Чем закон отличается от указа? Приведите пример каждого.",
				"Составьте обращение в айыл окмоту о конкретной проблеме двора или школы (черновик)."
			])
		]
	}
]);
var p$2 = (v) => ({
	t: "p",
	v
});
var h$2 = (v) => ({
	t: "h",
	v
});
var h2$2 = (v) => ({
	t: "h2",
	v
});
var ul$2 = (v) => ({
	t: "ul",
	v
});
var note$2 = (v, k) => ({
	t: "note",
	v,
	k
});
var ex$1 = (v) => ({
	t: "ex",
	v
});
var geographyBook = compileBook({
	id: "geography",
	title: "География Кыргызской Республики",
	subtitle: "8–9 классы",
	authors: "Курс 8–9 классов",
	subject: "geography",
	subjectLabel: "География",
	grade: "8–9",
	lang: "ru",
	year: "2011",
	publisher: "Мектеп",
	blurb: "Рельеф, климат, вода, население и хозяйство. Карта областей — обязательный минимум.",
	pagesEstimate: 160
}, [
	{
		n: "1",
		title: "Положение и рельеф",
		blocks: [
			h$2("В центре Азии"),
			p$2("Кыргызстан — внутриконтинентальная страна, соседи: Казахстан, Узбекистан, Таджикистан, Китай. Выхода к океану нет: климат континентальный, амплитуда температур большая. Более 90% территории — горы. Тянь-Шань и Памиро-Алай — каркас страны."),
			ul$2([
				"Пик Победы (Жеңиш) — 7439 м, пик Ленина — 7134 м.",
				"Впадины: Чуйская, Таласская, Иссык-Кульская, Ферганская окраина.",
				"Сейсмичность высокая: строить и жить нужно с этим знанием."
			]),
			note$2("На карте обложки — контур республики и области. Выучите области и центры: Чуй (Бишкек), Иссык-Куль (Каракол), Нарын, Талас, Джалал-Абад, Ош, Баткен, город Ош, город Бишкек.", "Карта")
		]
	},
	{
		n: "2",
		title: "Климат, вода, ледники",
		blocks: [
			h$2("Климат"),
			p$2("Зима холодная, лето жаркое в долинах, прохладное в горах. Осадки западный перенос и местная циркуляция. Высотная поясность сильнее широты: за час на машине можно сменить степь на ели и сырты."),
			h2$2("Вода"),
			p$2("Иссык-Куль — бессточное озеро, солоноватое, не замерзает в открытой части. Реки: Нарын (исток Сырдарьи), Чу, Талас, Сары-Джаз, Кызыл-Суу. Ледники — стратегический запас. ГЭС на Нарыне — энергия и политика воды в долине."),
			p$2("Сели, лавины, озёра прорыва (как в истории сёл под ледниками) — география здесь не картинка, а безопасность.")
		]
	},
	{
		n: "3",
		title: "Население и хозяйство",
		blocks: [
			h$2("Люди"),
			p$2("Население сосредоточено в долинах. Бишкек и Ош — два полюса. Многонациональность: кыргызы, узбеки, русские и другие. Миграция внутри страны — в столицу, вовне — на заработки."),
			h2$2("Хозяйство"),
			ul$2([
				"Животноводство: овцы, лошади, яки на сыртах.",
				"Земледелие в долинах: зерно, овощи, хлопок, табак, абрикос.",
				"Недра: золото, сурьма, уголь, редкие металлы.",
				"Туризм: Иссык-Куль, треккинг, шёлковый путь, юрта как опыт, не сувенир только."
			]),
			ex$1([
				"Почему Ферганская долина густо населена, а внутренний Тянь-Шань — нет?",
				"Свяжите ГЭС, полив и международные реки одним абзацем.",
				"Назовите три высотных пояса от Бишкека к Ала-Арче."
			])
		]
	}
]);
var p$1 = (v) => ({
	t: "p",
	v
});
var h$1 = (v) => ({
	t: "h",
	v
});
var h2$1 = (v) => ({
	t: "h2",
	v
});
var ul$1 = (v) => ({
	t: "ul",
	v
});
var note$1 = (v, k) => ({
	t: "note",
	v,
	k
});
var religionsBook = compileBook({
	id: "religions",
	title: "История развития религий",
	subtitle: "9 класс",
	authors: "Курс 9 класса",
	subject: "religion",
	subjectLabel: "Религии",
	grade: "9",
	lang: "ru",
	year: "2013",
	publisher: "Мектеп",
	blurb: "Светский обзор верований мира и Кыргызстана: культура, право, уважение, точность.",
	pagesEstimate: 144
}, [
	{
		n: "1",
		title: "Зачем изучать религии",
		blocks: [
			h$1("Светская школа"),
			p$1("Курс истории религий в школе — не катехизис и не атеизм. Это культурная грамотность: праздники соседа, памятник в городе, сюжет в литературе, норма права о свободе совести. Уважение не требует согласия с чужой верой; требует точности."),
			p$1("Религия — система представлений о священном, ритуалов, этики и общины. Миф, догмат, обряд, институт — разные слои. Путать их — как путать поэму, закон и расписание."),
			note$1("Конституция КР гарантирует свободу совести. Государство отделено от религии. Принуждение к вере или к безверию одинаково вне закона.", "Право")
		]
	},
	{
		n: "2",
		title: "Древние верования и мировые религии",
		blocks: [
			h$1("Дописьменные культы"),
			p$1("Анимизм, культ предков, шаманизм, тенгрианские пласты кочевников Центральной Азии — это не «примитив», а способ жить с горой, зверем и родом. Следы живут в обрядах, орнаменте, эпосе."),
			h2$1("Иудаизм, христианство, ислам"),
			p$1("Три авраамические традиции связаны общим сюжетом единобожия. Иудаизм — Тора, завет, календарь. Христианство — Евангелие, церковь, разнообразие конфессий (православие в Кыргызстане исторически заметно). Ислам — Коран, Сунна, пять столпов; в Кыргызстане преобладает суннитская традиция ханафитского толка, с местными обычаями."),
			ul$1([
				"Буддизм: Четыре благородные истины, сангха, ненасилие. На Великом шёлковом пути буддийские следы есть и в Тянь-Шане.",
				"Индуизм — дхарма, карма, многообразие культов Индии.",
				"Конфуцианство и даосизм ближе к этике и космологии, чем к «церкви» в европейском смысле."
			])
		]
	},
	{
		n: "3",
		title: "Религии в Кыргызстане",
		blocks: [
			h$1("Многоголосие"),
			p$1("Ислам, православие, небольшие общины других христианских церквей, иудаизм, буддизм, новые движения. Светские праздники (Нооруз, 9 мая, 31 августа) соседствуют с религиозными. Конфликт начинается там, где путают веру, этничность и политику."),
			h2$1("Как читать источник"),
			p$1("Священный текст для верующего — норма, для историка — памятник. В школе вы историк культуры: цитируйте аккуратно, не вырывайте строку как оружие, отличайте богословие от бытовой практики."),
			note$1("Экстремизм прикрывается религиозным языком, но ломает и религию, и закон. Признак: запрет сомнения, вражда к «чужим», обещание простого насилия вместо сложной жизни.", "Безопасность")
		]
	}
]);
var p = (v) => ({
	t: "p",
	v
});
var h = (v) => ({
	t: "h",
	v
});
var h2 = (v) => ({
	t: "h2",
	v
});
var tex = (v) => ({
	t: "tex",
	v
});
var ul = (v) => ({
	t: "ul",
	v
});
var note = (v, k) => ({
	t: "note",
	v,
	k
});
var ex = (v) => ({
	t: "ex",
	v
});
var books = [
	physicsBook,
	chemistryBook,
	biologyBook,
	algebraBook,
	geometryBook,
	compileBook({
		id: "informatics",
		title: "Информатика",
		subtitle: "7–9 классы",
		authors: "И. Н. Шибут и др.",
		subject: "informatics",
		subjectLabel: "Информатика",
		grade: "7–9",
		lang: "ru",
		year: "2015",
		publisher: "Мектеп",
		blurb: "Информация, алгоритм, введение в программирование, сеть и цифровая гигиена.",
		pagesEstimate: 192
	}, [
		{
			n: "1",
			title: "Информация и компьютер",
			blocks: [
				h("Единицы и кодирование"),
				p("Бит — да/нет. Байт — 8 бит. 1 КиБ = 1024 байт. Текст, звук, картинка, программа — всё в конечном счёте биты. Кодировки текста: UTF-8 понимает кыргызский и русский, старые CP1251 — нет. Картинка: растр (пиксели) и вектор (кривые)."),
				tex("I = \\log_2 N \\quad \\text{(формула Хартли: N равновероятных сообщений)}"),
				h2("Устройство ПК"),
				ul([
					"Процессор — выполняет команды.",
					"ОЗУ — рабочая память, при выключении пустеет.",
					"ПЗУ / накопитель — долгое хранение.",
					"Ввод-вывод: клавиатура, экран, сеть."
				]),
				note("На обложке — рука-манипулятор и человек у компьютера. Информатика 7–9: не «кнопки Office», а модель, алгоритм, данные, сеть.", "К обложке")
			]
		},
		{
			n: "2",
			title: "Алгоритмы",
			blocks: [
				h("Свойства"),
				p("Дискретность, понятность, конечность, результативность, массовость. Способы записи: словесный, блок-схема, псевдокод, язык программирования."),
				h2("Базовые структуры"),
				ul([
					"Следование — шаги друг за другом.",
					"Ветвление — если / иначе.",
					"Цикл — пока условие истинно или заданное число раз."
				]),
				p("Исполнитель имеет среду, систему команд и отказы. Робот на клетчатом поле — учебная модель. Ошибка «на один» (off-by-one) — самая частая в циклах: проверьте границы."),
				ex([
					"Нарисуйте блок-схему: найти максимум из трёх чисел.",
					"Сколько бит нужно, чтобы закодировать 32 символа?",
					"Чем алгоритм отличается от программы?"
				])
			]
		},
		{
			n: "3",
			title: "Программирование",
			blocks: [
				h("Переменные и типы"),
				p("Имя, тип, значение. Целые, вещественные, строки, логический тип. Присваивание — не равенство из алгебры: a = a + 1 имеет смысл. Ввод → обработка → вывод — скелет учебной программы."),
				p("Массив — набор по индексу. Сумма, среднее, поиск, сортировка пузырьком — минимум 9 класса. Рекурсия — функция вызывает себя; для факториала наглядно, для больших n опасна без дна."),
				h2("Пример на псевдокоде"),
				p("n ← прочитать число; s ← 0; для i от 1 до n: s ← s + i; вывести s. Это сумма 1…n. Её же даёт формула n(n+1)/2 — мост в алгебру.")
			]
		},
		{
			n: "4",
			title: "Сеть и безопасность",
			blocks: [
				h("Интернет"),
				p("Протокол — договор. IP-адрес — где хост, DNS — имя в адрес. HTTP — страницы, HTTPS — с шифрованием. Почта, мессенджер, облако — сервисы на тех же принципах."),
				ul([
					"Пароль длинный и свой, не из словаря.",
					"Не скачивать «взломку» — там троян, не подарок.",
					"Персональные данные: свои и чужие фото не выкладывают без спроса.",
					"Фишинг: письмо «ваш пароль сгорел, введите здесь»."
				]),
				note("Авторское право действует и в сети. Скачать учебник с пиратского сайта — не «находчивость». Этот курс как раз затем, чтобы читать легально и понимать, как устроены данные.", "Этика")
			]
		}
	]),
	englishBook,
	russianBook,
	kyrgyzLangBook,
	kyrgyzLitBook,
	literatureBook,
	historyKgBook,
	sovereignBook,
	geographyBook,
	religionsBook
];
function getBook(id) {
	return books.find((b) => b.id === id);
}
//#endregion
export { lastReadId as a, getBook as i, books as n, useLibrary as o, cn as r, BookCover as t };
