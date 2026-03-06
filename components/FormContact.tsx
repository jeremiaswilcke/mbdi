"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function FormContact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.message || !data.consent) {
            setStatus("error");
            setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus und stimmen Sie unserer Datenschutzerklärung zu.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/forms/contact", {
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

    if (status === "success") {
        return (
            <div className="bg-[#145073]/5 border border-[#145073]/10 text-[#145073] p-10 rounded-3xl flex flex-col items-center text-center shadow-lg">
                <div className="w-16 h-16 bg-[#145073] text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold font-heading mb-3">Nachricht gesendet!</h2>
                <p className="text-[#0B2E42]/80">Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-8 py-3 bg-[#145073] text-white rounded-full font-bold hover:bg-[#69AFD2] transition-colors shadow-md"
                >
                    Weitere Nachricht senden
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
                <label>Feld leer lassen: <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#145073] mb-2">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#69AFD2] focus:border-transparent text-[#0B2E42]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#145073] mb-2">E-Mail Adresse *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#69AFD2] focus:border-transparent text-[#0B2E42]"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#145073] mb-2">Ihre Nachricht *</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#69AFD2] focus:border-transparent text-[#0B2E42] resize-none"
                />
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-[#145073] focus:ring-[#69AFD2]"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                    Ich stimme zu, dass meine Daten zur Bearbeitung der Anfrage verarbeitet werden.
                    Weitere Informationen finden Sie in unserer <a href="/dsgvo" className="text-[#145073] font-bold underline hover:text-[#69AFD2]">Datenschutzerklärung</a>. *
                </label>
            </div>

            {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-bold">{errorMessage}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#145073] hover:bg-[#69AFD2] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#145073]/20 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Wird gesendet...
                    </>
                ) : (
                    "Nachricht absenden"
                )}
            </button>
        </form>
    );
}
