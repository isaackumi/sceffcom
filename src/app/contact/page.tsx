'use client'

import Contact from '@/components/sections/Contact'
import { siteContent } from '@/data/content'
import PageHeader from '@/components/ui/PageHeader'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
        description={siteContent.contact.pageSubtitle}
      />
      <Contact hideHeader />
    </div>
  )
}
