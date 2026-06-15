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
    <div className="min-h-screen bg-surface font-sans text-slate-900">
      <div className="fixed left-4 top-24 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-brand-ink/20 bg-white/92 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-lg shadow-brand-ink/10 backdrop-blur-md transition-all hover:border-brand-clay/35 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      <main className="pb-24 pt-32 sm:pt-36">
        <div className="container max-w-3xl">
          <p className="section-eyebrow mb-3">Legal</p>
          <h1 className="mb-10 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem]">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p className="text-slate-700">
              {siteContent.meta.orgLegalName} is committed to protecting your privacy. This policy outlines how we
              collect, use, and safeguard your information.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">
              Information We Collect
            </h2>
            <p>
              We may collect information you provide when contacting us, subscribing to our newsletter, or participating
              in our programs. This may include your name, email address, phone number, and other relevant details.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to inquiries, send updates about our programs, and improve our services.
              We do not share your personal information with third parties without your consent.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Contact Us</h2>
            <p>
              For questions about this privacy policy, please contact us at{' '}
              <a href={`mailto:${siteContent.contact.email}`} className="font-semibold text-link hover:text-link-hover">
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
