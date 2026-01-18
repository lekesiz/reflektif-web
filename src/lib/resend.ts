import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

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
