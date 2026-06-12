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
      contentClass: 'flex h-full w-full flex-col items-center justify-start px-6 pt-5 md:px-8 md:pt-6',
      label: top,
      gradient: oval[0],
    },
    {
      style: 'right-0 top-1/2 -translate-y-1/2',
      size: 'h-[68%] w-[34%]',
      contentClass:
        'flex h-full w-full flex-col items-end justify-center px-4 pr-5 md:px-5 md:pr-6',
      textClass: 'text-right',
      label: right,
      gradient: oval[1],
    },
    {
      style: 'bottom-0 left-1/2 -translate-x-1/2',
      size: 'h-[34%] w-[68%]',
      contentClass:
        'flex h-full w-full flex-col items-center justify-end px-6 pb-5 md:px-8 md:pb-6',
      label: bottom,
      gradient: oval[2],
    },
    {
      style: 'left-0 top-1/2 -translate-y-1/2',
      size: 'h-[68%] w-[34%]',
      contentClass:
        'flex h-full w-full flex-col items-start justify-center px-4 pl-5 md:px-5 md:pl-6',
      textClass: 'text-left',
      label: left,
      gradient: oval[3],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0.75, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.85, ease }}
      className="relative mx-auto aspect-square w-full max-w-[min(100%,500px)]"
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
            <div className={b.contentClass}>
              <div className={`max-w-[9.5rem] text-charcoal md:max-w-[10.5rem] ${b.textClass ?? 'text-center'}`}>
                <p className="text-[10px] font-extrabold uppercase leading-snug tracking-wide md:text-[11px]">
                  {lines[0]}
                </p>
                {lines[1] && (
                  <p className="mt-2 text-[9px] font-semibold uppercase leading-snug tracking-wide text-charcoal/90 md:text-[10px]">
                    {lines[1]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}

      <div className="absolute left-1/2 top-1/2 z-10 flex h-[26%] w-[26%] min-h-[118px] min-w-[118px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-charcoal text-center shadow-2xl shadow-charcoal/40">
        <p className="px-3 text-[8px] font-extrabold uppercase leading-snug tracking-wide text-white md:text-[9px]">
          {centerTitle}
        </p>
      </div>
    </motion.div>
  )
}
