import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080A0F] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-[#6366F1]/20 mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#6366F1] text-white px-5 py-3 rounded-lg hover:bg-[#818CF8] transition"
        >
          <Home size={18} />
          Back Home
        </Link>
      </div>
    </main>
  )
}
