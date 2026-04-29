'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Zap, Server, Brain } from 'lucide-react'
import { PERSONAL } from '@/data/portfolio'

const TYPEWRITER_PHRASES = [
  'production-grade MLOps pipelines.',
  'Kubernetes-native AI infrastructure.',
  'SDXL generative AI systems.',
  'scalable cloud-native applications.',
  'CI/CD automation for ML systems.',
]

const FLOATING_BADGES = [
  { icon: Brain, label: 'PyTorch', x: '8%', y: '30%', delay: 0 },
  { icon: Server, label: 'Kubernetes', x: '82%', y: '25%', delay: 0.4 },
  { icon: Zap, label: 'MLOps', x: '12%', y: '68%', delay: 0.8 },
]

function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    const cur = TYPEWRITER_PHRASES[phraseIdx]
    const delay = deleting ? 30 : 60

    const timer = setTimeout(() => {
      if (!deleting && charIdx < cur.length) {
        setDisplay(cur.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === cur.length) {
        setTimeout(() => setDeleting(true), 2200)
      } else if (deleting && charIdx > 0) {
        setDisplay(cur.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % TYPEWRITER_PHRASES.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, phraseIdx])

  return (
    <span className="text-accent-purple-light">
      {display}
      <span className="cursor-blink ml-0.5 text-accent-purple" />
    </span>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })

    const N = 70
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.005

      // Aurora waves
      for (let i = 0; i < 3; i++) {
        const g = ctx.createRadialGradient(
          canvas.width * 0.2 + i * canvas.width * 0.3,
          canvas.height * 0.3 + Math.sin(t + i) * 80,
          0,
          canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
        )
        g.addColorStop(0, `rgba(99,102,241,${0.04 - i * 0.008})`)
        g.addColorStop(0.5, `rgba(59,130,246,${0.02 - i * 0.004})`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Mouse glow
      const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250)
      mg.addColorStop(0, 'rgba(99,102,241,0.04)')
      mg.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = mg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Particles
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (d < 150) { p.x += (p.x - mouse.x) * 0.015; p.y += (p.y - mouse.y) * 0.015 }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99,102,241,0.45)'
        ctx.fill()
      })

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 130) * 0.12})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="home">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0 pointer-events-none" />

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-mesh z-0 pointer-events-none" />

      {/* Floating badges — desktop only */}
      {FLOATING_BADGES.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + badge.delay, duration: 0.5 }}
          className="absolute z-10 hidden xl:flex items-center gap-2 glass px-3 py-2 rounded-xl animate-float"
          style={{
            left: badge.x,
            top: badge.y,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + i}s`,
          }}
        >
          <badge.icon size={14} className="text-accent-purple-light" />
          <span className="font-mono text-xs text-text-secondary">{badge.label}</span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Open badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
            </span>
            <span className="font-mono text-xs text-text-secondary tracking-wider">
              OPEN TO WORK · BENGALURU / REMOTE
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-6"
        >
          <span className="block text-text-primary">{PERSONAL.name.split(' ')[0]}</span>
          <span className="block text-text-primary">{PERSONAL.name.split(' ').slice(1).join(' ')}</span>
          <span className="block gradient-text-brand mt-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {PERSONAL.title}
          </span>
        </motion.h1>

        {/* Typewriter subline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-mono text-base sm:text-lg text-text-secondary mb-8 max-w-2xl"
        >
          <span className="text-text-tertiary">$ engineer --building </span>
          <TypewriterText />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
        >
          {PERSONAL.subheadline} From model training to production pipelines, cloud infra to MLOps
          — <span className="text-text-primary font-medium">I ship end-to-end.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <button
            onClick={() => {
              const el = document.getElementById('projects')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
            }}
            className="btn-primary group"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={15} />
            GitHub
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Linkedin size={15} />
            LinkedIn
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
            }}
            className="btn-secondary"
          >
            <Mail size={15} />
            Contact
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap gap-8 pt-8 border-t border-border"
        >
          {[
            { value: '3+', label: 'Internships' },
            { value: '6+', label: 'Certifications' },
            { value: '2', label: 'Domains: ML + DevOps' },
            { value: '∞', label: 'Drive to Build' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-3xl text-accent-purple-light">{stat.value}</div>
              <div className="font-mono text-xs text-text-tertiary tracking-wider mt-0.5 uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-text-tertiary tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-10 bg-gradient-to-b from-accent-purple to-transparent"
        />
      </motion.div>
    </section>
  )
}
