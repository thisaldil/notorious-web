import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/collection", "/lookbook", "/contact"].map((p) => ({ url: `${siteConfig.url}${p}`, lastModified: new Date() }));
  return [...pages, ...products.map((p) => ({ url: `${siteConfig.url}/collection/${p.slug}`, lastModified: new Date() }))];
}
