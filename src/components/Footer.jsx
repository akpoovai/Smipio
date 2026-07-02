import { images } from '../lib/images.js'
import { siteNavLinks } from '../lib/siteNav.js'
import { IconFacebook, IconInstagram, IconLinkedIn, IconX } from './SocialIcons.jsx'

const resources = [
  { href: '#', label: 'Help Center' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Cookie Policy' },
]

const socialLinks = [
  { Icon: IconX, href: 'https://twitter.com/smipio', label: 'X (Twitter)' },
  { Icon: IconFacebook, href: 'https://facebook.com/smipio', label: 'Facebook' },
  { Icon: IconInstagram, href: 'https://instagram.com/smipio', label: 'Instagram' },
  { Icon: IconLinkedIn, href: 'https://linkedin.com/company/smipio', label: 'LinkedIn' },
]

const columnLabel =
  'text-xs font-bold uppercase tracking-[0.35em] text-charcoal/45'

const footerLink =
  'text-sm font-medium text-charcoal/80 transition hover:text-teal'

function FooterLinkList({ items, ariaLabel }) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={footerLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
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
            <p className="mt-3 text-sm font-medium tracking-wide text-charcoal/68">
              Digitally Wise
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 md:gap-8 lg:gap-12">
            <div>
              <p className={columnLabel}>Navigate</p>
              <FooterLinkList items={siteNavLinks} ariaLabel="Footer navigation" />
            </div>

            <div>
              <p className={columnLabel}>Resources</p>
              <FooterLinkList items={resources} ariaLabel="Footer resources" />
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <p className={columnLabel}>Social</p>
              <div className="mt-5 flex flex-wrap gap-3">
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

        <div className="mt-10 border-t border-charcoal/10 pt-6 md:mt-12">
          <p className="text-xs font-medium text-charcoal/55">
            © 2026 Smipio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
