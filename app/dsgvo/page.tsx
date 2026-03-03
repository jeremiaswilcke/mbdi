import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz (DSGVO) | Mariabrunn Digital",
    description: "Datenschutzerklärung der Pfarre Mariabrunn",
};

export default function DSGVOPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-slate-300">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-8">
                Datenschutzerklärung (DSGVO)
            </h1>

            <div className="space-y-8 bg-[#155277]/10 p-8 rounded-3xl border border-white/5 prose prose-invert max-w-none">
                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#AF3F6C] mb-4">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-lg font-bold text-white mb-2">Allgemeine Hinweise</h3>
                    <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#AF3F6C] mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3 className="text-lg font-bold text-white mb-2">Datenschutz</h3>
                    <p className="mb-4">Die Pfarre Mariabrunn nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

                    <h3 className="text-lg font-bold text-white mb-2">Verantwortliche Stelle</h3>
                    <p className="mb-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p className="pl-4 border-l-2 border-[#AF3F6C] mb-4">
                        Pfarre Mariabrunn <br />
                        Hauptstraße 9 <br />
                        1140 Wien <br />
                        E-Mail: pfarre@mariabrunn.at
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#AF3F6C] mb-4">3. Datenerfassung auf dieser Website</h2>
                    <h3 className="text-lg font-bold text-white mb-2">Anfragen über das Kontaktformular</h3>
                    <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

                    <h3 className="text-lg font-bold text-white mb-2">Server-Log-Dateien</h3>
                    <p className="mb-4">Der Provider der Seiten (Vercel) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind i.d.R. IP-Adresse, Datum/Uhrzeit und Browsertyp. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-[#AF3F6C] mb-4">4. Livestreams & VOD (YouTube)</h2>
                    <p className="mb-4">Wir binden auf unserer Website Videos und Streams unseres YouTube-Kanals "Mariabrunn Digital" ein. Betreiber der Seiten ist die Google Ireland Limited. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt, welche unserer Seiten Sie besucht haben. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube/Google.</p>

                    <div className="bg-[#155277]/20 border border-[#6DC0D2]/20 p-4 rounded-xl mt-4">
                        <h4 className="font-bold text-[#6DC0D2] mb-1">Hinweis zu Gottesdienst-Übertragungen</h4>
                        <p className="text-sm">Wir weisen darauf hin, dass Gottesdienste live ins Internet übertragen und aufgezeichnet werden. Der Fokus der Kameras liegt primär auf dem Altarraum. Wenn Sie als Kirchenbesucher nicht im Bild erscheinen möchten, nehmen Sie bitte in den speziell dafür gekennzeichneten (kamerafreien) Bankreihen Platz.</p>
                    </div>
                </section>

            </div>
        </main>
    );
}
