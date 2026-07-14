import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '../components/motion.jsx'
import { sectionLabel } from '../components/storyLayout.js'

const EFFECTIVE_DATE = 'July 14, 2027'
const VERSION = '1.0'

const tocItems = [
  { id: 'introduction', number: '01', label: 'Introduction' },
  { id: 'information-we-collect', number: '02', label: 'Information We Collect' },
  { id: 'how-we-use-your-information', number: '03', label: 'How We Use Your Information' },
  { id: 'artificial-intelligence', number: '04', label: 'Artificial Intelligence' },
  { id: 'information-sharing', number: '05', label: 'Information Sharing' },
  { id: 'cookies-and-similar-technologies', number: '06', label: 'Cookies and Similar Technologies' },
  { id: 'data-security', number: '07', label: 'Data Security' },
  { id: 'data-retention', number: '08', label: 'Data Retention' },
  { id: 'your-rights', number: '09', label: 'Your Rights' },
  { id: 'childrens-privacy', number: '10', label: "Children's Privacy" },
  { id: 'third-party-services', number: '11', label: 'Third-Party Services' },
  { id: 'international-data-transfers', number: '12', label: 'International Data Transfers' },
  { id: 'changes-to-this-privacy-policy', number: '13', label: 'Changes to This Privacy Policy' },
  { id: 'contact-us', number: '14', label: 'Contact Us' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionHeading({ number, title, id }) {
  return (
    <div className="mb-5">
      <p
        className="text-[0.7rem] font-semibold tracking-[0.28em]"
        style={{ color: '#B48400' }}
      >
        {number}
      </p>
      <h2
        id={id}
        className="mt-2 scroll-mt-28 text-2xl font-semibold tracking-tight text-charcoal md:scroll-mt-32 md:text-[1.75rem]"
      >
        {title}
      </h2>
    </div>
  )
}

function SubsectionHeading({ children }) {
  return (
    <h3 className="mt-7 text-base font-semibold text-charcoal md:text-lg">
      {children}
    </h3>
  )
}

function Body({ children }) {
  return (
    <p className="text-base leading-relaxed text-charcoal/72 md:text-[1.05rem] md:leading-[1.75]">
      {children}
    </p>
  )
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-relaxed text-charcoal/72 md:text-[1.05rem] md:leading-[1.75]"
        >
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: '#B48400' }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PolicySection({ id, number, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-b border-charcoal/10 py-10 last:border-b-0 md:py-12"
    >
      <SectionHeading number={number} title={title} id={`${id}-heading`} />
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function TableOfContents({ activeId, onSelect, className = '' }) {
  return (
    <nav aria-label="Privacy Policy sections" className={className}>
      <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-charcoal/45">
        Contents
      </p>
      <ol className="space-y-1">
        {tocItems.map((item) => {
          const active = activeId === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={`group flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition ${
                  active
                    ? 'bg-white/45 text-charcoal'
                    : 'text-charcoal/65 hover:bg-white/30 hover:text-charcoal'
                }`}
              >
                <span
                  className={`mt-0.5 shrink-0 text-[0.65rem] font-semibold tracking-[0.18em] transition ${
                    active ? '' : 'text-charcoal/40 group-hover:text-charcoal/60'
                  }`}
                  style={active ? { color: '#B48400' } : undefined}
                >
                  {item.number}
                </span>
                <span
                  className={`text-sm leading-snug ${
                    active ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState(tocItems[0].id)
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    document.title = 'Privacy Policy — Smipio'
    return () => {
      document.title = 'Smipio — Digitally Wise Ecosystem'
    }
  }, [])

  useEffect(() => {
    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleSelect = (id) => {
    setTocOpen(false)
    scrollToSection(id)
  }

  const activeLabel =
    tocItems.find((item) => item.id === activeId)?.label ?? 'Contents'

  return (
    <div className="relative pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-[26rem] w-[26rem] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
        <FadeIn className="w-full text-center">
          <p className={sectionLabel}>Privacy & Trust</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-charcoal md:text-5xl lg:text-[3.25rem]">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal/68 md:text-lg">
            Your privacy matters to us. Learn how Smipio Applications collects,
            uses, protects, and manages your information.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-charcoal/60">
            <p>
              <span className="font-medium text-charcoal/80">Effective Date:</span>{' '}
              {EFFECTIVE_DATE}
            </p>
            <p>
              <span className="font-medium text-charcoal/80">Version:</span>{' '}
              {VERSION}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-white/45 bg-white/30 p-4 shadow-sm backdrop-blur-md">
              <TableOfContents activeId={activeId} onSelect={handleSelect} />
            </div>
          </aside>

          <div className="lg:hidden">
            <div className="rounded-2xl border border-white/45 bg-white/35 shadow-sm backdrop-blur-md">
              <button
                type="button"
                aria-expanded={tocOpen}
                onClick={() => setTocOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
              >
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-charcoal/45">
                    On this page
                  </p>
                  <p className="mt-1 text-sm font-medium text-charcoal">
                    {activeLabel}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-charcoal/60 transition ${
                    tocOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {tocOpen && (
                <div className="border-t border-charcoal/10 px-2 pb-3 pt-2">
                  <TableOfContents
                    activeId={activeId}
                    onSelect={handleSelect}
                  />
                </div>
              )}
            </div>
          </div>

          <FadeIn delay={0.08} className="mt-8 lg:mt-0">
            <article className="w-full">
              <PolicySection
                id="introduction"
                number="01"
                title="Introduction"
              >
                <Body>
                  Welcome to Smipio Applications (&quot;Smipio&quot;,
                  &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                </Body>
                <Body>
                  Your privacy is important to us. This Privacy Policy explains
                  how we collect, use, store, protect, and disclose your
                  personal information when you use Smipio Applications,
                  including our websites, mobile applications, software, digital
                  services, and related products (collectively, the
                  &quot;Services&quot;).
                </Body>
                <Body>
                  By using our Services, you acknowledge that you have read and
                  understood this Privacy Policy.
                </Body>
              </PolicySection>

              <PolicySection
                id="information-we-collect"
                number="02"
                title="Information We Collect"
              >
                <Body>
                  Depending on how you use the Services, we may collect the
                  following information.
                </Body>

                <SubsectionHeading>Personal Information</SubsectionHeading>
                <BulletList
                  items={[
                    'Name',
                    'Email address',
                    'Mobile number (if provided)',
                    'Profile information',
                    'Country or region',
                    'Profile photo (optional)',
                  ]}
                />

                <SubsectionHeading>Account Information</SubsectionHeading>
                <BulletList
                  items={[
                    'Username',
                    'Encrypted password',
                    'Account preferences',
                    'Subscription details',
                  ]}
                />

                <SubsectionHeading>
                  Learning and Productivity Information
                </SubsectionHeading>
                <Body>Depending on the products you use, we may collect:</Body>
                <BulletList
                  items={[
                    'Learning progress',
                    'Completed Micro Masterclasses',
                    'Assessment results',
                    'Career plans',
                    'Skills and interests',
                    'Goals and missions',
                    'Tasks and schedules',
                    'Personal notes and reflections',
                  ]}
                />

                <SubsectionHeading>Technical Information</SubsectionHeading>
                <Body>We may automatically collect:</Body>
                <BulletList
                  items={[
                    'IP address',
                    'Browser type',
                    'Device information',
                    'Operating system',
                    'Language settings',
                    'Date and time of access',
                    'Login history',
                    'Error logs',
                  ]}
                />

                <SubsectionHeading>Usage Information</SubsectionHeading>
                <Body>
                  We may collect information about how you interact with the
                  Services, including:
                </Body>
                <BulletList
                  items={[
                    'Pages visited',
                    'Features used',
                    'Session duration',
                    'Clicks and navigation patterns',
                    'Search activity',
                    'Learning engagement',
                  ]}
                />
              </PolicySection>

              <PolicySection
                id="how-we-use-your-information"
                number="03"
                title="How We Use Your Information"
              >
                <Body>We use your information to:</Body>
                <BulletList
                  items={[
                    'Create and manage your account.',
                    'Deliver our Services.',
                    'Personalize your learning experience.',
                    'Recommend relevant content and career resources.',
                    'Track your learning and productivity progress.',
                    'Improve platform performance.',
                    'Respond to support requests.',
                    'Send important service notifications.',
                    'Protect the security of our platform.',
                    'Comply with applicable legal obligations.',
                  ]}
                />
                <Body>
                  We do not use your personal information for purposes unrelated
                  to the operation and improvement of Smipio Applications
                  without your consent.
                </Body>
              </PolicySection>

              <PolicySection
                id="artificial-intelligence"
                number="04"
                title="Artificial Intelligence"
              >
                <Body>
                  Some features within Smipio Applications may use Artificial
                  Intelligence (AI) to provide personalized recommendations,
                  learning assistance, career guidance, productivity support, or
                  content generation.
                </Body>
                <aside className="rounded-2xl border border-[#B48400]/25 bg-[#B48400]/[0.07] px-5 py-4">
                  <p className="text-base leading-relaxed text-charcoal/80 md:text-[1.05rem] md:leading-[1.75]">
                    AI-generated responses are intended to assist users and
                    should not be considered legal, financial, medical, or other
                    professional advice.
                  </p>
                </aside>
                <Body>
                  Users remain responsible for reviewing and validating
                  AI-generated content before acting upon it.
                </Body>
              </PolicySection>

              <PolicySection
                id="information-sharing"
                number="05"
                title="Information Sharing"
              >
                <Body>We value your privacy.</Body>
                <p className="text-base font-semibold leading-relaxed text-charcoal md:text-[1.05rem] md:leading-[1.75]">
                  We do not sell your personal information.
                </p>
                <Body>
                  We may share your information only when necessary:
                </Body>
                <BulletList
                  items={[
                    'With trusted service providers who help operate our platform.',
                    'To process payments through authorized payment providers.',
                    'To comply with legal obligations.',
                    'To protect the rights, safety, and security of users or Smipio.',
                    'With your explicit consent.',
                  ]}
                />
                <Body>
                  Any third-party service providers are expected to protect your
                  information appropriately.
                </Body>
              </PolicySection>

              <PolicySection
                id="cookies-and-similar-technologies"
                number="06"
                title="Cookies and Similar Technologies"
              >
                <Body>We may use cookies and similar technologies to:</Body>
                <BulletList
                  items={[
                    'Keep you signed in.',
                    'Remember your preferences.',
                    'Improve user experience.',
                    'Analyze platform usage.',
                    'Enhance security.',
                  ]}
                />
                <Body>
                  You may configure your browser to manage or disable cookies.
                  Some features may not function correctly if cookies are
                  disabled.
                </Body>
              </PolicySection>

              <PolicySection
                id="data-security"
                number="07"
                title="Data Security"
              >
                <Body>
                  We implement reasonable administrative, technical, and
                  organizational measures to protect your information.
                </Body>
                <Body>These measures may include:</Body>
                <BulletList
                  items={[
                    'Encrypted passwords',
                    'Secure communication using HTTPS',
                    'Access controls',
                    'Regular security updates',
                    'Monitoring and logging',
                  ]}
                />
                <Body>
                  While we strive to protect your information, no system
                  connected to the Internet can guarantee absolute security.
                </Body>
              </PolicySection>

              <PolicySection
                id="data-retention"
                number="08"
                title="Data Retention"
              >
                <Body>
                  We retain personal information only for as long as necessary
                  to:
                </Body>
                <BulletList
                  items={[
                    'Provide the Services.',
                    'Maintain your account.',
                    'Meet legal obligations.',
                    'Resolve disputes.',
                    'Enforce our agreements.',
                  ]}
                />
                <Body>
                  When information is no longer required, we will securely
                  delete or anonymize it where appropriate.
                </Body>
              </PolicySection>

              <PolicySection id="your-rights" number="09" title="Your Rights">
                <Body>
                  Subject to applicable law, you may have the right to:
                </Body>
                <BulletList
                  items={[
                    'Access your personal information.',
                    'Correct inaccurate information.',
                    'Update your profile.',
                    'Request deletion of your account.',
                    'Withdraw consent where applicable.',
                    'Request a copy of your personal information.',
                    'Object to certain processing activities.',
                  ]}
                />
                <Body>
                  Requests may be submitted through our official support
                  channels.
                </Body>
              </PolicySection>

              <PolicySection
                id="childrens-privacy"
                number="10"
                title="Children's Privacy"
              >
                <Body>
                  Smipio Applications are not intended for children under the
                  applicable minimum age without parental or legal guardian
                  consent.
                </Body>
                <Body>
                  If we become aware that personal information has been
                  collected improperly, we will take reasonable steps to remove
                  it.
                </Body>
              </PolicySection>

              <PolicySection
                id="third-party-services"
                number="11"
                title="Third-Party Services"
              >
                <Body>
                  Our Services may contain links to third-party websites or
                  integrate with third-party services.
                </Body>
                <Body>
                  We are not responsible for the privacy practices or content of
                  those third parties. Users should review their respective
                  privacy policies.
                </Body>
              </PolicySection>

              <PolicySection
                id="international-data-transfers"
                number="12"
                title="International Data Transfers"
              >
                <Body>
                  Depending on where you access the Services, your information
                  may be processed or stored in countries other than your own.
                </Body>
                <Body>
                  We take reasonable steps to ensure that such processing
                  complies with applicable privacy laws.
                </Body>
              </PolicySection>

              <PolicySection
                id="changes-to-this-privacy-policy"
                number="13"
                title="Changes to This Privacy Policy"
              >
                <Body>
                  We may update this Privacy Policy from time to time.
                </Body>
                <Body>
                  If significant changes are made, we may notify users through
                  the platform or require acceptance of the updated version
                  where appropriate.
                </Body>
                <Body>
                  The latest version will always be available within Smipio
                  Applications.
                </Body>
              </PolicySection>

              <PolicySection id="contact-us" number="14" title="Contact Us">
                <Body>
                  If you have questions about this Privacy Policy or how your
                  information is handled, please contact us through the official
                  support channels available within Smipio Applications.
                </Body>
              </PolicySection>

              <section
                id="privacy-commitment"
                aria-labelledby="privacy-commitment-heading"
                className="mt-4 rounded-[24px] border border-white/50 bg-[#fef0d5]/90 px-6 py-10 shadow-[0_18px_50px_-36px_rgba(31,41,55,0.14)] md:px-10 md:py-12"
              >
                <p
                  className="text-[0.7rem] font-semibold tracking-[0.28em]"
                  style={{ color: '#B48400' }}
                >
                  COMMITMENT
                </p>
                <h2
                  id="privacy-commitment-heading"
                  className="mt-3 text-2xl font-semibold tracking-tight text-charcoal md:text-3xl"
                >
                  Our Privacy Commitment
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/72 md:text-lg md:leading-[1.75]">
                  <p>
                    At Smipio, we believe privacy is an essential part of digital
                    wisdom.
                  </p>
                  <p>
                    We are committed to collecting only the information
                    necessary to provide meaningful, secure, and personalized
                    experiences while respecting your privacy, protecting your
                    data, and empowering you to thrive with AI—with dignity.
                  </p>
                </div>
              </section>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
