import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Frame } from "@/components/Frame";
import { Shirt, Gem, Layers } from "lucide-react";

const values = [
  { Icon: Shirt, h: "Premium quality", t: "Heavy fabrics, clean stitching, pieces that hold up." },
  { Icon: Gem, h: "Timeless designs", t: "Silhouettes that outlast the season." },
  { Icon: Layers, h: "Everyday essentials", t: "Built to layer, built to repeat." },
];
const featured = [
  { n: "Essentials", c: "Core pieces", img: "black-essential-tee.jpg",     span: "md:col-span-7 aspect-[4/3]", tone: 10 },
  { n: "Street",     c: "Hoodies",     img: "black-oversized-hoodie.jpg",  span: "md:col-span-5 aspect-[4/3]", tone: 22 },
  { n: "Outerwear",  c: "Layers",      img: "black-bomber-jacket.jpg",     span: "md:col-span-5 aspect-[4/3]", tone: 16 },
  { n: "Tees",       c: "Heavyweight", img: "white-essential-tee.jpg",     span: "md:col-span-7 aspect-[4/3]", tone: 6 },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="wrap py-24 md:py-40">
        <p className="display text-[13vw] md:text-[9vw]">Built for those who move different.</p>
        <p className="mt-8 max-w-md text-mute">NOTORIOUS creates timeless men&apos;s essentials shaped by clean silhouettes, strong materials, and a modern streetwear attitude.</p>
      </section>
      <section className="wrap grid gap-px bg-line md:grid-cols-3 border-y border-line" aria-label="Brand values">
        {values.map(({ Icon, h, t }, i) => (
          <article key={h} className="group bg-paper p-8 transition-colors hover:bg-ink hover:text-paper">
            <p className="label text-mute group-hover:text-white/60">0{i + 1}</p>
            <Icon className="my-10 transition-transform group-hover:-rotate-6 group-hover:scale-110" size={36} strokeWidth={1.25} />
            <h2 className="display text-4xl">{h}</h2><p className="mt-3 text-sm text-mute group-hover:text-white/70">{t}</p>
          </article>
        ))}
      </section>
      <section className="wrap py-24" aria-labelledby="feat">
        <h2 id="feat" className="display text-6xl md:text-8xl mb-10">Featured collection</h2>
        <div className="grid gap-4 md:grid-cols-12">
          {featured.map((f) => (
            <Link key={f.n} href="/collection" className={`group relative block overflow-hidden ${f.span}`}>
<Frame src={`/images/products/${f.img}`} alt={`${f.n} collection`} tone={f.tone}
  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-paper bg-gradient-to-t from-black/70 to-transparent">
                <span className="label">{f.c}</span>
                <span className="display text-5xl transition-transform group-hover:translate-x-2">{f.n}</span>
                <span className="label mt-2">View collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
