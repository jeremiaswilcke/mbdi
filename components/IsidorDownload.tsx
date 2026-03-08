"use client";

import { useState } from "react";
import Link from "next/link";

export function IsidorDownload() {
  const [accepted, setAccepted] = useState(false);

  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
          Jetzt herunterladen
        </h2>
        <p className="font-body text-foreground/70 mb-4">
          Isidor Suite v2.2.0 &mdash; WordPress-Plugin als ZIP-Datei.
          Installieren Sie es direkt über das WordPress-Dashboard unter Plugins
          &rarr; Installieren &rarr; Plugin hochladen.
        </p>
        <p className="font-body text-foreground/50 text-sm mb-2">
          Kostenlos. Keine Registrierung erforderlich.
        </p>
        <p className="font-body text-foreground/50 text-sm mb-8">
          Für automatische Updates benötigen Sie zusätzlich das Plugin{" "}
          <a
            href="https://github.com/afragen/git-updater"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-secondary transition-colors"
          >
            Git Updater
          </a>
          .
        </p>

        {/* AGB-Checkbox */}
        <label className="inline-flex items-start gap-3 text-left cursor-pointer mb-8 max-w-md mx-auto">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary shrink-0 cursor-pointer"
          />
          <span className="font-body text-sm text-foreground/70">
            Ich habe die{" "}
            <Link
              href="/isidor/agb"
              target="_blank"
              className="text-primary underline hover:text-secondary transition-colors"
            >
              Allgemeinen Geschäftsbedingungen (AGB)
            </Link>{" "}
            gelesen und akzeptiere diese. Mir ist insbesondere bekannt, dass die
            Software kostenlos und ohne jegliche Gewährleistung oder Haftung
            bereitgestellt wird.
          </span>
        </label>

        <div>
          {accepted ? (
            <a
              href="/downloads/isidor-suite.zip"
              download
              className="inline-flex items-center gap-3 bg-primary text-white font-subheading px-10 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Isidor Suite herunterladen
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-3 bg-gray-300 text-gray-500 font-subheading px-10 py-4 rounded-xl cursor-not-allowed text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Bitte AGB akzeptieren
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
