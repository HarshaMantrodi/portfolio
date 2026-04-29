'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PERSONAL } from '@/data/portfolio'

const ROLE_TAGS = [
  { label: 'AI/ML Engineer', color: 'purple' },
  { label: 'MLOps', color: 'blue' },
  { label: 'Cloud & DevOps', color: 'green' },
  { label: 'Generative AI', color: 'amber' },
  { label: 'Computer Vision', color: 'cyan' },
  { label: 'NLP Systems', color: 'purple' },
]

const COLOR_MAP: Record<string, string> = {
  purple: 'border-accent-purple/30 text-accent-purple-light bg-accent-purple-dim',
  blue: 'border-accent-blue/30 text-accent-blue bg-accent-blue/10',
  green: 'border-accent-green/30 text-accent-green bg-accent-green/10',
  amber: 'border-accent-amber/30 text-accent-amber bg-accent-amber/10',
  cyan: 'border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10',
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Section
      id="about"
      label="01 — About"
      title="Who I Am"
      subtitle="Engineering-focused. Production-grade. Always shipping."
      alt
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {ROLE_TAGS.map(tag => (
              <span key={tag.label}
                className={`badge border ${COLOR_MAP[tag.color]}`}>
                {tag.label}
              </span>
            ))}
          </motion.div>

          {[
            `I'm <strong>Harsha S Mantrodi</strong>, an AI/ML & Cloud Engineer based in Bengaluru — operating at the intersection of machine learning systems and production cloud infrastructure.`,
            `Currently working as a <strong>DevOps Engineer Trainee at MATRIQZ AI</strong>, I wire together CI/CD pipelines, containerized ML deployments, and AWS cloud infra to make intelligent systems <em>actually work in production</em>.`,
            `My stack spans <strong>time-series forecasting, generative AI (SDXL/LoRA), NLP pipelines, computer vision</strong>, and cloud-native DevOps. I don't just train models — I architect production systems around them.`,
            `I think like a founder: every model has a customer, every pipeline has an SLA, every deploy needs to be bulletproof. That's the engineering mindset I bring to every role.`,
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className="text-text-secondary text-base leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: para.replace(/<strong>/g, '<strong class="text-text-primary font-semibold">').replace(/<em>/g, '<em class="text-accent-purple-light not-italic">') }}
            />
          ))}

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => {
              const el = document.getElementById('experience')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 text-indigo-300 font-medium text-sm hover:gap-3 transition-all group mt-2 cursor-pointer"
          >
            View Experience
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right — contact card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="card p-6 mb-6 relative overflow-hidden group">
            {/* Gradient shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-3xl mb-6 shadow-glow">
                👨‍💻
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1">Harsha S Mantrodi</h3>
              <p className="text-accent-purple-light font-mono text-xs tracking-wider uppercase mb-6">
                AI/ML & Cloud Engineer
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                  { icon: Phone, label: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g, '')}` },
                  { icon: MapPin, label: PERSONAL.location, href: '#' },
                  { icon: Github, label: 'github.com/HarshaMantrodi', href: PERSONAL.github },
                  { icon: Linkedin, label: 'harsha-mantrodi-ml-do', href: PERSONAL.linkedin },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 group/link">
                    <div className="w-8 h-8 rounded-lg bg-white/4 border border-border flex items-center justify-center flex-shrink-0 group-hover/link:border-accent-purple/40 transition-colors">
                      <Icon size={13} className="text-text-tertiary group-hover/link:text-accent-purple-light transition-colors" />
                    </div>
                    <span className="font-mono text-xs text-text-secondary group-hover/link:text-text-primary transition-colors truncate">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Status card */}
          <div className="card p-4 flex items-center gap-3">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
            </span>
            <div>
              <p className="text-text-primary text-sm font-semibold">Available for Opportunities</p>
              <p className="text-text-tertiary font-mono text-xs">ML / MLOps / DevOps — Full-time or Freelance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
