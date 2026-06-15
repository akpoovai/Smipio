import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]
const cardBackground = '#f9f0e3'

/**
 * @param {{
 *   logo: string
 *   slug?: string
 *   name: string
 *   description: string
 *   features: string[]
 *   cta: string
 *   href?: string
 *   bordered?: boolean
 * }} props
 */
export default function PricingCard({
  logo,
  slug = '',
  name,
  description,
  features,
  cta,
  href = '#footer',
  bordered = false,
}) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease }}
      className={`group flex h-full min-h-[32rem] flex-col rounded-[28px] p-8 shadow-[0_16px_48px_-36px_rgba(31,41,55,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-32px_rgba(31,41,55,0.12)] lg:p-9 ${bordered ? 'border border-white' : ''}`}
      style={{ backgroundColor: cardBackground }}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt={
            name
              ? `${name} logo`
              : `Smipio ${slug.charAt(0).toUpperCase()}${slug.slice(1)} logo`
          }
          className="h-24 w-auto max-w-[200px] object-contain"
          width={200}
          height={96}
          loading="lazy"
          decoding="async"
        />

        {name ? (
          <>
            <p className="mt-6 text-[15px] font-medium tracking-[6px] text-[#1F2937]">
              {name}
            </p>

            <div className="mt-4 h-[3px] w-10 rounded-full bg-[#59B67A]" aria-hidden />
          </>
        ) : null}
      </div>

      <p className="mt-6 text-center text-[15px] leading-relaxed text-[#6B7280]">
        {description}
      </p>

      <ul className="mt-8 flex flex-1 flex-col gap-3.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-left text-[14px] leading-snug text-[#4B5563]"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#59B67A]/12 text-[#59B67A]">
              <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <p className="flex items-end justify-center gap-1 text-[#1F2937]">
          <span className="pb-1 text-xl font-semibold">₹</span>
          <span className="text-[2.125rem] font-semibold leading-none tracking-tight">
            399
          </span>
          <span className="pb-1.5 text-sm font-medium text-[#9CA3AF]">
            / month
          </span>
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href={href}
          className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-[#2DB988] px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#28a67a]"
        >
          {cta}
        </a>
      </div>
    </motion.article>
  )
}
