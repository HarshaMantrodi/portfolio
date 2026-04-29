'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ExternalLink, Github } from 'lucide-react'
import { PERSONAL } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About',          href: 'about' },
  { label: 'Skills',         href: 'skills' },
  { label: 'Projects',       href: 'projects' },
  { label: 'Experience',     href: 'experience' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'GitHub',         href: 'github' },
  { label: 'Contact',        href: 'contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [active,     setActive]     = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme,      setTheme]      = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = (localStorage.getItem('hsm-theme') as 'dark' | 'light') || 'dark'
    setTheme(saved)
    document.documentElement.classList.toggle('light-mode', saved === 'light')
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('hsm-theme', next)
    document.documentElement.classList.toggle('light-mode', next === 'light')
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let cur = ''
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.href)
        if (el && window.scrollY >= el.offsetTop - 120) cur = link.href
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goto = useCallback((id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <style>{`
        html.light-mode body{background:#F1F5F9!important;color:#0F172A!important}
        html.light-mode .text-text-primary{color:#0F172A!important}
        html.light-mode .text-text-secondary{color:#334155!important}
        html.light-mode .text-text-tertiary{color:#64748B!important}
        html.light-mode .text-white{color:#0F172A!important}
        html.light-mode .bg-bg,.bg-bg-secondary{background:#F1F5F9!important}
        html.light-mode .bg-bg\/85{background:rgba(241,245,249,0.92)!important}
        html.light-mode .card{background:rgba(0,0,0,0.04)!important;border-color:rgba(0,0,0,0.09)!important}
        html.light-mode .card:hover{background:rgba(0,0,0,0.06)!important;border-color:rgba(99,102,241,0.3)!important}
        html.light-mode .glass{background:rgba(255,255,255,0.75)!important}
        html.light-mode .btn-secondary{background:rgba(0,0,0,0.06)!important;border-color:rgba(0,0,0,0.12)!important;color:#0F172A!important}
        html.light-mode .btn-secondary:hover{background:rgba(0,0,0,0.1)!important}
        html.light-mode .bg-white\\/\\[0\\.02\\]{background:rgba(0,0,0,0.03)!important}
        html.light-mode .bg-bg-secondary\\/60{background:rgba(226,232,240,0.6)!important}
        html.light-mode .bg-bg-secondary\\/50{background:rgba(226,232,240,0.5)!important}
        html.light-mode canvas{opacity:0.07!important}
        html.light-mode .scan-line{opacity:0.07!important}
        html.light-mode .glow-orb{opacity:0.35!important}
        html.light-mode .text-indigo-300{color:#4338ca!important}
        html.light-mode .text-blue-300{color:#1d4ed8!important}
        html.light-mode .text-cyan-300{color:#0e7490!important}
        html.light-mode .text-emerald-300{color:#047857!important}
        html.light-mode .bg-indigo-500\\/10{background:rgba(99,102,241,0.1)!important}
        html.light-mode .bg-blue-500\\/10{background:rgba(59,130,246,0.1)!important}
        html.light-mode .bg-cyan-500\\/10{background:rgba(6,182,212,0.1)!important}
        html.light-mode .bg-emerald-500\\/10{background:rgba(16,185,129,0.1)!important}
        html.light-mode .border-indigo-400\\/25{border-color:rgba(99,102,241,0.35)!important}
        html.light-mode .border-blue-400\\/25{border-color:rgba(59,130,246,0.35)!important}
        html.light-mode .border-cyan-400\\/25{border-color:rgba(6,182,212,0.35)!important}
        html.light-mode .border-emerald-400\\/25{border-color:rgba(16,185,129,0.35)!important}
        html.light-mode .border-border{border-color:rgba(0,0,0,0.09)!important}
        html.light-mode .bg-bg-secondary\\/40{background:rgba(226,232,240,0.4)!important}
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/85 backdrop-blur-xl border-b border-border/80'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <span className="font-display font-bold text-sm text-indigo-400">H</span>
            </div>
            <span className="font-display font-bold text-sm text-text-primary hidden sm:block">
              Harsha<span className="text-indigo-400">.</span>
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => goto(link.href)}
                  className={cn(
                    'relative px-3 py-1.5 rounded-md font-mono text-[11px] tracking-wider uppercase transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'text-indigo-300'
                      : 'text-text-tertiary hover:text-text-secondary'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md bg-indigo-500/10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[11px] px-3 py-1.5 flex items-center gap-1.5"
            >
              <Github size={13} />
              GitHub
              <ExternalLink size={10} className="opacity-40" />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="btn-secondary text-[11px] px-3 py-1.5 flex items-center gap-1.5 min-w-[80px] justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span key="to-light"
                    initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Sun size={13} className="text-amber-400" /> Light
                  </motion.span>
                ) : (
                  <motion.span key="to-dark"
                    initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }} transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Moon size={13} className="text-indigo-400" /> Dark
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <button onClick={toggleTheme} className="p-2 text-text-secondary hover:text-text-primary" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-400" />}
            </button>
            <button onClick={() => setMobileOpen(v => !v)} className="p-2 text-text-secondary hover:text-text-primary" aria-label="Menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-bg-secondary/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => goto(link.href)}
                    className={cn(
                      'text-left px-3 py-2.5 rounded-lg font-mono text-[11px] tracking-[0.15em] uppercase transition-all cursor-pointer',
                      active === link.href
                        ? 'bg-indigo-500/10 text-indigo-300'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <a
                  href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary text-[11px] mt-3 flex items-center justify-center gap-2"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
