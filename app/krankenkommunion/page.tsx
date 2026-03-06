import { wwdClient } from "@/lib/api/wwd-client";
import { FormCommunion } from "@/components/FormCommunion";

export default async function KrankenkommunionPage() {
    const pageData = await wwdClient.getPage<any>('krankenkommunion');
    const hero = pageData?.sections?.hero;
    const formSettings = pageData?.sections?.form_settings;

    return (
        <main className="min-h-screen bg-white text-[#145073] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
                    {hero?.title || "Krankenkommunion anfragen"}
                </h1>

                <div
                    className="text-lg text-[#0B2E42]/80 mb-10"
                    dangerouslySetInnerHTML={{
                        __html: hero?.description || "Sie oder ein Angehöriger können nicht am Pfarrgottesdienst teilnehmen? Gerne bringen wir Ihnen die Krankenkommunion nach Hause. Bitte füllen Sie das untenstehende Formular aus, und wir werden uns umgehend bei Ihnen melden."
                    }}
                />

                <FormCommunion />
            </div>
        </main>
    );
}
