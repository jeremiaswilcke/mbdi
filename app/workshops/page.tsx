export default function Workshops() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <header className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-accent-green mb-4">
                        Workshops & Seminare
                    </h1>
                    <p className="text-xl text-slate-300">
                        Weiterbildung, gemeinsame Kurse und vertiefende Gruppentreffen in der Pfarre Mariabrunn.
                    </p>
                </header>

                <div className="space-y-6">
                    {/* Mock Workshop Items */}
                    <div className="bento-card relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6">
                            <span className="bg-primary-dark/50 text-primary-light text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold border border-primary-light/20">
                                Anmeldung offen
                            </span>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-sm font-bold text-accent-green mb-2">15. Oktober 2024 • 18:00 Uhr</p>
                            <h2 className="text-2xl font-bold text-white mb-3">Einführung in die Liturgie</h2>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Welche Bedeutung haben die einzelnen Teile der Heiligen Messe? Ein Workshop für alle, die Gottesdienste bewusster mitfeiern möchten.
                            </p>
                            <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                                Details ansehen
                            </button>
                        </div>
                    </div>

                    <div className="bento-card relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6">
                            <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full uppercase tracking-widest font-semibold border border-slate-700">
                                Ausgebucht
                            </span>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-sm font-bold text-slate-500 mb-2">02. November 2024</p>
                            <h2 className="text-2xl font-bold text-slate-300 mb-3">Chor-Wochenende intensiv</h2>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Einstudieren neuer Werke für die Festtage. Nur für bestehende Mitglieder des Kirchenchores.
                            </p>
                            <button className="bg-slate-800 text-slate-500 font-medium px-6 py-2 rounded-lg cursor-not-allowed">
                                Zur Warteliste
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
