import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard, { ServiceCardData } from "@/components/ServiceCard";

const cards: ServiceCardData[] = [
  {
    id: 1,
    title: "ავტომობილების გაყიდვა",
    description:
      "იქირავეთ პრემიუმ კლასის კომფორტული ავტომობილი სამარშუტო ტაქსზე სამუშაოდ, სრულიად დაზღვეული უახლესი ავტომობილები, მოქნილი პირობები, 24/7 მხარდაჭერა.",
    button_text: "დაგვიკავშირდით",
    image_path: "/images/service-1.jpeg",
  },
  {
    id: 2,
    title: "ავტომობილების გაქირავება",
    description:
      "ვიწვევთ მძღოლებს პროფესიონალური სატაქსო სერვისისთვის თბილისსა და მის გარეთ. პრემიუმ კლასის უახლესი ავტომობილები და პუნქტუალური მომსახურება, სრულიად დაზღვეული, სამარშუტო ტაქსის ლიცენზიით — დაგვიკავშირდი და ჩაერთე Carbada Taxi-ში.",
    button_text: "დაგვიკავშირდით",
    image_path: "/images/service-2.jpeg",
  },
  {
    id: 3,
    title: "სატაქსო მომსახურება",
    description:
      "ვიწვევთ მძღოლებს პროფესიონალური სატაქსო სერვისისთვის თბილისსა და მის გარეთ. პრემიუმ კლასის უახლესი ავტომობილები და პუნქტუალური მომსახურება, სრულიად დაზღვეული, სამარშუტო ტაქსის ლიცენზიით — დაგვიკავშირდი და ჩაერთე Carbada Taxi-ში. კომფორტული ავტომობილი სამარშუტო ტაქსზე სამუშაოდ, სრულიად დაზღვეული უახლესი ავტომობილები, მოქნილი პირობები, 24/7 მხარდაჭერა.",
    button_text: "დაგვიკავშირდით",
    image_path: "/images/service-3.jpeg",
  },
];

export default function HomePage() {

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 45%, #1e3a8a 100%)",
            /* Respect safe area on notched phones */
            paddingTop: "env(safe-area-inset-top)",
          }}
        >
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 30px,
                rgba(255,255,255,0.05) 30px,
                rgba(255,255,255,0.05) 31px
              )`,
            }}
          />

          {/* Decorative circles — smaller on mobile so they don't crowd content */}
          <div
            className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ background: "radial-gradient(circle, #93c5fd, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
            style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5 md:gap-6 py-12 md:py-16">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-300/30 bg-white/5 text-blue-300 text-xs sm:text-sm font-medium tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              CB CARBADA
            </span>

            {/* Headline — scales from 2.75rem on small phones up to 4.5rem+ on desktop */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              ქარბადა
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl md:max-w-2xl">
              საქართველოს პრემიუმ საავტომობილო კომპანია — ყველა სახის
              ავტომობილური სერვისი ერთ სახლქვეშ. ჩვენ გვერდში ვართ
              თქვენი ყოველი გზა-სვლის განმავლობაში.
            </p>

            {/* CTA buttons — stack on very small screens, row on sm+ */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 mt-1 w-full sm:w-auto">
              <a
                href="#services"
                className="btn-blue px-6 sm:px-8 py-3.5 text-base w-full sm:w-auto"
              >
                ჩვენი სერვისები
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 border-2 border-white/30
                           text-white font-semibold rounded-lg transition-all duration-200
                           hover:bg-white/10 hover:border-white/50 active:bg-white/20 text-base w-full sm:w-auto"
                style={{ minHeight: "44px" }}
              >
                დაგვიკავშირდით
              </a>
            </div>

            {/* Stats row — flex-wrap so it reflows gracefully on very narrow screens */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-4 pt-5 border-t border-white/10 w-full">
              {[
                { num: "3+", label: "სერვისი" },
                { num: "100%", label: "ხარისხი" },
                { num: "24/7", label: "მხარდაჭერა" },
              ].map((stat) => (
                <div key={stat.label} className="text-center min-w-[60px]">
                  <div className="text-xl sm:text-2xl font-bold text-blue-300">{stat.num}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-16">
              <path
                d="M0,60 C240,20 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-14 md:py-20 lg:py-28 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
                ჩვენი სერვისები
              </span>
              <h2 className="section-title mb-4">
                რას{" "}
                <span className="text-gradient-blue">გთავაზობთ</span>
              </h2>
              <p className="text-dark-muted max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                Carbada გთავაზობთ სამ ძირითად სერვისს, რომელიც მოიცავს
                ავტომობილების სრულ ციკლს — შეძენიდან გაქირავებამდე.
              </p>
              <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-6" />
            </div>

            {/* Cards grid — single column on mobile, 3 on desktop */}
            {cards.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                {cards.map((card, index) => (
                  <ServiceCard key={card.id} card={card} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-dark-muted text-sm">
                სერვისების ჩატვირთვა ვერ მოხერხდა. გთხოვთ სცადოთ მოგვიანებით.
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-14 md:py-20 lg:py-24"
          style={{
            background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5 md:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              მზად ხართ დაწყებისთვის?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-md sm:max-w-none">
              დაგვიკავშირდით დღეს და ჩვენი გუნდი სიამოვნებით დაგეხმარებათ
              თქვენთვის საუკეთესო ვარიანტის პოვნაში.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white text-blue-700 font-bold rounded-xl
                         transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5
                         active:bg-blue-100 active:translate-y-0 text-base w-full sm:w-auto"
              style={{ minHeight: "52px", maxWidth: "280px" }}
            >
              კონტაქტი
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
