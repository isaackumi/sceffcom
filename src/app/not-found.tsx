'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone px-4 py-20">
      <div className="w-full max-w-md text-center">
        <p className="font-display text-[8rem] font-light leading-none text-gold/20">404</p>
        <h1 className="mt-4 font-display text-3xl text-midnight">Page not found</h1>
        <p className="mt-4 text-slate">We couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-gold justify-center">
            <Home className="h-4 w-4" /> Home
          </Link>
          <button type="button" onClick={() => router.back()} className="btn-outline justify-center">
            <ArrowLeft className="h-4 w-4" /> Go back
          </button>
        </div>
      </div>
    </div>
  )
}
