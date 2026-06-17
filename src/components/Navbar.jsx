import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { images } from '../lib/images.js'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#contact', label: 'Contact' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -8, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-white/30 bg-cream/70 shadow-card backdrop-blur-2xl premium:border-white/50 premium:bg-white/55 premium:shadow-[0_20px_60px_-18px_rgba(31,41,55,0.14)] premium:backdrop-blur-3xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10 premium:py-5">
        <a
          href="#hero"
          className="flex shrink-0 items-center"
        >
          <img
            src={images.logo.wordmarkLarge}
            alt="Smipio"
            className="block h-10 w-auto max-w-[12rem] object-contain md:h-11 md:max-w-[13rem]"
            width={1136}
            height={353}
            decoding="async"
          />
        </a>

        <ul className="hidden items-center gap-10 text-sm font-medium text-charcoal/85 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition hover:text-teal after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-teal after:transition after:content-[''] hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#pricing"
            className="btn-smipio-outline rounded-full border border-charcoal/15 bg-white/30 px-5 py-2 text-sm font-semibold text-charcoal shadow-sm backdrop-blur-md premium:border-white/60 premium:bg-white/45 premium:shadow-md premium:ring-1 premium:ring-white/40"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="btn-smipio rounded-full px-5 py-2 text-sm font-semibold shadow-lg shadow-[#2DB988]/30 hover:-translate-y-0.5 hover:shadow-[#2DB988]/45 premium:shadow-xl premium:shadow-[#2DB988]/35 premium:ring-2 premium:ring-white/25"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-2xl border border-white/50 bg-white/35 p-2.5 text-charcoal backdrop-blur-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="border-t border-white/25 bg-cream/80 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-charcoal/90 hover:bg-white/35"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="btn-smipio mt-3 rounded-full px-5 py-3 text-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
