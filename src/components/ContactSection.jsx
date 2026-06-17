import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from './motion.jsx'
import { sectionHeaderGap, sectionLabel, sectionSpacing } from './storyLayout.js'

const ease = [0.22, 1, 0.36, 1]
const cardBackground = '#fef0d5'
const pageBackground = '#fef5e2'

const inputClass =
  'mt-2 w-full rounded-xl border border-[#fef5e2] bg-[#fef5e2] px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-teal/45 focus:ring-2 focus:ring-teal/15'

const contactDetails = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@smipio.com',
    href: 'mailto:hello@smipio.com',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
  },
  {
    Icon: MessageSquare,
    label: 'Response time',
    value: 'Within 2 business days',
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className={`relative overflow-hidden ${sectionSpacing}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[18%] top-[12%] h-[420px] w-[420px] rounded-full bg-teal/12 blur-3xl" />
        <div className="absolute -right-[12%] bottom-[8%] h-[380px] w-[380px] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className={sectionLabel}>
            Contact
          </p>
          <p className="mt-5 text-base leading-relaxed text-charcoal/68 md:text-lg">
            Whether you&apos;re an individual learner, educator, or organization
            exploring the Digitally Wise ecosystem, we&apos;d love to hear from
            you.
          </p>
        </FadeIn>

        <div className={`${sectionHeaderGap} grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16`}>
          <FadeIn delay={0.06}>
            <div className="space-y-5">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl px-5 py-4 shadow-[0_18px_40px_-36px_rgba(31,41,55,0.12)]"
                  style={{ backgroundColor: cardBackground }}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-teal"
                    style={{ backgroundColor: pageBackground }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-charcoal/45">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-sm font-medium text-charcoal transition hover:text-teal md:text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-charcoal md:text-base">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              className="rounded-[2rem] p-6 shadow-[0_28px_70px_-40px_rgba(31,41,55,0.22)] md:p-8"
              style={{ backgroundColor: cardBackground }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-[0.24em] text-charcoal/50"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-[0.24em] text-charcoal/50"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-bold uppercase tracking-[0.24em] text-charcoal/50"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase tracking-[0.24em] text-charcoal/50"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about what you're looking for..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease }}
                className="btn-smipio mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-lg shadow-[#2DB988]/25 sm:w-auto"
              >
                Send message
                <Send className="h-4 w-4" strokeWidth={2.2} aria-hidden />
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
