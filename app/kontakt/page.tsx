import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt | Mariabrunn Digital",
    description: "Trete mit dem Team von Mariabrunn Digital in Kontakt.",
};

export default function KontaktPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#6DC0D2] mb-4">
                    Kontakt
                </h1>
                <p className="text-xl text-slate-300">
                    Du möchtest bei uns mitmachen, hast Fragen zu unseren Livestreams oder möchtest uns Feedback geben? Schreib uns!
                </p>
            </div>

            <div className="bg-[#155277]/20 border border-[#155277]/40 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] transition-all"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">E-Mail Adresse</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] transition-all"
                                placeholder="deine@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Nachricht</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] transition-all resize-none"
                            placeholder="Wie können wir dir helfen?"
                        ></textarea>
                    </div>

                    <button
                        type="button"
                        className="w-full md:w-auto bg-[#6DC0D2] hover:bg-white text-[#155277] font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#6DC0D2]/20"
                    >
                        Nachricht senden
                    </button>
                </form>
            </div>

            <div className="mt-16 text-center text-slate-400">
                <p>Alternativ erreichst du uns sonntags direkt nach dem Pfargottesdienst (09:30) beim Technikpult in der Kirche!</p>
            </div>
        </main>
    );
}
