import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, HelpCircle } from "lucide-react";
import { Container, Card, CardContent, Button, Badge } from "@/components/ui";
import { modules } from "@/data/modules";
import { formatPrice } from "@/lib/utils";
import { FAQ } from "@/components/sections";

export const metadata: Metadata = {
  title: "Fiyatlandirma",
  description:
    "Reflektif fiyatlandirma planlari. Bireysel, kurumsal ve egitim kurumlari icin uygun fiyatlar.",
};

const b2cPlans = [
  {
    name: "Ucretsiz",
    price: 0,
    description: "Kesfetmeye baslamak icin",
    features: [
      "Temel kisilik testi",
      "Genel rapor",
      "5 meslek onerisi",
      "Email destek",
    ],
    limitations: ["Detayli analiz yok", "PDF rapor yok"],
    cta: "Ucretsiz Basla",
    highlighted: false,
  },
  {
    name: "Standart",
    price: 299,
    description: "Kapsamli degerlendirme",
    features: [
      "Tum testler (5+ test)",
      "AI destekli detayli rapor",
      "20+ meslek onerisi",
      "Hobi-meslek eslestirme",
      "PDF rapor indirme",
      "1 yil erisim",
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
      "Standart tum ozellikler",
      "30 dk video danismanlik",
      "Kisisellestirilmis yol haritasi",
      "CV ve LinkedIn optimizasyonu",
      "6 ay takip",
      "Oncelikli destek",
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
      "Premium tum ozellikler",
      "3 seans kariyer koclugu",
      "Mentor eslestirme",
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
    period: "yil",
    description: "Kucuk isletmeler icin",
    features: [
      "25 degerlendirme/yil",
      "Temel raporlar",
      "Email destek",
      "1 yonetici hesabi",
    ],
  },
  {
    name: "Professional",
    price: 14999,
    period: "yil",
    description: "Buyuyen sirketler icin",
    features: [
      "100 degerlendirme/yil",
      "Karsilastirmali analizler",
      "Oncelikli destek",
      "5 yonetici hesabi",
      "ATS entegrasyonu",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: 29999,
    period: "yil",
    description: "Orta olcekli sirketler icin",
    features: [
      "250 degerlendirme/yil",
      "API erisimi",
      "Ozel raporlama",
      "15 yonetici hesabi",
      "Dedicated destek",
    ],
  },
  {
    name: "Enterprise",
    price: 79999,
    period: "yil",
    description: "Buyuk kurumlar icin",
    features: [
      "Sinirsiz degerlendirme",
      "Ozel entegrasyon",
      "White-label secenegi",
      "Sinirsiz kullanici",
      "SLA garantisi",
      "Onsite egitim",
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
              Fiyatlandirma
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Her Butceye Uygun{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Planlar
              </span>
            </h1>
            <p className="text-lg text-neutral-600">
              Bireysel kullanicilardan buyuk kurumlara kadar herkes icin esnek
              fiyatlandirma secenekleri.
            </p>
          </div>
        </Container>
      </section>

      {/* B2C Plans */}
      <section className="pb-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Bireysel Kullanicilar
            </h2>
            <p className="text-neutral-600">
              Ogrenciler ve kariyer planlayicilar icin
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
                      En Populer
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
              Kurumsal Cozumler
            </h2>
            <p className="text-neutral-600">
              Sirketler ve IK departmanlari icin
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
                      En Populer
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
              Egitim Kurumlari
            </h2>
            <p className="text-neutral-600">
              Universiteler ve liseler icin ozel fiyatlandirma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Lise Paketi",
                price: 9999,
                capacity: "500 ogrenci",
                features: [
                  "Rehberlik paneli",
                  "Toplu raporlama",
                  "Veli bilgilendirme",
                  "Email destek",
                ],
              },
              {
                name: "Universite Standart",
                price: 29999,
                capacity: "2000 ogrenci",
                features: [
                  "Kariyer merkezi paneli",
                  "LMS entegrasyonu",
                  "Detayli analizler",
                  "Telefon destek",
                ],
                highlighted: true,
              },
              {
                name: "Universite Premium",
                price: 59999,
                capacity: "5000 ogrenci",
                features: [
                  "Tum ozellikler",
                  "API erisimi",
                  "Ozel entegrasyon",
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
                      /yil
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
              30 Gun Para Iade Garantisi
            </h2>
            <p className="text-neutral-600 mb-6">
              Hizmetimizden memnun kalmazsaniz, satin alma tarihinizden itibaren
              30 gun icinde tam para iadesi yapiyoruz. Hicbir soru sorulmadan.
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
