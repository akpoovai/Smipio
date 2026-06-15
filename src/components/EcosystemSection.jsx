import { FadeIn } from './motion.jsx'
import HubInfographic from './HubInfographic.jsx'

const wise = {
  centerTitle: 'DIGITALLY WISE\nECOSYSTEM',
  top: 'INDIVIDUAL\nBUILD COMPETENCE WITH CLARITY',
  right: 'SOCIETY\nEMPOWER PEOPLE WITH INSIGHT',
  bottom: 'EDUCATION\nENABLE LEARNING FOR EMPLOYABILITY',
  left: 'WORKPLACE\nFIND TALENT TO CREATE VALUE',
}

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-28 premium:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-teal/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -right-[15%] bottom-[5%] h-[460px] w-[460px] rounded-full bg-gradient-to-bl from-gold/25 via-transparent to-violet-200/15 blur-[110px]" />
      </div>

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

        <FadeIn delay={0.1} className="mt-16 flex justify-center">
          <div className="relative w-full max-w-3xl px-4 sm:max-w-4xl lg:max-w-[42rem]">
            <HubInfographic {...wise} variant="wise" size="large" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
