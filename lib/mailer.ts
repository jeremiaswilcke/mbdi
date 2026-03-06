import nodemailer from "nodemailer";

export interface MailOptions {
    to?: string;
    subject: string;
    text: string;
    html: string;
    replyTo?: string;
}

export async function sendEmail({ to, subject, text, html, replyTo }: MailOptions) {
    // Using environment variables for SMTP configuration
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_FROM || '"Mariabrunn Digital" <noreply@mariabrunn-digital.at>',
        to: to || "kontakt@mariabrunn-digital.at", // Default delivery address as per requirements
        replyTo: replyTo,
        subject: subject,
        text: text,
        html: html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, info };
    } catch (error) {
        console.error("Error sending email: ", error);
        return { success: false, error };
    }
}
