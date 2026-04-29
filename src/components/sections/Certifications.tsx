'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import Section from '@/components/ui/Section'
import { CERTIFICATIONS } from '@/data/portfolio'

/* ─────────────────────────────────────────────
   Sub-component so useRef / useInView are
   called at component top-level, not in .map()
   ───────────────────────────────────────────── */
function CertCard({
  cert,
  index,
}: {
  cert: (typeof CERTIFICATIONS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
      className="group card p-5 flex gap-4 items-start relative overflow-hidden"
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 0%, ${cert.accent}08, transparent)`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 relative z-10"
        style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}30` }}
      >
        {cert.icon}
      </div>

      <div className="relative z-10 min-w-0">
        <h3 className="font-semibold text-sm text-text-primary mb-0.5 leading-snug group-hover:text-white transition-colors">
          {cert.title}
        </h3>
        <p className="font-mono text-[11px] text-text-tertiary mb-2">{cert.issuer}</p>
        <div className="flex items-center gap-1.5">
          <BadgeCheck size={12} className="text-emerald-400 flex-shrink-0" />
          <span className="font-mono text-[10px] text-text-tertiary">{cert.platform}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label="05 — Certifications"
      title="Credentials"
      subtitle="Verified certifications from Stanford, Google Cloud, AWS, and more."
      alt
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </Section>
  )
}
