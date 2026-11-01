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
      gradient: oval[0],
    },
    {
      style: 'right-0 top-1/2 -translate-y-1/2',
      size: 'h-[68%] w-[34%]',
      gradient: oval[1],
    },
    {
      style: 'bottom-0 left-1/2 -translate-x-1/2',
      size: 'h-[34%] w-[68%]',
      gradient: oval[2],
    },
    {
      style: 'left-0 top-1/2 -translate-y-1/2',
      size: 'h-[68%] w-[34%]',
      gradient: oval[3],
    },
  ]

  const labels = [
    { label: top, place: 'top' },
    { label: right, place: 'right' },
    { label: bottom, place: 'bottom' },
    { label: left, place: 'left' },
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
      className={`hub-figure relative mx-auto aspect-square w-full @container ${sizeClass}`}
    >
      <style>{`
        .hub-figure { container-type: inline-size; }
        .hub-label-top { left: 50%; top: 17%; width: 12.5rem; transform: translate(-50%, -50%); }
        .hub-label-right { left: 83%; top: 50%; width: 8.5rem; transform: translate(-50%, -50%); }
        .hub-label-bottom { left: 50%; bottom: 17%; width: 12.5rem; transform: translate(-50%, 50%); }
        .hub-label-left { left: 17%; top: 50%; width: 8.5rem; transform: translate(-50%, -50%); }
        @container (max-width: 520px) {
          .hub-label-top { top: 15%; width: 30cqw; }
          .hub-label-bottom { bottom: 15%; width: 30cqw; }
          .hub-label-left,
          .hub-label-right { width: 24cqw; }
          .hub-label-top p,
          .hub-label-right p,
          .hub-label-bottom p,
          .hub-label-left p {
            letter-spacing: 0.01em;
          }
          .hub-label-top p:first-child,
          .hub-label-right p:first-child,
          .hub-label-bottom p:first-child,
          .hub-label-left p:first-child {
            font-size: clamp(10px, 3.15cqw, 12px);
          }
          .hub-label-top p:last-child,
          .hub-label-right p:last-child,
          .hub-label-bottom p:last-child,
          .hub-label-left p:last-child {
            margin-top: 0.35em;
            font-size: clamp(9px, 2.7cqw, 11px);
          }
          .hub-core {
            min-width: 0;
            min-height: 0;
            padding-left: 0.6rem;
            padding-right: 0.6rem;
          }
          .hub-core p { font-size: clamp(8px, 2.45cqw, 10px); }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-white/35 blur-3xl" />

      {blobs.map((b, i) => (
          <motion.div
            key={i}
            className={`absolute z-[1] ${b.style} ${b.size} rounded-[999px] border border-white/55 bg-gradient-to-br ${b.gradient} shadow-[0_25px_60px_-30px_rgba(31,41,55,0.45)] backdrop-blur-xl`}
            animate={{
              y: variant === 'wise' ? [0, -4, 0] : [0, 4, 0],
              rotate: [0, i % 2 === 0 ? 0.25 : -0.25, 0],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

      {labels.map(({ label, place }) => {
        const lines = String(label).split('\n')
        return (
          <div
            key={place}
            className={`hub-label-${place} absolute z-[2] text-center text-charcoal`}
          >
            <p className="text-[12px] font-extrabold uppercase leading-snug tracking-wide md:text-[13px] lg:text-sm">
              {lines[0]}
            </p>
            {lines[1] && (
              <p className="mt-2 text-[11px] font-semibold uppercase leading-snug tracking-wide text-charcoal/90 md:text-xs">
                {lines[1]}
              </p>
            )}
          </div>
        )
      })}

      <div className="hub-core absolute left-1/2 top-1/2 z-10 flex h-[38%] w-[38%] min-h-[158px] min-w-[158px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-white/40 bg-charcoal px-4 text-center shadow-2xl shadow-charcoal/40 md:min-h-[180px] md:min-w-[180px]">
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
