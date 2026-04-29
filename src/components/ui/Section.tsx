'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  label: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  alt?: boolean
}

export default function Section({ id, label, title, subtitle, children, className, alt }: SectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'py-24 sm:py-32 relative z-10',
        alt && 'bg-bg-secondary/40',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent-purple tracking-[0.18em] uppercase">{label}</span>
            <div className="flex-1 max-w-[48px] h-px bg-accent-purple/40" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  )
}
