import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  Quote,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";
import { customers, caseStudies, industries, companyStats } from "@/data/customers";

export const metadata: Metadata = {
  title: "Referanslar ve Başarı Hikayeleri | Reflektif",
  description:
    "500+ kurumsal müşteri, 250.000+ değerlendirme. Reflektif ile başarı hikayelerini ve müşteri referanslarını keşfedin.",
};

const sizeLabels: Record<string, string> = {
  startup: "Startup",
  kucuk: "Küçük İşletme",
  orta: "Orta Ölçekli",
  buyuk: "Büyük Şirket",
  kurumsal: "Kurumsal",
};

export default function ReferanslarPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">
              500+ Mutlu Müşteri
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Güvenilen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                İş Ortağınız
              </span>
            </h1>
            <p className="text-xl text-neutral-600">
              Türkiye&apos;nin önde gelen şirketleri değerlendirme ve işe alım
              süreçlerinde Reflektif&apos;i tercih ediyor.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {companyStats.totalCompanies}
              </div>
              <div className="text-sm text-neutral-600">Kurumsal Müşteri</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {companyStats.totalAssessments}
              </div>
              <div className="text-sm text-neutral-600">Değerlendirme</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {companyStats.totalUsers}
              </div>
              <div className="text-sm text-neutral-600">Aktif Kullanıcı</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {companyStats.averageNPS}
              </div>
              <div className="text-sm text-neutral-600">Memnuniyet</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {companyStats.countries}
              </div>
              <div className="text-sm text-neutral-600">Ülke</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {companyStats.yearsExperience}
              </div>
              <div className="text-sm text-neutral-600">Yıl Deneyim</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Müşterilerimizin Reflektif ile elde ettiği somut sonuçlar
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.id} variant="elevated" className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left Column - Company Info */}
                  <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 text-white">
                    <Badge className="bg-white/20 text-white mb-4">
                      {caseStudy.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{caseStudy.company}</h3>
                    <p className="opacity-90 mb-6">{caseStudy.challenge}</p>
                    {caseStudy.quote && (
                      <div className="border-t border-white/20 pt-6 mt-6">
                        <Quote className="w-8 h-8 opacity-50 mb-4" />
                        <p className="italic opacity-90 mb-4">
                          &quot;{caseStudy.quote.text}&quot;
                        </p>
                        <div>
                          <p className="font-semibold">{caseStudy.quote.author}</p>
                          <p className="text-sm opacity-75">{caseStudy.quote.role}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Results */}
                  <div className="lg:col-span-2 p-8">
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                      Çözüm
                    </h4>
                    <p className="text-neutral-600 mb-8">{caseStudy.solution}</p>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                      Sonuçlar
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {caseStudy.results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-neutral-50 rounded-xl p-4"
                        >
                          <div className="text-3xl font-bold text-primary-600 mb-1">
                            {result.value}
                          </div>
                          <div className="font-medium text-neutral-900 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-neutral-600">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Customers Grid */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Müşterilerimiz
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Her sektörden lider şirketler Reflektif&apos;i tercih ediyor
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {industries.map((industry) => (
              <Badge key={industry} variant="outline" className="cursor-pointer hover:bg-primary-50">
                {industry}
              </Badge>
            ))}
          </div>

          {/* Customer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {customers.map((customer, index) => (
              <Card
                key={index}
                className="p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-neutral-400" />
                </div>
                <h4 className="font-medium text-neutral-900 text-sm mb-1">
                  {customer.name}
                </h4>
                <p className="text-xs text-neutral-500">{customer.industry}</p>
                <Badge variant="outline" size="sm" className="mt-2">
                  {sizeLabels[customer.size]}
                </Badge>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Müşteri Yorumları
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.filter(cs => cs.quote).map((caseStudy) => (
              <Card key={caseStudy.id} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  &quot;{caseStudy.quote?.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                    {caseStudy.quote?.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {caseStudy.quote?.author}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {caseStudy.quote?.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "ISO 27001",
                description: "Bilgi güvenliği sertifikası",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "KVKK Uyumlu",
                description: "Kişisel verilerin korunması",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "7/24 Destek",
                description: "Kesintisiz müşteri hizmeti",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "%99.9 Uptime",
                description: "Güvenilir altyapı",
              },
            ].map((badge, index) => (
              <div key={index} className="p-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {badge.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  {badge.title}
                </h3>
                <p className="text-neutral-600 text-sm">{badge.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siz de Başarı Hikayenizi Yazın
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              500+ şirket gibi siz de Reflektif ile işe alım ve değerlendirme
              süreçlerinizi dönüştürün.
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
