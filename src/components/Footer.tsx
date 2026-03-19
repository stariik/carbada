import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#2D2D2D" }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="relative h-10 w-40">
              <Image
                src="/images/logo.png"
                alt="Carbada ქარბადა"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              საქართველოს პრემიუმ საავტომობილო კომპანია. ავტომობილების გაყიდვა,
              გაქირავება და სატაქსო მომსახურება.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-brown-300 font-semibold text-sm uppercase tracking-widest">
              სწრაფი ბმულები
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-brown-300 transition-colors text-sm"
                >
                  მთავარი
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-brown-300 transition-colors text-sm"
                >
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-brown-300 font-semibold text-sm uppercase tracking-widest">
              კონტაქტი
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 flex-shrink-0 text-brown-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +995 XXX XXX XXX
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 flex-shrink-0 text-brown-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@carbada.ge
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 flex-shrink-0 text-brown-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                თბილისი, საქართველო
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Carbada. ყველა უფლება დაცულია.
          </p>
          <p className="text-white/30 text-xs">
            CB CARBADA | ქარბადა
          </p>
        </div>
      </div>
    </footer>
  );
}
