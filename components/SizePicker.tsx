"use client";
import { useState } from "react";
export function SizePicker({ sizes }: { sizes: string[] }) {
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  return (
    <div>
      <div role="radiogroup" aria-label="Size" className="flex gap-2">
        {sizes.map((s) => (
          <button key={s} role="radio" aria-checked={size === s} onClick={() => { setSize(s); setAdded(false); }}
            className={`h-12 w-12 border text-sm ${size === s ? "bg-ink text-paper border-ink" : "border-line hover:border-ink"}`}>{s}</button>
        ))}
      </div>
      <button disabled={!size} onClick={() => setAdded(true)} className="mt-6 w-full bg-ink py-4 text-paper label disabled:opacity-40">
        {added ? `Added — size ${size}` : "Add to bag"}
      </button>
      <p aria-live="polite" className="label mt-3 text-mute">{!size ? "Select a size" : added ? "Added to your bag" : ""}</p>
    </div>
  );
}
