import { images } from '../lib/images.js'
import WhySmipioIllustration from './WhySmipioIllustration.jsx'
import {
  storyBodyStack,
  storyContainer,
  storyGrid,
  storyImageCol,
  storyTextCol,
} from './storyLayout.js'

export default function WhySmipioSection() {
  return (
    <div
      id="why-smipio"
      className="relative overflow-hidden bg-transparent"
      aria-label="Why Smipio"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <svg
          className="absolute inset-0 h-full w-full text-charcoal/[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="why-smipio-network"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="1.2" fill="currentColor" />
              <path
                d="M4 4 H56 M4 4 V56"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-smipio-network)" />
        </svg>
        <div className="absolute left-1/2 top-1/2 h-[min(34rem,90vw)] w-[min(34rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-charcoal/10" />
        <div className="absolute left-1/2 top-1/2 h-[min(26rem,70vw)] w-[min(26rem,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-charcoal/10" />
      </div>

      <div className="relative z-10 min-w-0">
        <div className={storyContainer}>
          <div className={storyGrid}>
            <div className={`${storyTextCol} min-w-0`}>
              <div className="inline-flex w-fit self-start items-center rounded-full border border-sandal/45 bg-white/28 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[4px] text-black backdrop-blur-sm">
                Why Smipio?
              </div>

              <h2
                className="mt-6 max-w-2xl text-balance text-[1.85rem] font-light leading-[1.08] tracking-tight sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.5rem]"
                style={{ color: '#B48400' }}
              >
                THE WORLD IS CHANGING,
                <br />
                ARE YOU EVOLVING?
              </h2>

              <div className={storyBodyStack}>
                <p>
                  AI is transforming careers, education, workplaces, and society.
                  Yet many remain trapped in rote learning, mindless digital
                  habits, and unclear career direction.
                </p>
              </div>
            </div>

            <div className={`${storyImageCol} min-w-0`}>
              <WhySmipioIllustration
                src={images.hero.whySmipioSection}
                alt="Person reflecting on direction and awareness"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
