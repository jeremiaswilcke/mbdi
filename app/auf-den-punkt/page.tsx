import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auf den Punkt | Mariabrunn Digital",
    description: "Unsere Kurzimpulse und geistlichen Gedanken – prägnant zusammengefasst.",
};

export default function AufDenPunktPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16 md:flex md:items-center md:gap-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="inline-block bg-[#155277]/10 text-[#155277] font-bold px-4 py-1 rounded-full mb-4 text-sm">
                        Neues Format
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#155277] mb-6">
                        Auf den Punkt.
                    </h1>
                    <p className="text-xl text-slate-700 leading-relaxed mb-8">
                        Manchmal braucht es keine langen Predigten. In unserem Format "Auf den Punkt" bringen wir geistliche Impulse, theologische Gedanken und aktuelle Themen aus der Pfarre Mariabrunn kurz und prägnant auf den Bildschirm.
                    </p>
                    <a href="https://youtube.com/@MariabrunnDigital" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#155277] hover:bg-[#6DC0D2] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-[#155277]/20">
                        Auf YouTube ansehen
                    </a>
                </div>
                <div className="md:w-1/2">
                    <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex items-center justify-center relative">
                        {/* Placeholder for actual Format Cover or Video Player */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#155277]/80 to-[#6DC0D2]/40 mix-blend-multiply flex flex-col justify-end p-8">
                            <h3 className="text-white text-3xl font-heading font-bold">Aktuelle Episode</h3>
                            <p className="text-white/80 mt-2">Jetzt reinschauen</p>
                        </div>
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:scale-105 transition-transform">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#AF3F6C] border-b-[12px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#6DC0D2]/20 rounded-2xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155277]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#155277] mb-3">Kurz & Prägnant</h3>
                    <p className="text-slate-600">Maximal 5 Minuten. Genau die richtige Länge für zwischendurch, in der Bahn oder beim morgendlichen Kaffee.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#90AD50]/20 rounded-2xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90AD50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#155277] mb-3">Tiefgründig</h3>
                    <p className="text-slate-600">Trotz der Kürze gehen wir in die Tiefe. Wir behandeln theologische Stolpersteine und Fragen des Alltags.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#BC8080]/20 rounded-2xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#BC8080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#155277] mb-3">Im Dialog</h3>
                    <p className="text-slate-600">Schreib uns Deine Fragen in die YouTube Kommentare. Oft entstehen daraus direkt neue Episoden.</p>
                </div>
            </div>

            <div className="mt-16 text-center text-sm text-slate-500">
                <p>Hinweis: Diese Seite wird zukünftig automatisch mit den Inhalten aus WordPress befüllt sobald das WilckeWebDeployer Setup vollständig ist.</p>
            </div>
        </main>
    );
}
