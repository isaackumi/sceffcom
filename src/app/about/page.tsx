'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }

export default function AboutPage() {
  const { about } = siteContent
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader
        eyebrow="About Us"
        title={siteContent.meta.brandName}
        description={about.paragraphs[0]}
      />

      <section className="section-padding border-b border-border">
        <div className="container max-w-3xl">
          <div className="space-y-6 text-[17px] leading-relaxed text-ink-muted">
            {about.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? 'hidden' : undefined}>{para}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {siteContent.meta.brandTags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-parchment px-3 py-1 text-xs font-medium text-ink-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border bg-sage">
        <div className="container">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,260px)_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl border border-border">
              <Image
                src={siteContent.teamMembers.founder.image}
                alt={siteContent.teamMembers.founder.name}
                fill
                className="object-cover"
                sizes="260px"
                priority
              />
            </div>
            <div>
              <p className="section-eyebrow mb-3">Leadership</p>
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                {siteContent.teamMembers.founder.name}
              </h2>
              <p className="mt-2 font-medium text-terracotta">{siteContent.teamMembers.founder.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{siteContent.teamMembers.founder.subtitle}</p>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
                {siteContent.teamMembers.founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container grid gap-8 md:grid-cols-2">
          <article className="editorial-card">
            <p className="section-eyebrow mb-3">Vision</p>
            <h2 className="font-display text-xl font-medium text-ink">{about.vision.title}</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">{about.vision.text}</p>
          </article>
          <article className="editorial-card bg-parchment">
            <p className="section-eyebrow mb-3">Mission</p>
            <h2 className="font-display text-xl font-medium text-ink">{about.mission.title}</h2>
            <p className="mt-3 text-[16px] text-ink-muted">{about.mission.intro}</p>
            <ul className="mt-4 space-y-2">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding border-b border-border bg-parchment">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-4">{about.whoWeServe.title}</p>
            <ul className="space-y-3">
              {about.whoWeServe.items.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] text-ink-muted">
                  <span className="font-display text-lg text-terracotta">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow mb-4">{about.approach.title}</p>
            <p className="font-medium text-ink">{about.approach.languages}</p>
            <ul className="mt-4 space-y-2">
              {about.approach.methods.map((method) => (
                <li key={method} className="text-[16px] text-ink-muted">{method}</li>
              ))}
            </ul>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">{about.approach.closing}</p>
          </div>
        </div>
      </section>

      <section id="activities" className="section-padding">
        <div className="container">
          <p className="section-eyebrow mb-4">{about.activities.title}</p>
          <div className="space-y-6">
            {about.activities.items.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid gap-4 rounded-2xl border border-border bg-cream p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
              >
                <span className="program-number">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View all services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
