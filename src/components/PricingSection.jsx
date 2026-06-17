import PricingCard from './PricingCard.jsx'
import { images } from '../lib/images.js'
import { FadeIn } from './motion.jsx'
import { sectionHeaderGap, sectionLabel, sectionSpacing, sectionTitle } from './storyLayout.js'

const plans = [
  {
    slug: 'aware',
    name: '',
    description: 'Build self-awareness and understand what drives you.',
    features: [
      'Reflection & Journaling',
      'Mood & Pattern Tracking',
      'Personal Insights',
      'Basic Goal Setting',
    ],
    cta: 'Get Started',
    bordered: true,
  },
  {
    slug: 'ignite',
    name: '',
    description: 'Learn faster and transform how you think.',
    features: [
      'All in Aware',
      'Micro-learning Modules',
      'Multi-sensory Lessons',
      'Memory Boosters',
      'Progress Tracking',
    ],
    cta: 'Start Ignite',
    bordered: true,
  },
  {
    slug: 'grow',
    name: '',
    description: 'Grow your skills and build a meaningful career.',
    features: [
      'All in Ignite',
      'Career Roadmap',
      'Skill Assessments',
      'Competency Tracking',
      'Personalized Path',
    ],
    cta: 'Start Grow',
    bordered: true,
  },
  {
    slug: 'achieve',
    name: '',
    description: 'Achieve your goals and make a lasting impact.',
    features: [
      'All in Grow',
      'Mission Planning',
      'Project Tracking',
      'Team Collaboration',
      'Advanced Analytics',
    ],
    cta: 'Start Achieve',
    bordered: true,
  },
]

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className={`relative bg-transparent ${sectionSpacing}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className={sectionLabel}>
            Pricing
          </p>

          <h2 className={`mt-5 ${sectionTitle.replace('font-bold', 'font-semibold')}`}>
            Choose the plan that fits your journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B7280] md:text-lg">
            Unlock the full power of Smipio and build the life you envision.
          </p>
        </FadeIn>

        <div className={`${sectionHeaderGap} flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:items-stretch md:gap-6 lg:grid-cols-4 lg:gap-7`}>
          {plans.map((plan, index) => (
            <FadeIn
              key={plan.slug}
              delay={index * 0.08}
              className="h-full w-full max-w-[18.5rem] md:max-w-none"
            >
              <PricingCard
                logo={images.pricing[plan.slug]}
                slug={plan.slug}
                name={plan.name}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                bordered={plan.bordered}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
