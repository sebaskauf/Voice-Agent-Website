import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-bgDark2 border-t border-borderLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-fg">
              Optim<span className="text-primary">AI</span>te
            </h3>
            <p className="text-textSecondary">
              KI-Telefon-Assistenten für Arztpraxen – 24/7, DSGVO-konform, auf Deutsch
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-fg mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-textSecondary hover:text-primary focus:ring-2 focus:ring-primary rounded px-2 py-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-textSecondary hover:text-primary focus:ring-2 focus:ring-primary rounded px-2 py-1 inline-block"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="text-textSecondary hover:text-primary focus:ring-2 focus:ring-primary rounded px-2 py-1 inline-block"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-fg mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-textSecondary hover:text-primary focus:ring-2 focus:ring-primary rounded px-2 py-1 inline-block"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-textSecondary hover:text-primary focus:ring-2 focus:ring-primary rounded px-2 py-1 inline-block"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-borderLight">
          <p className="text-center text-textSecondary">
            © {new Date().getFullYear()} Optim<span className="text-primary">AI</span>te. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
