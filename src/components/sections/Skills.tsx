'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import { SKILLS } from '@/data/portfolio'

const ACCENT: Record<string, string> = {
  purple: '#6366F1',
  blue:   '#3B82F6',
  cyan:   '#06B6D4',
  green:  '#10B981',
}

const CARD_BORDER: Record<string, string> = {
  purple: 'border-indigo-500/20   hover:border-indigo-400/50',
  blue:   'border-blue-500/20     hover:border-blue-400/50',
  cyan:   'border-cyan-500/20     hover:border-cyan-400/50',
  green:  'border-emerald-500/20  hover:border-emerald-400/50',
}

const TAG_STYLE: Record<string, string> = {
  purple: 'bg-indigo-500/10  border-indigo-400/25  text-indigo-300',
  blue:   'bg-blue-500/10    border-blue-400/25    text-blue-300',
  cyan:   'bg-cyan-500/10    border-cyan-400/25    text-cyan-300',
  green:  'bg-emerald-500/10 border-emerald-400/25 text-emerald-300',
}

const ICON_WRAP: Record<string, string> = {
  purple: 'bg-indigo-500/10  border-indigo-400/30',
  blue:   'bg-blue-500/10    border-blue-400/30',
  cyan:   'bg-cyan-500/10    border-cyan-400/30',
  green:  'bg-emerald-500/10 border-emerald-400/30',
}

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <Section
      id="skills"
      label="02 — Skills"
      title="Tech Stack"
      subtitle="Full competency matrix across AI/ML, Generative AI, Cloud, and DevOps."
    >
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {SKILLS.map((cat, idx) => {
          const accent = ACCENT[cat.color]
          const active = hovered === cat.id
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-2xl border p-6 transition-all duration-300
                bg-white/[0.02] cursor-default ${CARD_BORDER[cat.color]}
                ${active ? '-translate-y-1' : ''}
              `}
              style={active ? { boxShadow: `0 0 36px ${accent}1a` } : undefined}
            >
              {/* Top shimmer line */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                  opacity: active ? 0.9 : 0.2,
                }}
              />

              {/* Card header */}
              <div className="mb-5">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl mb-4 ${ICON_WRAP[cat.color]}`}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-[15px] text-white leading-snug mb-1">
                  {cat.title}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: accent + '90' }}>
                  {(cat.items as string[]).length} technologies
                </p>
              </div>

              {/* Skill pills — clean tags, NO bars, NO percentages */}
              <div className="flex flex-wrap gap-1.5">
                {(cat.items as string[]).map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center font-mono font-medium
                      text-[11.5px] leading-none tracking-[0.015em]
                      px-2.5 py-[5px] rounded-lg border
                      transition-all duration-200 select-none
                      ${TAG_STYLE[cat.color]}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
