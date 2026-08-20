import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Button from './ui/Button'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/businesses', label: 'Businesses' },
  { to: '/partners', label: 'Partners' },
  { to: '/journey', label: 'Our Journey' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-brand-100 bg-white/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-white/80 backdrop-blur'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav className="hidden lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-700'
                        : 'text-ink-600 hover:text-brand-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}
      >
        <nav className="container-site border-t border-brand-100 bg-white pb-6 pt-4" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-50 text-brand-800'
                        : 'text-ink-700 hover:bg-brand-50 hover:text-brand-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-3">
              <Button to="/contact" variant="primary" className="w-full">
                Contact Us
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}