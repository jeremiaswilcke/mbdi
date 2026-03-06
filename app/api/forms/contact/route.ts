import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message, honeypot } = body;

        // Spam Check
        if (honeypot) {
            return NextResponse.json({ success: true, message: "OK" }, { status: 200 }); // Silent fail for bots
        }

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
        }

        const htmlContent = `
      <h2>Neue Kontaktanfrage (Website)</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Gesendet am: ${new Date().toLocaleString('de-AT')}</small></p>
    `;

        const result = await sendEmail({
            subject: `Kontaktanfrage von ${name} - Mariabrunn Digital`,
            text: `Neue Kontaktanfrage von ${name} (${email}):\n\n${message}`,
            html: htmlContent,
            replyTo: email,
        });

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
