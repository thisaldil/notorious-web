import Link from "next/link";
import { Frame } from "./Frame";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  const [main, hover] = p.images;

  return (
    <Link href={`/collection/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Frame
          src={main}
          alt={`${p.name} in ${p.color}`}
          tone={p.tone}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />

        {hover && (
          <Frame
            src={hover}
            alt=""
            tone={p.tone}
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        <span className="label absolute bottom-0 inset-x-0 translate-y-full bg-paper py-3 text-center transition-transform group-hover:translate-y-0 group-focus-visible:translate-y-0">
          Quick view
        </span>
      </div>

      <div className="mt-3 flex justify-between gap-4 border-t border-ink pt-3">
        <div>
          <h3 className="font-semibold uppercase text-sm">
            {p.name}
          </h3>

          <p className="label mt-1 text-mute">
            {p.category}
          </p>
        </div>

        <p className="text-sm">${p.price}</p>
      </div>
    </Link>
  );
}