import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Brain,
  Lightbulb,
  Languages,
  Code,
  Gamepad2,
  Theater,
  Shield,
  ArrowLeft,
  Clock,
  FileQuestion,
  CheckCircle2,
  Target,
  Users,
  ArrowRight,
  Sparkles,
  Gift,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";
import { testCategories, getTestCategoryBySlug } from "@/data/tests";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return testCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getTestCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Test Bulunamadı | Reflektif",
    };
  }

  return {
    title: `${category.name} | Reflektif`,
    description: category.longDescription,
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-12 h-12" />,
  Lightbulb: <Lightbulb className="w-12 h-12" />,
  Languages: <Languages className="w-12 h-12" />,
  Code: <Code className="w-12 h-12" />,
  Gamepad2: <Gamepad2 className="w-12 h-12" />,
  Theater: <Theater className="w-12 h-12" />,
  Shield: <Shield className="w-12 h-12" />,
};

const colorClasses: Record<string, { bg: string; text: string; gradient: string }> = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary-600",
    gradient: "from-primary-500 to-primary-600",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary-600",
    gradient: "from-secondary-500 to-secondary-600",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-600",
    gradient: "from-accent-500 to-accent-600",
  },
};

export default async function TestDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getTestCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const colors = colorClasses[category.color] || colorClasses.primary;

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${colors.bg} via-white to-neutral-50 py-16`}>
        <Container>
          <Link
            href="/testler"
            className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm Testler
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`w-20 h-20 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6`}
              >
                {iconMap[category.icon]}
              </div>
              <Badge variant={category.color as "primary" | "secondary" | "accent"} className="mb-4">
                {category.questionCount}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {category.name}
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                {category.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim">
                  <Button size="lg">Demo Talep Et</Button>
                </Link>
                <Link href="/fiyatlandirma">
                  <Button variant="outline" size="lg">
                    Fiyatlandırma
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                Test Özeti
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="flex items-center gap-2 text-neutral-600">
                    <Clock className="w-5 h-5" />
                    Toplam Süre
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {category.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="flex items-center gap-2 text-neutral-600">
                    <FileQuestion className="w-5 h-5" />
                    Soru/Egzersiz
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {category.questionCount}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="flex items-center gap-2 text-neutral-600">
                    <Target className="w-5 h-5" />
                    Alt Test Sayısı
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {category.tests.length} Adet
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="flex items-center gap-2 text-neutral-600">
                    <Users className="w-5 h-5" />
                    Tamamlayan
                  </span>
                  <span className="font-semibold text-neutral-900">50.000+</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Free Test CTA - Only for Kariyer Risk Analizi */}
      {slug === "kariyer-risk-analizi" && (
        <section className="py-8">
          <Container>
            <Card className="p-8 bg-gradient-to-r from-accent-500 to-primary-500 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Gift className="w-8 h-8" />
                  </div>
                  <div>
                    <Badge className="bg-white/20 text-white mb-2">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Ücretsiz
                    </Badge>
                    <h3 className="text-2xl font-bold">Mini Kariyer Risk Testi</h3>
                    <p className="opacity-90">7 soruda kariyer risk profilinizi keşfedin!</p>
                  </div>
                </div>
                <Link href="/testler/kariyer-risk-analizi/ucretsiz-test">
                  <Button
                    size="lg"
                    className="bg-white text-neutral-900 hover:bg-neutral-100 whitespace-nowrap"
                  >
                    Hemen Başla
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </Container>
        </section>
      )}

      {/* Sub Tests Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Alt Testler
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {category.tests.map((test, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      {test.name}
                    </h3>
                    <p className="text-neutral-600 mb-3">{test.description}</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {test.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileQuestion className="w-4 h-4" />
                        {test.questions} soru
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Özellikler ve Avantajlar
              </h2>
              <div className="space-y-4">
                {category.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 ${colors.bg} ${colors.text} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Kullanım Alanları
              </h2>
              <div className="space-y-4">
                {category.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-neutral-200 text-neutral-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-neutral-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className={`bg-gradient-to-r ${colors.gradient} rounded-3xl p-12 text-white text-center`}>
            <h2 className="text-3xl font-bold mb-4">
              {category.name} ile Tanışın
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ücretsiz demo ile testlerimizi deneyimleyin ve organizasyonunuz için
              en uygun çözümü keşfedin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim">
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Ücretsiz Demo
                </Button>
              </Link>
              <Link href="/testler">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Diğer Testler
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
