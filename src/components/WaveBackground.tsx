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

        {/* Wave 1 - Bottom wave - irregular pattern */}
        <path
          d="M0,580 Q200,560 450,590 Q680,610 900,570 Q1150,550 1440,585 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,580 Q200,560 450,590 Q680,610 900,570 Q1150,550 1440,585 L1440,800 L0,800 Z;
              M0,580 Q200,605 450,570 Q680,555 900,595 Q1150,610 1440,575 L1440,800 L0,800 Z;
              M0,580 Q200,560 450,590 Q680,610 900,570 Q1150,550 1440,585 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 2 - Top wave - asymmetric pattern */}
        <path
          d="M0,160 Q180,145 420,165 Q750,175 950,155 Q1180,148 1440,162 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-fast"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M0,160 Q180,145 420,165 Q750,175 950,155 Q1180,148 1440,162 L1440,0 L0,0 Z;
              M0,160 Q180,172 420,152 Q750,158 950,168 Q1180,175 1440,155 L1440,0 L0,0 Z;
              M0,160 Q180,145 420,165 Q750,175 950,155 Q1180,148 1440,162 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 3 - Small top wave - scattered pattern */}
        <path
          d="M0,100 Q220,92 380,105 Q640,108 880,96 Q1100,102 1440,98 L1440,0 L0,0 Z"
          fill="url(#waveGradient2)"
          className="animate-wave-medium"
        >
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M0,100 Q220,92 380,105 Q640,108 880,96 Q1100,102 1440,98 L1440,0 L0,0 Z;
              M0,100 Q220,107 380,95 Q640,93 880,106 Q1100,94 1440,103 L1440,0 L0,0 Z;
              M0,100 Q220,92 380,105 Q640,108 880,96 Q1100,102 1440,98 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 4 - Bottom wave for depth - varied pattern */}
        <path
          d="M0,680 Q280,665 520,690 Q780,705 1000,675 Q1250,660 1440,685 L1440,800 L0,800 Z"
          fill="url(#waveGradient3)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="
              M0,680 Q280,665 520,690 Q780,705 1000,675 Q1250,660 1440,685 L1440,800 L0,800 Z;
              M0,680 Q280,700 520,670 Q780,658 1000,695 Q1250,708 1440,672 L1440,800 L0,800 Z;
              M0,680 Q280,665 520,690 Q780,705 1000,675 Q1250,660 1440,685 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
