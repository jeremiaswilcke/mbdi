import type { Metadata } from "next";
import { wwdClient, type WWDPageHome } from "@/lib/api/wwd-client";
import { getLatestVideos } from "@/lib/youtube";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Audioguide } from "@/components/Audioguide";
import { ChurchSection } from "@/components/ChurchSection";
import { MovementSection } from "@/components/MovementSection";
import { TeamCTA } from "@/components/TeamCTA";
import { DonationProgress } from "@/components/DonationProgress";

export const metadata: Metadata = {
  title: "Mariabrunn Digital – Glaube. Gemeinschaft. Digital.",
  description:
    "Das digitale Medienprojekt der Pfarre Mariabrunn: Livestreams, Podcasts, Bibelprojekte und mehr.",
};

const fallback: WWDPageHome = {
  sections: {
    hero: {
      hero_title: "Glaube. Gemeinschaft. Digital.",
      hero_description:
        "Mariabrunn Digital bringt die Pfarre ins digitale Zeitalter: Livestreams der Heiligen Messe, tägliche Kurzauslegungen, Podcasts und ein einzigartiges Bibelprojekt – für alle, die Glauben leben und teilen möchten.",
      hero_image: { url: "/images/hero-church.png", alt: "Wallfahrtskirche Mariabrunn", id: 0, title: "Hero" },
      primary_cta_text: "Livestream ansehen",
      primary_cta_link: "/livestream",
      secondary_cta_text: "Mitmachen",
      secondary_cta_link: "/mitmachen",
    },
    bento_grid: [
      {
        title: "Auf den Punkt",
        description: "Tägliche 2–3 Minuten Kurzauslegung zum Tagesevangelium mit Diakon Peter Scheuchel.",
        size: "large",
        link: "/auf-den-punkt",
        image: { url: "/images/hero-streaming.png", alt: "Auf den Punkt", id: 0, title: "" },
      },
      {
        title: "Bibel in einem Jahr",
        description: "Gemeinsam die gesamte Bibel in einem Jahr lesen – als Gemeinschaft, mit Begleitung.",
        size: "medium",
        link: "/bibel",
        image: { url: "/images/card-bible.png", alt: "Bibel", id: 0, title: "" },
      },
      {
        title: "Livestream",
        description: "Die Heilige Messe live aus Mariabrunn – jeden Sonntag und an Feiertagen.",
        size: "medium",
        link: "/livestream",
      },
      {
        title: "Gottesdienste",
        description: "Messzeiten, Rosenkranz und Andachten – die aktuelle Gottesdienstordnung.",
        size: "small",
        link: "/gottesdienste",
      },
      {
        title: "Podcast & Medienarbeit",
        description: "Predigten, Vorträge und Gespräche als Podcast – überall verfügbar.",
        size: "small",
        link: "https://www.youtube.com/@MariabrunnDigital",
      },
    ],
    audioguide: [
      { station_title: "Hochaltar", description: "Der barocke Hochaltar mit dem Gnadenbild der Muttergottes." },
      { station_title: "Deckenfresco", description: "Die prächtigen Fresken erzählen die Geschichte der Wallfahrt." },
      { station_title: "Gnadenbild", description: "Das wundertätige Gnadenbild Mariens – Ziel unzähliger Pilger." },
    ],
    church_history: {
      title: "Wallfahrtskirche Mariabrunn",
      description:
        "Die Pfarr- und Wallfahrtskirche Mariabrunn blickt auf eine reiche Geschichte zurück. Seit dem 15. Jahrhundert ist sie ein Ort der Andacht und Wallfahrt. Der barocke Bau beeindruckt mit seinen Fresken, dem Hochaltar und dem berühmten Gnadenbild der Muttergottes.",
      image: { url: "/images/hero-church.png", alt: "Kirche Mariabrunn", id: 0, title: "" },
      cta_text: "Mehr zur Kirche",
      cta_link: "/kirche",
    },
    movement: {
      title: "Mariabrunn Digital",
      description:
        "Mariabrunn Digital ist mehr als ein Medienprojekt: Wir verbinden Glaube, Gemeinschaft und moderne Technik. Unser Ziel ist es, die Frohe Botschaft über digitale Kanäle zu verbreiten und andere Pfarren auf ihrem Weg in die digitale Welt zu begleiten.",
      workshop_cta_text: "Workshops für Pfarren",
      workshop_cta_link: "/mariabrunn-digital",
      info_cta_text: "Mehr über Mariabrunn Digital",
      info_cta_link: "/mariabrunn-digital",
    },
    team_recruitment: {
      title: "Werde Teil des Teams",
      description:
        "Mariabrunn Digital lebt von ehrenamtlichem Engagement. Ob Technik, Redaktion oder Lesung – bei uns findet jeder seinen Platz.",
      areas: [
        { title: "Livestream Technik", description: "Kameraführung, Bildregie und Streaming-Technik." },
        { title: "Studio Technik", description: "Aufnahme und Postproduktion im Studio." },
        { title: "Bibelleser", description: "Lesungen für das Bibelprojekt einsprechen." },
        { title: "Redaktion", description: "Inhalte planen, Texte verfassen, Social Media." },
      ],
      cta_text: "Jetzt mitmachen",
      cta_link: "/mitmachen",
    },
    donation: {
      donation_title: "Unterstützen Sie Mariabrunn Digital",
      donation_description:
        "Unser Projekt wird ausschließlich durch Spenden finanziert. Jeder Beitrag hilft uns, die technische Ausstattung zu verbessern und neue Formate zu entwickeln.",
      donation_goal: 15000,
      donation_current: 8750,
      donation_link: "https://www.mariabrunn.at/spenden",
    },
  },
};

export default async function HomePage() {
  const data = (await wwdClient.getPage<WWDPageHome>("home")) ?? fallback;
  const s = data.sections;

  // Auto-detect livestream or latest video from YouTube
  const { liveStream, latestVod } = await getLatestVideos();
  const autoVideoUrl = liveStream
    ? `https://www.youtube.com/embed/${liveStream.id}?autoplay=1`
    : latestVod
      ? `https://www.youtube.com/embed/${latestVod.id}`
      : undefined;

  return (
    <>
      <Hero
        {...s.hero}
        livestream_url={autoVideoUrl}
      />
      <BentoGrid cards={s.bento_grid} />
      <Audioguide stations={s.audioguide} />
      <ChurchSection {...s.church_history} />
      <MovementSection {...s.movement} />
      <TeamCTA {...s.team_recruitment} />
      <DonationProgress {...s.donation} />
    </>
  );
}
