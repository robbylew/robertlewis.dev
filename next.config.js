/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
      'github.com',
      'i.imgur.com',
      'robbylew.dev',
      'lastfm.freetls.fastly.net',
      'contribution.catsjuice.com'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/blog/feed'
      },
      {
        source: '/atom',
        destination: '/blog/feed'
      },
      {
        source: '/rss.xml',
        destination: '/blog/feed'
      },
      {
        source: '/atom.xml',
        destination: '/blog/feed'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }]
      }
    ]
  }
}

module.exports = nextConfig
