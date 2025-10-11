'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bgDark/5 to-transparent"></div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={'max-w-7xl mx-auto relative z-10 scroll-animate' + (isVisible ? ' scroll-animate-visible' : '')}
      >
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Das Problem
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-fg px-2">
            Kommt Ihnen das{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              bekannt vor?
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative flex items-center justify-center px-4">
              <Image
                src="/stressed-receptionist.png"
                alt="Gestresste Rezeptionistin am Telefon"
                width={600}
                height={600}
                className="w-full h-auto max-w-md lg:max-w-lg floating-image-fade"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 px-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-red-50 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border-2 border-red-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-lg sm:text-xl font-extrabold">Problem #1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-fg">
                Überlastetes Personal
              </h3>
              <div className="space-y-3">
                <div className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 hover:to-red-50/30 transition-all duration-300">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-base text-textSecondary">
                    <strong className="text-fg group-hover:text-red-700 transition-colors duration-300">Klingelnde Telefone</strong> den ganzen Tag
                  </p>
                </div>
                <div className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 hover:to-red-50/30 transition-all duration-300">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-base text-textSecondary">
                    <strong className="text-fg group-hover:text-red-700 transition-colors duration-300">Mehrere Anrufe gleichzeitig</strong> - keiner kann alle bedienen
                  </p>
                </div>
                <div className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 hover:to-red-50/30 transition-all duration-300">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-base text-textSecondary">
                    <strong className="text-fg group-hover:text-red-700 transition-colors duration-300">Wichtige Aufgaben</strong> bleiben liegen
                  </p>
                </div>
              </div>
              <div className="relative bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full blur-3xl opacity-30"></div>
                <p className="text-red-800 font-semibold text-base relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Resultat: Stress, Überlastung, hohe Fluktuation</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 lg:order-1 order-2 px-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-red-50 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border-2 border-red-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-lg sm:text-xl font-extrabold">Problem #2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-fg">
                Frustrierte Patienten
              </h3>
              <div className="space-y-3">
                <div className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 hover:to-red-50/30 transition-all duration-300">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-base text-textSecondary">
                    <strong className="text-fg group-hover:text-red-700 transition-colors duration-300">Niemand geht ran</strong> - minutenlange Warteschleifen
                  </p>
                </div>
                <div className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 hover:to-red-50/30 transition-all duration-300">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-base text-textSecondary">
                    <strong className="text-fg group-hover:text-red-700 transition-colors duration-300">Nur während Sprechzeiten</strong> erreichbar
                  </p>
                </div>
                <div className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 hover:to-red-50/30 transition-all duration-300">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-base text-textSecondary">
                    <strong className="text-fg group-hover:text-red-700 transition-colors duration-300">Verlorene Termine</strong> durch Unerreichbarkeit
                  </p>
                </div>
              </div>
              <div className="relative bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full blur-3xl opacity-30"></div>
                <p className="text-red-800 font-semibold text-base relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Resultat: Patienten wechseln zur Konkurrenz</span>
                </p>
              </div>
            </div>

            <div className="relative lg:order-2 order-1 flex items-center justify-center lg:translate-x-8 px-4">
              <Image
                src="/frustrated-patient.png"
                alt="Frustrierter Patient am Telefon"
                width={600}
                height={600}
                className="w-full h-auto max-w-md lg:max-w-lg floating-image-fade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-flex flex-col items-center gap-4 sm:gap-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border-2 border-primary/30 p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-fg">
              Das geht auch anders.
            </h3>
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl px-2">
              Jeder Anruf wird beantwortet. 24/7. Kein Stress. Keine verpassten Termine. Zufriedene Patienten.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-sora font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out text-base sm:text-lg shadow-lg shadow-primary/20"
            >
              <span>Jetzt Beratung sichern</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
