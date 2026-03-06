import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { FormWorkshop } from "@/components/FormWorkshop";

export const metadata: Metadata = {
  title: "Mariabrunn Digital",
  description:
    "Über das Projekt Mariabrunn Digital: Vision, Mission und Workshops für Pfarren.",
};

const fallback: WWDPageGeneric = {
  title: "Mariabrunn Digital",
  content:
    "<h2>Vision</h2><p>Wir glauben, dass die Frohe Botschaft dort sein soll, wo die Menschen sind -- auch im digitalen Raum. Mariabrunn Digital verbindet Glaube, Gemeinschaft und moderne Medientechnik, um die Pfarre für alle erlebbar zu machen.</p><h2>Mission</h2><p>Unser Team aus ehrenamtlichen Mitarbeiterinnen und Mitarbeitern produziert Livestreams, Podcasts, tägliche Kurzauslegungen und das Bibelprojekt. Dabei setzen wir auf professionelle Qualität mit einfachen Mitteln -- und teilen unser Wissen gerne mit anderen Pfarren.</p><h2>Workshops für Pfarren</h2><p>Sie möchten in Ihrer Pfarre ebenfalls digitale Medien einsetzen? Wir bieten praxisnahe Workshops an, in denen wir unsere Erfahrungen weitergeben. Melden Sie sich über das untenstehende Formular an.</p>",
  sections: {
    hero: {
      hero_title: "Mariabrunn Digital",
      hero_description:
        "Glaube. Gemeinschaft. Digital. -- Ein Medienprojekt der Pfarre Mariabrunn für die Kirche von heute.",
      primary_cta_text: "Mitmachen",
      primary_cta_link: "/mitmachen",
      secondary_cta_text: "Workshop anfragen",
      secondary_cta_link: "#workshop",
    },
  },
};

export default async function MariabrunnDigitalPage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("mariabrunn-digital")) ?? fallback;
  const hero = data.sections?.hero ?? fallback.sections!.hero!;

  return (
    <>
      <Hero
        hero_title={hero.hero_title}
        hero_description={hero.hero_description}
        hero_image={hero.hero_image}
        primary_cta_text={hero.primary_cta_text}
        primary_cta_link={hero.primary_cta_link}
        secondary_cta_text={hero.secondary_cta_text}
        secondary_cta_link={hero.secondary_cta_link}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div
          className="prose prose-lg max-w-3xl mx-auto text-[#0B2E42]/80"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </section>

      <section id="workshop" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-primary mb-4 text-center">
            Workshop anfragen
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            Interessiert an einem Workshop für Ihre Pfarre? Schreiben Sie uns.
          </p>
          <FormWorkshop />
        </div>
      </section>
    </>
  );
}
