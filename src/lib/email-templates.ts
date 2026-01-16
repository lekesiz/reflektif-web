export interface LeadFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  source: "popup" | "floating" | "sticky" | "contact" | "demo" | "newsletter";
  interests?: string[];
  companySize?: string;
  industry?: string;
  title?: string;
}

export function getEmailSubject(source: LeadFormData["source"]): string {
  const subjects: Record<LeadFormData["source"], string> = {
    popup: "🎯 Yeni Lead - Popup Form",
    floating: "💬 Yeni Mesaj - Floating Chat",
    sticky: "📧 Yeni Abone - Sticky Bar",
    contact: "📩 Yeni İletişim Formu",
    demo: "🚀 Yeni Demo Talebi",
    newsletter: "📰 Yeni Bülten Abonesi",
  };
  return subjects[source];
}

export function getEmailTemplate(data: LeadFormData): string {
  const sourceLabels: Record<LeadFormData["source"], string> = {
    popup: "Popup Form",
    floating: "Floating Chat",
    sticky: "Sticky Bar",
    contact: "İletişim Formu",
    demo: "Demo Talep Formu",
    newsletter: "Bülten Aboneliği",
  };

  const interestLabels: Record<string, string> = {
    kisilik: "Kişilik Envanteri",
    yetenek: "Yetenek Testleri",
    video: "Video Mülakat",
    ats: "Başvuru Takip (ATS)",
    "360": "360 Değerlendirme",
    teknik: "Teknik Testler",
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${getEmailSubject(data.source)}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                ${getEmailSubject(data.source)}
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">
                Kaynak: ${sourceLabels[data.source]}
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
                    <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">İletişim Bilgileri</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${data.name ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">Ad Soyad:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.name}</td>
                      </tr>
                      ` : ""}

                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">E-posta:</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${data.email}" style="color: #6366f1; font-size: 14px; font-weight: 500; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>

                      ${data.phone ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefon:</td>
                        <td style="padding: 8px 0;">
                          <a href="tel:${data.phone}" style="color: #6366f1; font-size: 14px; font-weight: 500; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      ` : ""}

                      ${data.company ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Şirket:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.company}</td>
                      </tr>
                      ` : ""}

                      ${data.title ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Pozisyon:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.title}</td>
                      </tr>
                      ` : ""}

                      ${data.companySize ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Şirket Büyüklüğü:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.companySize} çalışan</td>
                      </tr>
                      ` : ""}

                      ${data.industry ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Sektör:</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.industry}</td>
                      </tr>
                      ` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              ${data.interests && data.interests.length > 0 ? `
              <!-- Interests -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #faf5ff; border-radius: 12px; border-left: 4px solid #8b5cf6;">
                    <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">İlgilendiği Ürünler</h2>
                    <div>
                      ${data.interests.map(interest => `
                        <span style="display: inline-block; padding: 6px 12px; background-color: #8b5cf6; color: #ffffff; border-radius: 20px; font-size: 12px; margin: 4px 4px 4px 0;">
                          ${interestLabels[interest] || interest}
                        </span>
                      `).join("")}
                    </div>
                  </td>
                </tr>
              </table>
              ` : ""}

              ${data.message ? `
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #ecfeff; border-radius: 12px; border-left: 4px solid #06b6d4;">
                    <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Mesaj</h2>
                    <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${data.email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Yanıtla
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
                Bu e-posta <a href="https://reflektif.net" style="color: #6366f1; text-decoration: none;">reflektif.net</a> üzerinden gönderilmiştir.
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
