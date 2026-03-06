import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { Audioguide } from "@/components/Audioguide";

export const metadata: Metadata = {
  title: "Kirche Mariabrunn",
  description:
    "Entdecken Sie die Pfarr- und Wallfahrtskirche Mariabrunn mit unserem digitalen Audioguide.",
};

const fallbackData: WWDPageGeneric = {
  title: "Kirche Mariabrunn",
  content:
    "<p>Die <strong>Pfarr- und Wallfahrtskirche Mariabrunn</strong> ist ein barockes Juwel im Wienerwald. Seit dem 15. Jahrhundert pilgern Glaeubige zu diesem Gnadenort, der fuer sein wundertaetiges Marienbild bekannt ist.</p><p>Die Kirche beeindruckt mit praechtigen Deckenfresken, dem imposanten Hochaltar und einer reichen Geschichte, die eng mit dem ehemaligen Augustiner-Chorherrenstift verbunden ist. Der Sakralbau wurde im 17. und 18. Jahrhundert im Barockstil umgestaltet und zaehlt zu den bedeutendsten Wallfahrtsstaetten Niederoesterreichs.</p><p>Entdecken Sie die Kirche mit unserem digitalen Audioguide -- Station fuer Station.</p>",
  sections: {
    hero: {
      hero_title: "Pfarr- und Wallfahrtskirche Mariabrunn",
      hero_description:
        "Ein barocker Gnadenort im Wienerwald -- entdecken Sie Geschichte, Kunst und Glauben.",
      primary_cta_text: "Audioguide starten",
      primary_cta_link: "#audioguide",
    },
    audioguide: [
      {
        station_title: "Station 1: Hochaltar",
        description:
          "Der barocke Hochaltar bildet das Herzstück der Wallfahrtskirche. In seinem Zentrum thront das Gnadenbild der Muttergottes, umgeben von vergoldeten Sauelen und Engelsfiguren.",
      },
      {
        station_title: "Station 2: Deckenfresco",
        description:
          "Die praechtigen Fresken an der Kirchendecke stammen aus dem 18. Jahrhundert und erzaehlen in leuchtenden Farben die Geschichte der Wallfahrt und die Verehrung Mariens.",
      },
      {
        station_title: "Station 3: Gnadenbild",
        description:
          "Das wundertaetige Gnadenbild der Muttergottes von Mariabrunn ist seit Jahrhunderten Ziel unzaehliger Pilger. Die Legende erzaehlt von einer wundersamen Quelle, die an dieser Stelle entsprang.",
      },
    ],
  },
};

export default async function KirchePage() {
  const data =
    (await wwdClient.getPage<WWDPageGeneric>("kirche")) ?? fallbackData;

  const hero = (data.sections?.hero as Record<string, unknown>) ?? fallbackData.sections!.hero;
  const audioguideStations =
    (data.sections?.audioguide as Array<{
      station_title: string;
      description?: string;
      audio_file?: string;
      image?: { id: number; url: string; alt: string; title: string };
    }>) ?? (fallbackData.sections!.audioguide as Array<{
      station_title: string;
      description?: string;
    }>);

  return (
    <main>
      <Hero
        hero_title={
          (hero.hero_title as string) ??
          "Pfarr- und Wallfahrtskirche Mariabrunn"
        }
        hero_description={
          (hero.hero_description as string) ??
          "Ein barocker Gnadenort im Wienerwald."
        }
        hero_image={hero.hero_image as { url: string; alt?: string } | undefined}
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
      </section>

      <section id="audioguide" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading text-[#145073] mb-12 text-center">
          Digitaler Audioguide
        </h2>
        <Audioguide stations={audioguideStations} />
      </section>
    </main>
  );
}
