'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function BookingCalendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#38FAFF' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">
          Wählen Sie Ihren{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wunschtermin
          </span>
        </h2>
        <p className="text-textSecondary">
          Buchen Sie einen kostenlosen Beratungstermin. Frühester Termin: morgen.
        </p>
      </div>

      {/* Cal.com Embed */}
      <div className="bg-white rounded-2xl border-2 border-primary/20 overflow-hidden shadow-lg">
        <Cal
          calLink={`${process.env.NEXT_PUBLIC_CALCOM_USERNAME}/30min`}
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{
            layout: 'month_view',
            theme: 'light',
          }}
        />
      </div>

      {/* Info Footer */}
      <div className="mt-6 flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
        <svg
          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-sm text-textSecondary">
          <p className="font-semibold text-fg mb-1">So funktioniert&apos;s:</p>
          <ul className="space-y-1">
            <li>✓ Wählen Sie einen verfügbaren Zeitslot aus dem Kalender</li>
            <li>✓ Geben Sie Ihre Kontaktdaten ein</li>
            <li>✓ Erhalten Sie eine Bestätigung per E-Mail mit Kalenderanhang</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
