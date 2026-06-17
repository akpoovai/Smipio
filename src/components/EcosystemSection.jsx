import { FadeIn } from './motion.jsx'
import HubInfographic from './HubInfographic.jsx'
import { sectionHeaderGap, sectionSpacing, sectionTitle } from './storyLayout.js'

const wise = {
  centerTitle: 'DIGITALLY WISE\nECOSYSTEM',
  top: 'INDIVIDUAL\nBUILD COMPETENCE WITH CLARITY',
  right: 'SOCIETY\nEMPOWER PEOPLE WITH INSIGHT',
  bottom: 'EDUCATION\nENABLE LEARNING FOR EMPLOYABILITY',
  left: 'WORKPLACE\nFIND TALENT TO CREATE VALUE',
}

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className={`relative overflow-hidden ${sectionSpacing}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-teal/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -right-[15%] bottom-[5%] h-[460px] w-[460px] rounded-full bg-gradient-to-bl from-gold/25 via-transparent to-violet-200/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className={sectionTitle.replace('font-bold', 'font-semibold')}>
            The Digitally Wise Ecosystem
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/68 md:text-lg">
            To Connect Workplace, Individual, Society and Education
            <br />
            Unleash Human Excellence
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className={`${sectionHeaderGap} flex justify-center`}>
          <div className="relative w-full max-w-3xl px-4 sm:max-w-4xl lg:max-w-[42rem]">
            <HubInfographic {...wise} variant="wise" size="large" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
