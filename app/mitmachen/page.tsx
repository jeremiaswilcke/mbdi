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

const fallbackData: WWDPageGeneric = {
  title: "Mitmachen",
  content:
    "<p>Mariabrunn Digital lebt von engagierten Menschen, die ihre Talente einbringen moechten. Ob Sie technisch versiert sind oder einfach gerne lesen -- bei uns findet jeder seinen Platz.</p><p>Alle Taetigkeiten sind ehrenamtlich und flexibel einteilbar. Wir bieten Einschulungen und gegenseitige Unterstuetzung im Team. Melden Sie sich ueber das untenstehende Formular an -- wir freuen uns auf Sie!</p>",
  sections: {
    hero: {
      hero_title: "Mitmachen bei Mariabrunn Digital",
      hero_description:
        "Bringen Sie Ihre Talente ein und werden Sie Teil eines engagierten Teams fuer Glaube und Medien.",
      primary_cta_text: "Jetzt anmelden",
      primary_cta_link: "#anmeldung",
    },
    team_recruitment: {
      title: "Unsere Bereiche",
      description:
        "In diesen Bereichen suchen wir Verstaerkung:",
      areas: [
        {
          title: "Livestream Technik",
          description:
            "Kamerafuehrung, Bildregie und Streaming-Technik bei den Sonntagsgottesdiensten.",
          icon: "video",
        },
        {
          title: "Studio Technik",
          description:
            "Aufnahme und Postproduktion im hauseigenen Studio fuer Podcasts und Kurzformate.",
          icon: "mic",
        },
        {
          title: "Bibelleser",
          description:
            "Lesungen fuer das Bibelprojekt einsprechen -- auch von zu Hause moeglich.",
          icon: "book",
        },
        {
          title: "Redaktion",
          description:
            "Inhalte planen, Texte verfassen und Social-Media-Kanaele betreuen.",
          icon: "pen",
        },
      ],
      cta_text: "Jetzt anmelden",
      cta_link: "#anmeldung",
    },
  },
};

export default async function MitmachenPage() {
  const data =
    (await wwdClient.getPage<WWDPageGeneric>("mitmachen")) ?? fallbackData;

  const hero = (data.sections?.hero as Record<string, unknown>) ?? fallbackData.sections!.hero;
  const teamRecruitment =
    (data.sections?.team_recruitment as {
      title: string;
      description: string;
      areas: Array<{ title: string; description?: string; icon?: string }>;
      cta_text?: string;
      cta_link?: string;
    }) ??
    (fallbackData.sections!.team_recruitment as {
      title: string;
      description: string;
      areas: Array<{ title: string; description?: string; icon?: string }>;
      cta_text?: string;
      cta_link?: string;
    });

  return (
    <main>
      <Hero
        hero_title={
          (hero.hero_title as string) ?? "Mitmachen bei Mariabrunn Digital"
        }
        hero_description={
          (hero.hero_description as string) ??
          "Bringen Sie Ihre Talente ein."
        }
        primary_cta_text={hero.primary_cta_text as string}
        primary_cta_link={hero.primary_cta_link as string}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="prose prose-lg max-w-3xl mx-auto text-[#0B2E42]/80 mb-16"
          dangerouslySetInnerHTML={{
            __html: data.content ?? (fallbackData.content as string),
          }}
        />

        <TeamCTA {...teamRecruitment} />
      </section>

      <section id="anmeldung" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-[#145073] mb-4 text-center">
            Anmeldung
          </h2>
          <p className="text-center text-[#0B2E42]/70 mb-8">
            Waehlen Sie Ihren Bereich und melden Sie sich an -- wir melden uns
            bei Ihnen.
          </p>
          <FormTeam />
        </div>
      </section>
    </main>
  );
}
