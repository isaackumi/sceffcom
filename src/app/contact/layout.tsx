import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

export const metadata: Metadata = {
  title: `Contact Us | ${siteContent.meta.brandName}`,
  description: `Get in touch with ${siteContent.meta.brandName} for communication training and consulting.`,
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
