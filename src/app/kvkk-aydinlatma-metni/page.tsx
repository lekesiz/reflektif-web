import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Reflektif",
  description:
    "Reflektif Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni. Kişisel verilerinizin işlenmesi, saklanması ve haklarınız hakkında detaylı bilgi.",
  keywords:
    "KVKK, kişisel verilerin korunması, aydınlatma metni, gizlilik, veri güvenliği, Reflektif",
};

export default function KVKKAydinlatmaMetniPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PageHeader
        title="KVKK Aydınlatma Metni"
        description="Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni"
        heroImage="/images/pages/kvkk-hero.webp"
      />

      <div className="container mx-auto px-6 md:px-8 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p className="mb-6 text-sm text-gray-600">
              <strong>Son Güncelleme Tarihi:</strong> 29 Ocak 2026
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Giriş</h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Reflektif ("Şirket" veya "Reflektif"), kullanıcılarımızın ve
                ziyaretçilerimizin kişisel verilerinin gizliliğine ve
                güvenliğine büyük önem vermektedir. Bu doğrultuda, 6698 sayılı
                Kişisel Verilerin Korunması Kanunu ("KVKK" veya "Kanun")
                uyarınca "Veri Sorumlusu" sıfatıyla, kişisel verilerinizi ne
                şekilde işlediğimiz ve haklarınız konusunda sizi bilgilendirmek
                amacıyla bu Aydınlatma Metni'ni hazırlamış bulunmaktayız.
              </p>
              <p className="leading-relaxed text-gray-700">
                Şirketimiz, Anayasa'nın 20. maddesinde güvence altına alınan
                kişisel verilerin korunması hakkına ve KVKK'da yer alan
                ilkelere tam uyum sağlamayı taahhüt eder. Kişisel verileriniz,
                hukuka ve dürüstlük kurallarına uygun, doğru ve güncel, belirli,
                açık ve meşru amaçlar doğrultusunda, işlendikleri amaçla
                bağlantılı, sınırlı ve ölçülü bir şekilde ve ilgili mevzuatta
                öngörülen veya işlendikleri amaç için gerekli olan süre kadar
                muhafaza edilecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Tanımlar
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Terim
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Açıklama
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Kişisel Veri
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kimliği belirli veya belirlenebilir gerçek kişiye
                        ilişkin her türlü bilgi.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Özel Nitelikli Kişisel Veri
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi
                        inancı, dini, mezhebi veya diğer inançları, kılık ve
                        kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı,
                        cinsel hayatı, ceza mahkûmiyeti ve güvenlik
                        tedbirleriyle ilgili verileri ile biyometrik ve genetik
                        verileri.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Kişisel Verilerin İşlenmesi
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kişisel verilerin tamamen veya kısmen otomatik olan ya
                        da herhangi bir veri kayıt sisteminin parçası olmak
                        kaydıyla otomatik olmayan yollarla elde edilmesi,
                        kaydedilmesi, depolanması, muhafaza edilmesi,
                        değiştirilmesi, yeniden düzenlenmesi, açıklanması,
                        aktarılması, devralınması, elde edilebilir hâle
                        getirilmesi, sınıflandırılması ya da kullanılmasının
                        engellenmesi gibi veriler üzerinde gerçekleştirilen her
                        türlü işlem.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Veri Sorumlusu
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kişisel verilerin işleme amaçlarını ve vasıtalarını
                        belirleyen, veri kayıt sisteminin kurulmasından ve
                        yönetilmesinden sorumlu olan Reflektif.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        İlgili Kişi
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kişisel verisi işlenen gerçek kişi (kullanıcı,
                        ziyaretçi, çalışan adayı vb.).
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Açık Rıza
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Belirli bir konuya ilişkin, bilgilendirmeye dayanan ve
                        özgür iradeyle açıklanan rıza.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Veri Sorumlusunun Kimliği
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                KVKK kapsamında Veri Sorumlusu, aşağıda bilgileri yer alan
                Reflektif'tir.
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <strong>Unvan:</strong> Reflektif Bilişim Teknolojileri A.Ş.
                </li>
                <li>
                  <strong>Adres:</strong> [Şirket Adresi Buraya Eklenecek]
                </li>
                <li>
                  <strong>E-posta:</strong> kvkk@reflektif.net
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Kişisel verileriniz, Reflektif tarafından sunulan hizmetlerin
                niteliğine bağlı olarak aşağıdaki amaçlarla işlenmektedir:
              </p>
              <div className="mb-4 rounded-lg bg-purple-50 p-4">
                <p className="text-gray-700">
                  Reflektif, yapay zeka destekli kariyer analizi, kişilik
                  envanteri, yetenek testleri, hobi-meslek eşleştirme ve
                  kariyer danışmanlığı hizmetleri sunan bir platformdur. Bu
                  hizmetlerin sağlanması, kişisel verilerinizin işlenmesini
                  zorunlu kılmaktadır.
                </p>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Ana İşleme Amaçları:
              </h3>
              <ol className="list-inside list-decimal space-y-3 text-gray-700">
                <li>
                  <strong>Hizmet Sunumu:</strong> Kişilik, yetenek, ilgi alanı
                  ve kariyer riski analizlerinin yapılması; test sonuçlarının
                  değerlendirilmesi ve size özel kariyer önerileri sunulması.
                </li>
                <li>
                  <strong>Yapay Zeka Modellemesi:</strong> Algoritmalarımızın
                  ve yapay zeka modellerimizin eğitilmesi, doğrulanması ve
                  iyileştirilmesi amacıyla verilerinizin anonimleştirilerek
                  kullanılması.
                </li>
                <li>
                  <strong>Kullanıcı Hesabı Yönetimi:</strong> Platformumuza
                  üyelik kaydınızın oluşturulması, hesabınızın yönetilmesi ve
                  kimlik doğrulama işlemlerinin yapılması.
                </li>
                <li>
                  <strong>İletişim:</strong> Hizmetlerimizle ilgili
                  güncellemeler, bildirimler, sorularınız ve talepleriniz
                  hakkında sizinle iletişime geçilmesi.
                </li>
                <li>
                  <strong>İyileştirme ve Geliştirme:</strong> Hizmetlerimizin
                  kalitesini artırmak, kullanıcı deneyimini iyileştirmek ve
                  yeni hizmetler geliştirmek amacıyla analiz ve araştırma
                  yapılması.
                </li>
                <li>
                  <strong>Yasal Yükümlülükler:</strong> 5651 sayılı Kanun gibi
                  yasal düzenlemelerden kaynaklanan yükümlülüklerimizin yerine
                  getirilmesi ve yetkili kamu kurum ve kuruluşlarının
                  taleplerine yanıt verilmesi.
                </li>
                <li>
                  <strong>Pazarlama ve Tanıtım (Açık Rızanız Halinde):</strong>{" "}
                  İlgi alanlarınıza ve tercihlerinize uygun kampanya, promosyon
                  ve pazarlama faaliyetlerinin yürütülmesi.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. İşlenen Kişisel Veri Kategorileri
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Platformumuzda işlenen kişisel veri kategorileri şunlardır:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <strong>Kimlik Bilgileri:</strong> Ad, soyad, doğum tarihi,
                  cinsiyet.
                </li>
                <li>
                  <strong>İletişim Bilgileri:</strong> E-posta adresi, telefon
                  numarası.
                </li>
                <li>
                  <strong>Eğitim ve Kariyer Bilgileri:</strong> Okul, bölüm,
                  mezuniyet yılı, meslek, iş deneyimi.
                </li>
                <li>
                  <strong>Test ve Analiz Verileri:</strong> Kişilik envanteri,
                  yetenek testleri, ilgi alanı anketleri ve diğer değerlendirme
                  araçlarından elde edilen cevaplarınız ve sonuçlarınız.
                </li>
                <li>
                  <strong>Yapay Zeka Tarafından Üretilen Veriler:</strong>{" "}
                  Analizler sonucunda yapay zeka tarafından üretilen kariyer
                  önerileri, risk profilleri ve yetkinlik puanları.
                </li>
                <li>
                  <strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, cihaz
                  bilgileri, çerez kayıtları, giriş-çıkış zamanları.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Kişisel Verilerin Aktarılması
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen
                kişisel veri işleme şartları ve amaçları çerçevesinde, gerekli
                güvenlik önlemleri alınarak aşağıdaki alıcı gruplarına
                aktarılabilecektir:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <strong>İş Ortakları ve Hizmet Sağlayıcılar:</strong>{" "}
                  Altyapı, yazılım, veri analizi, bulut depolama gibi teknik
                  hizmetler aldığımız yurt içi ve yurt dışındaki iş
                  ortaklarımız.
                </li>
                <li>
                  <strong>Akademik ve Bilimsel Kurumlar (Anonim Olarak):</strong>{" "}
                  Bilimsel araştırma ve geliştirme faaliyetleri yürütmek
                  amacıyla, verilerinizin kimliğinizi belirleyemeyecek şekilde
                  anonimleştirilerek akademik kurumlarla paylaşılması.
                </li>
                <li>
                  <strong>Yetkili Kamu Kurum ve Kuruluşları:</strong> Yasal bir
                  zorunluluk olması veya bir mahkeme kararına istinaden, talep
                  edilmesi halinde yetkili kamu kurum ve kuruluşları.
                </li>
                <li>
                  <strong>İşverenler (Açık Rızanız Halinde):</strong> Kariyer
                  fırsatlarından yararlanmak istemeniz ve profilinizin
                  işverenlerle paylaşılmasına açık rıza göstermeniz durumunda,
                  ilgili işverenler.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. İlgili Kişinin Hakları (KVKK Madde 11)
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                KVKK'nın 11. maddesi uyarınca, kişisel verilerinize ilişkin
                olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ol className="list-inside list-lower-alpha space-y-2 text-gray-700">
                <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                <li>
                  Kişisel verilerin işlenme amacını ve bunların amacına uygun
                  kullanılıp kullanılmadığını öğrenme,
                </li>
                <li>
                  Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
                  üçüncü kişileri bilme,
                </li>
                <li>
                  Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
                  bunların düzeltilmesini isteme,
                </li>
                <li>
                  KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel
                  verilerin silinmesini veya yok edilmesini isteme,
                </li>
                <li>
                  Yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü
                  kişilere bildirilmesini isteme,
                </li>
                <li>
                  İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
                  analiz edilmesi suretiyle kişinin kendisi aleyhine bir
                  sonucun ortaya çıkmasına itiraz etme,
                </li>
                <li>
                  Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
                  zarara uğraması hâlinde zararın giderilmesini talep etme.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Başvuru ve İletişim
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Yukarıda belirtilen haklarınızı kullanmak için taleplerinizi,
                kimliğinizi tevsik edici belgelerle birlikte yazılı olarak veya
                kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza,
                mobil imza ya da tarafınızca bize daha önce bildirilen ve
                sistemimizde kayıtlı bulunan elektronik posta adresini kullanmak
                suretiyle aşağıdaki iletişim kanallarından bize iletebilirsiniz:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <strong>Yazılı Başvuru:</strong> [Şirket Adresi Buraya
                  Eklenecek]
                </li>
                <li>
                  <strong>E-posta:</strong> kvkk@reflektif.net
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-700">
                Başvurularınız, niteliğine göre en kısa sürede ve en geç otuz
                (30) gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak,
                işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel
                Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret
                alınabilir.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
