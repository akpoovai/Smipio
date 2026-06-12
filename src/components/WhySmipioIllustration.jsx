import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function WhySmipioIllustration({ src, alt }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[36rem] items-center justify-center lg:max-w-[42rem]">
      <svg
        className="pointer-events-none absolute inset-[4%] h-[92%] w-[92%] text-charcoal/18"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <circle
          cx="200"
          cy="200"
          r="148"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
        <circle
          cx="200"
          cy="200"
          r="118"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 7"
          opacity="0.7"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="168"
          ry="132"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="2 6"
          opacity="0.45"
          transform="rotate(-12 200 200)"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease }}
        className="relative z-10 flex w-full items-center justify-center"
      >
        <img
          src={src}
          alt={alt}
          className="relative z-10 block h-auto w-full max-h-[340px] object-contain drop-shadow-[0_22px_40px_rgba(31,41,55,0.18)] sm:max-h-[380px] md:max-h-[440px] lg:max-h-[500px]"
          width={640}
          height={480}
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  )
}
