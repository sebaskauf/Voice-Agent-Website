'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wie lange dauert die Einrichtung?",
      answer: "Nach Vertragsabschluss ist Ihr KI-Assistent innerhalb von 48 Stunden einsatzbereit. Sie erhalten eine dedizierte Telefonnummer und eine kurze Einweisung – fertig. Keine IT-Kenntnisse erforderlich, keine Änderungen an Ihrer bestehenden Telefonanlage.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      question: "Was passiert mit den Patientendaten?",
      answer: "Alle Daten werden ausschließlich auf deutschen Servern gespeichert und sind DSGVO-konform verschlüsselt. Wir arbeiten nach höchsten medizinischen Datenschutzstandards. Ihre Patientendaten verlassen niemals Deutschland und werden niemals an Dritte weitergegeben.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      question: "Kann die KI wirklich Termine vereinbaren?",
      answer: "Ja. Der Voice-Agent greift direkt auf Ihren Kalender zu (read-only oder mit Schreibrechten, wie Sie wünschen) und bucht Termine nach Ihren Vorgaben – z.B. nur Vormittags-Slots, nur bestimmte Behandlungsarten, mit Pufferzeiten. Sie behalten die volle Kontrolle.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      question: "Kann ich das erst mal testen?",
      answer: "Selbstverständlich! Nutzen Sie unsere Live-Demo weiter oben auf dieser Seite oder vereinbaren Sie einen kostenlosen Test-Monat. Viele Praxen starten mit einem 2-Wochen-Pilotprojekt, um die KI parallel zur bestehenden Lösung zu testen.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      question: "Was, wenn die KI eine Frage nicht versteht?",
      answer: "Der Voice-Agent ist auf medizinische Terminvereinbarungen und Standard-Anfragen trainiert. Bei komplexen medizinischen Fragen oder Notfällen leitet die KI automatisch an Ihre Notfall-Nummer weiter oder bietet einen Rückruf an. Sie definieren die Grenzen.",
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      question: "Funktioniert das auch für Fachärzte (z.B. Orthopädie, Radiologie)?",
      answer: "Ja, unser System ist auf Ihre Fachrichtung anpassbar. Ob Allgemeinmedizin, Orthopädie, Radiologie, Zahnmedizin oder Psychotherapie – wir konfigurieren die KI mit dem passenden Vokabular, Ihren Öffnungszeiten und spezifischen Terminarten.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      question: "Kann ich die KI-Antworten selbst anpassen?",
      answer: "Ja. Sie erhalten Zugriff auf ein einfaches Dashboard, wo Sie Begrüßungstexte, häufige Antworten und Terminregeln selbst einstellen können. Für größere Änderungen steht Ihnen unser Support-Team zur Verfügung.",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-bgDark2 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-4xl mx-auto relative z-10 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-fg">
            Häufige{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fragen
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto">
            Alles, was Arztpraxen über unseren KI-Telefon-Assistenten wissen möchten
          </p>
        </div>

        {/* FAQ Accordion - single column, more interactive */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white backdrop-blur-sm rounded-2xl border transition-all duration-500 overflow-hidden hover:scale-[1.01] ${
                openIndex === index
                  ? 'border-primary/50 shadow-2xl shadow-primary/25 scale-[1.02]'
                  : 'border-borderLight hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center gap-4 group"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  openIndex === index
                    ? 'bg-gradient-to-br from-primary to-accent shadow-lg scale-110'
                    : 'bg-primary/10 group-hover:bg-primary/20 group-hover:scale-105'
                }`}>
                  <svg
                    className={`w-6 h-6 transition-colors duration-500 ${
                      openIndex === index ? 'text-white' : 'text-primary'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={faq.icon} />
                  </svg>
                </div>

                <div className="flex-1">
                  <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 block ${
                    openIndex === index ? 'text-primary' : 'text-fg group-hover:text-primary'
                  }`}>
                    {faq.question}
                  </span>
                </div>

                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-primary/20 rotate-180'
                    : 'bg-primary/5 group-hover:bg-primary/10'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index ? 'text-primary' : 'text-textSecondary group-hover:text-primary'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 pl-[5.5rem] text-textSecondary leading-relaxed text-base border-t border-borderLight mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 p-8">
          <h3 className="text-2xl font-bold text-fg mb-3">
            Noch Fragen?
          </h3>
          <p className="text-textSecondary mb-6">
            Vereinbaren Sie ein unverbindliches Beratungsgespräch – wir beantworten alle Ihre Fragen persönlich.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-primary/30 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Kostenlose Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
