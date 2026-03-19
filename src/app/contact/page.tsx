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
          className="py-16 md:py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2D2D2D 0%, #5C3D2E 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block text-brown-300 text-sm font-semibold uppercase tracking-widest mb-4">
              დაგვიკავშირდით
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              კონტაქტი
            </h1>
            <p className="text-white/65 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              ჩვენი გუნდი მზადაა პასუხი გასცეს თქვენს ნებისმიერ კითხვას.
              მოგვწერეთ ან დაგვირეკეთ — სიამოვნებით დაგეხმარებით.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-10 md:h-14">
              <path d="M0,50 C360,10 1080,50 1440,20 L1440,50 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Contact cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <ContactCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                label="ტელეფონი"
                value="+995 XXX XXX XXX"
                href="tel:+995XXXXXXXXX"
                linkLabel="დარეკეთ"
              />

              {/* Email */}
              <ContactCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              {/* Address */}
              <ContactCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Info block */}
            <div
              className="mt-16 rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #fdf6f0, #f7e6d4)",
                border: "1px solid #edcba8",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-brown-700 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">სამუშაო საათები</h3>
              <p className="text-dark-muted mb-1">ორშაბათი — პარასკევი: 9:00 — 18:00</p>
              <p className="text-dark-muted mb-1">შაბათი: 10:00 — 15:00</p>
              <p className="text-dark-muted">კვირა: დასვენება</p>
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
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-brown-100">
      <div className="w-16 h-16 rounded-2xl bg-brown-700 flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-brown-600 uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className="text-dark font-semibold text-base">{value}</p>
      </div>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="btn-brown-outline text-sm px-5 py-2"
      >
        {linkLabel}
      </a>
    </div>
  );
}
