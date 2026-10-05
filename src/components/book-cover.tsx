import type { BookMeta } from "@/lib/books/types";
import { cn } from "@/lib/utils";

function Art({ id, title }: { id: string; title?: string }) {
  switch (id) {
    case "physics":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1b6564" />
          <rect x="14" y="78" width="118" height="150" fill="#d8c48a" />
          <g fill="none" stroke="#1a1612" strokeWidth="1.2">
            {Array.from({ length: 10 }, (_, i) => (
              <path key={`h${i}`} d={`M14 ${90 + i * 14} H132`} opacity="0.25" />
            ))}
            {Array.from({ length: 8 }, (_, i) => (
              <path key={`v${i}`} d={`M${28 + i * 14} 78 V228`} opacity="0.25" />
            ))}
            <circle cx="108" cy="148" r="28" fill="#efe6c9" stroke="#1a1612" />
            <circle cx="108" cy="148" r="3" fill="#1a1612" />
            <path d="M108 148 L126 136" stroke="#b42318" strokeWidth="2" />
            <path d="M36 118 H78" stroke="#1a1612" />
            <path d="M50 170 V118" />
            <rect x="44" y="168" width="52" height="10" fill="#4a4a4a" />
            <path d="M96 173 C108 173 118 168 128 173 C138 178 148 170 158 173" />
          </g>
          <text x="24" y="48" fill="#e7f1ea" fontSize="22" fontFamily="Literata, serif" fontWeight="700">
            ФИЗИКА
          </text>
          <text x="154" y="250" fill="#0e3a3c" fontSize="72" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "chemistry":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1f6a3e" />
          <circle cx="58" cy="150" r="46" fill="none" stroke="#d6e86a" strokeWidth="10" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return <circle key={i} cx={58 + Math.cos(a) * 46} cy={150 + Math.sin(a) * 46} r="6" fill="#d6e86a" />;
          })}
          <g fill="none" stroke="#d6e86a" strokeWidth="1.4" transform="translate(118,118)">
            <path d="M20 0 L10 16 L-10 16 L-20 0 L-10 -16 L10 -16 Z" />
            <circle cx="20" cy="0" r="3" fill="#d6e86a" />
            <circle cx="-20" cy="0" r="3" fill="#d6e86a" />
          </g>
          <text
            x="168"
            y="78"
            fill="#e8f5e4"
            fontSize="18"
            fontFamily="Literata, serif"
            fontWeight="700"
            transform="rotate(90 168 78)"
          >
            ХИМИЯ
          </text>
          <text x="24" y="268" fill="#d6e86a" fontSize="56" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "biology":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#2d6b32" />
          <circle cx="100" cy="150" r="62" fill="#1e4c24" />
          <path d="M100 88 A62 62 0 0 1 100 212 A40 40 0 0 0 100 88" fill="#c45c2c" />
          <path d="M100 88 A62 62 0 0 0 100 212 A40 40 0 0 1 100 88" fill="#3d8a8a" />
          <circle cx="100" cy="150" r="28" fill="#f3f6e8" />
          <text x="100" y="160" textAnchor="middle" fill="#2d6b32" fontSize="28" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
          <text x="24" y="42" fill="#f3f6e8" fontSize="18" fontFamily="Literata, serif" fontWeight="700">
            БИОЛОГИЯ
          </text>
        </svg>
      );
    case "algebra":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#6fa8c4" />
          <g stroke="#102030" strokeWidth="0.6" opacity="0.25">
            {Array.from({ length: 12 }, (_, i) => (
              <path key={i} d={`M0 ${i * 26} H200`} />
            ))}
            {Array.from({ length: 8 }, (_, i) => (
              <path key={`v${i}`} d={`M${i * 26} 0 V300`} />
            ))}
          </g>
          <path d="M20 220 L80 40 L160 160" fill="none" stroke="#102030" strokeWidth="3" />
          <text x="18" y="48" fill="#102030" fontSize="22" fontFamily="Literata, serif" fontWeight="700">
            АЛГЕБРА
          </text>
          <text x="18" y="270" fill="#102030" fontSize="48" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "geometry":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#d37a32" />
          <path d="M40 230 L100 70 L160 230 Z" fill="none" stroke="#2a1408" strokeWidth="3" />
          <path d="M70 150 L130 150 L100 70 Z" fill="none" stroke="#2a1408" strokeWidth="1.4" />
          <text
            x="178"
            y="70"
            fill="#2a1408"
            fontSize="16"
            fontFamily="Literata, serif"
            fontWeight="700"
            transform="rotate(90 178 70)"
          >
            ГЕОМЕТРИЯ
          </text>
          <text x="18" y="274" fill="#2a1408" fontSize="42" fontFamily="Literata, serif" fontWeight="700">
            7–11
          </text>
        </svg>
      );
    case "informatics":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#5a2438" />
          <rect x="28" y="150" width="90" height="70" rx="6" fill="#c4a574" />
          <path d="M118 186 H160 V140" fill="none" stroke="#e8d3b0" strokeWidth="8" strokeLinecap="round" />
          <circle cx="160" cy="128" r="10" fill="#e8d3b0" />
          <text x="18" y="48" fill="#f4e6ea" fontSize="16" fontFamily="Literata, serif" fontWeight="700">
            ИНФОРМАТИКА
          </text>
          <text x="18" y="78" fill="#e8d3b0" fontSize="28" fontFamily="Literata, serif" fontWeight="700">
            7–9
          </text>
        </svg>
      );
    case "english":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1d7ec4" />
          <circle cx="150" cy="40" r="36" fill="#f4d36a" />
          <path d="M-10 210 C60 150 140 230 220 170 L220 300 L-10 300 Z" fill="#3fa34d" />
          <path d="M20 150 L90 118 L168 132 L90 142 Z" fill="#eef6ff" />
          <circle cx="70" cy="132" r="10" fill="#1d7ec4" />
          <text x="18" y="56" fill="#f4fbff" fontSize="14" fontFamily="Manrope, sans-serif" fontWeight="700">
            Take Off
          </text>
          <text x="18" y="78" fill="#f4fbff" fontSize="12" fontFamily="Manrope, sans-serif">
            with English
          </text>
          <text x="24" y="268" fill="#f4d36a" fontSize="64" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "russian":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#8a6a2b" />
          <rect x="18" y="18" width="164" height="264" fill="none" stroke="#f8eed6" strokeWidth="1.2" />
          <text
            x="168"
            y="48"
            fill="#f8eed6"
            fontSize="16"
            fontFamily="Literata, serif"
            fontWeight="700"
            transform="rotate(90 168 48)"
          >
            РУССКИЙ ЯЗЫК
          </text>
          <text x="36" y="180" fill="#f8eed6" fontSize="88" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "kyrgyz-lang":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1d4f86" />
          <text x="24" y="64" fill="#eaf2fb" fontSize="20" fontFamily="Literata, serif" fontWeight="700">
            КЫРГЫЗ
          </text>
          <text x="24" y="90" fill="#eaf2fb" fontSize="20" fontFamily="Literata, serif" fontWeight="700">
            ТИЛИ
          </text>
          <g fill="none" stroke="#eaf2fb" strokeWidth="1.2">
            <rect x="120" y="40" width="48" height="56" />
            <rect x="120" y="108" width="48" height="56" />
            <rect x="120" y="176" width="48" height="56" />
          </g>
          <text x="24" y="260" fill="#eaf2fb" fontSize="64" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "kyrgyz-lit":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#6b3a1e" />
          <rect x="40" y="150" width="120" height="90" fill="#c4a574" />
          <path d="M40 150 L100 110 L160 150" fill="#8c5a32" />
          <text x="20" y="48" fill="#f6ead8" fontSize="16" fontFamily="Literata, serif" fontWeight="700">
            Кыргыз
          </text>
          <text x="20" y="72" fill="#f6ead8" fontSize="16" fontFamily="Literata, serif" fontWeight="700">
            адабияты
          </text>
          <text x="148" y="270" fill="#f6ead8" fontSize="48" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "literature":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#cbb99a" />
          <rect x="54" y="86" width="92" height="110" fill="#5d5346" />
          <rect x="62" y="96" width="76" height="50" fill="#9aa7b0" />
          <text x="24" y="48" fill="#2a2218" fontSize="16" fontFamily="Literata, serif" fontWeight="700">
            ЛИТЕРАТУРА
          </text>
          <text x="24" y="72" fill="#2a2218" fontSize="22" fontFamily="Literata, serif">
            9
          </text>
        </svg>
      );
    case "history-kg":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1f4d73" />
          <rect x="18" y="86" width="164" height="70" fill="#d9d3c6" />
          <rect x="28" y="100" width="40" height="44" fill="#4d5c66" />
          <rect x="80" y="100" width="28" height="50" fill="#6a7c86" />
          <path d="M80 94 L94 70 L108 94" fill="#6a7c86" />
          <text x="18" y="48" fill="#eef5fb" fontSize="14" fontFamily="Literata, serif" fontWeight="700">
            ИСТОРИЯ
          </text>
          <text x="18" y="68" fill="#eef5fb" fontSize="14" fontFamily="Literata, serif">
            КЫРГЫЗСТАНА
          </text>
          <text x="150" y="270" fill="#eef5fb" fontSize="48" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "sovereign":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1a5fa0" />
          <rect x="20" y="70" width="160" height="90" fill="#9ec0e0" />
          <rect x="86" y="108" width="10" height="52" fill="#c4a032" />
          <rect x="70" y="96" width="42" height="22" fill="#c0392b" />
          <circle cx="91" cy="107" r="6" fill="#f4d36a" />
          <text x="20" y="188" fill="#f2f7fc" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600">
            СУВЕРЕННЫЙ
          </text>
          <text x="20" y="206" fill="#f2f7fc" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600">
            КЫРГЫЗСТАН
          </text>
          <text x="150" y="270" fill="#f2f7fc" fontSize="48" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    case "geography":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#2f4c7a" />
          <path
            d="M40 80 C70 70 90 90 120 86 C150 82 170 100 176 130 C180 160 150 190 120 200 C80 214 50 190 36 150 C28 120 24 90 40 80 Z"
            fill="#d9e4f2"
          />
          <path d="M70 120 C90 110 130 130 140 160" fill="none" stroke="#2f4c7a" strokeWidth="2" />
          <text
            x="178"
            y="48"
            fill="#eef3fa"
            fontSize="13"
            fontFamily="Literata, serif"
            fontWeight="700"
            transform="rotate(90 178 48)"
          >
            ГЕОГРАФИЯ
          </text>
          <text x="18" y="270" fill="#eef3fa" fontSize="28" fontFamily="Literata, serif" fontWeight="700">
            8–9
          </text>
        </svg>
      );
    case "religions":
      return (
        <svg viewBox="0 0 200 300" className="absolute inset-0 size-full" aria-hidden>
          <rect width="200" height="300" fill="#1c2430" />
          <path d="M100 40 L160 100 L100 160 L40 100 Z" fill="#c5b8a8" />
          <path d="M100 100 L160 160 L100 220 L40 160 Z" fill="#3d4654" />
          <text x="24" y="48" fill="#f3efe4" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            ИСТОРИЯ
          </text>
          <text x="24" y="66" fill="#f3efe4" fontSize="13" fontFamily="Manrope, sans-serif" fontWeight="600">
            РАЗВИТИЯ РЕЛИГИЙ
          </text>
          <text x="24" y="270" fill="#c5b8a8" fontSize="48" fontFamily="Literata, serif" fontWeight="700">
            9
          </text>
        </svg>
      );
    default:
      return (
        <div className="absolute inset-0 flex items-end bg-raised p-3">
          <p className="font-serif text-base leading-tight font-semibold text-fg">{title}</p>
        </div>
      );
  }
}

export function BookCover({
  book,
  className,
  showMeta = false,
  imageUrl,
}: {
  book: Pick<BookMeta, "id" | "title">;
  className?: string;
  showMeta?: boolean;
  /** Пользовательская обложка; без неё рисуется встроенная SVG-обложка. */
  imageUrl?: string;
}) {
  return (
    <div data-cover={book.id} className={cn("book-cover", className)}>
      {imageUrl ? (
        <img src={imageUrl} alt="" className="absolute inset-0 size-full object-cover" />
      ) : (
        <Art id={book.id} title={book.title} />
      )}
      {showMeta ? (
        <div className="absolute inset-x-0 bottom-0 z-2 p-3 bg-linear-to-t from-black/50 to-transparent">
          <p className="font-serif text-sm leading-tight">{book.title}</p>
        </div>
      ) : null}
    </div>
  );
}
