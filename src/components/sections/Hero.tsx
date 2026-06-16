'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/data/content'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const heroImage = siteContent.hero.slides?.[0]?.image ?? siteContent.hero.backgroundImage

  return (
    <section
      id="hero__21st"
      data-slot="hero"
      aria-label="Welcome"
      className="relative overflow-hidden bg-parchment"
    >
      <div className="grain-overlay" aria-hidden />

      <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 pt-28 pb-16 lg:grid-cols-2 lg:gap-16 lg:pt-32 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <p className="section-eyebrow mb-5">{siteContent.hero.eyebrow}</p>
          <h1 className="hero-display text-balance text-ink">{siteContent.meta.brandName}</h1>
          <p className="mt-3 font-display text-xl font-medium italic text-forest sm:text-2xl">
            {siteContent.meta.brandTagline}
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            {siteContent.hero.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {siteContent.meta.brandTags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-cream px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary">
              {siteContent.hero.ctaText}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a consultation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-editorial sm:aspect-[5/6]">
            <Image
              src={heroImage}
              alt={siteContent.hero.slides?.[0]?.alt ?? siteContent.meta.brandName}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-cream p-5 shadow-card sm:block lg:-bottom-6 lg:-left-6">
            <p className="font-display text-3xl font-medium text-forest">5+</p>
            <p className="mt-1 max-w-[10rem] text-sm leading-snug text-ink-muted">
              Languages of instruction — Twi, Ga, Ewe, Hausa &amp; English
            </p>
          </div>
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-terracotta/30 bg-terracotta/10"
            aria-hidden
          />
        </motion.div>
      </div>

      <div className="editorial-divider" />
    </section>
  )
}
