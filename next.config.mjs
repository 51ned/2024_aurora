/** @type { import('next').NextConfig } */


const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'accept-ch',
            value: 'sec-ch-prefers-color-scheme'
          }
        ]
      }
    ]
  },
  reactStrictMode: false
}


export default nextConfig
