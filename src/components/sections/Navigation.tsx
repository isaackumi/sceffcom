'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteContent } from '@/data/content'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace('/#', '/'))
  }

  const isHomeHero = pathname === '/' && !isScrolled

  return (
    <motion.header
      aria-label="Main navigation"
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300',
        isHomeHero
          ? 'border-white/10 bg-neutral-950/35'
          : isScrolled
            ? 'border-neutral-200 bg-white/95 shadow-sm'
            : 'border-neutral-200/80 bg-white/95'
      )}
    >
      <nav className="container flex items-center justify-between gap-3 py-3 sm:py-3.5">
        <motion.div className="min-w-0 shrink" whileHover={reduceMotion ? undefined : { scale: 1.01 }}>
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <Image
              src="/images/logo/nananom.jpg"
              alt="Language Watch Foundation"
              width={40}
              height={40}
              className={cn(
                'h-9 w-9 shrink-0 rounded-md object-cover ring-2 sm:h-10 sm:w-10',
                isHomeHero ? 'ring-white/40' : 'ring-neutral-200'
              )}
            />
            <span
              className={cn(
                'truncate font-heading text-base font-semibold tracking-tight sm:text-lg',
                isHomeHero ? 'text-white drop-shadow-sm' : 'text-neutral-950'
              )}
            >
              <span className="sm:hidden">{siteContent.meta.navShort}</span>
              <span className="hidden sm:inline">{siteContent.meta.navLong}</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden items-center gap-0.5 md:flex md:flex-1 md:justify-end lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'border-b-2 px-3 py-2 text-sm font-semibold transition-colors',
                isHomeHero
                  ? isActive(link.href)
                    ? 'border-amber-400 text-white'
                    : 'border-transparent text-white/90 hover:text-white'
                  : isActive(link.href)
                    ? 'border-amber-600 text-neutral-950'
                    : 'border-transparent text-neutral-600 hover:text-neutral-950'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-amber-500 px-4 py-2.5 text-sm font-bold text-neutral-950 shadow-sm ring-1 ring-amber-700/20 transition-colors hover:bg-amber-400 lg:ml-4"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md md:hidden',
            isHomeHero
              ? 'text-white ring-1 ring-white/30 hover:bg-white/10'
              : 'text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-100'
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { height: 0 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: reduceMotion ? 1 : 0 }}
            transition={reduceMotion ? { duration: 0.15 } : { height: { type: 'spring', stiffness: 320, damping: 32 } }}
            className="overflow-hidden border-t border-neutral-200 bg-white md:hidden"
          >
            <div className="container space-y-0.5 py-3">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={reduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 0.04 * i }}>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex min-h-[48px] items-center rounded-md px-4 py-3 font-semibold',
                      isActive(link.href) ? 'bg-amber-50 text-neutral-950' : 'text-neutral-800 active:bg-neutral-100'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex min-h-[48px] items-center justify-center rounded-md bg-amber-500 px-4 py-3 font-bold text-neutral-950 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
