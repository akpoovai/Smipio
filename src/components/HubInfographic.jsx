import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/** Hub-and-ring layout inspired by slides 8–9. */
export default function HubInfographic({
  centerTitle,
  top,
  right,
  bottom,
  left,
  variant = 'wise',
  size = 'default',
}) {
  const gradients = {
    wise: [
      'from-violet-400/65 to-purple-400/45',
      'from-rose-400/65 to-orange-400/45',
      'from-amber-300/70 to-yellow-400/55',
      'from-teal-400/60 to-emerald-500/45',
    ],
    vicious: [
      'from-violet-500/55 to-fuchsia-500/40',
      'from-red-400/65 to-orange-400/45',
      'from-amber-400/65 to-yellow-500/55',
      'from-cyan-500/55 to-teal-600/45',
    ],
  }
  const oval = gradients[variant] ?? gradients.wise

  const blobs = [
    {
      style: 'top-0 left-1/2 -translate-x-1/2',
      size: 'h-[34%] w-[68%]',
      label: top,
      gradient: oval[0],
    },
    {
      style: 'right-0 top-1/2 -translate-y-1/2',
      size: 'h-[68%] w-[34%]',
      label: right,
      gradient: oval[1],
    },
    {
      style: 'bottom-0 left-1/2 -translate-x-1/2',
      size: 'h-[34%] w-[68%]',
      label: bottom,
      gradient: oval[2],
    },
    {
      style: 'left-0 top-1/2 -translate-y-1/2',
      size: 'h-[68%] w-[34%]',
      label: left,
      gradient: oval[3],
    },
  ]

  const sizeClass =
    size === 'large'
      ? 'max-w-[min(100%,720px)]'
      : 'max-w-[min(100%,500px)]'

  return (
    <motion.div
      initial={{ opacity: 0.75, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.85, ease }}
      className={`relative mx-auto aspect-square w-full ${sizeClass}`}
    >
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-white/35 blur-3xl" />

      {blobs.map((b, i) => {
        const lines = String(b.label).split('\n')
        return (
          <motion.div
            key={i}
            className={`absolute z-[1] ${b.style} ${b.size} flex rounded-[999px] border border-white/55 bg-gradient-to-br ${b.gradient} shadow-[0_25px_60px_-30px_rgba(31,41,55,0.45)] backdrop-blur-xl`}
            animate={{
              y: variant === 'wise' ? [0, -4, 0] : [0, 4, 0],
              rotate: [0, i % 2 === 0 ? 0.25 : -0.25, 0],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center md:px-5">
              <div className="max-w-[11rem] text-charcoal md:max-w-[12.5rem]">
                <p className="text-[12px] font-extrabold uppercase leading-snug tracking-wide md:text-[13px] lg:text-sm">
                  {lines[0]}
                </p>
                {lines[1] && (
                  <p className="mt-2 text-[11px] font-semibold uppercase leading-snug tracking-wide text-charcoal/90 md:text-xs">
                    {lines[1]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}

      <div className="absolute left-1/2 top-1/2 z-10 flex h-[38%] w-[38%] min-h-[158px] min-w-[158px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-white/40 bg-charcoal px-4 text-center shadow-2xl shadow-charcoal/40 md:min-h-[180px] md:min-w-[180px]">
        {String(centerTitle)
          .split('\n')
          .map((line) => (
            <p
              key={line}
              className="text-[10px] font-extrabold uppercase leading-snug tracking-wide text-white md:text-[11px] lg:text-xs"
            >
              {line}
            </p>
          ))}
      </div>
    </motion.div>
  )
}
