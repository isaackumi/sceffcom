'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'
import { siteContent } from '@/data/content'
import Link from 'next/link'

const SLIDE_INTERVAL = 6000
const easeOut = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useRef(false)
  const reduceMotion = useReducedMotion()
  const slides = siteContent.hero.slides ?? [{ image: siteContent.hero.backgroundImage, alt: siteContent.meta.brandName }]
  const titleMain = siteContent.meta.brandName

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current || reduceMotion) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [slides.length, isPaused, reduceMotion])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero__21st"
      data-slot="hero"
      aria-label="Welcome"
      className="relative flex min-h-screen items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding background images */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.02 }}
            transition={{ duration: reduceMotion ? 0.35 : 0.9, ease: easeOut }}
            className="absolute inset-0"
            aria-hidden
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Strong overlay so headline stays readable on any slide */}
        <div className="absolute inset-0 bg-neutral-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 via-transparent to-neutral-950/25" />
      </div>

      {/* Slide controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/30 bg-neutral-950/40 text-white backdrop-blur-sm transition-colors hover:bg-neutral-950/65 md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/30 bg-neutral-950/40 text-white backdrop-blur-sm transition-colors hover:bg-neutral-950/65 md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-10">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-10 bg-amber-400' : 'w-2 bg-white/45 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            {titleMain}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-100 drop-shadow-md sm:text-xl">
            {siteContent.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-7 py-3.5 text-base font-bold text-neutral-950 shadow-lg ring-1 ring-amber-600/40 transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              {siteContent.hero.ctaText}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/90 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <MessageSquare className="h-5 w-5" aria-hidden />
              Contact us
            </Link>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-8 right-4 z-10 hidden cursor-pointer flex-col items-center gap-1 rounded-md border border-white/25 bg-neutral-950/30 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-neutral-950/50 hover:text-white sm:flex lg:right-8"
      >
        Scroll
        <span className="block h-4 w-px bg-white/60" aria-hidden />
      </button>
    </section>
  )
}
