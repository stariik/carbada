import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "კონტაქტი | Carbada ქარბადა",
  description:
    "დაგვიკავშირდით — ტელეფონი, ელ-ფოსტა და მისამართი. Carbada გუნდი მზადაა თქვენს სამსახურში.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Page hero */}
        <div
          className="py-12 md:py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
            paddingTop: "calc(3rem + env(safe-area-inset-top))",
          }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">
              დაგვიკავშირდით
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              კონტაქტი
            </h1>
            <p className="text-white/65 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              ჩვენი გუნდი მზადაა პასუხი გასცეს თქვენს ნებისმიერ კითხვას.
              მოგვწერეთ ან დაგვირეკეთ — სიამოვნებით დაგეხმარებით.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-8 md:h-14">
              <path d="M0,50 C360,10 1080,50 1440,20 L1440,50 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Contact cards */}
        <section className="py-10 md:py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/*
              On mobile: single column, full width cards.
              On sm: two columns.
              On md: three columns.
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Phone */}
              <ContactCard
                icon={
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                label="ტელეფონი"
                value="+995 511 228 822"
                href="tel:+995511228822"
                linkLabel="დარეკეთ"
              />

              {/* Email */}
              <ContactCard
                icon={
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                label="ელ-ფოსტა"
                value="info@carbada.ge"
                href="mailto:info@carbada.ge"
                linkLabel="გამოგვიგზავნეთ"
              />

              {/* Address — spans full width on sm (2-col grid) to avoid orphan card */}
              <div className="sm:col-span-2 md:col-span-1">
                <ContactCard
                  icon={
                    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  label="მისამართი"
                  value="თბილისი, საქართველო"
                  href="https://maps.google.com/?q=Tbilisi,Georgia"
                  linkLabel="რუკაზე ნახვა"
                />
              </div>
            </div>

            {/* Working hours info block */}
            <div
              className="mt-8 md:mt-16 rounded-2xl p-6 sm:p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                border: "1px solid #bfdbfe",
              }}
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-blue-700 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark mb-3">სამუშაო საათები</h3>
              <div className="flex flex-col gap-1.5">
                <p className="text-dark-muted text-sm md:text-base">ორშაბათი — პარასკევი: 9:00 — 18:00</p>
                <p className="text-dark-muted text-sm md:text-base">შაბათი: 10:00 — 15:00</p>
                <p className="text-dark-muted text-sm md:text-base">კვირა: დასვენება</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  linkLabel,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  linkLabel: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-4
                    shadow-card hover:shadow-card-hover transition-all duration-300
                    hover:-translate-y-1 active:scale-[0.99] border border-blue-100 w-full">
      {/* Icon container */}
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-700 flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
          {label}
        </p>
        {/* Make value itself a tappable link on mobile for phone/email */}
        {!isExternal ? (
          <a
            href={href}
            className="text-dark font-semibold text-base hover:text-blue-700 active:text-blue-800 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-dark font-semibold text-base">{value}</p>
        )}
      </div>

      {/* Action button — large touch target */}
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="btn-blue-outline text-sm px-5 w-full sm:w-auto"
        style={{ minHeight: "48px" }}
      >
        {linkLabel}
      </a>
    </div>
  );
}
