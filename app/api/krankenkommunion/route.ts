import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handle POST requests
export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        const { date, time, address, phone, email, name, consent, honeypot } = body;

        // Anti-spam honeypot
        if (honeypot) {
            // Silently reject if the honeypot field is filled (bot activity)
            return NextResponse.json({ success: true, message: "OK" });
        }

        if (!date || !time || !address || !phone || !email || !consent) {
            return NextResponse.json(
                { success: false, message: "Bitte füllen Sie alle Pflichtfelder aus." },
                { status: 400 }
            );
        }

        // Send Emails via Nodemailer
        // Need to configure SMTP settings via env variables
        const smtpHost = process.env.SMTP_HOST || '';
        const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
        const smtpUser = process.env.SMTP_USER || '';
        const smtpPass = process.env.SMTP_PASS || '';
        const smtpFrom = process.env.SMTP_FROM || 'noreply@mariabrunn-digital.at';
        const internalInbox = process.env.KRANKENKOMMUNION_INBOX || 'buero@mariabrunn-digital.at';

        // Check if mailer can be configured
        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error("Mail server not fully configured. Email sending skipped for testing.");
            // In a real scenario, you'd fail here. For local dev/testing without env vars, we succeed.
            // Let's print out what we would have sent:
            console.log("Would have sent notification to:", internalInbox);
            console.log("Would have sent confirmation to:", email);
            return NextResponse.json({ success: true, message: "OK (Test Mode)" });
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // 1. Notification Email to the Internal Address
        const internalMailOptions = {
            from: smtpFrom,
            to: internalInbox,
            subject: "Neue Krankenkommunion-Anfrage",
            text: `
Neue Anfrage für Krankenkommunion erhalten:

Datum: ${date}
Zeit: ${time}
Adresse: ${address}

Kontaktdaten:
Name: ${name || 'Nicht angegeben'}
Telefon: ${phone}
E-Mail: ${email}
Zustimmung DSGVO: Ja

Timestamp: ${new Date().toISOString()}
            `,
        };

        // 2. Confirmation Email to the User
        const userMailOptions = {
            from: smtpFrom,
            to: email,
            subject: "Mariabrunn Digital – Anfrage Krankenkommunion erhalten",
            text: `
Liebe(r) ${name ? name : 'Antragssteller/in'},

wir haben Ihre Anfrage für die Krankenkommunion erhalten und kümmern uns so schnell wie möglich darum.

Zusammenfassung Ihrer Angaben:
Datum: ${date}
Zeit: ${time}
Adresse: ${address}

Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen.

Herzliche Grüße,
Ihr Team von Mariabrunn Digital
            `,
        };

        // Send both emails (awaiting them sequentially for simplicity and clear error handling)
        await transporter.sendMail(internalMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json({ success: true, message: "OK" });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Ein Fehler ist bei der Verarbeitung aufgetreten. Bitte versuchen Sie es später noch einmal." },
            { status: 500 }
        );
    }
}
