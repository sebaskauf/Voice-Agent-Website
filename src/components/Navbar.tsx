'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);

  const features = [
    { name: 'Schnelle Integration', href: '/#features' },
    { name: 'Höchste Sicherheit', href: '/#features' },
    { name: 'Skalierbare Lösungen', href: '/#features' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bgDark/98 border-b border-borderLight shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with 3/4 cut-out O */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-fg flex items-center gap-0 transition-all duration-300 group">
              <span className="relative inline-flex items-center">
                {/* 3/4 O with cut-out on top-right */}
                <svg className="w-5 h-5 mr-0.5" viewBox="0 0 24 24" fill="none">
                  {/* 3/4 circle arc - missing top-right quarter */}
                  <path
                    d="M 12 4 A 8 8 0 1 0 20 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-fg"
                  />
                </svg>
                <span>ptim</span>
              </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI</span>
              <span>te</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/#home"
              className="text-fg/80 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px]"
            >
              Home
            </Link>
            <Link
              href="/#dashboard"
              className="text-fg/80 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px]"
            >
              Dashboard
            </Link>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowFeaturesDropdown(true)}
              onMouseLeave={() => setShowFeaturesDropdown(false)}
            >
              <button
                className="text-fg/80 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px] flex items-center gap-1"
              >
                Features
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showFeaturesDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu with extended hover area */}
              {showFeaturesDropdown && (
                <div className="absolute top-full left-0 pt-2 -ml-4">
                  {/* Invisible bridge to prevent gap */}
                  <div className="h-2 w-full"></div>
                  <div className="w-64 bg-white border border-borderLight rounded-lg shadow-2xl shadow-primary/10 overflow-hidden animate-fadeIn">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={feature.href}
                        className="block px-4 py-3 text-fg/80 hover:text-fg hover:bg-primary/10 transition-all duration-200 border-b border-borderLight last:border-b-0"
                        onClick={() => setShowFeaturesDropdown(false)}
                      >
                        <span className="text-[15px] font-medium">{feature.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-white/10 mx-2"></div>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-6 py-2 rounded-md transition-all duration-200 text-[15px] ml-1 shadow-lg shadow-primary/20"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-fg/80 hover:text-fg focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-md p-2 transition-colors duration-200"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-borderLight mt-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              <Link
                href="/#home"
                className="text-fg/80 hover:text-fg hover:bg-primary/10 font-medium rounded-md px-4 py-2.5 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#dashboard"
                className="text-fg/80 hover:text-fg hover:bg-primary/10 font-medium rounded-md px-4 py-2.5 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>

              {/* Mobile Features Section */}
              <div className="text-textSecondary text-xs font-semibold px-4 pt-2 pb-1">FEATURES</div>
              {features.map((feature, index) => (
                <Link
                  key={index}
                  href={feature.href}
                  className="text-fg/80 hover:text-fg hover:bg-primary/10 font-medium rounded-md px-4 py-2.5 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {feature.name}
                </Link>
              ))}

              <div className="h-px bg-borderLight my-2"></div>
              <Link
                href="/kontakt"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium rounded-md px-4 py-2.5 transition-all duration-200 text-center shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
