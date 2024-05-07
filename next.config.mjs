/** @type { import('next').NextConfig } */


const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Prefers-Color-Scheme'
          }
        ]
      }
    ]
  },
  reactStrictMode: false
}


export default nextConfig
