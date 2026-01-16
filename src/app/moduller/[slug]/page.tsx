import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  CheckCircle,
  ArrowRight,
  Star,
  Accessibility,
  Clock,
  Award,
  FileCheck,
  AlertCircle,
} from "lucide-react";
import { Container, Card, CardContent, Button, Badge } from "@/components/ui";
import { modules, getModuleBySlug } from "@/data/modules";
import { formatPrice } from "@/lib/utils";

const moduleIcons: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  Accessibility,
};

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    return {
      title: "Modul Bulunamadi",
    };
  }

  return {
    title: module.name,
    description: module.longDescription,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    notFound();
  }

  const Icon = moduleIcons[module.icon];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <Badge variant="primary" size="lg">
                  {module.title}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {module.name}
              </h1>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {module.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kayit">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    {module.cta}
                  </Button>
                </Link>
                <Link href="/iletisim">
                  <Button variant="outline" size="lg">
                    Demo Talep Et
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 rounded-3xl p-8">
              <h3 className="font-bold text-neutral-900 mb-6 text-xl">
                Hedef Kitle
              </h3>
              <ul className="space-y-3 mb-8">
                {module.targetAudience.map((audience) => (
                  <li key={audience} className="flex items-center text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    {audience}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-neutral-900 mb-6 text-xl">
                Temel Avantajlar
              </h3>
              <ul className="space-y-3">
                {module.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-neutral-700">
                    <Star className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Prerequisites & Quality Info Section */}
      {(module.prerequisites || module.evaluationMethods || module.duration || module.certifications) && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Katilim Kosullari ve Kalite Bilgileri
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Hizmet kalitemizi garanti altina alan standartlar ve gereksinimler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {module.prerequisites && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-primary-600" />
                      <h3 className="font-bold text-neutral-900">On Kosullar</h3>
                    </div>
                    <ul className="space-y-2">
                      {module.prerequisites.map((prereq) => (
                        <li key={prereq} className="flex items-start text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {module.evaluationMethods && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <FileCheck className="w-5 h-5 text-secondary-600" />
                      <h3 className="font-bold text-neutral-900">Degerlendirme</h3>
                    </div>
                    <ul className="space-y-2">
                      {module.evaluationMethods.map((method) => (
                        <li key={method} className="flex items-start text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mr-2 mt-2 flex-shrink-0" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {module.duration && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-accent-600" />
                      <h3 className="font-bold text-neutral-900">Sure</h3>
                    </div>
                    <p className="text-neutral-700">{module.duration}</p>
                    <p className="text-sm text-neutral-500 mt-2">
                      Testler dilediginiz zaman durdurulabilir ve kalinan yerden devam edilebilir.
                    </p>
                  </CardContent>
                </Card>
              )}

              {module.certifications && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-neutral-900">Sertifikasyonlar</h3>
                    </div>
                    <ul className="space-y-2">
                      {module.certifications.map((cert) => (
                        <li key={cert} className="flex items-start text-sm text-neutral-700">
                          <Badge variant="primary" size="sm" className="mr-2">{cert}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="mt-8 text-center">
              <Link href="/kalite-politikasi" className="text-primary-600 hover:text-primary-700 font-medium">
                Kalite Politikamiz hakkinda daha fazla bilgi alin →
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Ozellikler
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {module.name} ile neler yapabilirsiniz?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {module.features.map((feature) => (
              <Card key={feature.title} variant="elevated" hover>
                <CardContent>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Fiyatlandirma
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Ihtiyaciniza uygun paketi secin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {module.pricing.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? "gradient" : "bordered"}
                hover
                className={plan.highlighted ? "scale-105" : ""}
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
                      {plan.price === 0 ? "Ucretsiz" : formatPrice(plan.price)}
                    </span>
                    {plan.period && (
                      <span
                        className={
                          plan.highlighted ? "text-white/80" : "text-neutral-600"
                        }
                      >
                        /{plan.period}
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
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start text-sm ${
                          plan.highlighted ? "text-white/90" : "text-neutral-700"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? "text-white" : "text-primary-500"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlighted ? "white" : "primary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hemen Baslayin
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Ucretsiz temel degerlendirme ile baslayin, kendinizi kesfetmeye
              bugunden adim atin.
            </p>
            <Link href="/kayit">
              <Button variant="white" size="lg">
                {module.cta}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
