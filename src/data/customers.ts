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
  { name: "TechCorp", industry: "Teknoloji", size: "buyuk" },
  { name: "FinBank", industry: "Bankacilik", size: "kurumsal" },
  { name: "RetailMax", industry: "Perakende", size: "buyuk" },
  { name: "HealthPlus", industry: "Saglik", size: "orta" },
  { name: "EduTech", industry: "Egitim", size: "orta" },
  { name: "LogiTrans", industry: "Lojistik", size: "buyuk" },
  { name: "MediaGroup", industry: "Medya", size: "orta" },
  { name: "AutoMotive", industry: "Otomotiv", size: "kurumsal" },
  { name: "ConsultPro", industry: "Danismanlik", size: "kucuk" },
  { name: "FoodChain", industry: "Gida", size: "buyuk" },
  { name: "EnerjiCo", industry: "Enerji", size: "kurumsal" },
  { name: "TelekomX", industry: "Telekomunikasyon", size: "kurumsal" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "techcorp",
    company: "TechCorp",
    industry: "Teknoloji",
    challenge:
      "Yillik 500+ yazilimci alimi yapan TechCorp, geleneksel mulakat surecleriyle adaylari degerlendirmekte zorlaniyordu. Ise alim suresi ortalama 45 gun suruyor, turnover orani %35'i buluyordu.",
    solution:
      "Reflektif IK modulu ile teknik testler, kisilik envanteri ve video mulakat entegrasyonu kuruldu. AI destekli eslestirme algoritmasiyla adaylar otomatik olarak siralanmaya basladi.",
    results: [
      {
        metric: "Ise Alim Suresi",
        value: "%60",
        description: "45 gunden 18 gune dustu",
      },
      {
        metric: "Turnover Orani",
        value: "%40",
        description: "%35'ten %21'e dustu",
      },
      {
        metric: "Aday Memnuniyeti",
        value: "4.8/5",
        description: "NPS skoru %72 artti",
      },
      {
        metric: "Maliyet Tasarrufu",
        value: "850K TL",
        description: "Yillik IK maliyetlerinde",
      },
    ],
    quote: {
      text: "Reflektif ile ise alim sureclerimiz tamamen donustu. Artik dogru adaylara cok daha hizli ulasabiliyoruz.",
      author: "Ayse Kaya",
      role: "IK Direktoru, TechCorp",
    },
  },
  {
    id: "edutech",
    company: "EduTech Universitesi",
    industry: "Egitim",
    challenge:
      "15.000 ogrenciye hizmet veren universite, kariyer merkezi olarak bireysel danismanlik veremiyordu. Mezun istihdam takibi yapilmiyordu.",
    solution:
      "Reflektif Kurum modulu ile tum ogrencilere online degerlendirme imkani saglandi. Rehberlik paneli ve mezun takip sistemi kuruldu.",
    results: [
      {
        metric: "Ogrenci Erisimi",
        value: "12.000+",
        description: "Ogrenci degerlendirme tamamladi",
      },
      {
        metric: "Mezun Istihdami",
        value: "%28",
        description: "Ilk 6 ayda istihdam orani artti",
      },
      {
        metric: "Danismanlik Verimi",
        value: "3x",
        description: "Rehber basina gorusme kapasitesi",
      },
      {
        metric: "Akreditasyon",
        value: "A+",
        description: "Kariyer hizmetleri puani",
      },
    ],
    quote: {
      text: "Ogrencilerimize sundugumuz kariyer hizmeti kalitesi tamamen degisti. Veriye dayali rehberlik artik mumkun.",
      author: "Prof. Dr. Mehmet Ozturk",
      role: "Kariyer Merkezi Muduru",
    },
  },
  {
    id: "retailmax",
    company: "RetailMax",
    industry: "Perakende",
    challenge:
      "500+ magazada yillik 3.000+ satis danismani alimi yapan RetailMax, yuksek turnover ve dusuk satis performansi sorunlari yasiyordu.",
    solution:
      "Reflektif IK ile oyun tabanli degerlendirme ve kisilik envanteri entegrasyonu yapildi. Satis yetkinlikleri icin ozel test modulu gelistirildi.",
    results: [
      {
        metric: "Satis Performansi",
        value: "%35",
        description: "Yeni alimlarda ortalama artis",
      },
      {
        metric: "Turnover",
        value: "%45",
        description: "Ilk yil ayrilma oraninda dusus",
      },
      {
        metric: "Egitim Maliyeti",
        value: "1.2M TL",
        description: "Yillik tasarruf",
      },
      {
        metric: "Ise Alim Hizi",
        value: "5 gun",
        description: "Ortalama ise alim suresi",
      },
    ],
    quote: {
      text: "Dogru insani dogru magazaya yerlestirmek artik cok daha kolay. Sonuclar kendini gosteriyor.",
      author: "Can Demir",
      role: "Perakende Operasyonlar Direktoru",
    },
  },
];

export const industries = [
  "Teknoloji",
  "Bankacilik & Finans",
  "Perakende",
  "Saglik",
  "Egitim",
  "Lojistik",
  "Uretim",
  "Enerji",
  "Telekomunikasyon",
  "Danismanlik",
];

export const companyStats = {
  totalCompanies: "500+",
  totalAssessments: "250.000+",
  totalUsers: "100.000+",
  averageNPS: "4.7/5",
  countries: "3",
  yearsExperience: "5+",
};
