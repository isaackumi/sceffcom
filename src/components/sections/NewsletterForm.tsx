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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1 space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === 'loading'}
          aria-label="Email for newsletter subscription"
          aria-invalid={status === 'error'}
          aria-describedby={message ? 'newsletter-message' : undefined}
          className="w-full rounded-full border border-border bg-cream px-5 py-3 text-ink placeholder:text-ink-faint transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 disabled:opacity-70"
        />
        {message && (
          <p
            id="newsletter-message"
            role="status"
            className={`text-sm font-medium ${status === 'success' ? 'text-forest' : 'text-red-600'}`}
          >
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-forest min-h-[48px] shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
