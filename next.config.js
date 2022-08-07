/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatarfiles.alphacoders.com',
      'lh3.googleusercontent.com'
    ],
  }
}

module.exports = nextConfig
