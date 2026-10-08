<div align="center">

<img src="app/icon.png" alt="Logo Ritelindo" width="96" />

# Ritelindo Group — Landing Page B2B

**Pabrik Rak Minimarket & Paket Setup Toko Retail**

Landing page konversi tinggi untuk kampanye Google Ads Search, dengan satu tujuan:
mengajak pengunjung menekan tombol **Konsultasi WA Gratis**.

<br />

![Next.js](https://img.shields.io/badge/Next.js-15-0F172A?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-0F172A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-0F172A?style=for-the-badge&logo=typescript&logoColor=3178C6)
![WhatsApp](https://img.shields.io/badge/CTA-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

<sub>Mini Test Web Developer Intern · Ritelindo Akselera Kolaborasi</sub>

</div>

<br />

---

##  Tentang Proyek

Ritelindo Group menjual rak gondola minimarket, rak gudang, dan perlengkapan retail.
Kalau iklan diarahkan ke website utama yang lambat dan tidak fokus, bounce rate naik dan
anggaran iklan terbuang. Halaman ini dibuat untuk menjadi **tujuan utama trafik iklan**:
ringan, jelas, dan fokus pada satu aksi.

**Target pengunjung:** pemilik minimarket baru, pemilik toko yang ingin naik kelas ke
toko modern, dan pemilik yang membuka cabang atau proyek retail.

##  Value Proposition

| | Keunggulan |
|---|---|
|  | **Free konsultasi & layout 3D** sebelum pembelian |
|  | **Free ongkir** Jawa-Bali |
|  | **Free perakitan** Jatim, Jateng & DIY |
|  | **Custom** sesuai kebutuhan dan ukuran ruangan toko |
|  | **Langsung dari pabrik**, harga kompetitif |
|  | Melayani **satuan, paket toko, hingga proyek retail** |
|  | **Jasa interior toko** agar tampil stylish dan modern |

##  Fitur

- **Dua titik CTA WhatsApp** yang jelas: tombol bulat melayang di kiri bawah dan tombol
  penutup "Siap membuat toko Anda lebih rapi dan modern?"
- **Kartu interaktif**: semua kartu (keunggulan, jenis toko, paket, alur, FAQ) menyala
  oranye saat disentuh kursor atau difokus lewat keyboard.
- **Gambar otomatis**: taruh foto di `public/images/` dan section terkait langsung
  menampilkannya, tanpa mengubah kode. Kalau foto belum ada, tampilan tetap rapi.
- **Technical SEO lengkap**: meta title dan description berkeyword B2B, hierarki
  `H1 → H2 → H3`, Open Graph, Twitter Card, canonical, `sitemap.xml`, `robots.txt`,
  serta data terstruktur JSON-LD (`Organization` dan `FAQPage`).
- **Mobile-first** dan ringan: Static Site Generation, font di-host sendiri, gambar
  lazy-load, tanpa library animasi.
- **Aksesibel**: label ARIA, fokus keyboard terlihat, menghormati
  `prefers-reduced-motion`.

##  Panduan Desain

| Peran | Warna | Hex |
|---|---|---|
| Kredibilitas B2B (navbar, footer, teks) | Biru Navy | `#0F172A` |
| Aksi / konversi (khusus tombol WA) | Hijau WhatsApp | `#25D366` |
| Aksen (badge, ikon, hover kartu) | Oranye | `#F97316` |
| Latar bergantian | Putih / Abu terang | `#FFFFFF` / `#F8FAFC` |

Tipografi: **Plus Jakarta Sans**. Gaya kartu: sudut `rounded-xl`, bayangan halus, foto
asli beresolusi tinggi.

##  Menjalankan di Lokal

Butuh **Node.js 18.18+**.

```bash
npm install
npm run dev        # http://localhost:3000
```

> Pengguna Windows PowerShell yang terkena blokir script bisa memakai `npm.cmd install`
> dan `npm.cmd run dev`.

Build produksi (hasil statis ada di folder `out/`):

```bash
npm run build
```

## ⚙️ Konfigurasi

Semua pengaturan ada di **`lib/config.ts`**:

| Variabel | Fungsi |
|---|---|
| `WA_NUMBER` | Nomor WhatsApp tujuan, format `628xxxxxxxxxx` (tanpa `+` dan spasi) |
| `WA_MESSAGE` | Pesan awal otomatis saat WhatsApp terbuka |
| `SITE_URL` | Domain final, dipakai untuk canonical, Open Graph, dan sitemap |

>  Nomor WhatsApp bawaan hanyalah placeholder. Ganti sebelum dipakai untuk iklan.

##  Gambar

Simpan di `public/images/` (format `.jpg`, `.webp`, atau `.png`). Semuanya opsional.

| Bagian | Nama file |
|---|---|
| Hero | `hero` |
| Jasa interior | `interior` |
| Jenis toko | `toko-minimarket`, `toko-kelontong`, `toko-atk`, `toko-petshop`, `toko-babyshop`, `toko-apotek`, `toko-bahan-kue`, `toko-fashion`, `toko-bahan-bangunan` |
| Alur 5 langkah | `langkah-1` sampai `langkah-5` |

Untuk foto yang labelnya sudah menyatu di gambar, tambahkan akhiran `-berlabel`
(contoh: `toko-atk-berlabel.jpg`). Foto bersih selalu diprioritaskan jika keduanya ada.

Saran ukuran: lebar 800–1200 px, di bawah 150 KB per file, supaya skor Lighthouse tetap tinggi.

##  Struktur Proyek

```text
├── app/
│   ├── layout.tsx        # meta, Open Graph, Twitter Card, canonical
│   ├── page.tsx          # susunan section + JSON-LD
│   ├── globals.css       # gaya global & efek hover kartu
│   ├── robots.ts · sitemap.ts
│   └── icon.png · apple-icon.png · favicon.ico
├── components/           # satu file per section
│   ├── Navbar · Hero · ValueProps · StoreTypes · Packages
│   ├── Process · Interior · FAQ · FinalCTA · Footer
│   └── StickyWA · WhatsAppButton
├── lib/
│   ├── config.ts         # nomor WA, pesan, domain
│   └── images.ts         # deteksi gambar saat build
└── public/
    ├── images/           # foto section
    └── og-image.png      # preview saat link dibagikan
```

##  Deploy

Cara termudah lewat **Vercel**:

1. Push repo ini ke GitHub.
2. Di [vercel.com](https://vercel.com), pilih **Add New → Project**, impor repo ini.
3. Klik **Deploy**. Tidak ada pengaturan tambahan.
4. Setelah dapat link, isi `SITE_URL` di `lib/config.ts`, lalu push ulang.

Alternatif: jalankan `npm run build` dan unggah folder `out/` ke hosting statis apa pun
(Netlify, Cloudflare Pages, cPanel).

##  Cakupan

**Masuk:** satu landing page statis, UI responsif, seluruh value proposition, technical SEO,
dan CTA WhatsApp.

**Di luar cakupan:** e-commerce dan checkout, payment gateway, CMS atau dashboard backend,
routing multi-halaman atau blog.

---

<div align="center">

Dibuat oleh **MOH. RAFIE NAZAR JAILANI**
untuk Mini Test Web Developer Intern — Ritelindo Akselera Kolaborasi

<sub>Oktober 2026</sub>

</div>
