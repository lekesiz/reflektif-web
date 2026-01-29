# Reflektif Web - SEO Optimizasyonu ve Metadata Rehberi

## 1. Genel SEO Stratejisi

Reflektif Web'in organik arama trafiğini artırmak ve hedef kitlesine ulaşmak için aşağıdaki SEO stratejisi benimsenmiştir. Bu strateji, hem teknik SEO hem de içerik SEO'sunu kapsamaktadır.

### 1.1. Hedef Anahtar Kelimeler

Reflektif Web için belirlenen ana ve uzun kuyruklu (long-tail) anahtar kelimeler şunlardır:

**Ana Anahtar Kelimeler:**
- kariyer testi
- kişilik testi
- meslek seçimi
- işe alım yazılımı
- yetenek değerlendirme
- assessment center

**Uzun Kuyruklu Anahtar Kelimeler:**
- hangi meslek bana uygun
- kişilik testleri güvenilir mi
- holland kodu nedir
- big five kişilik modeli
- işe alım süreçleri nasıl iyileştirilir
- video mülakat nasıl yapılır
- kariyer değişikliği nasıl yapılır

### 1.2. Sayfa Başına SEO Hedefleri

Her sayfa için bir ana anahtar kelime ve 2-3 ikincil anahtar kelime belirlenmiştir. Bu kelimeler, sayfa başlığı (H1), meta açıklama, URL ve içerik boyunca stratejik olarak yerleştirilmiştir.

## 2. Metadata Optimizasyonu

### 2.1. Title Tag (Sayfa Başlığı)

Title tag, arama motorlarında görünen ve tıklama oranını (CTR) doğrudan etkileyen en kritik SEO öğesidir.

**Best Practices:**
- Uzunluk: 50-60 karakter (mobilde kesik görünmemesi için)
- Ana anahtar kelimeyi başa yerleştir
- Marka adını sona ekle (| Reflektif)
- Tıklanabilir ve çekici ol

**Örnekler:**

| Sayfa | Title Tag |
|---|---|
| Ana Sayfa | Reflektif - AI Destekli Kariyer Testi ve Yetenek Değerlendirme Platformu |
| Öğrenci Modülü | Lise Öğrencileri İçin Kariyer Testi - Hangi Meslek Bana Uygun? \| Reflektif |
| Blog Yazısı | Hangi Meslek Bana Uygun? Holland Kodu ile Meslek Seçimi \| Reflektif Blog |
| İK Modülü | İşe Alım Yazılımı - AI Destekli Assessment Center \| Reflektif İK |

### 2.2. Meta Description

Meta description, arama sonuçlarında title tag'in altında görünen açıklama metnidir. Doğrudan sıralamayı etkilemese de, CTR'yi önemli ölçüde artırır.

**Best Practices:**
- Uzunluk: 150-160 karakter
- Ana anahtar kelimeyi dahil et
- Harekete geçirici bir CTA ekle
- Kullanıcıya değer önerisi sun

**Örnekler:**

| Sayfa | Meta Description |
|---|---|
| Ana Sayfa | Reflektif ile kariyer yolculuğunuza bilimsel ve AI destekli bir başlangıç yapın. Kişilik testleri, meslek eşleştirme ve işe alım çözümleri. Ücretsiz deneyin! |
| Öğrenci Modülü | Lise öğrencileri için Holland Kodu ve AI destekli kariyer testi. Yeteneklerini keşfet, doğru mesleği bul. Ücretsiz temel test ile başla! |
| Blog Yazısı | Holland Kodu (RIASEC) ile kişilik tipinize en uygun meslekleri keşfedin. Bilimsel kariyer testi ile geleceğinizi planlayın. |

### 2.3. Open Graph (OG) Tags

Open Graph tags, sosyal medyada (Facebook, LinkedIn) paylaşıldığında içeriğin nasıl görüneceğini kontrol eder.

**Gerekli OG Tags:**
```html
<meta property="og:title" content="Sayfa Başlığı" />
<meta property="og:description" content="Sayfa Açıklaması" />
<meta property="og:image" content="https://reflektif.net/images/og-image.jpg" />
<meta property="og:url" content="https://reflektif.net/sayfa-url" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Reflektif" />
```

**OG Image Gereksinimleri:**
- Boyut: 1200x630 px (Facebook önerisi)
- Format: JPG veya PNG
- Dosya boyutu: <8 MB
- Her sayfa için özel bir görsel (ideal)

### 2.4. Twitter Card Tags

Twitter'da paylaşıldığında zengin görünüm sağlar.

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sayfa Başlığı" />
<meta name="twitter:description" content="Sayfa Açıklaması" />
<meta name="twitter:image" content="https://reflektif.net/images/twitter-card.jpg" />
<meta name="twitter:site" content="@reflektifnet" />
```

## 3. Yapılandırılmış Veri (Schema Markup)

Schema.org markup'ı, arama motorlarının içeriğinizi daha iyi anlamasını ve zengin sonuçlar (rich snippets) göstermesini sağlar.

### 3.1. Organization Schema

Ana sayfada şirket bilgilerini tanımlar.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reflektif",
  "url": "https://reflektif.net",
  "logo": "https://reflektif.net/logo.png",
  "description": "AI destekli kariyer testi ve yetenek değerlendirme platformu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zaim Teknopark",
    "addressLocality": "Halkalı",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-507-434-3253",
    "contactType": "Customer Service",
    "email": "info@reflektif.net"
  },
  "sameAs": [
    "https://www.linkedin.com/company/reflektif",
    "https://twitter.com/reflektifnet"
  ]
}
```

### 3.2. Article Schema (Blog Yazıları İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hangi Meslek Bana Uygun? Holland Koduna Göre Meslek Seçimi",
  "description": "Kariyer yolculuğunuzda doğru adımı atın...",
  "image": "https://reflektif.net/blog/holland-kodu-cover.jpg",
  "author": {
    "@type": "Person",
    "name": "Dr. Elif Yılmaz"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Reflektif",
    "logo": {
      "@type": "ImageObject",
      "url": "https://reflektif.net/logo.png"
    }
  },
  "datePublished": "2026-01-28",
  "dateModified": "2026-01-28"
}
```

### 3.3. FAQPage Schema (SSS Sayfası İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Reflektif testleri ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Temel testler yaklaşık 15-20 dakika, tam değerlendirme paketi ise 45-60 dakika sürmektedir."
      }
    }
  ]
}
```

### 3.4. Product Schema (Modül Sayfaları İçin)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Reflektif Öğrenci - Kariyer Keşif Platformu",
  "description": "Lise öğrencileri için AI destekli kariyer testi ve meslek eşleştirme",
  "image": "https://reflektif.net/modules/ogrenci-cover.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Reflektif"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Temel Keşif",
      "price": "0",
      "priceCurrency": "TRY"
    },
    {
      "@type": "Offer",
      "name": "Kapsamlı Analiz",
      "price": "249",
      "priceCurrency": "TRY"
    }
  ]
}
```

## 4. URL Yapısı ve İç Linkleme

### 4.1. SEO Uyumlu URL Yapısı

**Best Practices:**
- Kısa ve açıklayıcı
- Anahtar kelime içeren
- Tire (-) ile ayrılmış kelimeler
- Küçük harf kullanımı
- Türkçe karakter yerine İngilizce karakter

**Örnekler:**

| Sayfa Türü | URL Yapısı |
|---|---|
| Modül | /moduller/ogrenci |
| Blog Kategorisi | /blog/kategori/kariyer-gelisimi |
| Blog Yazısı | /blog/hangi-meslek-bana-uygun-holland-kodu |
| SSS | /sss |
| İletişim | /iletisim |

### 4.2. İç Linkleme Stratejisi

İç linkler, hem kullanıcı deneyimini hem de SEO'yu güçlendirir. Aşağıdaki prensiplere uyulmalıdır:

- **Pillar-Cluster Modeli**: Ana konular (pillar pages) etrafında küme içerikler (cluster content) oluşturun ve birbirlerine link verin.
- **Anchor Text Çeşitliliği**: Aynı sayfaya her zaman aynı anchor text ile link vermeyin.
- **Contextual Links**: Linkler, içerik akışı içinde doğal olarak yer almalı.
- **Broken Link Kontrolü**: Düzenli olarak kırık linkleri kontrol edin ve düzeltin.

**Örnek İç Linkleme:**

Blog yazısı: "Hangi Meslek Bana Uygun?" içinde:
- "Reflektif'in AI destekli kariyer değerlendirmesi" → `/moduller/ogrenci` linkini içerir.
- "Big Five kişilik modeli" → `/blog/kisilik-testleri-guvenilir-mi` linkini içerir.

## 5. Teknik SEO

### 5.1. Sayfa Hızı Optimizasyonu

- **Next.js Image Optimization**: `next/image` component'i kullanarak görselleri optimize edin.
- **Code Splitting**: Dinamik import'lar ile JavaScript bundle boyutunu azaltın.
- **Lazy Loading**: Görseller ve ağır bileşenler için lazy loading uygulayın.
- **CDN Kullanımı**: Statik dosyalar için CDN (Vercel Edge Network) kullanın.

### 5.2. Mobil Uyumluluk

- **Responsive Design**: Tailwind CSS ile tüm cihazlarda uyumlu tasarım.
- **Touch-Friendly**: Butonlar ve linkler mobilde kolayca tıklanabilir boyutta (minimum 44x44 px).
- **Viewport Meta Tag**: `<meta name="viewport" content="width=device-width, initial-scale=1" />`

### 5.3. Sitemap ve Robots.txt

**sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://reflektif.net/</loc>
    <lastmod>2026-01-28</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://reflektif.net/moduller/ogrenci</loc>
    <lastmod>2026-01-28</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Diğer sayfalar -->
</urlset>
```

**robots.txt:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://reflektif.net/sitemap.xml
```

## 6. İçerik SEO

### 6.1. Başlık Hiyerarşisi

- **H1**: Her sayfada sadece bir adet, ana anahtar kelimeyi içermeli.
- **H2**: Ana bölüm başlıkları, ikincil anahtar kelimeleri içermeli.
- **H3-H6**: Alt başlıklar, mantıksal hiyerarşiye uygun.

### 6.2. Anahtar Kelime Yoğunluğu

- **Hedef**: %1-2 anahtar kelime yoğunluğu (aşırı optimizasyondan kaçının)
- **Doğal Kullanım**: Anahtar kelimeleri zorlamadan, doğal cümle akışı içinde kullanın.
- **LSI Keywords**: İlgili ve eş anlamlı kelimeleri de kullanın (örn: "kariyer testi" ile birlikte "meslek seçimi", "yetenek analizi")

### 6.3. İçerik Uzunluğu

- **Blog Yazıları**: Minimum 1500 kelime (derinlemesine içerik)
- **Modül Sayfaları**: 800-1200 kelime
- **Ana Sayfa**: 500-800 kelime

## 7. Ölçümleme ve Takip

### 7.1. Google Analytics 4

- **Sayfa Görüntülemeleri**: Hangi sayfalar en çok ziyaret ediliyor?
- **Bounce Rate**: Kullanıcılar hangi sayfalarda hemen çıkıyor?
- **Conversion Rate**: Demo talebi, kayıt formu doldurma oranları.

### 7.2. Google Search Console

- **Arama Sorguları**: Hangi anahtar kelimelerle bulunuyoruz?
- **Tıklama Oranı (CTR)**: Title ve meta description'lar etkili mi?
- **İndeksleme Durumu**: Tüm sayfalar Google tarafından indekslendi mi?
- **Core Web Vitals**: Sayfa hızı ve kullanıcı deneyimi metrikleri.

### 7.3. Ahrefs / Semrush

- **Backlink Analizi**: Kimler bize link veriyor?
- **Anahtar Kelime Sıralamaları**: Hedef kelimelerimizde kaçıncı sıradayız?
- **Rakip Analizi**: Rakiplerimiz hangi kelimelerde güçlü?

## Sonuç

SEO, sürekli bir süreçtir ve düzenli olarak güncellenmesi gerekir. Bu rehber, Reflektif Web'in organik trafiğini artırmak ve hedef kitlesine ulaşmak için temel bir yol haritası sunmaktadır. Aylık olarak performans raporları oluşturulmalı ve stratejiler bu raporlara göre optimize edilmelidir.
