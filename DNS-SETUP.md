# DNS Setup für optimaite.agency

## Wo ist deine Domain registriert?

Je nachdem, wo du deine Domain `optimaite.agency` registriert hast, sind die Schritte leicht unterschiedlich. Hier sind Anleitungen für die gängigsten Provider:

---

## 1. Namecheap

1. Logge dich bei [namecheap.com](https://namecheap.com) ein
2. Gehe zu "Domain List"
3. Klicke auf "Manage" neben `optimaite.agency`
4. Wähle "Advanced DNS" Tab
5. Füge folgende Records hinzu:

### Für Vercel:
```
Type: CNAME Record
Host: @
Value: cname.vercel-dns.com
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Wichtig:** Lösche vorhandene A-Records und CNAME-Records für @ und www

---

## 2. GoDaddy

1. Logge dich bei [godaddy.com](https://godaddy.com) ein
2. Gehe zu "My Products" → "Domains"
3. Klicke auf die drei Punkte neben `optimaite.agency` → "Manage DNS"
4. Füge folgende Records hinzu:

### Für Vercel:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 1 Hour

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

---

## 3. Cloudflare

1. Logge dich bei [cloudflare.com](https://cloudflare.com) ein
2. Wähle deine Domain `optimaite.agency`
3. Gehe zu "DNS" → "Records"
4. Füge folgende Records hinzu:

### Für Vercel:
```
Type: CNAME
Name: @
Content: cname.vercel-dns.com
Proxy status: DNS only (grau) - WICHTIG!
TTL: Auto

Type: CNAME
Name: www
Content: cname.vercel-dns.com
Proxy status: DNS only (grau)
TTL: Auto
```

**Wichtig:** Schalte den Cloudflare Proxy (orange Cloud) aus, sonst funktioniert Vercel SSL nicht!

---

## 4. Google Domains / Google Cloud DNS

1. Logge dich bei [domains.google.com](https://domains.google.com) ein
2. Wähle `optimaite.agency`
3. Klicke auf "DNS" im linken Menü
4. Scrolle zu "Custom resource records"
5. Füge hinzu:

### Für Vercel:
```
Name: @
Type: CNAME
TTL: 1H
Data: cname.vercel-dns.com

Name: www
Type: CNAME
TTL: 1H
Data: cname.vercel-dns.com
```

---

## 5. IONOS (1&1)

1. Logge dich bei [ionos.de](https://ionos.de) ein
2. Gehe zu "Domains & SSL"
3. Wähle `optimaite.agency`
4. Klicke auf "DNS Einstellungen"
5. Füge hinzu:

### Für Vercel:
```
Typ: CNAME
Hostname: @
Ziel: cname.vercel-dns.com

Typ: CNAME
Hostname: www
Ziel: cname.vercel-dns.com
```

---

## 6. Andere Provider (Allgemeine Anleitung)

Falls dein Provider oben nicht aufgeführt ist:

1. Logge dich in deinen Domain-Provider Account ein
2. Suche nach "DNS Settings", "DNS Management" oder "Nameserver Settings"
3. Erstelle folgende DNS Records:

### Option A: CNAME (Empfohlen für Vercel)
```
Type: CNAME
Host/Name: @ (oder leer lassen)
Value/Target: cname.vercel-dns.com
TTL: 3600 (oder 1 Hour)

Type: CNAME
Host/Name: www
Value/Target: cname.vercel-dns.com
TTL: 3600 (oder 1 Hour)
```

### Option B: A-Record (Fallback)
```
Type: A
Host/Name: @
Value/IP: 76.76.21.21
TTL: 3600

Type: CNAME
Host/Name: www
Value/Target: optimaite.agency
TTL: 3600
```

---

## Vercel Custom Nameservers (Alternative)

Du kannst auch Vercels Nameserver nutzen:

1. Gehe in Vercel zu deinem Projekt → Settings → Domains
2. Füge `optimaite.agency` hinzu
3. Vercel zeigt dir Custom Nameservers an (z.B. `ns1.vercel-dns.com`)
4. Ändere bei deinem Domain-Provider die Nameserver zu Vercels Nameservern

**Vorteil:** Vercel managed alle DNS-Einstellungen automatisch

---

## DNS Propagation prüfen

Nach der Änderung kannst du den Status prüfen:

### Online Tools:
- [whatsmydns.net](https://whatsmydns.net) - Zeigt DNS weltweit
- [dnschecker.org](https://dnschecker.org) - Multi-Location Check

### Terminal:
```bash
# DNS Lookup
dig optimaite.agency

# Nameserver prüfen
nslookup optimaite.agency

# Detaillierte Info
dig optimaite.agency +trace
```

### Erwartete Ausgabe (nach Propagation):
```
optimaite.agency.    300    IN    CNAME    cname.vercel-dns.com.
```

---

## Timeframes

- **TTL (Time To Live):** Die Zeit, wie lange DNS-Server die Daten cachen
- **Propagation:** 5 Minuten bis 48 Stunden (meist < 1 Stunde)
- **SSL-Zertifikat:** Vercel erstellt dies automatisch nach erfolgreicher DNS-Verifizierung (5-10 Min)

---

## Troubleshooting

### "Domain kann nicht verifiziert werden"
- Warte 10-30 Minuten nach DNS-Änderung
- Prüfe, ob alte A-Records gelöscht wurden
- Bei Cloudflare: Proxy-Status ausschalten

### "SSL-Zertifikat fehlt"
- DNS muss erst vollständig propagiert sein
- Vercel erstellt SSL automatisch (kann 10 Min dauern)
- Erzwinge Neuversuch in Vercel: Domain entfernen und neu hinzufügen

### "CNAME wird nicht unterstützt für @"
- Manche Provider unterstützen kein CNAME für Root-Domain
- Nutze A-Record: `76.76.21.21`
- Oder wechsle zu Vercel Nameservers

### "Website zeigt alte Inhalte"
- Browser-Cache leeren
- Inkognito-Modus testen
- DNS-Propagation noch nicht abgeschlossen

---

## Checkliste

- [ ] DNS-Records bei Domain-Provider eingetragen
- [ ] Alte A-Records gelöscht (falls vorhanden)
- [ ] Domain in Vercel hinzugefügt
- [ ] DNS-Propagation mit `dig` geprüft
- [ ] SSL-Zertifikat aktiv (grünes Schloss)
- [ ] Website erreichbar über `optimaite.agency` und `www.optimaite.agency`

---

## Wichtige Hinweise

1. **Backup:** Notiere dir die aktuellen DNS-Einstellungen vor Änderungen
2. **Email:** Falls du Email mit dieser Domain nutzt, stelle sicher, dass MX-Records nicht gelöscht werden
3. **Subdomains:** Weitere Subdomains (z.B. `api.optimaite.agency`) können später in Vercel hinzugefügt werden
4. **TTL:** Setze TTL auf 300-600 Sekunden während der Migration für schnellere Änderungen
5. **WWW vs Non-WWW:** Vercel leitet automatisch zwischen beiden um

---

## Support

Falls Probleme auftreten:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Vercel Docs: [vercel.com/docs/projects/domains](https://vercel.com/docs/projects/domains)
- Domain-Provider Support kontaktieren
