/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "fakestoreapi.com",
            port: "",
            pathname: "/img/**",
          },
          {
            protocol: "https",
            hostname: "uxwing.com",
            port: "",
            pathname: "/wp-content/themes/uxwing/download/web-app-development/**"

          }
        ],
    }
}

module.exports = nextConfig
