import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site (SSG) -> folder `out/`
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias["@"] = root;
    return config;
  },
};
export default nextConfig;
