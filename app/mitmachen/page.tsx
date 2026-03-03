export default function Mitmachen() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-accent-magenta">
                    Mitmachen in Mariabrunn
                </h1>
                <p className="text-xl text-slate-300">
                    Werde Teil unserer Gemeinschaft. Entdecke Gruppen, Chöre, Jugendangebote und ehrenamtliche Tätigkeiten.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bento-card">
                        <h2 className="text-2xl font-bold text-primary-light mb-2">Ministranten</h2>
                        <p className="text-slate-400">Verantwortung im Gottesdienst übernehmen und Gemeinschaft erleben.</p>
                    </div>
                    <div className="bento-card">
                        <h2 className="text-2xl font-bold text-primary-light mb-2">Kirchenchor</h2>
                        <p className="text-slate-400">Gemeinsam singen und Gottesdienste musikalisch gestalten.</p>
                    </div>
                    <div className="bento-card">
                        <h2 className="text-2xl font-bold text-primary-light mb-2">Lektoren</h2>
                        <p className="text-slate-400">Das Wort Gottes in der Heiligen Messe vortragen.</p>
                    </div>
                    <div className="bento-card">
                        <h2 className="text-2xl font-bold text-primary-light mb-2">Pfarrgemeinderat</h2>
                        <p className="text-slate-400">Aktiv das Pfarrleben mitgestalten und organisieren.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
