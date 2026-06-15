'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface LearnMoreLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function LearnMoreLink({ href, children, className = '' }: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-link font-semibold text-sm hover:text-link-hover transition-colors group ${className}`}
    >
      <motion.span
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {children}
      </motion.span>
      <motion.span
        className="w-6 h-6 rounded bg-link/10 flex items-center justify-center group-hover:bg-link/20 transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
        >
          <ArrowRight className="w-3 h-3 text-link" />
        </motion.span>
      </motion.span>
    </Link>
  )
}
