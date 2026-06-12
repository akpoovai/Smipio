import { ArrowRight, CirclePlay } from 'lucide-react'
import { motion } from 'framer-motion'
import { images } from '../lib/images.js'
import WhySmipioSection from './WhySmipioSection.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28">
      <motion.div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ y: 16, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease }}
          className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-teal/12 blur-3xl"
        />
        <motion.div
          initial={{ y: 16, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease }}
          className="absolute right-0 top-28 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl"
        />
        <motion.div
          initial={{ y: 16, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease }}
          className="absolute bottom-12 left-1/3 h-72 w-72 rounded-full bg-cream/55 blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10 lg:pb-32 premium:pb-28">
        <motion.div className="grid gap-20 lg:gap-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] lg:gap-16">
            <motion.div
              initial={{ y: 16, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center rounded-full border border-sandal/45 bg-cream/88 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brown/80">
                Architect Yourself Wisely
              </div>
              <h1 className="mt-6 text-balance text-[3rem] font-semibold leading-[1.02] tracking-tight text-charcoal md:text-[3.6rem] lg:text-[4.05rem]">
                Architect
                <br />
                Yourself
                <br />
                Wisely
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/72 md:text-lg">
                Don&apos;t Be Programmed. Drive Yourself.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal to-teal/85 px-6 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_36px_-18px_rgba(45,122,127,0.55)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_42px_-16px_rgba(45,122,127,0.62)]"
                >
                  Start Your Growth Journey
                  <ArrowRight className="h-4.5 w-4.5" strokeWidth={2.2} aria-hidden />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-sandal/40 bg-white/82 px-6 py-3.5 text-[0.95rem] font-medium text-charcoal shadow-[0_16px_34px_-24px_rgba(31,41,55,0.18)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-teal/25 hover:bg-white/92"
                >
                  <CirclePlay className="h-4.5 w-4.5 text-charcoal/70" strokeWidth={2} aria-hidden />
                  Explore Platform
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="relative mx-auto flex w-full max-w-[26rem] items-center justify-center lg:mx-0 lg:max-w-[31rem] lg:justify-end"
            >
              <div className="absolute inset-[10%] rounded-[58%_42%_52%_48%/44%_56%_44%_56%] bg-gradient-to-br from-white/82 via-cream/96 to-sandal/82 shadow-[0_34px_80px_-28px_rgba(139,115,85,0.28)]" />
              <div className="absolute inset-[14%] rounded-[56%_44%_50%_50%/42%_58%_42%_58%] border border-sandal/45" />
              <img
                src={images.hero.architectYourselfWisely}
                alt="Architect Yourself Wisely illustration"
                className="relative z-10 block h-auto w-full max-h-[300px] object-contain drop-shadow-[0_22px_40px_rgba(31,41,55,0.2)] sm:max-h-[340px] md:max-h-[390px] lg:max-h-[440px]"
                width={956}
                height={872}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>

          <WhySmipioSection />

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:gap-16">
            <motion.div
              initial={{ y: 16, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center rounded-full border border-sandal/45 bg-cream/88 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brown/80">
                Be Digitally Wise
              </div>
              <h2 className="mt-6 text-balance text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-charcoal md:text-[3.45rem] lg:text-[3.8rem]">
                Be
                <br />
                Digitally
                <br />
                Wise
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/72 md:text-lg">
                Think Better. Learn Deeply. Perform Brilliantly.
              </p>
              <div className="mt-6 h-px w-28 bg-gradient-to-r from-teal/75 via-gold/45 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className="relative mx-auto flex w-full max-w-[21rem] items-center justify-center lg:mx-0 lg:max-w-[24rem] lg:justify-self-end lg:justify-end"
            >
              <div className="absolute inset-[9%] rounded-[44%_56%_45%_55%/52%_42%_58%_48%] bg-gradient-to-br from-white/82 via-sandal/28 to-cream/96 shadow-[0_30px_70px_-30px_rgba(139,115,85,0.24)]" />
              <div className="absolute inset-[13%] rounded-[46%_54%_48%_52%/50%_44%_56%_50%] border border-sandal/40" />
              <img
                src={images.hero.beDigitallyWise}
                alt="Be Digitally Wise illustration"
                className="relative z-10 block h-auto w-full max-h-[250px] object-contain drop-shadow-[0_18px_34px_rgba(31,41,55,0.18)] sm:max-h-[280px] md:max-h-[320px] lg:max-h-[360px]"
                width={737}
                height={630}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
