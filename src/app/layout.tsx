import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Caveat } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { config } from 'global-config'
import { Header } from './_components/header'
import { Footer } from './_components/footer'
import { Providers } from './providers'

import '~/styles/main.css'

export const metadata: Metadata = {
  ...config.metadata,
  metadataBase: new URL(config.webserver.host),
  title: {
    default: config.metadata.title,
    template: `%s • ${config.metadata.title}`
  },
  applicationName: config.metadata.title,
  authors: [{ name: 'Robert Lewis', url: 'https://github.com/robbylew' }],
  category: 'Personal Website',
  keywords: [
    'personal',
    'blog',
    'homepage',
    'portfolio',
    'about',
    'me',
    'tech',
    'programming',
    'knowledge'
  ],
  robots: {
    follow: true,
    index: true
  },
  openGraph: {
    ...config.metadata,
    siteName: config.metadata.title,
    type: 'website',
    url: '/',
    emails: ['contact@robertlewis.dev'],
    images: [
      {
        url: 'https://robertlewis.dev/api/og', // Add the og:image property here
        alt: 'Robert Lewis Portfolio'
      }
    ]
  },
  twitter: {
    ...config.metadata,
    card: 'summary_large_image'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#060606' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap'
})

const dancingScript = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://us.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body
        className={`scroll-smooth ${inter.variable} ${dancingScript.variable}`}
      >
        <Providers>
          <Header />
          <div>{children}</div>
          <SpeedInsights />
          <div className="fixed left-0 top-10 -z-50 hidden h-96 w-96 bg-[url(/assets/robin-bird-bro.svg)] bg-contain bg-bottom bg-no-repeat opacity-10 dark:opacity-5 md:block " />

          <div className="fixed bottom-0 right-0 -z-50 hidden h-96 w-96 bg-[url(/assets/server-status-bro-light.svg)] bg-contain bg-bottom bg-no-repeat opacity-10 dark:bg-[url(/assets/server-status-bro-dark.svg)] dark:opacity-5 md:block " />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
