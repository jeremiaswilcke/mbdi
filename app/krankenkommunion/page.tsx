"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function KrankenkommunionPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic validation before sending
        if (!data.date || !data.time || !data.address || !data.phone || !data.email || !data.consent) {
            setStatus("error");
            setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus und stimmen Sie unserer Datenschutzerklärung zu.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/krankenkommunion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Ein Fehler ist aufgetreten.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Es gab ein Problem beim Senden der Anfrage. Bitte versuchen Sie es später noch einmal.");
        }
    };

    return (
        <main className="min-h-screen bg-white text-[#155277] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
                        Krankenkommunion anfragen
                    </h1>
                    <p className="text-lg text-slate-600 mb-10">
                        Sie oder ein Angehöriger können nicht am Pfarrgottesdienst teilnehmen?
                        Gerne bringen wir Ihnen die Krankenkommunion nach Hause. Bitte füllen Sie
                        das untenstehende Formular aus, und wir werden uns umgehend bei Ihnen melden.
                    </p>

                    {status === "success" ? (
                        <div className="bg-[#90AD50]/20 border border-[#90AD50] text-[#155277] p-8 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#90AD50] text-white rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold font-heading mb-2">Anfrage erfolgreich gesendet</h2>
                            <p>Wir haben die Anfrage erhalten und kümmern uns so schnell wie möglich darum.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-6 px-6 py-2 bg-[#155277] text-white rounded-full font-bold hover:bg-[#6DC0D2] transition-colors"
                            >
                                Weitere Anfrage senden
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-gray-100 p-8 rounded-3xl shadow-xl">
                            {/* Honeypot field (hidden from real users, bots fill it) */}
                            <div className="hidden">
                                <label>Leave this empty: <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" /></label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-bold mb-2">Gewünschtes Datum *</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] focus:border-transparent text-[#155277]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-bold mb-2">Bevorzugte Uhrzeit *</label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] focus:border-transparent text-[#155277]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-bold mb-2">Vollständige Adresse *</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    required
                                    rows={3}
                                    placeholder="Straße, Hausnummer, Tür, PLZ, Ort"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] focus:border-transparent text-[#155277] resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold mb-2">Name (optional)</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Max Mustermann"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] focus:border-transparent text-[#155277]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Telefonnummer *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="Für Rückfragen"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] focus:border-transparent text-[#155277]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold mb-2">E-Mail Adresse *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Für die Bestätigung"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6DC0D2] focus:border-transparent text-[#155277]"
                                />
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    required
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#155277] focus:ring-[#6DC0D2]"
                                />
                                <label htmlFor="consent" className="text-sm text-slate-600">
                                    Ich stimme zu, dass meine Daten zur Bearbeitung der Anfrage verarbeitet werden.
                                    Weitere Informationen finden Sie in unserer <a href="/dsgvo" className="text-[#6DC0D2] underline hover:text-[#155277]">Datenschutzerklärung</a>. *
                                </label>
                            </div>

                            {status === "error" && (
                                <div className="p-4 bg-[#BC8080]/10 border border-[#BC8080] text-[#BC8080] rounded-xl text-sm font-bold">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`w-full py-4 rounded-full font-bold text-white transition-all flex items-center justify-center gap-2 ${status === "loading"
                                        ? "bg-slate-400 cursor-not-allowed"
                                        : "bg-[#155277] hover:bg-[#6DC0D2] hover:shadow-lg"
                                    }`}
                            >
                                {status === "loading" ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Wird gesendet...
                                    </>
                                ) : (
                                    "Krankenkommunion anfragen"
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
