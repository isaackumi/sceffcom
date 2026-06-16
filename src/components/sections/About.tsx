'use client'

import { siteContent } from '@/data/content'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function About() {
  const { about, teamMembers } = siteContent
  const reduceMotion = useReducedMotion()
  const motionProps = reduceMotion ? {} : { variants: fadeUp }

  return (
    <section id="about" className="section-padding relative bg-cream">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <motion.p variants={fadeUp} className="section-eyebrow mb-4">
              Who we are
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-balance">
              {siteContent.meta.brandTagline}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink-muted">
              {about.paragraphs[0]}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/about" className="link-arrow">
                Read our full story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={teamMembers.founder.image}
              alt={teamMembers.founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="mb-16 grid gap-6 md:grid-cols-2"
        >
          <motion.article variants={fadeUp} className="editorial-card">
            <p className="section-eyebrow mb-3">Mission</p>
            <h3 className="font-display text-xl font-medium text-ink">{about.mission.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{about.mission.intro}</p>
            <ul className="mt-4 space-y-2">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={fadeUp} className="editorial-card bg-sage">
            <p className="section-eyebrow mb-3">Vision</p>
            <h3 className="font-display text-xl font-medium text-ink">{about.vision.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{about.vision.text}</p>
          </motion.article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="section-eyebrow mb-4">
            {about.objectives.title}
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2">
            {about.objectives.items.map((item, i) => (
              <motion.div
                key={i}
                {...motionProps}
                variants={fadeUp}
                className="flex gap-4 rounded-xl border border-border bg-parchment p-5"
              >
                <span className="font-display text-2xl font-light text-terracotta">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[15px] leading-relaxed text-ink-muted">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
