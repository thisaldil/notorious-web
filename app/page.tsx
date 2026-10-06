import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Shirt, Gem, Layers } from "lucide-react";

const values = [
  {
    Icon: Shirt,
    h: "Premium quality",
    t: "Heavy fabrics, clean stitching, pieces that hold up.",
  },
  {
    Icon: Gem,
    h: "Timeless designs",
    t: "Silhouettes that outlast the season.",
  },
  {
    Icon: Layers,
    h: "Everyday essentials",
    t: "Built to layer, built to repeat.",
  },
];

const featured = [
  {
    n: "Essentials",
    c: "Core pieces",
    img: "/images/products/black-essential-tee.jpg",
    span: "md:col-span-7 aspect-[4/3]",
  },
  {
    n: "Street",
    c: "Hoodies",
    img: "/images/products/black-oversized-hoodie.jpg",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    n: "Outerwear",
    c: "Layers",
    img: "/images/products/black-bomber-jacket.jpg",
    span: "md:col-span-5 aspect-[4/3]",
  },
  {
    n: "Tees",
    c: "Heavyweight",
    img: "/images/products/white-essential-tee.jpg",
    span: "md:col-span-7 aspect-[4/3]",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* MARQUEE */}
      <Marquee />

      {/* INTRO */}
      <section className="wrap py-24 md:py-40">
        <p className="display text-[13vw] leading-[0.85] md:text-[9vw]">
          Built for those who move different.
        </p>

        <p className="mt-8 max-w-md text-mute">
          NOTORIOUS creates timeless men&apos;s essentials shaped by clean
          silhouettes, strong materials, and a modern streetwear attitude.
        </p>
      </section>

      {/* BRAND VALUES */}
      <section
        className="wrap grid gap-px border-y border-line bg-line md:grid-cols-3"
        aria-label="Brand values"
      >
        {values.map(({ Icon, h, t }, i) => (
          <article
            key={h}
            className="group bg-paper p-8 transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            <p className="label text-mute transition-colors group-hover:text-white/60">
              0{i + 1}
            </p>

            <Icon
              className="my-10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              size={36}
              strokeWidth={1.25}
            />

            <h2 className="display text-4xl">{h}</h2>

            <p className="mt-3 text-sm text-mute transition-colors group-hover:text-white/70">
              {t}
            </p>
          </article>
        ))}
      </section>

      {/* FEATURED COLLECTION */}
      <section
        className="wrap py-24"
        aria-labelledby="featured-collection"
      >
        <h2
          id="featured-collection"
          className="display mb-10 text-6xl leading-[0.85] md:text-8xl"
        >
          Featured collection
        </h2>

        <div className="grid gap-4 md:grid-cols-12">
          {featured.map((f) => (
            <Link
              key={f.n}
              href="/collection"
              className={`group relative block overflow-hidden bg-neutral-200 ${f.span}`}
            >
              {/* IMAGE */}
              <Image
                src={f.img}
                alt={`${f.n} collection`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-paper md:p-7">
                <span className="label block">
                  {f.c}
                </span>

                <span className="display block text-5xl leading-none transition-transform duration-300 group-hover:translate-x-2 md:text-7xl">
                  {f.n}
                </span>

                <span className="label mt-3 block">
                  View collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}