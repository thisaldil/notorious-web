"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Gem, Layers, Shirt } from "lucide-react";

const word = "NOTORIOUS".split("");
const statements = ["Clean style", "Bold attitude", "Everyday essentials"];
const values = [
  { Icon: Shirt, lines: ["Premium", "quality"] },
  { Icon: Gem, lines: ["Timeless", "designs"] },
  { Icon: Layers, lines: ["Everyday", "essentials"] },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <section className="relative grain overflow-hidden pt-20 pb-10 md:h-[100svh] md:pt-0 md:pb-0">
      {/* FULL-SCREEN PHOTO */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduce ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/images/og.png"
          alt="Model wearing a black NOTORIOUS heavyweight tee"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_25%]"
        />
      </motion.div>

      {/* On mobile this is a normal stacked column.
          On desktop it disappears (md:contents) so children position against the full section. */}
      <div className="relative z-10 flex flex-col gap-8 px-4 md:contents">
        {/* TITLE: only this lives in the centered, poster-proportioned stage */}
        <div className="md:absolute md:inset-x-0 md:top-16 md:z-20 md:flex md:justify-center">
          <div className="md:w-[min(100%,calc((100svh-4rem)*1.278))] md:[container-type:inline-size]">
            <h1
              className="display hero-title relative leading-[0.82] md:px-[3.5cqw] md:pt-[1.5cqw]"
              aria-label="NOTORIOUS"
            >
              <span className="grunge block">
                {word.map((c, i) => (
                  <motion.span
                    key={i}
                    aria-hidden
                    className="inline-block"
                    initial={reduce ? false : { y: "40%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
              <span
                aria-hidden
                className="absolute right-[1vw] top-[0.5vw] font-sans text-[2.4vw] leading-none md:right-[0.6cqw] md:top-[2.7cqw] md:text-[2.2cqw]"
              >
                ®
              </span>
            </h1>
          </div>
        </div>

        {/* BRAND LABEL: left edge */}
        <motion.p
          className="label-hero md:absolute md:left-[4vw] md:top-[42svh] md:z-20"
          {...fade(0.5)}
        >
          Men&apos;s clothing brand
        </motion.p>

        {/* STATEMENTS: right edge */}
        <motion.ul
          className="label-hero space-y-2 md:absolute md:right-[4vw] md:top-[42svh] md:z-20 md:space-y-3 md:text-right"
          {...fade(0.9)}
        >
          {statements.map((s) => (
            <li key={s}>{s}</li>
          ))}
          <li aria-hidden className="mt-3 h-px w-10 bg-ink md:ml-auto md:mt-6" />
        </motion.ul>

        {/* Spacer so mobile text clears the model */}
        <div aria-hidden className="h-[85vw] md:hidden" />

        {/* VALUES WITH ICONS: left edge */}
        <motion.ul
          className="grid grid-cols-3 gap-4 md:absolute md:left-[4vw] md:top-[51svh] md:z-20 md:block md:space-y-[2.6svh]"
          {...fade(1)}
        >
          {values.map(({ Icon, lines }) => (
            <li key={lines.join(" ")}>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                <Icon strokeWidth={1.5} className="h-8 w-8 shrink-0 md:h-9 md:w-9" aria-hidden />
                <span className="label-hero leading-snug">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </div>
              <span aria-hidden className="mt-[2.2svh] hidden h-px w-10 bg-mute/60 md:block" />
            </li>
          ))}
        </motion.ul>

        {/* CTA: bottom left */}
        <motion.div className="md:absolute md:bottom-[5svh] md:left-[4vw] md:z-20" {...fade(1.1)}>
          <Link
            href="/collection"
            className="group label-hero inline-flex items-center justify-between gap-10 bg-ink px-8 py-4 text-paper max-md:w-full"
          >
            Shop now
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1.5 md:h-5 md:w-5"
              aria-hidden
            />
          </Link>
        </motion.div>

        {/* TAGLINE: bottom right */}
        <p className="label-hero absolute bottom-[5svh] right-[4vw] z-20 hidden text-right md:block">
          Wear
          <br />
          your
          <br />
          attitude
          <span aria-hidden className="ml-auto mt-4 block h-px w-10 bg-ink" />
        </p>
      </div>
    </section>
  );
}