import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Auf den Punkt",
  description:
    "Tägliche 2-3 Minuten Kurzauslegung zum Tagesevangelium und zur Tageslesung mit Diakon Peter Scheuchel.",
};

const fallback: WWDPageGeneric = {
  title: "Auf den Punkt",
  content:
    "<p>Jeden Tag eine frische, prägnante Auslegung zum <strong>Tagesevangelium</strong> und zur <strong>Tageslesung</strong> -- in nur 2-3 Minuten.</p><p>Diakon Peter Scheuchel liest aus seinen Büchern und gibt tägliche Impulse, aufgenommen in unserem Studio in Mariabrunn. Ideal für den Morgen, die Mittagspause oder den Abend -- überall und jederzeit abrufbar.</p>",
  sections: {
    hero: {
      hero_title: "Auf den Punkt.",
      hero_description:
        "Tägliche Kurzauslegung zum Tagesevangelium und zur Tageslesung -- 2-3 Minuten mit Diakon Peter Scheuchel.",
      primary_cta_text: "Zur YouTube-Playlist",
      primary_cta_link:
        "https://www.youtube.com/playlist?list=PLSNwTwrZKgtDuvxdCqKrl3k2gFiSC3fc0",
    },
  },
};

export default async function AufDenPunktPage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("auf-den-punkt")) ?? fallback;
  const hero = data.sections?.hero ?? fallback.sections!.hero!;

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
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading text-primary mb-8 text-center">
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
    </>
  );
}
