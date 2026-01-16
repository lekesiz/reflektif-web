import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";

interface TestResultData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resultType: "risk-taker" | "balanced" | "cautious";
  resultTitle: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  answers: number[];
}

function getTestResultEmailTemplate(data: TestResultData): string {
  const resultColors: Record<string, string> = {
    "risk-taker": "#f97316",
    balanced: "#8b5cf6",
    cautious: "#10b981",
  };

  const resultDescriptions: Record<string, string> = {
    "risk-taker":
      "Yuksek risk toleransina sahip. Firsatlari degerlendirmekte hizli ve degisimden korkmuyor. Girisimcilik ruhu tasiyor.",
    balanced:
      "Risk ve guvenlik arasinda saglikli bir denge kurabiliyor. Kararlarini verirken hem firsatlari hem de riskleri degerlendiriyor.",
    cautious:
      "Guvenlik ve istikrar oncelikli. Kararlarini dikkatlice aliyor, riskleri minimize etmeye calisiyor.",
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yeni Ucretsiz Test Sonucu - Kariyer Risk Analizi</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${resultColors[data.resultType]} 0%, #6366f1 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                🎯 Yeni Ucretsiz Test Sonucu
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">
                Kariyer Risk Analizi - Mini Test
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">

              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-radius: 12px; border-left: 4px solid #6366f1;">
                    <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Kullanici Bilgileri</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">Ad Soyad:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.firstName} ${data.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">E-posta:</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${data.email}" style="color: #6366f1; font-size: 14px; font-weight: 500; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefon:</td>
                        <td style="padding: 8px 0;">
                          <a href="tel:${data.phone}" style="color: #6366f1; font-size: 14px; font-weight: 500; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Test Result -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: #faf5ff; border-radius: 12px; border-left: 4px solid ${resultColors[data.resultType]};">
                    <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Test Sonucu</h2>

                    <div style="text-align: center; padding: 20px 0;">
                      <div style="display: inline-block; padding: 12px 24px; background-color: ${resultColors[data.resultType]}; color: #ffffff; border-radius: 30px; font-size: 18px; font-weight: 600;">
                        ${data.resultTitle}
                      </div>
                    </div>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 15px;">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Profil Tipi:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.resultType}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Toplam Puan:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.totalScore} / ${data.maxScore}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Yuzdelik:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">%${data.percentage.toFixed(0)}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Cevap Dagilimi:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">[${data.answers.join(", ")}]</td>
                      </tr>
                    </table>

                    <p style="margin: 20px 0 0 0; color: #374151; font-size: 14px; line-height: 1.6; background-color: #ffffff; padding: 15px; border-radius: 8px;">
                      <strong>Profil Aciklamasi:</strong><br/>
                      ${resultDescriptions[data.resultType]}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${data.email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-right: 10px;">
                      E-posta Gonder
                    </a>
                    <a href="tel:${data.phone}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Ara
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                Bu e-posta <a href="https://reflektif.net/testler/kariyer-risk-analizi/ucretsiz-test" style="color: #6366f1; text-decoration: none;">Kariyer Risk Analizi Ucretsiz Test</a> sayfasindan gonderilmistir.
              </p>
              <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 11px;">
                ${new Date().toLocaleString("tr-TR", { dateStyle: "full", timeStyle: "short" })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const data: TestResultData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Gerekli alanlar eksik" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `🎯 Yeni Ucretsiz Test Sonucu - ${data.firstName} ${data.lastName} (${data.resultTitle})`,
      html: getTestResultEmailTemplate(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-posta gonderilemedi" },
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
      { error: "Bir hata olustu" },
      { status: 500 }
    );
  }
}
