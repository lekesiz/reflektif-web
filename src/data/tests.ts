export interface TestCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  duration: string;
  questionCount: string;
  tests: Test[];
  benefits: string[];
  useCases: string[];
}

export interface Test {
  name: string;
  description: string;
  duration: string;
  questions: number;
}

export const testCategories: TestCategory[] = [
  {
    id: "kisilik",
    slug: "kisilik-envanteri",
    name: "Kişilik Envanteri - RiT",
    description: "Reflektif Item Test ile çok boyutlu kişilik analizi",
    longDescription:
      "Reflektif Item Test (RiT), bireylerin kişilik özelliklerini, değerlerini ve potansiyel yetkinliklerini ölçen kapsamlı bir kişilik envanteridir. MBTI, Big Five ve Enneagram teorilerinden esinlenerek geliştirilen RiT, iş hayatında başarı için kritik olan kişilik faktörlerini analiz eder.",
    icon: "Brain",
    color: "primary",
    duration: "15-20 dakika",
    questionCount: "120+ soru",
    tests: [
      {
        name: "Temel Kişilik Analizi",
        description: "5 temel kişilik faktörü ölçümü",
        duration: "15 dk",
        questions: 60,
      },
      {
        name: "Değer Analizi",
        description: "Kişisel ve iş değerleri belirleme",
        duration: "10 dk",
        questions: 40,
      },
      {
        name: "Yetkinlik Potansiyeli",
        description: "Liderlik, iletişim, analitik düşünme",
        duration: "12 dk",
        questions: 50,
      },
      {
        name: "Pozisyon Uyumu",
        description: "Hedef pozisyona uygunluk skoru",
        duration: "8 dk",
        questions: 30,
      },
    ],
    benefits: [
      "11 farklı rapor türü",
      "Pozisyona özel uyum skoru",
      "Güçlü ve gelişim alanları belirleme",
      "Takım uyumu analizi",
      "Kariyer yönelim önerileri",
    ],
    useCases: [
      "İşe alım süreçlerinde aday değerlendirme",
      "Terfi ve yedekleme planlaması",
      "Takım oluşturma ve uyum analizi",
      "Kariyer danışmanlığı",
      "Kişisel gelişim planlama",
    ],
  },
  {
    id: "yetenek",
    slug: "genel-yetenek",
    name: "Genel Yetenek Testleri",
    description: "Sayısal, sözel ve analitik düşünme yeteneklerini ölçün",
    longDescription:
      "Genel Yetenek Testleri, adayların problem çözme, analitik düşünme ve öğrenme kapasitelerini ölçer. Dört boyutlu değerlendirme sistemi ile bireylerin bilişsel yeteneklerini kapsamlı şekilde analiz eder.",
    icon: "Lightbulb",
    color: "secondary",
    duration: "25-35 dakika",
    questionCount: "80+ soru",
    tests: [
      {
        name: "Sayısal Yetenek",
        description: "Matematiksel muhakeme ve problem çözme",
        duration: "10 dk",
        questions: 20,
      },
      {
        name: "Sözel Yetenek",
        description: "Okuduğunu anlama ve sözel muhakeme",
        duration: "10 dk",
        questions: 20,
      },
      {
        name: "Soyut Kavrama",
        description: "Örüntü tanıma ve mantıksal çıkarsama",
        duration: "8 dk",
        questions: 15,
      },
      {
        name: "Tablo ve Grafik Okuma",
        description: "Veri yorumlama ve analiz",
        duration: "7 dk",
        questions: 15,
      },
    ],
    benefits: [
      "IQ benzeri genel yetenek skoru",
      "Boyut bazlı detaylı analiz",
      "Normatif karşılaştırma",
      "Pozisyon bazlı benchmark",
      "Gelişim önerileri",
    ],
    useCases: [
      "Yeni mezun işe alımları",
      "Yönetici aday değerlendirme",
      "Stajyer seçimleri",
      "Potansiyel belirleme",
      "Eğitim ihtiyaç analizi",
    ],
  },
  {
    id: "dil",
    slug: "dil-testleri",
    name: "Dil Yeterlilik Testleri",
    description: "8 farklı dilde profesyonel seviye ölçümü",
    longDescription:
      "Dil Yeterlilik Testleri, adayların yabancı dil becerilerini CEFR (Avrupa Dil Portfolyosu) standartlarına uygun olarak ölçer. Okuma, yazma, dinleme ve gramer bilgisi boyutlarında kapsamlı değerlendirme sunar.",
    icon: "Languages",
    color: "accent",
    duration: "20-30 dakika",
    questionCount: "60+ soru",
    tests: [
      {
        name: "İngilizce",
        description: "A1-C2 seviye belirleme",
        duration: "25 dk",
        questions: 60,
      },
      {
        name: "Almanca",
        description: "A1-C1 seviye belirleme",
        duration: "25 dk",
        questions: 55,
      },
      {
        name: "Fransızca",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 50,
      },
      {
        name: "İspanyolca",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 50,
      },
      {
        name: "Arapça",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 45,
      },
      {
        name: "Rusça",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 45,
      },
    ],
    benefits: [
      "CEFR uyumlu seviye belirleme",
      "4 boyutlu yeterlilik analizi",
      "İş İngilizcesi özel modülü",
      "Sertifika karşılığı",
      "Gelişim yol haritası",
    ],
    useCases: [
      "Uluslararası pozisyon alımları",
      "Dil gereksinimi olan roller",
      "Yurtdışı görevlendirme",
      "Müşteri hizmetleri pozisyonları",
      "Çağrı merkezi alımları",
    ],
  },
  {
    id: "teknik",
    slug: "teknik-testler",
    name: "Bilişim ve Teknik Testler",
    description: "Yazılım, IT ve teknik bilgi seviyesi ölçümü",
    longDescription:
      "Bilişim ve Teknik Testler, adayların programlama dilleri, sistem yönetimi, veritabanı, güvenlik ve diğer teknik alanlardaki bilgi ve beceri seviyelerini ölçer. 50+ farklı teknoloji ve alanda değerlendirme imkanı sunar.",
    icon: "Code",
    color: "primary",
    duration: "30-45 dakika",
    questionCount: "50+ soru",
    tests: [
      {
        name: "Programlama Dilleri",
        description: "Python, JavaScript, Java, C#, Go",
        duration: "30 dk",
        questions: 40,
      },
      {
        name: "Veritabanı",
        description: "SQL, NoSQL, veritabanı tasarımı",
        duration: "20 dk",
        questions: 30,
      },
      {
        name: "DevOps & Cloud",
        description: "AWS, Azure, GCP, Docker, Kubernetes",
        duration: "25 dk",
        questions: 35,
      },
      {
        name: "Siber Güvenlik",
        description: "Ağ güvenliği, penetrasyon testi",
        duration: "25 dk",
        questions: 35,
      },
      {
        name: "Office & Bilişim Okuryazarlığı",
        description: "Excel, Word, PowerPoint, temel IT",
        duration: "15 dk",
        questions: 25,
      },
    ],
    benefits: [
      "50+ teknoloji ve alanda test",
      "Güncel soru bankası",
      "Kod yazma egzersizleri",
      "Seviye bazlı değerlendirme",
      "Sertifika eşleştirme",
    ],
    useCases: [
      "Yazılım geliştirici alımları",
      "IT pozisyonları",
      "Teknik destek rolleri",
      "Veri analisti seçimleri",
      "Siber güvenlik uzmanlığı",
    ],
  },
  {
    id: "oyun",
    slug: "oyun-tabanli",
    name: "Oyun Tabanlı Değerlendirme",
    description: "Gamification ile eğlenceli ve etkili ölçüm",
    longDescription:
      "Oyun Tabanlı Değerlendirme, geleneksel testlerin aksine interaktif oyunlar ve simülasyonlar aracılığıyla adayların yetkinliklerini ölçer. Stres altında karar verme, hız, dikkat ve problem çözme becerilerini eğlenceli bir deneyimle analiz eder.",
    icon: "Gamepad2",
    color: "secondary",
    duration: "15-25 dakika",
    questionCount: "5-8 oyun",
    tests: [
      {
        name: "Dikkat ve Odaklanma",
        description: "Görsel dikkat ve konsantrasyon ölçümü",
        duration: "5 dk",
        questions: 1,
      },
      {
        name: "Hızlı Karar Verme",
        description: "Baskı altında karar alma",
        duration: "5 dk",
        questions: 1,
      },
      {
        name: "Hafıza ve Öğrenme",
        description: "Kısa ve uzun süreli hafıza",
        duration: "5 dk",
        questions: 1,
      },
      {
        name: "Problem Çözme",
        description: "Yaratıcı çözüm üretme",
        duration: "8 dk",
        questions: 1,
      },
    ],
    benefits: [
      "Yüksek aday deneyimi",
      "Düşük terk oranı",
      "Bilinçsiz davranış ölçümü",
      "Z kuşağı uyumlu",
      "Mobil öncelikli tasarım",
    ],
    useCases: [
      "Toplu işe alım kampanyaları",
      "Genç yetenek programları",
      "Perakende ve hizmet sektörü",
      "Çağrı merkezi alımları",
      "Stajyer seçimleri",
    ],
  },
  {
    id: "simulasyon",
    slug: "dijital-simulasyon",
    name: "Dijital Rol Oynama",
    description: "Gerçek iş senaryoları ile yetkinlik ölçümü",
    longDescription:
      "Dijital Rol Oynama (Simülasyon), adayların iş hayatında karşılaşabilecekleri gerçekçi senaryolar üzerinden yetkinliklerini ölçer. Email yönetimi, toplantı simülasyonu, müşteri görüşmesi gibi interaktif egzersizlerle davranışsal yetkinlikleri analiz eder.",
    icon: "Theater",
    color: "accent",
    duration: "30-45 dakika",
    questionCount: "3-5 senaryo",
    tests: [
      {
        name: "Email Kutusu Egzersizi",
        description: "Önceliklendirme ve iletişim",
        duration: "15 dk",
        questions: 1,
      },
      {
        name: "Müşteri Görüşmesi",
        description: "İtiraz yönetimi ve ikna",
        duration: "10 dk",
        questions: 1,
      },
      {
        name: "Takım Toplantısı",
        description: "İşbirliği ve liderlik",
        duration: "12 dk",
        questions: 1,
      },
      {
        name: "Kriz Yönetimi",
        description: "Baskı altında karar alma",
        duration: "10 dk",
        questions: 1,
      },
    ],
    benefits: [
      "Gerçekçi iş ortamı simülasyonu",
      "Davranışsal yetkinlik ölçümü",
      "Video bazlı değerlendirme",
      "Pozisyona özel senaryolar",
      "Detaylı yetkinlik raporu",
    ],
    useCases: [
      "Yönetici işe alımları",
      "Satış pozisyonları",
      "Müşteri hizmetleri",
      "Proje yönetimi rolleri",
      "Liderlik değerlendirme",
    ],
  },
];

export const getTestCategoryBySlug = (slug: string): TestCategory | undefined => {
  return testCategories.find((t) => t.slug === slug);
};
