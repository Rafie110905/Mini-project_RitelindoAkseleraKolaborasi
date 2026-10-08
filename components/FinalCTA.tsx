import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="section bg-slate-50" aria-labelledby="cta-h2">
      <div className="container-lp rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm sm:px-12">
        <h2 id="cta-h2" className="h2 mx-auto max-w-2xl">Siap membuat toko Anda lebih rapi dan modern?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Kirim ukuran ruangan dan jenis toko Anda. Layout 3D-nya kami buatkan gratis.
        </p>
        <WhatsAppButton source="penutup" size="lg" className="mt-8" />
      </div>
    </section>
  );
}
