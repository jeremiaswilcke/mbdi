import { wwdClient } from "@/lib/api/wwd-client";

export default async function MariabrunnPage() {
    // Falls back to global settings or specific page
    const pageData = await wwdClient.getPage<any>('mariabrunn');

    return (
        <main className="min-h-screen bg-white text-[#145073] pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-heading text-[#145073] mb-6">Mariabrunn Digital</h1>
                <p className="text-xl text-[#0B2E42]/80 leading-relaxed mb-12">
                    Wir sind die Medienplattform der Pfarre Mariabrunn. Unser Ziel ist es, den Glauben über digitale Wege erfahrbar zu machen und Menschen miteinander zu verbinden.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    <div className="glass-panel p-8 rounded-3xl border border-[#69AFD2]/20 shadow-sm hover:shadow-lg transition">
                        <h2 className="text-2xl font-heading text-[#145073] mb-3">Live & On Demand</h2>
                        <p className="text-[#0B2E42]/80">Wir übertragen alle wichtigen Gottesdienste live und stellen Predigten sowie Vorträge on demand zur Verfügung.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl border border-[#69AFD2]/20 shadow-sm hover:shadow-lg transition">
                        <h2 className="text-2xl font-heading text-[#145073] mb-3">Community & Glaube</h2>
                        <p className="text-[#0B2E42]/80">Im Zentrum steht der Aufbau einer lebendigen digitalen Gemeinschaft rund um unsere Pfarre.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
