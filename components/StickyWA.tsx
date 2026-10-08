import { waLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppButton";

/** Tombol WA bulat melayang di kiri bawah (HP & desktop). */
export default function StickyWA() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="floating"
      aria-label="Konsultasi WA Gratis"
      className="fixed left-4 z-50 sm:left-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <span className="wa-ping absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-slate-950 shadow-lg transition-transform hover:scale-105 sm:h-16 sm:w-16">
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
