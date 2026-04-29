import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSONAL } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent-purple-dim border border-accent-purple/30 flex items-center justify-center">
            <span className="font-display font-bold text-xs text-accent-purple">H</span>
          </div>
          <span className="font-mono text-xs text-text-tertiary">
            © 2026 Harsha S Mantrodi · Crafted with intent
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { icon: Github, href: PERSONAL.github },
            { icon: Linkedin, href: PERSONAL.linkedin },
            { icon: Mail, href: `mailto:${PERSONAL.email}` },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-tertiary hover:text-accent-purple-light hover:bg-accent-purple-dim transition-all">
              <Icon size={15} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
          </span>
          <span className="font-mono text-xs text-text-tertiary">Open to Work · Available Now</span>
        </div>
      </div>
    </footer>
  )
}
