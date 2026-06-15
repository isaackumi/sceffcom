'use client'

import { siteContent } from '@/data/content'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, AlertCircle, Globe } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact({ hideHeader }: { hideHeader?: boolean } = {}) {
  const reduceMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      next.name = 'Name must be at least 2 characters'
    }
    if (!formData.email.trim()) {
      next.email = 'Email is required'
    } else if (!EMAIL_REGEX.test(formData.email)) {
      next.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      next.subject = 'Subject must be at least 2 characters'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('idle')
    setFormError(null)
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (!res.ok) {
        setFormStatus('error')
        setFormError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch {
      setFormStatus('error')
      setFormError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(siteContent.contact.mapQuery)}`
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: siteContent.contact.emails.join(' · '),
      link: `mailto:${siteContent.contact.email}`,
    },
    { icon: Phone, title: 'Phone', value: siteContent.contact.mobile.join(' / '), link: `tel:${siteContent.contact.mobile[0].replace(/\s/g, '')}` },
    {
      icon: Globe,
      title: 'Website',
      value: siteContent.contact.websites.join(' · '),
      link: `https://${siteContent.contact.website}`,
    },
    { icon: MapPin, title: 'Location', value: siteContent.contact.location, link: mapUrl },
    ...(siteContent.contact.address
      ? [{ icon: MapPin, title: 'Address', value: siteContent.contact.address, link: null as string | null }]
      : []),
    { icon: Phone, title: 'C.E.O. Contact', value: siteContent.contact.ceoContact, link: `tel:${siteContent.contact.ceoContact.replace(/\s/g, '')}` },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-50 py-24 font-sans text-neutral-900 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(251,191,36,0.06)_0%,#fafafa_55%,transparent_100%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={
              reduceMotion
                ? { duration: 0.35 }
                : { type: 'spring', stiffness: 380, damping: 32 }
            }
            className="mb-16"
          >
            <p className="section-eyebrow mb-3">Contact</p>
            <h2 className="mb-6 max-w-3xl font-heading text-3xl font-semibold text-neutral-950 text-balance sm:text-4xl lg:text-5xl">
              Get in touch
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-700">
              {siteContent.contact.intro}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={
              reduceMotion
                ? { duration: 0.4, delay: 0.05 }
                : { type: 'spring', stiffness: 360, damping: 32, delay: 0.06 }
            }
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="rounded-md border border-neutral-200 bg-white p-8 shadow-sm md:p-10 text-neutral-900"
          >
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              {formStatus === 'success' && (
                <div
                  role="status"
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              {formStatus === 'error' && formError && (
                <div
                  role="alert"
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">{formError}</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                  className={`w-full rounded-sm border bg-white px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-500/25 ${
                    errors.name ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }))
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                  className={`w-full rounded-sm border bg-white px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-500/25 ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }))
                  }}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  required
                  className={`w-full rounded-sm border bg-white px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-500/25 ${
                    errors.subject ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e)
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }))
                  }}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                  rows={4}
                  className={`w-full rounded-sm border bg-white px-4 py-3 transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-500/25 ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-amber-700/25 bg-amber-500 px-6 py-4 font-bold text-neutral-950 shadow-sm transition-all hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={
              reduceMotion
                ? { duration: 0.4, delay: 0.1 }
                : { type: 'spring', stiffness: 360, damping: 32, delay: 0.12 }
            }
            className="rounded-md border border-white/10 bg-neutral-900 p-8 font-sans text-white shadow-lg md:p-10"
          >
            <h3 className="text-xl font-bold text-white mb-8 font-heading tracking-tight">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Wrapper = info.link ? 'a' : 'div'
                const wrapperProps = info.link
                  ? { href: info.link, target: '_blank' as const, rel: 'noopener noreferrer' }
                  : {}
                return (
                  <Wrapper
                    key={info.title}
                    {...wrapperProps}
                    className={cn(
                      'flex items-start gap-4 group p-4 rounded-xl transition-colors duration-200',
                      info.link ? 'hover:bg-white/5 cursor-pointer' : 'hover:bg-white/[0.02]'
                    )}
                  >
                    <div className="flex-shrink-0 rounded-sm border border-white/10 bg-white/10 p-3 transition-colors group-hover:bg-primary-500/20">
                      <info.icon className="h-5 w-5 text-primary-400" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-0.5">{info.title}</h4>
                      <p className="text-[15px] font-medium leading-relaxed text-stone-200">{info.value}</p>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
            <div className="mt-8 border-t border-white/15 pt-8">
              <Link
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 font-semibold text-primary-400 transition-colors hover:text-primary-300"
              >
                View on Map
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
