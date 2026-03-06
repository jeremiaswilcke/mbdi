"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl">Mariabrunn Digital</h3>
            <p className="text-white/60 text-sm font-body leading-relaxed">
              Die multimediale Plattform der Pfarre Mariabrunn. Kirche digital
              erleben.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="font-subheading text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/gottesdienste"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Gottesdienste
                </Link>
              </li>
              <li>
                <Link
                  href="/livestream"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Livestream
                </Link>
              </li>
              <li>
                <Link
                  href="/auf-den-punkt"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Auf den Punkt
                </Link>
              </li>
              <li>
                <Link
                  href="/bibel"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Bibel in einem Jahr
                </Link>
              </li>
              <li>
                <Link
                  href="/kirche"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Kirche
                </Link>
              </li>
              <li>
                <Link
                  href="/mitmachen"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Mitmachen
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Rechtliches */}
          <div className="space-y-4">
            <h4 className="font-subheading text-sm uppercase tracking-wider text-white">
              Rechtliches
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/dsgvo"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/krankenkommunion"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Krankenkommunion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Folge uns */}
          <div className="space-y-4">
            <h4 className="font-subheading text-sm uppercase tracking-wider text-white">
              Folge uns
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@MariabrunnDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/pfarremariabrunn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pfarremariabrunn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>
            &copy; {currentYear} Pfarre Mariabrunn. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
