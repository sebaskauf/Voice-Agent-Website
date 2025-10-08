'use client';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2196F3" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#4CAF50" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2196F3" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#2196F3" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2196F3" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#4CAF50" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2196F3" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Wave 1 - Bottom large wave - pushed down */}
        <path
          d="M0,550 Q360,450 720,550 T1440,550 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,550 Q360,450 720,550 T1440,550 L1440,800 L0,800 Z;
              M0,550 Q360,650 720,550 T1440,550 L1440,800 L0,800 Z;
              M0,550 Q360,450 720,550 T1440,550 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 2 - Middle large wave - pushed down */}
        <path
          d="M0,600 Q360,700 720,600 T1440,600 L1440,800 L0,800 Z"
          fill="url(#waveGradient2)"
          className="animate-wave-medium"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,600 Q360,700 720,600 T1440,600 L1440,800 L0,800 Z;
              M0,600 Q360,500 720,600 T1440,600 L1440,800 L0,800 Z;
              M0,600 Q360,700 720,600 T1440,600 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 3 - Top large wave */}
        <path
          d="M0,200 Q360,150 720,200 T1440,200 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-fast"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="
              M0,200 Q360,150 720,200 T1440,200 L1440,0 L0,0 Z;
              M0,200 Q360,250 720,200 T1440,200 L1440,0 L0,0 Z;
              M0,200 Q360,150 720,200 T1440,200 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Wave 4 - Extra bottom wave for depth - pushed down */}
        <path
          d="M0,670 Q360,770 720,670 T1440,670 L1440,800 L0,800 Z"
          fill="url(#waveGradient3)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="
              M0,670 Q360,770 720,670 T1440,670 L1440,800 L0,800 Z;
              M0,670 Q360,570 720,670 T1440,670 L1440,800 L0,800 Z;
              M0,670 Q360,770 720,670 T1440,670 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
