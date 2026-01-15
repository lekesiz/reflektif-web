import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL = "Reflektif <noreply@reflektif.net>";
export const TO_EMAIL = "mikail@reflektif.net";
