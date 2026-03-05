"use client";

import { useState } from "react";
import Image from "next/image";
import { Loader2, CheckCircle2, AlertCircle, BookOpen, Users, Mic } from "lucide-react";

export default function BibelJahrPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

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

            {/* Hero */}
            <div className="mb-16 md:flex md:items-center md:gap-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="inline-block bg-[#BC8080]/10 text-[#BC8080] font-bold px-4 py-1 rounded-full mb-4 text-sm">
                        Gemeinschaftsprojekt
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading text-[#155277] mb-6">
                        Die Bibel in einem Jahr
                    </h1>
                    <p className="text-xl text-[#2D2D2D]/80 leading-relaxed mb-4 font-subheading">
                        Die ganze Bibel lesen – Schritt für Schritt
                    </p>
                    <p className="text-lg text-[#2D2D2D]/70 leading-relaxed">
                        Mit unserem Projekt „Die Bibel in einem Jahr" lesen wir gemeinsam die gesamte Heilige Schrift.
                        Jeden Tag werden mehrere Kapitel aus der Bibel vorgelesen und veröffentlicht.
                        So entsteht ein fortlaufender Weg durch das Wort Gottes – von Gen bis Offb.
                        Wer regelmäßig mithört oder mitliest, kann innerhalb eines Jahres die ganze Bibel kennenlernen.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">
                        <Image
                            src="/images/card-bible.png"
                            alt="Bibel auf einem Lesepult"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#155277]/80 via-[#155277]/30 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl font-heading">Von Genesis bis Offenbarung</h3>
                            <p className="text-white/80 mt-1">Gemeinsam durch die Heilige Schrift</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ein gemeinsamer Weg */}
            <div className="max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl font-heading text-[#155277] mb-6">Ein gemeinsamer Weg durch die Schrift</h2>
                <div className="space-y-4 text-lg text-[#2D2D2D]/70 leading-relaxed">
                    <p>Die Bibel ist kein Buch, das man allein lesen muss. Viele Christen entdecken sie neu, wenn sie gemeinsam Schritt für Schritt durch die Texte gehen.</p>
                    <p>Darum veröffentlichen wir täglich neue Abschnitte – als Hörfassung und Video. So kann jeder mitgehen, auch wenn wenig Zeit zum Lesen bleibt.</p>
                </div>
            </div>

            {/* Wir suchen Mitleser */}
            <div className="bg-[#BC8080]/5 border border-[#BC8080]/15 rounded-3xl p-8 md:p-12 mb-16 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#BC8080]/10 rounded-2xl flex items-center justify-center">
                        <Users size={24} className="text-[#BC8080]" />
                    </div>
                    <h2 className="text-2xl font-heading text-[#155277]">Wir suchen Mitleser</h2>
                </div>
                <div className="space-y-4 text-[#2D2D2D]/70 leading-relaxed">
                    <p>Unser Ziel ist es, dass viele Menschen an diesem Projekt mitwirken. Noch fehlen einige Abschnitte der Bibel.</p>
                    <p>Darum laden wir herzlich ein, selbst eine Bibelstelle einzulesen und Teil dieses gemeinsamen Projekts zu werden. Wer mitmachen möchte, kann sich gerne bei uns melden.</p>
                </div>
            </div>

            {/* YouTube Playlist Embed */}
            <div className="mb-20">
                <h2 className="text-3xl font-heading text-[#155277] mb-8 text-center">Bisherige Lesungen</h2>
                <div className="aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?list=PLSNwTwrZKgtBCoO-G0SgeAeSD6QgWrbec"
                        title="Die Bibel in einem Jahr – Playlist"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                    />
                </div>
            </div>

            {/* Warum wir dieses Projekt machen */}
            <div className="max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl font-heading text-[#155277] mb-6">Warum wir dieses Projekt machen</h2>
                <div className="space-y-4 text-lg text-[#2D2D2D]/70 leading-relaxed">
                    <p>Die Bibel ist das Herz unseres Glaubens. Sie erzählt von Gottes Geschichte mit den Menschen und von seiner Liebe, die in Christus sichtbar geworden ist.</p>
                    <p>Unser Wunsch ist es, dass möglichst viele Menschen die ganze Bibel entdecken – nicht nur einzelne Verse.</p>
                </div>
            </div>

            {/* Mitmachen / Formular */}
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading text-[#155277] mb-4">Mitmachen</h2>
                    <p className="text-[#2D2D2D]/70">
                        Wenn Sie eine Bibelstelle lesen und aufnehmen möchten, freuen wir uns über Ihre Unterstützung.
                        Sie helfen damit, dass das Wort Gottes weitergetragen wird und viele Menschen Zugang zur Heiligen Schrift finden.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="bg-[#90AD50]/10 border border-[#90AD50]/20 rounded-2xl p-8 text-center">
                        <CheckCircle2 className="w-16 h-16 text-[#90AD50] mx-auto mb-4" />
                        <h3 className="text-2xl font-heading text-[#155277] mb-2">Vielen Dank!</h3>
                        <p className="text-[#2D2D2D]/70">
                            Wir haben Ihre Anmeldung erhalten und melden uns in Kürze mit Ihrer Bibelstelle.
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
                        {/* Honeypot */}
                        <div className="hidden" aria-hidden="true">
                            <label htmlFor="_honeypot">Lassen Sie dieses Feld leer.</label>
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
                                placeholder="max@beispiel.at"
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
                                Ich erkläre mich bereit, eine Bibelstelle vorzulesen, und stimme zu, dass meine Daten zur Kontaktaufnahme verarbeitet werden. <a href="/dsgvo" className="text-[#155277] hover:underline" target="_blank">Zur Datenschutzerklärung</a>.
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
                                "Jetzt als Mitleser melden"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
