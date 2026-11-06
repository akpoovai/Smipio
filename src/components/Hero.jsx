import { motion } from 'framer-motion'
import { images } from '../lib/images.js'
import WhySmipioSection from './WhySmipioSection.jsx'
import {
  storyBody,
  storyContainer,
  storyGrid,
  heroStoryHeading,
  storyImageCol,
  storyTextCol,
} from './storyLayout.js'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-x-hidden pt-28">
      <motion.div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease }}
          className="absolute right-0 top-28 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease }}
          className="absolute bottom-12 left-1/3 h-72 w-72 rounded-full bg-cream/55 blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-10 pt-8 lg:px-10 lg:pb-12">
        <motion.div className="grid gap-12 lg:gap-16">
          <div className={storyContainer}>
            <div className={storyGrid}>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease }}
                className={storyTextCol}
              >
                <div className="inline-flex w-fit self-start items-center rounded-full border border-sandal/45 bg-white/28 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[4px] text-black backdrop-blur-sm">
                  TAKE CHARGE
                </div>
                <h1
                  className={heroStoryHeading.replace('font-semibold', 'font-light')}
                  style={{ color: '#B48400' }}
                >
                  ARCHITECT
                  <br />
                  YOURSELF
                  <br />
                  WISELY
                </h1>
                <p className={storyBody}>
                  Don&apos;t be programmed by external misdirection. Drive yourself
                  with clarity, competence, and confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.1, ease }}
                className={storyImageCol}
              >
                <img
                  src={images.hero.architectYourselfWisely}
                  alt="Architect Yourself Wisely illustration"
                  className="relative z-10 block h-auto w-full max-h-[13rem] object-contain object-center drop-shadow-[0_22px_40px_rgba(31,41,55,0.2)] sm:max-h-[14rem] md:max-h-[15.5rem] lg:max-h-[17rem]"
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
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.12, ease }}
                className={storyTextCol}
              >
                <div className="inline-flex w-fit self-start items-center rounded-full border border-sandal/45 bg-white/28 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[4px] text-black backdrop-blur-sm">
                  TRANSFORM WISELY
                </div>
                <h2
                  className={heroStoryHeading.replace('font-semibold', 'font-light')}
                  style={{ color: '#B48400' }}
                >
                  BE
                  <br />
                  DIGITALLY
                  <br />
                  WISE
                </h2>
                <p className={storyBody}>
                  Think Deeply. Learn Consciously. Perform Wisely.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
                className={storyImageCol}
              >
                <div className="relative flex h-auto w-full max-w-[500px] items-center justify-center lg:h-[300px]">
                  <div className="pointer-events-none absolute inset-[8%] rounded-[44%_56%_45%_55%/52%_42%_58%_48%] bg-gradient-to-br from-white/82 via-sandal/28 to-cream/96 shadow-[0_30px_70px_-30px_rgba(139,115,85,0.24)]" />
                  <div className="pointer-events-none absolute inset-[12%] rounded-[46%_54%_48%_52%/50%_44%_56%_50%] border border-sandal/40" />
                  <img
                    src={images.hero.beDigitallyWise}
                    alt="Be Digitally Wise illustration"
                    className="relative z-10 block h-auto w-full max-w-full object-contain object-center drop-shadow-[0_18px_34px_rgba(31,41,55,0.18)] lg:h-[300px] lg:w-[500px]"
                    width={500}
                    height={300}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
