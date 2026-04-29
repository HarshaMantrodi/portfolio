'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PERSONAL } from '@/data/portfolio'

const TOP_REPOS = [
  { name: 'BrandEngine-AI', desc: 'SDXL LoRA fine-tuning for startup logo generation', stars: 12, tech: 'PyTorch' },
  { name: 'cloud-sentiment-api', desc: 'Cloud-native sentiment analysis with Kubernetes', stars: 8, tech: 'FastAPI' },
  { name: 'gesture-recognition', desc: 'Real-time hand gesture recognition with LSTM', stars: 6, tech: 'TensorFlow' },
  { name: 'ml-forecasting', desc: 'ARIMA + ML price prediction pipeline', stars: 5, tech: 'Python' },
]

export default function GitHubSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const u = PERSONAL.githubUsername

  return (
    <Section id="github" label="06 — GitHub" title="Open Source Activity"
      subtitle="Code, contributions, and engineering footprint.">
      <div ref={ref} className="space-y-8">
        {/* Stats cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { label: 'GitHub Stats', src: `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=transparent&title_color=818CF8&icon_color=6366F1&text_color=8B949E&bg_color=0D111700&border_color=ffffff15&border_radius=12` },
            { label: 'Top Languages', src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=transparent&title_color=818CF8&text_color=8B949E&bg_color=0D111700&border_color=ffffff15&border_radius=12&langs_count=6` },
            { label: 'Streak Stats', src: `https://github-readme-streak-stats.herokuapp.com?user=${u}&theme=transparent&ring=6366F1&fire=818CF8&currStreakLabel=818CF8&sideLabels=8B949E&dates=8B949E&border=ffffff15&border_radius=12` },
          ].map(({ label, src }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card p-4 overflow-hidden"
            >
              <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-3">{label}</p>
              <div className="relative w-full h-32">
                <Image src={src} alt={label} fill className="object-contain" unoptimized />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top repos */}
        <div>
          <h3 className="font-display font-bold text-lg text-text-primary mb-5">Top Repositories</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {TOP_REPOS.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={`${PERSONAL.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="card p-4 group flex items-start gap-3"
              >
                <Github size={16} className="text-text-tertiary mt-0.5 flex-shrink-0 group-hover:text-accent-purple-light transition-colors" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-mono text-sm text-accent-purple-light group-hover:text-accent-purple font-medium truncate">
                      {repo.name}
                    </h4>
                    <div className="flex items-center gap-1 text-text-tertiary flex-shrink-0">
                      <span className="text-accent-amber">★</span>
                      <span className="font-mono text-xs">{repo.stars}</span>
                    </div>
                  </div>
                  <p className="text-text-tertiary text-xs mt-0.5 leading-relaxed truncate">{repo.desc}</p>
                  <span className="font-mono text-[10px] text-accent-blue mt-1.5 block">{repo.tech}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
            <Github size={15} />
            View Full GitHub Profile
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
