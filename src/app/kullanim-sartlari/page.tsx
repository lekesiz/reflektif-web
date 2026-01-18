import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Scale,
  Ban,
  CreditCard,
  RefreshCw,
  XCircle,
  Mail,
} from "lucide-react";
import { Container, Card, CardContent, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "Reflektif platformu kullanım şartları ve koşulları. Hizmetlerimizi kullanmadan önce lütfen okuyunuz.",
};

const sections = [
  {
    id: "giriş",
    title: "1. Giriş ve Kabul",
    icon: FileText,
    content: `Bu Kullanım Şartları ("Şartlar"), Reflektif Teknoloji A.Ş. ("Reflektif", "biz", "bizim") tarafından reflektif.net web sitesi ve mobil uygulamaları üzerinden sunulan hizmetlerin kullanım koşullarını düzenlemektedir.

Platformumuza erişerek veya hizmetlerimizi kullanarak bu Şartları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Bu Şartları kabul etmiyorsanız, lütfen platformumuzu kullanmayınız.

Bu Şartlar, 6098 sayılı Türk Borçlar Kanunu ve 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında hazırlanmıştır.`,
  },
  {
    id: "tanimlar",
    title: "2. Tanımlar",
    icon: FileText,
    content: `Bu Şartlarda geçen terimler aşağıdaki anlamlara gelmektedir:

**Platform:** reflektif.net web sitesi ve mobil uygulamalarının tamamı.

**Kullanıcı:** Platformu ziyaret eden veya hizmetlerden yararlanan gerçek veya tüzel kişi.

**Üye:** Platformda hesap oluşturarak kayıt olan kullanıcı.

**Hizmetler:** Platform üzerinden sunulan yetkinlik değerlendirme, kariyer yönlendirme, eğitim ve danışmanlık hizmetlerinin tamamı.

**İçerik:** Platform üzerindeki tüm metin, görsel, video, test, rapor ve diğer materyaller.

**Kurumsal Müşteri:** Reflektif ile kurumsal sözleşme imzalayan tüzel kişiler.`,
  },
  {
    id: "uyelik",
    title: "3. Üyelik ve Hesap",
    icon: Users,
    content: `**Üyelik Şartları:**
• Platform hizmetlerinden yararlanmak için üyelik oluşturulması gerekmektedir
• Üyelik için 18 yaşını doldurmuş olmak veya yasal veli onayı gereklidir
• Üyelik bilgilerinin doğru ve güncel olması zorunludur
• Her kullanıcı yalnızca bir hesap oluşturabilir

**Hesap Güvenliği:**
• Hesap bilgilerinizin gizliliğinden siz sorumlusunuz
• Şifrenizi kimseyle paylaşmamalısınız
• Hesabınızda şüpheli bir aktivite fark ederseniz derhal bize bildirmelisiniz
• Hesabınız üzerinden gerçekleştirilen tüm işlemlerden siz sorumlusunuz

**Hesap Askıya Alma/Kapatma:**
Reflektif, aşağıdaki durumlarda hesabınızı askıya alabilir veya kapatabilir:
• Bu Şartların ihlali
• Yasadışı faaliyetler
• Üçüncü kişilerin haklarının ihlali
• Platformun güvenliğini tehlikeye atan davranışlar`,
  },
  {
    id: "hizmetler",
    title: "4. Hizmet Kullanımı",
    icon: Shield,
    content: `**Sunulan Hizmetler:**
• Yetkinlik ve kariyer değerlendirme testleri
• Kişilik envanteri analizleri
• Kariyer yönlendirme ve eşleştirme
• Mesleki eğitim programları
• Kurumsal İK çözümleri
• Staj ve istihdam programları

**Hizmet Şartları:**
• Hizmetler, belirtilen kapsam ve süre dahilinde sunulur
• Test sonuçları ve raporlar bilgilendirme amaçlıdır
• Sonuçlar kesin kariyer kararı olarak değerlendirilmemelidir
• Hizmetler kişiye özeldir ve devredilemez

**Kullanım Sınırları:**
• Hizmetler yalnızca kişisel veya kurumsal sözleşme kapsamında kullanılabilir
• Ticari amaçlı yeniden satış yasaktır
• Hizmetlerin kötüye kullanımı hesap kapatma sebebidir`,
  },
  {
    id: "yasaklar",
    title: "5. Yasaklanan Davranışlar",
    icon: Ban,
    content: `Platform kullanımı sırasında aşağıdaki davranışlar kesinlikle yasaktır:

**Genel Yasaklar:**
• Yasalara aykırı faaliyetlerde bulunmak
• Başkalarının haklarını ihlal etmek
• Yanıltıcı veya sahte bilgi vermek
• Başka kullanıcıların hesaplarına erişmeye çalışmak
• Spam, zararlı yazılım veya virüs yaymak

**Teknik Yasaklar:**
• Platformun güvenlik önlemlerini aşmaya çalışmak
• Otomatik veri toplama araçları (bot, scraper) kullanmak
• DDoS veya benzeri saldırılar düzenlemek
• Platformun altyapısına zarar vermek

**İçerik Yasakları:**
• Telif hakkı ihlali
• Hakaret, aşağılama veya nefret söylemi
• Yanıltıcı veya manipülatif içerik paylaşımı
• Test sorularını veya cevaplarını paylaşmak

İhlal durumunda hesabınız askıya alınabilir veya kalıcı olarak kapatılabilir.`,
  },
  {
    id: "odeme",
    title: "6. Ödeme Koşulları",
    icon: CreditCard,
    content: `**Fiyatlandırma:**
• Hizmet fiyatları platform üzerinde güncel olarak belirtilir
• Fiyatlara KDV dahil/hariç durumu açıkça belirtilir
• Reflektif, fiyatları önceden bildirmeksizin değiştirme hakkını saklı tutar
• Mevcut aboneliklere fiyat değişikliği dönem sonunda uygulanır

**Ödeme Yöntemleri:**
• Kredi kartı / Banka kartı
• Havale / EFT
• Kurumsal fatura (kurumsal müşteriler için)

**Fatura:**
• Tüm ödemeler için e-fatura/e-arşiv fatura düzenlenir
• Faturalar kayıtlı e-posta adresinize gönderilir
• Kurumsal müşteriler için özel faturalama seçenekleri mevcuttur

**Ödeme Güvenliği:**
• Ödeme işlemleri SSL şifreleme ile korunur
• Kart bilgileriniz sistemimizde saklanmaz
• 3D Secure güvenlik protokolü kullanılır`,
  },
  {
    id: "iade",
    title: "7. İptal ve İade",
    icon: RefreshCw,
    content: `**Cayma Hakkı:**
6502 sayılı Kanun uyarınca, dijital içerik niteliğindeki hizmetlerimiz için cayma hakkı, hizmetin ifasına başlanması ile birlikte sona erer. Hizmet satın alımı öncesinde bu durumu kabul ettiğinizi onaylarsınız.

**İade Koşulları:**
Aşağıdaki durumlarda iade talep edebilirsiniz:
• Teknik nedenlerle hizmetin hiç sunulamaması
• Satın alınan hizmetin tanımlandığından esaslı şekilde farklı olması
• Sistemsel hata nedeniyle mükerrer ödeme yapılması

**İade Prosedürü:**
1. destek@reflektif.net adresine iade talebinizi iletin
2. Talebiniz 7 iş günü içinde değerlendirilir
3. Onaylanan iadeler 14 iş günü içinde gerçekleştirilir
4. İade, ödemenin yapıldığı yönteme göre yapılır

**İade Edilmeyecek Durumlar:**
• Tamamlanmış testler ve raporlar
• Kullanılmış eğitim içerikleri
• Süresi dolan abonelikler`,
  },
  {
    id: "fikri-mulkiyet",
    title: "8. Fikri Mülkiyet",
    icon: Scale,
    content: `**Reflektif'in Hakları:**
Platform üzerindeki tüm içerik, tasarım, yazılım, test metodolojileri, algoritmalar ve markalar Reflektif'in mülkiyetindedir veya lisanslıdır. Bu materyaller, 5846 sayılı Fikir ve Sanat Eserleri Kanunu ve ilgili mevzuat kapsamında korunmaktadır.

**Kullanıcı İçeriği:**
Kullanıcılar, platforma yükledikleri içerikler üzerindeki haklarını korur. Ancak, içerik yükleyerek Reflektif'e hizmeti sunmak için gerekli olan sınırlı lisansı vermiş olursunuz.

**Yasaklar:**
• İçeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması
• Test sorularının veya metodolojilerinin paylaşılması
• Marka veya logoların izinsiz kullanımı
• Yazılımın tersine mühendisliği

**İhlal Durumunda:**
Fikri mülkiyet ihlalleri hukuki işleme konu olabilir ve tazminat talebine yol açabilir.`,
  },
  {
    id: "sorumluluk",
    title: "9. Sorumluluk Sınırlaması",
    icon: AlertTriangle,
    content: `**Hizmet Garantisi:**
Reflektif, hizmetlerin kesintisiz, hatasız veya güvenli olacağını garanti etmez. Hizmetler "olduğu gibi" sunulmaktadır.

**Sorumluluk Sınırları:**
Reflektif, aşağıdaki durumlardan kaynaklanan zararlardan sorumlu değildir:
• Kullanıcı hatası veya ihmali
• Üçüncü taraf hizmetlerindeki aksaklıklar
• Mücbir sebepler (doğal afet, savaş, pandemi vb.)
• İnternet bağlantı sorunları
• Kullanıcının kariyer kararları ve sonuçları

**Tazminat Sınırı:**
Reflektif'in herhangi bir kullanıcıya karşı toplam sorumluluğu, kullanıcının son 12 ayda ödediği tutarı aşmayacaktır.

**Test Sonuçları:**
Test sonuçları ve kariyer önerileri yalnızca bilgilendirme amaçlıdır. Kesin kariyer kararı olarak değerlendirilmemelidir. Sonuçların uygulanması tamamen kullanıcının sorumluluğundadır.`,
  },
  {
    id: "fesih",
    title: "10. Sözleşme Feshi",
    icon: XCircle,
    content: `**Kullanıcı Tarafından Fesih:**
• Üyeliğinizi istediğiniz zaman sonlandırabilirsiniz
• Hesap silme talebi için destek@reflektif.net adresine başvurunuz
• Aktif abonelikler dönem sonuna kadar devam eder
• Silme işlemi 30 gün içinde tamamlanır

**Reflektif Tarafından Fesih:**
Reflektif, aşağıdaki durumlarda sözleşmeyi derhal feshedebilir:
• Kullanım şartlarının ağır ihlali
• Yasadışı faaliyetler
• Dolandırıcılık veya kötüye kullanım
• Uzun süreli hesap inaktifliği (24 ay)

**Fesih Sonrası:**
• Kişisel verileriniz KVKK uyarınca işlenir
• Test sonuçları ve raporlar yasal saklama süresince tutulur
• Ödenmemiş borçlar fesihten etkilenmez`,
  },
  {
    id: "degisiklikler",
    title: "11. Şartlarda Değişiklik",
    icon: RefreshCw,
    content: `Reflektif, bu Kullanım Şartlarını dilediği zaman değiştirme hakkını saklı tutar.

**Bildirim:**
Önemli değişiklikler yapıldığında:
• Web sitemizde duyuru yayınlanır
• Kayıtlı e-posta adresinize bilgilendirme gönderilir
• Değişiklik tarihi bu sayfada güncellenir
• Değişiklikler, yayınlandıktan 30 gün sonra yürürlüğe girer

**Kabul:**
Değişiklik bildiriminden sonra platformu kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir. Değişiklikleri kabul etmiyorsanız, hesabınızı kapatabilirsiniz.`,
  },
  {
    id: "uyusmazlik",
    title: "12. Uyuşmazlık Çözümü",
    icon: Scale,
    content: `**Geçerli Hukuk:**
Bu Şartlar, Türkiye Cumhuriyeti hukukuna tabidir.

**Yetkili Mahkeme:**
Bu Şartlardan kaynaklanan uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.

**Tüketici Hakları:**
6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tüketici sıfatıyla işlem yapan kullanıcılar, Tüketici Hakem Heyetlerine ve Tüketici Mahkemelerine başvurabilir.

**Arabuluculuk:**
Ticari uyuşmazlıklarda, dava açılmadan önce arabuluculuğa başvurulması zorunludur (6102 sayılı TTK m.5/A).

**Bildirim Adresi:**
Yasal bildirimler için:
Reflektif Teknoloji A.Ş.
İstanbul, Türkiye
E-posta: hukuk@reflektif.net`,
  },
  {
    id: "iletişim",
    title: "13. İletişim",
    icon: Mail,
    content: `Kullanım şartları veya hizmetlerimizle ilgili sorularınız için:

**Genel Destek:**
E-posta: destek@reflektif.net
Telefon: 0507 43 43 253

**Hukuki Konular:**
E-posta: hukuk@reflektif.net

**KVKK Başvuruları:**
E-posta: kvkk@reflektif.net

**Adres:**
İstanbul, Türkiye

**Çalışma Saatleri:**
Pazartesi - Cuma: 09:00 - 18:00

Talepleriniz en geç 7 iş günü içinde yanıtlanacaktır.`,
  },
];

export default function KullanimSartlariPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Badge variant="primary" size="lg" className="mb-6">
            Yasal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Kullanım Şartları
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
            Son güncelleme: 16 Ocak 2025
          </p>
          <p className="text-neutral-600">
            Bu şartlar, Reflektif platformunu kullanırken uymanız gereken
            kuralları ve koşulları belirler. Lütfen hizmetlerimizi kullanmadan
            önce dikkatle okuyunuz.
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

        {/* Agreement Notice */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card variant="bordered" className="bg-amber-50 border-amber-200">
            <CardContent>
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Önemli Uyarı</h3>
                  <p className="text-neutral-700 text-sm">
                    Reflektif platformuna kayıt olarak veya hizmetlerimizi kullanarak bu
                    Kullanım Şartlarını kabul etmiş sayılırsınız. Şartları kabul
                    etmiyorsanız, lütfen platformumuzu kullanmayınız.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Links */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card variant="bordered" className="bg-neutral-50">
            <CardContent>
              <h3 className="font-bold text-neutral-900 mb-4">İlgili Sayfalar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/gizlilik" className="text-primary-600 hover:text-primary-700">
                  Gizlilik Politikası →
                </Link>
                <Link href="/kvkk" className="text-primary-600 hover:text-primary-700">
                  KVKK Aydınlatma Metni →
                </Link>
                <Link href="/cerezler" className="text-primary-600 hover:text-primary-700">
                  Çerez Politikası →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
