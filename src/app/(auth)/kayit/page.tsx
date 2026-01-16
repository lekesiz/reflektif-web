"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  User,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Container, Card, CardContent, Button, Input, Badge } from "@/components/ui";

export default function KayitPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    acceptTerms: false,
    acceptMarketing: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          acceptMarketing: formState.acceptMarketing,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({
          name: "",
          email: "",
          phone: "",
          acceptTerms: false,
          acceptMarketing: false,
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Bir hata oluştu.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-32 px-4">
        <Container size="sm">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-4">
              Kaydınız Alındı!
            </h1>
            <p className="text-neutral-600 mb-8">
              Başvurunuz başarıyla alındı. Ekibimiz en kısa sürede sizinle
              iletişime geçecektir. Bizi tercih ettiğiniz için teşekkür ederiz!
            </p>
            <div className="space-y-4">
              <p className="text-sm text-neutral-500">
                Sorularınız için: <a href="tel:05074343253" className="text-primary-600 font-medium">0507 43 43 253</a>
              </p>
              <Link href="/">
                <Button variant="outline">Ana Sayfaya Dön</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-32 px-4">
      <Container size="sm">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <span className="font-bold text-2xl text-neutral-900">
                Reflektif
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2">
              Hesap Oluşturun
            </h1>
            <p className="text-neutral-600">
              Ücretsiz kayıt olun ve hemen başlayın
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Ücretsiz test", "15 dk sonuç", "AI analiz"].map((benefit) => (
              <Badge key={benefit} variant="primary" size="sm">
                <CheckCircle className="w-3 h-3 mr-1" />
                {benefit}
              </Badge>
            ))}
          </div>

          <Card variant="elevated" padding="lg">
            <CardContent>
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Ad Soyad"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  leftIcon={<User className="w-5 h-5" />}
                  required
                />

                <Input
                  label="E-posta"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  leftIcon={<Mail className="w-5 h-5" />}
                  required
                />

                <Input
                  label="Telefon"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="0500 000 00 00"
                  leftIcon={<Phone className="w-5 h-5" />}
                  required
                />

                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formState.acceptTerms}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                      required
                    />
                    <span className="ml-2 text-sm text-neutral-600">
                      <Link
                        href="/kullanim-sartlari"
                        className="text-primary-600 hover:underline"
                      >
                        Kullanım Şartları
                      </Link>{" "}
                      ve{" "}
                      <Link
                        href="/gizlilik"
                        className="text-primary-600 hover:underline"
                      >
                        Gizlilik Politikası
                      </Link>
                      &apos;nı kabul ediyorum *
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="acceptMarketing"
                      checked={formState.acceptMarketing}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-neutral-600">
                      Kampanya ve güncellemelerden haberdar olmak istiyorum
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  isLoading={isLoading}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  disabled={!formState.acceptTerms}
                >
                  Kayıt Ol
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-center text-sm text-neutral-600">
                  Sorularınız mı var?{" "}
                  <a
                    href="tel:05074343253"
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    0507 43 43 253
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-center mt-8 text-neutral-600">
            Zaten hesabınız var mı?{" "}
            <Link
              href="/giris"
              className="text-primary-600 font-medium hover:text-primary-700"
            >
              Giriş yapın
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
