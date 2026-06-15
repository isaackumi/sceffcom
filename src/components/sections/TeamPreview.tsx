'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { User, ArrowRight } from 'lucide-react'
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

  return (
    <section id="team-preview" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_30%,rgba(0,0,0,0.03),transparent)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={reduceMotion ? { duration: 0.45 } : { type: 'spring', stiffness: 380, damping: 32 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-3">Team</p>
          <h2 className="mb-6 max-w-3xl text-balance font-heading text-3xl font-semibold text-neutral-950 sm:text-4xl lg:text-5xl">
            {soloLead ? 'Meet Our Team Lead' : 'Meet Our Team'}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-700">{teamMembers.intro}</p>
          {soloLead && (
            <p className="mt-4 max-w-2xl text-[15px] italic leading-relaxed text-neutral-600">
              {teamMembers.registeredNote}
            </p>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 gap-6 ${soloLead ? 'mx-auto max-w-md' : 'md:grid-cols-3'}`}>
          {previewMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-24px' }}
              transition={
                reduceMotion
                  ? { duration: 0.4, delay: i * 0.05 }
                  : { type: 'spring', stiffness: 360, damping: 30, delay: i * 0.07 }
              }
              whileHover={reduceMotion ? undefined : { y: -5, transition: { type: 'spring', stiffness: 400, damping: 26 } }}
              className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-800">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-neutral-200">
                    <User className="h-20 w-20 text-neutral-400" aria-hidden />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-900/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-neutral-200">{member.role}</p>
                </div>
              </div>
              <div className="border-t border-neutral-100 bg-white p-6">
                {member.bio && (
                  <p className="mb-4 line-clamp-3 text-[15px] leading-relaxed text-neutral-700">{member.bio}</p>
                )}
                <Link
                  href="/team"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-link transition-colors hover:text-link-hover"
                >
                  View Full Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0.4 } : { type: 'spring', stiffness: 380, damping: 32 }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
            <Link
              href="/team"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-amber-700/30 bg-amber-500 px-8 py-3.5 font-bold text-neutral-950 shadow-sm transition-colors hover:bg-amber-400"
            >
              View Full Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
