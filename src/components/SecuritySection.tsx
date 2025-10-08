'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation();

  const securityFeatures = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "DSGVO-konform",
      description: "Vollständig DSGVO-compliant. Patientendaten werden ausschließlich in Deutschland gespeichert und verarbeitet."
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "End-to-End Verschlüsselung",
      description: "Alle Gespräche und Daten werden mit höchster Verschlüsselung gesichert. Ihre Patientendaten sind absolut geschützt."
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "Deutsche Server",
      description: "Hosting ausschließlich auf deutschen Servern. Keine Datenübertragung ins Ausland, kein Cloud Act."
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Ärztliche Schweigepflicht",
      description: "Unsere KI ist auf medizinische Vertraulichkeit trainiert. Sensible Informationen werden nie weitergegeben."
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      title: "TÜV-zertifiziert",
      description: "Geprüft und zertifiziert nach höchsten deutschen Sicherheitsstandards für medizinische Anwendungen."
    },
    {
      icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
      title: "Regelmäßige Audits",
      description: "Kontinuierliche Sicherheitsprüfungen und Updates. Ihre Praxis ist immer auf dem neuesten Stand der Technik."
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
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-7 h-7 text-accent group-hover:text-primary transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
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
                <div className="font-bold text-fg">Deutsche Server</div>
                <div className="text-sm text-textSecondary">Made in Germany</div>
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
                <div className="font-bold text-fg">TÜV-zertifiziert</div>
                <div className="text-sm text-textSecondary">Geprüfte Sicherheit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
