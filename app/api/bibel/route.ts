import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Memory cache for simple IP rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return true;
    }

    if (now - entry.lastReset > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return true;
    }

    if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }

    entry.count += 1;
    return true;
}

export async function POST(request: Request) {
    try {
        // 1. Rate Limiting Check
        const ip = request.headers.get("x-forwarded-for") || "unknown";
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
                { status: 429 }
            );
        }

        const data = await request.json();

        // 2. Validate essential data
        if (!data.name || !data.email || !data.consent) {
            return NextResponse.json(
                { error: "Bitte füllen Sie alle erforderlichen Felder aus." },
                { status: 400 }
            );
        }

        // 3. Setup Nodemailer Transporter
        const smtpHost = process.env.SMTP_HOST;
        let transporter: nodemailer.Transporter;

        if (!smtpHost) {
            console.log("No SMTP details provided in Environment. Outputting submission to log only.");
            console.log("Mock Submission:", data);

            return NextResponse.json({ success: true, message: "Mock success (logging to console)", data });
        }

        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 4. Send Confirmation Email to the new reader
        const fromEmail = process.env.SMTP_FROM || `"Mariabrunn Digital" <noreply@mariabrunn.at>`;

        await transporter.sendMail({
            from: fromEmail,
            to: data.email,
            subject: "Danke für deine Meldung – Bibel in einem Jahr",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #155277;">Hallo ${data.name}, großartig dass du mitmachst!</h2>
                    <p>Du hast dich als Vorleser:in für unser Projekt "Bibel in einem Jahr" der Pfarre Mariabrunn gemeldet.</p>
                    <p>Wir melden uns in Kürze bei dir mit einer der noch offenen Bibelstellen. Du kannst sie ganz einfach zu Hause mit dem Handy aufnehmen oder bei uns im Studio vorbeikommen.</p>
                    <br/>
                    <p>Herzliche Grüße,<br/>Dein Team von Mariabrunn Digital</p>
                </div>
            `,
        });

        // 5. Send Notification Email to the parish/organizer
        const internalInbox = process.env.BIBEL_INBOX || process.env.KRANKENKOMMUNION_INBOX || process.env.SMTP_USER;

        if (internalInbox) {
            await transporter.sendMail({
                from: fromEmail,
                to: internalInbox,
                subject: "Neue:r Vorleser:in – Bibel in einem Jahr",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 8px;">
                        <h2 style="color: #155277;">Neue Meldung als Vorleser:in</h2>
                        <p>Eine neue Person möchte beim Projekt "Bibel in einem Jahr" eine Passage vorlesen:</p>
                        <ul style="list-style-type: none; padding-left: 0;">
                            <li><strong>Name:</strong> ${data.name}</li>
                            <li><strong>E-Mail:</strong> ${data.email}</li>
                            <li><strong>Gemeldet am:</strong> ${new Date().toLocaleString('de-AT')}</li>
                        </ul>
                        <p style="margin-top: 16px; color: #666;">Bitte eine offene Bibelstelle zuweisen und der Person per E-Mail zuschicken.</p>
                    </div>
                `,
            });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Error processing Bibel signup API request:", error);
        return NextResponse.json(
            { error: "Interner Serverfehler bei der Verarbeitung." },
            { status: 500 }
        );
    }
}
