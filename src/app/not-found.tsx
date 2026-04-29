// Server component — no 'use client' needed, no browser APIs used
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080A0F] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-display font-bold text-8xl text-[#6366F1]/20 mb-4 select-none">
          404
        </div>
        <h1 className="font-display font-bold text-2xl text-[#F0F6FC] mb-3">
          Page not found
        </h1>
        <p className="text-[#8B949E] text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#6366F1] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#818CF8] transition-colors"
          >
            <Home size={15} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
