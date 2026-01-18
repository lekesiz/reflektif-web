import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export const FROM_EMAIL = "Reflektif <noreply@reflektif.net>";
export const TO_EMAIL = "info@reflektif.net";

/**
 * Email gönderme helper fonksiyonu
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = FROM_EMAIL,
  replyTo,
}: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}) {
  if (!resend) {
    console.error("Resend API key not configured");
    return { success: false, error: "Email service not configured" };
  }
  
  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error };
  }
}
