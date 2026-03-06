import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, address, date, time, message, honeypot } = body;

        // Spam Check
        if (honeypot) return NextResponse.json({ success: true });

        if (!email || !phone || !address || !date || !time) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        const htmlContent = `
      <h2>Anfrage Krankenkommunion</h2>
      <p><strong>Gewünschtes Datum:</strong> ${date} um ${time} Uhr</p>
      <hr>
      <p><strong>Name:</strong> ${name || 'Keine Angabe'}</p>
      <p><strong>Adresse:</strong> ${address}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <hr>
      <p><strong>Zusätzliche Nachricht:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br>') : '-'}</p>
      <hr>
      <p><small>Gesendet am: ${new Date().toLocaleString('de-AT')}</small></p>
    `;

        const result = await sendEmail({
            subject: `Anfrage Krankenkommunion – Mariabrunn Digital`,
            text: `Krankenkommunion Anfrage für den ${date} um ${time} Uhr.\n\nAdresse: ${address}\nTelefon: ${phone}`,
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
