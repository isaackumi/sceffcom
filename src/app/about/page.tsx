'use client'

import { siteContent } from '@/data/content'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight, Flag, Eye, ArrowRight, ArrowLeft, ListChecks, Sparkles } from 'lucide-react'
import Link from 'next/link'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function AboutPage() {
  const { about } = siteContent
  const reduceMotion = useReducedMotion()

  const viewAnim = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduceMotion
      ? { duration: 0.35 }
      : { duration: 0.55, ease: easeOut },
  }

  return (
    <div className="min-h-screen bg-surface font-sans text-brand-ink">
      <div className="fixed top-24 left-4 z-40 sm:left-6">
        <Link
          href="/"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-ink/20 bg-white/92 px-4 py-2.5 font-semibold text-sm text-brand-ink shadow-lg shadow-brand-ink/10 backdrop-blur-md transition-all hover:border-brand-clay/35 hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
          Back to Home
        </Link>
      </div>

      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-ink via-[#231c18] to-brand-ink banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(250,204,21,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 relative z-10">
          <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">About Us</span>
          </div>
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="max-w-4xl mb-10 space-y-8"
          >
            <h1 className="font-heading text-white drop-shadow-md">
              <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-balance leading-[1.15]">
                {siteContent.meta.brandName}
              </span>
              <span className="mt-5 block text-lg sm:text-xl md:text-2xl font-medium text-white/92 leading-snug text-balance max-w-3xl border-l-[3px] border-primary-500 pl-5 sm:pl-6">
                {siteContent.meta.brandTagline}
              </span>
            </h1>
            <div>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary-300/90 mb-3">
                Campaigns &amp; programs
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5" aria-label="Campaign hashtags and program names">
                {siteContent.meta.brandTags.map((tag, i) => (
                  <motion.li
                    key={tag}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.15 + i * 0.06, duration: 0.35 }}
                  >
                    <span className="inline-flex rounded-xl bg-white/[0.14] backdrop-blur-md border border-white/25 px-3.5 py-2 text-sm sm:text-[0.9375rem] font-semibold text-white shadow-sm">
                      {tag}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.header>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="#mission"
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-2 border-brand-ink/25 bg-primary-500 px-6 py-3.5 text-sm font-bold text-brand-ink shadow-lg transition-colors hover:bg-primary-400 sm:text-base"
            >
              Our Mission
              <ChevronRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
            <Link
              href="#activities"
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-white/10 sm:text-base"
            >
              Activities &amp; Services
              <ChevronRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.45 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <div className="w-6 h-10 border-2 border-white/35 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"
            />
          </div>
        </motion.div>
      </section>

      {/* Narrative */}
      <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sand/50 blur-3xl pointer-events-none" aria-hidden />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative">
          <motion.div {...viewAnim}>
            <p className="section-eyebrow mb-4">Who we are</p>
            <h2 className="mb-10 font-heading text-2xl font-semibold tracking-tight text-brand-ink text-balance sm:text-3xl">
              Our story
            </h2>
            <div className="space-y-8 text-slate-600 leading-[1.75] text-[17px]">
              {about.paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-slate-700 text-lg sm:text-[1.125rem] font-medium' : undefined}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative border-y border-brand-ink/12 bg-surface py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            {...viewAnim}
            className="rounded-sm border border-brand-ink/12 bg-white p-6 shadow-[0_20px_50px_-15px_rgba(20,17,15,0.08)] ring-1 ring-white sm:p-10 lg:p-12"
          >
            <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-10 lg:gap-14 items-start">
              <div className="relative mx-auto lg:mx-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-full lg:aspect-square lg:max-w-[280px] rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-brand-ink/10">
                <Image
                  src={siteContent.teamMembers.founder.image}
                  alt={siteContent.teamMembers.founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 256px, 280px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/25 to-transparent pointer-events-none" />
              </div>
              <div>
                <p className="section-eyebrow mb-3">{siteContent.teamMembers.founder.title}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading tracking-tight mb-2 text-balance">
                  {siteContent.teamMembers.founder.name}
                </h2>
                <p className="text-brand-clay font-semibold text-base mb-6 leading-snug">
                  {siteContent.teamMembers.founder.subtitle}
                </p>
                <div className="border-l-[3px] border-brand-clay/50 pl-5 sm:pl-6">
                  <p className="text-slate-600 leading-[1.75] text-[17px]">{siteContent.teamMembers.founder.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.article
            {...viewAnim}
            className="group rounded-sm border border-brand-ink/12 bg-white p-8 shadow-md transition-all hover:border-brand-clay/35 hover:shadow-xl lg:p-9"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-sand border border-brand-ink/12 flex items-center justify-center mb-6 group-hover:bg-brand-sand/80 transition-colors">
              <Eye className="w-6 h-6 text-brand-clay" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 tracking-tight">
              {about.vision.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">{about.vision.text}</p>
          </motion.article>

          <motion.article
            id="mission"
            {...viewAnim}
            transition={
              reduceMotion
                ? { duration: 0.35 }
                : { duration: 0.55, ease: easeOut, delay: 0.06 }
            }
            className="group rounded-sm border border-brand-ink/12 bg-white p-8 shadow-md transition-all hover:border-primary-500/40 hover:shadow-xl lg:p-9"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-mist border border-brand-ink/10 flex items-center justify-center mb-6 group-hover:bg-brand-sand/80 transition-colors">
              <Flag className="w-6 h-6 text-brand-clay" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 tracking-tight">
              {about.mission.title}
            </h2>
            <p className="text-slate-700 font-medium mb-4 text-[17px] leading-relaxed">{about.mission.intro}</p>
            <ul className="space-y-3">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-slate-600 text-[15px] sm:text-[16px] leading-relaxed">
                  <ChevronRight className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* Objectives */}
        <motion.section
          {...viewAnim}
          transition={
            reduceMotion
              ? { duration: 0.35 }
              : { duration: 0.55, ease: easeOut, delay: 0.04 }
          }
          className="mt-12 lg:mt-16 rounded-2xl bg-gradient-to-br from-brand-sand/90 via-brand-paper to-primary-100/25 border border-brand-ink/12 p-8 md:p-10 lg:p-12 shadow-md"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-white border border-brand-ink/12 shadow-sm flex items-center justify-center">
              <ListChecks className="w-5 h-5 text-brand-clay" aria-hidden />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight">
              {about.objectives.title}
            </h2>
          </div>
          <ul className="divide-y divide-brand-ink/12 space-y-0">
            {about.objectives.items.map((item, i) => (
              <li key={i} className="flex gap-4 py-5 first:pt-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-clay text-xs font-bold text-white tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-600 leading-relaxed text-[16px] pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Who we serve & approach */}
        <motion.section
          {...viewAnim}
          transition={
            reduceMotion
              ? { duration: 0.35 }
              : { duration: 0.55, ease: easeOut, delay: 0.06 }
          }
          className="mt-12 lg:mt-16 grid gap-6 md:grid-cols-2"
        >
          <article className="rounded-sm border border-brand-ink/12 bg-white p-8 shadow-md lg:p-9">
            <h2 className="mb-6 font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {about.whoWeServe.title}
            </h2>
            <ul className="space-y-3">
              {about.whoWeServe.items.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600 text-[15px] sm:text-[16px] leading-relaxed">
                  <ChevronRight className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-sm border border-brand-ink/12 bg-white p-8 shadow-md lg:p-9">
            <h2 className="mb-4 font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {about.approach.title}
            </h2>
            <p className="mb-4 font-medium text-slate-700 text-[16px]">{about.approach.languages}</p>
            <ul className="mb-4 space-y-2">
              {about.approach.methods.map((method) => (
                <li key={method} className="flex gap-3 text-slate-600 text-[15px] sm:text-[16px] leading-relaxed">
                  <ChevronRight className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-[16px]">{about.approach.closing}</p>
          </article>
        </motion.section>

        {/* Activities */}
        <motion.section
          id="activities"
          {...viewAnim}
          transition={
            reduceMotion
              ? { duration: 0.35 }
              : { duration: 0.55, ease: easeOut, delay: 0.08 }
          }
          className="mt-12 lg:mt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="section-eyebrow mb-2">What we do</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading tracking-tight text-balance">
                {about.activities.title}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-clay font-semibold text-sm hover:text-brand-clay transition-colors shrink-0"
            >
              View all services
              <ChevronRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-5 sm:gap-6">
            {about.activities.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  delay: reduceMotion ? 0 : i * 0.05,
                  duration: 0.45,
                  ease: easeOut,
                }}
                className="rounded-sm border border-brand-ink/10 bg-white p-6 shadow-sm transition-all hover:border-brand-clay/30 hover:shadow-md sm:p-8"
              >
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-sand border border-brand-ink/12">
                    <Sparkles className="w-5 h-5 text-brand-clay" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading leading-snug mb-3 text-balance">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-[16px]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/25 bg-primary-500 px-8 py-3.5 font-bold text-brand-ink shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-400 sm:w-auto"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <Link
              href="/team"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-white px-8 py-3.5 font-semibold text-brand-ink transition-colors hover:bg-brand-sand sm:w-auto"
            >
              Meet our team
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
