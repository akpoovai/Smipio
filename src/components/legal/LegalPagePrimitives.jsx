import { ChevronDown } from 'lucide-react'
import { FadeIn } from '../motion.jsx'
import { sectionLabel } from '../storyLayout.js'

export function LegalSectionHeading({ number, title, id }) {
  return (
    <div className="mb-5">
      <p
        className="text-[0.7rem] font-semibold tracking-[0.28em]"
        style={{ color: '#B48400' }}
      >
        {number}
      </p>
      <h2
        id={id}
        className="mt-2 scroll-mt-28 text-2xl font-semibold tracking-tight text-charcoal md:scroll-mt-32 md:text-[1.75rem]"
      >
        {title}
      </h2>
    </div>
  )
}

export function LegalBody({ children, className = '' }) {
  return (
    <p
      className={`text-base leading-relaxed text-charcoal/72 md:text-[1.05rem] md:leading-[1.75] ${className}`}
    >
      {children}
    </p>
  )
}

export function LegalBulletList({ items, columns = false, className = '' }) {
  return (
    <ul
      className={`mt-3 space-y-2.5 ${
        columns ? 'md:columns-2 md:gap-x-10 md:space-y-0' : ''
      } ${className}`}
    >
      {items.map((item) => (
        <li
          key={typeof item === 'string' ? item : item.key}
          className={`flex gap-3 text-base leading-relaxed text-charcoal/72 md:text-[1.05rem] md:leading-[1.75] ${
            columns ? 'md:mb-2.5 md:break-inside-avoid' : ''
          }`}
        >
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: '#B48400' }}
            aria-hidden
          />
          <span>{typeof item === 'string' ? item : item.content}</span>
        </li>
      ))}
    </ul>
  )
}

export function LegalSection({ id, number, title, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-b border-charcoal/10 py-10 last:border-b-0 md:py-12 ${className}`}
    >
      <LegalSectionHeading
        number={number}
        title={title}
        id={`${id}-heading`}
      />
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export function LegalCallout({ children }) {
  return (
    <aside className="rounded-2xl border border-[#B48400]/25 bg-[#B48400]/[0.07] px-5 py-4">
      <p className="text-base leading-relaxed text-charcoal/80 md:text-[1.05rem] md:leading-[1.75]">
        {children}
      </p>
    </aside>
  )
}

export function LegalToc({
  items,
  activeId,
  onSelect,
  ariaLabel = 'Page sections',
  className = '',
}) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-charcoal/45">
        Contents
      </p>
      <ol className="space-y-0.5">
        {items.map((item) => {
          const active = activeId === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={`group relative flex w-full items-start gap-2.5 rounded-xl px-2.5 py-1.5 text-left transition ${
                  active
                    ? 'bg-white/45 text-charcoal'
                    : 'text-charcoal/65 hover:bg-white/30 hover:text-charcoal'
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full transition ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                  }`}
                  style={{ backgroundColor: '#B48400' }}
                  aria-hidden
                />
                <span
                  className={`mt-0.5 shrink-0 text-[0.62rem] font-semibold tracking-[0.16em] transition ${
                    active ? '' : 'text-charcoal/40 group-hover:text-charcoal/60'
                  }`}
                  style={active ? { color: '#B48400' } : undefined}
                >
                  {item.number}
                </span>
                <span
                  className={`text-[0.8125rem] leading-snug ${
                    active ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function LegalPageHero({
  eyebrow,
  title,
  description,
  version,
  effectiveDate,
}) {
  return (
    <FadeIn className="w-full text-center">
      <p className={sectionLabel}>{eyebrow}</p>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-charcoal md:text-5xl lg:text-[3.25rem]">
        {title}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-charcoal/68 md:text-lg">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-charcoal/60">
        <p>
          <span className="font-medium text-charcoal/80">Version:</span>{' '}
          {version}
        </p>
        <p>
          <span className="font-medium text-charcoal/80">Effective Date:</span>{' '}
          {effectiveDate}
        </p>
      </div>
    </FadeIn>
  )
}

export function LegalMobileToc({
  open,
  onToggle,
  activeLabel,
  items,
  activeId,
  onSelect,
  ariaLabel,
}) {
  return (
    <div className="rounded-2xl border border-white/45 bg-white/35 shadow-sm backdrop-blur-md lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-charcoal/45">
            On this page
          </p>
          <p className="mt-1 text-sm font-medium text-charcoal">{activeLabel}</p>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-charcoal/60 transition ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="max-h-[min(60vh,28rem)] overflow-y-auto border-t border-charcoal/10 px-2 pb-3 pt-2 legal-toc-scroll">
          <LegalToc
            items={items}
            activeId={activeId}
            onSelect={onSelect}
            ariaLabel={ariaLabel}
          />
        </div>
      )}
    </div>
  )
}

export function LegalDesktopToc({ items, activeId, onSelect, ariaLabel }) {
  return (
    <aside className="relative hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-white/45 bg-white/30 p-3 shadow-sm backdrop-blur-md legal-toc-scroll">
        <LegalToc
          items={items}
          activeId={activeId}
          onSelect={onSelect}
          ariaLabel={ariaLabel}
        />
      </div>
    </aside>
  )
}
