/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: false,
  images: {
    domains: ['i.pinimg.com', 'picsum.photos']
  }
}

module.exports = nextConfig
