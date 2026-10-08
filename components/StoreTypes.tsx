import { Store } from "lucide-react";
import { findImage } from "@/lib/images";

// slug = nama file di public/images/  ->  toko-<slug>.jpg (atau .webp/.png)
const types = [
  { slug: "minimarket", label: "Minimarket" },
  { slug: "kelontong", label: "Toko kelontong & sembako" },
  { slug: "atk", label: "Toko ATK" },
  { slug: "petshop", label: "Pet shop" },
  { slug: "babyshop", label: "Baby shop" },
  { slug: "apotek", label: "Apotek" },
  { slug: "bahan-kue", label: "Toko bahan kue" },
  { slug: "fashion", label: "Toko fashion" },
  { slug: "bahan-bangunan", label: "Toko bahan bangunan" },
];

export default function StoreTypes() {
  return (
    <section className="section bg-white" aria-labelledby="jenis-toko-h2">
      <div className="container-lp">
        <h2 id="jenis-toko-h2" className="h2">Rak untuk berbagai jenis toko</h2>
        <p className="lead">
          Baru buka minimarket, ingin menaikkan kelas toko lama, atau menambah cabang? Rak dan tata letaknya
          disesuaikan dengan jenis barang yang Anda jual.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {types.map((t) => {
            // Prioritas: foto bersih (toko-<slug>) -> foto yang labelnya sudah menyatu (toko-<slug>-berlabel) -> kotak kosong
            const clean = findImage(`toko-${t.slug}`);
            const baked = clean ? null : findImage(`toko-${t.slug}-berlabel`);
            const src = clean;
            return (
              <li
                key={t.slug}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm card-hover sm:aspect-video"
              >
                {baked ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={baked}
                      alt={`Rak untuk ${t.label}`}
                      width={786}
                      height={420}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="sr-only">{t.label}</span>
                  </>
                ) : src ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Rak untuk ${t.label}`}
                      width={800}
                      height={450}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" aria-hidden="true" />
                    <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white sm:p-4 sm:text-base">{t.label}</p>
                  </>
                ) : (
                  <>
                    <Store className="absolute left-1/2 top-[38%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-slate-300" aria-hidden="true" />
                    <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-slate-800 sm:p-4 sm:text-base">{t.label}</p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
