import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1e3a8a" }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative h-10 w-40">
              <Image
                src="/images/logo.png"
                alt="Carbada ქარბადა"
                fill
                className="object-contain md:object-left object-center"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              საქართველოს პრემიუმ საავტომობილო კომპანია. ავტომობილების გაყიდვა,
              გაქირავება და სატაქსო მომსახურება.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-blue-300 font-semibold text-sm uppercase tracking-widest">
              სწრაფი ბმულები
            </h3>
            <ul className="flex flex-col gap-1 w-full items-center md:items-start">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center md:justify-start text-white/60 hover:text-blue-300 active:text-blue-400 transition-colors text-sm py-2 px-1"
                  style={{ minHeight: "44px" }}
                >
                  მთავარი
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center md:justify-start text-white/60 hover:text-blue-300 active:text-blue-400 transition-colors text-sm py-2 px-1"
                  style={{ minHeight: "44px" }}
                >
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-blue-300 font-semibold text-sm uppercase tracking-widest">
              კონტაქტი
            </h3>
            <ul className="flex flex-col gap-1 w-full items-center md:items-start">
              {/* Phone — tappable tel: link */}
              <li>
                <a
                  href="tel:+995511228822"
                  className="inline-flex items-center gap-2.5 text-white/60 hover:text-blue-300 active:text-blue-400 transition-colors text-sm py-2 px-1"
                  style={{ minHeight: "44px" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +995 511 228 822
                </a>
              </li>
              {/* Email — tappable mailto: link */}
              <li>
                <a
                  href="mailto:info@carbada.ge"
                  className="inline-flex items-center gap-2.5 text-white/60 hover:text-blue-300 active:text-blue-400 transition-colors text-sm py-2 px-1"
                  style={{ minHeight: "44px" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@carbada.ge
                </a>
              </li>
              {/* Address */}
              <li className="inline-flex items-center gap-2.5 text-white/60 text-sm py-2 px-1">
                <svg className="w-4 h-4 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                თბილისი, საქართველო
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 md:mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Carbada. ყველა უფლება დაცულია.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            CB CARBADA | ქარბადა
          </p>
        </div>
      </div>
    </footer>
  );
}
