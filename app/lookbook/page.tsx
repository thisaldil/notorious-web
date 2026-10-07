import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lookbook | NOTORIOUS",
  description: "A visual expression of modern menswear.",
};

const intro = [
  "Clean silhouettes.",
  "Strong proportions.",
  "Everyday essentials with attitude.",
];

type Look = {
  n: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  /** grid placement + image shape on desktop */
  wrapper: string;
  ratio: string;
  sizes: string;
};

// Put your photos in /public/images/lookbook/ and update the file names here.
const looks: Look[] = [
  {
    n: "01",
    title: "The Essential",
    caption: "Minimal by design. Made to stand out.",
    src: "/images/lookbook/black-essential-tee.jpg",
    alt: "Model wearing a black oversized essential T-shirt with black cargo pants and sunglasses against a textured concrete wall",
    wrapper: "md:col-span-7",
    ratio: "aspect-[4/5]",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    n: "02",
    title: "After Dark",
    caption: "Built for the streets. Designed for the night.",
    src: "/images/lookbook/black-bomber-jacket.jpg",
    alt: "Model wearing a black bomber jacket with a black T-shirt and cargo trousers in a monochrome streetwear setting",
    wrapper: "md:col-span-5 md:mt-28",
    ratio: "aspect-[4/5]",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    n: "03",
    title: "The Everyday",
    caption: "Simple pieces. Strong presence.",
    src: "/images/lookbook/white-essential-tee.jpg",
    alt: "Model wearing a clean white oversized T-shirt with black trousers and sunglasses against a concrete wall",
    wrapper: "md:col-span-5",
    ratio: "aspect-[4/5]",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    n: "04",
    title: "No Compromise",
    caption: "Quality in every detail.",
    src: "/images/lookbook/dark-denim-jacket.jpg",
    alt: "Model wearing a black denim jacket over a black T-shirt with utility trousers and sunglasses",
    wrapper: "md:col-span-7 md:mt-28",
    ratio: "aspect-[4/5]",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    n: "05",
    title: "Not For Everyone",
    caption: "And that's the point.",
    src: "/images/lookbook/black-cargo-pants.jpg",
    alt: "Close fashion shot of wide black cargo trousers with utility pockets and white sneakers",
    wrapper: "md:col-span-12",
    ratio: "aspect-[4/5] md:aspect-[21/9]",
    sizes: "100vw",
  },
];

function LookCard({ look }: { look: Look }) {
  return (
    <figure className={look.wrapper}>
      {/* bg-line shows as a placeholder until the photo loads or exists */}
      <div className={`relative w-full overflow-hidden bg-line ${look.ratio}`}>
        <Image
          src={look.src}
          alt={look.alt}
          fill
          sizes={look.sizes}
          className="object-cover grayscale"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline gap-4">
        <span className="label-hero text-mute">{look.n}</span>
        <div>
          <p className="display text-2xl md:text-3xl">{look.title}</p>
          <p className="mt-1 text-mute">{look.caption}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function LookbookPage() {
  return (
    <main className="relative grain overflow-hidden bg-paper">
      {/* INTRO */}
      <section className="wrap pt-28 pb-16 md:pt-36 md:pb-24">
        <p className="label-hero">Lookbook</p>

        <h1 className="display mt-6 text-[17vw] leading-[0.84] md:text-[11.5vw]">
          <span className="grunge block">The Notorious</span>
          <span className="grunge block">standard.</span>
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <p className="max-w-[28ch] text-xl leading-snug md:col-span-5 md:text-2xl">
            A visual expression of modern menswear.
          </p>

          <div className="md:col-span-5 md:col-start-8">
            <ul className="border-t border-ink">
              {intro.map((line) => (
                <li
                  key={line}
                  className="border-b border-line py-3 text-lg md:text-xl"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-mute">
              Designed for those who don&apos;t follow the crowd.
            </p>
          </div>
        </div>
      </section>

      {/* LOOKS */}
      <section className="wrap pb-20 md:pb-32">
        <div className="grid gap-14 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
          {looks.map((look) => (
            <LookCard key={look.n} look={look} />
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-ink text-paper">
        <div className="wrap py-20 text-center md:py-32">
          <p className="display text-[16vw] leading-[0.9] md:text-[11vw]">
            NOTORIOUS<span className="align-super font-sans text-[0.2em]">®</span>
          </p>

          <p className="label-hero mt-8">Bold. Clean. Unapologetic.</p>

          <Link
            href="/collection"
            className="group label-hero mt-12 inline-flex items-center justify-between gap-10 bg-paper px-8 py-4 text-ink max-md:w-full"
          >
            Explore the collection
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1.5 md:h-5 md:w-5"
              aria-hidden
            />
          </Link>
        </div>
      </section>
    </main>
  );
}