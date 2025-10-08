'use client';

import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function VoiceAgentDemo() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const conversationRef = useRef<{ endSession: () => void } | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      const conversation = conversationRef.current;
      if (conversation) {
        conversation.endSession();
      }
    };
  }, []);

  const handleStartCall = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      // Import ElevenLabs Conversational AI SDK
      const { Conversation } = await import('@elevenlabs/client');

      // Initialize conversation with signed URL from backend
      const response = await fetch('/api/elevenlabs-session', {
        method: 'POST',
      });

      const { signedUrl } = await response.json();

      // Start the conversation
      const conversation = await Conversation.startSession({
        signedUrl,
        onConnect: () => {
          console.log('Connected to agent');
          setIsCallActive(true);
          setIsLoading(false);
        },
        onDisconnect: () => {
          console.log('Disconnected from agent');
          setIsCallActive(false);
        },
        onError: (error) => {
          console.error('Conversation error:', error);
          setIsLoading(false);
          setIsCallActive(false);
        },
        onMessage: (message) => {
          console.log('Agent message:', message);
        },
      });

      conversationRef.current = conversation;

    } catch (error) {
      console.error('Error starting call:', error);
      setIsLoading(false);
      alert('Fehler beim Starten des Gesprächs. Bitte versuchen Sie es erneut.');
    }
  };

  const handleEndCall = () => {
    if (conversationRef.current) {
      conversationRef.current.endSession();
      conversationRef.current = null;
    }
    setIsCallActive(false);
  };

  return (
    <section id="voice-demo" className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-48 pb-28">
      {/* Inverted wave at top - matches hero section wave colors */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none opacity-40 h-32">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradientTop1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38FAFF" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#38FAFF" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="waveGradientTop2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#38FAFF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L0,160 Q360,100 720,160 T1440,160 L1440,0 Z"
            fill="url(#waveGradientTop1)"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,0 L0,160 Q360,100 720,160 T1440,160 L1440,0 Z;
                M0,0 L0,160 Q360,200 720,160 T1440,160 L1440,0 Z;
                M0,0 L0,160 Q360,100 720,160 T1440,160 L1440,0 Z
              "
            />
          </path>
          <path
            d="M0,0 L0,120 Q360,180 720,120 T1440,120 L1440,0 Z"
            fill="url(#waveGradientTop2)"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,0 L0,120 Q360,180 720,120 T1440,120 L1440,0 Z;
                M0,0 L0,120 Q360,60 720,120 T1440,120 L1440,0 Z;
                M0,0 L0,120 Q360,180 720,120 T1440,120 L1440,0 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bgDark/80 via-bgDark/40 to-transparent pointer-events-none"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/10 animate-float"
            style={{
              width: `${4 + (i * 0.2) % 4}px`,
              height: `${4 + (i * 0.2) % 4}px`,
              left: `${(i * 6.7) % 100}%`,
              top: `${(i * 8.3) % 100}%`,
              animationDelay: `${(i * 0.3) % 4}s`,
              animationDuration: `${12 + (i * 0.4) % 8}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto relative z-10 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight px-2">
            Erleben Sie{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              KI in Aktion
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Sprechen Sie mit Marie, unserem KI-Voice-Agenten
          </p>
        </div>

        {/* Dashboard-style Agent Card */}
        <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-4 sm:p-6 md:p-8 shadow-2xl max-w-2xl mx-auto">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Agent Avatar */}
            <div className="relative flex-shrink-0">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 ${isCallActive ? 'animate-pulse' : ''}`}>
                <div className="w-full h-full rounded-full overflow-hidden bg-bgDark">
                  <Image
                    src="/images/marie-avatar.png"
                    alt="Marie AI Agent"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Status Indicator */}
              <div className={`absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full ${isCallActive ? 'bg-green-400' : 'bg-emerald-400'} transition-colors duration-300`}></div>
            </div>

            {/* Agent Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-fg mb-1">Marie</h3>
              <p className="text-sm sm:text-base text-fg/60">KI Voice Agent</p>
              <div className="flex items-center gap-2 mt-2">
                <div className={`w-2 h-2 rounded-full ${isCallActive ? 'bg-green-400 animate-pulse' : 'bg-emerald-400'}`}></div>
                <span className="text-xs sm:text-sm text-fg/70">
                  {isCallActive ? 'Im Gespräch' : isLoading ? 'Verbindet...' : 'Bereit'}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="group bg-white/[0.03] rounded-lg p-2 sm:p-3 md:p-4 border border-white/[0.05] hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
              <div className="text-fg/60 text-xs sm:text-sm mb-1 group-hover:text-fg/80 transition-colors">Sprachen</div>
              <div className="text-fg font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">DE, EN</div>
            </div>
            <div className="group bg-white/[0.03] rounded-lg p-2 sm:p-3 md:p-4 border border-white/[0.05] hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
              <div className="text-fg/60 text-xs sm:text-sm mb-1 group-hover:text-fg/80 transition-colors">Reaktionszeit</div>
              <div className="text-fg font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">&lt;500ms</div>
            </div>
            <div className="group bg-white/[0.03] rounded-lg p-2 sm:p-3 md:p-4 border border-white/[0.05] hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
              <div className="text-fg/60 text-xs sm:text-sm mb-1 group-hover:text-fg/80 transition-colors">Verfügbarkeit</div>
              <div className="text-fg font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">24/7</div>
            </div>
          </div>

          {/* Call Button */}
          <button
            onClick={isCallActive ? handleEndCall : handleStartCall}
            disabled={isLoading}
            className={`w-full group inline-flex items-center justify-center gap-2 sm:gap-3 ${
              isCallActive
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:shadow-red-500/30'
                : 'bg-gradient-to-r from-primary to-accent hover:shadow-primary/30'
            } text-bgDark font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-[1.02] hover:shadow-2xl focus:scale-[1.02] focus:ring-2 focus:ring-primary transition-all duration-300 text-base sm:text-lg shadow-lg relative overflow-hidden min-h-[48px] ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              {isLoading ? (
                <>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="hidden xs:inline">Wird verbunden...</span>
                  <span className="xs:hidden">Verbinden...</span>
                </>
              ) : isCallActive ? (
                <>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Anruf beenden
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Gespräch starten
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Info Text */}
          <p className="text-xs text-fg/40 text-center mt-4">
            Kostenloser Demo-Anruf • Keine Anmeldung erforderlich
          </p>
        </div>
      </div>
    </section>
  );
}
