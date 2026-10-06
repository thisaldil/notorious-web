import Image from "next/image";
import { siteConfig } from "@/config/site";
// Tonal placeholder until real photos exist. Flip siteConfig.useLocalImages to use /public/images.
export function Frame({ src, alt, tone = 10, priority = false, className = "" }: { src: string; alt: string; tone?: number; priority?: boolean; className?: string }) {
  return (
    <div role="img" aria-label={alt} className={`relative overflow-hidden grain ${className}`}
      style={{ background: `linear-gradient(160deg, hsl(0 0% ${tone + 12}%), hsl(0 0% ${tone}%))` }}>
      {siteConfig.useLocalImages && <Image src={src} alt="" fill priority={priority} sizes="(min-width:1024px) 50vw, 100vw" className="object-cover grayscale" />}
    </div>
  );
}
