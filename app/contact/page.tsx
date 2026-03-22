'use client'

import { useState, useEffect, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }
    setStatus({ type: 'loading', message: 'Sending your message...' })
    // Simulate send (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus({ type: 'success', message: "Message sent! I'll get back to you within 24 hours." })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const contactItems = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+356 9999 1140',
      href: 'tel:+35699991140',
      sublabel: 'Malta'
    },
    {
      icon: '📞',
      label: 'Phone (Nigeria)',
      value: '+234 703 479 9616',
      href: 'tel:+2347034799616',
      sublabel: 'Nigeria'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'geraldokeke68@gmail.com',
      href: 'mailto:geraldokeke68@gmail.com',
      sublabel: 'Primary contact'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+356 9999 1140',
      href: 'https://wa.me/35699991140',
      sublabel: 'Quick response'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Malta',
      href: null,
      sublabel: 'Available remotely worldwide'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Gerald Okeke',
      href: 'https://www.linkedin.com/in/gerald-okeke-97a141291',
      sublabel: 'Professional network'
    }
  ]

  const subjects = [
    'Mobile App Development',
    'Web Development',
    'Enterprise ERP System',
    'Backend Engineering',
    'Cloud & DevOps',
    'UI/UX Design',
    'Technical Consulting',
    'Full-Time Opportunity',
    'Other',
  ]

  return (
    <div className="bg-neu-bg pt-16">

      {/* ================== HERO ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Get In Touch</span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-neu-text mt-4 mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="font-dm text-neu-muted text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind, a technical challenge to solve, or just want to explore
            working together? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ================== MAIN CONTENT ================== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ---- Contact Info ---- */}
            <div className="lg:col-span-2 space-y-4 animate-on-scroll">
              <div className="mb-8">
                <h2 className="font-syne font-bold text-2xl text-neu-text mb-2">
                  Reach Me Directly
                </h2>
                <p className="font-dm text-neu-muted text-sm leading-relaxed">
                  Based in Malta. Available for remote work worldwide. Usually responsive within a few hours.
                </p>
              </div>

              {contactItems.map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-dm text-xs text-neu-muted uppercase tracking-wide mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-dm text-sm font-medium text-neu-text hover:text-neu-accent transition-colors duration-200 truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-dm text-sm font-medium text-neu-text truncate">{item.value}</p>
                    )}
                    <p className="font-dm text-xs text-neu-muted mt-0.5">{item.sublabel}</p>
                  </div>
                </div>
              ))}

              {/* Availability notice */}
              <div
                className="p-5 rounded-2xl mt-6"
                style={{ boxShadow: 'inset 4px 4px 8px #b8bec8, inset -4px -4px 8px #ffffff' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
                  />
                  <span className="font-syne font-semibold text-sm text-neu-text">Currently Available</span>
                </div>
                <p className="font-dm text-xs text-neu-muted leading-relaxed">
                  Open to freelance projects, long-term contracts, and senior engineering roles.
                  Typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* ---- Contact Form ---- */}
            <div className="lg:col-span-3 animate-on-scroll">
              <div
                className="p-8 rounded-3xl"
                style={{ boxShadow: '10px 10px 20px #b8bec8, -10px -10px 20px #ffffff' }}
              >
                <h2 className="font-syne font-bold text-2xl text-neu-text mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-dm text-xs text-neu-muted uppercase tracking-wide mb-2">
                        Your Name <span className="text-neu-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="neu-input w-full px-4 py-3 font-dm text-sm placeholder-neu-muted focus:outline-none"
                        style={{ background: '#e8eaf0' }}
                      />
                    </div>
                    <div>
                      <label className="block font-dm text-xs text-neu-muted uppercase tracking-wide mb-2">
                        Email Address <span className="text-neu-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="neu-input w-full px-4 py-3 font-dm text-sm placeholder-neu-muted focus:outline-none"
                        style={{ background: '#e8eaf0' }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-dm text-xs text-neu-muted uppercase tracking-wide mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="neu-input w-full px-4 py-3 font-dm text-sm focus:outline-none appearance-none cursor-pointer"
                      style={{ background: '#e8eaf0' }}
                    >
                      <option value="">Select a topic...</option>
                      {subjects.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-dm text-xs text-neu-muted uppercase tracking-wide mb-2">
                      Message <span className="text-neu-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and what you need..."
                      required
                      rows={6}
                      className="neu-input w-full px-4 py-3 font-dm text-sm placeholder-neu-muted focus:outline-none resize-none"
                      style={{ background: '#e8eaf0' }}
                    />
                  </div>

                  {/* Status */}
                  {status.type !== 'idle' && (
                    <div
                      className="p-4 rounded-xl font-dm text-sm"
                      style={{
                        boxShadow: 'inset 3px 3px 6px #b8bec8, inset -3px -3px 6px #ffffff',
                        color: status.type === 'success' ? '#16a34a' : status.type === 'error' ? '#dc2626' : '#e67e22'
                      }}
                    >
                      {status.type === 'loading' && (
                        <span className="flex items-center gap-2">
                          <span
                            className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                            style={{ borderColor: '#e67e22', borderTopColor: 'transparent' }}
                          />
                          {status.message}
                        </span>
                      )}
                      {status.type !== 'loading' && status.message}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full py-4 font-syne font-bold text-base text-white rounded-2xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                      boxShadow: '6px 6px 12px rgba(230,126,34,0.35), -3px -3px 8px #ffffff'
                    }}
                    onMouseEnter={e => {
                      if (status.type !== 'loading') {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '8px 8px 16px rgba(230,126,34,0.45), -3px -3px 10px #ffffff'
                        ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                      }
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '6px 6px 12px rgba(230,126,34,0.35), -3px -3px 8px #ffffff'
                      ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                    }}
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================== ALTERNATE CONTACT ================== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="font-syne font-bold text-2xl text-neu-text">
              Prefer a quick chat?
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            {[
              { label: 'WhatsApp', href: 'https://wa.me/35699991140', icon: '💬' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gerald-okeke-97a141291', icon: '💼' },
              { label: 'Email', href: 'mailto:geraldokeke68@gmail.com', icon: '✉️' },
              { label: 'Instagram', href: 'https://www.instagram.com/gerald_devs/', icon: '📷' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-dm font-medium text-sm text-neu-text transition-all duration-200"
                style={{ boxShadow: '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '9px 9px 18px #b8bec8, -9px -9px 18px #ffffff'
                  ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff'
                  ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
