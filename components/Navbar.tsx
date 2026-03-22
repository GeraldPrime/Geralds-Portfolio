'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(232, 234, 240, 0.95)'
            : 'rgba(232, 234, 240, 0.8)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 4px 20px rgba(184,190,200,0.4), 0 -1px 0 rgba(255,255,255,0.6)'
            : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold font-syne transition-all duration-200 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                boxShadow: '3px 3px 8px rgba(230,126,34,0.35), -2px -2px 6px #ffffff',
              }}
            >
              GO
            </div>
            <span className="font-syne font-700 text-lg text-neu-text hidden sm:block tracking-tight">
              Gerald<span className="gradient-text">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="neu-btn-accent px-5 py-2 text-sm font-dm font-medium">
              Hire Me
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden neu-btn w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 bg-neu-text transition-all duration-300"
              style={{
                transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                background: menuOpen ? '#e67e22' : '#2d3748'
              }}
            />
            <span
              className="block w-5 h-0.5 bg-neu-text transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                background: '#2d3748'
              }}
            />
            <span
              className="block w-5 h-0.5 bg-neu-text transition-all duration-300"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                background: menuOpen ? '#e67e22' : '#2d3748'
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed top-16 left-0 right-0 z-40 mobile-menu transition-all duration-300 overflow-hidden md:hidden"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-dm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-neu-accent'
                  : 'text-neu-muted hover:text-neu-text'
              }`}
              style={pathname === link.href ? {
                background: '#e8eaf0',
                boxShadow: 'inset 3px 3px 6px #b8bec8, inset -3px -3px 6px #ffffff'
              } : {}}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="neu-btn-accent px-4 py-3 text-sm font-dm font-medium text-center mt-2"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </>
  )
}
