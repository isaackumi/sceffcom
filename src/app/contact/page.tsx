'use client'

import Contact from '@/components/sections/Contact'
import { siteContent } from '@/data/content'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function ContactPage() {
  const reduceMotion = useReducedMotion()

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

      <section className="relative min-h-[40vh] overflow-hidden pt-8 sm:pt-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-ink via-[#231c18] to-brand-ink banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_0%,rgba(99,102,241,0.35),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">Contact Us</span>
          </div>
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="max-w-3xl space-y-5"
          >
            <h1 className="hero-title font-heading text-balance text-white drop-shadow-md">Get in Touch</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/95 drop-shadow-sm sm:text-xl">
              {siteContent.contact.pageSubtitle}
            </p>
          </motion.header>
        </div>
      </section>

      <Contact hideHeader />
    </div>
  )
}
