# Cal.com Terminbuchung - Setup Anleitung

Die Terminbuchungsfunktion ist jetzt implementiert! Folgen Sie diesen Schritten, um sie zu aktivieren:

## 1. Cal.com Account erstellen

1. Gehen Sie zu [cal.com](https://cal.com)
2. Erstellen Sie einen kostenlosen Account
3. Wählen Sie Ihren Benutzernamen (z.B. `sebastian-kauffmann`)

## 2. Event Type erstellen

1. In Cal.com Dashboard → "Event Types"
2. Erstellen Sie einen neuen Event Type:
   - **Name**: "Beratungsgespräch" oder "30-Minuten-Call"
   - **Duration**: 30 Minuten
   - **Link**: Wird automatisch generiert (z.B. `/30min`)

3. **Verfügbarkeit konfigurieren**:
   - Gehen Sie zu "Availability"
   - Setzen Sie Ihre verfügbaren Zeiten
   - **Wichtig**: Setzen Sie "Minimum notice" auf "24 hours" (damit frühester Termin morgen ist)
   - **Booking window**: "7 days into the future" (max. 1 Woche im Voraus)

4. **Google Calendar verbinden**:
   - Gehen Sie zu "Integrations"
   - Verbinden Sie Ihr Google Calendar
   - Damit werden Termine automatisch synchronisiert

## 3. Environment Variable setzen

Öffnen Sie `.env.local` und ersetzen Sie:

```env
NEXT_PUBLIC_CALCOM_USERNAME=your-username
```

Mit Ihrem tatsächlichen Cal.com Benutzernamen:

```env
NEXT_PUBLIC_CALCOM_USERNAME=sebastian-kauffmann
```

## 4. Development Server neu starten

```bash
npm run dev
```

## 5. Testen

1. Gehen Sie zu `/kontakt`
2. Sie sollten jetzt den Kalender sehen
3. Wählen Sie einen Zeitslot aus
4. Füllen Sie das Formular aus
5. Der Termin wird direkt in Ihr Google Calendar eingetragen

## Wie es funktioniert

1. **Schritt 1**: Nutzer sieht Kalender mit verfügbaren Zeitslots
2. **Schritt 2**: Nutzer wählt einen Zeitslot → wird zu Formular weitergeleitet
3. **Schritt 3**: Nutzer füllt Kontaktdaten aus
4. **Schritt 4**: Bei Submit wird:
   - Termin über Cal.com API gebucht
   - In Ihr Google Calendar eingetragen
   - Bestätigungs-Email an beide Parteien geschickt
   - Kontaktdaten in Ihrer Datenbank gespeichert

## Anpassungen

### Event-Dauer ändern

In `src/components/BookingCalendar.tsx` Zeile 52:

```tsx
calLink={`${process.env.NEXT_PUBLIC_CALCOM_USERNAME}/30min`}
```

Ändern Sie `/30min` zu `/60min` oder was auch immer Sie in Cal.com erstellt haben.

### Kalender-Theme anpassen

In `BookingCalendar.tsx`:

```tsx
cal('ui', {
  theme: 'light',
  styles: { branding: { brandColor: '#38FAFF' } }, // Ihre Markenfarbe
  hideEventTypeDetails: false,
  layout: 'month_view',
});
```

### Verfügbarkeit ändern

In Cal.com Dashboard → Availability → Ihre Zeiten anpassen

## Kosten

- **Cal.com Free Plan**: Komplett kostenlos, unbegrenzte Buchungen
- **Cal.com Pro** ($12/Monat): Für erweiterte Features wie Team-Scheduling, Workflows, etc.

Für Ihre Zwecke reicht der Free Plan vollkommen aus!

## Support

Bei Fragen zur Integration: [Cal.com Dokumentation](https://cal.com/docs)
