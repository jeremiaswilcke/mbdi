// In a real database scenario, this would be fetched server-side from your CMS.
import Image from "next/image";

// Placeholder mock data
const stationData: Record<string, { title: string, content: string, audioSrc?: string, imageUrl?: string }> = {
    "hochaltar": {
        title: "Der Hochaltar",
        content: "Der Hochaltar der Wallfahrtskirche besticht durch sein prächtiges Altarbild, das die Heimsuchung Mariens zeigt. Beachten Sie die feinen goldenen Verzierungen...",
        audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Demo audio
        imageUrl: "https://images.unsplash.com/photo-1548625361-ecde10fac922?q=80&w=800&auto=format&fit=crop" // Demo image
    },
    "fresken": {
        title: "Deckenfresken",
        content: "Blicken Sie nach oben und betrachten Sie die meisterhaften Deckenfresken. Sie schildern die Legende der Quellenfindung. Die kräftigen Farben...",
    }
};

export default function StationPage({ params }: { params: { station: string } }) {
    const data = stationData[params.station];

    if (!data) {
        return (
            <main className="min-h-screen flex items-center justify-center p-4">
                <h1 className="text-2xl text-accent-rose">Station nicht gefunden.</h1>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background text-foreground tracking-tight">
            {/* Top Image Hero */}
            {data.imageUrl ? (
                <div className="w-full h-64 md:h-96 relative bg-slate-900 border-b border-card-border group">
                    <Image
                        src={data.imageUrl}
                        alt={data.title}
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                    />
                </div>
            ) : (
                <div className="w-full h-32 md:h-48 bg-gradient-to-br from-primary-dark to-slate-900" />
            )}

            <div className="max-w-2xl mx-auto px-6 py-8 md:py-12 -mt-10 relative z-10">
                <div className="bento-card bg-card border-t border-white/10 shadow-2xl">
                    <div className="mb-2 inline-block bg-primary-dark/50 text-primary-light text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold border border-primary-light/20">
                        Station Info
                    </div>

                    <h1 className="text-3xl md:text-4xl font-heading font-extrabold mb-6 text-white drop-shadow">
                        {data.title}
                    </h1>

                    {data.audioSrc && (
                        <div className="my-8 bg-slate-800/80 p-4 rounded-2xl border border-white/5">
                            <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" /></svg>
                                Audio Guide
                            </p>
                            <audio controls className="w-full h-10 outline-none">
                                <source src={data.audioSrc} type="audio/mpeg" />
                                Dein Browser unterstützt das Audio-Element nicht.
                            </audio>
                        </div>
                    )}

                    <div className="prose prose-invert prose-p:text-slate-300 prose-p:leading-relaxed prose-lg mt-8">
                        <p>{data.content}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
