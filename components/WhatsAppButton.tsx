import { waLink } from "@/lib/config";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88zM20.5 3.49A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.88 0-3.17-1.23-6.15-3.44-8.43z" />
    </svg>
  );
}

type Props = {
  label?: string;
  /** Dipakai untuk tracking: data-cta="hero" dst. */
  source: string;
  message?: string;
  size?: "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
};

/** Satu-satunya tombol berwarna hijau WhatsApp di seluruh halaman (sesuai PRD). */
export default function WhatsAppButton({
  label = "Konsultasi WA Gratis",
  source,
  message,
  size = "md",
  variant = "solid",
  className = "",
}: Props) {
  const look =
    variant === "outline"
      ? "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-100"
      : "bg-[#25D366] text-slate-950 shadow-sm hover:bg-wa-dark";
  const sizing = size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm sm:text-base";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={source}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-colors ${look} ${sizing} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      {label}
    </a>
  );
}
