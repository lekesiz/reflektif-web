import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, subject, message, type } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Gerekli alanlar eksik" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Gecersiz email adresi" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Store in database
    // 3. Integrate with CRM

    // For now, we'll just log the submission
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      subject,
      message,
      type,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Mesajiniz basariyla alindi. En kisa surede geri donus yapacagiz.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Bir hata olustu. Lutfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
