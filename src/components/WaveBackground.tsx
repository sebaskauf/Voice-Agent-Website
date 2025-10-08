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

        {/* Wave 1 - Bottom wave - smaller and wavier */}
        <path
          d="M0,580 Q240,540 480,580 Q720,620 960,580 Q1200,540 1440,580 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,580 Q240,540 480,580 Q720,620 960,580 Q1200,540 1440,580 L1440,800 L0,800 Z;
              M0,580 Q240,620 480,580 Q720,540 960,580 Q1200,620 1440,580 L1440,800 L0,800 Z;
              M0,580 Q240,540 480,580 Q720,620 960,580 Q1200,540 1440,580 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 2 - Top wave - smaller and wavier */}
        <path
          d="M0,160 Q240,140 480,160 Q720,180 960,160 Q1200,140 1440,160 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-fast"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M0,160 Q240,140 480,160 Q720,180 960,160 Q1200,140 1440,160 L1440,0 L0,0 Z;
              M0,160 Q240,180 480,160 Q720,140 960,160 Q1200,180 1440,160 L1440,0 L0,0 Z;
              M0,160 Q240,140 480,160 Q720,180 960,160 Q1200,140 1440,160 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 3 - Small top wave - wavier */}
        <path
          d="M0,100 Q240,90 480,100 Q720,110 960,100 Q1200,90 1440,100 L1440,0 L0,0 Z"
          fill="url(#waveGradient2)"
          className="animate-wave-medium"
        >
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M0,100 Q240,90 480,100 Q720,110 960,100 Q1200,90 1440,100 L1440,0 L0,0 Z;
              M0,100 Q240,110 480,100 Q720,90 960,100 Q1200,110 1440,100 L1440,0 L0,0 Z;
              M0,100 Q240,90 480,100 Q720,110 960,100 Q1200,90 1440,100 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 4 - Bottom wave for depth - smaller and wavier */}
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
