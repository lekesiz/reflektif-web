import { PageHeader } from "@/components/PageHeader";

const BilimselTemelPage = () => {
  return (
    <>
      <PageHeader
        title="Bilimsel ve Metodolojik Yaklaşımımız"
        description="Reflektif, sadece pratik değil, aynı zamanda bilimsel olarak da sağlam temellere dayanır. Değerlendirme sistemimiz, psikometri alanında dünyada en çok kabul gören teorileri temel alır."
      />
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="prose max-w-none">
          <h2>Temel Aldığımız Modeller</h2>
          <h3>1. Big Five (Beş Faktör) Kişilik Modeli</h3>
          <p>
            Psikoloji alanında en geniş kabul gören ve bilimsel geçerliliği en yüksek modeldir. Kişiliği beş ana boyutta (Açıklık, Sorumluluk, Dışa Dönüklük, Uyumluluk, Duygusal Denge) ölçer. Reflektif Item Test (RiT), bu modeli temel alarak kişilik özelliklerinizi kapsamlı bir şekilde analiz eder.
          </p>
          <h3>2. Holland (RIASEC) Mesleki Yönelim Teorisi</h3>
          <p>
            İnsanların altı temel mesleki kişilik tipine (Gerçekçi, Araştırmacı, Sanatçı, Sosyal, Girişimci, Geleneksel) ayrıldığını ve bu tiplere uygun iş ortamlarında daha mutlu ve başarılı olduklarını savunur. Reflektif, ilgi alanlarınızı ve kişilik özelliklerinizi bu modelle eşleştirerek size en uygun kariyer yollarını önerir.
          </p>
          <h3>3. Yetkinlik Bazlı Değerlendirme Modelleri</h3>
          <p>
            Bir pozisyonda başarı için gerekli olan bilgi, beceri ve davranışları (yetkinlikleri) tanımlar. Reflektif, liderlik, problem çözme, iletişim gibi 50’den fazla standart yetkinliği veya size özel oluşturulmuş modelleri kullanarak, potansiyelinizi ve mevcut yetkinlik seviyenizi ölçer.
          </p>
          <h2>Referanslar</h2>
          <ul>
            <li>Goldberg, L. R. (1990). An alternative "description of personality": The Big-Five factor structure. <em>Journal of Personality and Social Psychology, 59</em>(6), 1216–1229.</li>
            <li>Holland, J. L. (1997). <em>Making vocational choices: A theory of vocational personalities and work environments</em>. Psychological Assessment Resources.</li>
            <li>Spencer, L. M., & Spencer, S. M. (1993). <em>Competence at work: Models for superior performance</em>. John Wiley & Sons.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BilimselTemelPage;
