"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-x-8 gap-y-2 border-y border-line py-4">
        {categories.map((c) => (
          <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}
            className={`label pb-1 border-b-2 ${cat === c ? "border-ink" : "border-transparent text-mute hover:text-ink"}`}>{c}</button>
        ))}
      </div>
      <motion.ul layout className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.li layout key={p.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ProductCard p={p} /></motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
