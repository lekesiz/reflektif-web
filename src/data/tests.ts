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
  scientificBasis: string[];
  targetAudience: string[];
  sampleReport: string;
  seoKeywords: string[];
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
    description: "Reflektif Item Test ile çok boyutlu kişilik analizi. Kendinizi keşfedin, potansiyelinizi ortaya çıkarın.",
    longDescription:
      "Reflektif Item Test (RiT), bireylerin kişilik özelliklerini, değerlerini, motivasyonlarını ve potansiyel yetkinliklerini ölçen, Türkiye normlarına göre geliştirilmiş kapsamlı bir kişilik envanteridir. Big Five (Beş Faktör) ve Holland (RIASEC) teorilerini temel alan RiT, sadece kim olduğunuzu değil, aynı zamanda hangi kariyer yollarında mutlu ve başarılı olabileceğinizi de bilimsel verilerle ortaya koyar.",
    icon: "Brain",
    color: "primary",
    duration: "15-20 dakika",
    questionCount: "120+ soru",
    tests: [
      {
        name: "Big Five Kişilik Analizi",
        description: "5 temel kişilik faktörünüzü (Dışadönüklük, Duygusal Denge, Sorumluluk, Açıklık, Uyumluluk) ölçün.",
        duration: "10 dk",
        questions: 60,
      },
      {
        name: "Holland (RIASEC) Mesleki Yönelim",
        description: "Gerçekçi, Araştırmacı, Sanatçı, Sosyal, Girişimci, Geleneksel tiplerinden hangisine yatkın olduğunuzu keşfedin.",
        duration: "8 dk",
        questions: 48,
      },
      {
        name: "Kariyer Değerleri Envanteri",
        description: "Kariyerinizde sizin için neyin önemli olduğunu (Maaş, İş-Yaşam Dengesi, Gelişim vb.) belirleyin.",
        duration: "5 dk",
        questions: 30,
      },
    ],
    benefits: [
      "Kişisel farkındalık ve öz-anlayış",
      "Güçlü ve gelişim alanlarını belirleme",
      "Kariyer ve bölüm seçimi için bilimsel temel",
      "İlişkilerde ve iletişimde daha başarılı olma",
      "Stres yönetimi ve duygusal zeka gelişimi",
    ],
    useCases: [
      "Kariyer planlama ve meslek seçimi",
      "Üniversite bölümü ve alan seçimi",
      "İşe alım ve aday değerlendirme",
      "Takım oluşturma ve liderlik gelişimi",
      "Kişisel gelişim ve koçluk",
    ],
    scientificBasis: [
      "Big Five (Beş Faktör) Kişilik Modeli",
      "Holland (RIASEC) Mesleki Yönelim Teorisi",
      "ISO 10667 Değerlendirme Kalite Standardı",
    ],
    targetAudience: [
      "Lise ve üniversite öğrencileri",
      "Kariyer değiştirmek isteyen profesyoneller",
      "İK profesyonelleri ve işe alım yöneticileri",
      "Kariyer danışmanları ve koçlar",
    ],
    sampleReport: "/samples/kisilik-raporu.pdf",
    seoKeywords: ["kişilik testi", "big five", "holland kodu", "meslek seçimi", "riasec", "kişilik envanteri"],
  },
  {
    id: "yetenek",
    slug: "genel-yetenek",
    name: "Bilişsel Yetenek Testleri",
    description: "Sayısal, sözel, mantıksal ve uzamsal düşünme yeteneklerinizi ölçerek potansiyelinizi keşfedin.",
    longDescription:
      "Bilişsel Yetenek Testleri, bireylerin problem çözme, öğrenme hızı, analitik düşünme ve karar verme gibi zihinsel kapasitelerini ölçer. Cattell-Horn-Carroll (CHC) Zeka Teorisi’ne dayanan bu testler, akademik ve profesyonel başarıyı öngörmede en güvenilir araçlardan biridir. Reflektif, bu testlerle potansiyelinizi ortaya çıkarmanıza yardımcı olur.",
    icon: "Lightbulb",
    color: "secondary",
    duration: "25-35 dakika",
    questionCount: "80+ soru",
    tests: [
      {
        name: "Sayısal Akıl Yürütme",
        description: "Matematiksel problemleri çözme ve sayısal verileri yorumlama becerisi.",
        duration: "12 dk",
        questions: 20,
      },
      {
        name: "Sözel Akıl Yürütme",
        description: "Okuduğunu anlama, metinler arası ilişki kurma ve sözel mantık.",
        duration: "10 dk",
        questions: 20,
      },
      {
        name: "Soyut (Mantıksal) Akıl Yürütme",
        description: "Şekiller arasındaki örüntüleri tanıma, mantıksal çıkarımlar yapma ve problem çözme.",
        duration: "8 dk",
        questions: 15,
      },
      {
        name: "Uzamsal Yetenek",
        description: "Üç boyutlu düşünme, nesneleri zihinde döndürme ve mekansal ilişkileri anlama.",
        duration: "7 dk",
        questions: 15,
      },
    ],
    benefits: [
      "Öğrenme potansiyelini ve hızını anlama",
      "Problem çözme becerilerini geliştirme",
      "Akademik ve profesyonel başarıyı artırma",
      "Hangi alanlarda daha başarılı olunacağını öngörme",
      "Türkiye normlarına göre karşılaştırmalı sonuçlar",
    ],
    useCases: [
      "Yeni mezun ve stajyer işe alımları",
      "Yönetici adayı ve potansiyel belirleme programları",
      "Burs ve özel yetenek programı seçimleri",
      "Eğitim ve gelişim ihtiyaç analizi",
    ],
    scientificBasis: [
      "Cattell-Horn-Carroll (CHC) Zeka Teorisi",
      "Spearman'ın 'g' Faktörü (Genel Zeka)",
      "Raven's Progressive Matrices",
    ],
    targetAudience: [
      "Tüm seviyelerdeki öğrenciler ve profesyoneller",
      "İşe alım yöneticileri",
      "Eğitim kurumları",
    ],
    sampleReport: "/samples/yetenek-raporu.pdf",
    seoKeywords: ["genel yetenek testi", "iq testi", "bilişsel yetenek", "sayısal yetenek", "sözel yetenek", "mantık testi"],
  },
  {
    id: "hobi",
    slug: "hobi-envanteri",
    name: "Hobi & İlgi Alanı Envanteri",
    description: "Tutkularınızı kariyere dönüştürün. Hobilerinizin arkasındaki gizli yetenekleri ve meslekleri keşfedin.",
    longDescription:
      "Hobileriniz, sadece boş zaman aktiviteleriniz değil, aynı zamanda kim olduğunuzun, neye değer verdiğinizin ve hangi alanlarda doğal bir yeteneğe sahip olduğunuzun bir yansımasıdır. Reflektif Hobi & İlgi Alanı Envanteri, Türkiye’de bir ilk olarak, 150’den fazla hobi ve ilgi alanını analiz ederek bu aktivitelerin arkasındaki yetkinlikleri (problem çözme, stratejik düşünme, yaratıcılık vb.) ortaya çıkarır ve bu yetkinliklerin hangi profesyonel kariyerlerle eşleştiğini gösterir. Oyun oynamaktan el işi yapmaya, spor yapmaktan koleksiyonculuğa kadar tüm tutkularınız, kariyer yolculuğunuzda birer pusula olabilir.",
    icon: "Heart",
    color: "success",
    duration: "10-15 dakika",
    questionCount: "150+ hobi seçeneği",
    tests: [
      {
        name: "Geniş Kapsamlı Hobi Taraması",
        description: "10 farklı kategoride (Strateji, Yaratıcılık, Sosyal, Doğa vb.) 150+ hobiyi değerlendirin.",
        duration: "10 dk",
        questions: 150,
      },
      {
        name: "Hobi Derinlik Analizi",
        description: "En sevdiğiniz 3 hobide ne kadar zaman harcadığınızı, ne gibi başarılar elde ettiğinizi analiz edin.",
        duration: "5 dk",
        questions: 15,
      },
    ],
    benefits: [
      "Tutkularınızı profesyonel kariyere dönüştürme",
      "Doğal yeteneklerinizi ve gizli kalmış güçlü yönlerinizi keşfetme",
      "Kariyer tatminini ve motivasyonunu artırma",
      "Benzersiz ve kişisel bir kariyer yolu çizme",
      "CV'nize ve mülakatlarınıza ekleyebileceğiniz somut yetkinlikler bulma",
    ],
    useCases: [
      "Kariyerinin başında olan ve ne istediğini bilmeyen gençler",
      "Mevcut kariyerinden sıkılmış ve değişiklik arayan profesyoneller",
      "Emeklilik sonrası yeni bir uğraş arayanlar",
      "Öğrencilere kariyer danışmanlığı yapan rehber öğretmenler",
    ],
    scientificBasis: [
      "Strong İlgi Envanteri",
      "Yetkinlik Bazlı Kariyer Modellemesi",
      "Pozitif Psikoloji ve Akış (Flow) Teorisi",
    ],
    targetAudience: [
      "Her yaştan ve her seviyeden bireyler",
      "Kariyer danışmanları",
      "Yaşam koçları",
    ],
    sampleReport: "/samples/hobi-raporu.pdf",
    seoKeywords: ["hobi testi", "ilgi alanı envanteri", "meslek seçimi", "kariyer değişikliği", "tutkunu bul", "ne iş yapmalıyım"],
  },
  {
    id: "dil",
    slug: "dil-testleri",
    name: "Dil Yeterlilik Testleri",
    description: "8 farklı dilde okuma, yazma, dinleme ve konuşma becerilerinizi CEFR standartlarında ölçün.",
    longDescription:
      "Dil Yeterlilik Testleri, adayların yabancı dil becerilerini CEFR (Avrupa Ortak Dil Çerçevesi) standartlarına uygun olarak A1’den C2’ye kadar ölçer. AI destekli değerlendirme motorumuz, sadece gramer ve kelime bilginizi değil, aynı zamanda dilin akıcılığını, telaffuzunu ve pratik kullanımını da analiz eder.",
    icon: "Languages",
    color: "accent",
    duration: "20-30 dakika",
    questionCount: "60+ soru",
    tests: [
      {
        name: "İngilizce (Genel & İş İngilizcesi)",
        description: "A1-C2 seviye belirleme ve profesyonel iş İngilizcesi modülü.",
        duration: "25 dk",
        questions: 60,
      },
      {
        name: "Almanca",
        description: "A1-C1 seviye belirleme.",
        duration: "25 dk",
        questions: 55,
      },
      {
        name: "Fransızca",
        description: "A1-B2 seviye belirleme.",
        duration: "20 dk",
        questions: 50,
      },
      {
        name: "Diğer Diller",
        description: "İspanyolca, İtalyanca, Rusça, Arapça, Çince.",
        duration: "20 dk",
        questions: 50,
      },
    ],
    benefits: [
      "CEFR uyumlu uluslararası geçerlilikte sertifika",
      "4 temel beceri (okuma, yazma, dinleme, konuşma) analizi",
      "Gelişim için kişiselleştirilmiş yol haritası",
      "Sektöre özel (turizm, tıp, hukuk) kelime bilgisi ölçümü",
    ],
    useCases: [
      "Uluslararası şirketlere iş başvuruları",
      "Yurtdışı eğitim ve burs başvuruları",
      "Dil tazminatı ve seviye tespiti",
      "Turizm, dış ticaret gibi dil gerektiren pozisyonlar",
    ],
    scientificBasis: ["CEFR (Avrupa Ortak Dil Çerçevesi)", "ACTFL Yeterlilik Kılavuzları"],
    targetAudience: ["Öğrenciler", "Profesyoneller", "Kurumlar"],
    sampleReport: "/samples/dil-raporu.pdf",
    seoKeywords: ["ingilizce testi", "seviye tespit sınavı", "cefr", "almanca testi", "yabancı dil testi"],
  },
  {
    id: "simulasyon",
    slug: "dijital-simulasyon",
    name: "Durumsal Yargı ve Simülasyonlar",
    description: "Gerçek iş senaryoları ile problem çözme, liderlik ve iletişim gibi davranışsal yetkinliklerinizi ölçün.",
    longDescription:
      "Durumsal Yargı Testleri (SJT) ve Dijital Simülasyonlar, adayların iş hayatında karşılaşabilecekleri gerçekçi senaryolar karşısında nasıl davranacaklarını ölçer. Bir kriz anında nasıl karar verirsiniz? Zor bir müşteriyi nasıl ikna edersiniz? Bu testler, bilginizi değil, bilgiyi nasıl kullandığınızı, yani yetkinliklerinizi ortaya çıkarır.",
    icon: "Theater",
    color: "accent",
    duration: "30-45 dakika",
    questionCount: "3-5 senaryo",
    tests: [
      {
        name: "Liderlik Simülasyonu",
        description: "Bir takım lideri olarak zorlu bir projeyi yönetin, ekibinizi motive edin ve hedeflere ulaşın.",
        duration: "15 dk",
        questions: 1,
      },
      {
        name: "Satış ve İkna Simülasyonu",
        description: "Zorlu bir müşteriye ürün satmaya çalışın, itirazları karşılayın ve ilişki kurun.",
        duration: "10 dk",
        questions: 1,
      },
      {
        name: "Problem Çözme Vaka Analizi",
        description: "Bir iş problemini analiz edin, veri yorumlayın ve stratejik bir çözüm önerisi sunun.",
        duration: "12 dk",
        questions: 1,
      },
    ],
    benefits: [
      "Davranışsal yetkinliklerin objektif ölçümü",
      "Gerçek iş performansını yüksek doğrulukla öngörme",
      "Aday deneyimini zenginleştirme",
      "Pozisyona özel senaryolarla en uygun adayı bulma",
    ],
    useCases: [
      "Yönetici ve lider işe alımları",
      "Satış ve müşteri hizmetleri pozisyonları",
      "Yönetici Yetiştirme (MT) programları",
      "Yüksek potansiyelli çalışanları belirleme",
    ],
    scientificBasis: ["Durumsal Yargı Testleri (SJT) Metodolojisi", "Yetkinlik Bazlı Değerlendirme Modelleri"],
    targetAudience: ["Deneyimli profesyoneller", "Yönetici adayları", "Kurumsal şirketler"],
    sampleReport: "/samples/simulasyon-raporu.pdf",
    seoKeywords: ["durumsal yargı testi", "sjt", "vaka analizi", "rol oynama", "yetkinlik değerlendirme"],
  },
];

export const getTestCategoryBySlug = (slug: string): TestCategory | undefined => {
  return testCategories.find((t) => t.slug === slug);
};


// 404 hatalarını düzeltmek için eklenen yeni kategoriler

export const newTestCategories: TestCategory[] = [
  {
    id: "teknik",
    slug: "teknik-testler",
    name: "Teknik Yetkinlik Testleri",
    description: "Yazılım geliştirme, veri bilimi ve siber güvenlik gibi alanlarda teknik becerilerinizi ölçün.",
    longDescription:
      "Teknik Yetkinlik Testleri, adayların belirli bir teknoloji veya programlama dilindeki bilgi ve becerilerini ölçmek için tasarlanmıştır. Reflektif, 20’den fazla programlama dili ve teknoloji için (Python, Java, JavaScript, SQL, AWS, Azure vb.) kodlama testleri, proje simülasyonları ve çoktan seçmeli sorular sunar.",
    icon: "Code",
    color: "warning",
    duration: "30-60 dakika",
    questionCount: "15-30 soru",
    tests: [
      {
        name: "Python Geliştirici Testi",
        description: "Veri yapıları, algoritmalar ve OOP konularında Python bilginizi ölçün.",
        duration: "45 dk",
        questions: 20,
      },
      {
        name: "SQL Veritabanı Testi",
        description: "JOIN, GROUP BY, subquery gibi ileri seviye SQL sorgulama becerilerinizi test edin.",
        duration: "30 dk",
        questions: 15,
      },
    ],
    benefits: [
      "Teknik becerilerin objektif kanıtı",
      "İşe alım süreçlerinde avantaj",
      "Sertifika ile yetkinlik belgeleme",
    ],
    useCases: [
      "Yazılım geliştirici işe alımları",
      "Teknik ekip terfi süreçleri",
      "Bootcamp ve eğitim programı mezuniyet sınavları",
    ],
    scientificBasis: ["Yetkinlik Bazlı Değerlendirme", "Performans Tabanlı Test"],
    targetAudience: ["Yazılım geliştiriciler", "Veri bilimciler", "Sistem yöneticileri"],
    sampleReport: "/samples/teknik-raporu.pdf",
    seoKeywords: ["teknik test", "kodlama testi", "python testi", "sql testi", "yazılım testi"],
  },
  {
    id: "oyun",
    slug: "oyun-tabanli",
    name: "Oyun Tabanlı Değerlendirme",
    description: "Eğlenceli ve sürükleyici oyunlarla bilişsel yeteneklerinizi ve davranışsal eğilimlerinizi ölçün.",
    longDescription:
      "Oyun Tabanlı Değerlendirme, geleneksel testlerin yarattığı stresi ortadan kaldırarak adayların doğal davranışlarını ve potansiyellerini ölçmeyi hedefler. Reflektif, dikkat, hafıza, problem çözme gibi bilişsel yetenekleri ve risk alma, strateji kurma gibi davranışsal eğilimleri ölçen 10’dan fazla oyun sunar.",
    icon: "Gamepad2",
    color: "info",
    duration: "10-15 dakika",
    questionCount: "3-5 oyun",
    tests: [],
    benefits: [
      "Eğlenceli ve ilgi çekici aday deneyimi",
      "Doğal davranışların ölçümü",
      "Y ve Z kuşağına hitap etme",
    ],
    useCases: [
      "Yeni mezun ve stajyer işe alımları",
      "Yüksek hacimli işe alım süreçleri",
      "Marka imajını güçlendirme",
    ],
    scientificBasis: ["Gamification Teorileri", "Bilişsel Psikoloji"],
    targetAudience: ["Tüm adaylar", "Özellikle Y ve Z kuşağı"],
    sampleReport: "/samples/oyun-raporu.pdf",
    seoKeywords: ["oyun tabanlı değerlendirme", "gamification", "işe alım oyunları"],
  },
  {
    id: "risk",
    slug: "kariyer-risk-analizi",
    name: "Kariyer Risk Analizi",
    description: "Yapay zeka çağında mesleğinizin gelecekteki durumunu ve risk seviyesini öğrenin.",
    longDescription:
      "Kariyer Risk Analizi, yapay zeka ve otomasyonun iş piyasası üzerindeki etkilerini analiz ederek, mevcut veya hedeflediğiniz mesleğin gelecekte ne kadar risk altında olduğunu belirler. Analiz, mesleğinizin rutin görev oranını, yaratıcılık ve stratejik düşünme gereksinimlerini ve insan etkileşimi düzeyini değerlendirir.",
    icon: "ShieldAlert",
    color: "danger",
    duration: "5 dakika",
    questionCount: "10 soru",
    tests: [],
    benefits: [
      "Geleceğe yönelik kariyer planlaması",
      "Upskill ve reskill ihtiyaçlarını belirleme",
      "AI-proof bir kariyer yolu çizme",
    ],
    useCases: ["Tüm profesyoneller", "Kariyer danışmanları"],
    scientificBasis: ["Oxford Üniversitesi - Mesleklerin Geleceği Raporu"],
    targetAudience: ["Tüm profesyoneller"],
    sampleReport: "/samples/risk-raporu.pdf",
    seoKeywords: ["kariyer riski", "mesleklerin geleceği", "yapay zeka", "otomasyon"],
  },
];

// testCategories array'ini yeni kategorilerle birleştir
testCategories.push(...newTestCategories);
