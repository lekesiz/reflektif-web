import { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  Shield,
  Globe,
} from "lucide-react";
import { Container, Card, CardContent, Badge } from "@/components/ui";
import { Stats } from "@/components/sections";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description:
    "Reflektif hakkinda bilgi edinin. Vizyonumuz, misyonumuz ve degerlerimiz.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Inovasyon",
    description:
      "En son AI teknolojilerini kullanarak kariyer degerlendirme alaninda sureki yenilik yapiyoruz.",
  },
  {
    icon: Shield,
    title: "Guvenilirlik",
    description:
      "Bilimsel metodolojiler ve KVKK uyumlu veri koruma ile guvenilir sonuclar sunuyoruz.",
  },
  {
    icon: Heart,
    title: "Empati",
    description:
      "Her bireyin benzersiz oldugunu biliyor, kisisellestirilmis cozumler sunuyoruz.",
  },
  {
    icon: Globe,
    title: "Erisilebirlik",
    description:
      "Turkiye'nin her yerinden herkese ulasabilecek, erisilebilir bir platform olusturduk.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Fikrin Dogusu",
    description:
      "Fransa'daki Bilan de Competences sisteminden esinlenerek Turkiye'ye uygun bir model tasarlamaya basladik.",
  },
  {
    year: "2025",
    title: "Platform Gelistirme",
    description:
      "AI destekli test motoru, 5 farkli modul ve kapsamli raporlama sistemini gelistirdik.",
  },
  {
    year: "2025",
    title: "Beta Lansman",
    description:
      "Secili universiter ve sirketlerle pilot programlar baslatarak platformu test ettik.",
  },
  {
    year: "2025",
    title: "Resmi Lansman",
    description:
      "reflektif.net olarak tum Turkiye'ye hizmet vermeye basladik.",
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Hakkimizda
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Turkiye&apos;nin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Kariyer Platformu
              </span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Reflektif, bireylerin potansiyellerini kesfetmelerine ve dogru
              kariyer kararları almalarına yardımcı olmak icin kurulmus,
              Turkiye&apos;nin ilk AI destekli yetkinlik degerlendirme platformudur.
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
                  Her bireyin kendini tanimasi, yeteneklerini kesfetmesi ve
                  tutkularıyla uyumlu bir kariyer insaa etmesine yardimci olmak.
                  Modern teknoloji ve bilimsel metodolojileri birlestirerek,
                  herkes icin erisilebilir kariyer rehberligi sunmak.
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
                  Turkiye&apos;de ve bolgemizde kariyer degerlendirme ve meslek
                  eslestirme alaninda lider platform olmak. Yanlis meslek secimi
                  nedeniyle yasanan issizlik ve mutsuzluğu azaltarak, toplumsal
                  refaha katki saglamak.
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
              Degerlerimiz
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
              Yolculugumuz
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Reflektif&apos;in kuruluşundan bugune
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
                bio: "Teknoloji ve egitim sektorlerinde 10+ yil deneyim",
              },
              {
                name: "Dr. Ayse Yilmaz",
                role: "Bilimsel Danismman",
                bio: "Endüstriyel psikoloji uzmani, kariyer degerlendirme araştırmacısı",
              },
              {
                name: "Mehmet Demir",
                role: "CTO",
                bio: "AI/ML uzmani, 8+ yil yazilim gelistirme deneyimi",
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
              Partnerlerimiz
            </h2>
            <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
              Isbirligi yaptigimiz kurumlar
            </p>

            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {[
                "Universite A",
                "Sirket B",
                "Kurum C",
                "Partner D",
                "Isbirligi E",
              ].map((partner) => (
                <div
                  key={partner}
                  className="px-8 py-4 bg-neutral-100 rounded-lg text-neutral-500 font-medium"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
