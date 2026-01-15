"use client";

import React from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="font-bold text-xl text-white">Reflektif</span>
              </Link>
              <p className="text-neutral-400 mb-6 max-w-sm">
                Kendini kesfet, gelecegini sec. Turkiye&apos;nin ilk AI destekli
                yetkinlik degerlendirme ve meslek eslestirme platformu.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/reflektif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/reflektif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/reflektif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@reflektif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Moduller */}
            <div>
              <h4 className="font-semibold text-white mb-4">Moduller</h4>
              <ul className="space-y-3">
                {footerNavigation.moduller.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sirket */}
            <div>
              <h4 className="font-semibold text-white mb-4">Sirket</h4>
              <ul className="space-y-3">
                {footerNavigation.sirket.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destek */}
            <div>
              <h4 className="font-semibold text-white mb-4">Destek</h4>
              <ul className="space-y-3">
                {footerNavigation.destek.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Iletisim */}
            <div>
              <h4 className="font-semibold text-white mb-4">Iletisim</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@reflektif.net"
                    className="flex items-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    info@reflektif.net
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+908501234567"
                    className="flex items-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    0850 123 45 67
                  </a>
                </li>
                <li>
                  <span className="flex items-start text-neutral-400">
                    <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Istanbul, Turkiye</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} Reflektif. Tum haklari saklidir.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {footerNavigation.yasal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
