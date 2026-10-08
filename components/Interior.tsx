import { findImage } from "@/lib/images";

export default function Interior() {
  const photo = findImage("interior"); // public/images/interior.jpg (opsional)
  return (
    <section className="section bg-slate-50" aria-labelledby="interior-h2">
      <div className="container-lp grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 id="interior-h2" className="h2">Toko lebih stylish dengan jasa interior</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Rak yang rapi baru separuhnya. Kami juga menangani tampilan toko secara keseluruhan agar terlihat modern
            dan nyaman bagi pembeli, dari warung lama menjadi toko ritel yang layak naik kelas.
          </p>
        </div>
        <div className="space-y-4">
          {photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt="Hasil jasa interior toko Ritelindo"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5"
            />
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold">Custom ukuran &amp; model</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Ruangan sempit, bentuk tidak simetris, atau langit-langit rendah? Rak dibuat pas, bukan dipaksakan.</p>
            </div>
            <div className="card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold">Lihat dulu hasilnya</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Desain 3D menunjukkan posisi rak, jarak antar lorong, dan alur pembeli sebelum produksi dimulai.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
