'use client';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2196F3" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#4CAF50" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2196F3" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#2196F3" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2196F3" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#4CAF50" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2196F3" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Wave 1 - Bottom wave - smooth wavy pattern */}
        <path
          d="M0,580 Q240,530 480,580 Q720,630 960,580 Q1200,530 1440,580 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,580 Q240,530 480,580 Q720,630 960,580 Q1200,530 1440,580 L1440,800 L0,800 Z;
              M0,580 Q240,630 480,580 Q720,530 960,580 Q1200,630 1440,580 L1440,800 L0,800 Z;
              M0,580 Q240,530 480,580 Q720,630 960,580 Q1200,530 1440,580 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 2 - Top wave - smooth wavy pattern */}
        <path
          d="M0,160 Q240,130 480,160 Q720,190 960,160 Q1200,130 1440,160 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-fast"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M0,160 Q240,130 480,160 Q720,190 960,160 Q1200,130 1440,160 L1440,0 L0,0 Z;
              M0,160 Q240,190 480,160 Q720,130 960,160 Q1200,190 1440,160 L1440,0 L0,0 Z;
              M0,160 Q240,130 480,160 Q720,190 960,160 Q1200,130 1440,160 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 3 - Small top wave - smooth wavy pattern */}
        <path
          d="M0,100 Q240,85 480,100 Q720,115 960,100 Q1200,85 1440,100 L1440,0 L0,0 Z"
          fill="url(#waveGradient2)"
          className="animate-wave-medium"
        >
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M0,100 Q240,85 480,100 Q720,115 960,100 Q1200,85 1440,100 L1440,0 L0,0 Z;
              M0,100 Q240,115 480,100 Q720,85 960,100 Q1200,115 1440,100 L1440,0 L0,0 Z;
              M0,100 Q240,85 480,100 Q720,115 960,100 Q1200,85 1440,100 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 4 - Bottom wave for depth - smooth wavy pattern */}
        <path
          d="M0,680 Q240,650 480,680 Q720,710 960,680 Q1200,650 1440,680 L1440,800 L0,800 Z"
          fill="url(#waveGradient3)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="
              M0,680 Q240,650 480,680 Q720,710 960,680 Q1200,650 1440,680 L1440,800 L0,800 Z;
              M0,680 Q240,710 480,680 Q720,650 960,680 Q1200,710 1440,680 L1440,800 L0,800 Z;
              M0,680 Q240,650 480,680 Q720,710 960,680 Q1200,650 1440,680 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
