'use client'

import Services from '@/components/sections/Services'
import { siteContent } from '@/data/content'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function ServicesPage() {
  const reduceMotion = useReducedMotion()
  const { services, about } = siteContent

  const viewAnim = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: reduceMotion
      ? { duration: 0.35 }
      : { duration: 0.55, ease: easeOut },
  }

  return (
    <div className="min-h-screen bg-surface font-sans text-slate-900">
      <div className="fixed left-4 top-24 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-ink/20 bg-white/92 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-lg shadow-brand-ink/10 backdrop-blur-md transition-all duration-200 hover:border-brand-clay/35 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      <section className="relative min-h-[44vh] overflow-hidden pt-8 sm:pt-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-ink via-[#231c18] to-brand-ink banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_0%,rgba(16,185,129,0.12),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">Our Services</span>
          </div>
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="max-w-3xl space-y-5"
          >
            <h1 className="hero-title font-heading text-balance text-white drop-shadow-md">
              {services.pageTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/95 drop-shadow-sm sm:text-xl">
              {services.pageSubtitle}
            </p>
          </motion.header>
        </div>
      </section>

      <Services hideHeader />

      <section className="border-t border-brand-ink/12 bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...viewAnim} className="mb-12">
            <p className="section-eyebrow mb-3">Training contexts</p>
            <h2 className="mb-4 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              Sectors We Cover
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">{services.sectionIntro}</p>
          </motion.div>
          <motion.ul
            {...viewAnim}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.sectors.map((sector) => (
              <li
                key={sector}
                className="flex items-start gap-3 rounded-sm border border-brand-ink/10 bg-surface px-5 py-4 text-[15px] leading-relaxed text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden />
                <span>{sector}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="border-t border-brand-ink/12 bg-surface py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...viewAnim} className="mb-12">
            <p className="section-eyebrow mb-3">What we offer</p>
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">Program Categories</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.offerCategories.map((category) => (
              <motion.div
                key={category}
                {...viewAnim}
                className="rounded-sm border border-brand-ink/12 bg-white p-6 shadow-sm"
              >
                <p className="font-heading text-lg font-semibold text-slate-900">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-ink/12 bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...viewAnim} className="mb-12">
            <p className="section-eyebrow mb-3">{siteContent.meta.parentOrg}</p>
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              {services.lwfActivities.title}
            </h2>
          </motion.div>
          <div className="grid gap-6">
            {services.lwfActivities.items.map((activity) => (
              <motion.article
                key={activity.title}
                {...viewAnim}
                className="rounded-sm border border-brand-ink/10 bg-surface p-6 sm:p-8"
              >
                <h3 className="mb-3 font-heading text-xl font-bold text-slate-900">{activity.title}</h3>
                {'hashtags' in activity && activity.hashtags && (
                  <p className="mb-3 text-sm font-semibold text-brand-clay">{activity.hashtags.join(' · ')}</p>
                )}
                <p className="text-[16px] leading-relaxed text-slate-600">{activity.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-ink/12 bg-gradient-to-br from-brand-sand/80 via-brand-paper to-primary-100/30 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div {...viewAnim}>
              <p className="section-eyebrow mb-3">{about.whoWeServe.title}</p>
              <ul className="space-y-3">
                {about.whoWeServe.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...viewAnim}>
              <p className="section-eyebrow mb-3">{about.approach.title}</p>
              <p className="mb-4 font-medium text-slate-800">{about.approach.languages}</p>
              <ul className="mb-4 space-y-2">
                {about.approach.methods.map((method) => (
                  <li key={method} className="flex items-start gap-3 text-[16px] text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] leading-relaxed text-slate-600">{about.approach.closing}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-ink/12 bg-gradient-to-br from-brand-sand/80 via-brand-paper to-primary-100/30 py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...viewAnim}>
            <p className="section-eyebrow mb-3">Next step</p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              Contact us today to discuss communication training, speaking-club outreach, or consultancy for your
              organization.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-primary-500 px-8 py-4 font-bold text-brand-ink shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-400 sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-white px-8 py-4 font-semibold text-brand-ink transition-colors hover:bg-brand-sand sm:w-auto"
              >
                About us
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
