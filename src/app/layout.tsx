import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
