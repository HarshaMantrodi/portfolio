'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/ui/Section'
import { EXPERIENCE } from '@/data/portfolio'

export default function Experience() {
  const ref = useRef(null)

  return (
    <Section id="experience" label="04 — Experience" title="Where I've Built Things"
      subtitle="Real environments, real systems, real impact.">
      <div ref={ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-transparent hidden sm:block" />

        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => {
            const itemRef = useRef(null)
            const inView = useInView(itemRef, { once: true, margin: '-60px' })
            return (
              <motion.div
                key={exp.id}
                ref={itemRef}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="relative sm:pl-16 pb-12 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full items-center justify-center hidden sm:flex"
                  style={{ background: `${exp.color}15`, border: `2px solid ${exp.color}` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: exp.color }} />
                </div>

                <div className="card p-6 group-hover:border-border-accent transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
                    animate={{ opacity: 0.4 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-lg text-text-primary">{exp.role}</h3>
                        {exp.current && (
                          <span className="badge border text-[10px] text-accent-green border-accent-green/30 bg-accent-green/10">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-mono text-xs text-text-secondary">{exp.period}</p>
                      <span className="badge border text-[10px] border-border text-text-tertiary mt-1">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-text-tertiary">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: exp.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="font-mono text-[11px] bg-white/4 border border-white/6 text-text-tertiary px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
