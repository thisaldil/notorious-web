import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | NOTORIOUS",
  description:
    "NOTORIOUS is a modern men's clothing brand built around confidence, individuality, and timeless style.",
};

const approach = ["Clean design.", "Strong identity.", "Quality essentials."];

const philosophy = [
  { word: "Bold.", line: "Make an impression." },
  { word: "Clean.", line: "Keep it effortless." },
  { word: "Timeless.", line: "Wear it beyond the moment." },
  { word: "Notorious.", line: "Be remembered." },
];

export default function AboutPage() {
  return (
    <main className="relative grain overflow-hidden bg-paper">
      {/* INTRO */}
      <section className="wrap pt-28 pb-16 md:pt-36 md:pb-24">
        <p className="label-hero">About NOTORIOUS</p>

        <h1 className="display mt-6 text-[17vw] leading-[0.84] md:text-[11.5vw]">
          <span className="grunge block">Built with</span>
          <span className="grunge block">attitude.</span>
        </h1>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
          {/* Left: brand statement */}
          <div className="md:col-span-6 md:col-start-1">
            <p className="max-w-[34ch] text-xl leading-snug md:text-2xl">
              NOTORIOUS<span className="align-super text-xs">®</span> is a modern
              men&apos;s clothing brand built around confidence, individuality,
              and timeless style.
            </p>
            <p className="mt-6 max-w-[34ch] text-xl leading-snug text-mute md:text-2xl">
              We believe clothing should feel effortless but never ordinary.
            </p>
          </div>

          {/* Right: approach + closing lines */}
          <div className="md:col-span-5 md:col-start-8">
            <p className="label-hero">Our approach is simple</p>
            <ul className="mt-5 border-t border-ink">
              {approach.map((item) => (
                <li
                  key={item}
                  className="display border-b border-line py-3 text-3xl md:text-4xl"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[44ch] leading-relaxed text-mute">
              From everyday pieces to statement looks, every NOTORIOUS garment is
              designed to become part of your identity.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <p className="display text-3xl md:text-5xl">
            We don&apos;t design for everyone.
          </p>
          <p className="display mt-2 text-3xl md:text-5xl">
            We design for those who stand apart.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY: black band */}
      <section className="bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <p className="label-hero text-paper/70">Our philosophy</p>

          <ul className="mt-10 md:mt-14">
            {philosophy.map(({ word, line }) => (
              <li
                key={word}
                className="group flex flex-col gap-2 border-t border-paper/25 py-6 md:flex-row md:items-baseline md:justify-between md:py-8"
              >
                <span className="display text-[16vw] leading-[0.9] md:text-[9vw]">
                  {word}
                </span>
                <span className="text-lg text-paper/70 md:max-w-[22ch] md:text-right md:text-xl">
                  {line}
                </span>
              </li>
            ))}
            <li aria-hidden className="border-t border-paper/25" />
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap py-20 md:py-32">
        <h2 className="display text-[15vw] leading-[0.86] md:text-[10vw]">
          <span className="grunge block">Make your</span>
          <span className="grunge block">mark.</span>
        </h2>

        <p className="mt-8 max-w-[30ch] text-xl md:text-2xl">
          Discover the latest NOTORIOUS collection.
        </p>

        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <Link
            href="/collection"
            className="group label-hero inline-flex items-center justify-between gap-10 bg-ink px-8 py-4 text-paper max-md:w-full"
          >
            Shop the collection
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1.5 md:h-5 md:w-5"
              aria-hidden
            />
          </Link>

          <a
            href="https://instagram.com/wear.notorious"
            target="_blank"
            rel="noopener noreferrer"
            className="label-hero underline decoration-1 underline-offset-8 hover:text-mute"
          >
            @wear.notorious
          </a>
        </div>
      </section>
    </main>
  );
}