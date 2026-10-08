import { ChevronDown } from "lucide-react";

export const faqs = [
  { q: "Apakah konsultasi dan layout 3D benar-benar gratis?", a: "Ya. Konsultasi dan desain layout 3D adalah layanan kami sebelum pembelian, tanpa biaya." },
  { q: "Wilayah mana yang mendapat gratis ongkir dan perakitan?", a: "Gratis ongkir berlaku untuk seluruh Jawa-Bali. Gratis perakitan berlaku untuk Jawa Timur, Jawa Tengah, dan DI Yogyakarta." },
  { q: "Apakah rak bisa dibuat sesuai ukuran toko saya?", a: "Bisa. Rak dapat di-custom mengikuti kebutuhan dan ukuran ruangan toko Anda." },
  { q: "Apakah bisa beli satuan, tidak harus paket?", a: "Bisa. Kami melayani pembelian satuan, paket toko, sampai proyek retail untuk banyak cabang." },
  { q: "Apakah Ritelindo pabrik langsung?", a: "Ya, produk datang langsung dari pabrik sehingga harganya kompetitif tanpa rantai perantara." },
  { q: "Apakah ada jasa interior toko?", a: "Ada. Kami membantu membuat tampilan toko lebih rapi, stylish, dan modern." },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-white" aria-labelledby="faq-h2">
      <div className="container-lp max-w-3xl">
        <h2 id="faq-h2" className="h2">Pertanyaan yang sering diajukan</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-hover group rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
