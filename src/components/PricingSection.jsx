import PricingCard from './PricingCard.jsx'
import { images } from '../lib/images.js'
import { FadeIn } from './motion.jsx'

const plans = [
  {
    slug: 'aware',
    name: 'AWARE',
    description: 'Build self-awareness and understand what drives you.',
    features: [
      'Reflection & Journaling',
      'Mood & Pattern Tracking',
      'Personal Insights',
      'Basic Goal Setting',
    ],
    cta: 'Start Aware',
  },
  {
    slug: 'ignite',
    name: 'IGNITE',
    description: 'Learn faster and transform how you think.',
    features: [
      'All in Aware',
      'Micro-learning Modules',
      'Multi-sensory Lessons',
      'Memory Boosters',
      'Progress Tracking',
    ],
    cta: 'Start Ignite',
  },
  {
    slug: 'grow',
    name: 'GROW',
    description: 'Grow your skills and build a meaningful career.',
    features: [
      'All in Ignite',
      'Career Roadmap',
      'Skill Assessments',
      'Competency Tracking',
      'Personalized Path',
    ],
    cta: 'Start Grow',
  },
  {
    slug: 'achieve',
    name: 'ACHIEVE',
    description: 'Achieve your goals and make a lasting impact.',
    features: [
      'All in Grow',
      'Mission Planning',
      'Project Tracking',
      'Team Collaboration',
      'Advanced Analytics',
    ],
    cta: 'Start Achieve',
  },
]

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-transparent py-24 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.35em] text-[#9A9A9A]">
            Pricing
          </p>

          <h2 className="mt-5 font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-[#1F2937]">
            Choose the plan that fits your journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B7280] md:text-lg">
            Unlock the full power of Smipio and build the life you envision.
          </p>
        </FadeIn>

        <div className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none lg:mt-20 lg:grid-cols-4 lg:gap-7 [&::-webkit-scrollbar]:hidden">
          {plans.map((plan, index) => (
            <FadeIn
              key={plan.slug}
              delay={index * 0.08}
              className="h-full min-w-[86vw] shrink-0 snap-center md:min-w-0"
            >
              <PricingCard
                logo={images.pricing[plan.slug]}
                name={plan.name}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
