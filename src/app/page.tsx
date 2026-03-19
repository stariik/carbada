import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard, { ServiceCardData } from "@/components/ServiceCard";

async function getCards(): Promise<ServiceCardData[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `http://localhost:${process.env.PORT || 3000}`;
    const res = await fetch(`${baseUrl}/api/cards`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.cards ?? [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const cards = await getCards();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2D2D2D 0%, #5C3D2E 45%, #2D2D2D 100%)",
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

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
               style={{ background: "radial-gradient(circle, #D2B48C, transparent)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
               style={{ background: "radial-gradient(circle, #A0522D, transparent)" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brown-300/30 bg-white/5 text-brown-300 text-sm font-medium tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brown-300 animate-pulse" />
              CB CARBADA
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              ქარბადა
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              საქართველოს პრემიუმ საავტომობილო კომპანია — ყველა სახის
              ავტომობილური სერვისი ერთ სახლქვეშ. ჩვენ გვერდში ვართ
              თქვენი ყოველი გზა-სვლის განმავლობაში.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a href="#services" className="btn-brown px-8 py-3.5 text-base">
                ჩვენი სერვისები
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg
                           transition-all duration-300 hover:bg-white/10 hover:border-white/50 text-base"
              >
                დაგვიკავშირდით
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/10">
              {[
                { num: "3+", label: "სერვისი" },
                { num: "100%", label: "ხარისხი" },
                { num: "24/7", label: "მხარდაჭერა" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-brown-300">{stat.num}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16">
              <path
                d="M0,60 C240,20 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="inline-block text-brown-600 text-sm font-semibold uppercase tracking-widest mb-3">
                ჩვენი სერვისები
              </span>
              <h2 className="section-title mb-4">
                რას{" "}
                <span className="text-gradient-brown">გთავაზობთ</span>
              </h2>
              <p className="text-dark-muted max-w-xl mx-auto leading-relaxed">
                Carbada გთავაზობთ სამ ძირითად სერვისს, რომელიც მოიცავს
                ავტომობილების სრულ ციკლს — შეძენიდან გაქირავებამდე.
              </p>
              <div className="w-16 h-1 bg-brown-500 rounded-full mx-auto mt-6" />
            </div>

            {/* Cards grid */}
            {cards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                  <ServiceCard key={card.id} card={card} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-dark-muted">
                სერვისების ჩატვირთვა ვერ მოხერხდა. გთხოვთ სცადოთ მოგვიანებით.
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 md:py-24"
          style={{
            background: "linear-gradient(135deg, #5C3D2E 0%, #2D2D2D 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              მზად ხართ დაწყებისთვის?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              დაგვიკავშირდით დღეს და ჩვენი გუნდი სიამოვნებით დაგეხმარებათ
              თქვენთვის საუკეთესო ვარიანტის პოვნაში.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-brown-700 font-bold rounded-xl
                         transition-all duration-300 hover:bg-brown-50 hover:shadow-lg hover:-translate-y-0.5 text-base"
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
