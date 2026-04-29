'use client'

import { useEffect } from 'react'

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
  <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-400 mb-6">
        An unexpected error occurred.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-white text-black rounded-lg"
      >
        Try Again
      </button>
    </div>
  </main>
)
}
