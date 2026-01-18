export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: Author;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "ise-alim",
    name: "İşe Alım",
    slug: "ise-alim",
    description: "İşe alım süreçleri, en iyi uygulamalar ve trendler",
  },
  {
    id: "degerlendirme",
    name: "Değerlendirme",
    slug: "degerlendirme",
    description: "Test ve değerlendirme yöntemleri, araçları",
  },
  {
    id: "ik-teknoloji",
    name: "İK Teknolojisi",
    slug: "ik-teknoloji",
    description: "HR Tech trendleri, dijital dönüşüm",
  },
  {
    id: "kariyer",
    name: "Kariyer Gelişimi",
    slug: "kariyer",
    description: "Kariyer planlama, kişisel gelişim",
  },
  {
    id: "arastirma",
    name: "Araştırma",
    slug: "arastirma",
    description: "Sektör araştırmaları ve raporlar",
  },
  {
    id: "psikoloji-kisisel-gelisim",
    name: "Psikoloji & Kişisel Gelişim",
    slug: "psikoloji-kisisel-gelisim",
    description: "Kişilik, motivasyon, stres yönetimi ve kariyer tatmini",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "2025-i    title: "2025 İşe Alım Trendleri: AI ve Yetenek Ekonomisi",
    excerpt:
      "2025 işe alım dünyasını şekillendiren yapay zeka, beceri bazlı işe alım ve yeşil dönüşüm gibi kritik trendleri World Economic Forum verileriyle keşfedin.",
    content: `
## 2025: İşe Alımda Yeni Bir Çağın Başlangıcı

2025 yılı, işe alım dünyası için bir dönüm noktası niteliği taşıyor. **World Economic Forum'un 2025 İşlerin Geleceği Raporu**'na göre, teknolojik değişim, jeoekonomik parçalanma ve yeşil dönüşüm gibi makro trendler, küresel iş gücü piyasasını kökten değiştiriyor [1]. Bu değişim rüzgarı, şirketlerin yetenekleri nasıl bulduğunu, değerlendirdiğini ve işe aldığını yeniden şekillendiriyor. Peki, 2025'te İK profesyonellerini ve adayları neler bekliyor?

## Trend 1: Yapay Zeka (AI) İşe Alımın Merkezinde

Yapay zeka, artık sadece bir yardımcı araç değil, işe alım süreçlerinin ana motoru haline geliyor. WEF raporuna göre, şirketlerin **%86'sı** AI ve büyük veri teknolojilerinin işlerini dönüştürmesini bekliyor [1]. Bu dönüşüm, işe alımda şu alanlarda kendini gösteriyor:

- **Akıllı Aday Eşleştirme**: AI algoritmaları, adayların yeteneklerini ve potansiyellerini analiz ederek, açık pozisyonlarla en uygun eşleşmeleri saniyeler içinde yapabiliyor.
- **Otomatik Süreç Yönetimi**: Özgeçmiş taramasından mülakat planlamasına, aday iletişiminden değerlendirme raporlarının oluşturulmasına kadar birçok süreç otomatize ediliyor.
- **Tahminsel Analizler**: AI, geçmiş verileri analiz ederek hangi adayın başarılı olma olasılığının daha yüksek olduğunu tahmin edebiliyor, böylece işe alım hatalarını minimize ediyor.

> **İstatistik**: Araştırmalar, AI kullanan şirketlerin işe alım süresini **%40**'a kadar kısalttığını ve aday kalitesini **%35** artırdığını gösteriyor [2].

## Trend 2: Beceri Bazlı İşe Alım (Skills-First Hiring)

WEF raporu, 2025-2030 döneminde mevcut yetenek setlerinin **%39'unun** güncelliğini yitireceğini öngörüyor [1]. Bu durum, geleneksel diploma ve deneyim odaklı işe alım anlayışını yıkıyor. Artık şirketler, bir adayın hangi okuldan mezun olduğundan çok, hangi becerilere sahip olduğuna odaklanıyor. 

**Beceri bazlı işe alımın avantajları:**

| Avantaj | Açıklama |
|---|---|
| **Geniş Yetenek Havuzu** | Geleneksel olmayan geçmişe sahip yetenekli adaylara kapı açar. |
| **Artan Çeşitlilik** | Önyargıları azaltarak daha çeşitli ve kapsayıcı bir iş gücü oluşturur. |
| **Yüksek Performans** | Pozisyon için gerekli becerilere sahip adaylar daha hızlı adapte olur ve daha yüksek performans gösterir. |

## Trend 3: Yeşil Dönüşüm ve Yeşil Yakalı İşler

İklim değişikliği ile mücadele, yeni bir iş kategorisi yaratıyor: **yeşil yakalı işler**. WEF'e göre, yenilenebilir enerji mühendisleri, çevre mühendisleri ve otonom araç uzmanları en hızlı büyüyen meslekler arasında yer alıyor [1]. Bu trend, sadece mühendislik alanında değil, aynı zamanda sürdürülebilirlik danışmanlığı, yeşil pazarlama ve çevre hukuku gibi alanlarda da yeni kariyer fırsatları doğuruyor.

## Trend 4: Aday Deneyimi ve Şeffaflık

Yetenek kıtlığının arttığı bir dönemde, adaylar artık sadece bir iş aramıyor, aynı zamanda bir deneyim arıyor. Şirketler, adayları birer "müşteri" olarak görmeye başlıyor. Bu yaklaşım, şu unsurları ön plana çıkarıyor:

- **Hızlı ve Şeffaf İletişim**: Adaylara sürecin her aşamasında düzenli ve net bilgi vermek.
- **Kişiselleştirilmiş Yaklaşım**: Adayın ilgi alanlarına ve kariyer hedeflerine uygun bir iletişim kurmak.
- **Esneklik**: Uzaktan veya hibrit çalışma modelleri sunmak.

## Sonuç: Geleceğe Hazır Olmak

2025 ve sonrası, işe alımda proaktif, teknoloji odaklı ve insanı merkeze alan bir yaklaşım gerektiriyor. Şirketlerin başarılı olmak için yapay zekayı etkin bir şekilde kullanması, beceri odaklı bir işe alım kültürü benimsemesi ve aday deneyimine yatırım yapması kaçınılmaz. Adaylar için ise sürekli öğrenme ve yeni beceriler kazanma, kariyerlerini geleceğe taşımanın anahtarı olacak.

### Referanslar
[1] World Economic Forum. (2025). *The Future of Jobs Report 2025*. [https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/](https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/)
[2] Demand Sage. (2026). *AI Recruitment Statistics 2026*. [https://www.demandsage.com/ai-recruitment-statistics/](https://www.demandsage.com/ai-recruitment-statistics/)
    ` category: blogCategories[0],
    author: {
      name: "Dr. Elif Yılmaz",
      role: "İK Araştırma Direktörü",
    },
    publishedAt: "2025-01-10",
    readTime: "8 dk",
    featured: true,
    tags: ["işe alım", "yapay zeka", "2025 trendleri", "HR tech"],
  },
  {
    id: "2",
    slug: "kisilik-testleri-rehberi",
    title: "İşe Alımda Kişilik Testleri: Kapsamlı Rehber",
    excerpt:
      "Kişilik testlerinin işe alımda nasıl kullanıldığını, farklı test türlerini ve doğru test seçiminin önemini anlatan kapsamlı rehber.",
    content: `
## Kişilik Testleri Nedir?

Kişilik testleri, bireylerin davranış kalıplarını, değerlerini ve tercihlerini ölçen standardize araçlardır. İşe alımda doğru aday-pozisyon eşleşmesi için kritik öneme sahiptir.

## Popüler Kişilik Test Türleri

### 1. Big Five (Beş Faktör Modeli)
- Açıklık
- Sorumluluk
- Dışadönüklük
- Uyumluluk
- Duygusal Denge

### 2. MBTI
16 farklı kişilik tipini belirleyen yaygın kullanılan bir araç.

### 3. DISC
Davranış tarzlarını dört ana kategoride inceler.

## Doğru Test Seçimi

Test seçerken dikkat edilmesi gerekenler:
- Bilimsel geçerlilik
- Güvenilirlik
- Pozisyona uygunluk
- Hukuki uyumluluk

## Sonuç

Kişilik testleri, doğru kullanıldığında işe alım süreçlerinin kalitesini önemli ölçüde artırır.
    `,
    category: blogCategories[1],
    author: {
      name: "Prof. Dr. Ahmet Kaya",
      role: "Endüstriyel Psikolog",
    },
    publishedAt: "2025-01-08",
    readTime: "10 dk",
    featured: true,
    tags: ["kişilik testi", "işe alım", "Big Five", "değerlendirme"],
  },
  {
    id: "3",
    slug: "video-mulakat-ipuclari",
    title: "Video Mülakat: İK Profesyonelleri için İpuçları",
    excerpt:
      "Asenkron video mülakatların etkin kullanımı, soru hazırlama teknikleri ve değerlendirme kriterleri hakkında pratik bilgiler.",
    content: `
## Video Mülakatın Yükselişi

Pandemi sonrası video mülakatlar, işe alımın vazgeçilmez bir parçası haline geldi. Asenkron formatı sayesinde zaman ve maliyet tasarrufu sağlanıyor.

## Etkili Soru Hazırlama

### Davranışsal Sorular
- "Bize zor bir müşteriyle nasıl başa çıktığınızı anlatır mısınız?"
- "Ekibinizle bir anlaşmazlık yaşadığınız bir durumu paylaşır mısınız?"

### Durumsal Sorular
- "Bu senaryoda nasıl hareket ederdiniz?"
- "X durumunda öncelikleriniz ne olurdu?"

## Değerlendirme Kriterleri

1. İletişim becerileri
2. Problem çözme yaklaşımı
3. Kültürel uyum
4. Teknik yetkinlik

## En İyi Uygulamalar

- Net talimatlar verin
- Pratik yapma imkanı sunun
- Makul süre tanıyın
- Hızlı geri bildirim verin

## Sonuç

Video mülakatlar, doğru kurgulandığında işe alım kalitesini artırır ve adaylar için olumlu deneyim sunar.
    `,
    category: blogCategories[0],
    author: {
      name: "Zeynep Arslan",
      role: "İşe Alım Uzmanı",
    },
    publishedAt: "2025-01-05",
    readTime: "6 dk",
    featured: false,
    tags: ["video mülakat", "işe alım", "mülakat teknikleri"],
  },
  {
    id: "4",
    slug: "yetenek-testleri-karsilastirma",
    title: "Yetenek Testleri Karşılaştırması: Hangisini Seçmeli?",
    excerpt:
      "Sayısal, sözel ve analitik yetenek testlerinin karşılaştırmalı analizi ve pozisyona göre test seçim rehberi.",
    content: `
## Yetenek Testleri Nedir?

Yetenek testleri, bireylerin bilişsel kapasitelerini ve öğrenme potansiyellerini ölçer. İşe alımda gelecek performansın önemli bir göstergesidir.

## Test Türleri

### 1. Sayısal Yetenek
- Matematiksel muhakeme
- Veri yorumlama
- Grafik okuma

### 2. Sözel Yetenek
- Okuduğunu anlama
- Sözel muhakeme
- Eleştirel düşünme

### 3. Soyut Yetenek
- Örüntü tanıma
- Mantıksal çıkarsama
- Mekansal zeka

## Pozisyona Göre Test Seçimi

| Pozisyon | Önerilen Testler |
|----------|-----------------|
| Finans | Sayısal, Analitik |
| Pazarlama | Sözel, Yaratıcılık |
| Mühendislik | Sayısal, Soyut |
| Yönetici | Tüm alanlar |

## Sonuç

Doğru test kombinasyonu, pozisyonun gereksinimlerine göre belirlenmelidir.
    `,
    category: blogCategories[1],
    author: {
      name: "Dr. Can Öztürk",
      role: "Test Geliştirme Uzmanı",
    },
    publishedAt: "2025-01-02",
    readTime: "7 dk",
    featured: false,
    tags: ["yetenek testi", "IQ testi", "değerlendirme", "işe alım"],
  },
  {
    id: "5",
    slug: "ats-sistemleri-karsilastirma",
    title: "ATS Sistemleri: 2025 Karşılaştırma Rehberi",
    excerpt:
      "Başvuru takip sistemlerinin (ATS) karşılaştırması, özellik analizi ve şirketiniz için doğru ATS seçim kriterleri.",
    content: `
## ATS Nedir?

Applicant Tracking System (ATS), işe alım sürecinin başından sonuna kadar yönetilmesini sağlayan yazılım sistemleridir.

## Temel Özellikler

### Olmazsa Olmaz Özellikler
- İlan yönetimi
- Aday veritabanı
- İş akışı otomasyonu
- Raporlama

### Gelişmiş Özellikler
- AI destekli eşleştirme
- Video mülakat entegrasyonu
- Kariyer sitesi entegrasyonu
- Mobil uygulama

## Seçim Kriterleri

1. **Ölçeklenebilirlik**: Şirketinizin büyümesiyle birlikte sistem de büyüyebilmeli
2. **Entegrasyon**: Mevcut sistemlerinizle uyumlu çalışmalı
3. **Kullanıcı Deneyimi**: Hem İK hem adaylar için kolay kullanılmalı
4. **Destek**: Türkçe destek ve yerel uzmanlık

## Sonuç

ATS seçimi, şirketinizin büyüklüğüne, ihtiyaçlarına ve bütçesine göre yapılmalıdır.
    `,
    category: blogCategories[2],
    author: {
      name: "Murat Demir",
      role: "HR Tech Danışmanı",
    },
    publishedAt: "2024-12-28",
    readTime: "9 dk",
    featured: false,
    tags: ["ATS", "HR tech", "işe alım yazılımı", "otomasyon"],
  },
  {
    id: "6",
    slug: "z-kusagi-ise-alim",
    title: "Z Kuşağı İşe Alımı: Ne Bekliyorlar?",
    excerpt:
      "Z kuşağı çalışanların işe alım sürecinden beklentileri, motivasyon faktörleri ve onlara nasıl ulaşılacağına dair ipuçları.",
    content: `
## Z Kuşağı Kimdir?

1997-2012 yılları arasında doğan Z kuşağı, dijital çağın yerlileridir. İş hayatındaki beklentileri ve değerleri önceki kuşaklardan farklılık gösterir.

## İşe Alım Beklentileri

### 1. Hızlı ve Dijital Süreç
- Mobil başvuru
- Anlık geri bildirim
- Gamification elementleri

### 2. Şeffaflık
- Net maaş bilgisi
- Kariyer yolu
- Şirket kültürü hakkında içgörü

### 3. Değerler Uyumu
- Sürdürülebilirlik
- Çeşitlilik ve kapsayıcılık
- Sosyal sorumluluk

## Etkili Stratejiler

1. Sosyal medyada aktif olun
2. Employer branding'e yatırım yapın
3. Esnek çalışma sunun
4. Gelişim fırsatları vurgulayın

## Sonuç

Z kuşağını çekmek için işe alım süreçlerini modernize etmek ve değerleri ön plana çıkarmak gerekiyor.
    `,
    category: blogCategories[0],
    author: {
      name: "Selin Yıldız",
      role: "Employer Branding Uzmanı",
    },
    publishedAt: "2024-12-25",
    readTime: "6 dk",
    featured: true,
    tags: ["Z kuşağı", "işe alım", "employer branding", "çalışan deneyimi"],
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getBlogPostsByCategory = (categorySlug: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category.slug === categorySlug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured);
};

,  {
    id: "7",
    slug: "dogru-kariyer-secimi-rehberi",
    title: "Doğru Kariyer Seçimi: Kişilik, Yetenek ve Değerler Üçgeni",
    excerpt: "Kariyer yolculuğunuzda doğru kararları nasıl alırsınız? Kişilik tipiniz, yetenekleriniz ve kişisel değerleriniz arasındaki dengeyi bularak tatmin edici bir kariyere ulaşmanın yolları.",
    content: `
## Kariyer Seçimi: Bir Hayat Kararı

Kariyer seçimi, hayatımızdaki en önemli kararlardan biridir. Sadece maddi kazanç değil, aynı zamanda kişisel tatmin, mutluluk ve yaşam kalitemizi de doğrudan etkiler. Peki, bu kadar önemli bir kararı alırken nelere dikkat etmeliyiz? Cevap, üç temel unsurun kesişiminde yatıyor: **kişilik, yetenek ve değerler**.

## 1. Kişiliğinizi Tanıyın: Kimsiniz?

Kişilik, davranışlarımızı, düşüncelerimizi ve duygularımızı şekillendiren temel yapıdır. İçe dönük müsünüz, yoksa dışa dönük mü? Detaycı ve analitik mi, yoksa yaratıcı ve büyük resmi gören mi? Bu soruların cevapları, hangi çalışma ortamında daha mutlu ve verimli olacağınızı belirler.

### Popüler Kişilik Modelleri

- **Big Five (Beş Faktör Modeli)**: Açıklık, Sorumluluk, Dışadönüklük, Uyumluluk ve Duygusal Denge olmak üzere beş temel kişilik özelliğini inceler.
- **MBTI (Myers-Briggs Tip Göstergesi)**: 16 farklı kişilik tipi üzerinden bireylerin tercihlerini analiz eder.

> **Reflektif Notu**: Reflektif platformu, bilimsel temelli kişilik envanterleri ile sizin için en uygun çalışma ortamını ve rollerini belirlemenize yardımcı olur.

## 2. Yeteneklerinizi Keşfedin: Nelerde İyisiniz?

Yetenekler, doğuştan gelen veya sonradan geliştirilen becerilerimizdir. Hangi konularda doğal bir eğiliminiz var? Hangi işleri yaparken zamanın nasıl geçtiğini anlamıyorsunuz? Yeteneklerinizi doğru bir şekilde belirlemek, kariyerinizde başarılı ve fark yaratan bir profesyonel olmanızı sağlar.

| Yetenek Türü | Örnekler |
|---|---|
| **Analitik Yetenekler** | Problem çözme, eleştirel düşünme, veri analizi |
| **Sosyal Yetenekler** | İletişim, empati, liderlik, ikna |
| **Yaratıcı Yetenekler** | Tasarım, yazma, inovasyon, sanatsal ifade |
| **Teknik Yetenekler** | Programlama, mühendislik, veri bilimi |

## 3. Değerlerinizi Belirleyin: Sizin İçin Ne Önemli?

Değerler, hayatımıza yön veren temel inançlarımız ve prensiplerimizdir. Kariyerinizde sizin için neyin önemli olduğunu belirlemek, uzun vadeli mutluluk ve tatmin için kritiktir.

**Kendinize sormanız gereken sorular:**

- Benim için maddi kazanç mı, yoksa iş-yaşam dengesi mi daha önemli?
- Yaratıcılığımı kullanabileceğim bir iş mi, yoksa istikrarlı ve güvenli bir iş mi tercih ederim?
- Topluma fayda sağlamak benim için bir motivasyon kaynağı mı?

## Kesişim Noktası: İdeal Kariyeriniz

İdeal kariyer, bu üç unsurun kesiştiği noktada bulunur:

- **Kişiliğinize uygun** bir çalışma ortamı
- **Yeteneklerinizi kullanabildiğiniz** ve geliştirebildiğiniz bir rol
- **Değerlerinizle örtüşen** bir iş anlamı

## Sonuç: Bilinçli Bir Seçim Yapın

Doğru kariyer seçimi, bir gecede verilecek bir karar değildir. Kendinizi tanımak, araştırma yapmak ve farklı seçenekleri değerlendirmek için zaman ayırmanız gerekir. Reflektif gibi platformlar, bu yolculukta size bilimsel verilerle rehberlik ederek, kişiliğiniz, yetenekleriniz ve değerlerinizle uyumlu, tatmin edici bir kariyere ulaşmanıza yardımcı olabilir.

Unutmayın, en iyi kariyer, sadece iyi para kazandığınız değil, aynı zamanda her sabah sizi heyecanla yataktan kaldıran iştir.
    `,
    category: blogCategories[4],
    author: {
      name: "Manus AI",
      role: "Yapay Zeka Kariyer Danışmanı",
    },
    publishedAt: "2025-01-18",
    readTime: "12 dk",
    featured: true,
    tags: ["kariyer seçimi", "kişilik", "yetenek", "değerler", "kişisel gelişim"],
  }
