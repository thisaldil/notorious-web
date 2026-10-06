import type { NextConfig } from "next";
// If you use remote images, whitelist their hosts here:
// images: { remotePatterns: [{ protocol: "https", hostname: "images.example.com" }] }
const config: NextConfig = { images: { formats: ["image/avif", "image/webp"] } };
export default config;
