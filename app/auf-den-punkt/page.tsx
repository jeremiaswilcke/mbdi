import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Auf den Punkt",
  description:
    "Taegliche 2-3 Minuten Kurzauslegung zum Tagesevangelium und zur Tageslesung mit Diakon Peter Scheuchel.",
};

const fallbackData: WWDPageGeneric = {
  title: "Auf den Punkt",
  content:
    "<p>Jeden Tag eine frische, praegnante Auslegung zum <strong>Tagesevangelium</strong> und zur <strong>Tageslesung</strong> -- in nur 2-3 Minuten.</p><p>Diakon Peter Scheuchel liest aus seinen Buechern und gibt taegliche Impulse, aufgenommen in unserem Studio in Mariabrunn. Ideal fuer den Morgen, die Mittagspause oder den Abend -- ueberall und jederzeit abrufbar.</p><p>Die Reihe erscheint taglich auf unserem YouTube-Kanal und ist als Playlist verfuegbar.</p>",
  sections: {
    hero: {
      hero_title: "Auf den Punkt.",
      hero_description:
        "Taegliche Kurzauslegung zum Tagesevangelium und zur Tageslesung -- 2-3 Minuten mit Diakon Peter Scheuchel.",
      primary_cta_text: "Zur YouTube-Playlist",
      primary_cta_link:
        "https://www.youtube.com/playlist?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0",
    },
  },
};

export default async function AufDenPunktPage() {
  const data =
    (await wwdClient.getPage<WWDPageGeneric>("auf-den-punkt")) ?? fallbackData;

  const hero = (data.sections?.hero as Record<string, unknown>) ?? fallbackData.sections!.hero;

  return (
    <main>
      <Hero
        hero_title={(hero.hero_title as string) ?? "Auf den Punkt."}
        hero_description={
          (hero.hero_description as string) ??
          "Taegliche Kurzauslegung zum Tagesevangelium."
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

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading text-[#145073] mb-8 text-center">
            Aktuelle Episoden
          </h2>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0"
            title="Auf den Punkt -- Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
