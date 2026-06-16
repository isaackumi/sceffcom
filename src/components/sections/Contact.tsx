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

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full border border-border bg-stone px-4 py-3.5 text-ink transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
      hasError ? 'border-red-500' : ''
    )

  return (
    <section id="contact" className="section-pad bg-stone-dark">
      <div className="container-editorial">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="mb-16 max-w-2xl"
          >
            <p className="label-gold mb-6">Contact</p>
            <h2 className="headline-section">Get in touch</h2>
            <p className="body-lead mt-6">{siteContent.contact.intro}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="border border-border bg-stone p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
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
                  className={inputClass(!!errors.name)}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
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
                  className={inputClass(!!errors.email)}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink">
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
                  className={inputClass(!!errors.subject)}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
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
                  className={inputClass(!!errors.message)}
                  placeholder="Tell us about your training needs..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold flex w-full cursor-pointer justify-center disabled:cursor-not-allowed disabled:opacity-50"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-midnight p-8 text-stone md:p-10"
          >
            <h3 className="mb-10 font-display text-2xl font-medium">Contact Information</h3>
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
                      'block border-b border-stone/10 pb-6 transition-colors',
                      info.link ? 'cursor-pointer hover:text-gold-light' : ''
                    )}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                      {info.title}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone/80">{info.value}</p>
                  </Wrapper>
                )
              })}
            </div>
            <Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="link-gold mt-8 !text-gold-light">
              View on Map
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
