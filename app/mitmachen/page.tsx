import { BentoCard } from "@/components/BentoCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mitmachen | Mariabrunn Digital",
    description: "Werde Teil unseres Technik-, Streaming- und Social-Media-Teams.",
};

export default function MitmachenPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#BC8080] mb-4">
                    Werde Teil der Crew
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl">
                    Mariabrunn Digital ist mehr als nur eine Kamera, die mitläuft. Wir suchen motivierte Leute für unser Streaming-, Studio- und Social-Media-Team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
                {/* Streaming & Kamera */}
                <BentoCard colorVariant="magenta" className="md:col-span-1 group">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-[#AF3F6C] transition-colors">
                                Kamera & Live-Regie
                            </h3>
                            <p className="text-slate-300">
                                Du interessierst dich für Videoproduktion? Lerne unsere PTZ-Kameras und die Live-Regie mit vMix kennen. Keine Vorkenntnisse nötig!
                            </p>
                        </div>
                        <div className="self-end bg-white/10 p-3 rounded-xl mt-4">
                            <span className="text-white font-bold text-sm">Jetzt anfragen &rarr;</span>
                        </div>
                    </div>
                </BentoCard>

                {/* Ton & Studio */}
                <BentoCard colorVariant="lightBlue" className="md:col-span-1 group">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-[#6DC0D2] transition-colors">
                                Studio-Team & Formate
                            </h3>
                            <p className="text-slate-300">
                                Hilf uns bei der Produktion von Formaten wie "Auf den Punkt". Kamera, Licht, Ton und Set-Design im Studio - werde kreativ!
                            </p>
                        </div>
                        <div className="self-end bg-white/10 p-3 rounded-xl mt-4">
                            <span className="text-white font-bold text-sm">Jetzt anfragen &rarr;</span>
                        </div>
                    </div>
                </BentoCard>

                {/* Social Media */}
                <BentoCard colorVariant="green" className="md:col-span-2 group">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-[#90AD50] transition-colors">
                                Social Media & Content Creation
                            </h3>
                            <p className="text-slate-300 max-w-xl">
                                Du hast ein Auge für gute Schnitte und Fotografie? Hilf uns, die Inhalte von Mariabrunn Digital auf Instagram, Facebook und YouTube zu bringen. Wir schneiden Highlights, erstellen Reels und bauen eine Community auf.
                            </p>
                        </div>
                        <div className="self-end bg-white/10 p-3 rounded-xl mt-4">
                            <span className="text-white font-bold text-sm">Jetzt anfragen &rarr;</span>
                        </div>
                    </div>
                </BentoCard>
            </div>

            <div className="mt-16 bg-[#155277]/20 border border-[#155277]/40 p-8 rounded-3xl text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Interesse geweckt?</h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Schreib uns einfach eine kurze Nachricht über unser Kontaktformular oder sprich uns am Sonntag nach dem Gottesdienst direkt beim Technik-Pult an!
                </p>
                <a href="/kontakt" className="inline-block bg-[#BC8080] hover:bg-white hover:text-[#BC8080] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-[#BC8080]/20">
                    Zum Kontaktformular
                </a>
            </div>
        </main>
    );
}
