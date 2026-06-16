'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-4 py-20">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10">
          <AlertCircle className="h-8 w-8 text-terracotta" />
        </div>
        <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl">Something went wrong</h1>
        <p className="mt-4 text-ink-muted">We encountered an unexpected error. Please try again.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={reset} className="btn-primary justify-center">
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
          <Link href="/" className="btn-secondary justify-center">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
