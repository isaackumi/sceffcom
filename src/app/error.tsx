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
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone px-4 py-20">
      <div className="w-full max-w-md text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-gold" />
        <h1 className="mt-6 font-display text-3xl text-midnight">Something went wrong</h1>
        <p className="mt-4 text-slate">Please try again.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={reset} className="btn-gold justify-center">
            <RefreshCw className="h-4 w-4" /> Try again
          </button>
          <Link href="/" className="btn-outline justify-center">Go to Home</Link>
        </div>
      </div>
    </div>
  )
}
