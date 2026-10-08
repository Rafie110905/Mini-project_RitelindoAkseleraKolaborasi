import { findImage } from "@/lib/images";

// Gambar opsional: langkah-1 ... langkah-5 di public/images/
const steps = [
  { t: "Konsultasi via WhatsApp", d: "Ceritakan jenis toko, ukuran ruangan, dan budget Anda." },
  { t: "Layout 3D gratis", d: "Kami rancang denah dan tampilan 3D. Revisi sampai cocok." },
  { t: "Produksi di pabrik", d: "Rak dibuat sesuai ukuran yang sudah disepakati." },
  { t: "Pengiriman", d: "Gratis ongkir untuk seluruh Jawa-Bali." },
  { t: "Perakitan di toko", d: "Gratis untuk Jawa Timur, Jawa Tengah, dan DIY." },
];

export default function Process() {
  return (
    <section id="alur" className="section bg-white" aria-labelledby="alur-h2">
      <div className="container-lp">
        <h2 id="alur-h2" className="h2">Dari konsultasi sampai rak terpasang</h2>
        <p className="lead">Lima langkah, dan Anda sudah bisa melihat desain tokonya sebelum membayar.</p>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {steps.map((s, i) => {
            const src = findImage(`langkah-${i + 1}`);
            return (
              <li key={s.t} className="card-hover overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                {src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt={s.t} width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                )}
                <div className="p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-900 text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 font-bold leading-snug">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
