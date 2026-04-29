import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsha S Mantrodi — AI/ML & Cloud Engineer',
  description:
    'AI/ML & DevOps Engineer specializing in Generative AI, Kubernetes, MLOps, and production-ready intelligent systems. Building scalable AI infrastructure for the real world.',
  keywords: [
    'AI Engineer', 'ML Engineer', 'MLOps', 'DevOps', 'Generative AI',
    'Kubernetes', 'Docker', 'PyTorch', 'SDXL', 'Cloud Infrastructure',
    'Harsha Mantrodi', 'Portfolio',
  ],
  authors: [{ name: 'Harsha S Mantrodi', url: 'https://github.com/HarshaMantrodi' }],
  creator: 'Harsha S Mantrodi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harsha-mantrodi.vercel.app',
    title: 'Harsha S Mantrodi — AI/ML & Cloud Engineer',
    description: 'AI/ML & DevOps Engineer. Building scalable intelligent systems.',
    siteName: 'Harsha S Mantrodi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsha S Mantrodi — AI/ML & Cloud Engineer',
    description: 'AI/ML & DevOps Engineer. Building scalable intelligent systems.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#080A0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text-primary antialiased overflow-x-hidden">
        <div className="scan-line" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
