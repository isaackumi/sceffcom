'use client'

import { siteContent } from '@/data/content'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const { about, teamMembers } = siteContent
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="section-pad bg-stone-dark">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="label-gold mb-6">Who we are</p>
            <h2 className="headline-section text-balance">{siteContent.meta.brandTagline}</h2>
            <p className="body-lead mt-8">{about.paragraphs[0]}</p>
            <Link href="/about" className="link-gold mt-8">
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={teamMembers.founder.image}
                alt={teamMembers.founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <p className="pull-quote mt-10 max-w-xl">
              &ldquo;Communication is not one-size-fits-all. What works in a boardroom differs from a palace, a
              courtroom, or the media space.&rdquo;
            </p>
          </motion.div>
        </div>

        <div className="hairline my-16 md:my-20" />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="label-gold mb-4">Mission</p>
            <p className="mb-4 text-lg font-semibold text-midnight md:text-xl">{about.mission.intro}</p>
            <ul className="space-y-4">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex gap-4 body-copy">
                  <span className="mt-2 h-px w-6 shrink-0 bg-gold" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-gold mb-4">Vision</p>
            <p className="body-copy">{about.vision.text}</p>
          </div>
        </div>

        <div className="hairline my-16 md:my-20" />

        <p className="label-gold mb-10">{about.objectives.title}</p>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {about.objectives.items.map((item, i) => (
            <div key={i} className="bg-stone-dark p-8 md:p-10">
              <span className="font-display text-4xl font-semibold text-gold-dark">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 body-copy">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
