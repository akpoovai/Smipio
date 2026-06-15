import { motion } from 'framer-motion'
import { images } from '../lib/images.js'
import WhySmipioIllustration from './WhySmipioIllustration.jsx'
import {
  storyBodyStack,
  storyContainer,
  storyGrid,
  storyHeading,
  storyImageCol,
  storyTextCol,
} from './storyLayout.js'

const ease = [0.22, 1, 0.36, 1]

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function WhySmipioSection() {
  return (
    <div
      id="why-smipio"
      className="relative bg-transparent py-8 md:py-16 lg:py-20"
      aria-label="Why Smipio"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
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
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-charcoal/10" />
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-charcoal/10" />
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-teal/8 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-gold/12 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className={storyContainer}>
          <div className={storyGrid}>
          <Reveal className={storyTextCol} delay={0.05}>
            <div className="inline-flex items-center rounded-full border border-sandal/45 bg-white/58 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[4px] text-brown/80 backdrop-blur-xl">
              Why Smipio?
            </div>

            <h2 className={storyHeading}>
              The World Is
              <br />
              Changing Faster
              <br />
              Than Human
              <br />
              Awareness
            </h2>

            <div className={storyBodyStack}>
              <p>
                AI is transforming careers, education, workplaces, and society.
              </p>
              <p>
                Yet many remain trapped in rote learning, mindless digital
                habits, and unclear career direction.
              </p>
              <p>
                Smipio helps people become digitally wise, transform
                consciously, and thrive in the AI era.
              </p>
            </div>
          </Reveal>

          <Reveal className={storyImageCol}>
            <WhySmipioIllustration
              src={images.hero.whySmipioSection}
              alt="Person reflecting on direction and awareness"
            />
          </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
