"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function FormBibel() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        preferred_books: "",
        message: "",
        consent: false,
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;
        const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        if (!formData.consent) {
            setStatus("error");
            setErrorMessage("Bitte stimmen Sie der Datenschutzerklärung zu.");
            return;
        }

        const honey = (e.currentTarget.elements.namedItem("_honey") as HTMLInputElement)?.value;

        try {
            const response = await fetch("/api/forms/bibel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, honeypot: honey }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", preferred_books: "", message: "", consent: false });
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Ein Fehler ist aufgetreten.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-10 rounded-lg flex flex-col items-center text-center">
                <CheckCircle2 className="w-14 h-14 mb-4" />
                <h3 className="text-xl font-subheading mb-2">Anmeldung erfolgreich!</h3>
                <p className="font-body text-green-700">Vielen Dank! Wir melden uns in Kürze mit Ihrer Bibelstelle.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 bg-primary text-white font-subheading px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Weitere Person anmelden
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div style={{ display: "none" }} aria-hidden="true">
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
                <label htmlFor="bibel-name" className="block font-subheading text-sm text-foreground/70 mb-2">
                    Name *
                </label>
                <input
                    type="text"
                    id="bibel-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
                />
            </div>

            <div>
                <label htmlFor="bibel-email" className="block font-subheading text-sm text-foreground/70 mb-2">
                    E-Mail Adresse *
                </label>
                <input
                    type="email"
                    id="bibel-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
                />
            </div>

            <div>
                <label htmlFor="bibel-books" className="block font-subheading text-sm text-foreground/70 mb-2">
                    Bevorzugte Bücher (optional)
                </label>
                <textarea
                    id="bibel-books"
                    name="preferred_books"
                    rows={3}
                    value={formData.preferred_books}
                    onChange={handleChange}
                    placeholder="z.B. Psalmen, Jesaja, Johannesevangelium"
                    className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all resize-none"
                />
            </div>

            <div>
                <label htmlFor="bibel-message" className="block font-subheading text-sm text-foreground/70 mb-2">
                    Nachricht (optional)
                </label>
                <textarea
                    id="bibel-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all resize-none"
                />
            </div>

            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="bibel-consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 border border-gray-200 rounded focus:ring-2 focus:ring-secondary"
                />
                <label htmlFor="bibel-consent" className="font-body text-sm text-foreground/70 leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten zu. Weitere Informationen in der{" "}
                    <a href="/dsgvo" className="text-primary underline hover:text-secondary">
                        Datenschutzerklärung
                    </a>
                    . *
                </label>
            </div>

            {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-body">{errorMessage}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary text-white font-subheading px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Wird gesendet...
                    </>
                ) : (
                    "Jetzt anmelden"
                )}
            </button>
        </form>
    );
}
