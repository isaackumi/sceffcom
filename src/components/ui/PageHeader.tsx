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
  variant?: 'light' | 'forest'
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  backHref = '/',
  backLabel = 'Back to Home',
  variant = 'light',
}: PageHeaderProps) {
  const reduceMotion = useReducedMotion()
  const isForest = variant === 'forest'

  return (
    <section
      className={
        isForest
          ? 'relative overflow-hidden bg-forest pt-28 pb-16 sm:pt-32 sm:pb-20'
          : 'relative overflow-hidden border-b border-border bg-parchment pt-28 pb-16 sm:pt-32 sm:pb-20'
      }
    >
      <div className="grain-overlay" aria-hidden />
      {isForest && (
        <div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-terracotta/10 blur-3xl"
          aria-hidden
        />
      )}

      <div className="container relative z-10">
        <Link
          href={backHref}
          className={
            isForest
              ? 'mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cream/70 transition-colors hover:text-cream'
              : 'mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink'
          }
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {backLabel}
        </Link>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className={`section-eyebrow mb-4 ${isForest ? 'text-terracotta-light' : ''}`}>{eyebrow}</p>
          <h1 className={`page-hero-title text-balance ${isForest ? 'text-cream' : 'text-ink'}`}>{title}</h1>
          {description && (
            <p
              className={`mt-5 max-w-2xl text-lg leading-relaxed ${
                isForest ? 'text-cream/80' : 'text-ink-muted'
              }`}
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
