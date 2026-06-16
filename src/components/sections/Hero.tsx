'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/data/content'

const words = ['Speak', 'Well,', 'Speak', 'Right']

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const heroImage = siteContent.hero.slides?.[0]?.image ?? siteContent.hero.backgroundImage
  const slide2 = siteContent.hero.slides?.[1]?.image ?? '/images/out2.jpeg'

  return (
    <section
      id="hero__21st"
      data-slot="hero"
      aria-label="Welcome"
      className="relative min-h-screen overflow-hidden bg-stone pt-24"
    >
      {/* Vertical institute label */}
      <div className="pointer-events-none absolute right-4 top-32 hidden lg:block" aria-hidden>
        <p className="vertical-label">Language Watch Foundation</p>
      </div>

      <div className="container-editorial relative">
        {/* Gold accent line */}
        <motion.div
          className="hairline-gold mb-10 h-0.5 w-24"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Magazine headline block */}
          <div className="lg:col-span-8">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="label-gold mb-6 max-w-xs text-balance"
            >
              {siteContent.meta.parentOrg}
            </motion.p>

            <div className="space-y-0">
              {words.map((word, i) => (
                <motion.div
                  key={`${word}-${i}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <span
                    className={`block font-display font-light leading-[0.9] tracking-tight text-midnight ${
                      i === 0 || i === 2
                        ? 'text-[clamp(3rem,12vw,7.5rem)]'
                        : i === 3
                          ? 'text-[clamp(3rem,12vw,7.5rem)] text-gold'
                          : 'text-[clamp(2rem,6vw,4rem)] italic text-slate'
                    }`}
                  >
                    {word}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side copy */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-end lg:col-span-4 lg:pb-4"
          >
            <p className="body-lead max-w-sm text-balance">{siteContent.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/services" className="btn-gold">
                {siteContent.hero.ctaText}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image composition — editorial overlap */}
        <div className="relative mt-14 grid gap-4 md:mt-20 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="relative aspect-[16/10] md:col-span-8 md:aspect-[16/9]"
          >
            <Image
              src={heroImage}
              alt={siteContent.hero.slides?.[0]?.alt ?? 'SCEFFCOM training session'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="relative aspect-[4/5] md:col-span-4 md:-mt-16 md:aspect-[3/4]"
          >
            <Image
              src={slide2}
              alt="Workshop and coaching"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-display text-2xl font-light text-midnight">{siteContent.meta.brandName}</p>
            <p className="mt-1 text-sm text-slate">{siteContent.meta.brandTagline}</p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate">
            Instruction in Twi, Ga, Ewe, Hausa &amp; English — online and in-person across Ghana.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
