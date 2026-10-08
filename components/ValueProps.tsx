import { Box, Truck, Wrench, Ruler, Factory, Layers, Store } from "lucide-react";

const items = [
  { icon: Box, title: "Konsultasi & layout 3D gratis", desc: "Layanan utama sebelum pembelian. Tim kami menata denah toko dan menunjukkan hasilnya dalam desain 3D, tanpa biaya.", badge: "Gratis", big: true },
  { icon: Ruler, title: "Custom sesuai ukuran toko", desc: "Tinggi, lebar, dan model rak disesuaikan dengan kebutuhan serta ukuran ruangan toko Anda.", big: true },
  { icon: Truck, title: "Free ongkir Jawa-Bali", desc: "Pesanan dikirim ke seluruh Jawa dan Bali tanpa ongkos kirim.", badge: "Free Ongkir" },
  { icon: Wrench, title: "Free perakitan Jatim, Jateng & DIY", desc: "Rak dirakit langsung di toko Anda untuk wilayah Jawa Timur, Jawa Tengah, dan DI Yogyakarta.", badge: "Free Rakit" },
  { icon: Factory, title: "Langsung dari pabrik", desc: "Tanpa perantara, sehingga harga lebih kompetitif." },
  { icon: Layers, title: "Satuan, paket toko, hingga proyek retail", desc: "Beli satu rak, satu paket lengkap, atau pesan untuk banyak cabang sekaligus.", big: true },
  { icon: Store, title: "Jasa interior toko", desc: "Tampilan toko dibuat lebih rapi, stylish, dan modern agar pembeli betah berbelanja.", big: true },
];

export default function ValueProps() {
  return (
    <section id="keunggulan" className="section bg-slate-50" aria-labelledby="keunggulan-h2">
      <div className="container-lp">
        <h2 id="keunggulan-h2" className="h2">Kenapa pemilik toko memilih Ritelindo</h2>
        <p className="lead">Dari merancang layout sampai rak terpasang, semuanya diurus satu pintu.</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {items.map(({ icon: Icon, title, desc, badge, big }) => (
            <article
              key={title}
              className={`card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${
                big ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {badge && (
                  <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">{badge}</span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
