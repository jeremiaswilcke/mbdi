import { wwdClient } from "@/lib/api/wwd-client";

export default async function VideosPlaylists() {
    const videos = await wwdClient.getCPT<any>('videos');
    const predigten = await wwdClient.getCPT<any>('predigten');

    return (
        <main className="min-h-screen bg-white text-[#145073] pt-28 pb-24">
            <div className="max-w-6xl mx-auto px-6 space-y-16">
                <header className="border-b border-gray-100 pb-8">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#145073] mb-4">
                        Videos & Predigten
                    </h1>
                    <p className="text-xl text-[#0B2E42]/80 max-w-2xl">
                        Entdecke alle Livestreams, Predigten und Videoproduktionen der Pfarre Mariabrunn.
                    </p>
                </header>

                <section>
                    <h2 className="text-3xl font-heading text-[#69AFD2] mb-6">Neueste Predigten</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {predigten.length > 0 ? predigten.slice(0, 3).map((item) => (
                            <a href={(item.acf && item.acf.youtube_url) || '#'} target="_blank" rel="noreferrer" key={item.id} className="glass-panel group overflow-hidden border border-[#69AFD2]/20 rounded-2xl block hover:shadow-lg transition">
                                <div className="w-full h-48 bg-slate-100 relative">
                                    {(item.acf && item.acf.thumbnail) && <img src={item.acf.thumbnail.url} alt={item.title.rendered} className="w-full h-full object-cover" />}
                                </div>
                                <div className="p-4 bg-white/50">
                                    <h3 className="font-heading text-[#145073] font-bold text-lg mb-1 group-hover:text-[#69AFD2] transition-colors" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                    {item.acf && item.acf.date && <p className="text-sm text-slate-500">{item.acf.date}</p>}
                                </div>
                            </a>
                        )) : (
                            <p className="text-slate-500">Aktuell keine Predigten verfügbar.</p>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
