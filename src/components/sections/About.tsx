'use client'

import { siteContent } from '@/data/content'
import { motion, useReducedMotion } from 'framer-motion'
import { Target, Award, Lightbulb, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 380, damping: 32 },
  },
}
const fadeUpSimple = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }

export default function About() {
  const { about, teamMembers } = siteContent
  const reduceMotion = useReducedMotion()
  const cardMotion = reduceMotion ? fadeUpSimple : fadeUp

  return (
    <section id="about" className="relative overflow-hidden bg-neutral-50 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_0%_0%,rgba(245,158,11,0.08),transparent_55%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <motion.div
            variants={cardMotion}
            transition={reduceMotion ? { duration: 0.4 } : undefined}
            whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="card-hover rounded-md border border-neutral-200 border-l-4 border-l-amber-500 bg-white p-8 shadow-sm lg:p-9"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-neutral-100">
              <Award className="h-6 w-6 text-amber-800" aria-hidden />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-950">Our Mission</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-neutral-700">{about.mission.intro}</p>
            <ul className="space-y-2 text-[15px] text-neutral-700">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={cardMotion}
            transition={reduceMotion ? { duration: 0.4 } : undefined}
            whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="card-hover rounded-md border border-neutral-200 border-l-4 border-l-amber-800 bg-white p-8 shadow-sm lg:p-9"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-neutral-100">
              <Lightbulb className="h-6 w-6 text-amber-800" aria-hidden />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-neutral-950">Our Vision</h3>
            <p className="text-[15px] leading-relaxed text-neutral-700">{about.vision.text}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20 grid items-center gap-12 md:grid-cols-2"
        >
          <div>
            <motion.p variants={cardMotion} className="section-eyebrow mb-3">
              About Us
            </motion.p>
            <motion.h2 variants={cardMotion} className="mb-6 max-w-xl text-balance font-heading text-3xl font-semibold text-neutral-950 sm:text-4xl lg:text-5xl">
              {siteContent.meta.brandTagline}
            </motion.h2>
            <motion.p variants={cardMotion} className="mb-6 text-lg leading-relaxed text-neutral-700">
              {about.paragraphs[0]}
            </motion.p>
            <motion.div variants={cardMotion}>
              <Link
                href="/about"
                className="group inline-flex cursor-pointer items-center gap-2 font-bold text-link transition-colors hover:text-link-hover"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={cardMotion}
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative aspect-[4/3] overflow-hidden rounded-md border border-neutral-200 shadow-lg"
          >
            <Image
              src={teamMembers.founder.image}
              alt={`${teamMembers.founder.name} - ${teamMembers.founder.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/55 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {about.objectives.items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardMotion}
              whileHover={reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 450, damping: 28 } }}
              className="rounded-md border border-neutral-200 border-l-4 border-l-amber-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:p-7"
            >
              <Target className="mb-4 h-9 w-9 text-amber-800" aria-hidden />
              <p className="text-[15px] leading-relaxed text-neutral-700">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
