'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wie lange dauert die Einrichtung?",
      answer: "Nach Vertragsabschluss ist Ihr KI-Assistent innerhalb von 48 Stunden einsatzbereit. Sie erhalten eine dedizierte Telefonnummer und eine kurze Einweisung – fertig. Keine IT-Kenntnisse erforderlich, keine Änderungen an Ihrer bestehenden Telefonanlage."
    },
    {
      question: "Was passiert mit den Patientendaten?",
      answer: "Alle Daten werden ausschließlich auf deutschen Servern gespeichert und sind DSGVO-konform verschlüsselt. Wir arbeiten nach höchsten medizinischen Datenschutzstandards. Ihre Patientendaten verlassen niemals Deutschland und werden niemals an Dritte weitergegeben."
    },
    {
      question: "Kann die KI wirklich Termine vereinbaren?",
      answer: "Ja. Der Voice-Agent greift direkt auf Ihren Kalender zu (read-only oder mit Schreibrechten, wie Sie wünschen) und bucht Termine nach Ihren Vorgaben – z.B. nur Vormittags-Slots, nur bestimmte Behandlungsarten, mit Pufferzeiten. Sie behalten die volle Kontrolle."
    },
    {
      question: "Was kostet das pro Monat?",
      answer: "Wir rechnen nach Anrufen ab, nicht nach Minuten. Die ersten 50 Anrufe/Monat sind inklusive, danach zahlen Sie nur für tatsächlich geführte Gespräche. Keine versteckten Kosten, keine Setup-Gebühr, monatlich kündbar. Gerne erstellen wir Ihnen ein individuelles Angebot."
    },
    {
      question: "Kann ich das erst mal testen?",
      answer: "Selbstverständlich! Nutzen Sie unsere Live-Demo weiter oben auf dieser Seite oder vereinbaren Sie einen kostenlosen Test-Monat. Viele Praxen starten mit einem 2-Wochen-Pilotprojekt, um die KI parallel zur bestehenden Lösung zu testen."
    },
    {
      question: "Was, wenn die KI eine Frage nicht versteht?",
      answer: "Der Voice-Agent ist auf medizinische Terminvereinbarungen und Standard-Anfragen trainiert. Bei komplexen medizinischen Fragen oder Notfällen leitet die KI automatisch an Ihre Notfall-Nummer weiter oder bietet einen Rückruf an. Sie definieren die Grenzen."
    },
    {
      question: "Funktioniert das auch für Fachärzte (z.B. Orthopädie, Radiologie)?",
      answer: "Ja, unser System ist auf Ihre Fachrichtung anpassbar. Ob Allgemeinmedizin, Orthopädie, Radiologie, Zahnmedizin oder Psychotherapie – wir konfigurieren die KI mit dem passenden Vokabular, Ihren Öffnungszeiten und spezifischen Terminarten."
    },
    {
      question: "Kann ich die KI-Antworten selbst anpassen?",
      answer: "Ja. Sie erhalten Zugriff auf ein einfaches Dashboard, wo Sie Begrüßungstexte, häufige Antworten und Terminregeln selbst einstellen können. Für größere Änderungen steht Ihnen unser Support-Team zur Verfügung."
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

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-sm rounded-xl border border-borderLight overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  openIndex === index ? 'text-primary' : 'text-fg group-hover:text-primary'
                }`}>
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : 'text-textSecondary group-hover:text-primary'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-textSecondary leading-relaxed border-t border-borderLight pt-4">
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
