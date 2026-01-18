import { NextResponse } from "next/server";
import { sendEmail, TO_EMAIL } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, acceptMarketing } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Gerekli alanlar eksik" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçersiz email adresi" },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Geçersiz telefon numarası" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("tr-TR", {
      timeZone: "Europe/Istanbul",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Send email notification
    try {
      await sendEmail({
        from: "Reflektif <noreply@reflektif.net>",
        to: ["info@reflektif.net"],
        subject: `Yeni Kayıt Başvurusu: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🎉 Yeni Kayıt Başvurusu</h1>
            </div>

            <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1e293b; margin-top: 0;">Kullanıcı Bilgileri</h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Ad Soyad:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">E-posta:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Telefon:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">
                    <a href="tel:${phone}" style="color: #6366f1;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Pazarlama İzni:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">
                    ${acceptMarketing ? "✅ Evet" : "❌ Hayır"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #64748b;">Kayıt Tarihi:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 600;">${timestamp}</td>
                </tr>
              </table>

              <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #6366f1;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  <strong>📞 Hemen İletişime Geçin:</strong><br>
                  Bu kullanıcıyla en kısa sürede iletişime geçmeniz önerilir.
                </p>
              </div>
            </div>

            <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
              <p>Bu e-posta reflektif.net kayıt formu tarafından otomatik olarak gönderilmiştir.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue even if email fails - log the registration
    }

    // Log the registration
    console.log("New registration:", {
      name,
      email,
      phone,
      acceptMarketing,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Kaydınız başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
