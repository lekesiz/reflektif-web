import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Database, UserCheck, Bell, Mail } from "lucide-react";
import { Container, Card, CardContent, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Reflektif gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi.",
};

const sections = [
  {
    id: "giris",
    title: "1. Giriş",
    icon: Shield,
    content: `Reflektif Teknoloji A.Ş. ("Reflektif", "biz", "bizim") olarak, gizliliğinize ve kişisel verilerinizin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, reflektif.net web sitesi ve mobil uygulamalarımız aracılığıyla toplanan kişisel verilerin nasıl işlendiğini, korunduğunu ve haklarınızı açıklamaktadır.

Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), ilgili yönetmelikler ve Kişisel Verileri Koruma Kurumu kararları doğrultusunda hazırlanmıştır.`,
  },
  {
    id: "veri-sorumlusu",
    title: "2. Veri Sorumlusu",
    icon: UserCheck,
    content: `Kişisel verileriniz bakımından veri sorumlusu:

**Reflektif Teknoloji A.Ş.**
Adres: İstanbul, Türkiye
Telefon: 0850 840 50 60
E-posta: kvkk@reflektif.net
KEP Adresi: reflektif@hs01.kep.tr
Web: www.reflektif.net

Veri sorumlusu temsilcisi ve iletişim bilgileri için kvkk@reflektif.net adresinden bize ulaşabilirsiniz.`,
  },
  {
    id: "toplanan-veriler",
    title: "3. Toplanan Kişisel Veriler",
    icon: Database,
    content: `Platformumuz aracılığıyla aşağıdaki kategorilerde kişisel veriler toplanmaktadır:

**Kimlik Bilgileri:**
• Ad, soyad
• T.C. kimlik numarası (kurumsal üyeliklerde)
• Doğum tarihi
• Cinsiyet

**İletişim Bilgileri:**
• E-posta adresi
• Telefon numarası
• Adres bilgileri

**Eğitim ve Kariyer Bilgileri:**
• Eğitim durumu ve mezuniyet bilgileri
• İş deneyimi
• Yetkinlik ve beceriler
• Kariyer hedefleri

**Test ve Değerlendirme Verileri:**
• Kişilik envanteri sonuçları
• Yetenek testi skorları
• İlgi alanı analizleri
• Kariyer eşleştirme verileri

**Teknik Veriler:**
• IP adresi
• Tarayıcı türü ve sürümü
• Cihaz bilgileri
• Çerez verileri
• Oturum bilgileri

**İşlem Verileri:**
• Ödeme bilgileri (kart numarası saklanmaz)
• Fatura bilgileri
• Satın alma geçmişi`,
  },
  {
    id: "isleme-amaci",
    title: "4. Veri İşleme Amaçları",
    icon: Eye,
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

**Hizmet Sunumu:**
• Yetkinlik değerlendirme testlerinin uygulanması
• Kişiselleştirilmiş kariyer önerilerinin sunulması
• Raporların hazırlanması ve iletilmesi
• Eğitim ve staj programlarının yönetilmesi

**Sözleşme Yükümlülükleri:**
• Üyelik işlemlerinin gerçekleştirilmesi
• Ödeme işlemlerinin tamamlanması
• Müşteri hizmetleri desteği sağlanması

**Yasal Yükümlülükler:**
• Vergi mevzuatı gereği kayıt tutma
• Yasal taleplere yanıt verme
• Denetim ve raporlama yükümlülükleri

**Meşru Menfaat:**
• Platform güvenliğinin sağlanması
• Hizmet kalitesinin iyileştirilmesi
• İstatistiksel analizler yapılması

**Açık Rıza ile:**
• Pazarlama iletişimleri gönderilmesi
• Üçüncü taraf hizmetlerle entegrasyon
• Araştırma ve anket çalışmaları`,
  },
  {
    id: "veri-aktarimi",
    title: "5. Veri Aktarımı",
    icon: Lock,
    content: `Kişisel verileriniz, aşağıdaki taraflarla ve amaçlarla paylaşılabilir:

**Yurt İçi Aktarımlar:**
• İş ortakları ve tedarikçiler (hizmet sunumu için)
• Ödeme kuruluşları (ödeme işlemleri için)
• Hukuk müşavirleri (yasal süreçler için)
• Yetkili kamu kurum ve kuruluşları (yasal zorunluluk halinde)

**Yurt Dışı Aktarımlar:**
• Bulut hizmet sağlayıcıları (veri depolama - AB/ABD, yeterli koruma sağlayan ülkeler)
• Analitik hizmet sağlayıcıları (Google Analytics vb.)

Yurt dışı aktarımlarda KVKK'nın 9. maddesi kapsamında gerekli önlemler alınmakta ve yeterli koruma sağlayan ülkelere veya taahhütname imzalanan taraflara aktarım yapılmaktadır.

**Aktarım Yapılmayan Durumlar:**
Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraf pazarlama şirketleriyle paylaşılmaz veya satılmaz.`,
  },
  {
    id: "veri-guvenligi",
    title: "6. Veri Güvenliği",
    icon: Shield,
    content: `Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirler alınmaktadır:

**Teknik Tedbirler:**
• SSL/TLS şifreleme (256-bit)
• Güvenlik duvarı (Firewall) koruması
• Sızma testleri ve güvenlik denetimleri
• Erişim kontrolü ve yetkilendirme sistemleri
• Veri yedekleme ve felaket kurtarma planları
• Güncel antivirüs ve zararlı yazılım koruması

**İdari Tedbirler:**
• Çalışan gizlilik sözleşmeleri
• Düzenli güvenlik eğitimleri
• Veri işleme politikaları ve prosedürleri
• Veri ihlali müdahale planı
• Periyodik iç denetimler

**Veri İhlali Durumunda:**
Olası bir veri ihlali durumunda, KVKK'nın 12. maddesi uyarınca en kısa sürede (72 saat içinde) Kişisel Verileri Koruma Kurulu'na ve ilgili kişilere bildirim yapılacaktır.`,
  },
  {
    id: "saklama-suresi",
    title: "7. Veri Saklama Süreleri",
    icon: Database,
    content: `Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama süreleri dahilinde saklanmaktadır:

| Veri Kategorisi | Saklama Süresi |
|-----------------|----------------|
| Üyelik bilgileri | Üyelik süresince + 10 yıl |
| Test sonuçları | 10 yıl |
| Ödeme kayıtları | 10 yıl (VUK) |
| İletişim kayıtları | 3 yıl |
| Çerez verileri | 2 yıl |
| Log kayıtları | 2 yıl |

Saklama süresi dolan veriler, KVKK'nın 7. maddesi uyarınca silinmekte, yok edilmekte veya anonim hale getirilmektedir.`,
  },
  {
    id: "haklariniz",
    title: "8. Haklarınız",
    icon: UserCheck,
    content: `KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmişse düzeltilmesini isteme
• KVKK'nın 7. maddesindeki şartlar çerçevesinde silinmesini/yok edilmesini isteme
• Düzeltme, silme, yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme
• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
• Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme

**Başvuru Yöntemi:**
Haklarınızı kullanmak için kvkk@reflektif.net adresine e-posta gönderebilir veya KVKK Başvuru Formu'nu doldurarak bize iletebilirsiniz.`,
  },
  {
    id: "cerezler",
    title: "9. Çerezler",
    icon: Eye,
    content: `Web sitemizde çeşitli çerezler kullanılmaktadır. Çerez kullanımımız hakkında detaylı bilgi için Çerez Politikası sayfamızı ziyaret ediniz.

Temel çerez kategorileri:
• **Zorunlu Çerezler:** Site işlevselliği için gerekli
• **Analitik Çerezler:** Site kullanım istatistikleri
• **Pazarlama Çerezleri:** Kişiselleştirilmiş reklamlar

Çerez tercihlerinizi tarayıcı ayarlarınızdan veya sitemizin çerez yönetim panelinden değiştirebilirsiniz.`,
  },
  {
    id: "degisiklikler",
    title: "10. Politika Değişiklikleri",
    icon: Bell,
    content: `Bu Gizlilik Politikası, yasal düzenlemeler veya hizmetlerimizdeki değişiklikler doğrultusunda güncellenebilir.

Önemli değişiklikler yapıldığında:
• Web sitemizde duyuru yayınlanacaktır
• Kayıtlı e-posta adresinize bilgilendirme gönderilecektir
• Değişiklik tarihi bu sayfada güncellenecektir

Platformumuzu kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.`,
  },
  {
    id: "iletisim",
    title: "11. İletişim",
    icon: Mail,
    content: `Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için:

**E-posta:** kvkk@reflektif.net
**Telefon:** 0850 840 50 60
**Adres:** İstanbul, Türkiye
**KEP:** reflektif@hs01.kep.tr

KVKK kapsamındaki başvurularınız en geç 30 gün içinde yanıtlanacaktır.`,
  },
];

export default function GizlilikPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Badge variant="primary" size="lg" className="mb-6">
            Yasal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
            Son güncelleme: 16 Ocak 2025
          </p>
          <p className="text-neutral-600">
            Bu politika, reflektif.net web sitesi ve hizmetlerinin kullanımı sırasında
            kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card variant="bordered">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-900 mb-4">İçindekiler</h2>
              <nav className="grid md:grid-cols-2 gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                {section.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Related Links */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card variant="bordered" className="bg-neutral-50">
            <CardContent>
              <h3 className="font-bold text-neutral-900 mb-4">İlgili Sayfalar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/kvkk" className="text-primary-600 hover:text-primary-700">
                  KVKK Aydınlatma Metni →
                </Link>
                <Link href="/cerezler" className="text-primary-600 hover:text-primary-700">
                  Çerez Politikası →
                </Link>
                <Link href="/kullanim-sartlari" className="text-primary-600 hover:text-primary-700">
                  Kullanım Şartları →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
