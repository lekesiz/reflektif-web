"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Building2,
  Users,
  Calendar,
  Clock,
  Shield,
  Headphones,
  ArrowRight,
  Play,
} from "lucide-react";
import { Container, Card, Badge, Button, Input, Textarea } from "@/components/ui";

const companySizes = [
  { value: "1-10", label: "1-10 çalışan" },
  { value: "11-50", label: "11-50 çalışan" },
  { value: "51-200", label: "51-200 çalışan" },
  { value: "201-500", label: "201-500 çalışan" },
  { value: "500+", label: "500+ çalışan" },
];

const industries = [
  "Teknoloji",
  "Finans & Bankacılık",
  "Perakende",
  "Sağlık",
  "Eğitim",
  "Üretim",
  "Lojistik",
  "Danışmanlık",
  "Diğer",
];

const interests = [
  { id: "kisilik", label: "Kişilik Envanteri" },
  { id: "yetenek", label: "Yetenek Testleri" },
  { id: "video", label: "Video Mülakat" },
  { id: "ats", label: "Başvuru Takip (ATS)" },
  { id: "360", label: "360 Değerlendirme" },
  { id: "teknik", label: "Teknik Testler" },
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    companySize: "",
    industry: "",
    interests: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInterestToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          title: formData.title,
          companySize: formData.companySize,
          industry: formData.industry,
          interests: formData.interests,
          message: formData.message,
          source: "demo",
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center">
        <Container size="sm">
          <Card className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              Demo Talebiniz Alındı!
            </h1>
            <p className="text-neutral-600 mb-8">
              En kısa sürede sizinle iletişime geçeceğiz. Demo toplantınızı planlamak
              için ekibimiz 24 saat içinde size dönüş yapacaktır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button>Ana Sayfaya Dön</Button>
              </Link>
              <Link href="/kaynaklar">
                <Button variant="outline">Kaynakları İncele</Button>
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">
                Ücretsiz Demo
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Reflektif&apos;i{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                  Keşfedin
                </span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                30 dakikalık kişiselleştirilmiş demo ile platformumuzu tanıyın.
                Uzman ekibimiz size özel çözümler sunacak.
              </p>
              <div className="space-y-4">
                {[
                  "Canlı platform gösterimi",
                  "İhtiyaçlarınıza özel çözüm önerileri",
                  "Fiyatlandırma ve entegrasyon bilgisi",
                  "Sorularınıza anında yanıt",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </button>
                </div>
              </div>
              <p className="text-center text-neutral-500 mt-4">
                2 dakikalık tanıtım videosu
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Demo Talep Formu
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Ad"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Soyad"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Contact Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="İş E-postası"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Telefon"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  {/* Company Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Şirket Adı"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Pozisyon"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </div>

                  {/* Company Size */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Şirket Büyüklüğü
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {companySizes.map((size) => (
                        <button
                          key={size.value}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, companySize: size.value })
                          }
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            formData.companySize === size.value
                              ? "bg-primary-50 border-primary-500 text-primary-700"
                              : "border-neutral-200 hover:border-primary-300"
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Sektör
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                    >
                      <option value="">Seçiniz</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      İlgilendiğiniz Ürünler
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <button
                          key={interest.id}
                          type="button"
                          onClick={() => handleInterestToggle(interest.id)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            formData.interests.includes(interest.id)
                              ? "bg-primary-50 border-primary-500 text-primary-700"
                              : "border-neutral-200 hover:border-primary-300"
                          }`}
                        >
                          {interest.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <Textarea
                    label="Mesajınız (Opsiyonel)"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    placeholder="Özel ihtiyaçlarınızı veya sorularınızı yazabilirsiniz..."
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Demo Talep Et"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-neutral-500 text-center">
                    Formu göndererek{" "}
                    <Link href="/gizlilik" className="text-primary-600 hover:underline">
                      Gizlilik Politikası
                    </Link>
                    &apos;nı kabul etmiş olursunuz.
                  </p>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Badges */}
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Neden Reflektif?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Building2 className="w-5 h-5" />,
                      title: "500+ Kurumsal Müşteri",
                      desc: "Türkiye'nin önde gelen şirketleri",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "250.000+ Değerlendirme",
                      desc: "Başarıyla tamamlanan test",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "KVKK Uyumlu",
                      desc: "Verileriniz güvende",
                    },
                    {
                      icon: <Headphones className="w-5 h-5" />,
                      title: "7/24 Destek",
                      desc: "Her zaman yanınızdayız",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-neutral-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Contact Card */}
              <Card className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <h3 className="font-semibold mb-2">Hemen Arayın</h3>
                <p className="text-sm opacity-90 mb-4">
                  Sorularınız için bize ulaşın
                </p>
                <a
                  href="tel:+905074343253"
                  className="text-2xl font-bold hover:underline"
                >
                  0507 43 43 253
                </a>
                <p className="text-sm opacity-75 mt-2">
                  Pazartesi - Cuma, 09:00 - 18:00
                </p>
              </Card>

              {/* Schedule Info */}
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Demo Süreci
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: <Calendar className="w-4 h-4" />, text: "24 saat içinde dönüş" },
                    { icon: <Clock className="w-4 h-4" />, text: "30 dakikalık sunum" },
                    { icon: <Users className="w-4 h-4" />, text: "Uzman ekip desteği" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-neutral-600">
                      {item.icon}
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
