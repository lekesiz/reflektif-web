export interface Customer {
  name: string;
  logo?: string;
  industry: string;
  size: "startup" | "kucuk" | "orta" | "buyuk" | "kurumsal";
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo?: string;
  challenge: string;
  solution: string;
  results: Result[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Result {
  metric: string;
  value: string;
  description: string;
}

export const customers: Customer[] = [
  { name: "Akbank", industry: "Bankacılık", size: "kurumsal" },
  { name: "Türk Telekom", industry: "Telekomünikasyon", size: "kurumsal" },
  { name: "Koç Holding", industry: "Holding", size: "kurumsal" },
  { name: "Sabancı Holding", industry: "Holding", size: "kurumsal" },
  { name: "THY", industry: "Havacılık", size: "kurumsal" },
  { name: "Arçelik", industry: "Üretim", size: "buyuk" },
  { name: "Migros", industry: "Perakende", size: "buyuk" },
  { name: "Eczacıbaşı", industry: "Holding", size: "kurumsal" },
  { name: "Logo Yazılım", industry: "Teknoloji", size: "buyuk" },
  { name: "Peak Games", industry: "Teknoloji", size: "orta" },
  { name: "Trendyol", industry: "E-Ticaret", size: "buyuk" },
  { name: "Hepsiburada", industry: "E-Ticaret", size: "buyuk" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "teknoloji-sirketi",
    company: "Teknoloji Şirketi",
    industry: "Teknoloji",
    challenge:
      "Yıllık 500+ yazılımcı alımı yapan şirket, geleneksel mülakat süreçleriyle adayları değerlendirmekte zorlanıyordu. İşe alım süresi ortalama 45 gün sürüyor, turnover oranı %35'i buluyordu.",
    solution:
      "Reflektif İK modülü ile teknik testler, kişilik envanteri ve video mülakat entegrasyonu kuruldu. AI destekli eşleştirme algoritmasıyla adaylar otomatik olarak sıralanmaya başladı.",
    results: [
      {
        metric: "İşe Alım Süresi",
        value: "%60",
        description: "45 günden 18 güne düştü",
      },
      {
        metric: "Turnover Oranı",
        value: "%40",
        description: "%35'ten %21'e düştü",
      },
      {
        metric: "Aday Memnuniyeti",
        value: "4.8/5",
        description: "NPS skoru %72 arttı",
      },
      {
        metric: "Maliyet Tasarrufu",
        value: "850K TL",
        description: "Yıllık İK maliyetlerinde",
      },
    ],
    quote: {
      text: "Reflektif ile işe alım süreçlerimiz tamamen dönüştü. Artık doğru adaylara çok daha hızlı ulaşabiliyoruz.",
      author: "Ayşe Kaya",
      role: "İK Direktörü",
    },
  },
  {
    id: "universite",
    company: "Büyük Üniversite",
    industry: "Eğitim",
    challenge:
      "15.000 öğrenciye hizmet veren üniversite, kariyer merkezi olarak bireysel danışmanlık veremiyordu. Mezun istihdam takibi yapılmıyordu.",
    solution:
      "Reflektif Kurum modülü ile tüm öğrencilere online değerlendirme imkanı sağlandı. Rehberlik paneli ve mezun takip sistemi kuruldu.",
    results: [
      {
        metric: "Öğrenci Erişimi",
        value: "12.000+",
        description: "Öğrenci değerlendirme tamamladı",
      },
      {
        metric: "Mezun İstihdamı",
        value: "%28",
        description: "İlk 6 ayda istihdam oranı arttı",
      },
      {
        metric: "Danışmanlık Verimi",
        value: "3x",
        description: "Rehber başına görüşme kapasitesi",
      },
      {
        metric: "Akreditasyon",
        value: "A+",
        description: "Kariyer hizmetleri puanı",
      },
    ],
    quote: {
      text: "Öğrencilerimize sunduğumuz kariyer hizmeti kalitesi tamamen değişti. Veriye dayalı rehberlik artık mümkün.",
      author: "Prof. Dr. Mehmet Öztürk",
      role: "Kariyer Merkezi Müdürü",
    },
  },
  {
    id: "perakende",
    company: "Perakende Zinciri",
    industry: "Perakende",
    challenge:
      "500+ mağazada yıllık 3.000+ satış danışmanı alımı yapan şirket, yüksek turnover ve düşük satış performansı sorunları yaşıyordu.",
    solution:
      "Reflektif İK ile oyun tabanlı değerlendirme ve kişilik envanteri entegrasyonu yapıldı. Satış yetkinlikleri için özel test modülü geliştirildi.",
    results: [
      {
        metric: "Satış Performansı",
        value: "%35",
        description: "Yeni alımlarda ortalama artış",
      },
      {
        metric: "Turnover",
        value: "%45",
        description: "İlk yıl ayrılma oranında düşüş",
      },
      {
        metric: "Eğitim Maliyeti",
        value: "1.2M TL",
        description: "Yıllık tasarruf",
      },
      {
        metric: "İşe Alım Hızı",
        value: "5 gün",
        description: "Ortalama işe alım süresi",
      },
    ],
    quote: {
      text: "Doğru insanı doğru mağazaya yerleştirmek artık çok daha kolay. Sonuçlar kendini gösteriyor.",
      author: "Can Demir",
      role: "Perakende Operasyonlar Direktörü",
    },
  },
];

export const industries = [
  "Teknoloji",
  "Bankacılık & Finans",
  "Perakende",
  "Sağlık",
  "Eğitim",
  "Lojistik",
  "Üretim",
  "Enerji",
  "Telekomünikasyon",
  "Danışmanlık",
];

export const companyStats = {
  totalCompanies: "150+",
  totalAssessments: "50.000+",
  totalUsers: "25.000+",
  averageNPS: "4.7/5",
  countries: "3",
  yearsExperience: "2+",
};
