'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-surface">
      <div className="max-w-md w-full text-center">
        <p className="text-6xl font-black text-primary-500 mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-white font-bold hover:bg-primary-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
