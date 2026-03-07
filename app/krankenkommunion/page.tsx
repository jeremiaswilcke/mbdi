import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { FormCommunion } from "@/components/FormCommunion";

export const metadata: Metadata = {
  title: "Krankenkommunion",
  description:
    "Krankenkommunion anfragen -- wir bringen Ihnen die Heilige Kommunion nach Hause.",
};

const fallback: WWDPageGeneric = {
  title: "Krankenkommunion",
  content:
    "<p>Sie oder ein Angehöriger können nicht am Pfarrgottesdienst teilnehmen? Gerne bringen wir Ihnen die <strong>Heilige Kommunion</strong> nach Hause.</p><p>Unser Kommunionhelfer-Team besucht regelmäßig kranke und ältere Gemeindemitglieder, um ihnen die Kommunion zu spenden und ein offenes Ohr zu schenken.</p><p>Bitte füllen Sie das untenstehende Formular aus, und wir werden uns umgehend bei Ihnen melden.</p>",
  sections: {
    hero: {
      hero_title: "Krankenkommunion",
      hero_description:
        "Wir bringen Ihnen die Heilige Kommunion nach Hause -- ein Dienst der Nächstenliebe unserer Pfarre.",
      primary_cta_text: "Jetzt anfragen",
      primary_cta_link: "#formular",
    },
  },
};

export default async function KrankenkommunionPage() {
  const data = (await wwdClient.getPage<WWDPageGeneric>("krankenkommunion")) ?? fallback;
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
          dangerouslySetInnerHTML={{ __html: data.content || fallback.content }}
        />

        <div id="formular" className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-primary mb-4 text-center">
            Krankenkommunion anfragen
          </h2>
          <p className="text-center text-foreground/70 mb-8">
            Bitte füllen Sie das Formular aus -- wir melden uns umgehend bei Ihnen.
          </p>
          <FormCommunion />
        </div>
      </section>
    </>
  );
}
