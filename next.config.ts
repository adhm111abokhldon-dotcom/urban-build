import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Next.js only allows the qualities that are listed here.
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
