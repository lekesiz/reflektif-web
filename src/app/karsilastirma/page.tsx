import { PageHeader } from "@/components/PageHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const KarsilastirmaPage = () => {
  return (
    <>
      <PageHeader
        title="Reflektif vs. Diğerleri: Neden Farklıyız?"
        description="Türkiye'de ve dünyada birçok yetenek değerlendirme aracı bulunuyor. Reflektif'in, Bilan de Compétences'ın yapılandırılmış sürecini, PİT'in pratikliğini ve Big Five'ın bilimsel derinliğini nasıl birleştirdiğini keşfedin."
      />
      <section className="container mx-auto px-6 md:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Sistem Karşılaştırması</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kriter</TableHead>
                <TableHead className="text-primary">Reflektif (Hibrit Model)</TableHead>
                <TableHead>Bilan de Compétences (Fransa)</TableHead>
                <TableHead>PİT (Türkiye)</TableHead>
                <TableHead>Global Modeller (Big Five, DISC)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Temel Amaç</TableCell>
                <TableCell className="text-primary">Bütünsel Kariyer Gelişimi ve Yetenek Yönetimi</TableCell>
                <TableCell>Kariyer yolu planlama, mesleki proje oluşturma</TableCell>
                <TableCell>İşe alım, yetenek yönetimi, pozisyon uyumu</TableCell>
                <TableCell>Bireysel farkındalık, takım dinamikleri</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Metodoloji</TableCell>
                <TableCell className="text-primary">3 Aşamalı Hibrit Süreç (Online Testler + Danışmanlık)</TableCell>
                <TableCell>Danışman liderliğinde 3 aşamalı süreç (24 saate kadar)</TableCell>
                <TableCell>Standartlaştırılmış online test (10-15 dk)</TableCell>
                <TableCell>Genellikle online testler</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Teorik Temel</TableCell>
                <TableCell className="text-primary">Big Five + Holland (RIASEC) + Yetkinlik Modelleri</TableCell>
                <TableCell>Fransa İş Kanunu ile düzenlenmiş yasal çerçeve</TableCell>
                <TableCell>Şirkete özgü model (Kişilik + Değerler)</TableCell>
                <TableCell>Bilimsel modeller (Big Five) veya davranışsal teoriler (DISC)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Çıktılar</TableCell>
                <TableCell className="text-primary">15+ Rapor, Kişisel Eylem Planı, Gelişim Yol Haritası</TableCell>
                <TableCell>Sentez raporu ve kişisel eylem planı</TableCell>
                <TableCell>11 farklı rapor türü</TableCell>
                <TableCell>Kişilik profili, gelişim önerileri</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Güçlü Yönleri</TableCell>
                <TableCell className="text-primary">Kapsamlı, Bilimsel, Pratik, Yerel ve Global</TableCell>
                <TableCell>Yapılandırılmış, yasal güvence, kişiye özel</TableCell>
                <TableCell>Hızlı, pratik, yerelleştirilmiş</TableCell>
                <TableCell>Bilimsel geçerlilik (Big Five), pratiklik (DISC)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Zayıf Yönleri</TableCell>
                <TableCell className="text-primary">Temel paket danışmanlık içermez</TableCell>
                <TableCell>Zaman alıcı, maliyetli</TableCell>
                <TableCell>Bilimsel temelinin derinliği daha az şeffaf</TableCell>
                <TableCell>Tek başına kullanıldığında eksik kalabilir</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default KarsilastirmaPage;
