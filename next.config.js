/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: false,
  images: {
    domains: ['i.pinimg.com']
  }
}

module.exports = nextConfig
