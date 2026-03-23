'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

const services = [
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Cross-platform Flutter apps for iOS and Android with native feature integration via Platform Channels. Production-grade with 99.9% uptime.',
    tags: ['Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    description: 'Scalable REST APIs and microservices using Django, Spring Boot, and Node.js. Role-based access control, GraphQL, and enterprise-grade data architecture.',
    tags: ['Django', 'Spring Boot', 'Node.js', 'GraphQL']
  },
  {
    icon: '🏗️',
    title: 'Enterprise ERP Systems',
    description: 'End-to-end enterprise resource planning systems with multi-branch accounting, inventory management, and role-based dashboards.',
    tags: ['Django', 'PostgreSQL', 'RBAC', 'AWS']
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'CI/CD pipelines with Fastlane, Docker, Kubernetes, and AWS deployment automation. Infrastructure for high-availability production environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions']
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using Next.js, React, and Tailwind. From landing pages to complex SaaS dashboards.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind']
  },
  {
    icon: '🧠',
    title: 'Machine Learning & AI',
    description: 'Training robust ML models and fine-tuning LLMs for real-world applications. Specialising in scientific and forensic data analysis, computer vision with OpenCV, and NLP pipelines using Hugging Face and PyTorch.',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenCV', 'LLMs']
  },
  {
    icon: '📊',
    title: 'Big Data & Visualisation',
    description: 'End-to-end big data pipelines using Apache Spark and Pandas. Turning complex datasets into clear, actionable insights through interactive visualisations with Matplotlib, Seaborn, and Jupyter notebooks.',
    tags: ['Apache Spark', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter']
  },
  {
    icon: '🎮',
    title: 'VR & Game Development',
    description: 'Immersive virtual reality experiences built with Unity. From interactive 3D environments to XR-powered educational games using Oculus SDK and the XR Interaction Toolkit.',
    tags: ['Unity', 'C#', 'VR', 'Oculus SDK', 'XR Toolkit']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centred interface design using Figma, Adobe Photoshop, and Illustrator. Translating designs into pixel-perfect, accessible code.',
    tags: ['Figma', 'Photoshop', 'Illustrator', 'UX Research']
  }
]

const projects = [
  {
    title: 'SwiftRun — Delivery App',
    category: 'Mobile + Web',
    description: 'Cross-platform delivery application serving 1,000+ active users across Nigeria and Canada. Features real-time GPS tracking, Paystack payment integration, Firebase authentication, and push notifications. Separate driver and customer apps on iOS and Android.',
    tech: ['Flutter', 'Firebase', 'Paystack', 'Google Maps', 'Swift', 'Kotlin'],
    links: {
      web: 'https://www.swiftrunapp.com/',
      ios: 'https://apps.apple.com/ng/app/swiftrun-delivery-app/id6758913445',
      android: 'https://play.google.com/store/apps/details?id=com.swiftrun.customer',
    },
    image: '/images/projects/swiftrun.jpg',
    bgColor: '#1a3a5c',
    accentColor: '#4a9dd4',
    icon: '🚀',
    highlight: '1,000+ Active Users'
  },
  {
    title: 'Bludux — Fintech Platform',
    category: 'Web',
    description: 'Global fintech platform enabling multi-currency wallets (NGN, USD, EUR, GBP, CNY), crypto support (USDT, USDC), local and international P2P transfers, and real-time FX conversion. "Command Your Finance."',
    tech: ['React', 'Node.js', 'Crypto APIs', 'FX APIs'],
    links: { web: 'https://www.bludux.com/' },
    image: '/images/projects/bludux.jpg',
    bgColor: '#0d1117',
    accentColor: '#7c3aed',
    icon: '💎',
    highlight: 'Multi-Currency + Crypto'
  },
  {
    title: 'Vatican Projects — Real Estate ERP',
    category: 'Web + Backend',
    description: 'Comprehensive real estate management ERP system with Django/PostgreSQL backend. Features multi-branch accounting, property listings, inventory control, role-based access (admin/branch manager/staff), and Web3-ready data patterns. Deployed on AWS with Docker.',
    tech: ['Django', 'PostgreSQL', 'AWS', 'Docker', 'RBAC', 'Web3'],
    links: { web: 'https://vaticanprojects.com/' },
    image: '/images/projects/vatican-projects.jpg',
    bgColor: '#2a3142',
    accentColor: '#f97316',
    icon: '🏢',
    highlight: 'Multi-Branch ERP'
  },
  {
    title: 'REDAN Enugu — Association Website',
    category: 'Web',
    description: 'Official website for the Real Estate Developers Association of Nigeria, Enugu Chapter. Features member directory, downloadables, gallery, event management, and REDAN Enugu TV integration.',
    tech: ['WordPress', 'PHP', 'MySQL', 'SEO'],
    links: { web: 'https://www.redanenugu.com/' },
    image: '/images/projects/redan.jpg',
    bgColor: '#1a3a2a',
    accentColor: '#10b981',
    icon: '🏘️',
    highlight: 'Real Estate Association'
  },
  {
    title: 'BlueDucks Ltd — Agency Website',
    category: 'Web',
    description: 'Premium software development company website for BlueDucks Limited. Showcases web development, mobile apps, and Tech Academy services. Features booking system, academy portal, and contact management.',
    tech: ['Next.js', 'React', 'Tailwind', 'CMS'],
    links: { web: 'https://blueducksltd.com/' },
    image: '/images/projects/blueducks.jpg',
    bgColor: '#1c1c1c',
    accentColor: '#f59e0b',
    icon: '🦆',
    highlight: 'Software Agency'
  },
  {
    title: 'Voluntad LLC — Tech Company Website',
    category: 'Web',
    description: 'Modern corporate website for Voluntad LLC, a digital innovation company. Features animated sections, services showcase, about story, and a clean professional layout built with Next.js and deployed on Vercel.',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    links: { web: 'https://voluntadllc.vercel.app/' },
    image: '/images/projects/voluntad.jpg',
    bgColor: '#1e1b4b',
    accentColor: '#6366f1',
    icon: '🌐',
    highlight: 'Digital Innovation'
  },
  {
    title: 'Maxxwallpaper — Interior Design',
    category: 'Web',
    description: 'Business website for Maxxwallpaper, a premium wallpaper and interior design company based in Abuja, Nigeria. Features an online shop, services showcase, appointment booking, and an elegant dark-themed UI that reflects the brand\'s identity — "Transforming Spaces, One Wall at a Time."',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    links: { web: 'https://maxxwallpaper.vercel.app' },
    image: '/images/projects/maxwallpaper.png',
    bgColor: '#1a1410',
    accentColor: '#d4a04a',
    icon: '🏠',
    highlight: 'Interior Design & Decor'
  },
  {
    title: 'VR Math Escape Room',
    category: 'VR / Game Dev',
    description: 'Immersive virtual reality escape room built with Unity where players solve math puzzles to progress through rooms. Features full VR interaction, 3D physics, spatial audio, and XR hand tracking. Built for Oculus/Meta headsets.',
    tech: ['Unity', 'C#', 'VR', 'XR Interaction Toolkit', 'Oculus SDK', '3D Physics'],
    links: { github: 'https://github.com/GeraldPrime/Unity-VR-Math-Excape-room' },
    image: '/images/projects/unitygame.png',
    bgColor: '#0f1f0f',
    accentColor: '#22c55e',
    icon: '🎮',
    highlight: 'Immersive VR Experience'
  },
  {
    title: 'Precious Blood Chaplet',
    category: 'Mobile',
    description: 'Catholic faith-based mobile application featuring the Precious Blood Chaplet, daily Mass readings, and offline functionality. Built with Flutter for cross-platform support.',
    tech: ['Flutter', 'Dart', 'SQLite', 'Offline-first'],
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.preciousblood.chaplet',
    },
    image: '/images/projects/precious-blood.jpg',
    bgColor: '#3b0e0e',
    accentColor: '#ef4444',
    icon: '🙏',
    highlight: 'Offline-first Mobile'
  },
]

export default function PortfolioPage() {
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
    <div className="bg-neu-bg pt-16">

      {/* ================== HERO ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">My Work</span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-neu-text mt-4 mb-6">
            Services &amp; <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="font-dm text-neu-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From cross-platform mobile apps to enterprise ERP systems — here&apos;s what I build and the
            clients I&apos;ve delivered for.
          </p>
        </div>
      </section>

      {/* ================== SERVICES ================== */}
      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label">What I Do</span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-3">
              My Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl group animate-on-scroll transition-all duration-300 cursor-default"
                style={{
                  boxShadow: '8px 8px 16px #b8bec8, -8px -8px 16px #ffffff',
                  transitionDelay: `${i * 60}ms`
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '12px 12px 24px #b8bec8, -12px -12px 24px #ffffff'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '8px 8px 16px #b8bec8, -8px -8px 16px #ffffff'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ boxShadow: '5px 5px 10px #b8bec8, -5px -5px 10px #ffffff' }}
                >
                  {service.icon}
                </div>
                <h3 className="font-syne font-bold text-lg text-neu-text mb-2">{service.title}</h3>
                <p className="font-dm text-sm text-neu-muted leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== PROJECTS ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-label">Featured Projects</span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-3">
              Projects I&apos;ve Built
            </h2>
            <p className="font-dm text-neu-muted mt-4 max-w-xl mx-auto">
              Live, production-grade applications — from fintech to real estate, mobile to enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="project-card animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Card Header */}
                <div
                  className="project-card-header p-6"
                  style={{ background: `linear-gradient(135deg, ${project.bgColor}, ${project.bgColor}cc)` }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl mb-3 block" style={{ display: 'inline-block' }}>
                        {project.icon}
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient for readability */}
                  {project.image && (
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }}
                    />
                  )}

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-xs font-dm font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{
                        background: `${project.accentColor}cc`,
                        color: '#fff',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Highlight badge */}
                  <div
                    className="absolute top-4 right-4 text-xs font-dm font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {project.highlight}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-syne font-bold text-xl text-neu-text mb-2">{project.title}</h3>
                  <p className="font-dm text-sm text-neu-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.web && (
                      <a
                        href={project.links.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-btn-accent px-5 py-2 text-sm font-dm font-medium flex items-center gap-2"
                      >
                        <span>↗</span> Live Site
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-btn px-5 py-2 text-sm font-dm font-medium text-neu-text flex items-center gap-2"
                      >
                        <span>⌥</span> GitHub
                      </a>
                    )}
                    {project.links.ios && (
                      <a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-btn px-5 py-2 text-sm font-dm font-medium text-neu-text flex items-center gap-2"
                      >
                        <span>🍎</span> App Store
                      </a>
                    )}
                    {project.links.android && (
                      <a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-btn px-5 py-2 text-sm font-dm font-medium text-neu-text flex items-center gap-2"
                      >
                        <span>▶</span> Google Play
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional note */}
          <div
            className="mt-10 p-6 rounded-2xl text-center animate-on-scroll"
            style={{ boxShadow: '6px 6px 12px #b8bec8, -6px -6px 12px #ffffff' }}
          >
            <p className="font-dm text-neu-muted text-sm">
              This is a selection of publicly shareable projects. I&apos;ve also built numerous private
              enterprise ERP systems, government portals, school management systems, ML models, and
              automation tools whose links cannot be shared here.
            </p>
            <Link href="/contact" className="inline-block mt-4 neu-btn-accent px-6 py-2 text-sm font-dm font-medium">
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ================== DESIGN TOOLS ================== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="section-label">Design Tools</span>
            <h2 className="font-syne font-bold text-2xl text-neu-text mt-3">
              I also design
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom'].map(tool => (
              <div
                key={tool}
                className="px-6 py-4 rounded-2xl font-dm font-medium text-neu-text text-sm animate-on-scroll"
                style={{ boxShadow: '5px 5px 10px #b8bec8, -5px -5px 10px #ffffff' }}
              >
                {tool}
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
            <span className="section-label">Ready to build?</span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-neu-text mt-4 mb-4">
              Let&apos;s create something great
            </h2>
            <p className="font-dm text-neu-muted max-w-lg mx-auto mb-8">
              I&apos;m available for freelance projects, long-term contracts, and full-time senior engineer roles.
            </p>
            <Link href="/contact" className="neu-btn-accent px-10 py-3 font-dm font-medium">
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
