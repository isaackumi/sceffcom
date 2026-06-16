'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  backHref?: string
  backLabel?: string
  dark?: boolean
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  backHref = '/',
  backLabel = 'Back to Home',
  dark = false,
}: PageHeaderProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className={
        dark
          ? 'bg-midnight pt-36 pb-16 text-stone md:pt-40 md:pb-20'
          : 'border-b border-border bg-stone pt-36 pb-16 md:pt-40 md:pb-20'
      }
    >
      <div className="container-editorial">
        <Link
          href={backHref}
          className={`mb-10 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            dark ? 'text-stone/60 hover:text-stone' : 'text-slate hover:text-midnight'
          }`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {backLabel}
        </Link>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="hairline-gold mb-8 h-0.5 w-16" />
          <p className={`label-gold mb-6 ${dark ? '!text-gold-light' : ''}`}>{eyebrow}</p>
          <h1 className={`headline-section text-balance ${dark ? 'text-stone' : ''}`}>{title}</h1>
          {description && (
            <p className={`body-lead mt-6 ${dark ? 'text-stone/70' : ''}`}>{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
