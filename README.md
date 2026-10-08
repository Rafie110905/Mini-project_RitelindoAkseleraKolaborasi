# Landing Page B2B Ritelindo Group

Next.js 15 (App Router) + Tailwind CSS 3, di-export sebagai static site (SSG).

## Menjalankan
```bash
npm install
npm run dev      # development di http://localhost:3000
npm run build    # hasil statis ada di folder out/
```
Folder `out/` bisa langsung di-upload ke hosting statis (Vercel, Netlify, Cloudflare Pages, cPanel).

## Yang WAJIB diganti sebelum live
Semua ada di `lib/config.ts`:
- `WA_NUMBER` : nomor WhatsApp asli (format 628xxxxxxxxxx)
- `WA_MESSAGE`: pesan awal otomatis
- `SITE_URL`  : domain final (untuk canonical, Open Graph, sitemap)

Ganti juga `public/og-image.png` (1200x630) dengan desain final.

## Foto asli
PRD meminta foto asli. Saat ini hero memakai sketsa rak sebagai placeholder
(`components/Hero.tsx`, fungsi `GondolaDrawing`). Ganti dengan `<Image>` / `<img>` foto
produk dan hasil pemasangan toko, dan tambahkan galeri bila perlu.

## Tracking
Setiap tombol WA punya atribut `data-cta` (hero, navbar, keunggulan, jenis-toko,
paket-*, interior, penutup, footer, sticky-mobile, sticky-desktop) untuk Google Tag
Manager / GA4 click tracking dan konversi Google Ads.

## Struktur
- `app/layout.tsx` : meta title/description, Open Graph, Twitter, canonical
- `app/page.tsx`   : susunan section + JSON-LD (Organization, FAQPage)
- `components/`    : satu file per section

## Daftar nama file gambar (simpan di public/images/)
Semua opsional. Kalau file ada, otomatis tampil; kalau tidak, section tampil tanpa gambar.
Format: .jpg / .webp / .png. Ukuran saran: kartu 800x600, hero & interior 1200 px, di bawah 150 KB.

- hero.jpg
- interior.jpg
- toko-minimarket, toko-kelontong, toko-atk, toko-petshop, toko-babyshop,
  toko-apotek, toko-bahan-kue, toko-fashion, toko-bahan-bangunan
- langkah-1 ... langkah-5
