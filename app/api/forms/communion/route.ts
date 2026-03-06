import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, address, message, honeypot } = body;

        // Spam protection
        if (honeypot) {
            return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
        }

        // Validation
        if (!name || !email || !phone || !address) {
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
                    <p style="color: #6b7280; font-size: 13px; margin-top: 0;">Formular: <strong>Anfrage Krankenkommunion</strong> | Eingang: ${timestamp}</p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>E-Mail:</strong> ${email}</p>
                    <p><strong>Telefon:</strong> ${phone}</p>
                    <p><strong>Adresse:</strong></p>
                    <p style="white-space: pre-line;">${address}</p>
                    <p><strong>Nachricht:</strong></p>
                    <p style="white-space: pre-line;">${message || "-"}</p>
                </div>
            </div>
        `;

        const result = await sendEmail({
            subject: "Anfrage Krankenkommunion – Mariabrunn Digital",
            text: `Anfrage Krankenkommunion\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\nAdresse: ${address}\nNachricht: ${message || "-"}\n\nGesendet am: ${timestamp}`,
            html: htmlContent,
            replyTo: email,
        });

        if (result.success) {
            return NextResponse.json({ success: true, message: "Anfrage erfolgreich gesendet." });
        } else {
            return NextResponse.json(
                { success: false, message: "E-Mail konnte nicht gesendet werden." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Communion form error:", error);
        return NextResponse.json(
            { success: false, message: "Serverfehler. Bitte versuchen Sie es später erneut." },
            { status: 500 }
        );
    }
}
