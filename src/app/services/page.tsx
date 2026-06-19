'use client'

import Services from '@/components/sections/Services'
import { siteContent } from '@/data/content'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

export default function ServicesPage() {
  const { services, about } = siteContent

  return (
    <div className="min-h-screen bg-stone">
      <PageHeader eyebrow="Our Services" title={services.pageTitle} description={services.pageSubtitle} />
      <Services hideHeader />

      <section className="section-pad border-t border-border">
        <div className="container-editorial">
          <p className="label-gold mb-6">Training contexts</p>
          <h2 className="headline-section">Sectors We Cover</h2>
          <p className="body-lead mt-6 max-w-2xl">{services.sectionIntro}</p>
          <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.sectors.map((sector) => (
              <li key={sector} className="bg-stone p-6 text-lg font-medium text-midnight md:text-xl">{sector}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-stone-dark">
        <div className="container-editorial">
          <p className="label-gold mb-8">What we offer</p>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {services.offerCategories.map((c) => (
              <div key={c} className="bg-stone-dark p-8 font-display text-2xl font-semibold text-midnight md:text-3xl">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border">
        <div className="container-editorial">
          <p className="label-gold mb-6">{siteContent.meta.parentOrg}</p>
          <h2 className="headline-section">{services.lwfActivities.title}</h2>
          <div className="mt-12 space-y-0">
            {services.lwfActivities.items.map((activity) => (
              <article key={activity.title} className="border-t border-border py-10">
                <h3 className="font-display text-3xl font-semibold text-midnight md:text-4xl">{activity.title}</h3>
                {'hashtags' in activity && activity.hashtags && (
                  <p className="mt-2 text-base font-semibold text-gold-dark">{activity.hashtags.join(' · ')}</p>
                )}
                <p className="mt-4 max-w-2xl body-copy">{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-midnight text-stone">
        <div className="container-editorial grid gap-16 lg:grid-cols-2">
          <div>
            <p className="label-gold mb-6 !text-gold-light">{about.whoWeServe.title}</p>
            <ul className="space-y-3 text-lg text-stone md:text-xl">
              {about.whoWeServe.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-gold mb-6 !text-gold-light">{about.approach.title}</p>
            <p className="text-lg text-stone md:text-xl">{about.approach.languages}</p>
            <ul className="mt-4 space-y-3 text-lg text-stone md:text-xl">
              {about.approach.methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border text-center">
        <div className="container-editorial max-w-xl">
          <h2 className="headline-section">Ready to get started?</h2>
          <p className="body-lead mt-6">Contact us to discuss training, outreach, or consultancy.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-outline">About us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
