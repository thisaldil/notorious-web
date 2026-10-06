export const siteConfig = {
  name: "NOTORIOUS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com", // change production domain here
  title: "NOTORIOUS | Premium Men's Streetwear",
  description: "NOTORIOUS is a premium men's clothing brand built around clean style, bold attitude and timeless everyday essentials.",
  email: "hello@notorious.com",
  // Set true once real photos exist in /public/images/products/<slug>.jpg
  useLocalImages: true,
  socials: [
    { label: "Instagram", href: "https://instagram.com/your-handle" },
    { label: "Facebook", href: "https://facebook.com/your-page" },
    { label: "TikTok", href: "https://tiktok.com/@your-handle" },
  ],
  nav: [
    { label: "About", href: "/about" },
    { label: "Collection", href: "/collection" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
