import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { parish_name, contact_person, email, phone, workshop, participants, message, honeypot } = body;

        // Spam protection
        if (honeypot) {
            return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
        }

        // Validation
        if (!contact_person || !email) {
            return NextResponse.json(
                { success: false, message: "Bitte füllen Sie alle Pflichtfelder aus." },
                { status: 400 }
            );
        }

        const timestamp = new Date().toLocaleString("de-AT");

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #145073; color: white; padding: 20px 30px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; font-size: 20px;">Mariabrunn Digital</h1>
                </div>
                <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                    <p style="color: #6b7280; font-size: 13px; margin-top: 0;">Formular: <strong>Workshop-Anmeldung</strong> | Eingang: ${timestamp}</p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                    ${workshop ? `<p><strong>Workshop:</strong> ${workshop}</p>` : ""}
                    <p><strong>Name:</strong> ${contact_person}</p>
                    <p><strong>E-Mail:</strong> ${email}</p>
                    ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
                    ${parish_name ? `<p><strong>Pfarre/Institution:</strong> ${parish_name}</p>` : ""}
                    ${participants ? `<p><strong>Teilnehmer:</strong> ${participants}</p>` : ""}
                    <p><strong>Nachricht:</strong></p>
                    <p style="white-space: pre-line;">${message || "-"}</p>
                </div>
            </div>
        `;

        const textParts = [
            "Workshop-Anmeldung",
            "",
            workshop ? `Workshop: ${workshop}` : null,
            `Name: ${contact_person}`,
            `E-Mail: ${email}`,
            phone ? `Telefon: ${phone}` : null,
            parish_name ? `Pfarre/Institution: ${parish_name}` : null,
            participants ? `Teilnehmer: ${participants}` : null,
            `Nachricht: ${message || "-"}`,
            "",
            `Gesendet am: ${timestamp}`,
        ]
            .filter(Boolean)
            .join("\n");

        const result = await sendEmail({
            subject: `Workshop-Anmeldung${workshop ? `: ${workshop.split(" -- ")[0]}` : ""} – Mariabrunn Digital`,
            text: textParts,
            html: htmlContent,
            replyTo: email,
        });

        if (result.success) {
            return NextResponse.json({ success: true, message: "Anmeldung erfolgreich gesendet." });
        } else {
            return NextResponse.json(
                { success: false, message: "E-Mail konnte nicht gesendet werden." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Workshop form error:", error);
        return NextResponse.json(
            { success: false, message: "Serverfehler. Bitte versuchen Sie es später erneut." },
            { status: 500 }
        );
    }
}
