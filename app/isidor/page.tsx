import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Isidor -- Pfarrverwaltung für WordPress",
  description:
    "Isidor ist eine umfassende Pfarrverwaltungssoftware als WordPress-Plugin: Dienstplanung, Liedverwaltung, Finanzen, Raumplanung und mehr.",
};

const modules = [
  {
    name: "Liturgus",
    description:
      "Diensteplanung für Gottesdienste: Lektoren, Kommunionhelfer, Ministranten, Technik und mehr. Automatische Zuordnung, Tauschbörse und Erinnerungen.",
    icon: "📋",
  },
  {
    name: "Cantus",
    description:
      "Liedverwaltung und Liedplan-Erstellung. Zentrales Liedarchiv mit Gotteslob-Nummern, Liedpläne pro Gottesdienst erstellen und teilen.",
    icon: "🎵",
  },
  {
    name: "Consilium",
    description:
      "Sitzungsmanagement für Pfarrgemeinderat und Vermögensverwaltungsrat. Einladungen mit RSVP, Tagesordnung, Abstimmungen und Protokollführung.",
    icon: "🏛️",
  },
  {
    name: "Cellerar",
    description:
      "Finanzverwaltung für die Pfarre: Einnahmen, Ausgaben, Kostenstellen und Berichte. Übersichtlich und einfach zu bedienen.",
    icon: "💶",
  },
  {
    name: "Agenda",
    description:
      "Raum- und Terminbuchung. Pfarrsaal, Sitzungsräume und andere Räumlichkeiten verwalten, Termine koordinieren und Doppelbuchungen vermeiden.",
    icon: "📅",
  },
  {
    name: "Liturgia",
    description:
      "Liturgische Planung und Gottesdienstgestaltung. Fürbitten, Lesungen, besondere Anlässe -- alles an einem Ort strukturiert vorbereiten.",
    icon: "⛪",
  },
  {
    name: "Sakristan",
    description:
      "Sakristei-Verwaltung: Inventar, liturgische Gewänder, Geräte und Verbrauchsmaterial. Überblick behalten und rechtzeitig nachbestellen.",
    icon: "🔑",
  },
  {
    name: "Tagesplan",
    description:
      "Tagesübersicht für die Pfarre. Alle Termine, Dienste und Aufgaben eines Tages auf einen Blick -- für Pfarrer, Sekretariat und Team.",
    icon: "📊",
  },
];

const advantages = [
  {
    title: "Läuft in WordPress",
    description:
      "Kein separates System nötig. Isidor integriert sich nahtlos in Ihre bestehende WordPress-Installation. Ihre Mitarbeiter arbeiten dort, wo sie es gewohnt sind.",
  },
  {
    title: "Modular aufgebaut",
    description:
      "Aktivieren Sie nur die Module, die Sie brauchen. Starten Sie klein und erweitern Sie nach Bedarf -- ohne Overhead.",
  },
  {
    title: "Keine laufenden Kosten",
    description:
      "Isidor wird auf Ihrem eigenen Server betrieben. Keine monatlichen Gebühren, keine Abhängigkeit von Drittanbietern, volle Datenkontrolle.",
  },
  {
    title: "Auto-Updates",
    description:
      "Über GitHub-Integration erhält Isidor automatische Updates direkt im WordPress-Dashboard. Immer aktuell, ohne manuellen Aufwand.",
  },
  {
    title: "Datenschutz",
    description:
      "Alle Daten bleiben auf Ihrem Server. Keine Cloud, keine externen Dienste. DSGVO-konform und unter Ihrer vollen Kontrolle.",
  },
  {
    title: "Entwickelt für Pfarren",
    description:
      "Isidor wurde von und für Pfarrgemeinden entwickelt. Jedes Modul orientiert sich an den realen Abläufen einer katholischen Pfarre.",
  },
];

export default function IsidorPage() {
  return (
    <>
      <Hero
        hero_title="Isidor. Pfarrverwaltung neu gedacht."
        hero_description="Eine umfassende Verwaltungssoftware für katholische Pfarren -- als WordPress-Plugin. Modular, kostenlos, datensicher."
        hero_image={{ url: "/images/hero-church.png", alt: "Isidor Pfarrverwaltung" }}
        primary_cta_text="Jetzt herunterladen"
        primary_cta_link="#download"
        secondary_cta_text="Module ansehen"
        secondary_cta_link="#module"
      />

      {/* Intro */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
            Was ist Isidor?
          </h2>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Isidor ist eine umfassende Pfarrverwaltungssoftware, die als
            WordPress-Plugin installiert wird. Statt vieler einzelner Tools,
            Excel-Listen und E-Mail-Ketten bietet Isidor eine zentrale Plattform
            für alles, was eine Pfarre organisatorisch braucht: von der
            Diensteplanung über die Finanzverwaltung bis zur Liedplan-Erstellung.
          </p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mt-4">
            Entwickelt von{" "}
            <span className="font-semibold">Mariabrunn Digital</span> in
            Zusammenarbeit mit aktiven Pfarrgemeinden -- praxisnah, modular und
            ohne laufende Kosten.
          </p>
        </div>
      </section>

      {/* Module */}
      <section id="module" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-4">
            8 Module. Ein System.
          </h2>
          <p className="text-center text-foreground/60 font-body mb-16 max-w-2xl mx-auto">
            Aktivieren Sie nur, was Sie brauchen. Jedes Modul funktioniert
            eigenständig und arbeitet nahtlos mit den anderen zusammen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-3xl mb-3 block">{mod.icon}</span>
                <h3 className="font-heading text-lg text-primary mb-2">
                  {mod.name}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-16">
            Warum Isidor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex gap-4">
                <div className="w-2 bg-secondary rounded-full shrink-0" />
                <div>
                  <h3 className="font-heading text-lg text-primary mb-2">
                    {adv.title}
                  </h3>
                  <p className="font-body text-foreground/70 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systemanforderungen */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-8">
            Systemanforderungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-2xl mb-2">WordPress 6.0+</h3>
              <p className="text-white/70 font-body">Aktuelle WordPress-Installation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-2xl mb-2">PHP 8.0+</h3>
              <p className="text-white/70 font-body">Modernes PHP für Stabilität</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-2xl mb-2">MySQL 5.7+</h3>
              <p className="text-white/70 font-body">Oder MariaDB 10.3+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
            Jetzt herunterladen
          </h2>
          <p className="font-body text-foreground/70 mb-4">
            Isidor Suite v2.2.0 -- WordPress-Plugin als ZIP-Datei. Installieren
            Sie es direkt über das WordPress-Dashboard unter Plugins &rarr;
            Installieren &rarr; Plugin hochladen.
          </p>
          <p className="font-body text-foreground/50 text-sm mb-8">
            Kostenlos. Keine Registrierung erforderlich.
          </p>
          <a
            href="/downloads/isidor-suite.zip"
            download
            className="inline-flex items-center gap-3 bg-primary text-white font-subheading px-10 py-4 rounded-xl hover:bg-primary/90 transition-colors text-lg"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Isidor Suite herunterladen
          </a>
        </div>
      </section>

      <ContactCTA
        title="Fragen zu Isidor?"
        description="Sie brauchen Hilfe bei der Installation oder haben Fragen zu den Modulen? Schreiben Sie uns -- wir helfen gerne."
      />
    </>
  );
}
