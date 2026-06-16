'use client'

import { siteContent } from '@/data/content'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }

export default function Services({ hideHeader }: { hideHeader?: boolean } = {}) {
  const reduceMotion = useReducedMotion()
  const activities = siteContent.about.activities.items

  return (
    <section id="services" className="section-padding relative bg-sage">
      <div className="grain-overlay" aria-hidden />
      <div className="container relative z-10">
        {!hideHeader && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mb-16 max-w-2xl"
          >
            <motion.p variants={fadeUp} className="section-eyebrow mb-4">
              Programs
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              What We Offer
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-ink-muted">
              {siteContent.about.activities.subtitle}
            </motion.p>
          </motion.div>
        )}

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {activities.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              transition={reduceMotion ? { duration: 0.3 } : undefined}
              className="group grid gap-6 rounded-2xl border border-border bg-cream p-6 shadow-card transition-shadow hover:shadow-editorial md:grid-cols-[auto_1fr] md:items-start md:gap-10 md:p-8"
            >
              <span className="program-number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                  {item.description}
                </p>
                <Link href="/contact" className="link-arrow mt-5 text-sm">
                  Enquire about this program
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
