"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Frame } from "./Frame";

const word = "NOTORIOUS".split("");
const values = ["Premium quality", "Timeless designs", "Everyday essentials"];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[100svh] overflow-hidden grain pt-20">
      <h1 className="display display-xl relative z-20 wrap -mb-[2vw]" aria-label="NOTORIOUS">
        {word.map((c, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="dust inline-block"
            style={{ backgroundPosition: `${-i * 140}px ${-i * 53}px, ${-i * 90}px ${-i * 31}px` }}
            initial={reduce ? false : { y: "40%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {c}
          </motion.span>
        ))}
      </h1>
      <p className="label wrap relative z-20 mt-3">Men&apos;s clothing brand</p>

      <motion.div
        className="absolute left-1/2 top-[34vw] md:top-[22vw] -translate-x-1/2 w-[62vw] md:w-[34vw] h-[90vw] md:h-[46vw] z-10"
        initial={reduce ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <div className="brush absolute -right-[30%] bottom-0 w-[130%] h-[45%] bg-ink" aria-hidden />
        <Frame src="/images/hero/hero.png" alt="Model in a black NOTORIOUS heavyweight tee" tone={6} priority className="absolute inset-0" />
      </motion.div>

      <motion.ul
        className="label absolute right-[3.5vw] top-[34vw] md:top-[17vw] text-right space-y-2 z-20"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <li>Clean style</li><li>Bold attitude</li><li>Everyday essentials</li>
        <li className="ml-auto mt-3 h-px w-10 bg-ink" aria-hidden />
      </motion.ul>

      <ul className="label absolute left-[3.5vw] top-[62vw] md:top-[28vw] space-y-6 z-20 hidden sm:block">
        {values.map((v) => (
          <li key={v} className="max-w-28 border-b border-line pb-4">{v}</li>
        ))}
      </ul>

      <motion.div
        className="absolute bottom-6 left-[3.5vw] z-30"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <Link href="/collection" className="group inline-flex items-center gap-6 bg-ink px-8 py-4 text-paper label">
          Explore collection <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
        </Link>
      </motion.div>
      <p className="label absolute bottom-6 right-[3.5vw] z-30 max-w-20 hidden sm:block">Wear your attitude</p>
    </section>
  );
}