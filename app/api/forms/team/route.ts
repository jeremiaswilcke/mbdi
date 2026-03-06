import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, interest_area, honeypot } = body;

        if (honeypot) return NextResponse.json({ success: true });

        if (!name || !email || !interest_area) {
            return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
        }

        const htmlContent = `
      <h2>Neue Team-Bewerbung (Website)</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Interessenbereich:</strong> ${interest_area}</p>
      <hr>
      <p><small>Gesendet am: ${new Date().toLocaleString('de-AT')}</small></p>
    `;

        const result = await sendEmail({
            subject: `Team-Bewerbung: ${interest_area} - ${name}`,
            text: `Neue Bewerbung für ${interest_area} von ${name} (${email})`,
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
