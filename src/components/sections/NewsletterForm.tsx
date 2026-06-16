'use client'

import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !EMAIL_REGEX.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setMessage('')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setMessage('Subscribed successfully.')
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
          className="w-full border border-stone/20 bg-midnight-light px-4 py-3 text-stone placeholder:text-stone/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-70"
        />
        {message && (
          <p
            role="status"
            className={`text-sm ${status === 'success' ? 'text-gold-light' : 'text-red-400'}`}
          >
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold shrink-0 disabled:opacity-70"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
