import { existsSync } from "node:fs";
import path from "node:path";
import { Truck, Wrench, Box } from "lucide-react";

const quick = [
  { icon: Box, text: "Konsultasi & layout 3D gratis" },
  { icon: Truck, text: "Gratis ongkir Jawa-Bali" },
  { icon: Wrench, text: "Gratis perakitan Jatim, Jateng & DIY" },
];

/** Sketsa sementara. Otomatis diganti foto jika file public/images/hero.jpg ada. */
function GondolaDrawing() {
  return (
    <svg viewBox="0 0 420 320" role="img" aria-label="Sketsa rak gondola minimarket" className="h-auto w-full">
      <g fill="none" stroke="#475569" strokeWidth="2">
        <path d="M30 290h360" />
        {[0, 1, 2].map((i) => {
          const x = 40 + i * 125;
          return (
            <g key={i}>
              <path d={`M${x} 40v250M${x + 110} 40v250`} />
              <path d={`M${x} 40h110`} stroke="#f97316" strokeWidth="3" />
              {[100, 160, 220].map((y) => (
                <path key={y} d={`M${x} ${y}h110`} />
              ))}
              {[100, 160, 220, 290].map((y, j) => (
                <g key={y} stroke="#94a3b8" strokeWidth="1.5">
                  <rect x={x + 8} y={y - 38} width="26" height="38" rx="2" />
                  <rect x={x + 40} y={y - 30 - (j % 2) * 6} width="26" height={30 + (j % 2) * 6} rx="2" />
                  <rect x={x + 72} y={y - 44} width="30" height="44" rx="2" />
                </g>
              ))}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function HeroVisual() {
  // Dicek saat build: kalau foto ada, tampilkan foto; kalau belum, tampilkan sketsa.
  const hasPhoto = existsSync(path.join(process.cwd(), "public/images/hero.jpg"));

  if (hasPhoto) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/images/hero.jpg"
        alt="Rak gondola minimarket yang tertata rapi hasil pemasangan Ritelindo"
        width={1200}
        height={900}
        fetchPriority="high"
        className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5"
      />
    );
  }
  return (
    <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/5 sm:p-8">
      <GondolaDrawing />
      <p className="mt-3 text-center text-xs text-slate-400">
        Placeholder. Simpan foto di public/images/hero.jpg
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
      <div className="container-lp grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <p className="inline-block rounded-full bg-orange-500 px-3.5 py-1.5 text-sm font-bold text-white">
            Langsung dari pabrik, harga kompetitif
          </p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Pabrik Rak Minimarket &amp; Paket Setup Toko Retail
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
            Rak gondola, rak gudang, dan perlengkapan retail yang bisa di-custom sesuai ukuran ruangan toko Anda.
            Tersedia satuan, paket toko, hingga proyek retail.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#paket"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-slate-800 sm:text-lg"
            >
              Lihat pilihan paket
            </a>
          </div>
          <ul className="mt-10 space-y-3 text-sm font-medium text-slate-700">
            {quick.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-500/10 text-orange-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
