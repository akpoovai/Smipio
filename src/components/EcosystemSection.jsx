import { motion } from 'framer-motion'
import { FadeIn, Float } from './motion.jsx'
import HubInfographic from './HubInfographic.jsx'

const ease = [0.22, 1, 0.36, 1]

const wise = {
  centerTitle: 'DIGITALLY WISE ECOSYSTEM',
  top: 'INDIVIDUAL\nBUILD COMPETENCE WITH CLARITY',
  right: 'SOCIETY\nEMPOWER PEOPLE WITH INSIGHT',
  bottom: 'EDUCATION\nENABLE LEARNING FOR EMPLOYABILITY',
  left: 'WORKPLACE\nFIND TALENT TO CREATE VALUE',
}

const vicious = {
  centerTitle: 'THE VICIOUS CYCLE OF STAGNATION',
  top: 'INDIVIDUAL\nLACK OF CLARITY, UNDEREMPLOYMENT',
  right: 'SOCIETY\nHERD MENTALITY, STRESSFUL LIFE',
  bottom: 'EDUCATION\nROTE LEARNING, LOW EMPLOYABILITY',
  left: 'WORKPLACE\nTALENT SCARCITY, LOW-VALUE JOBS',
}

function PlaceholderBoard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease }}
      className="grain relative overflow-hidden rounded-[2rem] border border-white/55 bg-white/30 p-6 shadow-xl backdrop-blur-2xl premium:border-white/65 premium:bg-white/40 premium:p-8 premium:shadow-2xl premium:ring-1 premium:ring-white/40"
    >
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-charcoal/20 bg-charcoal/[0.035]">
        <p className="px-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/40">
          Placeholder visual
        </p>
      </div>
    </motion.div>
  )
}

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-28 premium:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-teal/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -right-[15%] bottom-[5%] h-[460px] w-[460px] rounded-full bg-gradient-to-bl from-gold/25 via-transparent to-violet-200/15 blur-[110px]" />
      </div>

      <Float
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-28 w-36 rounded-3xl border border-white/45 bg-white/25 shadow-2xl backdrop-blur-2xl lg:block"
        amplitude={12}
      />
      <Float
        className="pointer-events-none absolute bottom-[24%] left-[6%] hidden h-20 w-20 rounded-2xl border border-gold/35 bg-gradient-to-br from-white/50 to-teal/10 shadow-xl backdrop-blur-xl lg:block"
        amplitude={10}
        duration={6.5}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-[3rem]">
            Break the Cycle of Stagnation
          </h2>
          <p className="mt-5 text-lg font-medium text-charcoal/80 md:text-xl">
            With Digitally Wise Ecosystem
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-10 max-w-4xl text-center text-base font-medium leading-relaxed text-charcoal md:text-lg">
            Digitally Wise Ecosystem Breaks the Cycle of Stagnation
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <FadeIn delay={0.05}>
              <PlaceholderBoard />
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] border border-white/50 bg-white/35 p-8 pb-12 shadow-[0_35px_100px_-50px_rgba(31,41,55,0.5)] backdrop-blur-2xl premium:border-white/60 premium:bg-white/42 premium:p-10 premium:pb-14 premium:shadow-[0_44px_110px_-48px_rgba(31,41,55,0.48)] premium:backdrop-blur-3xl premium:ring-1 premium:ring-white/45">
              <div className="pointer-events-none absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-teal/15 via-transparent to-gold/20 opacity-80" />
              <div className="relative mt-2">
                <HubInfographic {...wise} variant="wise" />
              </div>
            </div>
          </FadeIn>

          <div className="order-3">
            <FadeIn delay={0.12}>
              <PlaceholderBoard />
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mt-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-charcoal/10 bg-charcoal/[0.06] p-10 shadow-inner backdrop-blur-xl premium:border-charcoal/15 premium:bg-charcoal/[0.08] premium:p-12 premium:shadow-lg premium:ring-1 premium:ring-white/20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-200/35 via-transparent to-amber-200/25 opacity-70" />
            <div className="relative flex justify-center px-4">
              <HubInfographic {...vicious} variant="vicious" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
