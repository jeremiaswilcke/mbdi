"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function FormTeam() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.interest_area || !data.consent) {
            setStatus("error");
            setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus und stimmen Sie unserer Datenschutzerklärung zu.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/forms/team", {
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
            setErrorMessage("Es gab ein Problem beim Senden der Bewerbung. Bitte versuchen Sie es später noch einmal.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-[#69AFD2]/10 border border-[#69AFD2]/20 rounded-2xl p-8 text-center text-[#145073]">
                <CheckCircle2 className="w-16 h-16 text-[#69AFD2] mx-auto mb-4" />
                <h3 className="text-2xl font-heading mb-2">Bewerbung gesendet</h3>
                <p className="text-[#0B2E42]/70">
                    Vielen Dank für dein Interesse! Wir schauen uns deine Anfrage an und melden uns in Kürze.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 font-bold hover:underline text-[#69AFD2]"
                >
                    Weitere Bewerbung senden
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
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#69AFD2] focus:border-transparent transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#145073] mb-2">E-Mail Adresse *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#69AFD2] focus:border-transparent transition-all"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="interest_area" className="block text-sm font-bold text-[#145073] mb-2">Interessenbereich *</label>
                <select
                    id="interest_area"
                    name="interest_area"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#69AFD2] focus:border-transparent transition-all"
                >
                    <option value="">Bitte wählen...</option>
                    <option value="Livestream Technik">Livestream Technik</option>
                    <option value="Studio Technik">Studio Technik</option>
                    <option value="Bibelleser">Bibelleser</option>
                    <option value="Redaktion">Redaktion</option>
                </select>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-5 h-5 text-[#69AFD2] border-slate-300 rounded focus:ring-[#69AFD2]"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                    Ich stimme zu, dass meine Daten zur Kontaktaufnahme verarbeitet werden. <a href="/dsgvo" className="text-[#145073] hover:underline" target="_blank">Zur Datenschutzerklärung</a>. *
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
                disabled={status === "loading"}
                className="w-full bg-[#145073] hover:bg-[#69AFD2] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#145073]/20 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Wird gesendet...
                    </>
                ) : (
                    "Bewerbung absenden"
                )}
            </button>
        </form>
    );
}
