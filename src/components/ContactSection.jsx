import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from './motion.jsx'

const ease = [0.22, 1, 0.36, 1]

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
    <section id="contact" className="relative overflow-hidden py-28 premium:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[18%] top-[12%] h-[420px] w-[420px] rounded-full bg-teal/12 blur-3xl" />
        <div className="absolute -right-[12%] bottom-[8%] h-[380px] w-[380px] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-sandal/45 bg-white/58 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[4px] text-brown/80 backdrop-blur-xl">
            Contact
          </div>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-charcoal md:text-5xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/68 md:text-lg">
            Questions about Smipio, partnerships, or getting started? Send us a
            message and we&apos;ll get back to you.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <FadeIn delay={0.06}>
            <div className="space-y-5">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-sandal/30 bg-white/50 px-5 py-4 shadow-[0_18px_40px_-36px_rgba(31,41,55,0.12)] backdrop-blur-xl"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream/90 text-teal">
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

              <p className="px-1 pt-2 text-sm leading-relaxed text-charcoal/58">
                Whether you&apos;re an individual learner, educator, or
                organization exploring the Digitally Wise ecosystem, we&apos;d
                love to hear from you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              className="rounded-[2rem] border border-sandal/35 bg-white/58 p-6 shadow-[0_28px_70px_-40px_rgba(31,41,55,0.22)] backdrop-blur-2xl md:p-8"
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
                    className="mt-2 w-full rounded-xl border border-white/50 bg-white/65 px-4 py-3 text-sm text-charcoal shadow-inner outline-none transition placeholder:text-charcoal/40 focus:border-teal/45 focus:ring-2 focus:ring-teal/15"
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
                    className="mt-2 w-full rounded-xl border border-white/50 bg-white/65 px-4 py-3 text-sm text-charcoal shadow-inner outline-none transition placeholder:text-charcoal/40 focus:border-teal/45 focus:ring-2 focus:ring-teal/15"
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
                  className="mt-2 w-full rounded-xl border border-white/50 bg-white/65 px-4 py-3 text-sm text-charcoal shadow-inner outline-none transition placeholder:text-charcoal/40 focus:border-teal/45 focus:ring-2 focus:ring-teal/15"
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
                  className="mt-2 w-full resize-y rounded-xl border border-white/50 bg-white/65 px-4 py-3 text-sm text-charcoal shadow-inner outline-none transition placeholder:text-charcoal/40 focus:border-teal/45 focus:ring-2 focus:ring-teal/15"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-teal/85 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition hover:shadow-teal/35 sm:w-auto"
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
