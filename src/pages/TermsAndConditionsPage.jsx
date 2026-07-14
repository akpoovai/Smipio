import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LegalBody,
  LegalBulletList,
  LegalCallout,
  LegalDesktopToc,
  LegalMobileToc,
  LegalPageHero,
  LegalSection,
} from '../components/legal/LegalPagePrimitives.jsx'
import { scrollToLegalSection } from '../lib/scrollToLegalSection.js'

const VERSION = '1.0'
const EFFECTIVE_DATE = 'August 15, 2026'

const tocItems = [
  { id: 'introduction', number: '01', label: 'Introduction' },
  { id: 'our-mission', number: '02', label: 'Our Mission' },
  { id: 'definitions', number: '03', label: 'Definitions' },
  { id: 'eligibility', number: '04', label: 'Eligibility' },
  { id: 'user-accounts', number: '05', label: 'User Accounts' },
  { id: 'acceptable-use', number: '06', label: 'Acceptable Use' },
  { id: 'intellectual-property', number: '07', label: 'Intellectual Property' },
  { id: 'user-content', number: '08', label: 'User Content' },
  { id: 'artificial-intelligence', number: '09', label: 'Artificial Intelligence' },
  {
    id: 'micro-masterclasses-and-educational-content',
    number: '10',
    label: 'Micro Masterclasses and Educational Content',
  },
  {
    id: 'subscriptions-payments-and-refunds',
    number: '11',
    label: 'Subscriptions, Payments, and Refunds',
  },
  { id: 'service-availability', number: '12', label: 'Service Availability' },
  {
    id: 'data-integrity-and-loss-of-data',
    number: '13',
    label: 'Data Integrity and Loss of Data',
  },
  { id: 'disclaimer-of-warranties', number: '14', label: 'Disclaimer of Warranties' },
  { id: 'limitation-of-liability', number: '15', label: 'Limitation of Liability' },
  { id: 'indemnification', number: '16', label: 'Indemnification' },
  { id: 'third-party-services', number: '17', label: 'Third-Party Services' },
  { id: 'privacy', number: '18', label: 'Privacy' },
  { id: 'suspension-and-termination', number: '19', label: 'Suspension and Termination' },
  { id: 'changes-to-the-services', number: '20', label: 'Changes to the Services' },
  { id: 'changes-to-these-terms', number: '21', label: 'Changes to these Terms' },
  { id: 'governing-law', number: '22', label: 'Governing Law' },
  { id: 'dispute-resolution', number: '23', label: 'Dispute Resolution' },
  { id: 'force-majeure', number: '24', label: 'Force Majeure' },
  { id: 'severability', number: '25', label: 'Severability' },
  { id: 'no-waiver', number: '26', label: 'No Waiver' },
  { id: 'entire-agreement', number: '27', label: 'Entire Agreement' },
  { id: 'contact-information', number: '28', label: 'Contact Information' },
  { id: 'acceptance-of-these-terms', number: '29', label: 'Acceptance of these Terms' },
  { id: 'guiding-principle', number: '30', label: 'Guiding Principle' },
]

const inlineLink =
  'font-medium text-charcoal underline decoration-charcoal/25 underline-offset-4 transition hover:text-teal hover:decoration-teal/50'

function Emphasized({ children }) {
  return <span className="font-semibold text-charcoal">{children}</span>
}

export default function TermsAndConditionsPage() {
  const [activeId, setActiveId] = useState(tocItems[0].id)
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    document.title = 'Terms & Conditions — Smipio'
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
    scrollToLegalSection(id)
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
        <LegalPageHero
          eyebrow="Legal & Terms"
          title="Terms & Conditions"
          description="Please read these Terms carefully. They explain the rules, responsibilities, and conditions that govern your access to and use of Smipio Applications."
          version={VERSION}
          effectiveDate={EFFECTIVE_DATE}
        />

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-16">
          <LegalDesktopToc
            items={tocItems}
            activeId={activeId}
            onSelect={handleSelect}
            ariaLabel="Terms & Conditions sections"
          />

          <div className="min-w-0">
            <LegalMobileToc
              open={tocOpen}
              onToggle={() => setTocOpen((open) => !open)}
              activeLabel={activeLabel}
              items={tocItems}
              activeId={activeId}
              onSelect={handleSelect}
              ariaLabel="Terms & Conditions sections"
            />

            <article className="mt-8 w-full lg:mt-0">
              <LegalSection id="introduction" number="01" title="Introduction">
                <LegalBody>
                  Welcome to Smipio Applications (&quot;Smipio&quot;,
                  &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms
                  &amp; Conditions (&quot;Terms&quot;) govern your access to and
                  use of Smipio Applications, including our websites, mobile
                  applications, software, digital services, Micro Masterclasses,
                  learning resources, Artificial Intelligence (AI) features, and
                  related products (collectively referred to as the Services).
                </LegalBody>
                <LegalBody>
                  By creating an account, accessing, or using any part of the
                  Services, you acknowledge that you have read, understood, and
                  agree to be bound by these Terms. If you do not agree to these
                  Terms, you must not access or use the Services.
                </LegalBody>
              </LegalSection>

              <LegalSection id="our-mission" number="02" title="Our Mission">
                <LegalBody>
                  Smipio Applications are designed to help individuals become{' '}
                  <Emphasized>digitally wise</Emphasized>, unlock{' '}
                  <Emphasized>Human Intelligence (HI)</Emphasized>, navigate{' '}
                  <Emphasized>meaningful careers</Emphasized>, and execute{' '}
                  <Emphasized>purposeful missions</Emphasized>.
                </LegalBody>
                <LegalBody>
                  Our mission is to empower individuals through responsible use
                  of technology, continuous learning, career development,
                  productivity tools, and Artificial Intelligence while
                  preserving human dignity, wisdom, and purpose.
                </LegalBody>
              </LegalSection>

              <LegalSection id="definitions" number="03" title="Definitions">
                <LegalBody>For the purpose of these Terms:</LegalBody>
                <LegalBulletList
                  items={[
                    'Account means a registered user account within Smipio Applications.',
                    'AI means Artificial Intelligence technologies and features integrated into the Services.',
                    'Content means all text, videos, graphics, images, presentations, learning materials, software, source code, documents, articles, assessments, and other materials available through the Services.',
                    'Micro Masterclass means a structured collection of microlearning presentations, activities, assessments, and related educational resources.',
                    'Services means all applications, platforms, websites, software, APIs, AI features, educational resources, career planning tools, productivity tools, and digital services provided by Smipio.',
                    'User means any individual or organization accessing or using the Services.',
                  ]}
                />
              </LegalSection>

              <LegalSection id="eligibility" number="04" title="Eligibility">
                <LegalBody>You may use the Services only if:</LegalBody>
                <LegalBulletList
                  items={[
                    'you are legally capable of entering into a binding agreement under the laws of your jurisdiction;',
                    'you provide accurate registration information;',
                    'you comply with these Terms.',
                  ]}
                />
                <LegalBody>
                  If you are below the age of majority in your jurisdiction, you
                  may use the Services only with the consent and supervision of
                  a parent or legal guardian.
                </LegalBody>
              </LegalSection>

              <LegalSection id="user-accounts" number="05" title="User Accounts">
                <LegalBody>
                  To access certain features, you must create a Smipio account.
                </LegalBody>
                <LegalBody>You agree to:</LegalBody>
                <LegalBulletList
                  items={[
                    'provide complete and accurate information;',
                    'keep your information up to date;',
                    'maintain the confidentiality of your password;',
                    'protect your account from unauthorized access;',
                    'immediately notify Smipio of any suspected security breach.',
                  ]}
                />
                <LegalBody>
                  You are responsible for all activities that occur under your
                  account unless unauthorized access resulted solely from a
                  security failure attributable to Smipio.
                </LegalBody>
                <LegalBody>
                  Smipio reserves the right to suspend or terminate accounts that
                  contain false information, violate these Terms, or threaten the
                  security of the Services.
                </LegalBody>
              </LegalSection>

              <LegalSection id="acceptable-use" number="06" title="Acceptable Use">
                <LegalBody>
                  You agree to use Smipio Applications responsibly, ethically,
                  and in accordance with applicable laws.
                </LegalBody>
                <LegalBody>You must not:</LegalBody>
                <div className="rounded-2xl border border-charcoal/10 bg-[#B48400]/[0.05] px-5 py-4">
                  <LegalBulletList
                    className="mt-0"
                    items={[
                      'use the Services for unlawful purposes;',
                      'attempt to gain unauthorized access to any part of the Services;',
                      'interfere with the operation or security of the platform;',
                      'distribute viruses, malware, or harmful code;',
                      'reverse engineer, decompile, or attempt to extract source code where prohibited by law;',
                      'impersonate another individual or organization;',
                      'use automated bots or scraping tools without written permission;',
                      'upload content that is illegal, abusive, defamatory, hateful, fraudulent, or infringes the rights of others;',
                      'misuse AI features to generate unlawful, misleading, or harmful content.',
                    ]}
                  />
                </div>
                <LegalBody>
                  Smipio may investigate suspected violations and take
                  appropriate action, including suspension or termination of user
                  accounts.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="intellectual-property"
                number="07"
                title="Intellectual Property"
              >
                <LegalBody>
                  Unless otherwise stated, all intellectual property rights in
                  the Services remain the exclusive property of Smipio or its
                  licensors.
                </LegalBody>
                <LegalBody>
                  This includes, but is not limited to:
                </LegalBody>
                <LegalBulletList
                  columns
                  items={[
                    'Micro Masterclasses',
                    'learning materials',
                    'videos',
                    'presentations',
                    'graphics',
                    'illustrations',
                    'logos',
                    'software',
                    'source code',
                    'databases',
                    'AI prompts',
                    'user interface designs',
                    'trademarks',
                    'documentation',
                  ]}
                />
                <LegalBody>
                  These materials are protected by applicable copyright,
                  trademark, and intellectual property laws. You are granted a
                  limited, non-exclusive, non-transferable, revocable license to
                  access and use the Services solely for your personal or
                  authorized organizational use.
                </LegalBody>
                <LegalBody>
                  You may not reproduce, distribute, modify, publish, sell,
                  sublicense, or commercially exploit any part of the Services
                  without prior written permission from Smipio.
                </LegalBody>
              </LegalSection>

              <LegalSection id="user-content" number="08" title="User Content">
                <LegalBody>
                  You retain ownership of content that you create, upload, or
                  submit through the Services. By submitting content, you grant
                  Smipio a non-exclusive, worldwide, royalty-free license to
                  host, process, display, store, reproduce, and use that content
                  solely for the purpose of operating, improving, securing, and
                  providing the Services.
                </LegalBody>
                <LegalBody>You represent that:</LegalBody>
                <LegalBulletList
                  items={[
                    'you own or have the necessary rights to submit the content;',
                    'your content does not violate applicable laws;',
                    'your content does not infringe the rights of any third party.',
                  ]}
                />
                <LegalBody>
                  Smipio reserves the right to remove content that violates these
                  Terms or applicable laws.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="artificial-intelligence"
                number="09"
                title="Artificial Intelligence"
              >
                <LegalBody>
                  Smipio Applications may include AI-powered features designed to
                  assist learning, productivity, career planning, and personal
                  transformation.
                </LegalBody>
                <LegalCallout>
                  AI-generated responses are intended to support users and
                  should not replace independent judgment or professional advice.
                </LegalCallout>
                <LegalBody>
                  Users remain responsible for evaluating, validating, and
                  deciding how to use AI-generated information. Smipio does not
                  guarantee that AI-generated outputs will always be accurate,
                  complete, current, or suitable for every purpose. Users must
                  not intentionally misuse AI features for unlawful, deceptive,
                  harmful, or unethical purposes.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="micro-masterclasses-and-educational-content"
                number="10"
                title="Micro Masterclasses and Educational Content"
              >
                <LegalBody>
                  Smipio Applications provide educational resources, including
                  Micro Masterclasses, learning materials, assessments, career
                  planning resources, productivity tools, AI-assisted guidance,
                  and related digital content. These resources are intended to
                  support learning, self-development, career growth, and personal
                  transformation.
                </LegalBody>
                <LegalBody>Unless otherwise stated:</LegalBody>
                <LegalBulletList
                  items={[
                    'educational content is provided for informational and educational purposes only;',
                    'completion of any course or Micro Masterclass does not guarantee employment, certification, promotion, business success, or financial gain;',
                    'individual outcomes depend upon personal effort, commitment, abilities, and external circumstances.',
                  ]}
                />
                <LegalBody>
                  Users may access educational content only in accordance with
                  their subscription or license. Unauthorized copying,
                  redistribution, recording, or commercial use of educational
                  content is strictly prohibited.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="subscriptions-payments-and-refunds"
                number="11"
                title="Subscriptions, Payments, and Refunds"
              >
                <LegalBody>
                  Certain Services may require payment through one-time purchases
                  or recurring subscriptions. Where applicable:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'prices will be displayed before purchase;',
                    'applicable taxes may be added where required by law;',
                    'payments shall be processed through authorized payment providers;',
                    'subscriptions may renew automatically unless cancelled before the renewal date.',
                  ]}
                />
                <LegalBody>
                  Users are responsible for maintaining valid payment
                  information. Failure to complete payment may result in
                  suspension or limitation of access to paid Services. Refund
                  requests shall be governed by the applicable refund policy
                  published by Smipio or by applicable consumer protection laws.
                  Smipio reserves the right to modify pricing, subscription
                  plans, or available features upon reasonable notice.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="service-availability"
                number="12"
                title="Service Availability"
              >
                <LegalBody>
                  Smipio strives to provide reliable, secure, and continuously
                  improving Services. However, uninterrupted availability cannot
                  be guaranteed. The Services may occasionally become unavailable
                  due to:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'scheduled maintenance;',
                    'software updates;',
                    'infrastructure upgrades;',
                    'internet or network failures;',
                    'security incidents;',
                    'events beyond our reasonable control.',
                  ]}
                />
                <LegalBody>
                  Smipio reserves the right to modify, enhance, replace, suspend,
                  or discontinue any feature or Service at any time. Where
                  reasonably practical, advance notice will be provided for
                  planned maintenance or significant service changes.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="data-integrity-and-loss-of-data"
                number="13"
                title="Data Integrity and Loss of Data"
              >
                <LegalBody>
                  Smipio takes reasonable measures to protect user information
                  through appropriate security controls, backups, monitoring, and
                  operational procedures. Despite these efforts, no software
                  system or cloud service can guarantee complete protection
                  against:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'hardware failures;',
                    'software defects;',
                    'cyberattacks;',
                    'accidental deletion;',
                    'data corruption;',
                    'communication failures;',
                    'unforeseen technical events.',
                  ]}
                />
                <LegalBody>
                  Users are encouraged to maintain independent copies of
                  important personal information, documents, and records stored
                  within the Services.
                </LegalBody>
                <LegalBody>
                  To the fullest extent permitted by applicable law, Smipio shall
                  not be liable for the loss, corruption, or unavailability of
                  user data resulting from circumstances beyond our reasonable
                  control. Nothing in these Terms excludes liability where such
                  exclusion is prohibited by applicable law.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="disclaimer-of-warranties"
                number="14"
                title="Disclaimer of Warranties"
              >
                <LegalBody>
                  The Services are provided on an{' '}
                  <Emphasized>&quot;as is&quot;</Emphasized> and{' '}
                  <Emphasized>&quot;as available&quot;</Emphasized> basis. To the
                  maximum extent permitted by applicable law, Smipio makes no
                  express or implied warranties regarding:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'uninterrupted availability;',
                    'error-free operation;',
                    'accuracy or completeness of information;',
                    'compatibility with every device or software environment;',
                    'fitness for a particular purpose;',
                    'merchantability;',
                    'non-infringement.',
                  ]}
                />
                <LegalBody>
                  Users acknowledge that they use the Services at their own
                  discretion and risk.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="limitation-of-liability"
                number="15"
                title="Limitation of Liability"
              >
                <LegalBody>
                  To the fullest extent permitted by applicable law, Smipio shall
                  not be liable for any:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'indirect damages;',
                    'incidental damages;',
                    'consequential damages;',
                    'special damages;',
                    'punitive damages;',
                    'loss of profits;',
                    'loss of business opportunities;',
                    'loss of goodwill;',
                    'loss of data;',
                    'interruption of business.',
                  ]}
                />
                <LegalBody>
                  arising from or related to the use of, or inability to use, the
                  Services. Where liability cannot be excluded, Smipio&apos;s
                  total aggregate liability shall not exceed the amount paid by
                  the user for the applicable Services during the twelve (12)
                  months immediately preceding the event giving rise to the
                  claim. Nothing in these Terms limits liability where such
                  limitation is prohibited under applicable law.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="indemnification"
                number="16"
                title="Indemnification"
              >
                <LegalBody>
                  You agree to indemnify, defend, and hold harmless Smipio, its
                  directors, employees, contractors, affiliates, partners, and
                  licensors from any claims, liabilities, damages, losses, costs,
                  or expenses arising out of:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'your violation of these Terms;',
                    'your misuse of the Services;',
                    'your infringement of intellectual property rights;',
                    'your violation of applicable laws;',
                    'content submitted by you;',
                    'unauthorized activities performed through your account.',
                  ]}
                />
                <LegalBody>
                  This obligation survives termination of your account.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="third-party-services"
                number="17"
                title="Third-Party Services"
              >
                <LegalBody>
                  Smipio Applications may integrate with or provide access to
                  third-party services, including payment gateways,
                  authentication providers, cloud infrastructure, analytics
                  services, AI providers, communication platforms, or external
                  websites. These third-party services operate under their own
                  terms and privacy policies.
                </LegalBody>
                <LegalBody>Smipio is not responsible for:</LegalBody>
                <LegalBulletList
                  items={[
                    'the availability of third-party services;',
                    'the accuracy of third-party information;',
                    'the content of third-party websites;',
                    'the privacy practices of third parties.',
                  ]}
                />
                <LegalBody>
                  Users access third-party services at their own discretion and
                  subject to the applicable terms of those providers.
                </LegalBody>
              </LegalSection>

              <LegalSection id="privacy" number="18" title="Privacy">
                <LegalBody>
                  Your use of Smipio Applications is also governed by the{' '}
                  <Link to="/privacy-policy" className={inlineLink}>
                    Smipio Privacy Policy
                  </Link>
                  . The Privacy Policy explains how personal information is
                  collected, used, stored, protected, and disclosed. By using the
                  Services, you acknowledge that you have read and understood the
                  Privacy Policy.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="suspension-and-termination"
                number="19"
                title="Suspension and Termination"
              >
                <LegalBody>
                  Smipio reserves the right to suspend, restrict, or terminate
                  access to the Services at any time if:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'these Terms are violated;',
                    'fraudulent or unlawful activity is suspected;',
                    'the security or integrity of the Services is threatened;',
                    'payment obligations remain outstanding;',
                    'continued access may cause harm to Smipio, other users, or third parties.',
                  ]}
                />
                <LegalBody>
                  Where reasonably practicable, Smipio may provide notice before
                  suspension or termination. However, immediate action may be
                  taken where necessary to protect the Services or comply with
                  legal obligations. Users may discontinue using the Services at
                  any time and may request account deletion in accordance with
                  the Privacy Policy.
                </LegalBody>
                <LegalBody>
                  Termination does not affect any rights or obligations that
                  accrued before termination, including payment obligations or
                  intellectual property protections.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="changes-to-the-services"
                number="20"
                title="Changes to the Services"
              >
                <LegalBody>
                  Smipio continuously improves its Services. Accordingly, we may:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'introduce new features;',
                    'modify existing functionality;',
                    'improve user experience;',
                    'remove outdated features;',
                    'enhance security;',
                    'integrate new technologies;',
                    'discontinue Services that are no longer supported.',
                  ]}
                />
                <LegalBody>
                  Where material changes significantly affect the user
                  experience, reasonable notice may be provided through the
                  platform or other appropriate communication channels.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="changes-to-these-terms"
                number="21"
                title="Changes to these Terms"
              >
                <LegalBody>
                  We may update these Terms from time to time to reflect:
                </LegalBody>
                <LegalBulletList
                  items={[
                    'changes in applicable laws or regulations;',
                    'improvements to our Services;',
                    'new features or products;',
                    'changes in business practices;',
                    'security requirements.',
                  ]}
                />
                <LegalBody>
                  The latest version of these Terms will always be available
                  within Smipio Applications. For material changes, users may be
                  required to review and accept the updated Terms before
                  continuing to use the Services. Continued use of the Services
                  after accepting updated Terms constitutes acceptance of the
                  revised agreement.
                </LegalBody>
              </LegalSection>

              <LegalSection id="governing-law" number="22" title="Governing Law">
                <LegalBody>
                  These Terms shall be governed by and interpreted in accordance
                  with the laws applicable in the jurisdiction in which Smipio
                  operates, unless otherwise required by applicable law. Users
                  are responsible for ensuring that their use of the Services
                  complies with the laws applicable in their own jurisdiction.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="dispute-resolution"
                number="23"
                title="Dispute Resolution"
              >
                <LegalBody>
                  We encourage users to contact Smipio first to resolve any
                  concerns or disputes amicably. If a dispute cannot be resolved
                  through good-faith discussions, it shall be resolved in
                  accordance with the applicable laws and procedures of the
                  governing jurisdiction specified in these Terms. Nothing in
                  this section limits any statutory rights available under
                  applicable consumer protection laws.
                </LegalBody>
              </LegalSection>

              <LegalSection id="force-majeure" number="24" title="Force Majeure">
                <LegalBody>
                  Smipio shall not be liable for any delay or failure to perform
                  its obligations where such delay or failure results from
                  circumstances beyond our reasonable control, including but not
                  limited to:
                </LegalBody>
                <LegalBulletList
                  columns
                  items={[
                    'natural disasters;',
                    'floods;',
                    'earthquakes;',
                    'fires;',
                    'epidemics or pandemics;',
                    'war;',
                    'terrorism;',
                    'civil unrest;',
                    'government actions;',
                    'power failures;',
                    'internet or telecommunications outages;',
                    'cyberattacks;',
                    'failures of third-party infrastructure or cloud service providers.',
                  ]}
                />
                <LegalBody>
                  Performance of affected obligations shall be suspended for the
                  duration of the force majeure event.
                </LegalBody>
              </LegalSection>

              <LegalSection id="severability" number="25" title="Severability">
                <LegalBody>
                  If any provision of these Terms is determined by a court or
                  competent authority to be invalid, illegal, or unenforceable,
                  the remaining provisions shall continue in full force and
                  effect. The invalid provision shall be interpreted or
                  replaced, where possible, in a manner that most closely
                  reflects its original intent while remaining legally
                  enforceable.
                </LegalBody>
              </LegalSection>

              <LegalSection id="no-waiver" number="26" title="No Waiver">
                <LegalBody>
                  Failure by Smipio to enforce any provision of these Terms shall
                  not constitute a waiver of that provision or any other rights
                  under these Terms. Any waiver shall be effective only if made
                  expressly in writing.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="entire-agreement"
                number="27"
                title="Entire Agreement"
              >
                <LegalBody>
                  These Terms, together with the Privacy Policy and any
                  additional policies or agreements expressly incorporated by
                  reference, constitute the complete agreement between you and
                  Smipio regarding your use of the Services. They supersede all
                  prior communications, understandings, representations, or
                  agreements relating to the Services.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="contact-information"
                number="28"
                title="Contact Information"
              >
                <LegalBody>
                  If you have questions regarding these Terms, please contact us
                  through the official support channels provided within Smipio
                  Applications or through our official website.
                </LegalBody>
              </LegalSection>

              <LegalSection
                id="acceptance-of-these-terms"
                number="29"
                title="Acceptance of these Terms"
              >
                <LegalBody>
                  By creating an account, signing in for the first time, or
                  continuing to use the Services after accepting these Terms, you
                  acknowledge that you have:
                </LegalBody>
                <div className="rounded-2xl border border-[#B48400]/25 bg-[#B48400]/[0.07] px-5 py-4">
                  <LegalBulletList
                    className="mt-0"
                    items={[
                      'read these Terms;',
                      'understood these Terms;',
                      'agreed to be legally bound by these Terms.',
                    ]}
                  />
                </div>
                <LegalBody>
                  If you do not agree with these Terms, you must discontinue use
                  of the Services.
                </LegalBody>
              </LegalSection>

              <section
                id="guiding-principle"
                aria-labelledby="guiding-principle-heading"
                className="mt-4 rounded-[24px] border border-white/50 bg-[#fef0d5]/90 px-6 py-10 shadow-[0_18px_50px_-36px_rgba(31,41,55,0.14)] md:px-10 md:py-12"
              >
                <p
                  className="text-[0.7rem] font-semibold tracking-[0.28em]"
                  style={{ color: '#B48400' }}
                >
                  30 — GUIDING PRINCIPLE
                </p>
                <h2
                  id="guiding-principle-heading"
                  className="mt-3 text-2xl font-semibold tracking-tight text-charcoal md:text-3xl"
                >
                  Guiding Principle
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/72 md:text-lg md:leading-[1.75]">
                  <p>
                    At Smipio, we believe{' '}
                    <Emphasized>
                      technology should empower humanity—not replace it.
                    </Emphasized>{' '}
                    Our mission is to help individuals become digitally wise,
                    unlock Human Intelligence, navigate meaningful careers, and
                    execute purposeful missions with clarity, confidence, and
                    discipline. Together, let us transform wisely and{' '}
                    <Emphasized>thrive with AI—with dignity.</Emphasized>
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
