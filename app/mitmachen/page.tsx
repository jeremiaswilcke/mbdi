import { wwdClient } from "@/lib/api/wwd-client";

interface WWDMitmachen {
    sections: {
        intro_mitmachen: {
            title: string;
            description?: string;
        };
        gruppen?: Array<{
            id: number;
            post_title: string;
            fields: {
                description?: string;
                image?: { url: string };
                contact_email?: string;
                meeting_time?: string;
            }
        }>;
    };
}

export default async function MitmachenPage() {
    const pageData = await wwdClient.getPage<WWDMitmachen>('mitmachen');
    const intro = pageData?.sections?.intro_mitmachen || { title: "Mitmachen", description: "Werde Teil unseres Teams." };
    const gruppen = pageData?.sections?.gruppen || [];

    return (
        <main className="min-h-screen bg-white text-[#145073] pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading text-[#145073] mb-4">
                        {intro.title}
                    </h1>
                    {intro.description && (
                        <div className="text-xl text-[#0B2E42]/80" dangerouslySetInnerHTML={{ __html: intro.description }} />
                    )}
                </header>

                {gruppen.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {gruppen.map((gruppe) => (
                            <div key={gruppe.id} className="glass-panel p-6 rounded-3xl border border-[#69AFD2]/20">
                                {gruppe.fields.image?.url && (
                                    <img src={gruppe.fields.image.url} alt={gruppe.post_title} className="w-full h-48 object-cover rounded-xl mb-4" />
                                )}
                                <h3 className="text-2xl font-heading text-[#145073] mb-2">{gruppe.post_title}</h3>
                                <p className="text-[#0B2E42]/70 mb-4">{gruppe.fields.description}</p>

                                {gruppe.fields.meeting_time && (
                                    <p className="text-sm font-bold text-[#69AFD2]">Treffpunkt: {gruppe.fields.meeting_time}</p>
                                )}
                                {gruppe.fields.contact_email && (
                                    <a href={`mailto:${gruppe.fields.contact_email}`} className="text-sm text-[#AF3F6C] hover:underline mt-2 block">
                                        Kontaktieren
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
