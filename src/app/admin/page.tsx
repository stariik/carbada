import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import Image from "next/image";
import AdminCardEditor from "@/components/AdminCardEditor";
import { ServiceCardData } from "@/components/ServiceCard";
import LogoutButton from "./LogoutButton";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "carbada-secret-key-2024-very-secure"
);

async function getCardsForAdmin(): Promise<ServiceCardData[]> {
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

export default async function AdminDashboardPage() {
  // Verify JWT server-side (middleware already redirects, this is an extra safety check)
  const cookieStore = await cookies();
  const token = cookieStore.get("carbada_auth")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  try {
    await jwtVerify(token, JWT_SECRET);
  } catch {
    redirect("/admin/login");
  }

  const cards = await getCardsForAdmin();

  return (
    <div
      className="min-h-screen"
      style={{ background: "#f8f4f0" }}
    >
      {/* Top bar */}
      <header style={{ background: "#2D2D2D" }} className="shadow-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-40">
              <Image
                src="/images/logo.png"
                alt="Carbada"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-px h-5 bg-white/20" />
              <span className="text-white/50 text-sm">ადმინ პანელი</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              საიტი
            </a>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-dark">
            სერვის-ბარათების მართვა
          </h1>
          <p className="text-dark-muted mt-1 text-sm">
            შეცვალეთ მთავარ გვერდზე გამოჩენილი სერვის-ბარათების კონტენტი.
          </p>
          <div className="w-12 h-1 bg-brown-500 rounded-full mt-3" />
        </div>

        {cards.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <AdminCardEditor key={card.id} card={card} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-dark-muted bg-white rounded-2xl border border-brown-100">
            <svg className="w-12 h-12 text-brown-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            ბარათების ჩატვირთვა ვერ მოხერხდა
          </div>
        )}
      </main>
    </div>
  );
}
