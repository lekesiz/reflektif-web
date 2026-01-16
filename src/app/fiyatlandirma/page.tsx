import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, HelpCircle } from "lucide-react";
import { Container, Card, CardContent, Button, Badge } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import { FAQ } from "@/components/sections";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "Reflektif fiyatlandırma planları. Bireysel, kurumsal ve eğitim kurumları için uygun fiyatlar.",
};

const b2cPlans = [
  {
    name: "Ücretsiz",
    price: 0,
    description: "Keşfetmeye başlamak için",
    features: [
      "Temel kişilik testi",
      "Genel rapor",
      "5 meslek önerisi",
      "Email destek",
    ],
    limitations: ["Detaylı analiz yok", "PDF rapor yok"],
    cta: "Ücretsiz Başla",
    highlighted: false,
  },
  {
    name: "Standart",
    price: 299,
    description: "Kapsamlı değerlendirme",
    features: [
      "Tüm testler (5+ test)",
      "AI destekli detaylı rapor",
      "20+ meslek önerisi",
      "Hobi-meslek eşleştirme",
      "PDF rapor indirme",
      "1 yıl erişim",
    ],
    limitations: [],
    cta: "Standart Al",
    highlighted: true,
  },
  {
    name: "Premium",
    price: 599,
    description: "Profesyonel destek ile",
    features: [
      "Standart tüm özellikler",
      "30 dk video danışmanlık",
      "Kişiselleştirilmiş yol haritası",
      "CV ve LinkedIn optimizasyonu",
      "6 ay takip",
      "Öncelikli destek",
    ],
    limitations: [],
    cta: "Premium Al",
    highlighted: false,
  },
  {
    name: "VIP",
    price: 1499,
    description: "Tam destek paketi",
    features: [
      "Premium tüm özellikler",
      "3 seans kariyer koçluğu",
      "Mentor eşleştirme",
      "12 ay takip",
      "7/24 destek",
      "Garantili memnuniyet",
    ],
    limitations: [],
    cta: "VIP Ol",
    highlighted: false,
  },
];

const b2bPlans = [
  {
    name: "Starter",
    price: 4999,
    period: "yıl",
    description: "Küçük işletmeler için",
    features: [
      "25 değerlendirme/yıl",
      "Temel raporlar",
      "Email destek",
      "1 yönetici hesabı",
    ],
  },
  {
    name: "Professional",
    price: 14999,
    period: "yıl",
    description: "Büyüyen şirketler için",
    features: [
      "100 değerlendirme/yıl",
      "Karşılaştırmalı analizler",
      "Öncelikli destek",
      "5 yönetici hesabı",
      "ATS entegrasyonu",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: 29999,
    period: "yıl",
    description: "Orta ölçekli şirketler için",
    features: [
      "250 değerlendirme/yıl",
      "API erişimi",
      "Özel raporlama",
      "15 yönetici hesabı",
      "Dedicated destek",
    ],
  },
  {
    name: "Enterprise",
    price: 79999,
    period: "yıl",
    description: "Büyük kurumlar için",
    features: [
      "Sınırsız değerlendirme",
      "Özel entegrasyon",
      "White-label seçeneği",
      "Sınırsız kullanıcı",
      "SLA garantisi",
      "Onsite eğitim",
    ],
  },
];

export default function FiyatlandirmaPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Fiyatlandırma
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Her Bütçeye Uygun{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Planlar
              </span>
            </h1>
            <p className="text-lg text-neutral-600">
              Bireysel kullanıcılardan büyük kurumlara kadar herkes için esnek
              fiyatlandırma seçenekleri.
            </p>
          </div>
        </Container>
      </section>

      {/* B2C Plans */}
      <section className="pb-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Bireysel Kullanıcılar
            </h2>
            <p className="text-neutral-600">
              Öğrenciler ve kariyer planlayıcılar için
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2cPlans.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? "gradient" : "bordered"}
                hover
                className={plan.highlighted ? "scale-105 z-10" : ""}
              >
                <CardContent>
                  {plan.highlighted && (
                    <Badge variant="accent" size="sm" className="mb-4">
                      En Popüler
                    </Badge>
                  )}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.highlighted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlighted ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {plan.price === 0 ? "0" : formatPrice(plan.price)}
                    </span>
                    {plan.price > 0 && (
                      <span
                        className={
                          plan.highlighted ? "text-white/80" : "text-neutral-500"
                        }
                      >
                        {" "}
                        TL
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? "text-white/80" : "text-neutral-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start text-sm ${
                          plan.highlighted ? "text-white/90" : "text-neutral-700"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? "text-white" : "text-green-500"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li
                        key={limitation}
                        className={`flex items-start text-sm ${
                          plan.highlighted
                            ? "text-white/50"
                            : "text-neutral-400"
                        }`}
                      >
                        <span className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-center">
                          -
                        </span>
                        {limitation}
                      </li>
                    ))}
                  </ul>

                  <Link href="/kayit">
                    <Button
                      variant={plan.highlighted ? "white" : "primary"}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* B2B Plans */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Kurumsal Çözümler
            </h2>
            <p className="text-neutral-600">
              Şirketler ve İK departmanları için
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bPlans.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? "gradient" : "bordered"}
                hover
                className={plan.highlighted ? "scale-105 z-10" : ""}
              >
                <CardContent>
                  {plan.highlighted && (
                    <Badge variant="accent" size="sm" className="mb-4">
                      En Popüler
                    </Badge>
                  )}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.highlighted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-3xl font-bold ${
                        plan.highlighted ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {formatPrice(plan.price)}
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-neutral-500"
                      }
                    >
                      /{plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? "text-white/80" : "text-neutral-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start text-sm ${
                          plan.highlighted ? "text-white/90" : "text-neutral-700"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? "text-white" : "text-green-500"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/iletisim">
                    <Button
                      variant={plan.highlighted ? "white" : "outline"}
                      className="w-full"
                    >
                      Demo Talep Et
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Education Plans */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Eğitim Kurumları
            </h2>
            <p className="text-neutral-600">
              Üniversiteler ve liseler için özel fiyatlandırma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Lise Paketi",
                price: 9999,
                capacity: "500 öğrenci",
                features: [
                  "Rehberlik paneli",
                  "Toplu raporlama",
                  "Veli bilgilendirme",
                  "Email destek",
                ],
              },
              {
                name: "Üniversite Standart",
                price: 29999,
                capacity: "2000 öğrenci",
                features: [
                  "Kariyer merkezi paneli",
                  "LMS entegrasyonu",
                  "Detaylı analizler",
                  "Telefon destek",
                ],
                highlighted: true,
              },
              {
                name: "Üniversite Premium",
                price: 59999,
                capacity: "5000 öğrenci",
                features: [
                  "Tüm özellikler",
                  "API erişimi",
                  "Özel entegrasyon",
                  "Dedicated destek",
                ],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? "gradient" : "bordered"}
                hover
              >
                <CardContent>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.highlighted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span
                      className={`text-3xl font-bold ${
                        plan.highlighted ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {formatPrice(plan.price)}
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-neutral-500"
                      }
                    >
                      /yıl
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? "text-white/80" : "text-neutral-600"
                    }`}
                  >
                    {plan.capacity}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start text-sm ${
                          plan.highlighted ? "text-white/90" : "text-neutral-700"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? "text-white" : "text-green-500"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/iletisim">
                    <Button
                      variant={plan.highlighted ? "white" : "outline"}
                      className="w-full"
                    >
                      Teklif Al
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              30 Gün Para İade Garantisi
            </h2>
            <p className="text-neutral-600 mb-6">
              Hizmetimizden memnun kalmazsanız, satın alma tarihinizden itibaren
              30 gün içinde tam para iadesi yapıyoruz. Hiçbir soru sorulmadan.
            </p>
            <Button variant="primary">Daha Fazla Bilgi</Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
