import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { TeamCTA } from "@/components/TeamCTA";
import { FormTeam } from "@/components/FormTeam";

export const metadata: Metadata = {
  title: "Mitmachen",
  description:
    "Werden Sie Teil des Teams von Mariabrunn Digital -- ehrenamtlich, flexibel und mit Sinn.",
};

const fallbackTeam = {
  title: "Unsere Bereiche",
  description: "In diesen Bereichen suchen wir Verstärkung:",
  areas: [
    { title: "Livestream Technik", description: "Kameraführung, Bildregie und Streaming-Technik bei den Sonntagsgottesdiensten." },
    { title: "Studio Technik", description: "Aufnahme und Postproduktion im hauseigenen Studio für Podcasts und Kurzformate." },
    { title: "Bibelleser", description: "Lesungen für das Bibelprojekt einsprechen -- auch von zu Hause möglich." },
    { title: "Redaktion", description: "Inhalte planen, Texte verfassen und Social-Media-Kanäle betreuen." },
  ],
  cta_text: "Jetzt anmelden",
  cta_link: "#anmeldung",
};

const fallback: WWDPageGeneric = {
  title: "Mitmachen",
  content:
    "<p>Mariabrunn Digital lebt von engagierten Menschen, die ihre Talente einbringen möchten. Ob Sie technisch versiert sind oder einfach gerne lesen -- bei uns findet jeder seinen Platz.</p><p>Alle Tätigkeiten sind ehrenamtlich und flexibel einteilbar. Wir bieten Einschulungen und gegenseitige Unterstützung im Team.</p>",
  sections: {
    hero: {
      hero_title: "Mitmachen bei Mariabrunn Digital",
      hero_description:
        "Bringen Sie Ihre Talente ein und werden Sie Teil eines engagierten Teams für Glaube und Medien.",
      primary_cta_text: "Jetzt anmelden",
      primary_cta_link: "#anmeldung",
    },
    team_recruitment: fallbackTeam,
  },
};

export default async function MitmachenPage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("mitmachen")) ?? fallback;
  const hero = data.sections?.hero ?? fallback.sections!.hero!;
  const team = data.sections?.team_recruitment ?? fallbackTeam;

  return (
    <>
      <Hero
        hero_title={hero.hero_title}
        hero_description={hero.hero_description}
        hero_image={hero.hero_image}
        primary_cta_text={hero.primary_cta_text}
        primary_cta_link={hero.primary_cta_link}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="prose prose-lg max-w-3xl mx-auto text-[#0B2E42]/80 mb-16"
          dangerouslySetInnerHTML={{ __html: data.content || fallback.content }}
        />
        <TeamCTA {...team} />
      </section>

      <section id="anmeldung" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-primary mb-4 text-center">
            Anmeldung
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            Wählen Sie Ihren Bereich und melden Sie sich an.
          </p>
          <FormTeam />
        </div>
      </section>
    </>
  );
}
