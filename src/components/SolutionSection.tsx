'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation();

  const solutions = [
    {
      title: "100% Erreichbarkeit",
      description: "Jeder Anruf wird beantwortet - keine verpassten Patienten mehr",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Entlastetes Team",
      description: "Ihr Team konzentriert sich aufs Wesentliche, kein Dauerklingeln",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "24/7 verfügbar",
      description: "Patienten erreichen Sie rund um die Uhr, auch nach Feierabend",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Automatisch skalierbar",
      description: "Von 5 bis 500 Anrufen - kein Stress in Stoßzeiten",
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#FAFFFE' }}>
      {/* Very subtle gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(34, 197, 94, 0.02), rgba(255, 255, 255, 0.5))'
      }}></div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={'max-w-7xl mx-auto relative z-10 scroll-animate' + (isVisible ? ' scroll-animate-visible' : '')}
      >
        {/* Section Header */}
        <div className="text-center mb-8 px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 text-green-700 px-5 py-3 sm:px-6 sm:py-4 rounded-full text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Die Lösung
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-fg px-2">
            So lösen wir{' '}
            <span className="bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent">
              das Problem
            </span>
          </h2>

          <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto">
            Unser KI-Telefon-Assistent übernimmt die Anrufannahme – professionell, zuverlässig, rund um die Uhr
          </p>
        </div>

        {/* Solution Cards - Staggered Layout */}
        <div className="px-4 max-w-4xl mx-auto">
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0',
                  maxWidth: '90%'
                }}
              >
                <div
                  className="bg-white rounded-xl p-5 sm:p-6 border hover:shadow-lg transition-shadow duration-300"
                  style={{
                    borderColor: 'rgba(34, 197, 94, 0.15)',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-fg">
                        {solution.title}
                      </h3>
                      <p className="text-base sm:text-lg text-fg/85 leading-relaxed font-medium">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight text */}
        <div className="mt-8 text-center px-4">
          <div className="inline-flex items-center gap-3 border rounded-lg px-5 py-3" style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', borderColor: 'rgba(34, 197, 94, 0.2)' }}>
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-sm sm:text-base font-semibold text-fg">
              In nur 48 Stunden einsatzbereit – ohne IT-Kenntnisse, ohne Umstellung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
