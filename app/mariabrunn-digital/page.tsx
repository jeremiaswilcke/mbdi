import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { FormWorkshopRegistration } from "@/components/FormWorkshopRegistration";

export const metadata: Metadata = {
  title: "Mariabrunn Digital -- Workshops & Vision",
  description:
    "Über das Projekt Mariabrunn Digital: Vision, Mission und praxisnahe Workshops für Pfarren -- AI, Öffentlichkeitsarbeit, Livestreaming.",
};

const fallback: WWDPageGeneric = {
  title: "Mariabrunn Digital",
  content: "",
  sections: {
    hero: {
      hero_title: "Mariabrunn Digital",
      hero_description:
        "Glaube. Gemeinschaft. Digital. -- Ein Medienprojekt der Pfarre Mariabrunn für die Kirche von heute.",
      primary_cta_text: "Workshops ansehen",
      primary_cta_link: "#workshops",
      secondary_cta_text: "Mitmachen",
      secondary_cta_link: "/mitmachen",
    },
  },
};

const workshops = [
  {
    title: "AI in der Pfarre",
    subtitle: "Künstliche Intelligenz als Werkzeug der Verkündigung",
    description:
      "Wie kann KI den Pfarralltag erleichtern? Dieser Workshop zeigt praktisch, wie Sie ChatGPT und andere AI-Tools sinnvoll einsetzen: für Predigtvorbereitung, Pfarrbriefe, Social-Media-Texte, Übersetzungen und administrative Aufgaben. Kein Vorwissen nötig.",
    topics: [
      "Grundlagen: Was kann AI -- und was nicht?",
      "Praxisübungen: Pfarrbrief, Predigt-Impulse, Fürbitten mit AI erstellen",
      "Social-Media-Posts und Ankündigungen in Sekunden",
      "Datenschutz und ethische Überlegungen",
      "AI für Verwaltung: E-Mails, Protokolle, Terminplanung",
    ],
    duration: "3 Stunden",
    format: "Vor Ort oder Online",
    audience: "Pfarrteam, PGR, Sekretariat, Ehrenamtliche",
  },
  {
    title: "Öffentlichkeitsarbeit mit AI",
    subtitle: "Professionelle Pfarrkommunikation mit KI-Unterstützung",
    description:
      "Viele Pfarren haben großartige Inhalte, aber wenig Zeit für Öffentlichkeitsarbeit. Dieser Workshop zeigt, wie AI die Kommunikation professionalisiert -- von der Website über Social Media bis zum Pfarrblatt. Hands-on mit echten Praxisbeispielen.",
    topics: [
      "Kommunikationsstrategie für Pfarren mit AI-Unterstützung",
      "Bildgenerierung: Flyer, Social-Media-Grafiken, Plakate",
      "Texte für verschiedene Kanäle automatisch anpassen",
      "Newsletter und Pfarrbrief effizient erstellen",
      "Pressearbeit und Medienkooperation mit AI-Hilfe",
      "Webseiten-Inhalte optimieren und aktuell halten",
    ],
    duration: "4 Stunden",
    format: "Vor Ort oder Online",
    audience: "Öffentlichkeitsarbeit, PGR, Pfarrsekretariat",
  },
  {
    title: "Livestreaming & Videographie",
    subtitle: "Professionelle Ergebnisse mit knappem Budget",
    description:
      "Gottesdienste live übertragen, ohne ein Vermögen auszugeben? Dieser Workshop zeigt, wie es geht. Von der Kamerawahl über den Ton bis zur Software -- wir teilen unsere Erfahrungen aus hunderten Livestreams und zeigen, wie Ihre Pfarre mit minimalem Budget maximale Qualität erreicht.",
    topics: [
      "Equipment-Guide: Was brauche ich wirklich? (ab 500 Euro)",
      "Kameraführung und Bildgestaltung in der Kirche",
      "Tontechnik: Mikrofone, Mischpult, Akustik",
      "Software: OBS, YouTube Live, Streaming-Plattformen",
      "Mehrkamera-Setup mit einem kleinen Team",
      "Häufige Fehler vermeiden und Troubleshooting",
      "Aufzeichnung und Nachbearbeitung von Predigten",
    ],
    duration: "Ganztägig (6 Stunden)",
    format: "Vor Ort (mit praktischen Übungen)",
    audience: "Technik-Team, KSMJ, interessierte Ehrenamtliche",
  },
];

export default async function MariabrunnDigitalPage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("mariabrunn-digital")) ?? fallback;
  const hero = data.sections?.hero ?? fallback.sections!.hero!;

  return (
    <>
      <Hero
        hero_title={hero.hero_title}
        hero_description={hero.hero_description}
        hero_image={hero.hero_image}
        primary_cta_text={hero.primary_cta_text}
        primary_cta_link={hero.primary_cta_link}
        secondary_cta_text={hero.secondary_cta_text}
        secondary_cta_link={hero.secondary_cta_link}
      />

      {/* Vision */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
            Vision & Mission
          </h2>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Wir glauben, dass die Frohe Botschaft dort sein soll, wo die Menschen
            sind -- auch im digitalen Raum. Mariabrunn Digital verbindet Glaube,
            Gemeinschaft und moderne Medientechnik, um die Pfarre für alle erlebbar
            zu machen.
          </p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mt-4">
            Unser Team aus ehrenamtlichen Mitarbeitern produziert Livestreams,
            Podcasts, tägliche Kurzauslegungen und das Bibelprojekt. Dabei setzen
            wir auf professionelle Qualität mit einfachen Mitteln -- und teilen
            unser Wissen gerne mit anderen Pfarren.
          </p>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="py-24 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Workshops für Pfarren
            </h2>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto">
              Praxisnahe Workshops, in denen wir unsere Erfahrungen weitergeben.
              Für Pfarrteams, Ehrenamtliche und alle, die ihre Pfarre
              voranbringen wollen.
            </p>
          </div>

          <div className="space-y-12">
            {workshops.map((ws, i) => (
              <div
                key={ws.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-heading text-2xl text-primary">
                        {ws.title}
                      </h3>
                      <p className="font-subheading text-secondary text-sm mt-1">
                        {ws.subtitle}
                      </p>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="bg-primary/10 text-primary font-body text-xs px-3 py-1 rounded-full">
                        {ws.duration}
                      </span>
                      <span className="bg-secondary/10 text-secondary font-body text-xs px-3 py-1 rounded-full">
                        {ws.format}
                      </span>
                    </div>
                  </div>

                  <p className="font-body text-foreground/70 leading-relaxed mb-6">
                    {ws.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-subheading text-sm text-foreground/50 mb-3">
                      Inhalte:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {ws.topics.map((topic) => (
                        <li
                          key={topic}
                          className="font-body text-sm text-foreground/70 flex items-start gap-2"
                        >
                          <span className="text-secondary mt-0.5 shrink-0">&#10003;</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-body text-xs text-foreground/40">
                    Zielgruppe: {ws.audience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anmeldeformular */}
      <section id="anmeldung" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-primary mb-4 text-center">
            Workshop-Anmeldung
          </h2>
          <p className="text-center text-foreground/70 mb-8 font-body">
            Wählen Sie Ihren Workshop und melden Sie sich an. Wir melden uns mit
            Terminen und Details.
          </p>
          <FormWorkshopRegistration />
        </div>
      </section>
    </>
  );
}
