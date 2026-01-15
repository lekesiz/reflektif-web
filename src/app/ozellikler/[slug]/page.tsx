import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Video,
  Users,
  RefreshCcw,
  Target,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Globe,
  Scale,
  Brain,
  LayoutDashboard,
  Zap,
  BarChart3,
  Eye,
  Search,
  TrendingUp,
  PieChart,
  Puzzle,
  CheckSquare,
  GitCompare,
  Map,
  ArrowRight,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";
import { features, getFeatureBySlug } from "@/data/features";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return features.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Özellik Bulunamadı | Reflektif",
    };
  }

  return {
    title: `${feature.name} | Reflektif`,
    description: feature.longDescription,
  };
}

const mainIconMap: Record<string, React.ReactNode> = {
  Video: <Video className="w-12 h-12" />,
  Users: <Users className="w-12 h-12" />,
  RefreshCcw: <RefreshCcw className="w-12 h-12" />,
  Target: <Target className="w-12 h-12" />,
};

const benefitIconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  PieChart: <PieChart className="w-6 h-6" />,
  Puzzle: <Puzzle className="w-6 h-6" />,
  CheckSquare: <CheckSquare className="w-6 h-6" />,
  GitCompare: <GitCompare className="w-6 h-6" />,
  Map: <Map className="w-6 h-6" />,
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

export default async function FeatureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  const colors = colorClasses[feature.color] || colorClasses.primary;

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${colors.bg} via-white to-neutral-50 py-16`}>
        <Container>
          <Link
            href="/ozellikler"
            className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm Özellikler
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`w-20 h-20 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6`}
              >
                {mainIconMap[feature.icon]}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {feature.name}
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                {feature.longDescription}
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
                Öne Çıkan Özellikler
              </h3>
              <div className="space-y-4">
                {feature.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center shrink-0`}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-neutral-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Avantajlar
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {feature.name} ile kazanacağınız faydalar
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {feature.benefits.map((benefit, index) => (
              <Card key={index} variant="bordered" className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    {benefitIconMap[benefit.icon] || <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Kullanım Alanları
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                {feature.name} özelliğini aşağıdaki senaryolarda kullanabilirsiniz
              </p>
              <div className="space-y-4">
                {feature.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ArrowRight className={`w-5 h-5 ${colors.text}`} />
                    <span className="text-neutral-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            {feature.integrations && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                  Entegrasyonlar
                </h3>
                <div className="flex flex-wrap gap-3">
                  {feature.integrations.map((integration, index) => (
                    <Badge key={index} variant="outline" size="lg">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <Container>
          <div className={`bg-gradient-to-r ${colors.gradient} rounded-3xl p-12 text-white`}>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">%70</div>
                <div className="opacity-90">Süre Tasarrufu</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100.000+</div>
                <div className="opacity-90">Kullanıcı</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="opacity-90">Müşteri Memnuniyeti</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Kurumsal Müşteri</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {feature.name} ile Tanışın
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Ücretsiz demo ile bu özelliği deneyimleyin ve organizasyonunuz için
              nasıl fayda sağlayacağını keşfedin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/iletisim">
                <Button size="lg">Ücretsiz Demo</Button>
              </Link>
              <Link href="/ozellikler">
                <Button variant="outline" size="lg">
                  Diğer Özellikler
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
