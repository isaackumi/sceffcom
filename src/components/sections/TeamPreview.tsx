'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

type PreviewMember = { name: string; role: string; image?: string | null; bio?: string }

export default function TeamPreview() {
  const reduceMotion = useReducedMotion()
  const { teamMembers } = siteContent
  const previewMembers: PreviewMember[] = [
    { ...teamMembers.founder, role: teamMembers.founder.title },
    ...teamMembers.advisoryBoard.slice(0, 2).map((m) => ({ name: m.name, role: m.role, image: null })),
  ]
  const soloLead = previewMembers.length === 1
  const member = previewMembers[0]

  return (
    <section id="team-preview" className="section-padding relative bg-forest text-cream">
      <div className="grain-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="section-eyebrow mb-4 text-terracotta-light">Leadership</p>
          <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
            {soloLead ? 'Meet Our Team Lead' : 'Meet Our Team'}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/75">{teamMembers.intro}</p>
        </motion.div>

        {soloLead && member && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-10 lg:grid-cols-[280px_1fr]"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-cream/20">
              {member.image && (
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="280px" />
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium text-cream sm:text-3xl">{member.name}</h3>
              <p className="mt-2 font-medium text-terracotta-light">{member.role}</p>
              {member.bio && (
                <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-cream/80">{member.bio}</p>
              )}
              {teamMembers.registeredNote && (
                <p className="mt-4 text-sm italic text-cream/60">{teamMembers.registeredNote}</p>
              )}
              <Link
                href="/team"
                className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                View full profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {!soloLead && (
          <div className="grid gap-6 md:grid-cols-3">
            {previewMembers.map((m) => (
              <article key={m.name} className="rounded-2xl border border-cream/15 bg-forest-light/50 p-6">
                <h3 className="font-display text-lg font-medium">{m.name}</h3>
                <p className="mt-1 text-sm text-cream/70">{m.role}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
