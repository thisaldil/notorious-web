const items = ["Notorious", "Premium streetwear", "Everyday essentials", "Bold attitude"];
export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden bg-ink text-paper py-4" aria-label="NOTORIOUS, premium streetwear, everyday essentials, bold attitude">
      <div className="marquee-track flex w-max" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {row.map((t, i) => <span key={i} className="display text-3xl md:text-5xl px-6 md:px-10">{t} <span className="px-6">/</span></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
