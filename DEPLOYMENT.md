# Deployment Anleitung für optimaite.agency

## Option 1: Vercel (Empfohlen)

### Schritt 1: Vercel Account erstellen
1. Gehe zu [vercel.com](https://vercel.com)
2. Registriere dich mit deinem GitHub Account

### Schritt 2: Projekt deployen
```bash
# Vercel CLI installieren (falls noch nicht installiert)
npm i -g vercel

# Im Projektverzeichnis ausführen
vercel

# Für Production Deployment
vercel --prod
```

**Oder über die Vercel Web-Oberfläche:**
1. Klicke auf "Add New Project"
2. Importiere dein Git Repository
3. Vercel erkennt automatisch Next.js
4. Klicke auf "Deploy"

### Schritt 3: Domain verbinden

1. Gehe in dein Vercel Dashboard
2. Wähle dein Projekt aus
3. Klicke auf "Settings" → "Domains"
4. Füge `optimaite.agency` hinzu
5. Vercel zeigt dir die DNS-Einstellungen an

### DNS-Einstellungen bei deinem Domain-Provider

Füge folgende DNS-Records hinzu:

**Variante A: CNAME (Empfohlen)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

**Variante B: A-Record**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Für www Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Wichtige Hinweise:
- DNS-Änderungen können bis zu 48 Stunden dauern (meist aber nur wenige Minuten)
- Vercel erstellt automatisch ein kostenloses SSL-Zertifikat
- Automatische Deployments bei jedem Git Push

---

## Option 2: Netlify

### Schritt 1: Netlify Account erstellen
1. Gehe zu [netlify.com](https://netlify.com)
2. Registriere dich mit deinem GitHub Account

### Schritt 2: Projekt deployen
1. Klicke auf "Add new site" → "Import an existing project"
2. Verbinde dein Git Repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Klicke auf "Deploy"

### Schritt 3: Domain verbinden
1. Gehe zu "Site settings" → "Domain management"
2. Klicke auf "Add custom domain"
3. Gib `optimaite.agency` ein
4. Folge den DNS-Anweisungen

### DNS-Einstellungen für Netlify
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [deine-site].netlify.app
```

---

## Option 3: Eigener Server / VPS

### Voraussetzungen:
- Node.js 20+ installiert
- Nginx oder Apache als Reverse Proxy
- SSL-Zertifikat (z.B. via Let's Encrypt)

### Deployment-Schritte:

1. **Projekt builden:**
```bash
npm run build
```

2. **Server starten:**
```bash
npm start
# Oder mit PM2 für Production:
npm install -g pm2
pm2 start npm --name "optimaite-agency" -- start
```

3. **Nginx Konfiguration** (`/etc/nginx/sites-available/optimaite.agency`):
```nginx
server {
    listen 80;
    server_name optimaite.agency www.optimaite.agency;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **SSL-Zertifikat mit Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d optimaite.agency -d www.optimaite.agency
```

5. **DNS-Einstellungen:**
```
Type: A
Name: @
Value: [Deine Server IP]

Type: A
Name: www
Value: [Deine Server IP]
```

---

## Umgebungsvariablen

Vergiss nicht, deine Umgebungsvariablen zu setzen:

**Vercel/Netlify:**
- Gehe zu Project Settings → Environment Variables
- Füge alle Variablen aus deiner `.env.local` hinzu

**Eigener Server:**
- Erstelle eine `.env.production` Datei
- Oder setze die Variablen in deiner Shell/PM2 Config

---

## Troubleshooting

### DNS propagiert nicht
```bash
# DNS Status prüfen
dig optimaite.agency
nslookup optimaite.agency
```

### Build Fehler
```bash
# Lokal testen
npm run build
npm start
```

### SSL-Fehler
- Warte 5-10 Minuten nach DNS-Änderung
- Vercel/Netlify erstellen SSL automatisch
- Bei eigenem Server: Certbot erneut ausführen

---

## Empfehlung

Für dein Next.js Projekt empfehle ich **Vercel**:
- Einfachste Einrichtung
- Optimale Next.js Performance
- Automatische Deployments
- Kostenlos für persönliche Projekte
- Enterprise-Grade CDN inklusive
