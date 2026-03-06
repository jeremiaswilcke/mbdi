"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function FormBibel() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.consent) {
            setStatus("error");
            setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus und stimmen Sie unserer Datenschutzerklärung zu.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/forms/bibel", {
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
            <div className="bg-[#90AD50]/10 border border-[#90AD50]/20 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#90AD50] mx-auto mb-4" />
                <h3 className="text-2xl font-heading text-[#145073] mb-2">Vielen Dank!</h3>
                <p className="text-[#0B2E42]/70">
                    Wir haben Ihre Anmeldung erhalten und melden uns in Kürze mit Ihrer Bibelstelle.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-[#145073] font-bold hover:underline"
                >
                    Weitere Person anmelden
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
                <label>Lassen Sie dieses Feld leer: <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#145073] mb-2">Vor- und Nachname *</label>
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
                <label htmlFor="email" className="block text-sm font-bold text-[#145073] mb-2">E-Mail Adresse *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#90AD50] focus:border-transparent transition-all"
                    placeholder="max@beispiel.at"
                />
            </div>

            <div>
                <label htmlFor="preferred_books" className="block text-sm font-bold text-[#145073] mb-2">Bevorzugte Bücher (Optional)</label>
                <input
                    type="text"
                    id="preferred_books"
                    name="preferred_books"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#90AD50] focus:border-transparent transition-all"
                    placeholder="z.B. Psalmen, Jesaja, Johannesevangelium"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#145073] mb-2">Nachricht (Optional)</label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#90AD50] focus:border-transparent transition-all resize-none"
                    placeholder="Möchten Sie uns noch etwas mitteilen?"
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
                    Ich erkläre mich bereit, eine Bibelstelle vorzulesen, und stimme zu, dass meine Daten zur Kontaktaufnahme verarbeitet werden. <a href="/dsgvo" className="text-[#145073] hover:underline" target="_blank">Zur Datenschutzerklärung</a>. *
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
                className="w-full bg-[#145073] hover:bg-[#90AD50] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#145073]/20 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Wird gesendet...
                    </>
                ) : (
                    "Jetzt als Mitleser melden"
                )}
            </button>
        </form>
    );
}
