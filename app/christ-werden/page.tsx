import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PathwayCard } from "@/components/PathwayCard";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Christ werden -- Mariabrunn Digital",
  description:
    "Ihr Weg zum christlichen Glauben -- Informationen und Begleitung für Suchende, Muslime und Protestanten.",
};

const pathways = [
  {
    title: "Für Suchende",
    description:
      "Sie glauben (noch) nicht, sind aber neugierig? Hier finden Sie Antworten auf die großen Fragen des Lebens -- ehrlich, respektvoll und ohne Druck.",
    href: "/christ-werden/fuer-suchende",
    icon: "\u{1F9ED}",
  },
  {
    title: "Für Muslime",
    description:
      "Sie kommen aus dem Islam und interessieren sich für Jesus Christus? Wir begleiten Sie -- vertraulich und mit tiefem Respekt für Ihren bisherigen Glaubensweg.",
    href: "/christ-werden/fuer-muslime",
    icon: "\u{1F91D}",
  },
  {
    title: "Für Protestanten",
    description:
      "Sie sind evangelisch und denken über die katholische Kirche nach? Entdecken Sie, was uns verbindet -- und was die katholische Tradition zu bieten hat.",
    href: "/christ-werden/fuer-protestanten",
    icon: "\u{26EA}",
  },
];

export default function ChristWerdenPage() {
  return (
    <>
      <Hero
        hero_title="Christ werden. Ihr Weg beginnt hier."
        hero_description="Egal, woher Sie kommen und was Sie bisher geglaubt haben -- hier finden Sie Antworten, Begleitung und eine offene Tür."
        hero_image={{ url: "/images/hero-church.png", alt: "Wallfahrtskirche Mariabrunn" }}
        primary_cta_text="Gespräch vereinbaren"
        primary_cta_link="#kontakt"
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-3xl mx-auto text-foreground/80 text-center">
          <p>
            Jeder Mensch trägt Fragen in sich: Woher komme ich? Wohin gehe ich?
            Hat mein Leben einen tieferen Sinn? Die katholische Kirche lädt jeden
            ein, diesen Fragen nachzugehen -- ohne Zwang, ohne Eile, aber mit
            Überzeugung.
          </p>
          <p>
            Ganz gleich, ob Sie zum ersten Mal über Gott nachdenken, aus einer
            anderen Religion kommen oder als Protestant die katholische Kirche
            entdeckenmöchten: Hier finden Sie einen Ausgangspunkt für Ihren Weg.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, i) => (
            <PathwayCard key={pathway.href} {...pathway} index={i} />
          ))}
        </div>
      </section>

      <ContactCTA
        title="Persönliches Gespräch"
        description="Der erste Schritt ist oft der schwerste. Schreiben Sie uns -- unverbindlich und vertraulich. Wir hören Ihnen zu."
      />
    </>
  );
}
