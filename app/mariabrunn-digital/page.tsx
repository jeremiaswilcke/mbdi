import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { FormWorkshop } from "@/components/FormWorkshop";

export const metadata: Metadata = {
  title: "Mariabrunn Digital",
  description:
    "Ueber das Projekt Mariabrunn Digital: Vision, Mission und Workshops fuer Pfarren.",
};

const fallbackData: WWDPageGeneric = {
  title: "Mariabrunn Digital",
  content:
    "<h2>Vision</h2><p>Wir glauben, dass die Frohe Botschaft dort sein soll, wo die Menschen sind -- auch im digitalen Raum. Mariabrunn Digital verbindet Glaube, Gemeinschaft und moderne Medientechnik, um die Pfarre fuer alle erlebbar zu machen: vor Ort, zu Hause und unterwegs.</p><h2>Mission</h2><p>Unser Team aus ehrenamtlichen Mitarbeiterinnen und Mitarbeitern produziert Livestreams, Podcasts, taegliche Kurzauslegungen und das Bibelprojekt \"Bibel in einem Jahr\". Dabei setzen wir auf professionelle Qualitaet mit einfachen Mitteln -- und teilen unser Wissen gerne mit anderen Pfarren.</p><h2>Workshops fuer Pfarren</h2><p>Sie moechten in Ihrer Pfarre ebenfalls digitale Medien einsetzen? Wir bieten praxisnahe Workshops an, in denen wir unsere Erfahrungen weitergeben: von der Livestream-Technik ueber Studiotechnik bis hin zu Social Media und Content-Strategie. Melden Sie sich ueber das untenstehende Formular an.</p>",
  sections: {
    hero: {
      hero_title: "Mariabrunn Digital",
      hero_description:
        "Glaube. Gemeinschaft. Digital. -- Ein Medienprojekt der Pfarre Mariabrunn fuer die Kirche von heute.",
      primary_cta_text: "Mitmachen",
      primary_cta_link: "/mitmachen",
      secondary_cta_text: "Workshop anfragen",
      secondary_cta_link: "#workshop",
    },
  },
};

export default async function MariabrunnDigitalPage() {
  const data =
    (await wwdClient.getPage<WWDPageGeneric>("mariabrunn-digital")) ??
    fallbackData;

  const hero = (data.sections?.hero as Record<string, unknown>) ?? fallbackData.sections!.hero;

  return (
    <main>
      <Hero
        hero_title={(hero.hero_title as string) ?? "Mariabrunn Digital"}
        hero_description={
          (hero.hero_description as string) ??
          "Glaube. Gemeinschaft. Digital."
        }
        primary_cta_text={hero.primary_cta_text as string}
        primary_cta_link={hero.primary_cta_link as string}
        secondary_cta_text={hero.secondary_cta_text as string}
        secondary_cta_link={hero.secondary_cta_link as string}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="prose prose-lg max-w-3xl mx-auto text-[#0B2E42]/80"
          dangerouslySetInnerHTML={{
            __html: data.content ?? (fallbackData.content as string),
          }}
        />
      </section>

      <section id="workshop" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-[#145073] mb-4 text-center">
            Workshop anfragen
          </h2>
          <p className="text-center text-[#0B2E42]/70 mb-8">
            Interessiert an einem Workshop fuer Ihre Pfarre? Schreiben Sie uns
            -- wir melden uns mit einem Vorschlag.
          </p>
          <FormWorkshop />
        </div>
      </section>
    </main>
  );
}
