"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const workshopOptions = [
  "AI in der Pfarre -- Künstliche Intelligenz als Werkzeug der Verkündigung",
  "Öffentlichkeitsarbeit mit AI -- Professionelle Pfarrkommunikation mit KI-Unterstützung",
  "Livestreaming & Videographie -- Professionelle Ergebnisse mit knappem Budget",
];

export function FormWorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    parish_name: "",
    workshop: "",
    participants: "1",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const honey = (e.currentTarget.elements.namedItem("_honey") as HTMLInputElement)?.value;

    try {
      const response = await fetch("/api/forms/workshop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parish_name: formData.parish_name,
          contact_person: formData.name,
          email: formData.email,
          phone: formData.phone,
          workshop: formData.workshop,
          participants: formData.participants,
          message: formData.message,
          honeypot: honey,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          parish_name: "",
          workshop: "",
          participants: "1",
          message: "",
        });
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
        <h3 className="text-xl font-subheading mb-2">Anmeldung erhalten!</h3>
        <p className="font-body text-green-700">
          Ihre Workshop-Anmeldung wurde erfolgreich übermittelt. Sie erhalten in
          Kürze eine Bestätigung per E-Mail.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 bg-primary text-white font-subheading px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Weitere Anmeldung
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
        <label htmlFor="wr-workshop" className="block font-subheading text-sm text-foreground/70 mb-2">
          Workshop auswählen *
        </label>
        <select
          id="wr-workshop"
          name="workshop"
          required
          value={formData.workshop}
          onChange={handleChange}
          className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all bg-white"
        >
          <option value="">-- Bitte wählen --</option>
          {workshopOptions.map((ws) => (
            <option key={ws} value={ws}>
              {ws}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="wr-name" className="block font-subheading text-sm text-foreground/70 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="wr-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="wr-email" className="block font-subheading text-sm text-foreground/70 mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="wr-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="wr-phone" className="block font-subheading text-sm text-foreground/70 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="wr-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="wr-parish" className="block font-subheading text-sm text-foreground/70 mb-2">
            Pfarre / Institution
          </label>
          <input
            type="text"
            id="wr-parish"
            name="parish_name"
            value={formData.parish_name}
            onChange={handleChange}
            className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="wr-participants" className="block font-subheading text-sm text-foreground/70 mb-2">
          Anzahl Teilnehmer
        </label>
        <input
          type="number"
          id="wr-participants"
          name="participants"
          min="1"
          max="50"
          value={formData.participants}
          onChange={handleChange}
          className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="wr-message" className="block font-subheading text-sm text-foreground/70 mb-2">
          Nachricht / Anmerkungen
        </label>
        <textarea
          id="wr-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full font-body border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none transition-all resize-none"
        />
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
        className="w-full bg-primary text-white font-subheading px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          "Verbindlich anmelden"
        )}
      </button>

      <p className="text-xs text-foreground/50 font-body text-center">
        Mit der Anmeldung stimmen Sie zu, dass wir Ihre Daten zur Organisation
        des Workshops verwenden. Weitere Informationen in unserer{" "}
        <a href="/dsgvo" className="underline hover:text-primary">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
