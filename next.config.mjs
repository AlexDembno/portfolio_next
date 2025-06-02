/** @type {import('next').NextConfig} */
const isGithub = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGithub && {
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  }),
};

export default nextConfig;
