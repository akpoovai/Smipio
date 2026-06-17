import ProductCard from './ProductCard.jsx'
import { images } from '../lib/images.js'
import { FadeIn } from './motion.jsx'
import { sectionLabel, sectionSpacingAfterHero } from './storyLayout.js'

const products = [
  {
    slug: 'aware',
    number: '01',
    name: 'AWARE',
    accent: '#59B67A',
    showNumber: false,
    showDivider: false,
    heading: 'Know Who You Are',
    description:
      'Build self-direction through reflection — understand your patterns, values, and what truly drives you.',
  },
  {
    slug: 'transform',
    number: '02',
    name: 'IGNITE',
    accent: '#F0A128',
    showNumber: false,
    showDivider: false,
    heading: 'Unlock Human Intelligence',
    bordered: true,
    description:
      'Power yourself through multi-sensory micro-learning that sticks long after the lesson ends.',
  },
  {
    slug: 'grow',
    number: '03',
    name: 'GROW',
    accent: '#3D84E6',
    showNumber: false,
    showDivider: false,
    heading: 'Navigate Your Happy Career',
    description:
      "Progress with purpose and direction — build a career that's genuinely yours.",
  },
  {
    slug: 'achieve',
    number: '04',
    name: 'ACHIEVE',
    accent: '#D95A2B',
    showNumber: false,
    showDivider: false,
    heading: 'Make Your Mission Possible',
    description:
      'Execute thoughtfully with clarity — turn intentions into real, lasting outcomes.',
  },
]

const total = '04'

export default function ProductsSection() {
  return (
    <section
      id="products"
      className={`relative bg-transparent ${sectionSpacingAfterHero}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 md:gap-12 lg:gap-14">
          <FadeIn className="w-full">
            <p className={`text-center ${sectionLabel}`}>
              Products
            </p>
            <div className="mt-4 flex w-full flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8 md:gap-10">
              <div className="flex shrink-0 items-center justify-center">
                <img
                  src={images.logo.transformMain}
                  alt="Smipio Transform"
                  className="h-auto w-[8.75rem] max-w-full object-contain sm:w-[9.75rem] md:w-[10.75rem]"
                  width={280}
                  height={120}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="min-w-0 max-w-xl text-center sm:text-left">
                <h2 className="text-balance text-[clamp(1.2rem,2.1vw,1.75rem)] font-bold leading-snug tracking-tight text-charcoal">
                  The Wise Navigator to be digitally wise
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280] md:text-base">
                  Smipio Transform helps you become aware, ignite human intelligence,
                  grow in the right career path, and consistently achieve true success
                  with clarity, confidence, and ease.
                </p>
              </div>
            </div>
          </FadeIn>

          {products.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.1} className="w-full">
              <ProductCard
                number={product.number}
                total={total}
                name={product.name}
                accent={product.accent}
                heading={product.heading}
                description={product.description}
                illustration={images.products[product.slug].illustration}
                icon={images.products[product.slug].nameIcon}
                showNumber={product.showNumber}
                showDivider={product.showDivider}
                bordered={product.bordered}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
