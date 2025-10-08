'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function KontaktPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    praxis: '',
    ort: '',
    agentType: '',
    nachricht: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Redirect nach 5 Sekunden
        setTimeout(() => {
          router.push('/');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-white to-accent/3"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14 165 233 / 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 px-2">
              Termin{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                vereinbaren
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Lassen Sie uns gemeinsam die perfekte KI-Lösung für Sie entwickeln
            </p>
          </div>

          <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-2xl shadow-primary/10">
            {submitStatus === 'success' ? (
              /* Success Message */
              <div className="text-center py-12 animate-fadeIn">
                {/* Success Icon with Animation */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-scaleIn">
                      <svg className="w-12 h-12 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Erfolgreich gesendet!
                </h2>
                <p className="text-xl text-gray-700 mb-2">
                  Vielen Dank für Ihre Anfrage!
                </p>
                <p className="text-gray-600 mb-8">
                  Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
                </p>

                {/* Redirect Info */}
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Sie werden in 5 Sekunden zur Startseite weitergeleitet...
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-base min-h-[48px]"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  E-Mail <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-base min-h-[48px]"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              {/* Praxis (optional) */}
              <div>
                <label htmlFor="praxis" className="block text-sm font-semibold text-gray-800 mb-2">
                  Praxis / Unternehmen <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="praxis"
                  name="praxis"
                  value={formData.praxis}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-base min-h-[48px]"
                  placeholder="Name Ihrer Praxis oder Unternehmens"
                />
              </div>

              {/* Ort */}
              <div>
                <label htmlFor="ort" className="block text-sm font-semibold text-gray-800 mb-2">
                  Ort <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="ort"
                  name="ort"
                  required
                  value={formData.ort}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-base min-h-[48px]"
                  placeholder="Stadt oder PLZ"
                />
              </div>

              {/* Art des KI-Agenten */}
              <div>
                <label htmlFor="agentType" className="block text-sm font-semibold text-gray-800 mb-2">
                  Art des KI-Agenten <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="agentType"
                  name="agentType"
                  required
                  value={formData.agentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-base min-h-[48px]"
                  placeholder="z.B. Terminbuchung, Kundenservice, Beratung..."
                />
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="nachricht" className="block text-sm font-semibold text-gray-800 mb-2">
                  Ihre Nachricht <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  value={formData.nachricht}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none text-base"
                  placeholder="Beschreiben Sie kurz Ihre Anforderungen oder Fragen..."
                />
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm font-semibold">
                    ✗ Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-bgDark font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group min-h-[48px] text-base sm:text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  'Termin anfragen'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu.
              </p>
            </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
