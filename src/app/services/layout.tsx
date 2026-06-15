import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

export const metadata: Metadata = {
  title: `Our Services | ${siteContent.meta.brandName}`,
  description: siteContent.meta.description,
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
