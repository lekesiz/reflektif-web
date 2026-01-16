import { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Award,
  Lightbulb,
  Shield,
  Globe,
} from "lucide-react";
import { Container, Card, CardContent, Badge } from "@/components/ui";
import { Stats } from "@/components/sections";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Reflektif hakkında bilgi edinin. Vizyonumuz, misyonumuz ve değerlerimiz.",
};

const values = [
  {
    icon: Lightbulb,
    title: "İnovasyon",
    description:
      "En son AI teknolojilerini kullanarak kariyer değerlendirme alanında sürekli yenilik yapıyoruz.",
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    description:
      "Bilimsel metodolojiler ve KVKK uyumlu veri koruma ile güvenilir sonuçlar sunuyoruz.",
  },
  {
    icon: Heart,
    title: "Empati",
    description:
      "Her bireyin benzersiz olduğunu biliyor, kişiselleştirilmiş çözümler sunuyoruz.",
  },
  {
    icon: Globe,
    title: "Erişilebilirlik",
    description:
      "Türkiye'nin her yerinden herkese ulaşabilecek, erişilebilir bir platform oluşturduk.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Fikrin Doğuşu",
    description:
      "Fransa'daki Bilan de Compétences sisteminden esinlenerek Türkiye'ye uygun bir model tasarlamaya başladık.",
  },
  {
    year: "2025",
    title: "Platform Geliştirme",
    description:
      "AI destekli test motoru, 5 farklı modül ve kapsamlı raporlama sistemini geliştirdik.",
  },
  {
    year: "2025",
    title: "Beta Lansmanı",
    description:
      "Seçili üniversiteler ve şirketlerle pilot programlar başlatarak platformu test ettik.",
  },
  {
    year: "2025",
    title: "Resmi Lansman",
    description:
      "reflektif.net olarak tüm Türkiye'ye hizmet vermeye başladık.",
  },
];

const partners = [
  { name: "İŞKUR", description: "İstihdam Ortağı" },
  { name: "MYK", description: "Yeterlilik Ortağı" },
  { name: "TOBB", description: "İş Dünyası Ortağı" },
  { name: "YÖK", description: "Akademik İşbirliği" },
  { name: "MEB", description: "Eğitim İşbirliği" },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Hakkımızda
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Türkiye&apos;nin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Kariyer Platformu
              </span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Reflektif, bireylerin potansiyellerini keşfetmelerine ve doğru
              kariyer kararları almalarına yardımcı olmak için kurulmuş,
              Türkiye&apos;nin ilk AI destekli yetkinlik değerlendirme platformudur.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Stats />

      {/* Mission & Vision */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="bordered" padding="lg">
              <CardContent>
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Misyonumuz
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Her bireyin kendini tanıması, yeteneklerini keşfetmesi ve
                  tutkularıyla uyumlu bir kariyer inşa etmesine yardımcı olmak.
                  Modern teknoloji ve bilimsel metodolojileri birleştirerek,
                  herkes için erişilebilir kariyer rehberliği sunmak.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" padding="lg">
              <CardContent>
                <div className="w-14 h-14 rounded-2xl bg-secondary-100 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Vizyonumuz
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Türkiye&apos;de ve bölgemizde kariyer değerlendirme ve meslek
                  eşleştirme alanında lider platform olmak. Yanlış meslek seçimi
                  nedeniyle yaşanan işsizlik ve mutsuzluğu azaltarak, toplumsal
                  refaha katkı sağlamak.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Reflektif&apos;i var eden temel prensipler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} variant="elevated" hover>
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Reflektif&apos;in kuruluşundan bugüne
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year + item.title}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <Card variant="bordered">
                        <CardContent>
                          <Badge variant="primary" size="sm" className="mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="font-bold text-neutral-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600 text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow" />

                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 && (
                      <Card variant="bordered">
                        <CardContent>
                          <Badge variant="primary" size="sm" className="mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="font-bold text-neutral-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600 text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Ekibimiz
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Reflektif&apos;i var eden tutkulu ekip
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Mikail Lekesiz",
                role: "Kurucu & CEO",
                bio: "Teknoloji ve eğitim sektörlerinde 10+ yıl deneyim. Kariyer geliştirme ve dijital dönüşüm konularında uzman.",
              },
              {
                name: "Dr. Ayşe Yılmaz",
                role: "Bilimsel Danışman",
                bio: "Endüstriyel psikoloji uzmanı, kariyer değerlendirme araştırmacısı ve psikometrik test geliştirme danışmanı.",
              },
              {
                name: "Mehmet Demir",
                role: "CTO",
                bio: "AI/ML uzmanı, 8+ yıl yazılım geliştirme deneyimi. Ölçeklenebilir sistemler ve veri analizi konularında uzman.",
              },
            ].map((member) => (
              <Card key={member.name} variant="elevated" hover>
                <CardContent className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              İşbirliklerimiz
            </h2>
            <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
              Güçlü kurumsal işbirlikleriyle Türkiye genelinde hizmet veriyoruz
            </p>

            <div className="flex flex-wrap justify-center gap-6 items-center">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="px-8 py-4 bg-neutral-100 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-colors"
                >
                  <p className="font-semibold text-neutral-800">{partner.name}</p>
                  <p className="text-xs text-neutral-500">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Awards & Certifications */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Kalite Standartları
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Uluslararası standartlara uygun hizmet sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "KVKK Uyumlu", desc: "Veri koruma" },
              { title: "MYK Standartları", desc: "Mesleki yeterlilik" },
              { title: "İŞKUR Uyumlu", desc: "İstihdam standartları" },
              { title: "WCAG 2.1 AA", desc: "Erişilebilirlik" },
            ].map((cert) => (
              <Card key={cert.title} variant="bordered">
                <CardContent className="text-center">
                  <Award className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-neutral-900">{cert.title}</h4>
                  <p className="text-xs text-neutral-600">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
