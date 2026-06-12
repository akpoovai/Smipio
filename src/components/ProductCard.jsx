import { ArrowRight } from 'lucide-react'

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
      className="group grid items-center gap-10 rounded-[24px] bg-white/50 p-8 shadow-[0_18px_50px_-36px_rgba(31,41,55,0.14)] transition-all duration-300 ease-out hover:bg-white/78 hover:shadow-[0_32px_70px_-28px_rgba(31,41,55,0.2)] md:gap-12 md:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:p-12"
      style={{ '--product-accent': accent }}
    >
      <div className="flex flex-col">
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
            className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.02em]"
            style={{ color: accent }}
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
          className={`text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-[#1F2937] ${showDivider ? 'mt-8' : 'mt-6'}`}
        >
          {heading}
        </h4>

        <p className="mt-5 max-w-xl text-base leading-[1.75] text-[#6B7280] md:text-lg">
          {description}
        </p>

        <a
          href={href}
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-[20px] px-7 py-4 text-[15px] font-medium text-white shadow-[0_14px_30px_-16px_var(--product-accent)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_36px_-14px_var(--product-accent)]"
          style={{ backgroundColor: accent }}
        >
          Get Started
          <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
        </a>
      </div>

      <div className="flex items-center justify-center lg:justify-end">
        <img
          src={illustration}
          alt={`${name} product illustration`}
          className="h-auto w-full max-h-[280px] max-w-md object-contain drop-shadow-[0_24px_44px_rgba(31,41,55,0.12)] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:max-h-[320px] lg:max-h-[400px] lg:max-w-lg"
          width={640}
          height={480}
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  )
}
