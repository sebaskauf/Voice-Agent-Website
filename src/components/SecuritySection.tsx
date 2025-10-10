'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation();

  const securityFeatures = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "DSGVO-konform",
      description: "Vollständig DSGVO-compliant. Patientendaten werden ausschließlich in Deutschland gespeichert und verarbeitet.",
      illustration: (
        <svg className="w-full h-40 mb-4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path d="M150 30 L240 65 L240 140 C240 185 205 220 150 255 C95 220 60 185 60 140 L60 65 L150 30Z" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
          {/* Lock */}
          <rect x="125" y="115" width="50" height="50" rx="5" fill="#1a1a1a"/>
          {/* Lock shackle */}
          <path d="M135 115 L135 95 C135 80 150 80 165 80 C165 80 165 80 165 95 L165 115" stroke="#1a1a1a" strokeWidth="7" fill="none" strokeLinecap="round"/>
          {/* Keyhole */}
          <circle cx="150" cy="135" r="6" fill="white"/>
          <rect x="147" y="140" width="6" height="12" fill="white"/>
          {/* DSGVO text */}
          <text x="150" y="195" fill="#1a1a1a" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">DSGVO</text>
          {/* Green checkmark */}
          <path d="M210 60 L225 75 L265 35" stroke="#6FCF97" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "End-to-End Verschlüsselung",
      description: "Alle Gespräche und Daten werden mit höchster Verschlüsselung gesichert. Ihre Patientendaten sind absolut geschützt.",
      illustration: (
        <svg className="w-full h-40 mb-4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path d="M150 30 L240 65 L240 140 C240 185 205 220 150 255 C95 220 60 185 60 140 L60 65 L150 30Z" fill="white" stroke="#1a1a1a" strokeWidth="4"/>

          {/* Left device/endpoint - LARGER */}
          <rect x="70" y="110" width="45" height="65" rx="5" fill="#1a1a1a"/>
          <rect x="76" y="117" width="33" height="45" rx="2" fill="white"/>
          <circle cx="92.5" cy="168" r="4" fill="white"/>

          {/* Right device/endpoint - LARGER */}
          <rect x="185" y="110" width="45" height="65" rx="5" fill="#1a1a1a"/>
          <rect x="191" y="117" width="33" height="45" rx="2" fill="white"/>
          <circle cx="207.5" cy="168" r="4" fill="white"/>

          {/* Encrypted connection line */}
          <line x1="115" y1="142" x2="135" y2="142" stroke="#1a1a1a" strokeWidth="4"/>
          <line x1="165" y1="142" x2="185" y2="142" stroke="#1a1a1a" strokeWidth="4"/>

          {/* Lock in the middle */}
          <rect x="135" y="127" width="30" height="30" rx="3" fill="#1a1a1a"/>
          <circle cx="150" cy="139" r="5" fill="white"/>
          <rect x="148" y="143" width="4" height="8" fill="white"/>

          {/* Green checkmark */}
          <path d="M210 60 L225 75 L265 35" stroke="#6FCF97" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "Deutsche & EU-Standards",
      description: "Kernsystem auf deutschen Servern. Telefonie über DSGVO-konforme Partner mit EU-Standardvertragsklauseln und Auftragsverarbeitungsvertrag.",
      illustration: (
        <svg className="w-full h-40 mb-4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path d="M150 30 L240 65 L240 140 C240 185 205 220 150 255 C95 220 60 185 60 140 L60 65 L150 30Z" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
          {/* Server stack */}
          <rect x="110" y="95" width="80" height="30" rx="4" fill="#1a1a1a"/>
          <rect x="110" y="135" width="80" height="30" rx="4" fill="#1a1a1a"/>
          <rect x="110" y="175" width="80" height="30" rx="4" fill="#1a1a1a"/>
          {/* Server lights */}
          <circle cx="125" cy="110" r="3" fill="#6FCF97"/>
          <circle cx="135" cy="110" r="3" fill="#6FCF97"/>
          <circle cx="125" cy="150" r="3" fill="#6FCF97"/>
          <circle cx="135" cy="150" r="3" fill="#6FCF97"/>
          <circle cx="125" cy="190" r="3" fill="#6FCF97"/>
          <circle cx="135" cy="190" r="3" fill="#6FCF97"/>
          {/* DE flag */}
          <rect x="200" y="110" width="35" height="8" fill="#000000"/>
          <rect x="200" y="118" width="35" height="8" fill="#DD0000"/>
          <rect x="200" y="126" width="35" height="8" fill="#FFCE00"/>
          {/* Green checkmark */}
          <path d="M210 60 L225 75 L265 35" stroke="#6FCF97" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Ärztliche Schweigepflicht",
      description: "Unsere KI ist auf medizinische Vertraulichkeit trainiert. Sensible Informationen werden nie weitergegeben.",
      illustration: (
        <svg className="w-full h-40 mb-4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path d="M150 30 L240 65 L240 140 C240 185 205 220 150 255 C95 220 60 185 60 140 L60 65 L150 30Z" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
          {/* Medical cross */}
          <rect x="140" y="100" width="20" height="80" rx="3" fill="#1a1a1a"/>
          <rect x="120" y="120" width="60" height="20" rx="3" fill="#1a1a1a"/>
          {/* Heart outline around cross */}
          <path d="M150 95 C140 80 110 85 110 110 C110 130 150 160 150 160 C150 160 190 130 190 110 C190 85 160 80 150 95 Z" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
          {/* Green checkmark */}
          <path d="M210 60 L225 75 L265 35" stroke="#6FCF97" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      title: "Höchste Sicherheitsstandards",
      description: "Nach deutschen IT-Sicherheitsrichtlinien entwickelt. Regelmäßige Security-Audits.",
      illustration: (
        <svg className="w-full h-40 mb-4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path d="M150 30 L240 65 L240 140 C240 185 205 220 150 255 C95 220 60 185 60 140 L60 65 L150 30Z" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
          {/* Award ribbon/badge */}
          <circle cx="150" cy="135" r="45" fill="#1a1a1a"/>
          <circle cx="150" cy="135" r="38" fill="white"/>
          <circle cx="150" cy="135" r="30" fill="#1a1a1a"/>
          {/* Star in center */}
          <path d="M150 115 L155 128 L169 130 L159 140 L162 154 L150 147 L138 154 L141 140 L131 130 L145 128 Z" fill="white"/>
          {/* Green checkmark */}
          <path d="M210 60 L225 75 L265 35" stroke="#6FCF97" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
      title: "Regelmäßige Audits",
      description: "Kontinuierliche Sicherheitsprüfungen und Updates. Ihre Praxis ist immer auf dem neuesten Stand der Technik.",
      illustration: (
        <svg className="w-full h-40 mb-4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield background */}
          <path d="M150 30 L240 65 L240 140 C240 185 205 220 150 255 C95 220 60 185 60 140 L60 65 L150 30Z" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
          {/* Magnifying glass */}
          <circle cx="135" cy="125" r="35" stroke="#1a1a1a" strokeWidth="7" fill="none"/>
          <line x1="160" y1="150" x2="185" y2="175" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
          {/* Checkmark in magnifying glass */}
          <path d="M120 125 L130 135 L150 115" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Green checkmark */}
          <path d="M210 60 L225 75 L265 35" stroke="#6FCF97" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-bgDark overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto relative z-10 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Sicherheit & Datenschutz
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-fg">
            Ihre Patienten{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              vertrauen Ihnen
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Wir nehmen Datenschutz ernst. Medizinische Daten gehören zu den sensibelsten Informationen überhaupt –
            deshalb erfüllen wir höchste Standards.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white backdrop-blur-sm rounded-xl border border-borderLight p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Illustration */}
              <div className="transition-transform duration-500 group-hover:scale-105">
                {feature.illustration}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-fg mb-3 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-fg">100% DSGVO</div>
                <div className="text-sm text-textSecondary">Vollständig konform</div>
              </div>
            </div>

            <div className="hidden md:block h-12 w-px bg-borderLight"></div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-fg">EU-Standards</div>
                <div className="text-sm text-textSecondary">DSGVO-Partner</div>
              </div>
            </div>

            <div className="hidden md:block h-12 w-px bg-borderLight"></div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-fg">Höchste Sicherheitsstandards</div>
                <div className="text-sm text-textSecondary">Regelmäßige Security-Audits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
