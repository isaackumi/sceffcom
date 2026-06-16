import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

export const metadata: Metadata = {
  title: `Terms of Service | ${siteContent.meta.brandName}`,
  description: `Terms of service for ${siteContent.meta.brandName} website and services.`,
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <main className="pb-24 pt-32 sm:pt-36">
        <div className="container max-w-3xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Home
          </Link>
          <p className="section-eyebrow mb-4">Legal</p>
          <h1 className="mb-10 font-display text-4xl font-medium text-ink">Terms of Service</h1>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              By using the {siteContent.meta.orgLegalName} website and services, you agree to these terms of service.
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium text-ink">Use of Services</h2>
            <p>
              Our services are provided for professional training and consulting. You agree to use them in accordance
              with applicable laws and program guidelines.
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium text-ink">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and materials, is the property of{' '}
              {siteContent.meta.orgLegalName} and is protected by copyright laws. Unauthorized use is prohibited.
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium text-ink">Contact</h2>
            <p>
              For questions about these terms, please contact us at{' '}
              <a href={`mailto:${siteContent.contact.email}`} className="text-link">
                {siteContent.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
