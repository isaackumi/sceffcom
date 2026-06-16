import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteContent.meta.brandName}`,
  description: `Privacy policy for ${siteContent.meta.brandName} website and services.`,
}

export default function PrivacyPage() {
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
          <h1 className="mb-10 font-display text-4xl font-medium text-ink">Privacy Policy</h1>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              {siteContent.meta.orgLegalName} is committed to protecting your privacy. This policy outlines how we
              collect, use, and safeguard your information.
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium text-ink">Information We Collect</h2>
            <p>
              We may collect information you provide when contacting us, subscribing to our newsletter, or participating
              in our programs. This may include your name, email address, phone number, and other relevant details.
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium text-ink">How We Use Your Information</h2>
            <p>
              We use your information to respond to inquiries, send updates about our programs, and improve our services.
              We do not share your personal information with third parties without your consent.
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium text-ink">Contact Us</h2>
            <p>
              For questions about this privacy policy, please contact us at{' '}
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
