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
            Terms of Service
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p className="text-slate-700">
              By using the {siteContent.meta.orgLegalName} website and services, you agree to these terms of service.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Use of Services</h2>
            <p>
              Our services are provided for professional training and consulting. You agree to use them in accordance
              with applicable laws and program guidelines.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and materials, is the property of{' '}
              {siteContent.meta.orgLegalName} and is protected by copyright laws. Unauthorized use is prohibited.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">Contact</h2>
            <p>
              For questions about these terms, please contact us at{' '}
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
