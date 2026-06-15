'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, User, MapPin, Globe } from 'lucide-react'

const easeOut = [0.22, 1, 0.36, 1] as const

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-clay/35 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-ink/12 bg-brand-sand">
          <User className="h-5 w-5 text-brand-clay" aria-hidden />
        </div>
        <div className="min-w-0">
          <h4 className="font-heading font-bold text-slate-900">{name}</h4>
          <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const tm = siteContent.teamMembers
  const reduceMotion = useReducedMotion()

  const viewAnim = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduceMotion
      ? { duration: 0.35 }
      : { duration: 0.55, ease: easeOut },
  }

  const stagger = {
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  }

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
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

      <section className="relative min-h-[48vh] overflow-hidden pt-8 sm:pt-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-ink via-[#231c18] to-brand-ink banner-jagged pointer-events-none"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(250,204,21,0.08),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/95">
              Team Members
            </span>
          </div>
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="max-w-3xl space-y-5"
          >
            <h1 className="hero-title font-heading text-balance text-white drop-shadow-md">Our Team</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/95 drop-shadow-sm sm:text-xl">
              {tm.intro}
            </p>
            <p className="text-sm font-semibold italic text-primary-300">{tm.registeredNote}</p>
          </motion.header>
        </div>
      </section>

      <div className="space-y-16 py-16 sm:space-y-20 sm:py-20">
        {/* Founder */}
        <section className="border-y border-brand-ink/12/60 bg-white">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <motion.div {...viewAnim}>
              <div className="mb-8">
                <p className="section-eyebrow mb-2">Leadership</p>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-balance">
                  Team Lead
                </h2>
              </div>
              <div className="grid items-start gap-10 rounded-3xl border border-brand-ink/12/80 bg-white p-6 shadow-[0_20px_50px_-15px_rgba(49,46,129,0.12)] ring-1 ring-white sm:p-10 md:grid-cols-[minmax(0,240px)_1fr] lg:gap-14">
                <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-xl ring-1 ring-brand-ink/10 sm:h-56 sm:w-56 md:mx-0">
                  <Image src={tm.founder.image} alt={tm.founder.name} fill className="object-cover" sizes="224px" priority />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/25 to-transparent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">{tm.founder.name}</h3>
                  <p className="mt-1 font-semibold text-brand-clay">{tm.founder.title}</p>
                  <p className="mt-3 italic text-slate-600">{tm.founder.subtitle}</p>
                  <p className="mt-5 leading-[1.75] text-[17px] text-slate-600">{tm.founder.bio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {tm.advisoryBoard.length === 0 &&
          tm.associateMembers.length === 0 &&
          tm.team.length === 0 &&
          tm.regionalLeaders.length === 0 &&
          tm.internationalRepresentatives.length === 0 && (
            <section className="border-t border-brand-ink/12 bg-surface py-16 sm:py-20">
              <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <p className="text-lg leading-relaxed text-slate-600">{tm.registeredNote}</p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-sm border-2 border-brand-ink/20 bg-primary-500 px-8 py-3.5 font-bold text-brand-ink shadow-lg transition-colors hover:bg-primary-400"
                >
                  Enquire about training
                </Link>
              </div>
            </section>
          )}

        {/* Advisory Board */}
        {tm.advisoryBoard.length > 0 && (
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="mb-8">
              <p className="section-eyebrow mb-2">Governance</p>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Advisory Board
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tm.advisoryBoard.map((m) => (
                <motion.div key={m.name} variants={fadeUp}>
                  <MemberCard name={m.name} role={m.role} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
        )}

        {/* Associate Members — placeholder removed when empty */}
        {tm.associateMembers.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="mb-8">
                <p className="section-eyebrow mb-2">Network</p>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Associate Members
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {tm.associateMembers.map((m) => (
                  <motion.div key={m.name} variants={fadeUp}>
                    <MemberCard name={m.name} role={m.role} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </section>
        )}

        {/* Team (Staff) */}
        {tm.team.length > 0 && (
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="mb-8">
              <p className="section-eyebrow mb-2">Operations</p>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Team</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {tm.team.map((t) => (
                <motion.div key={t.role} variants={fadeUp}>
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-clay/30 hover:shadow-md">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-brand-ink">{t.role}</h4>
                    <p className="mt-2 text-slate-700">{t.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
        )}

        {/* Regional Team Leaders */}
        {tm.regionalLeaders.length > 0 && (
        <section className="border-y border-brand-ink/12/60 bg-surface py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-eyebrow mb-2">Regions</p>
                  <h2 className="font-heading flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    <MapPin className="h-7 w-7 shrink-0 text-brand-clay" aria-hidden />
                    Regional Team Leaders and Representatives
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tm.regionalLeaders.map((r) => (
                  <motion.div key={r.region} variants={fadeUp}>
                    <MemberCard name={r.name} role={r.region} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </section>
        )}

        {/* International Representatives */}
        {tm.internationalRepresentatives.length > 0 && (
        <div className="container mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="mb-8">
              <p className="section-eyebrow mb-2">Worldwide</p>
              <h2 className="font-heading flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                <Globe className="h-7 w-7 shrink-0 text-brand-clay" aria-hidden />
                International Representatives
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {tm.internationalRepresentatives.map((int) => (
                <motion.div key={int.country} variants={fadeUp}>
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-clay/30 hover:shadow-md">
                    <h4 className="font-bold text-brand-ink">{int.country}</h4>
                    <p className="mt-2 text-slate-700">{int.names.join(', ')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
        )}
      </div>
    </div>
  )
}
