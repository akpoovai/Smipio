import ProductCard from './ProductCard.jsx'
import { images } from '../lib/images.js'
import { FadeIn } from './motion.jsx'

const products = [
  {
    slug: 'aware',
    number: '01',
    name: 'Aware',
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
    name: 'Ignite',
    accent: '#F0A128',
    showNumber: false,
    showDivider: false,
    heading: 'Unlock Human Intelligence',
    description:
      'Power yourself through multi-sensory micro-learning that sticks long after the lesson ends.',
  },
  {
    slug: 'grow',
    number: '03',
    name: 'Grow',
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
    name: 'Achieve',
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
      className="relative bg-transparent py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.35em] text-[#9A9A9A]">
            Products
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#1F2937]">
            A curated ecosystem for intentional growth
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {products.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.1}>
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
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
