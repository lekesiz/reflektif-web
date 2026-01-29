import { PageHeader } from "@/components/PageHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { CheckCircle, X, Zap, Target, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const KarsilastirmaPage = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Hızlı ve Pratik",
      description: "15 dakikada temel değerlendirme, 2-3 saatte detaylı analiz",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Bilimsel ve Kapsamlı",
      description: "Big Five, Holland ve Yetkinlik modellerini birleştirir",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "AI Destekli",
      description: "Yapay zeka ile kişiselleştirilmiş öneriler ve analizler",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Yerel ve Global",
      description: "Türkiye norm grubu + uluslararası standartlar",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Temel Test Süresi",
      reflektif: "15 dakika",
      others: "10-15 dk (PİT) / 24 saat (Bilan)",
      advantage: true
    },
    {
      feature: "Bilimsel Model",
      reflektif: "Big Five + Holland + Yetkinlik",
      others: "Tek model veya özel model",
      advantage: true
    },
    {
      feature: "AI Destekli Analiz",
      reflektif: "Evet",
      others: "Hayır (çoğu)",
      advantage: true
    },
    {
      feature: "Türkiye Norm Grubu",
      reflektif: "50.000+ kullanıcı",
      others: "Sınırlı veya yok",
      advantage: true
    },
    {
      feature: "Rapor Sayısı",
      reflektif: "15+ rapor türü",
      others: "1-11 rapor",
      advantage: true
    },
    {
      feature: "Danışman Desteği",
      reflektif: "Premium pakette",
      others: "Dahil (Bilan) / Yok (PİT)",
      advantage: false
    }
  ];

  return (
    <>
      <PageHeader
        title="Reflektif vs. Diğerleri: Neden Farklıyız?"
        description="Türkiye'de ve dünyada birçok yetenek değerlendirme aracı bulunuyor. Reflektif'in, Bilan de Compétences'ın yapılandırılmış sürecini, PİT'in pratikliğini ve Big Five'ın bilimsel derinliğini nasıl birleştirdiğini keşfedin."
      />

      {/* Hero Image */}
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-purple-50">
          <Image
            src="/images/pages/karsilastirma-hero.webp"
            alt="Reflektif vs Diğerleri"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </section>

      {/* Advantages */}
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reflektif'in Avantajları</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Reflektif, farklı sistemlerin en iyi özelliklerini birleştirerek benzersiz bir değer sunar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="bg-white border-2 border-neutral-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-neutral-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="bg-gradient-to-br from-primary-50 to-purple-50 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hızlı Karşılaştırma</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Reflektif'in diğer sistemlerle karşılaştırmasında öne çıkan özellikleri
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {comparisonFeatures.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-4 items-center">
                  <div className="font-semibold text-neutral-900">{item.feature}</div>
                  <div className="flex items-center gap-2">
                    {item.advantage ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-primary-600 font-medium">{item.reflektif}</span>
                  </div>
                  <div className="text-neutral-600 text-sm">{item.others}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="container mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Detaylı Sistem Karşılaştırması</h2>
        <div className="overflow-x-auto shadow-xl rounded-2xl">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary-600 to-purple-600">
                <TableHead className="text-white font-bold">Kriter</TableHead>
                <TableHead className="text-white font-bold">Reflektif (Hibrit Model)</TableHead>
                <TableHead className="text-white font-bold">Bilan de Compétences (Fransa)</TableHead>
                <TableHead className="text-white font-bold">PİT (Türkiye)</TableHead>
                <TableHead className="text-white font-bold">Global Modeller (Big Five, DISC)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-primary-50 transition-colors">
                <TableCell className="font-medium">Temel Amaç</TableCell>
                <TableCell className="text-primary-600 font-semibold">Bütünsel Kariyer Gelişimi ve Yetenek Yönetimi</TableCell>
                <TableCell>Kariyer yolu planlama, mesleki proje oluşturma</TableCell>
                <TableCell>İşe alım, yetenek yönetimi, pozisyon uyumu</TableCell>
                <TableCell>Bireysel farkındalık, takım dinamikleri</TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary-50 transition-colors">
                <TableCell className="font-medium">Metodoloji</TableCell>
                <TableCell className="text-primary-600 font-semibold">3 Aşamalı Hibrit Süreç (Online Testler + Danışmanlık)</TableCell>
                <TableCell>Danışman liderliğinde 3 aşamalı süreç (24 saate kadar)</TableCell>
                <TableCell>Standartlaştırılmış online test (10-15 dk)</TableCell>
                <TableCell>Genellikle online testler</TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary-50 transition-colors">
                <TableCell className="font-medium">Teorik Temel</TableCell>
                <TableCell className="text-primary-600 font-semibold">Big Five + Holland (RIASEC) + Yetkinlik Modelleri</TableCell>
                <TableCell>Fransa İş Kanunu ile düzenlenmiş yasal çerçeve</TableCell>
                <TableCell>Şirkete özgü model (Kişilik + Değerler)</TableCell>
                <TableCell>Bilimsel modeller (Big Five) veya davranışsal teoriler (DISC)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary-50 transition-colors">
                <TableCell className="font-medium">Çıktılar</TableCell>
                <TableCell className="text-primary-600 font-semibold">15+ Rapor, Kişisel Eylem Planı, Gelişim Yol Haritası</TableCell>
                <TableCell>Sentez raporu ve kişisel eylem planı</TableCell>
                <TableCell>11 farklı rapor türü</TableCell>
                <TableCell>Kişilik profili, gelişim önerileri</TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary-50 transition-colors">
                <TableCell className="font-medium">Güçlü Yönleri</TableCell>
                <TableCell className="text-primary-600 font-semibold">Kapsamlı, Bilimsel, Pratik, Yerel ve Global</TableCell>
                <TableCell>Yapılandırılmış, yasal güvence, kişiye özel</TableCell>
                <TableCell>Hızlı, pratik, yerelleştirilmiş</TableCell>
                <TableCell>Bilimsel geçerlilik (Big Five), pratiklik (DISC)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-primary-50 transition-colors">
                <TableCell className="font-medium">Zayıf Yönleri</TableCell>
                <TableCell className="text-primary-600 font-semibold">Temel paket danışmanlık içermez</TableCell>
                <TableCell>Zaman alıcı, maliyetli</TableCell>
                <TableCell>Bilimsel temelinin derinliği daha az şeffaf</TableCell>
                <TableCell>Tek başına kullanıldığında eksik kalabilir</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-8 py-16">
        <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reflektif Farkını Deneyimleyin
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ücretsiz temel testi yaparak başlayın
          </p>
          <a
            href="/kayit"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
          >
            Ücretsiz Başla
          </a>
        </div>
      </section>
    </>
  );
};

export default KarsilastirmaPage;
