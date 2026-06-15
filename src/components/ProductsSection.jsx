import ProductCard from './ProductCard.jsx'
import { images } from '../lib/images.js'
import { FadeIn } from './motion.jsx'

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
      className="relative bg-transparent pt-10 pb-20 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="text-[13px] font-medium uppercase tracking-[0.35em] text-[#9A9A9A]">
            Products
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-[#1F2937]">
            A curated ecosystem for intentional growth
          </h2>
        </FadeIn>

        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:gap-12 lg:gap-14">
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
