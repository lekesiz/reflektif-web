import { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Lightbulb,
  Languages,
  Code,
  Gamepad2,
  Theater,
  ArrowRight,
  Clock,
  FileQuestion,
  CheckCircle2,
} from "lucide-react";
import { Container, Card, Badge } from "@/components/ui";
import { testCategories } from "@/data/tests";

export const metadata: Metadata = {
  title: "Test ve Değerlendirme Araçları | Reflektif",
  description:
    "Kişilik envanteri, yetenek testleri, dil testleri, teknik testler, oyun tabanlı değerlendirme ve dijital simülasyonlar. Kapsamlı değerlendirme çözümleri.",
};

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Languages: <Languages className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Gamepad2: <Gamepad2 className="w-8 h-8" />,
  Theater: <Theater className="w-8 h-8" />,
};

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary-600",
    border: "border-primary-200",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary-600",
    border: "border-secondary-200",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-600",
    border: "border-accent-200",
  },
};

export default function TestlerPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">
              30+ Farklı Test ve Değerlendirme
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Bilimsel Test ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Değerlendirme Araçları
              </span>
            </h1>
            <p className="text-xl text-neutral-600">
              Kişilik envanterinden teknik testlere, oyun tabanlı değerlendirmeden
              dijital simülasyonlara kadar kapsamlı araç seti ile doğru kararlar alın.
            </p>
          </div>
        </Container>
      </section>

      {/* Test Categories Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testCategories.map((category) => {
              const colors = colorClasses[category.color] || colorClasses.primary;
              return (
                <Link key={category.id} href={`/testler/${category.slug}`}>
                  <Card
                    variant="elevated"
                    hover
                    className="h-full group cursor-pointer"
                  >
                    <div className="p-6">
                      <div
                        className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        {iconMap[category.icon]}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-neutral-600 mb-4">{category.description}</p>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {category.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileQuestion className="w-4 h-4" />
                          {category.questionCount}
                        </span>
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

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Neden Reflektif Testleri?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Bilimsel temelli, güvenilir ve kullanıcı dostu değerlendirme araçları
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bilimsel Geçerlilik",
                description:
                  "Tüm testlerimiz akademik araştırmalar ve istatistiksel analizlerle doğrulanmıştır",
              },
              {
                title: "Normatif Karşılaştırma",
                description:
                  "100.000+ katılımcı verisine dayalı Türkiye normları ile karşılaştırma",
              },
              {
                title: "Anlık Raporlama",
                description:
                  "Test tamamlandığında otomatik olarak detaylı raporlar oluşturulur",
              },
              {
                title: "Mobil Uyumlu",
                description:
                  "Tüm testler mobil cihazlarda sorunsuz çalışacak şekilde optimize edilmiştir",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">250.000+</div>
                <div className="text-primary-100">Tamamlanan Test</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-primary-100">Farklı Test Türü</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">%94</div>
                <div className="text-primary-100">Doğruluk Oranı</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-primary-100">Kullanıcı Puanı</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
