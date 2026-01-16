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
  title: "Kalite Politikası ve Taahhütlerimiz",
  description:
    "Reflektif kalite politikası, eğitim standartları, sertifikasyonlar ve sürekli iyileştirme taahhütlerimiz. MYK, İŞKUR ve uluslararası standartlara uyum.",
};

const qualityIndicators = [
  {
    title: "Memnuniyet Oranı",
    value: "%94",
    description: "Kullanıcı memnuniyet anketleri sonucu",
  },
  {
    title: "Tamamlama Oranı",
    value: "%87",
    description: "Test ve değerlendirme tamamlama oranı",
  },
  {
    title: "Eşleştirme Başarısı",
    value: "%91",
    description: "Meslek önerisi-tercih uyum oranı",
  },
  {
    title: "Destek Cevap Süresi",
    value: "<2 saat",
    description: "Ortalama müşteri destek yanıt süresi",
  },
];

const certifications = [
  {
    name: "KVKK Uyumlu",
    description: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyumu",
    icon: Shield,
  },
  {
    name: "MYK Standartları",
    description: "Mesleki Yeterlilik Kurumu meslek standartlarıyla uyumlu",
    icon: Award,
  },
  {
    name: "İŞKUR Onaylı",
    description: "İş ve İşçi Bulma Kurumu mesleki rehabilitasyon standartları",
    icon: Building2,
  },
  {
    name: "TYÇ Uyumlu",
    description: "Türkiye Yeterlilikler Çerçevesi seviye tanımlamaları",
    icon: GraduationCap,
  },
  {
    name: "ISO 27001",
    description: "Bilgi güvenliği yönetim sistemi standartları (hedeflenen)",
    icon: FileCheck,
  },
  {
    name: "Erişilebilirlik",
    description: "WCAG 2.1 AA seviyesi web erişilebilirlik standartları",
    icon: Accessibility,
  },
];

const commitments = [
  {
    icon: Target,
    title: "Şeffaf Bilgilendirme",
    description:
      "Tüm hizmetlerimiz, fiyatlarımız, ön koşullarımız ve değerlendirme yöntemlerimiz hakkında açık ve anlaşılır bilgi sağlıyoruz.",
  },
  {
    icon: Users,
    title: "Bireysel İhtiyaçlara Uyum",
    description:
      "Her bireyin farklı olduğunu kabul ediyor, engelli bireyler dahil herkes için erişilebilir ve uyarlanabilir hizmetler sunuyoruz.",
  },
  {
    icon: BookOpen,
    title: "Bilimsel Metodoloji",
    description:
      "Uluslararası geçerliliği kanıtlanmış psikometrik yöntemler (Holland RIASEC, Big Five, MBTI) kullanıyoruz.",
  },
  {
    icon: TrendingUp,
    title: "Sürekli İyileştirme",
    description:
      "Kullanıcı geri bildirimleri, şikayet analizleri ve performans verileriyle hizmetlerimizi sürekli geliştiriyoruz.",
  },
  {
    icon: HeartHandshake,
    title: "Etik ve Adil Değerlendirme",
    description:
      "Irk, cinsiyet, yaş, engellilik durumu ayrımcılığı yapmadan objektif ve etik değerlendirme yapıyoruz.",
  },
  {
    icon: Clock,
    title: "Zamanında Hizmet",
    description:
      "Test sonuçları 24 saat içinde, detaylı raporlar 48 saat içinde iletiliyor. Müşteri destek taleplerine 2 saat içinde yanıt veriyoruz.",
  },
];

const prerequisites = [
  {
    module: "Öğrenci Modülü",
    requirements: [
      "14-18 yaş arası olmak",
      "Türkçe okuma yazma becerisi",
      "İnternet erişimi ve temel bilgisayar kullanımı",
      "Veli/vasi izni (18 yaş altı için)",
    ],
  },
  {
    module: "Üniversite Modülü",
    requirements: [
      "Aktif üniversite öğrencisi olmak",
      "Türkçe veya İngilizce yeterlilik",
      "E-posta adresi ve telefon numarası",
      "İnternet erişimi",
    ],
  },
  {
    module: "Kariyer Modülü",
    requirements: [
      "18 yaş ve üzeri olmak",
      "En az lise mezunu olmak",
      "İş deneyimi (tercih edilen)",
      "Kariyer değişikliği motivasyonu",
    ],
  },
  {
    module: "İK Modülü",
    requirements: [
      "Kurumsal e-posta adresi",
      "Yetkili kişi onayı",
      "Minimum 5 çalışan",
      "Sözleşme imzalama yetkisi",
    ],
  },
  {
    module: "Kurum Modülü",
    requirements: [
      "Eğitim kurumu yetkili belgesi",
      "MEB veya YÖK onaylı kurum olmak",
      "IT altyapısı (LMS entegrasyonu için)",
      "Veri işleme sözleşmesi",
    ],
  },
  {
    module: "Engelsiz Modülü",
    requirements: [
      "Engelli sağlık kurulu raporu (bireysel ücretsiz erişim için)",
      "18 yaş ve üzeri (veya veli izni)",
      "Erişilebilir cihaz (ekran okuyucu desteği mevcut)",
      "İŞKUR kaydı (iş eşleştirme için tercih edilen)",
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
              Kalite Taahhütlerimiz
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Kalite Politikamız ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Standartlarımız
              </span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Reflektif olarak, ulusal ve uluslararası kalite standartlarına
              uygun, şeffaf, etik ve sürekli gelişen hizmetler sunmayı
              taahhüt ediyoruz. Bu sayfa, kalite politikamız, sertifikasyonlarımız,
              ön koşullarımız ve şikayet yönetimi süreçlerimiz hakkında
              detaylı bilgi içermektedir.
            </p>
          </div>
        </Container>
      </section>

      {/* Quality Indicators */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kalite Göstergeleri
            </h2>
            <p className="text-white/80">
              Son 12 aylık performans verilerimiz
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
              Ulusal ve uluslararası kalite standartlarına uyumluluğumuz
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
              Kalite Taahhütlerimiz
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hizmet kalitemizi garanti altına alan temel ilkelerimiz
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
              Ön Koşullar ve Katılım Şartları
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Her modül için gerekli ön koşullar ve katılım gereksinimleri
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
                Değerlendirme Yöntemleri ve Süreci
              </h2>
              <p className="text-neutral-600">
                Testlerimizin nasıl yapılandırıldığını ve değerlendirildiğini anlayın
              </p>
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    1. Test Öncesi Hazırlık
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 mt-2" />
                      Kullanıcı profili oluşturma ve ön bilgi toplama
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 mt-2" />
                      Açık rızaname ve veri işleme izni (KVKK uyumlu)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 mt-2" />
                      Test süresi, formatı ve beklentiler hakkında bilgilendirme
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    2. Değerlendirme Süreci
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      Psikometrik testler: Holland RIASEC, Big Five, bilişsel yetenek
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      AI destekli analiz ve örüntü tanıma
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      Normatif karşılaştırma (10.000+ kullanıcı veritabanı)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-secondary-500 mr-3 mt-2" />
                      Otomatik tutarlılık ve güvenilirlik kontrolleri
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
                      Anlaşılır dilde yazılmış detaylı rapor (24-48 saat içinde)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      Kişiselleştirilmiş kariyer/gelişim önerileri
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      Premium paketlerde uzman danışmanlığı
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-3 mt-2" />
                      6-12 ay takip ve yeniden değerlendirme imkanı
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
                Şikayet ve Geri Bildirim Yönetimi
              </h2>
              <p className="text-neutral-600">
                Şikayetleriniz ve geri bildirimleriniz bizim için değerlidir
              </p>
            </div>

            <Card variant="bordered" padding="lg" className="mb-8">
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 text-primary-600 mr-2" />
                      Şikayet Süreci
                    </h3>
                    <ol className="space-y-3 text-neutral-700">
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">1</span>
                        <span><strong>Başvuru:</strong> Web sitesi, e-posta veya telefon ile şikayet bildirimi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">2</span>
                        <span><strong>Kayıt:</strong> 2 iş günü içinde şikayet kaydının oluşturulması ve bildirim</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">3</span>
                        <span><strong>İnceleme:</strong> 5 iş günü içinde detaylı inceleme</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">4</span>
                        <span><strong>Çözüm:</strong> 10 iş günü içinde çözüm önerisi veya açıklama</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center mr-3 mt-0.5">5</span>
                        <span><strong>Takip:</strong> Memnuniyet kontrolü ve sürecin kapatılması</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                      <Scale className="w-5 h-5 text-secondary-600 mr-2" />
                      İtiraz Hakkı
                    </h3>
                    <p className="text-neutral-700 mb-4">
                      Çözümden memnun kalmamanız durumunda:
                    </p>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        Üst yönetim değerlendirmesi talep edebilirsiniz
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        Tüketici Hakem Heyeti&apos;ne başvurabilirsiniz
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        KVKK kapsamında veri sorumlusuna başvurabilirsiniz
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-sm text-primary-800">
                        <strong>İletişim:</strong><br />
                        E-posta: sikayet@reflektif.net<br />
                        Telefon: 0507 43 43 253<br />
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
                Sürekli İyileştirme Süreci
              </h2>
              <p className="text-neutral-600">
                Kalite yönetim sistemimizin temel yaklaşımı
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
                    <li>• Kullanıcı memnuniyet anketleri (her test sonrası)</li>
                    <li>• NPS (Net Promoter Score) ölçümü (aylık)</li>
                    <li>• Şikayet ve öneri analizi (haftalık)</li>
                    <li>• Kullanım istatistikleri ve terk oranları</li>
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
                    <li>• Aylık kalite toplantıları</li>
                    <li>• Kök neden analizi (şikayet/sorunlar için)</li>
                    <li>• Benchmark karşılaştırmaları</li>
                    <li>• İyileştirme önceliklerinin belirlenmesi</li>
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
                    <li>• Sprint bazlı iyileştirme çalışmaları (2 haftalık)</li>
                    <li>• Test ve pilot uygulamalar</li>
                    <li>• Personel eğitimleri</li>
                    <li>• Dokümantasyon güncellemeleri</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <FileCheck className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Doğrulama
                  </h3>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    <li>• A/B testleri ile etkinlik ölçümü</li>
                    <li>• Kullanıcı geri bildirimi toplama</li>
                    <li>• KPI takibi ve raporlama</li>
                    <li>• Yıllık iç denetim</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                2024-2025 İyileştirme Hedeflerimiz
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Memnuniyet oranını %96&apos;ya çıkarmak</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">ISO 27001 sertifikasyonu almak</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">MYK resmi ortaklığı kurmak</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Erişilebilirlik WCAG 2.1 AAA seviyesi</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Destek cevap süresini 1 saate düşürmek</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-neutral-700">Yeni 3 dil desteği eklemek</span>
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
                Ekip Yetkinlikleri ve Eğitim
              </h2>
              <p className="text-neutral-600">
                Hizmet kalitemizi garantileyen uzman kadromuz
              </p>
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Danışmanlarımızın Nitelikleri
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Eğitim Gereksinimleri</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• Psikoloji, PDR veya İK alanında lisans derecesi</li>
                        <li>• Kariyer danışmanlığı sertifikası</li>
                        <li>• Minimum 3 yıl saha deneyimi</li>
                        <li>• Psikometrik test uygulama yetkisi</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Sürekli Eğitim</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• Yıllık 40 saat mesleki gelişim eğitimi</li>
                        <li>• Platform kullanım sertifikasyonu (yenileme)</li>
                        <li>• KVKK ve veri güvenliği eğitimi</li>
                        <li>• Etik kurallar ve sürekli gelişim</li>
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
                        <li>• Makine öğrenmesi ve NLP uzmanlığı</li>
                        <li>• Psikometrik veri analizi deneyimi</li>
                        <li>• Model doğrulama ve validasyon</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Güvenlik ve Uyum</h4>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• KVKK ve GDPR uyum uzmanlığı</li>
                        <li>• Siber güvenlik sertifikaları</li>
                        <li>• Veri güvenliği denetimleri</li>
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
              Kalite Taahhütümüzle Tanışın
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Sorularınız mı var? Kalite politikamız hakkında daha fazla bilgi
              almak veya geri bildirimde bulunmak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button variant="white" size="lg">
                  İletişime Geç
                </Button>
              </Link>
              <Link href="/kayit">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Ücretsiz Dene
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
