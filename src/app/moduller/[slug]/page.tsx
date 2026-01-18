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
  Sparkles,
  CircleDot,
  Shield,
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
  return modules.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const moduleData = getModuleBySlug(slug);

  if (!moduleData) {
    return {
      title: "Modul Bulunamadi",
    };
  }

  return {
    title: moduleData.name,
    description: moduleData.longDescription,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const moduleData = getModuleBySlug(slug);

  if (!moduleData) {
    notFound();
  }

  const Icon = moduleIcons[moduleData.icon];

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
                  {moduleData.title}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                {moduleData.name}
              </h1>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {moduleData.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kayit">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    {moduleData.cta}
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
                {moduleData.targetAudience.map((audience) => (
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
                {moduleData.benefits.map((benefit) => (
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

      {/* Highlights Section */}
      {moduleData.highlights && moduleData.highlights.length > 0 && (
        <section className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600">
          <Container>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Program Avantajlari
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {moduleData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <Sparkles className="w-5 h-5 text-accent-300 mr-2" />
                  <span className="text-white font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Program Phases Section */}
      {moduleData.programPhases && moduleData.programPhases.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="text-center mb-12">
              <Badge variant="accent" size="lg" className="mb-4">
                1 Yillik Program
              </Badge>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Program Asamalari
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Kariyer gecisinizin her asamasinda yaninizdayiz
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />

              <div className="space-y-12">
                {moduleData.programPhases.map((phase, index) => {
                  const isEven = index % 2 === 0;
                  const phaseColors = [
                    "bg-primary-500",
                    "bg-secondary-500",
                    "bg-accent-500",
                    "bg-green-500",
                  ];

                  return (
                    <div
                      key={phase.phase}
                      className={`relative flex flex-col lg:flex-row items-center ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Phase Card */}
                      <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                        <Card variant="elevated" className="relative overflow-hidden">
                          <div className={`absolute top-0 left-0 right-0 h-1 ${phaseColors[index % 4]}`} />
                          <CardContent>
                            <div className={`flex items-center gap-3 mb-4 ${isEven ? "lg:justify-end" : ""}`}>
                              <Badge variant="primary" size="sm">
                                Asama {phase.phase}
                              </Badge>
                              <Badge variant="secondary" size="sm">
                                {phase.duration}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                              {phase.title}
                            </h3>
                            <p className="text-neutral-600 mb-4">
                              {phase.description}
                            </p>
                            <ul className={`space-y-2 ${isEven ? "lg:text-right" : ""}`}>
                              {phase.activities.map((activity, actIndex) => (
                                <li
                                  key={actIndex}
                                  className={`flex items-start text-sm text-neutral-700 ${
                                    isEven ? "lg:flex-row-reverse" : ""
                                  }`}
                                >
                                  <CircleDot className={`w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0 ${
                                    isEven ? "lg:ml-2" : "mr-2"
                                  }`} />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-500 items-center justify-center z-10">
                        <span className="text-lg font-bold text-primary-600">{phase.phase}</span>
                      </div>

                      {/* Mobile Phase Number */}
                      <div className="lg:hidden flex w-10 h-10 rounded-full bg-primary-500 items-center justify-center mb-4">
                        <span className="text-lg font-bold text-white">{phase.phase}</span>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden lg:block w-5/12" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ISKUR Info Box */}
            <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    ISKUR Issizlik Sigortasi Entegrasyonu
                  </h3>
                  <p className="text-neutral-700">
                    Program suresince ISKUR issizlik maasiniz kesilmeden devam eder.
                    4447 sayili Issizlik Sigortasi Kanunu kapsaminda, aktif isgucu
                    programlarina katilan bireyler issizlik odeneklerini almaya devam eder.
                    Boylece gelir kaygisi olmadan kariyer gecisinize odaklanabilirsiniz.
                  </p>
                </div>
                <Link href="/iletisim" className="flex-shrink-0">
                  <Button variant="primary">
                    ISKUR Uygunluk Kontrolu
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Prerequisites & Quality Info Section */}
      {(moduleData.prerequisites || moduleData.evaluationMethods || moduleData.duration || moduleData.certifications) && (
        <section className="py-16 bg-white">
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
              {moduleData.prerequisites && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-primary-600" />
                      <h3 className="font-bold text-neutral-900">On Kosullar</h3>
                    </div>
                    <ul className="space-y-2">
                      {moduleData.prerequisites.map((prereq) => (
                        <li key={prereq} className="flex items-start text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {moduleData.evaluationMethods && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <FileCheck className="w-5 h-5 text-secondary-600" />
                      <h3 className="font-bold text-neutral-900">Degerlendirme</h3>
                    </div>
                    <ul className="space-y-2">
                      {moduleData.evaluationMethods.map((method) => (
                        <li key={method} className="flex items-start text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mr-2 mt-2 flex-shrink-0" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {moduleData.duration && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-accent-600" />
                      <h3 className="font-bold text-neutral-900">Sure</h3>
                    </div>
                    <p className="text-neutral-700">{moduleData.duration}</p>
                    <p className="text-sm text-neutral-500 mt-2">
                      Testler dilediginiz zaman durdurulabilir ve kalinan yerden devam edilebilir.
                    </p>
                  </CardContent>
                </Card>
              )}

              {moduleData.certifications && (
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-neutral-900">Sertifikasyonlar</h3>
                    </div>
                    <ul className="space-y-2">
                      {moduleData.certifications.map((cert) => (
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
              {moduleData.name} ile neler yapabilirsiniz?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moduleData.features.map((feature) => (
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
            {moduleData.pricing.map((plan) => (
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
                      {plan.price === 0 ? "Ücretsiz" : formatPrice(plan.price)}
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
                {moduleData.cta}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
