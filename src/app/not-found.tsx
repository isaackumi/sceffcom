'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-4 py-20">
      <div className="w-full max-w-md text-center">
        <p className="font-display text-7xl font-light text-forest/30">404</p>
        <h1 className="mt-4 font-display text-2xl font-medium text-ink sm:text-3xl">Page not found</h1>
        <p className="mt-4 text-ink-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary justify-center">
            <Home className="h-4 w-4" />
            Go to Home
          </Link>
          <button type="button" onClick={() => router.back()} className="btn-secondary justify-center">
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
