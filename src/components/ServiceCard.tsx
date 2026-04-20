import Image from "next/image";
import Link from "next/link";

export interface ServiceCardData {
  id: number;
  title: string;
  description: string;
  button_text: string;
  image_path: string;
}

const cardGradients = [
  "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #3b82f6 100%)",
  "linear-gradient(135deg, #1e293b 0%, #1e40af 40%, #1d4ed8 100%)",
  "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #93c5fd 100%)",
];

const cardIcons = [
  // Car keys / sale icon
  <svg key="sale" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 opacity-80">
    <path d="M10 50 L20 30 Q22 26 26 26 L54 26 Q58 26 60 30 L70 50 Q72 52 72 54 L72 58 Q72 60 70 60 L64 60 L64 62 Q64 66 60 66 L56 66 Q52 66 52 62 L52 60 L28 60 L28 62 Q28 66 24 66 L20 66 Q16 66 16 62 L16 60 L10 60 Q8 60 8 58 L8 54 Q8 52 10 50 Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2"/>
    <circle cx="22" cy="56" r="4" fill="white" fillOpacity="0.5"/>
    <circle cx="58" cy="56" r="4" fill="white" fillOpacity="0.5"/>
    <path d="M24 36 L30 26 L50 26 L56 36 Z" fill="white" fillOpacity="0.3"/>
    <path d="M48 18 L52 22 M56 14 L52 22 M56 14 L60 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="54" cy="12" r="3" fill="white" fillOpacity="0.6"/>
  </svg>,
  // Car rental icon
  <svg key="rental" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 opacity-80">
    <path d="M10 50 L20 30 Q22 26 26 26 L54 26 Q58 26 60 30 L70 50 Q72 52 72 54 L72 58 Q72 60 70 60 L64 60 L64 62 Q64 66 60 66 L56 66 Q52 66 52 62 L52 60 L28 60 L28 62 Q28 66 24 66 L20 66 Q16 66 16 62 L16 60 L10 60 Q8 60 8 58 L8 54 Q8 52 10 50 Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2"/>
    <circle cx="22" cy="56" r="4" fill="white" fillOpacity="0.5"/>
    <circle cx="58" cy="56" r="4" fill="white" fillOpacity="0.5"/>
    <path d="M24 36 L30 26 L50 26 L56 36 Z" fill="white" fillOpacity="0.3"/>
    <path d="M38 10 L42 18 M38 10 L30 14 M38 10 L46 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32 20 Q38 16 44 20" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>,
  // Taxi icon
  <svg key="taxi" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 opacity-80">
    <path d="M10 50 L20 30 Q22 26 26 26 L54 26 Q58 26 60 30 L70 50 Q72 52 72 54 L72 58 Q72 60 70 60 L64 60 L64 62 Q64 66 60 66 L56 66 Q52 66 52 62 L52 60 L28 60 L28 62 Q28 66 24 66 L20 66 Q16 66 16 62 L16 60 L10 60 Q8 60 8 58 L8 54 Q8 52 10 50 Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2"/>
    <circle cx="22" cy="56" r="4" fill="white" fillOpacity="0.5"/>
    <circle cx="58" cy="56" r="4" fill="white" fillOpacity="0.5"/>
    <path d="M24 36 L30 26 L50 26 L56 36 Z" fill="white" fillOpacity="0.3"/>
    <rect x="30" y="14" width="20" height="8" rx="2" fill="white" fillOpacity="0.5"/>
    <text x="40" y="21" textAnchor="middle" fill="#1d4ed8" fontSize="7" fontWeight="bold">TAXI</text>
  </svg>,
];

export default function ServiceCard({
  card,
  index,
}: {
  card: ServiceCardData;
  index: number;
}) {
  const gradient = cardGradients[index % cardGradients.length];
  const icon = cardIcons[index % cardIcons.length];
  const hasImage = card.image_path && card.image_path.trim() !== "";

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden card-shadow
                 hover:-translate-y-2 active:scale-[0.99] transition-all duration-300
                 flex flex-col border border-blue-100"
      style={{ boxShadow: "0 4px 24px rgba(29,78,216,0.08)" }}
    >
      {/* Image area — shorter on mobile (h-40), taller on desktop (h-52) */}
      <div className="relative h-40 md:h-52 overflow-hidden">
        {hasImage ? (
          <Image
            src={card.image_path}
            alt={card.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
            style={{ background: gradient }}
          >
            <div className="flex flex-col items-center gap-3">
              {icon}
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/40"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6 gap-3 md:gap-4">
        {/* Title with blue accent bar */}
        <div className="flex items-start gap-3">
          <div className="w-1 h-7 rounded-full bg-blue-600 mt-0.5 flex-shrink-0" />
          <h3 className="text-lg md:text-xl font-bold text-dark leading-tight">
            {card.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-dark-muted text-sm leading-relaxed flex-1">
          {card.description}
        </p>

        {/* Button — full-width with generous touch target */}
        <Link
          href="/contact"
          className="btn-blue w-full text-sm tracking-wide mt-1"
        >
          {card.button_text}
        </Link>
      </div>
    </article>
  );
}
