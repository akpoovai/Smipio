import { images } from '../lib/images.js'
import { IconFacebook, IconLinkedIn, IconX } from './SocialIcons.jsx'

const nav = [
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { Icon: IconX, href: 'https://twitter.com', label: 'X' },
  { Icon: IconLinkedIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: IconFacebook, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <a href="#hero" className="inline-flex items-center">
              <img
                src={images.logo.wordmarkLarge}
                alt="Smipio"
                className="block h-9 w-auto max-w-[10rem] object-contain"
                width={1136}
                height={353}
                decoding="async"
              />
            </a>
            <p className="mt-2 text-xs font-medium text-charcoal/55">© 2026</p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-charcoal/45">
                Navigate
              </p>
              <nav aria-label="Footer">
                <ul className="mt-5 space-y-3">
                  {nav.map((n) => (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        className="text-sm font-medium text-charcoal/80 transition hover:text-teal"
                      >
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-charcoal/45">
                Social
              </p>
              <div className="mt-5 flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
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
        </div>
      </div>
    </footer>
  )
}
