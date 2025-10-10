'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-bgDark">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-fg px-2">
              Termin{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                vereinbaren
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-textSecondary px-4">
              Lassen Sie uns gemeinsam die perfekte KI-Lösung für Ihre Praxis entwickeln
            </p>
          </div>

          <div className="bg-white backdrop-blur-xl rounded-3xl border border-primary/10 p-4 sm:p-6 md:p-10 shadow-2xl shadow-primary/10 relative overflow-hidden">
            {/* Decorative gradient borders */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            <BookingCalendar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
