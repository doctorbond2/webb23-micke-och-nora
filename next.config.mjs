/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['a.storyblok.com', 'colorfulstandard.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
