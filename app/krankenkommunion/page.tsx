import type { Metadata } from "next";
import { wwdClient, type WWDPageGeneric } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";
import { FormCommunion } from "@/components/FormCommunion";

export const metadata: Metadata = {
  title: "Krankenkommunion",
  description:
    "Krankenkommunion anfragen -- wir bringen Ihnen die Heilige Kommunion nach Hause.",
};

const fallbackData: WWDPageGeneric = {
  title: "Krankenkommunion",
  content:
    "<p>Sie oder ein Angehoeriger koennen nicht am Pfarrgottesdienst teilnehmen? Gerne bringen wir Ihnen die <strong>Heilige Kommunion</strong> nach Hause.</p><p>Unser Kommunionhelfer-Team besucht regelmaessig kranke und aeltere Gemeindemitglieder, um ihnen die Kommunion zu spenden und ein offenes Ohr zu schenken. Dieser Dienst ist ein wichtiger Teil unseres Gemeindelebens.</p><p>Bitte fuellen Sie das untenstehende Formular aus, und wir werden uns umgehend bei Ihnen melden, um einen Termin zu vereinbaren.</p>",
  sections: {
    hero: {
      hero_title: "Krankenkommunion",
      hero_description:
        "Wir bringen Ihnen die Heilige Kommunion nach Hause -- ein Dienst der Naechstenliebe unserer Pfarre.",
      primary_cta_text: "Jetzt anfragen",
      primary_cta_link: "#formular",
    },
  },
};

export default async function KrankenkommunionPage() {
  const data =
    (await wwdClient.getPage<WWDPageGeneric>("krankenkommunion")) ??
    fallbackData;

  const hero = (data.sections?.hero as Record<string, unknown>) ?? fallbackData.sections!.hero;

  return (
    <main>
      <Hero
        hero_title={(hero.hero_title as string) ?? "Krankenkommunion"}
        hero_description={
          (hero.hero_description as string) ??
          "Wir bringen Ihnen die Heilige Kommunion nach Hause."
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

        <div id="formular" className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-[#145073] mb-4 text-center">
            Krankenkommunion anfragen
          </h2>
          <p className="text-center text-[#0B2E42]/70 mb-8">
            Bitte fuellen Sie das Formular aus -- wir melden uns umgehend bei
            Ihnen.
          </p>
          <FormCommunion />
        </div>
      </section>
    </main>
  );
}
