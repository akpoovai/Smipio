/** Stylized interpretations of Slide 7 column artwork */

export function IconAware({ className = 'w-24 h-24' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 74h88"
        stroke="#1f2937"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="42" cy="44" rx="18" ry="22" fill="#fcd34d" />
      <circle cx="42" cy="26" r="10" fill="#ef4444" />
      <rect x="32" y="52" width="20" height="22" rx="6" fill="#fcd34d" />
      <ellipse cx="78" cy="48" rx="14" ry="17" fill="#fcd34d" />
      <circle cx="78" cy="34" r="8" fill="#3b82f6" />
      <rect x="70" y="56" width="16" height="18" rx="5" fill="#fcd34d" />
    </svg>
  )
}

export function IconTransform({ className = 'w-24 h-24' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="bw1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="35%" stopColor="#34d399" />
          <stop offset="65%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <path
        d="M60 24c10 14 36 34 42 42-12 14-42 38-54 54C34 112 22 94 18 74c22-26 42-54 42-50z"
        fill="url(#bw1)"
        opacity="0.95"
      />
      <path
        d="M60 24c-10 14-36 34-42 42 12 14 42 38 54 54 14-28 26-46 42-74-22-26-42-54-54-22z"
        fill="url(#bw1)"
        opacity="0.75"
      />
      <path
        d="M60 32c10 14 38 42 52 62"
        stroke="#1f2937"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M60 32c-10 14-38 42-52 62"
        stroke="#1f2937"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconGrow({ className = 'w-24 h-24' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M28 74h72"
        stroke="#1f2937"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="M40 74V58h12v16z" fill="#1f2937" opacity="0.25" />
      <path d="M56 74V50h14v24z" fill="#1f2937" opacity="0.4" />
      <path d="M74 74V40h16v34z" fill="#1f2937" opacity="0.55" />
      <path d="M44 72l52-52" stroke="#c8a96b" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M88 20l14 4-6-12"
        fill="none"
        stroke="#c8a96b"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="34" r="9" fill="#fb923c" />
      <circle cx="60" cy="28" r="9" fill="#3b82f6" />
      <circle cx="84" cy="22" r="9" fill="#22c55e" />
    </svg>
  )
}

export function IconAchieve({ className = 'w-24 h-24' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="60"
        cy="48"
        r="42"
        stroke="#22c55e"
        strokeWidth="3"
        opacity="0.35"
      />
      <circle
        cx="60"
        cy="48"
        r="28"
        stroke="#22c55e"
        strokeWidth="3"
        opacity="0.55"
      />
      <circle cx="60" cy="48" r="14" stroke="#22c55e" strokeWidth="3" opacity="0.85" />
      <circle cx="52" cy="44" r="8" fill="#3b82f6" />
      <circle cx="68" cy="44" r="8" fill="#fb923c" />
      <circle cx="60" cy="54" r="8" fill="#fbbf24" />
    </svg>
  )
}
