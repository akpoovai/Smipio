import { ArrowRight } from 'lucide-react'

const productNameColor = '#F0A128'
const cardBackground = '#f8ebdb'

/**
 * @param {{
 *   number: string
 *   total: string
 *   name: string
 *   accent: string
 *   heading: string
 *   description: string
 *   illustration: string
 *   icon?: string
 *   showNumber?: boolean
 *   showDivider?: boolean
 *   href?: string
 * }} props
 */
export default function ProductCard({
  number,
  total,
  name,
  accent,
  heading,
  description,
  illustration,
  icon,
  showNumber = true,
  showDivider = true,
  href = '#pricing',
}) {
  return (
    <article
      className="group mx-auto grid w-full max-w-5xl items-center gap-6 rounded-[24px] border border-white p-6 transition-all duration-300 ease-out hover:-translate-y-2 md:gap-8 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10 lg:p-9"
      style={{ '--product-accent': accent, backgroundColor: cardBackground }}
    >
      <div className="order-2 flex flex-col lg:order-1">
        {showNumber ? (
          <p
            className="text-[14px] font-normal tracking-[4px] text-[#9A9A9A]"
            aria-label={`Product ${number} of ${total}`}
          >
            {number} / {total}
          </p>
        ) : null}

        <div
          className={`flex items-center gap-4 ${showNumber ? 'mt-6' : ''}`}
        >
          {icon ? (
            <img
              src={icon}
              alt=""
              className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              aria-hidden
            />
          ) : null}
          <h3
            className="font-['Calibri','Segoe_UI','Helvetica_Neue',sans-serif] text-[2.5rem] font-light leading-[0.95] tracking-[0.2em]"
            style={{ color: productNameColor }}
          >
            {name}
          </h3>
        </div>

        {showDivider ? (
          <div
            className="mt-5 h-[5px] w-[60px] rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
        ) : null}

        <h4
          className={`text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-[#1F2937] ${showDivider ? 'mt-8' : 'mt-6'}`}
        >
          {heading}
        </h4>

        <p className="mt-5 max-w-lg text-base leading-[1.75] text-[#6B7280] md:text-lg">
          {description}
        </p>

        <a
          href={href}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#2DB988] px-5 py-2.5 text-[13px] font-medium text-white shadow-[0_10px_24px_-14px_rgba(45,185,136,0.45)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#28a67a]"
        >
          Get Started
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
        </a>
      </div>

      <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
        <img
          src={illustration}
          alt={`${name} product illustration`}
          className="h-auto w-full max-h-[240px] max-w-sm object-contain drop-shadow-[0_24px_44px_rgba(31,41,55,0.12)] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:max-h-[280px] lg:max-h-[320px] lg:max-w-md"
          width={640}
          height={480}
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  )
}
