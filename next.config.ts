import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default config;