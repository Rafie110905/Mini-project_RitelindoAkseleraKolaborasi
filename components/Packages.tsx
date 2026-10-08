import { Check } from "lucide-react";

const packages = [
  {
    name: "Paket Minimarket Baru",
    who: "Untuk pemilik yang baru membuka minimarket.",
    points: ["Rak gondola, rak dinding, dan rak gudang", "Layout 3D sebelum Anda memesan", "Rak sesuai ukuran ruangan", "Pengiriman & perakitan sesuai wilayah"],
  },
  {
    name: "Paket Upgrade Toko",
    who: "Untuk toko kelontong atau warung yang ingin tampil modern.",
    points: ["Penataan ulang rak & alur belanja", "Opsi jasa interior toko", "Bisa dikerjakan bertahap", "Custom sesuai ukuran toko"],
  },
  {
    name: "Paket Cabang & Proyek Retail",
    who: "Untuk pemilik cabang baru, franchise, dan proyek retail.",
    points: ["Kapasitas produksi pabrik", "Standar rak seragam antar cabang", "Harga kompetitif untuk jumlah besar", "Jadwal produksi & kirim terkoordinasi"],
  },
];

export default function Packages() {
  return (
    <section id="paket" className="section bg-slate-50" aria-labelledby="paket-h2">
      <div className="container-lp">
        <h2 id="paket-h2" className="h2">Pilihan paket setup toko</h2>
        <p className="lead">
          Harga disesuaikan dengan ukuran toko dan jumlah rak. Konsultasikan dulu, penawaran dan layout 3D kami
          siapkan gratis. Butuh satu-dua rak saja? Kami juga melayani pembelian satuan.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((p) => (
            <article key={p.name} className="card-hover flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.who}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
