import { Metadata } from "next";
import Link from "next/link";
import {
  Cookie,
  Shield,
  Settings,
  BarChart3,
  Megaphone,
  Clock,
  Trash2,
  HelpCircle,
  Mail,
} from "lucide-react";
import { Container, Card, CardContent, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Reflektif çerez politikası. Web sitemizde kullanılan çerezler ve yönetim seçenekleri hakkında bilgi.",
};

const cookieTypes = [
  {
    name: "Zorunlu Çerezler",
    icon: Shield,
    color: "bg-green-100 text-green-600",
    description:
      "Web sitesinin temel işlevleri için gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün çalışmaz.",
    canDisable: false,
    examples: [
      {
        name: "session_id",
        purpose: "Oturum yönetimi",
        duration: "Oturum süresince",
      },
      {
        name: "csrf_token",
        purpose: "Güvenlik (CSRF koruması)",
        duration: "Oturum süresince",
      },
      {
        name: "cookie_consent",
        purpose: "Çerez tercihlerinin saklanması",
        duration: "1 yıl",
      },
      {
        name: "auth_token",
        purpose: "Kullanıcı kimlik doğrulama",
        duration: "30 gün",
      },
    ],
  },
  {
    name: "İşlevsellik Çerezleri",
    icon: Settings,
    color: "bg-blue-100 text-blue-600",
    description:
      "Size daha kişiselleştirilmiş bir deneyim sunmak için kullanılan çerezlerdir. Tercihlerinizi hatırlar.",
    canDisable: true,
    examples: [
      {
        name: "language",
        purpose: "Dil tercihi",
        duration: "1 yıl",
      },
      {
        name: "theme",
        purpose: "Tema tercihi (açık/koyu)",
        duration: "1 yıl",
      },
      {
        name: "recent_tests",
        purpose: "Son görüntülenen testler",
        duration: "30 gün",
      },
    ],
  },
  {
    name: "Analitik Çerezler",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-600",
    description:
      "Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. Hizmetlerimizi iyileştirmek için kullanılır.",
    canDisable: true,
    examples: [
      {
        name: "_ga",
        purpose: "Google Analytics - Kullanıcı kimliği",
        duration: "2 yıl",
      },
      {
        name: "_gid",
        purpose: "Google Analytics - Oturum kimliği",
        duration: "24 saat",
      },
      {
        name: "_gat",
        purpose: "Google Analytics - İstek sınırlama",
        duration: "1 dakika",
      },
    ],
  },
  {
    name: "Pazarlama Çerezleri",
    icon: Megaphone,
    color: "bg-orange-100 text-orange-600",
    description:
      "Reklamları kişiselleştirmek ve reklam kampanyalarının etkinliğini ölçmek için kullanılan çerezlerdir.",
    canDisable: true,
    examples: [
      {
        name: "_fbp",
        purpose: "Facebook Pixel",
        duration: "3 ay",
      },
      {
        name: "ads/ga-audiences",
        purpose: "Google Ads yeniden pazarlama",
        duration: "Oturum süresince",
      },
    ],
  },
];

const sections = [
  {
    id: "nedir",
    title: "1. Çerez Nedir?",
    icon: Cookie,
    content: `Çerezler (cookies), web sitelerinin bilgisayarınıza, tabletinize veya cep telefonunuza yerleştirdiği küçük metin dosyalarıdır. Çerezler, web sitesinin sizi tanımasına, tercihlerinizi hatırlamasına ve size daha iyi bir kullanıcı deneyimi sunmasına yardımcı olur.

Çerezler genellikle şu bilgileri içerir:
• Çerezin geldiği web sitesinin adı
• Çerezin ömrü (ne kadar süre cihazınızda kalacağı)
• Benzersiz bir tanımlayıcı (genellikle rastgele oluşturulmuş bir numara)

Çerezler, virüs veya zararlı yazılım taşımaz ve kişisel dosyalarınıza erişemez.`,
  },
  {
    id: "neden",
    title: "2. Neden Çerez Kullanıyoruz?",
    icon: HelpCircle,
    content: `Reflektif olarak çerezleri aşağıdaki amaçlarla kullanmaktayız:

**Temel İşlevsellik:**
• Oturum açık tutma ve güvenli giriş
• Alışveriş sepeti ve form verilerinin saklanması
• Güvenlik kontrollerinin sağlanması

**Kişiselleştirme:**
• Dil ve bölge tercihlerinizin hatırlanması
• Görüntüleme tercihlerinizin saklanması
• Önceki ziyaretlerinizin tanınması

**Performans ve Analitik:**
• Ziyaretçi istatistiklerinin toplanması
• Site performansının ölçülmesi
• Kullanıcı deneyiminin iyileştirilmesi

**Pazarlama:**
• İlgi alanlarınıza uygun içerik sunulması
• Reklam kampanyalarının etkinliğinin ölçülmesi
• Yeniden pazarlama faaliyetleri`,
  },
  {
    id: "hukuki",
    title: "3. Hukuki Dayanak",
    icon: Shield,
    content: `Çerez kullanımımız, aşağıdaki yasal düzenlemelere uygun olarak gerçekleştirilmektedir:

**6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK):**
Çerezler aracılığıyla toplanan veriler, KVKK kapsamında kişisel veri olarak kabul edilmektedir. Bu veriler, Kanun'un 5. ve 6. maddelerinde belirtilen şartlara uygun olarak işlenmektedir.

**Kişisel Verileri Koruma Kurumu Çerez Uygulamaları Rehberi:**
Çerez politikamız, Kurum'un yayınladığı rehber doğrultusunda hazırlanmıştır.

**Hukuki İşleme Şartları:**
• Zorunlu çerezler: Sözleşmenin ifası için gereklilik
• Analitik çerezler: Meşru menfaat veya açık rıza
• Pazarlama çerezleri: Açık rıza

Çerez tercih yönetimi aracılığımız ile hangi çerezlere izin vereceğinizi seçebilirsiniz.`,
  },
  {
    id: "sureler",
    title: "4. Çerez Süreleri",
    icon: Clock,
    content: `Çerezler, saklama sürelerine göre iki kategoriye ayrılır:

**Oturum Çerezleri (Session Cookies):**
• Tarayıcınızı kapattığınızda otomatik olarak silinir
• Geçici bilgileri saklar
• Site içi gezinme için kullanılır

**Kalıcı Çerezler (Persistent Cookies):**
• Belirlenen süre boyunca cihazınızda kalır
• Tercihlerinizi hatırlamak için kullanılır
• Manuel olarak silinebilir

**Çerez Saklama Süreleri:**

| Çerez Türü | Saklama Süresi |
|------------|----------------|
| Oturum çerezleri | Oturum sonuna kadar |
| İşlevsellik çerezleri | 1 yıl |
| Analitik çerezleri | 2 yıl |
| Pazarlama çerezleri | 3 ay - 2 yıl |`,
  },
  {
    id: "yonetim",
    title: "5. Çerez Yönetimi",
    icon: Settings,
    content: `Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:

**1. Sitemizin Çerez Yönetim Paneli:**
Sayfanın altında bulunan "Çerez Ayarları" bağlantısını kullanarak tercihlerinizi değiştirebilirsiniz.

**2. Tarayıcı Ayarları:**
Tüm modern tarayıcılar çerez yönetimi seçenekleri sunar:

**Google Chrome:**
Ayarlar → Gizlilik ve güvenlik → Çerezler ve site verileri

**Mozilla Firefox:**
Seçenekler → Gizlilik ve Güvenlik → Çerezler ve Site Verileri

**Safari:**
Tercihler → Gizlilik → Çerezler ve web sitesi verileri

**Microsoft Edge:**
Ayarlar → Gizlilik, arama ve hizmetler → Çerezler

**3. Özel Tarama Modu:**
Tarayıcınızın gizli/özel tarama modunu kullanarak çerezlerin kalıcı olarak saklanmasını engelleyebilirsiniz.

**Uyarı:** Zorunlu çerezleri devre dışı bırakmak, sitenin düzgün çalışmamasına neden olabilir.`,
  },
  {
    id: "ucuncu-taraf",
    title: "6. Üçüncü Taraf Çerezleri",
    icon: BarChart3,
    content: `Sitemizde aşağıdaki üçüncü taraf hizmet sağlayıcılarının çerezleri kullanılmaktadır:

**Google Analytics:**
• Amaç: Site trafiği ve kullanıcı davranışı analizi
• Gizlilik Politikası: policies.google.com/privacy
• Çerez Süresi: 2 yıl

**Google Tag Manager:**
• Amaç: Etiket yönetimi ve analitik entegrasyonu
• Gizlilik Politikası: policies.google.com/privacy

**Facebook Pixel (Opsiyonel):**
• Amaç: Reklam performansı ölçümü ve yeniden pazarlama
• Gizlilik Politikası: facebook.com/privacy
• Çerez Süresi: 3 ay

**Hotjar (Opsiyonel):**
• Amaç: Kullanıcı deneyimi analizi ve ısı haritaları
• Gizlilik Politikası: hotjar.com/privacy

Bu üçüncü tarafların çerez kullanımı, kendi gizlilik politikalarına tabidir. Üçüncü taraf çerezlerini sitemizin çerez yönetim panelinden devre dışı bırakabilirsiniz.`,
  },
  {
    id: "haklariniz",
    title: "7. Haklarınız",
    icon: Shield,
    content: `KVKK kapsamında çerezlerle ilgili aşağıdaki haklara sahipsiniz:

• Hangi çerezlerin kullanıldığını öğrenme
• Çerez tercihlerinizi değiştirme veya geri çekme
• Çerezlerin silinmesini talep etme
• Çerez kullanımına ilişkin bilgi alma
• Çerez verilerinize erişim talep etme

**Rıza Geri Çekme:**
Daha önce verdiğiniz çerez onayını istediğiniz zaman geri çekebilirsiniz. Bunun için:
1. Sitemizin çerez yönetim panelini kullanın
2. Tarayıcı ayarlarından çerezleri silin
3. kvkk@reflektif.net adresine başvurun

Rızanızı geri çekmeniz, geri çekme öncesinde yapılan veri işleme faaliyetlerinin hukuka uygunluğunu etkilemez.`,
  },
  {
    id: "silme",
    title: "8. Çerezleri Silme",
    icon: Trash2,
    content: `Cihazınızda kayıtlı çerezleri aşağıdaki yöntemlerle silebilirsiniz:

**Tarayıcı Üzerinden:**
Her tarayıcının ayarlar menüsünden "Tarama verilerini temizle" veya benzeri bir seçenek bulunur. Bu seçenek ile tüm çerezleri veya belirli sitelerin çerezlerini silebilirsiniz.

**Sitemiz İçin Özel Silme:**
Tarayıcınızın site ayarları bölümünden reflektif.net'e ait çerezleri ayrıca silebilirsiniz.

**Otomatik Silme:**
Tarayıcınızı, kapandığında tüm çerezleri otomatik silecek şekilde ayarlayabilirsiniz.

**Dikkat Edilecek Noktalar:**
• Çerezleri sildiğinizde tercihleriniz sıfırlanır
• Yeniden oturum açmanız gerekebilir
• Kişiselleştirilmiş ayarlarınız kaybolur
• Site bazı özellikleri tam olarak sunmayabilir`,
  },
  {
    id: "degisiklikler",
    title: "9. Politika Değişiklikleri",
    icon: Clock,
    content: `Bu Çerez Politikası, yasal düzenlemeler veya hizmetlerimizdeki değişiklikler doğrultusunda güncellenebilir.

**Değişiklik Bildirimi:**
Önemli değişiklikler yapıldığında:
• Web sitemizde banner ile duyuru yapılır
• Çerez onay paneli yeniden gösterilir
• Bu sayfadaki tarih güncellenir

**Periyodik İnceleme:**
Çerez politikamızı düzenli olarak gözden geçirmenizi öneririz.

**Yürürlük:**
Değişiklikler, web sitesinde yayınlandığı tarihte yürürlüğe girer.`,
  },
  {
    id: "iletişim",
    title: "10. İletişim",
    icon: Mail,
    content: `Çerez kullanımımız hakkında sorularınız için:

**E-posta:** kvkk@reflektif.net
**Telefon:** 0507 43 43 253
**Adres:** İstanbul, Türkiye

**KVKK Başvuruları:**
Çerezlerle ilgili KVKK kapsamındaki talepleriniz için kvkk@reflektif.net adresine başvurabilirsiniz.

Sorularınız en geç 30 gün içinde yanıtlanacaktır.`,
  },
];

export default function CerezlerPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Badge variant="primary" size="lg" className="mb-6">
            Yasal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Çerez Politikası
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
            Son güncelleme: 16 Ocak 2025
          </p>
          <p className="text-neutral-600">
            Bu politika, reflektif.net web sitesinde kullanılan çerezler, bunların
            amaçları ve yönetim seçenekleriniz hakkında bilgi vermektedir.
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

        {/* Cookie Types Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Kullandığımız Çerez Türleri
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type) => (
              <Card key={type.name} variant="bordered">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${type.color} flex items-center justify-center flex-shrink-0`}>
                      <type.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-neutral-900">{type.name}</h3>
                        {!type.canDisable && (
                          <Badge variant="secondary" size="sm">Zorunlu</Badge>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 mb-4">{type.description}</p>
                      <div className="space-y-2">
                        {type.examples.map((example) => (
                          <div
                            key={example.name}
                            className="text-xs bg-neutral-50 rounded p-2"
                          >
                            <div className="flex justify-between">
                              <span className="font-mono text-neutral-700">{example.name}</span>
                              <span className="text-neutral-500">{example.duration}</span>
                            </div>
                            <span className="text-neutral-600">{example.purpose}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

        {/* Cookie Settings CTA */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card variant="bordered" className="bg-primary-50 border-primary-200">
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-neutral-900 mb-2">Çerez Tercihlerinizi Yönetin</h3>
                  <p className="text-neutral-600 text-sm">
                    Hangi çerezlerin kullanılacağını seçmek için çerez ayarları panelimizi
                    kullanabilirsiniz. Tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
                  </p>
                </div>
                <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Çerez Ayarları
                </button>
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
