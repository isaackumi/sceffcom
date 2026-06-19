'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export default function TeamPreview() {
  const reduceMotion = useReducedMotion()
  const { teamMembers } = siteContent
  const founder = teamMembers.founder

  return (
    <section id="team-preview" className="section-pad bg-stone">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] lg:col-span-5"
          >
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="label-gold mb-6">Leadership</p>
            <h2 className="headline-section">{founder.name}</h2>
            <p className="mt-3 text-base font-bold uppercase tracking-widest text-gold-dark">{founder.title}</p>
            <p className="mt-2 text-lg italic text-midnight/75">{founder.subtitle}</p>
            <p className="body-lead mt-8 max-w-xl">{founder.bio}</p>
            {teamMembers.registeredNote && (
              <p className="mt-6 text-base leading-relaxed text-midnight/70 md:text-lg">{teamMembers.registeredNote}</p>
            )}
            <Link href="/team" className="link-gold mt-10">
              View full profile
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
