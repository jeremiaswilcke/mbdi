import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PathwayCard } from "@/components/PathwayCard";
import { ContactCTA } from "@/components/ContactCTA";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";

export const metadata: Metadata = {
  title: "Die Liturgie -- Mariabrunn Digital",
  description:
    "Die Schönheit und Wahrheit der katholischen Liturgie -- das Messopfer, die Sakramente, das Kirchenjahr und 2000 Jahre lebendige Tradition.",
};

const fallback = {
  hero: {
    hero_title: "Die Liturgie. Himmel auf Erden.",
    hero_description:
      "In der Liturgie berühren sich Himmel und Erde. Seit zweitausend Jahren feiert die Kirche das Mysterium Christi -- in Schönheit, Wahrheit und unveränderter Treue.",
    primary_cta_text: "Gottesdienste ansehen",
    primary_cta_link: "/gottesdienste",
  },
  intro:
    '<p>Die Liturgie ist das Herz der Kirche. In ihr vollzieht sich, was Christus seinen Aposteln aufgetragen hat: «Tut dies zu meinem Gedächtnis» (Lk 22,19). Das Zweite Vatikanische Konzil nennt die Liturgie «den Höhepunkt, dem das Tun der Kirche zustrebt, und zugleich die Quelle, aus der all ihre Kraft strömt» (Sacrosanctum Concilium, Nr. 10).</p><p>Hier finden Sie eine Einführung in die großen Schätze der katholischen Liturgie: das heilige Messopfer, die sieben Sakramente, den Rhythmus des Kirchenjahres und die Frage, warum diese Tradition seit den Anfängen so bemerkenswert beständig geblieben ist.</p>',
  pathways: [
    {
      title: "Das Messopfer",
      description:
        "Das Herzstück des katholischen Glaubens: die Feier der heiligen Eucharistie, in der Christus sein Kreuzesopfer gegenwärtig setzt.",
      href: "/die-liturgie/das-messopfer",
      icon: "\u{1F56F}\u{FE0F}",
    },
    {
      title: "Die Sakramente",
      description:
        "Sieben von Christus eingesetzte Zeichen der Gnade, die das ganze Leben des Christen von der Taufe bis zur Letzten Ölung begleiten.",
      href: "/die-liturgie/die-sakramente",
      icon: "\u{1F4A7}",
    },
    {
      title: "Das Kirchenjahr",
      description:
        "Advent, Weihnachten, Fastenzeit, Ostern, Pfingsten -- der heilige Rhythmus, in dem die Kirche das Geheimnis Christi Jahr für Jahr entfaltet.",
      href: "/die-liturgie/das-kirchenjahr",
      icon: "\u{1F55B}",
    },
    {
      title: "Liturgische Tradition",
      description:
        "Warum betet die Kirche seit 2000 Jahren so ähnlich? Über apostolische Wurzeln, lebendige Überlieferung und die Treue zum Ursprung.",
      href: "/die-liturgie/liturgische-tradition",
      icon: "\u{1F4DC}",
    },
  ],
  contact: {
    title: "Fragen zur Liturgie?",
    description:
      "Sie möchten die Liturgie besser verstehen oder an einem Gottesdienst teilnehmen? Schreiben Sie uns -- wir freuen uns auf Sie.",
  },
};

export default async function DieLiturgiePage() {
  const wp = await wwdClient.getPage<WWDPageGeneric>("die-liturgie");
  const s = wp?.sections || {};

  const hero = {
    ...fallback.hero,
    ...(s.hero && typeof s.hero === "object" ? s.hero : {}),
  } as typeof fallback.hero;

  const introBody =
    (s.intro as { body?: string })?.body || fallback.intro;

  const wpPathways = Array.isArray(s.pathways)
    ? s.pathways
    : (s.pathways as { items?: unknown[] })?.items;
  const pathways =
    Array.isArray(wpPathways) && wpPathways.length > 0
      ? (wpPathways as typeof fallback.pathways)
      : fallback.pathways;

  const contact = {
    ...fallback.contact,
    ...(s.contact && typeof s.contact === "object" ? s.contact : {}),
  } as typeof fallback.contact;

  return (
    <>
      <Hero
        hero_title={hero.hero_title}
        hero_description={hero.hero_description}
        hero_image={{ url: "/images/hero-church.png", alt: "Wallfahrtskirche Mariabrunn -- Liturgie" }}
        primary_cta_text={hero.primary_cta_text}
        primary_cta_link={hero.primary_cta_link}
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div
          className="prose prose-lg max-w-3xl mx-auto text-foreground/80 text-center"
          dangerouslySetInnerHTML={{ __html: introBody }}
        />
      </section>

      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pathways.map((pathway, i) => (
            <PathwayCard key={pathway.href} {...pathway} index={i} />
          ))}
        </div>
      </section>

      <ContactCTA
        title={contact.title}
        description={contact.description}
      />
    </>
  );
}
