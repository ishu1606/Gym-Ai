// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['swr']
  }
}

module.exports = nextConfig


export default nextConfig;