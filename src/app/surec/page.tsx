import { PageHeader } from "@/components/PageHeader";
import { CheckCircle, Brain, Target, TrendingUp, Users, FileText } from "lucide-react";
import Image from "next/image";

const SurecPage = () => {
  const stages = [
    {
      number: "1",
      title: "Hazırlık ve Keşif",
      description: "Bu aşamada, online platformumuz üzerinden kişilik, yetenek ve ilgi alanı envanterlerimizi tamamlarsınız. Amaç, mevcut durumunuzu, motivasyonlarınızı ve potansiyelinizi anlamaktır.",
      icon: Brain,
      features: [
        "Kişilik envanteri (RiT - Reflektif Item Test)",
        "Genel yetenek testleri",
        "İlgi ve hobi envanteri",
        "Mevcut durum analizi"
      ],
      duration: "2-3 saat",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "Araştırma ve Analiz",
      description: "Bir kariyer danışmanıyla birlikte test sonuçlarınızı analiz eder, potansiyel kariyer yollarını araştırır ve pazarın ihtiyaçlarıyla sizin yetkinliklerinizi karşılaştırırsınız.",
      icon: Target,
      features: [
        "AI destekli sonuç analizi",
        "Kariyer danışmanı görüşmesi",
        "Pazar araştırması",
        "Yetkinlik eşleştirme"
      ],
      duration: "3-4 saat",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Sonuç ve Eylem Planı",
      description: "Danışmanınızla birlikte, hedeflerinize ulaşmak için somut adımlardan oluşan bir kariyer eylem planı ve gelişim yol haritası oluşturursunuz.",
      icon: TrendingUp,
      features: [
        "Kişiselleştirilmiş kariyer yol haritası",
        "Gelişim eylem planı",
        "Eğitim önerileri",
        "Takip ve destek"
      ],
      duration: "2-3 saat",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Uzman Danışman Desteği",
      description: "Sertifikalı kariyer danışmanları ile birebir görüşme imkanı"
    },
    {
      icon: Brain,
      title: "AI Destekli Analiz",
      description: "Yapay zeka ile güçlendirilmiş kişiselleştirilmiş öneriler"
    },
    {
      icon: FileText,
      title: "Detaylı Raporlama",
      description: "15+ sayfalık kapsamlı kariyer analiz raporu"
    },
    {
      icon: CheckCircle,
      title: "Bilimsel Metodoloji",
      description: "Fransa'nın Bilan de Compétences modeline dayalı süreç"
    }
  ];

  return (
    <>
      <PageHeader
        title="Reflektif Kariyer Gelişim Süreci"
        description="Fransa'nın ünlü Bilan de Compétences modelinden ilham alan 3 aşamalı yapılandırılmış sürecimizle kariyerinize yön verin."
      />

      {/* Hero Image */}
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/pages/surec-hero.webp"
            alt="Reflektif Kariyer Gelişim Süreci"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Process Stages */}
      <section className="container mx-auto px-6 md:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3 Aşamalı Süreç</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Her aşama, kariyerinizde bilinçli kararlar almanız için gerekli içgörüleri sağlar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-primary-100 -z-10" />
                )}
                
                <div className="bg-white border-2 border-neutral-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Stage Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} text-white text-2xl font-bold mb-6 shadow-lg`}>
                    {stage.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6">{stage.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {stage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="pt-4 border-t border-neutral-100">
                    <span className="text-sm font-medium text-primary-600">
                      Süre: {stage.duration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-primary-50 to-purple-50 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sürecin Avantajları</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Reflektif süreci, kariyerinizde bilinçli kararlar almanız için ihtiyaç duyduğunuz tüm araçları sunar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-8 py-16">
        <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kariyerinize Yön Vermeye Hazır Mısınız?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ücretsiz temel testi yaparak sürece başlayın
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

export default SurecPage;
