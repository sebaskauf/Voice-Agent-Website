'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RotatingText from '@/components/RotatingText';
import VoiceAgentDemo from '@/components/VoiceAgentDemo';
import DashboardSection from '@/components/DashboardSection';
import HowItWorks from '@/components/HowItWorks';
import SecuritySection from '@/components/SecuritySection';
import FAQ from '@/components/FAQ';
import WaveBackground from '@/components/WaveBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useMemo } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: kontaktRef, isVisible: kontaktVisible } = useScrollAnimation();

  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({  // Reduced from 20 to 8 for cleaner healthcare look
      id: i,
      width: 2 + (i * 0.3) % 6,
      height: 2 + (i * 0.4) % 6,
      left: (i * 5.3) % 100,
      top: (i * 7.1) % 100,
      delay: (i * 0.25) % 5,
      duration: 10 + (i * 0.5) % 10,
    }))
  , []);

  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 sm:pt-32 pb-20 sm:pb-32">
          {/* Wave background */}
          <WaveBackground />

          {/* Subtle background gradient - Healthcare theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>

          {/* Minimal floating particles for professional look */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-primary/20 animate-float"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 mt-4 sm:mt-8 md:mt-12 px-4">
            <div className="animate-fadeIn">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                <div className="text-fg">
                  <span className="block">Nie wieder verpasste Anrufe</span>
                  <span className="relative inline-block">
                    <span className="relative z-10">nach Feierabend</span>
                    <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M0 8 Q75 4 150 6 Q225 8 300 6" stroke="url(#paint0_linear_underline)" strokeWidth="5" strokeLinecap="round" fill="none"/>
                      <defs>
                        <linearGradient id="paint0_linear_underline" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2196F3"/>
                          <stop offset="0.5" stopColor="#4CAF50"/>
                          <stop offset="1" stopColor="#2196F3"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-textSecondary mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-200 px-2">
                <span className="block sm:inline">Ihr KI-Telefon-Assistent nimmt Termine auf, beantwortet Patientenfragen</span>{' '}
                <span className="block sm:inline">und entlastet Ihr Team – 24/7, DSGVO-konform, auf Deutsch</span>
              </p>

              {/* Trust Elements - Interactive */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 md:gap-6 mb-6 sm:mb-8 md:mb-10 animate-fadeIn animation-delay-300 max-w-2xl mx-auto">
                <div className="group flex items-center gap-1 sm:gap-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg px-2 py-1 sm:px-4 sm:py-2 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary group-hover:text-accent group-hover:scale-110 flex-shrink-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[10px] sm:text-sm md:text-base text-fg font-medium group-hover:text-primary transition-colors duration-300 whitespace-nowrap">DSGVO</span>
                </div>
                <div className="group flex items-center gap-1 sm:gap-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg px-2 py-1 sm:px-4 sm:py-2 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary group-hover:text-accent group-hover:scale-110 flex-shrink-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-[10px] sm:text-sm md:text-base text-fg font-medium group-hover:text-primary transition-colors duration-300 whitespace-nowrap">Natürliches Deutsch</span>
                </div>
                <div className="group flex items-center gap-1 sm:gap-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg px-2 py-1 sm:px-4 sm:py-2 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary group-hover:text-accent group-hover:scale-110 flex-shrink-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[10px] sm:text-sm md:text-base text-fg font-medium group-hover:text-primary transition-colors duration-300 whitespace-nowrap">In 48h einsatzbereit</span>
                </div>
              </div>

              <Link
                href="/#voice-demo"
                className="group inline-block bg-gradient-to-r from-primary to-accent text-white font-sora font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 focus:scale-[1.03] focus:ring-2 focus:ring-primary transition-all duration-500 ease-out text-base sm:text-lg shadow-lg shadow-primary/20 animate-fadeIn animation-delay-400 relative overflow-hidden min-h-[48px]"
              >
                <span className="relative z-10">Kostenlose Demo vereinbaren</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>
          </div>
        </section>

        <VoiceAgentDemo />

        <HowItWorks />

        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-bgDark2">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <div
                key={`features-${particle.id}`}
                className="absolute rounded-full bg-primary/10 animate-float"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>

          <div
            ref={featuresRef as React.RefObject<HTMLDivElement>}
            className={`max-w-7xl mx-auto relative z-10 scroll-animate ${featuresVisible ? 'scroll-animate-visible' : ''}`}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-12 text-fg">
              Unsere <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "In 48 Stunden einsatzbereit",
                  description: "Ohne IT-Kenntnisse, ohne Umstellung Ihrer Telefonanlage. Sie bekommen eine Telefonnummer – fertig.",
                  color: "from-primary to-accent"
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "100% DSGVO-konform",
                  description: "Patientendaten bleiben in Deutschland. TÜV-zertifiziert, verschlüsselt, auf deutschen Servern.",
                  color: "from-accent to-primary"
                },
                {
                  icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                  title: "Wächst mit Ihrer Praxis",
                  description: "Von 5 bis 500 Anrufe pro Tag – keine Mehrkosten, keine versteckten Gebühren.",
                  color: "from-primary via-accent to-primary"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-all duration-700 ease-out group-hover:blur-2xl`}></div>

                  <div className={`relative bg-white backdrop-blur-sm p-10 rounded-2xl border transition-all duration-500 ease-out h-full ${
                    hoveredFeature === index
                      ? 'border-primary/40 bg-white shadow-2xl shadow-primary/20 transform -translate-y-1'
                      : 'border-borderLight hover:border-primary/30'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ease-out relative overflow-hidden ${
                      hoveredFeature === index ? 'scale-105' : ''
                    }`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <svg className={`w-8 h-8 relative z-10 transition-all duration-500 ease-out ${
                        hoveredFeature === index ? 'text-accent scale-105' : 'text-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className={`font-display text-2xl font-semibold mb-4 transition-colors duration-500 ${
                      hoveredFeature === index ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-fg'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-500 ${
                      hoveredFeature === index ? 'text-fg/80' : 'text-fg/60'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SecuritySection />

        <DashboardSection />

        <FAQ />

        <section id="kontakt" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-bgDark">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <div
                key={`kontakt-${particle.id}`}
                className="absolute rounded-full bg-accent/10 animate-float"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>

          <div
            ref={kontaktRef as React.RefObject<HTMLDivElement>}
            className={`max-w-4xl mx-auto text-center relative z-10 scroll-animate ${kontaktVisible ? 'scroll-animate-visible' : ''}`}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-fg">
              Bereit für die{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                Transformation?
              </span>
            </h2>
            <p className="text-xl text-fg/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann
            </p>
            <a
              href="/kontakt"
              className="group inline-block relative bg-gradient-to-r from-primary to-accent text-white font-sora font-semibold px-10 py-4 rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 focus:scale-[1.03] focus:ring-2 focus:ring-primary transition-all duration-500 ease-out text-lg shadow-lg shadow-primary/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Termin vereinbaren
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
