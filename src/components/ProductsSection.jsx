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
    heading: 'Discover Yourself',
    description:
      'Become aware of who you are, what drives you, and how to align your life and career with purpose.',
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
      'In the age of AI, unlock your human intelligence, one tiny learning at a time.',
  },
  {
    slug: 'grow',
    number: '03',
    name: 'GROW',
    accent: '#3D84E6',
    showNumber: false,
    showDivider: false,
    heading: 'Navigate Your Career',
    description:
      'Gain clarity, bridge your skill gap through personalized learning, and become career-ready for the evolving world of work.',
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
      'Turn your aspirations into focused mission, meaningful actions, and steady progress.',
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
            <div className="mt-10 flex w-full flex-col items-center gap-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-12 md:mt-14 md:gap-16">
              <div className="flex shrink-0 items-center justify-center">
                <img
                  src={images.logo.transformMain}
                  alt="Smipio Transform"
                  className="h-auto w-auto max-h-[5.25rem] max-w-[8.5rem] object-contain sm:max-h-[5.75rem] sm:max-w-[9.5rem] md:max-h-[6.5rem] md:max-w-[10.5rem]"
                  width={320}
                  height={140}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="min-w-0 max-w-xl text-center sm:text-left">
                <h2 className="text-balance text-[clamp(1.2rem,2.1vw,1.75rem)] font-bold leading-snug tracking-tight text-charcoal">
                  The Wise Navigator to Be Digitally Wise
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
