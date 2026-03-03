import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | Mariabrunn Digital",
    description: "Impressum der Pfarre Mariabrunn",
};

export default function ImpressumPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-slate-300">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-8">
                Impressum
            </h1>

            <div className="space-y-8 bg-[#155277]/10 p-8 rounded-3xl border border-white/5">
                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#6DC0D2] mb-4">Medieninhaber und Herausgeber</h2>
                    <p className="mb-2"><strong>Pfarre Mariabrunn</strong></p>
                    <p>Hauptstraße 9</p>
                    <p>1140 Wien</p>
                    <p>Österreich</p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#6DC0D2] mb-4">Kontakt</h2>
                    <p>E-Mail: <a href="mailto:pfarre@mariabrunn.at" className="text-white hover:text-[#6DC0D2] transition-colors">pfarre@mariabrunn.at</a></p>
                    <p>Telefon: +43 1 979 17 07</p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#6DC0D2] mb-4">Aufsichtsbehörde</h2>
                    <p>Erzdiözese Wien</p>
                </section>

                <section className="text-sm text-slate-400 border-t border-white/10 pt-8 mt-8">
                    <h3 className="font-bold text-white mb-2">Haftung für Inhalte</h3>
                    <p className="mb-4">Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir übernehmen jedoch keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Inhalte.</p>

                    <h3 className="font-bold text-white mb-2">Haftung für Links</h3>
                    <p className="mb-4">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>

                    <h3 className="font-bold text-white mb-2">Urheberrecht</h3>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke (insbesondere Fotos, Videos und Streams von Mariabrunn Digital) auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                </section>
            </div>
        </main>
    );
}
