import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

const title = "Pabrik Rak Minimarket & Paket Setup Toko Retail | Free Layout 3D";
const description =
  "Pabrik rak minimarket & rak toko langsung dari pabrik. Konsultasi + layout 3D gratis, free ongkir Jawa-Bali, free perakitan Jatim, Jateng & DIY. Custom ukuran, jasa interior toko.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "pabrik rak minimarket", "paket rak minimarket", "paket setup toko retail",
    "rak gondola", "rak toko", "rak gudang", "jasa interior toko", "supplier rak minimarket",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Ritelindo Group",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pabrik Rak Minimarket Ritelindo Group" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0F172A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
