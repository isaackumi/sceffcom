'use client'

import { siteContent } from '@/data/content'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

export default function Services({ hideHeader }: { hideHeader?: boolean } = {}) {
  const reduceMotion = useReducedMotion()
  const activities = siteContent.about.activities.items

  return (
    <section id="services" className="section-pad bg-midnight text-stone">
      <div className="container-editorial">
        {!hideHeader && (
          <div className="mb-16 max-w-2xl md:mb-24">
            <p className="label-gold mb-6 !text-gold-light">Programs</p>
            <h2 className="font-display text-display-lg font-medium text-stone">What We Offer</h2>
            <p className="mt-6 text-xl leading-relaxed text-stone md:text-2xl">
              {siteContent.about.activities.subtitle}
            </p>
          </div>
        )}

        <div>
          {activities.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid gap-6 border-t border-stone/15 py-10 md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-10 md:py-14"
            >
              <span className="program-index">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-3xl font-semibold text-stone md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone/90 md:text-xl">
                  {item.description}
                </p>
              </div>
              <Link
                href="/contact"
                className="link-gold shrink-0 self-start !text-gold-light hover:!text-stone"
              >
                Enquire
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
