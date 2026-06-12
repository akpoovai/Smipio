import { motion } from 'framer-motion'
import { IconLinkedIn, IconX, IconYouTube } from './SocialIcons.jsx'

const nav = [
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#contact', label: 'Contact' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/30 bg-charcoal/[0.03] premium:border-white/40 premium:bg-white/25 premium:backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 premium:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a
              href="#hero"
              className="inline-block text-2xl font-semibold tracking-tight text-teal"
            >
              smipio
            </a>
            <p className="mt-6 text-xs font-medium text-charcoal/55">© 2026</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-charcoal/45">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 text-sm font-medium text-charcoal/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:text-teal">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-charcoal/45">
              Newsletter
            </p>
            <form
              className="mt-5 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/40 bg-white/40 px-5 py-3 text-sm text-charcoal shadow-inner outline-none backdrop-blur-md transition placeholder:text-charcoal/40 focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease }}
                className="rounded-full bg-gradient-to-r from-teal to-teal/85 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal/25"
              >
                Subscribe
              </motion.button>
            </form>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: IconX, href: 'https://twitter.com', label: 'X' },
                {
                  Icon: IconLinkedIn,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                },
                {
                  Icon: IconYouTube,
                  href: 'https://youtube.com',
                  label: 'YouTube',
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/45 bg-white/35 text-charcoal shadow-sm backdrop-blur-md transition hover:border-teal/40 hover:text-teal"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/25 pt-8" />
      </div>
    </footer>
  )
}
