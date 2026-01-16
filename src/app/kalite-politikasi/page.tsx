import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  Award,
  Target,
  Users,
  TrendingUp,
  FileCheck,
  HeartHandshake,
  BookOpen,
  Clock,
  MessageSquare,
  RefreshCw,
  Scale,
  Accessibility,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Container, Card, CardContent, Badge, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kalite Politikasi ve Taahhutlerimiz",
  description:
    "Reflektif kalite politikasi, egitim standartlari, sertifikasyonlar ve surekli iyilestirme taahhutlerimiz. MYK, ISKUR ve uluslararasi standartlara uyum.",
};

const qualityIndicators = [
  {
    title: "Memnuniyet Orani",
    value: "%94",
    description: "Kullanici memnuniyet anketleri sonucu",
  },
  {
    title: "Tamamlama Orani",
    value: "%87",
    description: "Test ve degerlendirme tamamlama orani",
  },
  {
    title: "Eslestirme Basarisi",
    value: "%91",
    description: "Meslek onerisi-tercih uyum orani",
  },
  {
    title: "Destek Cevap Suresi",
    value: "<2 saat",
    description: "Ortalama musteri destek yanit suresi",
  },
];

const certifications = [
  {
    name: "KVKK Uyumlu",
    description: "6698 sayili Kisisel Verilerin Korunmasi Kanunu uyumu",
    icon: Shield,
  },
  {
    name: "MYK Standartlari",
    description: "Mesleki Yeterlilik Kurumu meslek standartlariyla uyumlu",
    icon: Award,
  },
  {
    name: "ISKUR Onayli",
    description: "Is ve Isci Bulma Kurumu mesleki rehabilitasyon standartlari",
    icon: Building2,
  },
  {
    name: "TYC Uyumlu",
    description: "Turkiye Yeterlilikler Cercevesi seviye tanimlamalari",
    icon: GraduationCap,
  },
  {
    name: "ISO 27001",
    description: "Bilgi guvenligi yonetim sistemi standartlari (hedeflenen)",
    icon: FileCheck,
  },
  {
    name: "Erisilebilirlik",
    description: "WCAG 2.1 AA seviyesi web erisilebilirlik standartlari",
    icon: Accessibility,
  },
];

const commitments = [
  {
    icon: Target,
    title: "Seffaf Bilgilendirme",
    description:
      "Tum hizmetlerimiz, fiyatlarimiz, on kosullarimiz ve degerlendirme yontemlerimiz hakkinda acik ve anlasilir bilgi sagliyoruz.",
  },
  {
    icon: Users,
    title: "Bireysel Ihtiyaclara Uyum",
    description:
      "Her bireyin farkli oldugunu kabul ediyor, engelli bireyler dahil herkes icin erisilebilir ve uyarlanabilir hizmetler sunuyoruz.",
  },
  {
    icon: BookOpen,
    title: "Bilimsel Metodoloji",
    description:
      "Uluslararasi gecerliligi kanitlanmis psikometrik yontemler (Holland RIASEC, Big Five, MBTI) kullaniyoruz.",
  },
  {
    icon: TrendingUp,
    title: "Surekli Iyilestirme",
    description:
      "Kullanici geri bildirimleri, sikayet analizleri ve performans verileriyle hizmetlerimizi surekli gelistiriyoruz.",
  },
  {
    icon: HeartHandshake,
    title: "Etik ve Adil Degerlendirme",
    description:
      "Irk, cinsiyet, yas, engellilik durumu ayrimciligi yapmadan objektif ve etik degerlendirme yapiyoruz.",
  },
  {
    icon: Clock,
    title: "Zamaninda Hizmet",
    description:
      "Test sonuclari 24 saat icinde, detayli raporlar 48 saat icinde iletiliyor. Musteri destek taleplerine 2 saat icinde yanit veriyoruz.",
  },
];

const prerequisites = [
  {
    module: "Ogrenci Modulu",
    requirements: [
      "14-18 yas arasi olmak",
      "Turkce okuma yazma becerisi",
      "Internet erisimi ve temel bilgisayar kullanimi",
      "Veli/vasi izni (18 yas alti icin)",
    ],
  },
  {
    module: "Universite Modulu",
    requirements: [
      "Aktif universite ogrencisi olmak",
      "Turkce veya Ingilizce yeterlilik",
      "E-posta adresi ve telefon numarasi",
      "Internet erisimi",
    ],
  },
  {
    module: "Kariyer Modulu",
    requirements: [
      "18 yas ve uzeri olmak",
      "En az lise mezunu olmak",
      "Is deneyimi (tercih edilen)",
      "Kariyer degisikligi motivasyonu",
    ],
  },
  {
    module: "IK Modulu",
    requirements: [
      "Kurumsal e-posta adresi",
      "Yetkili kisi onayi",
      "Minimum 5 calisan",
      "Sozlesme imzalama yetkisi",
    ],
  },
  {
    module: "Kurum Modulu",
    requirements: [
      "Egitim kurumu yetkili belgesi",
      "MEB veya YOK onayli kurum olmak",
      "IT altyapisi (LMS entegrasyonu icin)",
      "Veri isleme sozlesmesi",
    ],
  },
  {
    module: "Engelsiz Modulu",
    requirements: [
      "Engelli saglik kurulu raporu (bireysel ucretsiz erisim icin)",
      "18 yas ve uzeri (veya veli izni)",
      "Erisilebilir cihaz (ekran okuyucu destegi mevcut)",
      "ISKUR kaydı (is eslestirme icin tercih edilen)",
    ],
  },
];

export default function KalitePolitikasiPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Kalite Taahhutlerimiz
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Kalite Politikamiz ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Standartlarimiz
              </span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Reflektif olarak, ulusal ve uluslararasi kalite standartlarina
              uygun, seffaf, etik ve surekli gelisen hizmetler sunmayi
              taahhut ediyoruz. Bu sayfa, kalite politikamiz, sertifikasyonlarimiz,
              on kosullarimiz ve sikayet yonetimi sureclerimiz hakkinda
              detayli bilgi icermektedir.
            </p>
          </div>
        </Container>
      </section>

      {/* Quality Indicators */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kalite Gostergeleri
            </h2>
            <p className="text-white/80">
              Son 12 aylik performans verilerimiz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityIndicators.map((indicator) => (
              <Card key={indicator.title} variant="elevated">
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {indicator.value}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    {indicator.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Sertifikasyonlar ve Standartlar
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Ulusal ve uluslararasi kalite standartlarina uyumlulugumuz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} variant="bordered" hover>
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <cert.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-neutral-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Kalite Taahhutlerimiz
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hizmet kalitemizi garanti altina alan temel ilkelerimiz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment) => (
              <Card key={commitment.title} variant="elevated">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                    <commitment.icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Prerequisites */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              On Kosullar ve Katilim Sartlari
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Her modul icin gerekli on kosullar ve katilim gereksinimleri
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prerequisites.map((prereq) => (
              <Card key={prereq.module} variant="bordered">
                <CardContent>
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">
                    {prereq.module}
                  </h3>
                  <ul className="space-y-2">
                    {prereq.requirements.map((req) => (
                      <li key={req} className="flex items-start text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Evaluation Methods */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Degerlendirme Yontemleri ve Sureci
              </h2>
              <p className="text-neutral-600">
                Testlerimizin nasil yapilandirildigini ve degerlendirildigini anlayin
              </p>
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    1. Test Oncesi Hazirlik
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 mt-2" />
                      Kullanici profili olusturma ve on bilgi toplama
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 mt-2" />
                      Acik rizaname ve veri isleme izni (KVKK uyumlu)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 mt-2" />
                      Test suresi, formati ve beklentiler hakkinda bilgilendirme
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    2. Degerlendirme Sureci
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      Psikometrik testler: Holland RIASEC, Big Five, bilisssel yetenek
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      AI destekli analiz ve oruntu tanima
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      Normatif karsilastirma (10.000+ kullanici veritabani)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      Otomatik tutarlilik ve guvenirllik kontrolleri
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    3. Raporlama ve Takip
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      Anlasilir dilde yazilmis detayli rapor (24-48 saat icinde)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      Kisisellestirilmis kariyer/gelisim onerileri
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      Premium paketlerde uzman danismanligi
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      6-12 ay takip ve yeniden degerlendirme imkani
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Complaint Handling */}
      <section className="py-16" id="sikayet-yonetimi">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Sikayet ve Geri Bildirim Yonetimi
              </h2>
              <p className="text-neutral-600">
                Sikayetleriniz ve geri bildirimleriniz bizim icin degerlidir
              </p>
            </div>

            <Card variant="bordered" padding="lg" className="mb-8">
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 text-primary-600 mr-2" />
                      Sikayet Sureci
                    </h3>
                    <ol className="space-y-3 text-neutral-700">
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">1</span>
                        <span><strong>Basvuru:</strong> Web sitesi, e-posta veya telefon ile sikayet bildirimi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">2</span>
                        <span><strong>Kayit:</strong> 2 is gunu icinde sikayet kaydinin olusturulmasi ve bildirim</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">3</span>
                        <span><strong>Inceleme:</strong> 5 is gunu icinde detayli inceleme</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">4</span>
                        <span><strong>Cozum:</strong> 10 is gunu icinde cozum onerisi veya aciklama</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">5</span>
                        <span><strong>Takip:</strong> Memnuniyet kontrolu ve surecin kapatilmasi</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                      <Scale className="w-5 h-5 text-secondary-600 mr-2" />
                      Itiraz Hakki
                    </h3>
                    <p className="text-neutral-700 mb-4">
                      Cozumden memnun kalmamaniz durumunda:
                    </p>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        Ust yonetim degerlendirmesi talep edebilirsiniz
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        Tuketici Hakem Heyeti'ne basvurabilirsiniz
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        KVKK kapsaminda veri sorumlusuna basvurabilirsiniz
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-sm text-primary-800">
                        <strong>Iletisim:</strong><br />
                        E-posta: sikayet@reflektif.net<br />
                        Telefon: 0850 XXX XX XX<br />
                        Form: reflektif.net/iletisim
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16 bg-neutral-50" id="surekli-iyilestirme">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Surekli Iyilestirme Sureci
              </h2>
              <p className="text-neutral-600">
                Kalite yonetim sistemimizin temel yaklasimi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="bordered">
                <CardContent>
                  <RefreshCw className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Veri Toplama
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Kullanici memnuniyet anketleri (her test sonrasi)</li>
                    <li>• NPS (Net Promoter Score) olcumu (aylik)</li>
                    <li>• Sikayet ve oneri analizi (haftalik)</li>
                    <li>• Kullanim istatistikleri ve terk oranlari</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <Target className="w-8 h-8 text-secondary-600 mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Analiz ve Planlama
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Aylik kalite toplantilari</li>
                    <li>• Kok neden analizi (sikayet/sorunlar icin)</li>
                    <li>• Benchmark karsilastirmalari</li>
                    <li>• Iyilestirme onceliklerinin belirlenmesi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <TrendingUp className="w-8 h-8 text-accent-600 mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Uygulama
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• Sprint bazli iyilestirme calismalari (2 haftalik)</li>
                    <li>• Test ve pilot uygulamalar</li>
                    <li>• Personel egitimleri</li>
                    <li>• Dokumantasyon guncellemeleri</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <FileCheck className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Dogrulama
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• A/B testleri ile etkinlik olcumu</li>
                    <li>• Kullanici geri bildirimi toplama</li>
                    <li>• KPI takibi ve raporlama</li>
                    <li>• Yillik ic denetim</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                2024-2025 Iyilestirme Hedeflerimiz
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Memnuniyet oranini %96'ya cikarmak</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">ISO 27001 sertifikasyonu almak</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">MYK resmi ortakligi kurmak</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Erisilebilirlik WCAG 2.1 AAA seviyesi</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Destek cevap suresini 1 saate dusurmek</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Yeni 3 dil destegi eklemek</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Qualifications */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Ekip Yetkinlikleri ve Egitim
              </h2>
              <p className="text-neutral-600">
                Hizmet kalitemizi garantileyen uzman kadromuz
              </p>
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Danismanlarimizin Nitelikleri
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Egitim Gereksinimleri</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• Psikoloji, PDR veya IK alaninda lisans derecesi</li>
                        <li>• Kariyer danismanligi sertifikasi</li>
                        <li>• Minimum 3 yil saha deneyimi</li>
                        <li>• Psikometrik test uygulama yetkisi</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Surekli Egitim</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• Yillik 40 saat mesleki gelisim egitimi</li>
                        <li>• Platform kullanim sertifikasyonu (yenileme)</li>
                        <li>• KVKK ve veri guvenligi egitimi</li>
                        <li>• Etik kurallar ve surekli gelisim</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Teknik Ekip Yetkinlikleri
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">AI ve Veri Bilimi</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• Makine ogrenmesi ve NLP uzmanligi</li>
                        <li>• Psikometrik veri analizi deneyimi</li>
                        <li>• Model dogrulama ve validasyon</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Guvenlik ve Uyum</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• KVKK ve GDPR uyum uzmanligi</li>
                        <li>• Siber guvenlik sertifikalari</li>
                        <li>• Veri guvenligi denetimleri</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kalite Taahhutumuzle Tanisın
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Sorulariniz mi var? Kalite politikamiz hakkinda daha fazla bilgi
              almak veya geri bildirimde bulunmak icin bizimle iletisime gecin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button variant="white" size="lg">
                  Iletisime Gec
                </Button>
              </Link>
              <Link href="/kayit">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Ucretsiz Dene
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
