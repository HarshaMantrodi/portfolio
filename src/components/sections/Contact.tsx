'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PERSONAL } from '@/data/portfolio'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass = `w-full bg-bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm text-text-primary
    placeholder:text-text-tertiary font-mono focus:outline-none focus:border-accent-purple/50
    focus:bg-bg-secondary transition-all duration-200`

  return (
    <Section id="contact" label="07 — Contact" title="Let's Build Something"
      subtitle="Open to full-time roles, collaborations, and ambitious projects." alt>
      <div ref={ref} className="grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text-secondary leading-relaxed mb-8">
            Actively seeking <span className="text-text-primary font-semibold">ML Engineering, MLOps, or DevOps</span> roles.
            Building something ambitious? In Bengaluru, remote, or anywhere — let's talk.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
              { icon: Phone, label: 'Phone / WhatsApp', value: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g, '')}` },
              { icon: MapPin, label: 'Location', value: PERSONAL.location, href: '#' },
              { icon: Github, label: 'GitHub', value: 'github.com/HarshaMantrodi', href: PERSONAL.github },
              { icon: Linkedin, label: 'LinkedIn', value: 'harsha-mantrodi-ml-do', href: PERSONAL.linkedin },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex items-center gap-4 p-4 card group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-purple-dim border border-accent-purple/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent-purple/50 transition-colors">
                  <Icon size={16} className="text-accent-purple-light" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">{label}</p>
                  <p className="text-sm text-text-primary mt-0.5">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 p-4 rounded-xl border border-accent-green/20 bg-accent-green/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
            </span>
            <div>
              <p className="text-text-primary text-sm font-semibold">Available Now</p>
              <p className="font-mono text-xs text-text-tertiary">Responding within 24 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2">Name</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your name" required className={inputClass} />
              </div>
              <div>
                <label className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2">Email</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com" required className={inputClass} />
              </div>
            </div>
            <div>
              <label className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2">Subject</label>
              <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                placeholder="ML Engineer role, collaboration, project..." required className={inputClass} />
            </div>
            <div>
              <label className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block mb-2">Message</label>
              <textarea rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about the opportunity or project..." required
                className={`${inputClass} resize-none`} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2
                ${sent
                  ? 'bg-accent-green/20 border border-accent-green/40 text-accent-green'
                  : 'btn-primary justify-center'
                }`}
            >
              {sent ? (
                <><CheckCircle size={16} /> Message Sent!</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
