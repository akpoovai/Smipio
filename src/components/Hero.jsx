import { motion } from 'framer-motion'
import { images } from '../lib/images.js'
import WhySmipioSection from './WhySmipioSection.jsx'
import {
  storyBody,
  storyContainer,
  storyGrid,
  storyHeading,
  storyImageCol,
  storyTextCol,
} from './storyLayout.js'

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

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-12 pt-8 lg:px-10 lg:pb-16 premium:pb-14">
        <motion.div className="grid gap-12 lg:gap-16">
          <div className={storyContainer}>
            <div className={storyGrid}>
            <motion.div
              initial={{ y: 16, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease }}
              className={storyTextCol}
            >
              <div className="inline-flex items-center rounded-full border border-sandal/45 bg-cream/88 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brown/80">
                Architect Yourself Wisely
              </div>
              <h1 className={storyHeading}>
                Architect
                <br />
                Yourself
                <br />
                Wisely
              </h1>
              <p className={storyBody}>
                Don&apos;t Be Programmed. Drive Yourself.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className={`relative ${storyImageCol}`}
            >
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
          </div>

          <WhySmipioSection />

          <div className={storyContainer}>
            <div className={storyGrid}>
            <motion.div
              initial={{ y: 16, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
              className={storyTextCol}
            >
              <div className="inline-flex items-center rounded-full border border-sandal/45 bg-cream/88 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brown/80">
                Be Digitally Wise
              </div>
              <h2 className={storyHeading}>
                Be
                <br />
                Digitally
                <br />
                Wise
              </h2>
              <p className={storyBody}>
                Think Better. Learn Deeply. Perform Brilliantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.18, ease }}
              className={`relative ${storyImageCol}`}
            >
              <div className="absolute inset-[9%] rounded-[44%_56%_45%_55%/52%_42%_58%_48%] bg-gradient-to-br from-white/82 via-sandal/28 to-cream/96 shadow-[0_30px_70px_-30px_rgba(139,115,85,0.24)]" />
              <div className="absolute inset-[13%] rounded-[46%_54%_48%_52%/50%_44%_56%_50%] border border-sandal/40" />
              <img
                src={images.hero.beDigitallyWise}
                alt="Be Digitally Wise illustration"
                className="relative z-10 block h-auto w-full max-h-[220px] object-contain drop-shadow-[0_18px_34px_rgba(31,41,55,0.18)] sm:max-h-[250px] md:max-h-[280px] lg:max-h-[320px]"
                width={737}
                height={630}
                loading="eager"
                decoding="async"
              />
            </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
