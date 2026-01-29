import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Award, Users, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

const BilimselTemelPage = () => {
  const models = [
    {
      title: "Big Five (Beş Faktör) Kişilik Modeli",
      description: "Psikoloji alanında en geniş kabul gören ve bilimsel geçerliliği en yüksek modeldir. Kişiliği beş ana boyutta (Açıklık, Sorumluluk, Dışa Dönüklük, Uyumluluk, Duygusal Denge) ölçer.",
      application: "Reflektif Item Test (RiT), bu modeli temel alarak kişilik özelliklerinizi kapsamlı bir şekilde analiz eder.",
      dimensions: [
        "Açıklık (Openness)",
        "Sorumluluk (Conscientiousness)",
        "Dışa Dönüklük (Extraversion)",
        "Uyumluluk (Agreeableness)",
        "Duygusal Denge (Neuroticism)"
      ],
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Holland (RIASEC) Mesleki Yönelim Teorisi",
      description: "İnsanların altı temel mesleki kişilik tipine ayrıldığını ve bu tiplere uygun iş ortamlarında daha mutlu ve başarılı olduklarını savunur.",
      application: "Reflektif, ilgi alanlarınızı ve kişilik özelliklerinizi bu modelle eşleştirerek size en uygun kariyer yollarını önerir.",
      dimensions: [
        "Gerçekçi (Realistic)",
        "Araştırmacı (Investigative)",
        "Sanatçı (Artistic)",
        "Sosyal (Social)",
        "Girişimci (Enterprising)",
        "Geleneksel (Conventional)"
      ],
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Yetkinlik Bazlı Değerlendirme Modelleri",
      description: "Bir pozisyonda başarı için gerekli olan bilgi, beceri ve davranışları (yetkinlikleri) tanımlar.",
      application: "Reflektif, liderlik, problem çözme, iletişim gibi 50'den fazla standart yetkinliği veya size özel oluşturulmuş modelleri kullanarak, potansiyelinizi ve mevcut yetkinlik seviyenizi ölçer.",
      dimensions: [
        "Liderlik ve Yönetim",
        "Problem Çözme",
        "İletişim Becerileri",
        "Takım Çalışması",
        "Adaptasyon Yeteneği"
      ],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const references = [
    {
      author: "Goldberg, L. R. (1990)",
      title: "An alternative \"description of personality\": The Big-Five factor structure.",
      journal: "Journal of Personality and Social Psychology, 59(6), 1216–1229.",
      link: "#"
    },
    {
      author: "Holland, J. L. (1997)",
      title: "Making vocational choices: A theory of vocational personalities and work environments.",
      journal: "Psychological Assessment Resources.",
      link: "#"
    },
    {
      author: "Spencer, L. M., & Spencer, S. M. (1993)",
      title: "Competence at work: Models for superior performance.",
      journal: "John Wiley & Sons.",
      link: "#"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Bilimsel Geçerlilik",
      description: "Tüm testlerimiz, psikometri alanında kabul görmüş teorilere dayanır"
    },
    {
      icon: CheckCircle,
      title: "Güvenilir Sonuçlar",
      description: "Yüksek güvenilirlik katsayıları ile tutarlı ölçümler"
    },
    {
      icon: Users,
      title: "Geniş Norm Grubu",
      description: "50.000+ kullanıcı verisiyle oluşturulmuş Türkiye norm grubu"
    },
    {
      icon: TrendingUp,
      title: "Sürekli Gelişim",
      description: "Akademik araştırmalar ve kullanıcı geri bildirimleriyle sürekli iyileştirme"
    }
  ];

  return (
    <>
      <PageHeader
        title="Bilimsel ve Metodolojik Yaklaşımımız"
        description="Reflektif, sadece pratik değil, aynı zamanda bilimsel olarak da sağlam temellere dayanır. Değerlendirme sistemimiz, psikometri alanında dünyada en çok kabul gören teorileri temel alır."
      />

      {/* Hero Image */}
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-purple-50">
          <Image
            src="/images/pages/bilimsel-temel-hero.png"
            alt="Bilimsel ve Metodolojik Yaklaşımımız"
            fill
            className="object-contain p-8"
            priority
          />
        </div>
      </section>

      {/* Models */}
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Temel Aldığımız Modeller</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Değerlendirme sistemimiz, psikometri alanında dünyada en çok kabul gören ve bilimsel geçerliliği yüksek modelleri temel alır.
          </p>
        </div>

        <div className="space-y-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={index} className="bg-white border-2 border-neutral-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                    <p className="text-neutral-700 mb-4">{model.description}</p>
                    
                    {/* Dimensions */}
                    <div className="bg-neutral-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold mb-3 text-sm text-neutral-600">Boyutlar:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {model.dimensions.map((dimension, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{dimension}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Application */}
                    <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-4">
                      <p className="text-sm text-neutral-700">
                        <span className="font-semibold text-primary-700">Reflektif'te Uygulanışı:</span> {model.application}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-primary-50 to-purple-50 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bilimsel Yaklaşımımızın Avantajları</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Reflektif, bilimsel temellere dayalı değerlendirme sistemiyle güvenilir ve geçerli sonuçlar sunar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="container mx-auto px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Referanslar</h2>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900 mb-1">{ref.author}</p>
                    <p className="text-neutral-700 mb-1">{ref.title}</p>
                    <p className="text-sm text-neutral-500 italic">{ref.journal}</p>
                  </div>
                  <a href={ref.link} className="text-primary-600 hover:text-primary-700 flex-shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-8 py-16">
        <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bilimsel Temelli Değerlendirmeyi Deneyimleyin
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ücretsiz temel testi yaparak başlayın
          </p>
          <a
            href="/kayit"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
          >
            Ücretsiz Başla
          </a>
        </div>
      </section>
    </>
  );
};

export default BilimselTemelPage;
