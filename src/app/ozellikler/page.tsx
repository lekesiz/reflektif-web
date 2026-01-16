import { Metadata } from "next";
import Link from "next/link";
import {
  Video,
  Users,
  RefreshCcw,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";
import { features } from "@/data/features";

export const metadata: Metadata = {
  title: "Özellikler | Reflektif",
  description:
    "Video mülakat, ATS, 360 derece değerlendirme ve yetkinlik bazlı değerlendirme. Reflektif'in güçlü özellikleri ile işe alım ve değerlendirme süreçlerinizi optimize edin.",
};

const iconMap: Record<string, React.ReactNode> = {
  Video: <Video className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  RefreshCcw: <RefreshCcw className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
};

const colorClasses: Record<string, { bg: string; text: string }> = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary-600",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary-600",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-600",
  },
};

export default function OzelliklerPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Güçlü Özellikler
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              İşe Alım ve Değerlendirme{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Süper Güçleri
              </span>
            </h1>
            <p className="text-xl text-neutral-600">
              Video mülakat, ATS, 360 derece değerlendirme ve daha fazlası.
              Tüm ihtiyaçlarınız tek platformda.
            </p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const colors = colorClasses[feature.color] || colorClasses.primary;
              return (
                <Link key={feature.id} href={`/ozellikler/${feature.slug}`}>
                  <Card
                    variant="elevated"
                    hover
                    className="h-full group cursor-pointer"
                  >
                    <div className="p-8">
                      <div
                        className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        {iconMap[feature.icon]}
                      </div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        {feature.name}
                      </h3>
                      <p className="text-neutral-600 mb-6">
                        {feature.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {feature.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="outline" size="sm">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Reflektif */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Neden Reflektif?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Türkiye&apos;nin en kapsamlı değerlendirme ve işe alım platformu
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Entegre Platform",
                description:
                  "Testler, video mülakat, ATS ve değerlendirmeler tek platformda. Farklı araçlar arasında geçiş yapmaya son.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Türkiye'ye Özel",
                description:
                  "Türkiye normları, Türkçe içerikler ve yerel destek ile tam uyumlu çözümler.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Sürekli Gelişim",
                description:
                  "Müşteri geri bildirimleri ve teknolojik gelişmeler doğrultusunda sürekli güncellenen platform.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Tüm Özellikleri Keşfedin
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ücretsiz demo ile Reflektif&apos;in tüm özelliklerini deneyimleyin ve
              organizasyonunuz için en uygun çözümü keşfedin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim">
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Demo Talep Et
                </Button>
              </Link>
              <Link href="/fiyatlandirma">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Fiyatları Görüntüle
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
