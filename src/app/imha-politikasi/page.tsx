import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Kişisel Veri Saklama ve İmha Politikası | Reflektif",
  description:
    "Reflektif Kişisel Veri Saklama ve İmha Politikası. Kişisel verilerinizin nasıl saklandığı, ne kadar süreyle tutulduğu ve nasıl imha edildiği hakkında detaylı bilgi.",
  keywords:
    "kişisel veri saklama, imha politikası, veri güvenliği, KVKK, Reflektif",
};

export default function ImhaPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PageHeader
        title="Kişisel Veri Saklama ve İmha Politikası"
        description="Kişisel verilerinizin saklanması ve imhasına ilişkin politikamız"
      />

      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p className="mb-6 text-sm text-gray-600">
              <strong>Son Güncelleme Tarihi:</strong> 29 Ocak 2026
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 1: Giriş
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                1.1. Amaç
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Bu Kişisel Veri Saklama ve İmha Politikası ("Politika"),
                Reflektif Bilişim Teknolojileri A.Ş. ("Reflektif" veya "Şirket")
                tarafından "Veri Sorumlusu" sıfatıyla, 6698 sayılı Kişisel
                Verilerin Korunması Kanunu ("KVKK") ve ilgili diğer mevzuat
                uyarınca kişisel verilerin saklanması ve imhasına ilişkin usul ve
                esasları belirlemek amacıyla hazırlanmıştır.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Reflektif, kişisel verilerin işlenmesinde olduğu gibi, bu
                verilerin saklanması ve imhası süreçlerinde de hukuka uygun,
                şeffaf ve sorumlu bir yaklaşım benimsemektedir.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                1.2. Kapsam
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Bu Politika; çalışanlarımız, çalışan adaylarımız, hizmet
                sağlayıcılarımız, ziyaretçilerimiz, platform kullanıcılarımız ve
                herhangi bir nedenle Şirketimiz nezdinde kişisel verisi bulunan
                diğer tüm üçüncü kişilere ait kişisel verileri kapsamaktadır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 2: Sorumluluk ve Görev Dağılımları
              </h2>
              <p className="leading-relaxed text-gray-700">
                Kişisel verilerin saklanması ve imhası süreçlerinin hukuka uygun
                bir şekilde yönetilmesinden Şirket yönetimi ve tüm çalışanlar
                sorumludur. Bu kapsamda, teknik ve idari tedbirlerin alınması,
                çalışanların eğitilmesi ve farkındalığın artırılması için gerekli
                tüm aksiyonlar Şirketimiz tarafından alınır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 3: Kayıt Ortamları
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Kişisel veriler, Şirketimiz tarafından aşağıda listelenen
                ortamlarda güvenli bir şekilde saklanmaktadır:
              </p>
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Elektronik Ortamlar:
                </h3>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>Sunucular (Alan adı, e-posta, veritabanı)</li>
                  <li>Yazılımlar (Platform yazılımları, ofis uygulamaları)</li>
                  <li>
                    Bilgi güvenliği cihazları (Güvenlik duvarı, yedekleme
                    üniteleri)
                  </li>
                  <li>Kişisel bilgisayarlar ve mobil cihazlar</li>
                  <li>Bulut depolama hizmetleri</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Fiziksel Ortamlar:
                </h3>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>Şirket arşivleri</li>
                  <li>Basılı dokümanlar (Sözleşmeler, formlar, raporlar)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 4: Teknik ve İdari Tedbirler
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Kişisel verilerin güvenli bir şekilde saklanması, hukuka aykırı
                olarak işlenmesinin ve erişilmesinin önlenmesi ile hukuka uygun
                olarak imha edilmesi için Şirketimiz tarafından KVKK'nın 12.
                maddesi uyarınca gerekli tüm teknik ve idari tedbirler
                alınmaktadır.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4.1. Teknik Tedbirler
              </h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Ağ güvenliği ve uygulama güvenliği sağlanmaktadır.</li>
                <li>
                  Bilgi güvenliği olay yönetimi ile anlık müdahale imkanları
                  bulunmaktadır.
                </li>
                <li>
                  Erişim yetki matrisleri ve yetki kontrolleri uygulanmaktadır.
                </li>
                <li>
                  Veri maskeleme, şifreleme ve sızma (penetrasyon) testleri gibi
                  güvenlik önlemleri alınmaktadır.
                </li>
                <li>
                  Veri kaybını önlemek için düzenli yedekleme yapılmaktadır.
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                4.2. İdari Tedbirler
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  Kişisel veri işlemeye başlamadan önce Aydınlatma Yükümlülüğü
                  yerine getirilmektedir.
                </li>
                <li>
                  Çalışanlar için veri güvenliği konusunda farkındalık eğitimleri
                  düzenlenmektedir.
                </li>
                <li>Kişisel veri işleme envanteri hazırlanmıştır.</li>
                <li>Kurum içi periyodik denetimler yapılmaktadır.</li>
                <li>Gizlilik taahhütnameleri imzalanmaktadır.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 5: Kişisel Verileri İmha Yöntemleri
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Kişisel verilerin imhası, verinin niteliğine ve bulunduğu kayıt
                ortamına göre aşağıdaki yöntemlerle gerçekleştirilir:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        İmha Yöntemi
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Uygulama Alanı
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Açıklama
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Silme
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Elektronik Ortam
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Veritabanı komutları (DELETE, DROP) veya dosya silme
                        komutları ile verilerin ilgili kullanıcılar için
                        erişilemez hale getirilmesi.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Yok Etme
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Fiziksel Ortam
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Kağıt imha makineleri (shredder) ile belgelerin okunamaz
                        hale getirilmesi.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Yok Etme
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Elektronik Ortam
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Fiziksel olarak sunucuların veya disklerin eritilmesi,
                        yakılması veya manyetik alanla bozulması (degaussing)
                        gibi geri döndürülemez işlemler.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Anonim Hale Getirme
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Elektronik Ortam
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Verilerin maskeleme, gruplama, veri türetme gibi
                        yöntemlerle kimliği belirli bir kişiyle
                        ilişkilendirilemeyecek hale getirilmesi. Özellikle yapay
                        zeka model eğitimlerinde bu yöntem kullanılır.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 6: Saklama ve İmha Süreleri
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Şirketimiz, kişisel verileri işlendikleri amaç için gerekli olan
                ve ilgili yasal mevzuatta öngörülen süreler kadar muhafaza
                etmektedir. Bu süreler, veri kategorisi ve işleme amacına göre
                değişiklik göstermektedir.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Veri Kategorisi
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Saklama Süresi
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        İmha Süresi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Kullanıcı Hesap Bilgileri
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Üyelik devam ettiği sürece ve sonrasında 10 yıl (Türk
                        Borçlar Kanunu)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Saklama süresinin bitimini takip eden ilk periyodik imha
                        döneminde
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Test ve Analiz Verileri
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Üyelik devam ettiği sürece
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Üyeliğin sona ermesinden sonraki ilk periyodik imha
                        döneminde anonimleştirilir
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Trafik Bilgileri (Log Kayıtları)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        2 yıl (5651 sayılı Kanun)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Saklama süresinin bitimini takip eden ilk periyodik imha
                        döneminde
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Çalışan Adayı Verileri
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2 yıl</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Saklama süresinin bitimini takip eden ilk periyodik imha
                        döneminde
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        Muhasebe ve Finans Verileri
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        10 yıl (Türk Ticaret Kanunu, Vergi Usul Kanunu)
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Saklama süresinin bitimini takip eden ilk periyodik imha
                        döneminde
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 leading-relaxed text-gray-700">
                <strong>Periyodik İmha Süresi:</strong> Şirketimiz, periyodik
                imha işlemlerini her yıl <strong>Haziran</strong> ve{" "}
                <strong>Aralık</strong> aylarında olmak üzere 6 aylık periyotlarla
                gerçekleştirir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                BÖLÜM 7: Politikanın Yayınlanması ve Güncellenmesi
              </h2>
              <p className="leading-relaxed text-gray-700">
                Bu Politika, Şirketimizin internet sitesinde yayınlanarak kamuya
                duyurulur. Politikada, mevzuat değişiklikleri veya Şirket
                kararları doğrultusunda değişiklik yapılması halinde, güncel
                Politika yine aynı yöntemle kamuoyu ile paylaşılır.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
