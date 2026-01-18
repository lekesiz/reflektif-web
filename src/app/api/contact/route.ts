import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { checkRateLimit, getClientIP } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validation";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    // Rate limiting kontrolü
    const clientIP = getClientIP(request);
    const rateLimitResult = await checkRateLimit(`contact:${clientIP}`);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin.",
          retryAfter: rateLimitResult.reset,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
          },
        }
      );
    }

    // Request body'yi parse et
    const body = await request.json();

    // Zod ile validation
    const validatedData = contactSchema.parse(body);

    // E-posta gönderimi (Resend kullanarak)
    try {
      await resend.emails.send({
        from: "Reflektif İletişim <iletisim@reflektif.net>",
        to: ["info@reflektif.net"],
        replyTo: validatedData.email,
        subject: `Yeni İletişim Formu: ${validatedData.subject}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>İsim:</strong> ${validatedData.name}</p>
          <p><strong>E-posta:</strong> ${validatedData.email}</p>
          ${validatedData.phone ? `<p><strong>Telefon:</strong> ${validatedData.phone}</p>` : ""}
          ${validatedData.company ? `<p><strong>Şirket:</strong> ${validatedData.company}</p>` : ""}
          <p><strong>Konu:</strong> ${validatedData.subject}</p>
          <p><strong>Mesaj Tipi:</strong> ${validatedData.type}</p>
          <hr>
          <p><strong>Mesaj:</strong></p>
          <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Gönderim Zamanı: ${new Date().toLocaleString("tr-TR")}</small></p>
        `,
      });

      // Kullanıcıya otomatik yanıt gönder
      await resend.emails.send({
        from: "Reflektif <noreply@reflektif.net>",
        to: validatedData.email,
        subject: "Mesajınızı Aldık - Reflektif",
        html: `
          <h2>Merhaba ${validatedData.name},</h2>
          <p>Mesajınızı aldık ve en kısa sürede size geri dönüş yapacağız.</p>
          <p>İlginiz için teşekkür ederiz!</p>
          <br>
          <p>Saygılarımızla,<br><strong>Reflektif Ekibi</strong></p>
        `,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // E-posta gönderilemese bile formu başarılı say
      // Alternatif: Database'e kaydet ve sonra retry mekanizması ile tekrar dene
    }

    // Başarılı yanıt
    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla alındı. En kısa sürede geri dönüş yapacağız.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Zod validation hatası
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Geçersiz form verisi",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Genel hata
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
