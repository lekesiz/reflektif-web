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
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "2025-ise-alim-trendleri",
    title: "2025 İşe Alım Trendleri: Yapay Zeka ve İnsan Odaklı Yaklaşım",
    excerpt:
      "2025 yılında işe alım dünyasını şekillendirecek temel trendleri, yapay zeka uygulamalarını ve insan odaklı yaklaşımların önemini keşfedin.",
    content: `
## Giriş

2025 yılı, işe alım dünyası için köklü değişimlerin yaşandığı bir yıl olacak. Yapay zeka teknolojilerinin gelişimi, uzaktan çalışma modellerinin kalıcılaşması ve yetenek kıtlığı, şirketlerin işe alım stratejilerini yeniden düşünmelerini gerektiriyor.

## 1. Yapay Zeka Destekli İşe Alım

AI artık sadece özgeçmiş taraması yapmıyor. Video mülakat analizi, yetkinlik eşleştirme ve aday deneyimi kişiselleştirme gibi alanlarda aktif rol oynuyor.

### AI'ın Kullanım Alanları:
- Özgeçmiş ve başvuru analizi
- Video mülakat değerlendirme
- Chatbot ile aday iletişimi
- Tahminsel analizler

## 2. Beceri Bazlı İşe Alım

Geleneksel diploma ve deneyim odaklı yaklaşım yerini beceri bazlı değerlendirmeye bırakıyor. Şirketler, adayların gerçek yeteneklerini ölçen testler ve simülasyonlar kullanıyor.

## 3. Aday Deneyimi Önceliği

İşe alım sürecinde aday deneyimi, şirket markası kadar önemli hale geldi. Hızlı geri bildirim, şeffaf süreç ve kişiselleştirilmiş iletişim beklentisi artıyor.

## Sonuç

2025'te başarılı işe alım, teknoloji ve insan odaklı yaklaşımı dengeli bir şekilde birleştiren şirketlerin elinde olacak.
    `,
    category: blogCategories[0],
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
