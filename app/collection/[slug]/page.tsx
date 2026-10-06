import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SizePicker } from "@/components/SizePicker";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);

  if (!p) return {};

  const cover = p.images[0];

  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `/collection/${p.slug}` },
    openGraph: {
      title: p.name,
      description: p.description,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);

  if (!p) notFound();

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  const rows = [
    ["Color", p.color],
    ["Material", p.material],
    ["Care", p.care],
  ];

  return (
    <main className="wrap pt-28 pb-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          color: p.color,
          material: p.material,
          brand: { "@type": "Brand", name: siteConfig.name },
          image: p.images.map((src) =>
            src.startsWith("http") ? src : `${siteConfig.url}${src}`
          ),
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/collection/${p.slug}`,
          },
        }}
      />

      <div className="grid gap-10 md:grid-cols-2">
        {/* PRODUCT IMAGES */}
        <div className="grid gap-4">
          {p.images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative aspect-[4/5] overflow-hidden bg-line"
            >
              <Image
                src={src}
                alt={`${p.name}, view ${i + 1}`}
                fill
                // Only the first image is above the fold: load it first,
                // lazy-load the rest so they don't compete for bandwidth.
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                // Two columns from md up; the grid has page padding, so 50vw is a safe upper bound.
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover motion-safe:md:transition-transform motion-safe:md:duration-700 motion-safe:md:hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* PRODUCT DETAILS */}
        <div className="self-start md:sticky md:top-24">
          <p className="label text-mute">{p.category}</p>

          <h1 className="display mt-2 text-6xl md:text-8xl">{p.name}</h1>

          <p className="mt-4 text-xl">${p.price}</p>

          <p className="mt-6 max-w-md text-mute">{p.description}</p>

          <dl className="my-8 divide-y divide-line border-y border-line text-sm">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-3">
                <dt className="label">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>

          <SizePicker sizes={p.sizes} />
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <section className="mt-24">
        <h2 className="display mb-8 text-5xl">You may also like</h2>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <ProductCard p={r} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}