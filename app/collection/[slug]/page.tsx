import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Frame } from "@/components/Frame";
import { SizePicker } from "@/components/SizePicker";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return { title: p.name, description: p.description, alternates: { canonical: `/collection/${p.slug}` } };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  const rows = [["Color", p.color], ["Material", p.material], ["Care", p.care]];
  return (
    <div className="wrap pt-28 pb-24">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description, category: p.category, color: p.color, material: p.material,
        brand: { "@type": "Brand", name: siteConfig.name }, image: `${siteConfig.url}/images/products/${p.slug}.jpg`,
        offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${siteConfig.url}/collection/${p.slug}` } }} />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="grid gap-4">
  {p.images.map((src, i) => (
    <Frame key={src} src={src} alt={`${p.name}, view ${i + 1}`} tone={p.tone}
      priority={i === 0} className="aspect-[4/5]" />
  ))}
</div>
        <div className="md:sticky md:top-24 self-start">
          <p className="label text-mute">{p.category}</p>
          <h1 className="display text-6xl md:text-8xl mt-2">{p.name}</h1>
          <p className="mt-4 text-xl">${p.price}</p>
          <p className="mt-6 max-w-md text-mute">{p.description}</p>
          <dl className="my-8 divide-y divide-line border-y border-line text-sm">
            {rows.map(([k, v]) => <div key={k} className="flex justify-between gap-6 py-3"><dt className="label">{k}</dt><dd className="text-right">{v}</dd></div>)}
          </dl>
          <SizePicker sizes={p.sizes} />
        </div>
      </div>
      <h2 className="display text-5xl mt-24 mb-8">You may also like</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">{related.map((r) => <li key={r.slug}><ProductCard p={r} /></li>)}</ul>
    </div>
  );
}
