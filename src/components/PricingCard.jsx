import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

/**
 * @param {{
 *   logo: string
 *   name: string
 *   description: string
 *   features: string[]
 *   cta: string
 *   href?: string
 * }} props
 */
export default function PricingCard({
  logo,
  name,
  description,
  features,
  cta,
  href = '#footer',
}) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease }}
      className="group flex h-full min-h-[32rem] flex-col rounded-[28px] border border-[#E8E4DC] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(31,41,55,0.18)] transition-shadow duration-300 hover:shadow-[0_32px_80px_-32px_rgba(31,41,55,0.22)] lg:p-9"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-20 w-auto max-w-[140px] object-contain"
          width={140}
          height={80}
          loading="lazy"
          decoding="async"
        />

        <p className="mt-6 text-[15px] font-medium tracking-[6px] text-[#1F2937]">
          {name}
        </p>

        <div className="mt-4 h-[3px] w-10 rounded-full bg-[#59B67A]" aria-hidden />
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
          <span className="pb-1 text-2xl font-bold">₹</span>
          <span className="text-[2.75rem] font-bold leading-none tracking-tight">
            399
          </span>
          <span className="pb-1.5 text-sm font-medium text-[#9CA3AF]">
            / month
          </span>
        </p>
        <p className="mt-2 text-[13px] text-[#9CA3AF]">Billed monthly</p>
      </div>

      <a
        href={href}
        className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#59B67A] text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#4da368]"
      >
        {cta}
      </a>
    </motion.article>
  )
}
