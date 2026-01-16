import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileText,
  Target,
  Users,
  Globe,
  Clock,
  UserCheck,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Container, Card, CardContent, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Reflektif aydınlatma metni. Veri sorumlusu bilgileri ve ilgili kişi hakları.",
};

export default function KVKKPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Badge variant="primary" size="lg" className="mb-6">
            6698 Sayılı Kanun
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
            Son güncelleme: 16 Ocak 2025
          </p>
          <p className="text-neutral-600">
            6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun (&quot;Kanun&quot;) 10. maddesi
            uyarınca, veri sorumlusu sıfatıyla Reflektif Teknoloji A.Ş. tarafından
            kişisel verilerinizin işlenmesine ilişkin aydınlatma metnidir.
          </p>
        </div>

        {/* Veri Sorumlusu Bilgileri */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card variant="gradient" className="bg-gradient-to-r from-primary-600 to-secondary-600">
            <CardContent>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Veri Sorumlusu Bilgileri
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div>
                  <p className="font-bold text-lg mb-2">Reflektif Teknoloji A.Ş.</p>
                  <div className="space-y-2 text-white/90">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      İstanbul, Türkiye
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      0507 43 43 253
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      kvkk@reflektif.net
                    </p>
                  </div>
                </div>
                <div className="text-white/90">
                  <p><strong>KEP:</strong> reflektif@hs01.kep.tr</p>
                  <p><strong>Web:</strong> www.reflektif.net</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <section id="kisisel-veriler" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                1. İşlenen Kişisel Veriler
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-200 px-4 py-3 text-left font-bold text-neutral-900">
                      Veri Kategorisi
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left font-bold text-neutral-900">
                      Veri Türleri
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      Kimlik Bilgileri
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      Ad, soyad, T.C. kimlik numarası, doğum tarihi, cinsiyet
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      İletişim Bilgileri
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      E-posta adresi, telefon numarası, adres
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      Eğitim Bilgileri
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      Öğrenim durumu, mezun olunan okul, bölüm, mezuniyet yılı
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      Mesleki Deneyim
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      İş deneyimleri, çalışılan pozisyonlar, yetkinlikler
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      Test ve Değerlendirme Verileri
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      Kişilik envanteri sonuçları, yetenek test skorları, ilgi alanı analizleri, kariyer eşleştirme verileri
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      İşlem Güvenliği Bilgileri
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      IP adresi, log kayıtları, oturum bilgileri, cihaz bilgileri
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium text-neutral-800">
                      Finansal Bilgiler
                    </td>
                    <td className="border border-neutral-200 px-4 py-3 text-neutral-700">
                      Fatura bilgileri, ödeme kayıtları (kart numarası saklanmaz)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section id="isleme-amaci" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                2. Kişisel Verilerin İşlenme Amaçları
              </h2>
            </div>

            <p className="text-neutral-700 mb-6">
              Kişisel verileriniz, Kanun&apos;un 5. ve 6. maddelerinde belirtilen kişisel veri
              işleme şartları dahilinde aşağıdaki amaçlarla işlenmektedir:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Üyelik işlemlerinin gerçekleştirilmesi ve hesap yönetimi",
                "Yetkinlik değerlendirme testlerinin uygulanması ve raporlanması",
                "Kariyer danışmanlığı ve meslek eşleştirme hizmetlerinin sunulması",
                "Eğitim ve staj programlarının planlanması ve yönetilmesi",
                "İş yerleştirme ve istihdam hizmetlerinin sağlanması",
                "Sözleşme süreçlerinin yürütülmesi ve ödeme işlemlerinin gerçekleştirilmesi",
                "İletişim faaliyetlerinin yürütülmesi ve müşteri hizmetleri desteği",
                "Yasal yükümlülüklerin yerine getirilmesi (vergi, denetim vb.)",
                "Platform güvenliğinin sağlanması ve dolandırıcılık önleme",
                "Hizmet kalitesinin iyileştirilmesi ve istatistiksel analizler",
                "Yetkili kişi, kurum ve kuruluşlara bilgi verilmesi",
                "Açık rıza ile pazarlama ve tanıtım faaliyetleri",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="hukuki-sebepler" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                3. Kişisel Veri İşlemenin Hukuki Sebepleri
              </h2>
            </div>

            <p className="text-neutral-700 mb-6">
              Kişisel verileriniz, Kanun&apos;un 5. maddesinde belirtilen aşağıdaki hukuki
              sebeplere dayanılarak işlenmektedir:
            </p>

            <div className="space-y-4">
              <Card variant="bordered">
                <CardContent>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    a) Açık Rızanızın Bulunması (m.5/1)
                  </h3>
                  <p className="text-neutral-700">
                    Pazarlama iletişimleri, araştırma ve anket çalışmaları, üçüncü taraf
                    hizmetlerle entegrasyon gibi durumlarda açık rızanız alınmaktadır.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    b) Sözleşmenin Kurulması veya İfası (m.5/2-c)
                  </h3>
                  <p className="text-neutral-700">
                    Üyelik sözleşmesi, hizmet sözleşmesi kapsamında verilerinizin işlenmesi
                    gerekmektedir.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    c) Hukuki Yükümlülük (m.5/2-ç)
                  </h3>
                  <p className="text-neutral-700">
                    Vergi mevzuatı, 5651 sayılı Kanun, ticaret mevzuatı gibi yasal
                    yükümlülüklerimizin yerine getirilmesi.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    d) Meşru Menfaat (m.5/2-f)
                  </h3>
                  <p className="text-neutral-700">
                    Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, şirketimizin
                    meşru menfaatleri için zorunlu olan veri işleme faaliyetleri
                    (güvenlik, hizmet iyileştirme, istatistik).
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4 */}
          <section id="veri-aktarimi" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                4. Kişisel Verilerin Aktarılması
              </h2>
            </div>

            <p className="text-neutral-700 mb-6">
              Kişisel verileriniz, Kanun&apos;un 8. ve 9. maddelerinde belirtilen şartlar
              dahilinde aşağıdaki taraflara aktarılabilmektedir:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="bordered">
                <CardContent>
                  <h3 className="font-bold text-neutral-900 mb-4">Yurt İçi Aktarım</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• İş ortakları ve tedarikçiler</li>
                    <li>• Eğitim kurumları ve partner şirketler</li>
                    <li>• Ödeme kuruluşları</li>
                    <li>• Hukuk ve mali müşavirler</li>
                    <li>• Yetkili kamu kurum ve kuruluşları</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <h3 className="font-bold text-neutral-900 mb-4">Yurt Dışı Aktarım</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Bulut hizmet sağlayıcıları (AWS, Google Cloud)</li>
                    <li>• Analitik hizmet sağlayıcıları</li>
                    <li>• E-posta hizmet sağlayıcıları</li>
                  </ul>
                  <p className="text-sm text-neutral-500 mt-4">
                    * Yeterli koruma sağlayan ülkeler veya taahhütname imzalanan taraflar
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5 */}
          <section id="toplama-yontemi" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                5. Kişisel Veri Toplamanın Yöntemi
              </h2>
            </div>

            <p className="text-neutral-700 mb-4">
              Kişisel verileriniz, aşağıdaki yöntemlerle otomatik veya otomatik olmayan
              yollarla toplanmaktadır:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Web Sitesi", items: ["Üyelik formları", "İletişim formları", "Test sayfaları", "Çerezler"] },
                { title: "Mobil Uygulama", items: ["Kayıt işlemleri", "Test uygulamaları", "Cihaz bilgileri"] },
                { title: "Diğer Kanallar", items: ["E-posta", "Telefon", "Yüz yüze görüşmeler", "Partner kuruluşlar"] },
              ].map((category) => (
                <Card key={category.title} variant="bordered">
                  <CardContent>
                    <h4 className="font-bold text-neutral-900 mb-3">{category.title}</h4>
                    <ul className="space-y-1 text-sm text-neutral-700">
                      {category.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 6 - Rights */}
          <section id="haklariniz" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                6. İlgili Kişi Hakları (Kanun m.11)
              </h2>
            </div>

            <p className="text-neutral-700 mb-6">
              Kanun&apos;un 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki
              haklara sahipsiniz:
            </p>

            <div className="bg-neutral-50 rounded-xl p-6 mb-6">
              <ol className="space-y-4">
                {[
                  "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                  "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme",
                  "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
                  "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme",
                  "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
                  "Kanun&apos;un 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme",
                  "Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme",
                  "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
                  "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
                ].map((right, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {String.fromCharCode(97 + index)}
                    </span>
                    <span className="text-neutral-700">{right}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Section 7 - Application */}
          <section id="basvuru" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                7. Başvuru Yöntemi
              </h2>
            </div>

            <p className="text-neutral-700 mb-6">
              Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle
              başvuruda bulunabilirsiniz:
            </p>

            <Card variant="bordered" className="mb-6">
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-3">Başvuru Kanalları</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary-600" />
                        E-posta: kvkk@reflektif.net
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary-600" />
                        KEP: reflektif@hs01.kep.tr
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        Noter kanalıyla iadeli taahhütlü posta
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-3">Başvuru Şartları</h4>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>• Kimlik fotokopisi (fiziksel başvurularda)</li>
                      <li>• Kayıtlı e-posta ile başvuru</li>
                      <li>• Talep konusunun açıkça belirtilmesi</li>
                      <li>• İletişim bilgileri</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="bg-primary-50 border-primary-200">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Yanıt Süresi</h4>
                    <p className="text-neutral-700">
                      Başvurularınız, talebinizin niteliğine göre en geç <strong>30 gün</strong> içinde
                      ücretsiz olarak sonuçlandırılacaktır. İşlemin ek maliyet gerektirmesi hâlinde,
                      Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret
                      talep edilebilir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 8 */}
          <section id="degisiklikler" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-neutral-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                8. Aydınlatma Metninde Değişiklik
              </h2>
            </div>

            <p className="text-neutral-700">
              İşbu aydınlatma metni, yasal düzenlemelerdeki değişiklikler veya veri
              işleme faaliyetlerimizdeki güncellemeler doğrultusunda revize edilebilir.
              Güncel metin, her zaman web sitemizde yayınlanacak olup, önemli
              değişiklikler kayıtlı e-posta adresinize bildirilecektir.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card variant="bordered" className="bg-neutral-50">
            <CardContent>
              <h3 className="font-bold text-neutral-900 mb-4">İlgili Sayfalar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/gizlilik" className="text-primary-600 hover:text-primary-700">
                  Gizlilik Politikası →
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
