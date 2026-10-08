"use client";

import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

/** Tombol WA di navbar: tersembunyi di posisi paling atas, muncul setelah scroll. */
export default function NavbarCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`transition-opacity duration-200 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
      {...(!show ? { inert: true } : {})}
    >
      <WhatsAppButton source="navbar" className="!px-4 !py-2.5" />
    </div>
  );
}
