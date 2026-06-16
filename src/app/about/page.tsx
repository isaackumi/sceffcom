'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export default function AboutPage() {
  const { about } = siteContent
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-stone">
      <PageHeader eyebrow="About Us" title={siteContent.meta.brandName} description={about.paragraphs[0]} />

      <section className="section-pad border-b border-border">
        <div className="container-editorial max-w-3xl">
          <div className="space-y-6 text-[17px] leading-relaxed text-slate">
            {about.paragraphs.slice(1).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {siteContent.meta.brandTags.map((tag) => (
              <span key={tag} className="border border-border px-3 py-1 text-xs text-slate">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-border bg-stone-dark">
        <div className="container-editorial grid items-start gap-12 lg:grid-cols-12">
          <div className="relative aspect-square lg:col-span-4">
            <Image
              src={siteContent.teamMembers.founder.image}
              alt={siteContent.teamMembers.founder.name}
              fill
              className="object-cover"
              sizes="400px"
              priority
            />
          </div>
          <div className="lg:col-span-8">
            <p className="label-gold mb-4">Leadership</p>
            <h2 className="font-display text-3xl font-light text-midnight">
              {siteContent.teamMembers.founder.name}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gold">
              {siteContent.teamMembers.founder.title}
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-slate">{siteContent.teamMembers.founder.bio}</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-border">
        <div className="container-editorial grid gap-16 md:grid-cols-2">
          <div>
            <p className="label-gold mb-4">Vision</p>
            <p className="text-[16px] leading-relaxed text-slate">{about.vision.text}</p>
          </div>
          <div>
            <p className="label-gold mb-4">Mission</p>
            <p className="mb-4 text-midnight">{about.mission.intro}</p>
            <ul className="space-y-3">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex gap-4 text-[15px] text-slate">
                  <span className="mt-2 h-px w-6 shrink-0 bg-gold" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-border bg-stone-dark">
        <div className="container-editorial grid gap-16 lg:grid-cols-2">
          <div>
            <p className="label-gold mb-6">{about.whoWeServe.title}</p>
            <ul className="space-y-3">
              {about.whoWeServe.items.map((item) => (
                <li key={item} className="text-[16px] text-slate">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-gold mb-6">{about.approach.title}</p>
            <p className="font-medium text-midnight">{about.approach.languages}</p>
            <ul className="mt-4 space-y-2 text-slate">
              {about.approach.methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-editorial">
          <p className="label-gold mb-10">{about.activities.title}</p>
          {about.activities.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="program-row"
            >
              <span className="program-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-2xl text-midnight">{item.title}</h3>
                <p className="mt-3 text-slate">{item.description}</p>
              </div>
            </motion.article>
          ))}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">View all services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
