'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const skills = [
  { category: 'Mobile Development', items: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'React Native', 'Platform Channels'], icon: '📱', level: 95 },
  { category: 'Backend & Systems', items: ['Java Spring Boot', 'Python Django', 'Node.js', 'Next.js', 'C/C++', 'PHP', '.NET'], icon: '⚙️', level: 92 },
  { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'Firebase', 'CI/CD', 'Fastlane', 'Cloudflare', 'VPS', 'Terraform', 'GitHub Actions'], icon: '☁️', level: 88 },
  { category: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'], icon: '🎨', level: 90 },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firestore'], icon: '🗄️', level: 97 },
  { category: 'Architecture', items: ['Microservices', 'Distributed Systems', 'Web3', 'ERP Systems', 'GraphQL'], icon: '🏗️', level: 85 },
]

const experiences = [
  {
    role: 'Senior Developer / Team Lead',
    company: 'BlueDucks Limited',
    period: 'April 2025 — Present',
    description: 'Leading development of enterprise ERP systems, mobile solutions, and web platforms. Transitioning legacy architectures to modern Flutter-based systems with full SDLC oversight.',
    tags: ['Flutter', 'Microservices', 'Xcode Instruments', 'Platform Channels']
  },
  {
    role: 'Freelance Software Engineer',
    company: 'Self-Employed',
    period: 'January 2020 — Present',
    description: 'Built Swift Run (1,000+ active users, 99.9% uptime), Vatican Projects ERP, and multiple fintech/mobile applications. Deployed on AWS with Docker CI/CD pipelines.',
    tags: ['Flutter', 'Django', 'AWS', 'Paystack', 'Firebase']
  },
  {
    role: 'Faculty & Tutor',
    company: 'Aptech Education',
    period: 'December 2023 — September 2024',
    description: 'Mentored junior engineers on Android/iOS development, Swift, Flutter, and machine learning integration. Taught best practices for performance profiling with Xcode Instruments.',
    tags: ['Swift', 'Android', 'Flutter', 'Machine Learning']
  },
  {
    role: 'Tutor / Teacher',
    company: 'Annfab Academy',
    period: 'January 2017 — January 2019',
    description: 'Transitioned traditional curriculum into technical modules focused on logical problem-solving and programming fundamentals.',
    tags: ['Teaching', 'Curriculum Design']
  }
]

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '1K+', label: 'App Users' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime Record' },
]

function SkillBar({ level, visible }: { level: number; visible: boolean }) {
  return (
    <div className="skill-bar-track w-full">
      <div
        className="skill-bar-fill"
        style={{ width: visible ? `${level}%` : '0%' }}
      />
    </div>
  )
}

export default function HomePage() {
  const skillsRef = useRef<HTMLDivElement>(null)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')

  const roles = [
    'Senior Software Engineer',
    'Flutter & Mobile Specialist',
    'Full-Stack Developer',
    'Cloud & DevOps Engineer',
  ]

  useEffect(() => {
    let roleIdx = 0
    let charIdx = 0
    let deleting = false
    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      const current = roles[roleIdx]
      if (!deleting) {
        setTypedText(current.slice(0, charIdx + 1))
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          timeout = setTimeout(tick, 1800)
          return
        }
      } else {
        setTypedText(current.slice(0, charIdx - 1))
        charIdx--
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % roles.length
        }
      }
      timeout = setTimeout(tick, deleting ? 50 : 80)
    }

    timeout = setTimeout(tick, 600)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true) },
      { threshold: 0.2 }
    )
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

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

  return (
    <div className="bg-neu-bg">

      {/* ================== HERO ================== */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">

            {/* Left — Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-6">
                <span
                  className="section-label px-4 py-2 rounded-full"
                  style={{ boxShadow: '3px 3px 6px #b8bec8, -3px -3px 6px #ffffff' }}
                >
                  Based in Malta &bull; Available for hire
                </span>
              </div>

              <h1 className="font-syne font-bold text-4xl md:text-5xl xl:text-6xl text-neu-text leading-tight mb-4">
                Hi, I&apos;m{' '}
                <span className="gradient-text">Gerald Okeke</span>
              </h1>

              <div className="h-10 mb-6">
                <p className="font-syne text-xl md:text-2xl text-neu-muted">
                  {typedText}
                  <span
                    className="inline-block w-0.5 h-6 ml-1 align-middle"
                    style={{
                      background: '#e67e22',
                      animation: 'pulse-slow 1s steps(1) infinite'
                    }}
                  />
                </p>
              </div>

              <p className="font-dm text-neu-muted text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Senior Software Engineer with <strong className="text-neu-text">8+ years</strong> of experience
                building production-grade mobile and web platforms. Expert in leading full platform
                migrations to unified Flutter/Dart codebases, distributed systems architecture,
                and enterprise ERP development.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="neu-btn-accent px-8 py-3 font-dm font-medium text-base">
                  View My Work →
                </Link>
                <Link href="/contact" className="neu-btn px-8 py-3 font-dm font-medium text-base text-neu-text">
                  Get In Touch
                </Link>
              </div>

              {/* Quick Social Links */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs font-dm text-neu-muted uppercase tracking-widest">Connect</span>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.linkedin.com/in/gerald-okeke-97a141291', label: 'in' },
                    { href: 'https://www.instagram.com/gerald_devs/', label: 'ig' },
                    { href: 'https://wa.me/35699991140', label: 'wa' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-syne font-bold text-neu-accent transition-all duration-200"
                      style={{ boxShadow: '3px 3px 6px #b8bec8, -3px -3px 6px #ffffff' }}
                    >
                      {s.label.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Photo */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Decorative rings */}
                <div
                  className="absolute inset-0 rounded-full animate-pulse-slow"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(230,126,34,0.15)',
                    transform: 'scale(1.12)',
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(230,126,34,0.08)',
                    transform: 'scale(1.25)',
                  }}
                />

                {/* Photo frame */}
                <div className="photo-frame w-72 h-72 md:w-96 md:h-96 relative overflow-hidden rounded-full">
                  <Image
                    src="/images/gerald.jpg"
                    alt="Gerald Okeke"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                {/* Floating badge - experience */}
                <div
                  className="absolute -bottom-2 -left-4 px-4 py-2 rounded-2xl"
                  style={{ boxShadow: '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff' }}
                >
                  <p className="font-syne font-bold text-lg text-neu-accent">8+</p>
                  <p className="font-dm text-xs text-neu-muted">Years Exp.</p>
                </div>

                {/* Floating badge - award */}
                <div
                  className="absolute -top-2 -right-4 px-4 py-2 rounded-2xl"
                  style={{ boxShadow: '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff' }}
                >
                  <p className="font-syne font-bold text-lg text-neu-accent">🥇</p>
                  <p className="font-dm text-xs text-neu-muted">TechWiz 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== STATS ================== */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-block">
                <p
                  className="font-syne font-bold text-3xl md:text-4xl gradient-text"
                >
                  {stat.value}
                </p>
                <p className="font-dm text-sm text-neu-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== ABOUT ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — Text */}
            <div className="lg:col-span-3 animate-on-scroll">
              <span className="section-label">About Me</span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-3 mb-6">
                Engineering platforms that{' '}
                <span className="gradient-text">scale & perform</span>
              </h2>
              <div className="space-y-4 font-dm text-neu-muted leading-relaxed text-base md:text-lg">
                <p>
                  I&apos;m a Senior Software Engineer based in <strong className="text-neu-text">Malta</strong>,
                  specializing in high-stakes mobile and web platform engineering. With 8+ years of
                  hands-on experience, I&apos;ve built and shipped production applications across
                  mobile (iOS &amp; Android) and web that serve real users at scale.
                </p>
                <p>
                  My expertise lies in leading <strong className="text-neu-text">full platform migrations</strong> —
                  transitioning legacy architectures to unified Flutter/Dart codebases — and architecting
                  microservices-based enterprise systems. I&apos;ve built everything from real estate ERP
                  platforms with multi-branch accounting to fintech apps with crypto &amp; multi-currency support.
                </p>
                <p>
                  I hold a <strong className="text-neu-text">BSc in Computer Science</strong> from the
                  University of Wolverhampton, and am currently leading development at BlueDucks Limited.
                  I also hold an Advanced Diploma in Software Engineering from Aptech Education,
                  and won <strong className="text-neu-text">1st place at the TechWiz 4 International Competition</strong> against
                  teams from India, Pakistan, and Qatar.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Link href="/portfolio" className="neu-btn-accent px-6 py-3 font-dm font-medium text-sm">
                  See My Projects →
                </Link>
              </div>
            </div>

            {/* Right — Info blocks */}
            <div className="lg:col-span-2 space-y-4 animate-on-scroll">
              {[
                { label: 'Location', value: 'Malta 🇲🇹', icon: '📍' },
                { label: 'Email', value: 'geraldokeke68@gmail.com', icon: '✉️' },
                { label: 'Phone', value: '+356 9999 1140', icon: '📞' },
                { label: 'Education', value: 'BSc Computer Science — Wolverhampton', icon: '🎓' },
                { label: 'Award', value: '1st — TechWiz 4 International', icon: '🏆' },
                { label: 'Availability', value: 'Open to opportunities', icon: '✅' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200"
                  style={{ boxShadow: '5px 5px 10px #b8bec8, -5px -5px 10px #ffffff' }}
                >
                  <span className="text-xl w-8 text-center">{item.icon}</span>
                  <div>
                    <p className="font-dm text-xs text-neu-muted uppercase tracking-wide">{item.label}</p>
                    <p className="font-dm text-sm font-medium text-neu-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== SKILLS ================== */}
      <section className="py-20" ref={skillsRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label">Technical Skills</span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-3">
              My Tech Stack
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.category}
                className="p-6 rounded-2xl animate-on-scroll"
                style={{
                  boxShadow: '8px 8px 16px #b8bec8, -8px -8px 16px #ffffff',
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ boxShadow: '3px 3px 6px #b8bec8, -3px -3px 6px #ffffff' }}
                    >
                      {skill.icon}
                    </span>
                    <h3 className="font-syne font-semibold text-sm text-neu-text leading-tight">
                      {skill.category}
                    </h3>
                  </div>
                  <span className="font-syne font-bold text-sm gradient-text">{skill.level}%</span>
                </div>

                <SkillBar level={skill.level} visible={skillsVisible} />

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {skill.items.map(item => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== EXPERIENCE ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label">Career Journey</span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-3">
              Professional Experience
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex gap-5 animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center pt-1">
                  <div className="timeline-dot" />
                  {i < experiences.length - 1 && <div className="timeline-line" />}
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-5 rounded-2xl mb-2 transition-all duration-200 hover:translate-y-[-2px]"
                  style={{ boxShadow: '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-syne font-bold text-base text-neu-text">{exp.role}</h3>
                      <p className="font-dm text-sm text-neu-accent font-medium">{exp.company}</p>
                    </div>
                    <span
                      className="text-xs font-dm text-neu-muted px-3 py-1 rounded-full"
                      style={{ boxShadow: 'inset 2px 2px 4px #b8bec8, inset -2px -2px 4px #ffffff' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-dm text-base text-neu-muted leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== CTA ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl p-10 md:p-16 text-center animate-on-scroll"
            style={{ boxShadow: '10px 10px 20px #b8bec8, -10px -10px 20px #ffffff' }}
          >
            <span className="section-label">Let&apos;s Work Together</span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-4 mb-4">
              Got a project in mind?
            </h2>
            <p className="font-dm text-neu-muted max-w-xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
              Whether you need a mobile app, a scalable backend, or a complete enterprise platform —
              I build robust, production-grade systems that perform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="neu-btn-accent px-8 py-3 font-dm font-medium">
                Start a Conversation →
              </Link>
              <Link href="/portfolio" className="neu-btn px-8 py-3 font-dm font-medium text-neu-text">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
