import { wwdClient, WWDPageKirche } from "@/lib/api/wwd-client";
import Image from "next/image";

const fallbackKircheData: WWDPageKirche = {
    sections: {
        audioguide: [
            {
                station_title: "01. Willkommen in Mariabrunn",
                description: "Der Startpunkt der interaktiven Führung.",
            }
        ]
    }
};

export default async function KirchePage() {
    const pageData = await wwdClient.getPage<WWDPageKirche>('kirche') || fallbackKircheData;
    const stations = pageData.sections?.audioguide || [];

    return (
        <main className="min-h-screen bg-white text-[#145073] pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-heading text-[#145073] mb-6">Pfarr- und Wallfahrtskirche</h1>
                <p className="text-xl text-[#0B2E42]/80 mb-12">
                    Entdecken Sie Mariabrunn mit unserem digitalen Audioguide.
                </p>

                <div className="space-y-8">
                    {stations.map((station, idx) => (
                        <div key={idx} className="glass-panel p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
                            {station.image && (
                                <div className="w-full md:w-1/3 aspect-video relative rounded-xl overflow-hidden shrink-0">
                                    <Image src={station.image.url} alt={station.station_title} fill className="object-cover" />
                                </div>
                            )}
                            <div className="flex-1">
                                <h2 className="text-2xl font-heading text-[#69AFD2] mb-3">{station.station_title}</h2>
                                <div className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: station.description || '' }} />

                                {station.audio_file && (
                                    <audio controls className="mt-4 w-full" src={station.audio_file}>
                                        Ihr Browser unterstützt das Audio-Element nicht.
                                    </audio>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
