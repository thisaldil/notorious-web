import Link from "next/link";
import { siteConfig } from "@/config/site";
export function Footer() {
  return (
    <footer className="bg-ink text-paper wrap pt-16 pb-6 overflow-hidden">
      <div className="grid gap-10 md:grid-cols-3 border-b border-white/20 pb-10">
        <nav aria-label="Footer"><ul className="space-y-2">{siteConfig.nav.map((n) => <li key={n.href}><Link href={n.href} className="label hover:underline">{n.label}</Link></li>)}</ul></nav>
        <ul className="space-y-2">{siteConfig.socials.map((s) => <li key={s.label}><a href={s.href} rel="noopener noreferrer" target="_blank" className="label hover:underline">{s.label}</a></li>)}</ul>
        <form aria-label="Newsletter" className="space-y-3">
          <label htmlFor="nl" className="label block">Get the latest from Notorious</label>
          <div className="flex border-b border-paper"><input id="nl" type="email" required placeholder="Email address" className="w-full bg-transparent py-2 outline-none placeholder:text-white/40" />
            <button className="label">Subscribe</button></div>
        </form>
      </div>
      <p className="display text-[23.5vw] leading-[.8] py-8" aria-hidden>Notorious</p>
      <div className="label flex flex-wrap justify-between gap-4 text-white/60"><span>Men&apos;s clothing brand</span><span>© 2026 NOTORIOUS</span><span>Privacy Policy / Terms</span></div>
    </footer>
  );
}
