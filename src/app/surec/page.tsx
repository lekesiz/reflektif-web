import { PageHeader } from "@/components/PageHeader";

const SurecPage = () => {
  return (
    <>
      <PageHeader
        title="Reflektif Kariyer Gelişim Süreci"
        description="Fransa'nın ünlü Bilan de Compétences modelinden ilham alan 3 aşamalı yapılandırılmış sürecimizle kariyerinize yön verin."
      />
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">1. Aşama: Hazırlık ve Keşif</h3>
            <p>Bu aşamada, online platformumuz üzerinden kişilik, yetenek ve ilgi alanı envanterlerimizi tamamlarsınız. Amaç, mevcut durumunuzu, motivasyonlarınızı ve potansiyelinizi anlamaktır.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">2. Aşama: Araştırma ve Analiz</h3>
            <p>Bir kariyer danışmanıyla birlikte test sonuçlarınızı analiz eder, potansiyel kariyer yollarını araştırır ve pazarın ihtiyaçlarıyla sizin yetkinliklerinizi karşılaştırırsınız.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">3. Aşama: Sonuç ve Eylem Planı</h3>
            <p>Danışmanınızla birlikte, hedeflerinize ulaşmak için somut adımlardan oluşan bir kariyer eylem planı ve gelişim yol haritası oluşturursunuz.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SurecPage;
