"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function BibelJahrPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot check
        if (formData.get("_honeypot")) {
            setStatus("idle");
            return;
        }

        try {
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                consent: formData.get("consent") === "on",
            };

            const response = await fetch("/api/bibel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Ein Fehler ist aufgetreten.");
            }

            setStatus("success");
            form.reset();
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error.message);
        }
    }

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-16 md:flex md:items-center md:gap-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="inline-block bg-[#BC8080]/10 text-[#BC8080] font-bold px-4 py-1 rounded-full mb-4 text-sm">
                        Gemeinschaftsprojekt
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#155277] mb-6">
                        Die Bibel in einem Jahr.
                    </h1>
                    <p className="text-xl text-slate-700 leading-relaxed mb-6">
                        Ein wundervolles Gemeinschaftsprojekt der Pfarre Mariabrunn und Freunden. Wir lesen die gesamte Bibel in kurzen Abschnitten auf Video ein &ndash; Genesis 1&ndash;2, Genesis 3&ndash;4, und so weiter &ndash; sodass wir in einem Jahr einmal durch sind.
                    </p>
                    <div className="bg-[#BC8080]/10 border border-[#BC8080]/20 p-4 rounded-xl">
                        <p className="text-[#BC8080] font-bold mb-1">Wir brauchen dich!</p>
                        <p className="text-slate-600 text-sm">Wir suchen Vorleser und Mitarbeiter. Das Projekt ist fast geschafft, aber es gibt noch einige Passagen, die bei uns im Studio eingelesen werden müssen. Hilf uns, dieses einzigartige Projekt zu vollenden!</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#155277]/10 to-[#AF3F6C]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#AF3F6C] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-[#155277] font-bold text-2xl font-heading">Werde Vorleser</h3>
                        <p className="text-slate-600 mt-2">Komm zu uns ins Studio und lies eine Passage ein.</p>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#155277]/10 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-[#155277]">1</div>
                    <h3 className="text-xl font-bold text-[#155277] mb-3">Melde dich an</h3>
                    <p className="text-slate-600">Fülle das untenstehende Formular aus. Wir kontaktieren dich und schicken dir eine der noch offenen Bibelstellen.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#6DC0D2]/10 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-[#6DC0D2]">2</div>
                    <h3 className="text-xl font-bold text-[#155277] mb-3">Lies vor</h3>
                    <p className="text-slate-600">Komm zu uns ins Studio und wir zeichnen dich professionell auf. Alles, was du brauchst, ist deine Stimme.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-[#90AD50]/10 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-[#90AD50]">3</div>
                    <h3 className="text-xl font-bold text-[#155277] mb-3">Werde Teil des Ganzen</h3>
                    <p className="text-slate-600">Dein Beitrag wird in unser Gesamtprojekt eingebettet. Gemeinsam schaffen wir es, die ganze Bibel hörbar zu machen!</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 mt-24">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading font-bold text-[#155277] mb-4">Jetzt als Vorleser melden</h2>
                    <p className="text-slate-600">
                        Trage dich ein und wir schicken dir eine der noch offenen Bibelstellen zu. Du kommst dann zu uns ins Studio und wir nehmen dich professionell auf.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="bg-[#90AD50]/10 border border-[#90AD50]/20 rounded-2xl p-8 text-center">
                        <CheckCircle2 className="w-16 h-16 text-[#90AD50] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-[#155277] mb-2">Großartig, danke!</h3>
                        <p className="text-slate-700">
                            Wir haben dir eine Bestätigungsmail geschickt und melden uns in Kürze mit deiner Bibelstelle bei dir.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-8 text-[#155277] font-bold hover:underline"
                        >
                            Weitere Person anmelden
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Hidden Honeypot */}
                        <div className="hidden" aria-hidden="true">
                            <label htmlFor="_honeypot">Lassen Sie dieses Feld leer, wenn Sie ein Mensch sind.</label>
                            <input type="text" id="_honeypot" name="_honeypot" tabIndex={-1} autoComplete="off" />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-[#155277] mb-2">Vor- und Nachname</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#90AD50] focus:border-transparent transition-all"
                                placeholder="Max Mustermann"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-[#155277] mb-2">E-Mail Adresse</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#90AD50] focus:border-transparent transition-all"
                                placeholder="max@beispiel.de"
                            />
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                required
                                className="mt-1 w-5 h-5 text-[#90AD50] border-slate-300 rounded focus:ring-[#90AD50]"
                            />
                            <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                                Ich erkläre mich bereit, eine Bibelstelle vorzulesen und stimme zu, dass meine Daten zur Kontaktaufnahme verarbeitet werden. <a href="/dsgvo" className="text-[#155277] hover:underline" target="_blank">Zur Datenschutzerklärung</a>.
                            </label>
                        </div>

                        {status === "error" && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 border border-red-100">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-[#155277] hover:bg-[#90AD50] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#155277]/20 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                                    Wird gesendet...
                                </>
                            ) : (
                                "Jetzt als Vorleser melden"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
