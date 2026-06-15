import type { Metadata } from 'next'
import './globals.css'
import { siteContent } from '@/data/content'
import { siteUrl } from '@/lib/site'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import JsonLd from '@/components/JsonLd'
import { DevTwentyFirstToolbar } from '@/components/dev/DevTwentyFirstToolbar'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: siteContent.meta.orgLegalName }],
  creator: siteContent.meta.orgLegalName,
  publisher: siteContent.meta.orgLegalName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteContent.meta.title,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteContent.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/nananom.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo/nananom.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased font-sans">
        <DevTwentyFirstToolbar />
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-neutral-950 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-white font-sans antialiased text-neutral-900">
          <Navigation />
          <div id="main-content" tabIndex={-1}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
