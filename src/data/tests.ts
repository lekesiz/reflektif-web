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
    name: "Kisilik Envanteri - RiT",
    description: "Reflektif Item Test ile cok boyutlu kisilik analizi",
    longDescription:
      "Reflektif Item Test (RiT), bireylerin kisilik ozelliklerini, degerlerini ve potansiyel yetkinliklerini olcen kapsamli bir kisilik envanteridir. MBTI, Big Five ve Enneagram teorilerinden esinlenerek gelistirilen RiT, is hayatinda basari icin kritik olan kisilik faktorlerini analiz eder.",
    icon: "Brain",
    color: "primary",
    duration: "15-20 dakika",
    questionCount: "120+ soru",
    tests: [
      {
        name: "Temel Kisilik Analizi",
        description: "5 temel kisilik faktoru olcumu",
        duration: "15 dk",
        questions: 60,
      },
      {
        name: "Deger Analizi",
        description: "Kisisel ve is degerleri belirleme",
        duration: "10 dk",
        questions: 40,
      },
      {
        name: "Yetkinlik Potansiyeli",
        description: "Liderlik, iletisim, analitik dusunme",
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
      "11 farkli rapor turu",
      "Pozisyona ozel uyum skoru",
      "Guclu ve gelisim alanlari belirleme",
      "Takim uyumu analizi",
      "Kariyer yonelim onerileri",
    ],
    useCases: [
      "Ise alim sureclerinde aday degerlendirme",
      "Terfi ve yedekleme planlamasi",
      "Takim olusturma ve uyum analizi",
      "Kariyer danismanligi",
      "Kisisel gelisim planlama",
    ],
  },
  {
    id: "yetenek",
    slug: "genel-yetenek",
    name: "Genel Yetenek Testleri",
    description: "Sayisal, sozel ve analitik dusunme yeteneklerini olcun",
    longDescription:
      "Genel Yetenek Testleri, adaylarin problem cozme, analitik dusunme ve ogrenme kapasitelerini olcer. Dort boyutlu degerlendirme sistemi ile bireylerin bilissel yeteneklerini kapsamli sekilde analiz eder.",
    icon: "Lightbulb",
    color: "secondary",
    duration: "25-35 dakika",
    questionCount: "80+ soru",
    tests: [
      {
        name: "Sayisal Yetenek",
        description: "Matematiksel muhakeme ve problem cozme",
        duration: "10 dk",
        questions: 20,
      },
      {
        name: "Sozel Yetenek",
        description: "Okudugunu anlama ve sozel muhakeme",
        duration: "10 dk",
        questions: 20,
      },
      {
        name: "Soyut Kavrama",
        description: "Oruntu tanima ve mantiksal cikarsama",
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
      "Boyut bazli detayli analiz",
      "Normatif karsilastirma",
      "Pozisyon bazli benchmark",
      "Gelisim onerileri",
    ],
    useCases: [
      "Yeni mezun ise alimlari",
      "Yonetici aday degerlendirme",
      "Stajyer secimleri",
      "Potansiyel belirleme",
      "Egitim ihtiyac analizi",
    ],
  },
  {
    id: "dil",
    slug: "dil-testleri",
    name: "Dil Yeterlilik Testleri",
    description: "8 farkli dilde profesyonel seviye olcumu",
    longDescription:
      "Dil Yeterlilik Testleri, adaylarin yabanci dil becerilerini CEFR (Avrupa Dil Portfolyosu) standartlarina uygun olarak olcer. Okuma, yazma, dinleme ve gramer bilgisi boyutlarinda kapsamli degerlendirme sunar.",
    icon: "Languages",
    color: "accent",
    duration: "20-30 dakika",
    questionCount: "60+ soru",
    tests: [
      {
        name: "Ingilizce",
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
        name: "Fransizca",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 50,
      },
      {
        name: "Ispanyolca",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 50,
      },
      {
        name: "Arapca",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 45,
      },
      {
        name: "Rusca",
        description: "A1-B2 seviye belirleme",
        duration: "20 dk",
        questions: 45,
      },
    ],
    benefits: [
      "CEFR uyumlu seviye belirleme",
      "4 boyutlu yeterlilik analizi",
      "Is Ingilizcesi ozel modulu",
      "Sertifika karsiligi",
      "Gelisim yol haritasi",
    ],
    useCases: [
      "Uluslararasi pozisyon alimlari",
      "Dil gereksinimi olan roller",
      "Yurtdisi gorevlendirme",
      "Musteri hizmetleri pozisyonlari",
      "Cagri merkezi alimlari",
    ],
  },
  {
    id: "teknik",
    slug: "teknik-testler",
    name: "Bilisim ve Teknik Testler",
    description: "Yazilim, IT ve teknik bilgi seviyesi olcumu",
    longDescription:
      "Bilisim ve Teknik Testler, adaylarin programlama dilleri, sistem yonetimi, veritabani, guvenlik ve diger teknik alanlardaki bilgi ve beceri seviyelerini olcer. 50+ farkli teknoloji ve alanda degerlendirme imkani sunar.",
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
        name: "Veritabani",
        description: "SQL, NoSQL, veritabani tasarimi",
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
        name: "Siber Guvenlik",
        description: "Ag guvenligi, penetrasyon testi",
        duration: "25 dk",
        questions: 35,
      },
      {
        name: "Office & Bilisim Okuryazarligi",
        description: "Excel, Word, PowerPoint, temel IT",
        duration: "15 dk",
        questions: 25,
      },
    ],
    benefits: [
      "50+ teknoloji ve alanda test",
      "Guncel soru bankasi",
      "Kod yazma egzersizleri",
      "Seviye bazli degerlendirme",
      "Sertifika eslestirme",
    ],
    useCases: [
      "Yazilim gelistirici alimlari",
      "IT pozisyonlari",
      "Teknik destek rolleri",
      "Veri analisti secimleri",
      "Siber guvenlik uzmanligi",
    ],
  },
  {
    id: "oyun",
    slug: "oyun-tabanli",
    name: "Oyun Tabanli Degerlendirme",
    description: "Gamification ile eglenceli ve etkili olcum",
    longDescription:
      "Oyun Tabanli Degerlendirme, geleneksel testlerin aksine interaktif oyunlar ve simulasyonlar araciligiyla adaylarin yetkinliklerini olcer. Stres altinda karar verme, hiz, dikkat ve problem cozme becerilerini eglenceli bir deneyimle analiz eder.",
    icon: "Gamepad2",
    color: "secondary",
    duration: "15-25 dakika",
    questionCount: "5-8 oyun",
    tests: [
      {
        name: "Dikkat ve Odaklanma",
        description: "Gorsel dikkat ve konsantrasyon olcumu",
        duration: "5 dk",
        questions: 1,
      },
      {
        name: "Hizli Karar Verme",
        description: "Baski altinda karar alma",
        duration: "5 dk",
        questions: 1,
      },
      {
        name: "Hafiza ve Ogrenme",
        description: "Kisa ve uzun sureli hafiza",
        duration: "5 dk",
        questions: 1,
      },
      {
        name: "Problem Cozme",
        description: "Yaratici cozum uretme",
        duration: "8 dk",
        questions: 1,
      },
    ],
    benefits: [
      "Yuksek aday deneyimi",
      "Dusuk terk orani",
      "Bilincsiz davranis olcumu",
      "Z kusagi uyumlu",
      "Mobil oncelikli tasarim",
    ],
    useCases: [
      "Toplu ise alim kampanyalari",
      "Genc yetenek programlari",
      "Perakende ve hizmet sektoru",
      "Cagri merkezi alimlari",
      "Stajyer secimleri",
    ],
  },
  {
    id: "simulasyon",
    slug: "dijital-simulasyon",
    name: "Dijital Rol Oynama",
    description: "Gercek is senaryolari ile yetkinlik olcumu",
    longDescription:
      "Dijital Rol Oynama (Simulasyon), adaylarin is hayatinda karsilasabilecekleri gercekci senaryolar uzerinden yetkinliklerini olcer. Email yonetimi, toplanti simulasyonu, musteri gorusmesi gibi interaktif egzersizlerle davranissal yetkinlikleri analiz eder.",
    icon: "Theater",
    color: "accent",
    duration: "30-45 dakika",
    questionCount: "3-5 senaryo",
    tests: [
      {
        name: "Email Kutusu Egzersizi",
        description: "Onceliklendirme ve iletisim",
        duration: "15 dk",
        questions: 1,
      },
      {
        name: "Musteri Gorusmesi",
        description: "Itiraz yonetimi ve ikna",
        duration: "10 dk",
        questions: 1,
      },
      {
        name: "Takim Toplantisi",
        description: "Isbirligi ve liderlik",
        duration: "12 dk",
        questions: 1,
      },
      {
        name: "Kriz Yonetimi",
        description: "Baski altinda karar alma",
        duration: "10 dk",
        questions: 1,
      },
    ],
    benefits: [
      "Gercekci is ortami simulasyonu",
      "Davranissal yetkinlik olcumu",
      "Video bazli degerlendirme",
      "Pozisyona ozel senaryolar",
      "Detayli yetkinlik raporu",
    ],
    useCases: [
      "Yonetici ise alimlari",
      "Satis pozisyonlari",
      "Musteri hizmetleri",
      "Proje yonetimi rolleri",
      "Liderlik degerlendirme",
    ],
  },
];

export const getTestCategoryBySlug = (slug: string): TestCategory | undefined => {
  return testCategories.find((t) => t.slug === slug);
};
