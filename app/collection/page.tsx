import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: { absolute: "NOTORIOUS Collection | Men's Streetwear" }, description: "Shop the NOTORIOUS men's collection: tees, shirts, outerwear and everyday essentials.", alternates: { canonical: "/collection" } };

export default function CollectionPage() {
  return (
    <div className="wrap pt-32 pb-24">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Collection", item: `${siteConfig.url}/collection` }] }} />
      <h1 className="display text-[18vw] md:text-[12vw]">The collection</h1>
      <p className="mt-4 mb-10 text-mute">Everyday pieces. Designed with intention.</p>
      <ProductGrid />
    </div>
  );
}
