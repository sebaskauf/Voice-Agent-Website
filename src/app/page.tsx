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
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useMemo } from 'react';
import Image from 'next/image';

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
        <section id="home" className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 sm:pt-32 pb-20 sm:pb-32 bg-bgDark">
          {/* Wave background */}
          <WaveBackground />

          {/* Hero Background Image - Woman with hologram phone - Can overflow section boundaries */}
          {/* Mobile version: small, top-right positioned */}
          <div className="absolute -right-[50px] top-[10%] w-[400px] h-[300px] lg:hidden pointer-events-none z-0">
            <Image
              src="/hero-woman-hologram.png"
              alt="Frau mit Hologramm-Telefon"
              width={400}
              height={600}
              priority
              quality={90}
              className="absolute right-0 h-full w-auto object-cover object-left opacity-30"
              style={{
                maskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)',
                transform: 'scale(1.2)',
                transformOrigin: 'right center',
              }}
            />
          </div>
          {/* Desktop version: original large positioning */}
          <div className="absolute -right-[100px] top-[10%] bottom-[-20%] w-[1600px] hidden lg:block pointer-events-none z-0">
            <Image
              src="/hero-woman-hologram.png"
              alt="Frau mit Hologramm-Telefon"
              width={1600}
              height={2400}
              priority
              quality={100}
              unoptimized
              className="absolute right-0 h-full w-auto object-cover object-left opacity-60"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                filter: 'blur(0px)',
                transform: 'scale(1.45)',
                transformOrigin: 'right center',
              }}
            />
          </div>

          {/* Subtle background gradient - Healthcare theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 pointer-events-none z-[1]"></div>

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

          {/* Trust Icons - Bottom Left - Desktop */}
          <div className="absolute bottom-8 left-4 sm:left-8 z-10 hidden lg:flex flex-col gap-3 animate-fadeIn animation-delay-500">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-green-100">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-fg">100% DSGVO</div>
                <div className="text-[10px] text-textSecondary">Vollständig konform</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-green-100">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-fg">EU-Standards</div>
                <div className="text-[10px] text-textSecondary">DSGVO-Partner</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-green-100">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-fg">Höchste Sicherheitsstandards</div>
                <div className="text-[10px] text-textSecondary">Regelmäßige Security-Audits</div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 mt-0 sm:mt-4 md:mt-8 px-6 lg:mr-auto lg:ml-[8%]">
            <div className="animate-fadeIn">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                <span className="block text-fg">Nie wieder verpasste Anrufe</span>
                <span className="block">
                  <RotatingText />
                </span>
              </h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-textSecondary mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-200 px-1">
                <span className="block sm:inline">Ihr KI-Telefon-Assistent nimmt Termine auf, beantwortet Patientenfragen</span>{' '}
                <span className="block sm:inline">und entlastet Ihr Team – 24/7, in jeder Sprache, ohne Wartezeiten</span>
              </p>

              {/* Trust Elements - Interactive */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 md:gap-6 mb-5 sm:mb-8 md:mb-10 animate-fadeIn animation-delay-300 max-w-2xl mx-auto px-2">
                <div className="group flex items-center gap-0.5 sm:gap-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg px-1.5 py-0.5 sm:px-4 sm:py-2 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-primary group-hover:text-accent group-hover:scale-110 flex-shrink-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[9px] sm:text-sm md:text-base text-fg font-medium group-hover:text-primary transition-colors duration-300 whitespace-nowrap">DSGVO</span>
                </div>
                <div className="group flex items-center gap-0.5 sm:gap-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg px-1.5 py-0.5 sm:px-4 sm:py-2 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-primary group-hover:text-accent group-hover:scale-110 flex-shrink-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[9px] sm:text-sm md:text-base text-fg font-medium group-hover:text-primary transition-colors duration-300 whitespace-nowrap">100% Erreichbarkeit</span>
                </div>
                <div className="group flex items-center gap-0.5 sm:gap-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-lg px-1.5 py-0.5 sm:px-4 sm:py-2 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-primary group-hover:text-accent group-hover:scale-110 flex-shrink-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[9px] sm:text-sm md:text-base text-fg font-medium group-hover:text-primary transition-colors duration-300 whitespace-nowrap">In 48h einsatzbereit</span>
                </div>
              </div>

              <Link
                href="/#voice-demo"
                className="group inline-block bg-gradient-to-r from-primary via-accent to-primary text-white font-sora font-semibold px-6 sm:px-10 py-2.5 sm:py-4 rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 focus:scale-[1.03] focus:ring-2 focus:ring-primary transition-all duration-500 ease-out text-sm sm:text-lg shadow-lg shadow-primary/20 animate-fadeIn animation-delay-400 relative overflow-hidden min-h-[44px]"
              >
                <span className="relative z-10">Kostenlos ausprobieren</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              {/* Trust Icons - Mobile Version - Three in a row below text */}
              <div className="lg:hidden flex flex-row gap-1 mt-6 animate-fadeIn animation-delay-500 justify-center px-4">
                <div className="flex flex-col items-center gap-1 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1.5 shadow-sm border border-green-100/50">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-bold text-fg leading-tight whitespace-nowrap">100% DSGVO</div>
                    <div className="text-[7px] text-textSecondary leading-tight whitespace-nowrap">Vollständig konform</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1.5 shadow-sm border border-green-100/50">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-bold text-fg leading-tight whitespace-nowrap">EU-Standards</div>
                    <div className="text-[7px] text-textSecondary leading-tight whitespace-nowrap">DSGVO-Partner</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1.5 shadow-sm border border-green-100/50">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-bold text-fg leading-tight whitespace-nowrap">Höchste Sicherheit</div>
                    <div className="text-[7px] text-textSecondary leading-tight whitespace-nowrap">Security-Audits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProblemSection />

        <SolutionSection />

        <VoiceAgentDemo />

        <HowItWorks />

        <section id="features" className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-bgDark2">
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-fg px-4">
              Unsere <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Features</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "In 48 Stunden einsatzbereit",
                  description: "Ohne IT-Kenntnisse, ohne Umstellung Ihrer Telefonanlage. Sie bekommen eine Telefonnummer – fertig.",
                  color: "from-primary to-accent",
                  image: "feature-48h.png",
                  illustration: (
                    <Image
                      src="/feature-48h.png"
                      alt="48 Stunden Setup"
                      width={400}
                      height={400}
                      priority
                      className="w-full h-48 sm:h-56 object-contain mb-4 sm:mb-6"
                    />
                  )
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "100% DSGVO-konform",
                  description: "Patientendaten bleiben in Deutschland. Höchste Sicherheitsstandards, verschlüsselt, auf deutschen Servern.",
                  color: "from-accent to-primary",
                  image: "feature-dsgvo.png",
                  illustration: (
                    <Image
                      src="/feature-dsgvo.png"
                      alt="DSGVO Deutsche Server"
                      width={400}
                      height={400}
                      className="w-full h-48 sm:h-56 object-contain mb-4 sm:mb-6"
                    />
                  )
                },
                {
                  icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                  title: "Wächst mit Ihrer Praxis",
                  description: "Von 5 bis 500 Anrufe pro Tag – keine Mehrkosten, keine versteckten Gebühren.",
                  color: "from-primary via-accent to-primary",
                  image: "feature-growth.png",
                  illustration: (
                    <Image
                      src="/feature-growth.png"
                      alt="Skalierbarkeit und Wachstum"
                      width={400}
                      height={400}
                      className="w-full h-48 sm:h-56 object-contain mb-4 sm:mb-6 mt-4"
                    />
                  )
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

                  <div className={`relative bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl border transition-all duration-500 ease-out h-full ${
                    hoveredFeature === index
                      ? 'border-primary/40 bg-white shadow-2xl shadow-primary/20 transform -translate-y-1'
                      : 'border-borderLight hover:border-primary/30'
                  }`}>
                    {/* Illustration */}
                    <div className="transition-transform duration-500 group-hover:scale-105">
                      {feature.illustration}
                    </div>

                    <h3 className={`font-display text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-500 ${
                      hoveredFeature === index ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-fg'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
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
              30 Tage kostenlos testen –{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                mit persönlichem Support
              </span>
            </h2>
            <p className="text-xl text-fg/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Überzeugen Sie sich selbst – wir begleiten Sie während der gesamten Testphase
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/10 shadow-sm">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-fg">Persönliche Einrichtung durch unser Team</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/10 shadow-sm">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-fg">30 Tage Testphase ohne Verpflichtung</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/10 shadow-sm">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-fg">Direkter Ansprechpartner</span>
              </div>
            </div>

            <a
              href="/kontakt"
              className="group inline-block relative bg-gradient-to-r from-primary to-accent text-white font-sora font-semibold px-10 py-4 rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 focus:scale-[1.03] focus:ring-2 focus:ring-primary transition-all duration-500 ease-out text-lg shadow-lg shadow-primary/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Kostenlose Testphase starten
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
