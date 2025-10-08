'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      number: "1",
      title: "5 Anrufe gleichzeitig",
      description: "Stoßzeit in Ihrer Praxis – 5 Patienten rufen gleichzeitig an. Früher: 4 hören das Besetztzeichen.",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      number: "2",
      title: "KI nimmt alle 5 Anrufe an",
      description: "Jeder Patient wird sofort verbunden – parallel, ohne Wartezeit. Termine werden vereinbart, Fragen beantwortet.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      number: "3",
      title: "Keine verpassten Anrufe mehr",
      description: "100% Erreichbarkeit, zufriedene Patienten, voller Terminkalender. Ihr Team konzentriert sich auf die Behandlung.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-bgDark2 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto relative z-10 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-fg">
            So funktioniert&apos;s{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              in der Praxis
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto">
            Stoßzeiten meistern – jeder Anruf zählt
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent/50 rounded-full"></div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-white backdrop-blur-sm rounded-2xl border border-borderLight p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group-hover:-translate-y-1 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-6 mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-fg mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <p className="text-textSecondary text-lg">
            Klingt zu einfach?{' '}
            <a href="#voice-demo" className="text-primary hover:text-accent font-semibold transition-colors">
              Probieren Sie es aus
            </a>
            {' '}– kostenlos, keine Anmeldung
          </p>
        </div>
      </div>
    </section>
  );
}
