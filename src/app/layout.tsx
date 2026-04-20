import type { Metadata, Viewport } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carbada | ქარბადა - ავტომობილების გაყიდვა, გაქირავება და ტაქსი",
  description:
    "Carbada (ქარბადა) - საქართველოს პრემიუმ საავტომობილო კომპანია. ავტომობილების გაყიდვა, გაქირავება და სატაქსო მომსახურება თბილისსა და მთელ საქართველოში.",
  keywords:
    "carbada, ქარბადა, ავტომობილი, გაყიდვა, გაქირავება, ტაქსი, თბილისი, საქართველო",
  openGraph: {
    title: "Carbada | ქარბადა",
    description: "საქართველოს პრემიუმ საავტომობილო კომპანია",
    locale: "ka_GE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d4ed8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={notoSansGeorgian.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
