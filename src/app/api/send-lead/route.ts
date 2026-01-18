import { NextRequest, NextResponse } from "next/server";
import { sendEmail, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";
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
    const result = await sendEmail({
      to: TO_EMAIL,
      replyTo: data.email,
      subject: getEmailSubject(data.source),
      html: getEmailTemplate(data),
    });

    if (!result.success) {
      console.error("Email sending error:", result.error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: result.data?.data?.id,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
