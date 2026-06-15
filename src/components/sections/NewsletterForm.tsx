'use client'

import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')
    try {
      // TODO: Wire to your newsletter API (e.g. Supabase, Mailchimp, Resend)
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setMessage('Thank you! You have been subscribed.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === 'loading'}
          aria-label="Email for newsletter subscription"
          aria-invalid={status === 'error'}
          aria-describedby={message ? 'newsletter-message' : undefined}
          className="w-full rounded-sm border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white placeholder:text-stone-400 transition-colors focus:border-primary-400/60 focus:outline-none focus:ring-2 focus:ring-primary-500/40 disabled:opacity-70"
        />
        {message && (
          <p
            id="newsletter-message"
            role="status"
            className={`text-sm font-medium ${status === 'success' ? 'text-primary-300' : 'text-red-300'}`}
          >
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="min-h-[52px] cursor-pointer rounded-md border border-amber-800/30 bg-amber-500 px-8 py-4 font-bold text-neutral-950 shadow-sm transition-all hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
