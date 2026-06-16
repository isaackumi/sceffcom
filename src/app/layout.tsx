import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/data/content'
import { siteUrl } from '@/lib/site'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import JsonLd from '@/components/JsonLd'
import { DevTwentyFirstToolbar } from '@/components/dev/DevTwentyFirstToolbar'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

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
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: siteContent.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/images/logo/nananom.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo/nananom.jpg" />
        <meta name="theme-color" content="#0B1628" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        <DevTwentyFirstToolbar />
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-midnight focus:px-4 focus:py-3 focus:font-semibold focus:text-stone focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Skip to main content
        </a>
        <Navigation />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
