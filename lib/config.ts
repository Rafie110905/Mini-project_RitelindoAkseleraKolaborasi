/**
 * ============================================================
 *  PUSAT PENGATURAN — ganti di sini saja, semua section ikut.
 * ============================================================
 */

// Format internasional tanpa "+" atau spasi. GANTI dengan nomor WA asli Ritelindo.
export const WA_NUMBER = "6281234567890";

export const WA_MESSAGE =
  "Halo Ritelindo, saya ingin konsultasi gratis untuk paket rak toko/minimarket saya.";

// Ganti dengan domain final saat deploy (dipakai untuk canonical & Open Graph).
export const SITE_URL = "https://www.ritelindo.example";

export const BRAND = "Ritelindo Group";

export const waLink = (message: string = WA_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
