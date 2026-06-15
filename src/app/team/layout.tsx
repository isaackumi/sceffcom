import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

export const metadata: Metadata = {
  title: `Our Team | ${siteContent.meta.brandName}`,
  description: `Meet the ${siteContent.meta.brandName} team and consultants.`,
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
