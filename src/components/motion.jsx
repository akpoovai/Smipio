import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      /**
       * Positive bottom margin grows the intersection root so sections reveal reliably
       * while scrolling (negative margins can keep content stuck at opacity: 0).
       */
      viewport={{ once, amount: 0.08, margin: '0px 0px 120px 0px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Float({
  children,
  className = '',
  amplitude = 10,
  duration = 5,
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude / 2, amplitude / 2, -amplitude / 2] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
