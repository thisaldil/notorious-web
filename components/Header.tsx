"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b ${solid ? "bg-paper/95 backdrop-blur border-line" : "bg-transparent border-transparent"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="display text-2xl" aria-label="NOTORIOUS home">Notorious</Link>
        <nav aria-label="Primary" className="hidden md:flex gap-10">
          {siteConfig.nav.map((n) => <Link key={n.href} href={n.href} className="label hover:underline underline-offset-8">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden md:block"><Search size={18} /></button>
          <button aria-label="Bag, 0 items"><ShoppingBag size={18} /></button>
          <button className="md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ height: 0 }} animate={{ height: "calc(100dvh - 4rem)" }} exit={{ height: 0 }}
            transition={{ duration: .4, ease: [.7, 0, .2, 1] }} className="md:hidden overflow-hidden bg-ink text-paper">
            <ul className="wrap flex flex-col gap-2 pt-10">
              {siteConfig.nav.map((n, i) => (
                <motion.li key={n.href} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .15 + i * .06 }}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="display text-7xl block border-b border-white/20 py-2">{n.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
