export default function VideosPlaylists() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <header className="border-b border-card-border pb-8">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
                        Videos & Playlists
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        Entdecke alle Livestreams, Predigten und Videoproduktionen der Pfarre Mariabrunn.
                    </p>
                </header>

                <section>
                    <h2 className="text-2xl font-bold text-primary-light mb-6">Neueste Uploads</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Mock Video Cards */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bento-card group p-0 overflow-hidden border-0">
                                <div className="w-full h-48 bg-slate-800 relative">
                                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-card">
                                    <h3 className="font-bold text-white mb-1 group-hover:text-primary-light transition-colors">Sonntagsgottesdienst (Archiv)</h3>
                                    <p className="text-sm text-slate-400">Vor {item} Tagen</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-accent-rose mb-6">Playlists</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-slate-800 to-card p-6 rounded-2xl border border-white/5 hover:border-accent-rose/50 transition-colors cursor-pointer group">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent-rose">Predigten 2024</h3>
                            <p className="text-slate-400 mt-2">12 Videos</p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-800 to-card p-6 rounded-2xl border border-white/5 hover:border-accent-rose/50 transition-colors cursor-pointer group">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent-rose">Kirchenmusik & Chöre</h3>
                            <p className="text-slate-400 mt-2">8 Videos</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
