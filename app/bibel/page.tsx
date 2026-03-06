import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { FormBibel } from "@/components/FormBibel";

export const metadata: Metadata = {
  title: "Bibel in einem Jahr",
  description:
    "Gemeinsam die gesamte Bibel in einem Jahr lesen -- das Gemeinschaftsprojekt von Mariabrunn Digital.",
};

const fallback: WWDPageGeneric = {
  title: "Bibel in einem Jahr",
  content:
    "<p><strong>Bibel in einem Jahr</strong> ist unser großes Gemeinschaftsprojekt: Gemeinsam lesen wir die gesamte Heilige Schrift in zwölf Monaten.</p><p>Jeden Tag gibt es einen Abschnitt, der von ehrenamtlichen Leserinnen und Lesern aus der Pfarre eingesprochen und als Video veröffentlicht wird.</p><p>Begleitend bieten wir wöchentliche Impulse und Austauschrunden an. Wer selbst als Leser oder Leserin mitwirken möchte, kann sich über das untenstehende Formular anmelden.</p>",
  sections: {
    hero: {
      hero_title: "Bibel in einem Jahr",
      hero_description:
        "Gemeinsam die gesamte Heilige Schrift lesen -- als Gemeinschaft, mit Begleitung und täglichen Impulsen.",
      primary_cta_text: "Zur Playlist",
      primary_cta_link:
        "https://www.youtube.com/playlist?list=PLSNwTwrZKgtBCoO-G0SgeAeSD6QgWrbec",
    },
  },
};

export default async function BibelPage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("bibel")) ?? fallback;
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

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-heading text-primary mb-8 text-center">
            Aktuelle Lesungen
          </h2>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLSNwTwrZKgtBCoO-G0SgeAeSD6QgWrbec"
            title="Bibel in einem Jahr -- Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-xl"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-primary mb-4 text-center">
            Als Leser/in anmelden
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            Möchten Sie einen Abschnitt der Bibel für unser Projekt einsprechen? Melden Sie sich hier an.
          </p>
          <FormBibel />
        </div>
      </section>
    </>
  );
}
