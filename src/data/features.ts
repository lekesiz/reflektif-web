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
    name: "Video Mülakat",
    shortDescription:
      "Asenkron video mülakatlar ile zaman ve mekandan bağımsız aday değerlendirme",
    longDescription:
      "Reflektif Video Mülakat, adayların önceden belirlenen sorulara video ile yanıt verdikleri asenkron mülakat sistemidir. Coğrafi engelleri ortadan kaldırır, işe alım süresini %70 kısaltır ve tüm adayları aynı sorularla değerlendirerek objektif karşılaştırma imkanı sunar.",
    icon: "Video",
    color: "primary",
    highlights: [
      "Asenkron mülakat - 7/24 erişim",
      "AI destekli video analizi",
      "Tek ve çok kişili değerlendirme",
      "Otomatik transkript oluşturma",
      "Mobil uyumlu kayıt",
    ],
    benefits: [
      {
        title: "Zaman Tasarrufu",
        description:
          "İK ekibiniz için mülakat süresini %70 azaltın. Adaylar uygun oldukları zaman kayıt yapabilir.",
        icon: "Clock",
      },
      {
        title: "Coğrafi Özgürlük",
        description:
          "Dünyanın her yerinden adayları değerlendirin. Seyahat masrafları ve koordinasyon zorlukları ortadan kalkar.",
        icon: "Globe",
      },
      {
        title: "Objektif Değerlendirme",
        description:
          "Tüm adaylara aynı sorular sorulur. Panel değerlendirme ile çoklu görüş alınabilir.",
        icon: "Scale",
      },
      {
        title: "AI Destekli Analiz",
        description:
          "Konuşma hızı, göz teması, beden dili ve içerik analizi ile detaylı değerlendirme raporu.",
        icon: "Brain",
      },
    ],
    useCases: [
      "Yüksek hacimli işe alım kampanyaları",
      "Uzak lokasyonlardan aday değerlendirme",
      "Uluslararası işe alımlar",
      "Stajyer ve yeni mezun programları",
      "Yönetici pozisyonları ön eleme",
    ],
    integrations: ["ATS sistemleri", "Microsoft Teams", "Google Meet", "Zoom"],
  },
  {
    id: "ats",
    slug: "basvuru-takip-sistemi",
    name: "Başvuru Takip Sistemi (ATS)",
    shortDescription:
      "Tüm işe alım sürecinizi tek platformdan yönetin",
    longDescription:
      "Reflektif ATS, iş ilanı yayınlamadan işe alıma kadar tüm süreci dijitalleştiren kapsamlı bir başvuru takip sistemidir. Aday havuzu yönetimi, otomatik değerlendirme, iş akışları ve entegre iletişim araçları ile işe alım süreçlerinizi hızlandırın.",
    icon: "Users",
    color: "secondary",
    highlights: [
      "İş ilanı yönetimi",
      "Aday havuzu ve CRM",
      "Otomatik değerlendirme",
      "Kanban tahta görünümü",
      "Entegre iletişim",
    ],
    benefits: [
      {
        title: "Merkezi Yönetim",
        description:
          "Tüm adaylar, ilanlar ve süreçler tek platformda. Karmaşık Excel tablolarına son.",
        icon: "LayoutDashboard",
      },
      {
        title: "Otomasyon",
        description:
          "Otomatik e-postalar, hatırlatmalar ve durum güncellemeleri. Manuel işleri minimize edin.",
        icon: "Zap",
      },
      {
        title: "İşbirliği",
        description:
          "Ekip üyeleri adayları değerlendirebilir, not ekleyebilir ve oylamalara katılabilir.",
        icon: "Users",
      },
      {
        title: "Raporlama",
        description:
          "İşe alım metrikleri, kaynak analizi ve süreç performans raporları ile veriye dayalı kararlar.",
        icon: "BarChart3",
      },
    ],
    useCases: [
      "Kurumsal işe alım departmanları",
      "İK danışmanlık firmaları",
      "Toplu işe alım süreçleri",
      "Çok lokasyonlu şirketler",
      "Hızlı büyüyen startup'lar",
    ],
    integrations: [
      "Kariyer siteleri",
      "LinkedIn",
      "Indeed",
      "E-posta sistemleri",
      "Takvim uygulamaları",
    ],
  },
  {
    id: "360-degerlendirme",
    slug: "360-degerlendirme",
    name: "360 Derece Değerlendirme",
    shortDescription:
      "Çok yönlü geri bildirim ile kapsamlı performans analizi",
    longDescription:
      "360 Derece Değerlendirme, çalışanların yöneticiler, eş düzey çalışanlar, astlar ve müşteriler dahil olmak üzere farklı kaynaklardan geri bildirim aldığı kapsamlı bir değerlendirme yöntemidir. Kör noktaları ortaya çıkarır ve gelişim alanlarını netleştirir.",
    icon: "RefreshCcw",
    color: "accent",
    highlights: [
      "Çok kaynaklı geri bildirim",
      "Anonim değerlendirme seçeneği",
      "Yetkinlik bazlı sorular",
      "Karşılaştırmalı raporlar",
      "Gelişim planı önerileri",
    ],
    benefits: [
      {
        title: "Bütünsel Görünüm",
        description:
          "Sadece yönetici değil, tüm paydaşlardan geri bildirim alarak tam resmi görün.",
        icon: "Eye",
      },
      {
        title: "Kör Nokta Keşfi",
        description:
          "Çalışanların farkında olmadığı güçlü ve zayıf yönlerini ortaya çıkarın.",
        icon: "Search",
      },
      {
        title: "Gelişim Odaklı",
        description:
          "Somut gelişim alanları belirlenerek kişiselleştirilmiş eğitim planları oluşturun.",
        icon: "TrendingUp",
      },
      {
        title: "Organizasyonel İçgörü",
        description:
          "Departman ve takım bazında yetkinlik haritaları ile stratejik kararlar alın.",
        icon: "PieChart",
      },
    ],
    useCases: [
      "Liderlik gelişim programları",
      "Yıllık performans değerlendirmeleri",
      "Yedekleme planlaması",
      "Organizasyonel gelişim projeleri",
      "Koçluk ve mentorluk programları",
    ],
  },
  {
    id: "yetkinlik-bazli",
    slug: "yetkinlik-bazli-degerlendirme",
    name: "Yetkinlik Bazlı Değerlendirme",
    shortDescription:
      "Pozisyon yetkinliklerine göre aday-iş uyumu analizi",
    longDescription:
      "Yetkinlik Bazlı Değerlendirme, her pozisyon için belirlenen kritik yetkinliklere göre adayları değerlendirir. Davranışsal göstergeler, seviye tanımları ve benchmark karşılaştırması ile en uygun adayı belirlemenize yardımcı olur.",
    icon: "Target",
    color: "primary",
    highlights: [
      "Pozisyon bazlı yetkinlik seti",
      "Davranışsal göstergeler",
      "Seviye bazlı değerlendirme",
      "Gap analizi",
      "Gelişim önerileri",
    ],
    benefits: [
      {
        title: "Doğru Eşleşme",
        description:
          "Aday yetkinlikleri ile pozisyon gereksinimleri arasındaki uyumu netleştirin.",
        icon: "Puzzle",
      },
      {
        title: "Objektif Kriter",
        description:
          "Kişisel yargılar yerine tanımlanmış yetkinlik kriterlerine göre değerlendirme.",
        icon: "CheckSquare",
      },
      {
        title: "Karşılaştırma",
        description:
          "Adayları aynı yetkinlik setine göre değerlendirerek kolay karşılaştırma.",
        icon: "GitCompare",
      },
      {
        title: "Gelişim Yol Haritası",
        description:
          "Eksik yetkinlikler için somut gelişim planları ve eğitim önerileri.",
        icon: "Map",
      },
    ],
    useCases: [
      "Yönetici işe alımları",
      "İç terfi kararları",
      "Yetenek havuzu oluşturma",
      "Kariyer planlama",
      "Eğitim ihtiyaç analizi",
    ],
  },
];

export const getFeatureBySlug = (slug: string): Feature | undefined => {
  return features.find((f) => f.slug === slug);
};
