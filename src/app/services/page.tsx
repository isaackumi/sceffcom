'use client'

import Services from '@/components/sections/Services'
import { siteContent } from '@/data/content'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

export default function ServicesPage() {
  const { services, about } = siteContent

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader
        eyebrow="Our Services"
        title={services.pageTitle}
        description={services.pageSubtitle}
      />

      <Services hideHeader />

      <section className="section-padding border-t border-border bg-cream">
        <div className="container">
          <p className="section-eyebrow mb-4">Training contexts</p>
          <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">Sectors We Cover</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">{services.sectionIntro}</p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.sectors.map((sector) => (
              <li key={sector} className="rounded-xl border border-border bg-parchment px-5 py-4 text-[15px] text-ink-muted">
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-sage">
        <div className="container">
          <p className="section-eyebrow mb-4">What we offer</p>
          <div className="grid gap-4 md:grid-cols-3">
            {services.offerCategories.map((category) => (
              <div key={category} className="editorial-card text-center md:text-left">
                <p className="font-display text-lg font-medium text-ink">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container">
          <p className="section-eyebrow mb-4">{siteContent.meta.parentOrg}</p>
          <h2 className="font-display text-2xl font-medium text-ink">{services.lwfActivities.title}</h2>
          <div className="mt-10 space-y-6">
            {services.lwfActivities.items.map((activity) => (
              <article key={activity.title} className="rounded-2xl border border-border bg-parchment p-6 sm:p-8">
                <h3 className="font-display text-xl font-medium text-ink">{activity.title}</h3>
                {'hashtags' in activity && activity.hashtags && (
                  <p className="mt-2 text-sm font-medium text-terracotta">{activity.hashtags.join(' · ')}</p>
                )}
                <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-forest text-cream">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-4 text-terracotta-light">{about.whoWeServe.title}</p>
            <ul className="space-y-3">
              {about.whoWeServe.items.map((item) => (
                <li key={item} className="text-[16px] text-cream/80">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow mb-4 text-terracotta-light">{about.approach.title}</p>
            <p className="font-medium text-cream">{about.approach.languages}</p>
            <ul className="mt-4 space-y-2 text-cream/80">
              {about.approach.methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-parchment text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-2xl font-medium text-ink">Ready to get started?</h2>
          <p className="mt-4 text-ink-muted">
            Contact us to discuss communication training, speaking-club outreach, or consultancy.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-secondary">
              About us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
