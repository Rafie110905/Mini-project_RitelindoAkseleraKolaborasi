export default function Footer() {
  return (
    <footer className="bg-slate-900 px-5 pb-12 pt-12 text-slate-300 sm:px-8">
      <div className="container-lp ">
        <div>
          <p className="text-lg font-extrabold text-white">Ritelindo Group</p>
          <p className="mt-1 max-w-md text-sm leading-relaxed">
            Ritelindo Akselera Kolaborasi. Pabrik rak minimarket, rak gudang, dan perlengkapan retail.
          </p>
        </div>
      </div>
      <p className="container-lp mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Ritelindo Group. Semua hak dilindungi.
      </p>
    </footer>
  );
}
