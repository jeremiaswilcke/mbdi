import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { Audioguide } from "@/components/Audioguide";

export const metadata: Metadata = {
  title: "Kirche Mariabrunn",
  description:
    "Entdecken Sie die Pfarr- und Wallfahrtskirche Mariabrunn mit unserem digitalen Audioguide.",
};

const fallback: WWDPageGeneric = {
  title: "Kirche Mariabrunn",
  content:
    "<p>Die <strong>Pfarr- und Wallfahrtskirche Mariabrunn</strong> ist ein barockes Juwel im Wienerwald. Seit dem 15. Jahrhundert pilgern Gläubige zu diesem Gnadenort, der für sein wundertätiges Marienbild bekannt ist.</p><p>Die Kirche beeindruckt mit prächtigen Deckenfresken, dem imposanten Hochaltar und einer reichen Geschichte, die eng mit dem ehemaligen Augustiner-Chorherrenstift verbunden ist.</p><p>Entdecken Sie die Kirche mit unserem digitalen Audioguide -- Station für Station.</p>",
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
          "Der barocke Hochaltar bildet das Herzstück der Wallfahrtskirche. In seinem Zentrum thront das Gnadenbild der Muttergottes.",
      },
      {
        station_title: "Station 2: Deckenfresco",
        description:
          "Die prächtigen Fresken an der Kirchendecke stammen aus dem 18. Jahrhundert und erzählen die Geschichte der Wallfahrt.",
      },
      {
        station_title: "Station 3: Gnadenbild",
        description:
          "Das wundertätige Gnadenbild der Muttergottes von Mariabrunn ist seit Jahrhunderten Ziel unzähliger Pilger.",
      },
    ],
  },
};

export default async function KirchePage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("kirche")) ?? fallback;
  const hero = data.sections?.hero ?? fallback.sections!.hero!;
  const rawStations = data.sections?.audioguide;
  const stations = Array.isArray(rawStations) && rawStations.length > 0 ? rawStations : fallback.sections!.audioguide!;

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
      </section>

      <section id="audioguide">
        <Audioguide stations={stations} />
      </section>
    </>
  );
}
