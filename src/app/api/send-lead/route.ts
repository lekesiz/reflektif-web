import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";
import {
  LeadFormData,
  getEmailSubject,
  getEmailTemplate,
} from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const data: LeadFormData = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: "E-posta adresi gerekli" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: getEmailSubject(data.source),
      html: getEmailTemplate(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: emailData?.id,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
