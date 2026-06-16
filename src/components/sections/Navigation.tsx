'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteContent } from '@/data/content'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  const active = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header aria-label="Main navigation">
      <nav className="nav-floating">
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <Link href="/" className="group flex min-w-0 items-baseline gap-3">
            <span className="font-display text-xl font-medium tracking-tight text-midnight sm:text-2xl">
              SCEFFCOM
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-faint sm:inline">
              Consult
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  active(l.href) ? 'text-midnight' : 'text-slate hover:text-midnight'
                )}
              >
                {l.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold !px-5 !py-2.5 !text-xs">
              Enquire
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center text-midnight md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <div className="space-y-1 px-5 py-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      'flex min-h-[48px] items-center text-base font-medium',
                      active(l.href) ? 'text-midnight' : 'text-slate'
                    )}
                  >
                    {l.name}
                  </Link>
                ))}
                <Link href="/contact" className="btn-gold mt-3 flex w-full justify-center">
                  Enquire
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
