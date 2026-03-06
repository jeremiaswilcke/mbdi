import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { parish_name, contact_person, email, message, honeypot } = body;

        if (honeypot) return NextResponse.json({ success: true });

        if (!parish_name || !contact_person || !email) {
            return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
        }

        const htmlContent = `
      <h2>Workshop-Anfrage: ${parish_name}</h2>
      <p><strong>Pfarre/Institution:</strong> ${parish_name}</p>
      <p><strong>Ansprechperson:</strong> ${contact_person}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br>') : '-'}</p>
      <hr>
      <p><small>Gesendet am: ${new Date().toLocaleString('de-AT')}</small></p>
    `;

        const result = await sendEmail({
            subject: `Workshop Anfrage für ${parish_name}`,
            text: `Neue Workshop Anfrage von ${parish_name} (${contact_person})`,
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
