const links = [
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#paket", label: "Paket" },
  { href: "#alur", label: "Alur" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/95 backdrop-blur">
      <div className="container-lp flex h-16 items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-lg font-extrabold tracking-tight text-white">
          Ritelindo<span className="text-orange-500"> Group</span>
        </a>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
