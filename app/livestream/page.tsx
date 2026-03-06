import { wwdClient } from "@/lib/api/wwd-client";
import { Hero } from "@/components/Hero";

export default async function LivestreamPage() {
    const settings = await wwdClient.getSettings();
    const defaultLiveUrl = settings?.fields?.livestream_default_url || "https://youtube.com/@MariabrunnDigital";

    return (
        <main className="min-h-screen bg-white text-[#145073] pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Hero
                    data={{
                        title: "Livestream",
                        subtitle: "Feiern Sie die Heilige Messe mit uns von zu Hause aus.",
                        display_mode: "livestream",
                        livestream_url: defaultLiveUrl,
                        primary_cta_text: "Livestream ansehen",
                        primary_cta_link: defaultLiveUrl
                    }}
                />
            </div>
        </main>
    );
}
