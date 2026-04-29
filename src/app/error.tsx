'use client'
// Required by Next.js 14 App Router.
// Must be 'use client' — receives Error object as prop.
import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

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
    <main className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={28} className="text-red-400" />
        </div>
        <h1 className="font-display font-bold text-2xl text-text-primary mb-3">
          Something went wrong
        </h1>
        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 btn-primary"
        >
          <RefreshCw size={15} />
          Try again
        </button>
      </div>
    </main>
  )
}
