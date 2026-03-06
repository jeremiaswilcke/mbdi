import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Livestream",
  description:
    "Feiern Sie die Heilige Messe live aus der Wallfahrtskirche Mariabrunn mit -- jeden Sonntag und an Feiertagen.",
};

const fallbackData: WWDPageGeneric = {
  title: "Livestream aus Mariabrunn",
  content:
    "<p>Jeden Sonntag und an Feiertagen uebertragen wir die Heilige Messe live aus der Wallfahrtskirche Mariabrunn. So koennen Sie auch von zu Hause oder unterwegs mitfeiern.</p><p>Die Uebertragung beginnt jeweils 5 Minuten vor Gottesdienstbeginn. Nach der Messe bleibt das Video als Aufzeichnung verfuegbar.</p><p><strong>Regelmaessige Zeiten:</strong></p><ul><li>Sonntag: 09:30 Uhr</li><li>Feiertage: siehe Pfarrkalender</li></ul>",
  sections: {
    hero: {
      hero_title: "Livestream",
      hero_description:
        "Feiern Sie die Heilige Messe live mit uns -- direkt aus der Wallfahrtskirche Mariabrunn.",
      livestream_url: "https://www.youtube.com/@MariabrunnDigital/live",
      primary_cta_text: "Auf YouTube ansehen",
      primary_cta_link: "https://www.youtube.com/@MariabrunnDigital/live",
    },
  },
};

export default async function LivestreamPage() {
  const data =
    (await wwdClient.getPage<WWDPageGeneric>("livestream")) ?? fallbackData;

  const hero = (data.sections?.hero as Record<string, unknown>) ?? fallbackData.sections!.hero;

  return (
    <main>
      <Hero
        hero_title={(hero.hero_title as string) ?? "Livestream"}
        hero_description={
          (hero.hero_description as string) ??
          "Feiern Sie die Heilige Messe live mit uns."
        }
        livestream_url={
          (hero.livestream_url as string) ??
          "https://www.youtube.com/@MariabrunnDigital/live"
        }
        primary_cta_text={hero.primary_cta_text as string}
        primary_cta_link={hero.primary_cta_link as string}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="prose prose-lg max-w-3xl mx-auto text-[#0B2E42]/80"
          dangerouslySetInnerHTML={{
            __html: data.content ?? (fallbackData.content as string),
          }}
        />
      </section>
    </main>
  );
}
