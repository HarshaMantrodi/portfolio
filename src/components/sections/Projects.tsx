'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, Layers, Zap, Star } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PROJECTS } from '@/data/portfolio'

const STATUS_COLOR: Record<string, string> = {
  Production: 'text-accent-green border-accent-green/30 bg-accent-green/10',
  Shipped: 'text-accent-blue border-accent-blue/30 bg-accent-blue/10',
  'In Progress': 'text-accent-amber border-accent-amber/30 bg-accent-amber/10',
}

interface ProjectCardProps {
  project: typeof PROJECTS[0]
  index: number
  featured?: boolean
}

function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-bg-secondary/60 border border-border rounded-2xl overflow-hidden transition-all duration-400 cursor-pointer
        ${featured ? 'lg:col-span-2' : ''}
        ${hovered ? 'border-border-accent shadow-glow-strong -translate-y-1' : 'hover:-translate-y-0.5'}
      `}
      style={{
        boxShadow: hovered ? `0 0 40px ${project.accent}20, 0 4px 30px rgba(0,0,0,0.5)` : undefined,
      }}
    >
      {/* Top gradient bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      />

      {/* Background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${project.accent}08, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className={`relative z-10 p-7 ${featured ? 'grid lg:grid-cols-2 gap-8' : ''}`}>
        {/* Header */}
        <div className={featured ? '' : 'mb-5'}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}>
                {project.number === '00' ? '✨' : project.number === '01' ? '☁️' : project.number === '02' ? '👁️' : '📊'}
              </div>
              <div>
                <div className="font-mono text-[10px] text-text-tertiary tracking-wider uppercase mb-0.5">
                  // {project.type}
                </div>
                <span className={`badge border text-[10px] ${STATUS_COLOR[project.status] || ''}`}>
                  {project.status}
                </span>
              </div>
            </div>
            {project.number === '00' && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-accent-amber/30 bg-accent-amber/10">
                <Star size={11} className="text-accent-amber fill-accent-amber" />
                <span className="font-mono text-[10px] text-accent-amber">Featured</span>
              </div>
            )}
          </div>

          <h3 className="font-display font-bold text-xl text-text-primary mb-2 leading-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm font-medium mb-3">{project.subtitle}</p>
          <p className="text-text-tertiary text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-[11px] text-text-tertiary bg-white/4 border border-white/6 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {!featured && (
            <div className="flex gap-2">
              <a href={`https://github.com/HarshaMantrodi`} target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-xs flex-1 justify-center py-2">
                <Github size={13} /> GitHub
              </a>
              <button className="btn-primary text-xs flex-1 justify-center py-2">
                <ExternalLink size={13} /> Details
              </button>
            </div>
          )}
        </div>

        {/* Featured: highlights panel */}
        {featured && (
          <div>
            <div className="bg-bg/60 border border-border rounded-xl p-5 mb-5">
              <div className="font-mono text-[10px] text-text-tertiary tracking-wider uppercase mb-4 flex items-center gap-2">
                <Layers size={11} /> Key Highlights
              </div>
              <div className="space-y-3">
                {project.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: project.accent }} />
                    <span className="text-text-secondary text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <a href="https://github.com/HarshaMantrodi" target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-xs flex-1 justify-center">
                <Github size={13} /> View on GitHub
              </a>
              <button className="btn-primary text-xs flex-1 justify-center">
                <Zap size={13} /> Live Demo <ArrowRight size={12} />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featured = PROJECTS.filter(p => p.featured)
  const others = PROJECTS.filter(p => !p.featured)

  return (
    <Section
      id="projects"
      label="03 — Projects"
      title="Things I've Shipped"
      subtitle="Production-grade systems, not just experiments."
      alt
    >
      {/* Featured projects */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} featured={p.number === '00'} />
        ))}
      </div>

      {/* Other projects */}
      <div className="grid sm:grid-cols-2 gap-6">
        {others.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + featured.length} />
        ))}
      </div>
    </Section>
  )
}
