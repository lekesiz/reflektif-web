export interface Feature {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  highlights: string[];
  benefits: Benefit[];
  useCases: string[];
  integrations?: string[];
  seoKeywords: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: "video-mulakat",
    slug: "video-mulakat",
    name: "AI Destekli Video Mülakat",
    shortDescription:
      "Asenkron video mülakatlar ile zaman ve mekandan bağımsız, önyargısız ve verimli aday değerlendirmesi.",
    longDescription:
      "Reflektif Video Mülakat, adayların önceden belirlenen sorulara video ile yanıt verdikleri asenkron bir mülakat sistemidir. Geleneksel mülakatların aksine, AI motorumuz adayların sadece ne söylediğini değil, nasıl söylediğini de analiz eder. Kelime seçimi, konuşma akıcılığı, duygu durumu ve iletişim becerileri gibi 50’den fazla parametreyi objektif olarak değerlendirerek size adayın yetkinlikleri ve potansiyeli hakkında derinlemesine bir içgörü sunar. Bu sayede işe alım sürenizi %70 kısaltır, daha adil bir süreç yürütür ve en doğru adayı bulma şansınızı artırırsınız.",
    icon: "Video",
    color: "primary",
    highlights: [
      "Asenkron mülakat - 7/24 erişim",
      "AI destekli duygu ve yetkinlik analizi",
      "Otomatik transkript ve anahtar kelime tespiti",
      "Önyargıyı azaltan objektif değerlendirme",
      "Mobil uyumlu ve kolay kullanım",
    ],
    benefits: [
      {
        title: "Verimlilik Artışı",
        description:
          "İK ekibinizin mülakat süresini %70 azaltın. Adaylar uygun oldukları zaman kayıt yapabilir, siz de toplu olarak izleyebilirsiniz.",
        icon: "Zap",
      },
      {
        title: "Objektif ve Adil Değerlendirme",
        description:
          "AI analizimiz, tüm adayları aynı bilimsel kriterlere göre değerlendirerek bilinçsiz önyargıları (cinsiyet, yaş, etnik köken) ortadan kaldırır.",
        icon: "Scale",
      },
      {
        title: "Derinlemesine Aday Analizi",
        description:
          "Adayın sadece cevaplarını değil, iletişim becerilerini, özgüvenini ve motivasyonunu da anlayın. CV’nin ötesine geçin.",
        icon: "BrainCircuit",
      },
      {
        title: "Gelişmiş Aday Deneyimi",
        description:
          "Adaylara esneklik sunan modern ve teknolojik bir işe alım deneyimi yaşatarak işveren markanızı güçlendirin.",
        icon: "Award",
      },
    ],
    useCases: [
      "Yüksek hacimli işe alım kampanyaları (Yeni mezun, stajyer)",
      "Uzak lokasyonlardan ve yurtdışından aday değerlendirme",
      "Satış, müşteri hizmetleri gibi iletişim yoğun roller",
      "Yönetici pozisyonları için ön eleme süreci",
    ],
    integrations: ["Tüm ATS sistemleri", "Microsoft Teams", "Google Meet", "Zoom"],
    seoKeywords: ["video mülakat", "ai işe alım", "asenkron mülakat", "dijital mülakat", "yapay zeka ik"],
  },
  {
    id: "raporlama",
    slug: "raporlama-ve-analitik",
    name: "Kişiselleştirilmiş Raporlama ve Analitik",
    shortDescription:
      "Veriyi anlama, anlamlandırma ve aksiyona dönüştürme. Size özel, anlaşılır ve derinlemesine raporlar.",
    longDescription:
      "Reflektif platformu, sadece veri toplayan bir araç değildir; o veriyi sizin için anlamlı ve eyleme geçirilebilir içgörülere dönüştüren bir analiz motorudur. Her test ve değerlendirme sonucunda, adayın veya çalışanın güçlü yönlerini, gelişim alanlarını, potansiyelini ve risklerini ortaya koyan 15’ten fazla farklı rapor türü sunuyoruz. Yönetici özetinden koçluk rehberine, mülakat sorularından kişisel gelişim planına kadar her ihtiyaca yönelik, görsel olarak zengin ve anlaşılır raporlarla karar verme sürecinizi kolaylaştırıyoruz.",
    icon: "BarChart3",
    color: "secondary",
    highlights: [
      "15+ farklı rapor türü (Yönetici, Aday, Koçluk vb.)",
      "Kişiselleştirilebilir ve markalanabilir raporlar",
      "Grafiksel ve görsel veri sunumu",
      "Karşılaştırmalı analiz (benchmark)",
      "Gelişim önerileri ve aksiyon planları",
    ],
    benefits: [
      {
        title: "Hızlı ve Doğru Kararlar",
        description:
          "Karmaşık verileri anlaşılır görsellerle sunarak yöneticilerin hızlı ve isabetli kararlar almasını sağlar.",
        icon: "Target",
      },
      {
        title: "Etkili Geri Bildirim",
        description:
          "Adaylara ve çalışanlara, gelişimlerini destekleyecek yapıcı ve somut geri bildirimler sunun.",
        icon: "MessageSquarePlus",
      },
      {
        title: "Stratejik İK Yönetimi",
        description:
          "Organizasyonun yetenek haritasını çıkarın, yetenek boşluklarını belirleyin ve geleceğe yönelik stratejik iş gücü planlaması yapın.",
        icon: "Map",
      },
      {
        title: "ROI Ölçümü",
        description:
          "İşe alım, eğitim ve gelişim programlarınızın yatırım getirisini (ROI) somut metriklerle ölçün ve yönetime sunun.",
        icon: "Percent",
      },
    ],
    useCases: [
      "İşe alım kararları ve aday karşılaştırma",
      "Performans değerlendirme ve geri bildirim seansları",
      "Liderlik ve yetenek gelişim programları",
      "Yedekleme planlaması ve kariyer yolu tasarımı",
    ],
    seoKeywords: ["ik analitiği", "yetenek raporlama", "performans raporu", "kişilik raporu", "insan kaynakları analitiği"],
  },
  {
    id: "360-degerlendirme",
    slug: "360-derece-degerlendirme",
    name: "360 Derece Geri Bildirim ve Performans",
    shortDescription:
      "Sürekli geri bildirim kültürü ile performansı ve gelişimi zirveye taşıyın.",
    longDescription:
      "360 Derece Değerlendirme, çalışanların sadece yöneticilerinden değil, aynı zamanda ekip arkadaşlarından, astlarından ve hatta müşterilerden geri bildirim aldığı bütünsel bir performans ve gelişim aracıdır. Platformumuz, bu süreci kolaylaştırarak, çalışanların ‘kör noktalarını’ keşfetmelerine, güçlü yönlerini pekiştirmelerine ve sürekli bir gelişim kültürü oluşturmanıza yardımcı olur. Yıllık performans değerlendirmelerinin ötesine geçerek, anlık ve yapıcı geri bildirimi kurum kültürünüzün bir parçası haline getirin.",
    icon: "RefreshCcw",
    color: "accent",
    highlights: [
      "Çok kaynaklı (yönetici, akran, ast) geri bildirim",
      "Anonim ve isme açık geri bildirim seçenekleri",
      "Yetkinlik bazlı ve davranış odaklı sorular",
      "Kişisel ve organizasyonel gelişim raporları",
      "Gelişim planı entegrasyonu",
    ],
    benefits: [
      {
        title: "Objektif ve Kapsamlı Performans Görünümü",
        description:
          "Performansı tek bir kişinin bakış açısından değil, çalışanın etkileşimde olduğu herkesin gözünden değerlendirin.",
        icon: "Users",
      },
      {
        title: "Gelişim Kültürü Oluşturma",
        description:
          "Geri bildirimi bir denetim aracı olmaktan çıkarıp, bir gelişim ve öğrenme fırsatına dönüştürün.",
        icon: "TrendingUp",
      },
      {
        title: "Liderlik Potansiyelini Ortaya Çıkarma",
        description:
          "Geleceğin liderlerinin iletişim, işbirliği ve etki yaratma gibi yetkinliklerini erken aşamada tespit edin.",
        icon: "Star",
      },
      {
        title: "Çalışan Bağlılığını Artırma",
        description:
          "Çalışanların sesini duyurun ve gelişimlerine yatırım yaptığınızı göstererek bağlılıklarını ve motivasyonlarını artırın.",
        icon: "HeartHandshake",
      },
    ],
    useCases: [
      "Liderlik ve yönetici gelişim programları",
      "Performans yönetimi ve değerlendirme süreçleri",
      "Takım içi işbirliğini ve iletişimi güçlendirme",
      "Organizasyonel değişim ve kültür dönüşümü projeleri",
    ],
    seoKeywords: ["360 derece değerlendirme", "performans yönetimi", "geri bildirim", "yetkinlik yönetimi", "liderlik gelişimi"],
  },
  {
    id: "entegrasyon",
    slug: "entegrasyon-ve-api",
    name: "Entegrasyon ve API",
    shortDescription:
      "Mevcut İK sistemlerinizle sorunsuz entegrasyon ve esnek API ile kendi çözümlerinizi geliştirin.",
    longDescription:
      "Reflektif, mevcut teknoloji yatırımınızı korumanızı ve iş akışlarınızı bozmamanızı hedefler. Bu nedenle, SAP, Workday, Oracle gibi önde gelen HRIS ve ATS sistemleriyle hazır entegrasyonlar sunuyoruz. Ayrıca, esnek ve güçlü API’miz sayesinde, Reflektif’in değerlendirme motorunu kendi iç sistemlerinize, web sitenize veya mobil uygulamanıza kolayca entegre edebilir, size özel çözümler yaratabilirsiniz.",
    icon: "Puzzle",
    color: "primary",
    highlights: [
      "Hazır HRIS ve ATS entegrasyonları",
      "RESTful API ile tam erişim",
      "Webhooks ile anlık bildirimler",
      "Kapsamlı API dokümantasyonu ve geliştirici desteği",
      "Güvenli ve ölçeklenebilir altyapı",
    ],
    benefits: [
      {
        title: "Sorunsuz İş Akışı",
        description:
          "Veri girişini ortadan kaldırın ve tüm İK süreçlerinizi tek bir akışta birleştirin. Aday ve çalışan verileri otomatik olarak senkronize olur.",
        icon: "Link",
      },
      {
        title: "Esneklik ve Özelleştirme",
        description:
          "API’mizi kullanarak kendi değerlendirme süreçlerinizi tasarlayın, raporlarınızı özelleştirin ve benzersiz işe alım hunileri oluşturun.",
        icon: "Settings2",
      },
      {
        title: "Gelişmiş Aday Deneyimi",
        description:
          "Değerlendirme sürecini kendi kariyer sayfanıza veya uygulamanıza gömerek adayların marka deneyimini kesintisiz hale getirin.",
        icon: "Smile",
      },
      {
        title: "Veri Güvenliği ve Bütünlüğü",
        description:
          "Tüm veri akışını güvenli protokoller üzerinden sağlayarak veri bütünlüğünü ve güvenliğini en üst düzeyde tutun.",
        icon: "ShieldCheck",
      },
    ],
    useCases: [
      "Mevcut bir ATS veya HRIS sistemine sahip büyük kurumlar",
      "Kendi kariyer portalını veya İK yazılımını geliştiren şirketler",
      "Değerlendirme sürecini kendi markası altında sunmak isteyen danışmanlık firmaları",
      "Online eğitim (LMS) platformları ile entegrasyon",
    ],
    integrations: ["SAP SuccessFactors", "Workday", "Oracle HCM", "Greenhouse", "Lever", "Tüm REST/JSON uyumlu sistemler"],
    seoKeywords: ["ik yazılım entegrasyonu", "ats entegrasyonu", "hris entegrasyonu", "ik api", "yetenek yönetimi api"],
  },
];

export const getFeatureBySlug = (slug: string): Feature | undefined => {
  return features.find((f) => f.slug === slug);
};
