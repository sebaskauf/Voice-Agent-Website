'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bgDark/95 border-b border-white/[0.06]">
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

          {/* Desktop Navigation - Resend Style */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/#home"
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
              className="text-fg/70 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px]"
            >
              Home
            </Link>
            <Link
              href="/#dashboard"
              onMouseEnter={() => setHoveredLink('dashboard')}
              onMouseLeave={() => setHoveredLink(null)}
              className="text-fg/70 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px]"
            >
              Dashboard
            </Link>

            {/* Features Dropdown Style */}
            <div className="relative">
              <Link
                href="/#features"
                onMouseEnter={() => setHoveredLink('features')}
                onMouseLeave={() => setHoveredLink(null)}
                className="text-fg/70 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px] flex items-center gap-1"
              >
                Features
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${hoveredLink === 'features' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-white/10 mx-2"></div>

            {/* CTA Buttons */}
            <Link
              href="/kontakt"
              className="text-fg/70 hover:text-fg font-medium px-4 py-2 rounded-md transition-colors duration-200 text-[15px]"
            >
              Log In
            </Link>
            <Link
              href="/kontakt"
              className="bg-white hover:bg-white/90 text-bgDark font-medium px-5 py-2 rounded-md transition-all duration-200 text-[15px] ml-1"
            >
              Jetzt starten
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-fg/70 hover:text-fg focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-md p-2 transition-colors duration-200"
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
          <div className="md:hidden pb-4 pt-2 border-t border-white/[0.06] mt-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              <Link
                href="/#home"
                className="text-fg/70 hover:text-fg hover:bg-white/[0.03] font-medium rounded-md px-4 py-2.5 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#dashboard"
                className="text-fg/70 hover:text-fg hover:bg-white/[0.03] font-medium rounded-md px-4 py-2.5 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/#features"
                className="text-fg/70 hover:text-fg hover:bg-white/[0.03] font-medium rounded-md px-4 py-2.5 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <div className="h-px bg-white/[0.06] my-2"></div>
              <Link
                href="/kontakt"
                className="bg-white hover:bg-white/90 text-bgDark font-medium rounded-md px-4 py-2.5 transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Jetzt starten
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
