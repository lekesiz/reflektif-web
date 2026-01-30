export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "hangi-meslek-bana-uygun-holland-kodu",
    title: `Hangi Meslek Bana Uygun? Holland Koduna Göre Meslek Seçimi`,
    excerpt: `Kariyer yolculuğunuzda doğru adımı atın! Holland Kodu (RIASEC) teorisi ile kişilik tipinize en uygun meslekleri keşfedin. Reflektif'in AI destekli analizi ile potansiyelinizi ortaya çıkarın.`,
    content: `...`,
    author: {
      name: "Dr. Elif Yılmaz",
      role: "Kariyer Danışmanı",
      avatar: "/images/authors/elif-yilmaz.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: ["meslek seçimi", "kariyer testi", "holland kodu", "kişilik tipi"],
    publishedAt: "2026-01-28",
    readingTime: 7,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "2",
    slug: "kisilik-testleri-guvenilir-mi",
    title: `Kişilik Testleri Ne Kadar Güvenilir? Bilimsel Açıdan Bir Bakış`,
    excerpt: `Kişilik testleri gerçekten işe yarıyor mu? Big Five (Beş Faktör) Modeli gibi bilimsel temellere dayanan envanterlerin geçerlilik ve güvenilirlik oranlarını öğrenin. Reflektif ile bilimin gücünü keşfedin.`,
    content: `...`,
    author: {
      name: "Prof. Dr. Mehmet Kaya",
      role: "Psikoloji Profesörü",
      avatar: "/images/authors/mehmet-kaya.jpg"
    },
    category: "Psikoloji & Kişisel Gelişim",
    tags: ["kişilik testi", "big five", "psikometri", "geçerlilik", "güvenilirlik"],
    publishedAt: "2026-01-25",
    readingTime: 6,
    image: "/images/blog/hero-psikoloji.jpg"
  },
  {
    id: "3",
    slug: "dogru-ise-alim-nasil-yapilir-yetkinlik-bazli-mulakat",
    title: `Doğru İşe Alım Nasıl Yapılır? Yetkinlik Bazlı Mülakat Teknikleri`,
    excerpt: `İşe alım süreçlerinizi bir üst seviyeye taşıyın. Yetkinlik bazlı mülakat nedir, STAR tekniği nasıl kullanılır ve Reflektif AI ile mülakatlarınızı nasıl daha verimli hale getirebilirsiniz? İK profesyonelleri için rehber.`,
    content: `...`,
    author: {
      name: "Ayşe Demir",
      role: "İK Direktörü",
      avatar: "/images/authors/ayse-demir.jpg"
    },
    category: "İşe Alım",
    tags: ["işe alım", "mülakat teknikleri", "star tekniği", "yetkinlik bazlı", "ik"],
    publishedAt: "2026-01-20",
    readingTime: 8,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "4",
    slug: "ise-alim-surecinde-yapilan-10-kritik-hata-ve-cozumleri",
    title: `İşe Alım Sürecinde Yapılan 10 Kritik Hata ve Çözümleri`,
    excerpt: `Meta Açıklaması: İşe alım sürecinde sıkça yapılan 10 kritik hatayı ve bu hatalardan kaçınmak için bilimsel temelli çözüm önerilerini keşfedin. Reflektif ile işe alım süreçlerinizi optimize edin.`,
    content: `# İşe Alım Sürecinde Yapılan 10 Kritik Hata ve Çözümleri

**Meta Açıklaması:** İşe alım sürecinde sı...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 7,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "5",
    slug: "2026-ik-teknolojisi-trendleri-yapay-zeka-kisisellestirme-ve-yetenek-pazaryerleri",
    title: `2026 İK Teknolojisi Trendleri: Yapay Zeka, Kişiselleştirme ve Yetenek Pazaryerleri`,
    excerpt: `2026 İK Teknolojisi Trendleri: Yapay Zeka, Hiper-Kişiselleştirme ve Etik Zorluklar_x000D_ _x000D_Meta Açıklaması: 2026 yılına damga vuracak en önemli İK teknolojisi trendlerini keşfedin. Üretken ya...`,
    content: `# 2026 İK Teknolojisi Trendleri: Yapay Zeka, Kişiselleştirme ve Yetenek Pazaryerleri

2026 İK Teknol...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 5,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "6",
    slug: "ikda-yapay-zeka-ise-alimdan-calisan-deneyimine-firsatlar-ve-riskler",
    title: `İK'da Yapay Zeka: İşe Alımdan Çalışan Deneyimine Fırsatlar ve Riskler`,
    excerpt: `İK'da Yapay Zeka: İşe Alımdan Çalışan Deneyimine Fırsatlar ve Riskler`,
    content: `# İK'da Yapay Zeka: İşe Alımdan Çalışan Deneyimine Fırsatlar ve Riskler

İK'da Yapay Zeka: İşe Alımd...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 5,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "7",
    slug: "kariyer-planlama-geleceginizi-sansa-birakmayin-adim-adim-rehber",
    title: `Kariyer Planlama: Geleceğinizi Şansa Bırakmayın (Adım Adım Rehber)`,
    excerpt: `Kariyer Planlama: Geleceğinizi Şansa Bırakmayın (Adım Adım Rehber)`,
    content: `# Kariyer Planlama: Geleceğinizi Şansa Bırakmayın (Adım Adım Rehber)

Kariyer Planlama: Geleceğinizi...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 5,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "8",
    slug: "360-derece-degerlendirme-kapsamli-geri-bildirim-ile-gelisim-rehberi",
    title: `360 Derece Değerlendirme: Kapsamlı Geri Bildirim ile Gelişim Rehberi`,
    excerpt: `360 Derece Değerlendirme: Kapsamlı Geri Bildirim ile Gelişim Rehberi`,
    content: `# 360 Derece Değerlendirme: Kapsamlı Geri Bildirim ile Gelişim Rehberi

360 Derece Değerlendirme: Ka...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 5,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "9",
    slug: "mbti-ve-kariyer-kisilik-tipiniz-meslek-seciminizi-nasil-etkiler",
    title: `MBTI ve Kariyer: Kişilik Tipiniz Meslek Seçiminizi Nasıl Etkiler?`,
    excerpt: `MBTI ve Kariyer: Kişilik Tipiniz Meslek Seçiminizi Nasıl Etkiler?`,
    content: `# MBTI ve Kariyer: Kişilik Tipiniz Meslek Seçiminizi Nasıl Etkiler?

MBTI ve Kariyer: Kişilik Tipini...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 6,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "10",
    slug: "ise-alimda-aday-deneyimi-neden-onemli-ve-nasil-iyilestirilir",
    title: `İşe Alımda Aday Deneyimi: Neden Önemli ve Nasıl İyileştirilir?`,
    excerpt: `İş dünyası, yetenek savaşlarının en yoğun yaşandığı dönemlerden birini deneyimliyor. Nitelikli adaylar için rekabet her zamankinden daha çetin. Bu ortamda, bir şirketin işe alım sürecini nasıl yöne...`,
    content: `---
title: İşe Alımda Aday Deneyimi: Neden Önemli ve Nasıl İyileştirilir?
meta_description: İşe alım...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 13,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "11",
    slug: "big-five-bes-faktor-kisilik-modeli-kisiliginizin-bilimsel-haritasi",
    title: `Big Five (Beş Faktör) Kişilik Modeli: Kişiliğinizin Bilimsel Haritası`,
    excerpt: `Big Five (Beş Faktör) Kişilik Modeli: Kişiliğinizin Bilimsel Haritası`,
    content: `# Big Five (Beş Faktör) Kişilik Modeli: Kişiliğinizin Bilimsel Haritası

Big Five (Beş Faktör) Kişil...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Psikoloji & Kişisel Gelişim",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 5,
    image: "/images/blog/hero-psikoloji.jpg"
  },
  {
    id: "12",
    slug: "duygusal-zeka-testleri-is-hayatinda-neden-onemli",
    title: `Duygusal Zeka Testleri: İş Hayatında Neden Önemli?`,
    excerpt: `Uzun yıllar boyunca, iş hayatındaki başarının tek ölçütü Bilişsel Zeka (IQ) olarak kabul edildi. Üniversite dereceleri, teknik beceriler ve analitik düşünme yeteneği, bir adayın potansiyelini belir...`,
    content: `---
title: "Duygusal Zeka Testleri: İş Hayatında Neden Önemli?"
meta_description: "Duygusal zeka tes...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 12,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "13",
    slug: "kisilik-testleri-ve-is-uyumu-bilimsel-perspektif",
    title: `Kişilik Testleri ve İş Uyumu: Bilimsel Perspektif`,
    excerpt: `İnsan kaynakları (İK) profesyonelleri, doğru yeteneği doğru pozisyona yerleştirme arayışında sürekli olarak daha etkili araçlar aramaktadır. Bu araçlar arasında, adayların davranışsal eğilimlerini,...`,
    content: `---
title: Kişilik Testleri ve İş Uyumu: Bilimsel Perspektif
meta_description: Kişilik testlerinin i...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "14",
    slug: "duygusal-zeka-eq-tanimi-is-hayatindaki-onemi-ve-gelistirme-yontemleri",
    title: `Duygusal Zeka (EQ): Tanımı, İş Hayatındaki Önemi ve Geliştirme Yöntemleri`,
    excerpt: `Duygusal Zeka (EQ): Tanımı, İş Hayatındaki Önemi ve Geliştirme Yöntemleri`,
    content: `# Duygusal Zeka (EQ): Tanımı, İş Hayatındaki Önemi ve Geliştirme Yöntemleri

Duygusal Zeka (EQ): Tan...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Psikoloji & Kişisel Gelişim",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 5,
    image: "/images/blog/hero-psikoloji.jpg"
  },
  {
    id: "15",
    slug: "degerlendirme-merkezi-assessment-center-nedir-nasil-calisir",
    title: `Değerlendirme Merkezi (Assessment Center) Nedir? Nasıl Çalışır?`,
    excerpt: `Günümüzün hızla değişen iş dünyasında, doğru yeteneği doğru pozisyona yerleştirmek, bir kurumun rekabet gücünü belirleyen en kritik faktörlerden biridir. Geleneksel işe alım yöntemleri —özellikle ö...`,
    content: `---
meta_description: Değerlendirme Merkezi (Assessment Center) nedir, nasıl çalışır? Bilimsel temel...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "16",
    slug: "ik-analitigi-people-analytics-veriye-dayali-kararlar",
    title: `İK Analitiği (People Analytics): Veriye Dayalı Kararlar`,
    excerpt: `İnsan Kaynakları (İK) yönetimi, tarihsel olarak büyük ölçüde sezgilere, deneyime ve geleneksel uygulamalara dayanan bir disiplin olmuştur. Ancak, dijital dönüşümün ve Büyük Veri çağının etkisiyle, ...`,
    content: `---
title: İK Analitiği (People Analytics): Veriye Dayalı Kararlar
meta_description: İK Analitiği (P...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "17",
    slug: "chatbot-ve-ik-aday-iletisiminde-otomasyonun-donusturucu-gucu",
    title: `Chatbot ve İK: Aday İletişiminde Otomasyonun Dönüştürücü Gücü`,
    excerpt: `İnsan Kaynakları (İK) departmanları, dijital dönüşümün en yoğun yaşandığı alanlardan biri haline gelmiştir. Özellikle işe alım süreçleri, artan başvuru hacmi, küresel yetenek rekabeti ve adayların ...`,
    content: `---
title: Chatbot ve İK: Aday İletişiminde Otomasyonun Dönüştürücü Gücü
meta_description: İK süreçl...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "18",
    slug: "uzaktan-calisma-teknolojileri-ik-perspektifi",
    title: `Uzaktan Çalışma Teknolojileri: İK Perspektifi`,
    excerpt: `Son yıllarda, özellikle COVID-19 pandemisinin hızlandırıcı etkisiyle, uzaktan çalışma (tele çalışma) modeli, geçici bir çözüm olmaktan çıkıp iş dünyasının kalıcı bir parçası haline gelmiştir. Bilgi...`,
    content: `---
title: Uzaktan Çalışma Teknolojileri: İK Perspektifi
meta_description: Uzaktan çalışma teknoloji...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 9,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "19",
    slug: "ik-yazilimlari-karsilastirmasi-dogru-secim-rehberi",
    title: `İK Yazılımları Karşılaştırması: Doğru Seçim Rehberi`,
    excerpt: `Meta Açıklama: HRIS, HRMS ve HCM arasındaki farkları öğrenin. Şirketinizin büyüklüğüne ve stratejik hedeflerine uygun İK yazılımını seçmek için bilimsel temelli, çok kriterli karar verme rehberimiz...`,
    content: `# İK Yazılımları Karşılaştırması: Doğru Seçim Rehberi

**Meta Açıklama:** HRIS, HRMS ve HCM arasında...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 12,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "20",
    slug: "ik-veri-guvenligi-ve-kvkk-uyumlulugu-insan-kaynaklari-sureclerinde-kritik-bir-donusum",
    title: `İK Veri Güvenliği ve KVKK Uyumluluğu: İnsan Kaynakları Süreçlerinde Kritik Bir Dönüşüm`,
    excerpt: `İnsan Kaynakları (İK) departmanları, bir organizasyonun en değerli varlığı olan çalışanlarla ilgili bilgileri yönetir. Günümüzün hızla dijitalleşen iş dünyasında, bu bilgiler sadece isim ve iletişi...`,
    content: `---
title: İK Veri Güvenliği ve KVKK Uyumluluğu: İnsan Kaynakları Süreçlerinde Kritik Bir Dönüşüm
me...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 12,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "21",
    slug: "dijital-donusum-ve-ik-degisim-yonetimi",
    title: `Dijital Dönüşüm ve İK: Değişim Yönetimi`,
    excerpt: `Günümüz iş dünyası, dördüncü sanayi devriminin (Endüstri 4.0) tetiklediği dijital dönüşüm dalgasıyla köklü bir değişimden geçmektedir. Bu dönüşüm, sadece operasyonel süreçleri ve iş modellerini değ...`,
    content: `---
title: Dijital Dönüşüm ve İK: Değişim Yönetimi
meta_description: İK'da dijital dönüşümün stratej...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "22",
    slug: "ikda-blockchain-gelecek-mi-hayal-mi",
    title: `İK'da Blockchain: Gelecek mi, Hayal mi?`,
    excerpt: `Meta Açıklaması: Blockchain, İK süreçlerini nasıl dönüştürebilir? İşe alım, bordrolama ve veri güvenliğindeki potansiyeli ve KVKK/GDPR ile yaşadığı kritik hukuki çatışmayı bilimsel verilerle analiz...`,
    content: `# İK'da Blockchain: Gelecek mi, Hayal mi?

**Meta Açıklaması:** Blockchain, İK süreçlerini nasıl dön...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "23",
    slug: "referans-kontrolu-ise-alimda-basariyi-artiran-dogru-sorular-ve-yapilandirilmis-en-iyi-uygulamalar",
    title: `Referans Kontrolü: İşe Alımda Başarıyı Artıran Doğru Sorular ve Yapılandırılmış En İyi Uygulamalar`,
    excerpt: `İşe alım süreci, bir organizasyonun gelecekteki başarısını doğrudan etkileyen en kritik fonksiyonlardan biridir. Mülakatlar, yetkinlik testleri ve değerlendirme merkezleri gibi araçlarla adayların ...`,
    content: `---
title: Referans Kontrolü: İşe Alımda Başarıyı Artıran Doğru Sorular ve Yapılandırılmış En İyi Uy...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "24",
    slug: "kariyer-degisimi-ne-zaman-ve-nasil-bilimsel-temelli-kapsamli-rehber",
    title: `Kariyer Değişimi: Ne Zaman ve Nasıl? Bilimsel Temelli Kapsamlı Rehber`,
    excerpt: `Meta Description: Kariyer değişimi kararı ne zaman alınmalı ve bu süreç nasıl yönetilmeli? Psikolojik sinyallerden bilimsel karar verme modellerine (CTI, Kuralcı Modeller) kadar 2500 kelimelik kaps...`,
    content: `# Kariyer Değişimi: Ne Zaman ve Nasıl? Bilimsel Temelli Kapsamlı Rehber

**Meta Description:** Kariy...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "25",
    slug: "kariyer-koclugu-nedir-kimlere-uygundur",
    title: `Kariyer Koçluğu: Nedir, Kimlere Uygundur?`,
    excerpt: `Meta Açıklama: Kariyer koçluğu nedir, geleneksel danışmanlıktan farkı ne? Bilimsel araştırmalarla desteklenen faydaları ve kariyerinin hangi aşamasında olursan ol sana nasıl yol göstereceğini keşfet.`,
    content: `# Kariyer Koçluğu: Nedir, Kimlere Uygundur?

**Meta Açıklama:** Kariyer koçluğu nedir, geleneksel da...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 12,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "26",
    slug: "is-tatmini-faktorleri-bilimsel-teorileri-ve-kurumsal-basari-icin-artirma-yontemleri",
    title: `İş Tatmini: Faktörleri, Bilimsel Teorileri ve Kurumsal Başarı İçin Artırma Yöntemleri`,
    excerpt: `Meta Açıklama: İş tatmini nedir? Herzberg, Maslow ve JCM gibi bilimsel teorilerle iş tatminini etkileyen faktörleri ve çalışan bağlılığını artırma yöntemlerini keşfedin.`,
    content: `# İş Tatmini: Faktörleri, Bilimsel Teorileri ve Kurumsal Başarı İçin Artırma Yöntemleri

**Meta Açık...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "27",
    slug: "work-life-balance-bilimsel-temelli-denge-kurma-stratejileri-ve-uygulama-rehberi",
    title: `Work-Life Balance: Bilimsel Temelli Denge Kurma Stratejileri ve Uygulama Rehberi`,
    excerpt: `Modern iş dünyası, küreselleşme, dijitalleşme ve sürekli bağlantı halinde olma kültürü ile karakterize edilir. Bu dinamik ortam, bireylerin iş ve özel yaşamları arasındaki sınırları giderek daha fa...`,
    content: `---
title: Work-Life Balance: Bilimsel Temelli Denge Kurma Stratejileri ve Uygulama Rehberi
meta_des...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 13,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "28",
    slug: "kariyer-hedefleri-belirleme-smart-yontemi-ile-basariya-ulasin",
    title: `Kariyer Hedefleri Belirleme: SMART Yöntemi ile Başarıya Ulaşın`,
    excerpt: `Kariyer yolculuğu, bir geminin okyanusta ilerlemesine benzer. Rüzgarın ve akıntıların etkisiyle sürüklenmek yerine, net bir pusula ve belirlenmiş bir varış noktası ile ilerlemek, başarıya ulaşmanın...`,
    content: `---
title: Kariyer Hedefleri Belirleme: SMART Yöntemi ile Başarıya Ulaşın
meta_description: Kariyer ...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "29",
    slug: "kariyer-engellerini-asma-psikolojik-yaklasimlarla-potansiyelinizi-serbest-birakin",
    title: `Kariyer Engellerini Aşma: Psikolojik Yaklaşımlarla Potansiyelinizi Serbest Bırakın`,
    excerpt: `Yazar: Manus AI
Tarih: 30 Ocak 2026`,
    content: `---
meta_description: Kariyer engellerini aşmanın psikolojik yollarını keşfedin. Öz-yeterlik, psikol...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "30",
    slug: "kadinlar-ve-kariyer-cam-tavan-sendromu-gorunmez-engelleri-asmak-icin-bilimsel-bir-rehber",
    title: `Kadınlar ve Kariyer: Cam Tavan Sendromu: Görünmez Engelleri Aşmak İçin Bilimsel Bir Rehber`,
    excerpt: `Kadınların iş gücüne katılım oranları dünya genelinde artış gösterse de, üst düzey yönetim pozisyonlarındaki temsil oranları hala oldukça düşüktür. Bu durum, kadınların kariyer basamaklarında yükse...`,
    content: `---
title: Kadınlar ve Kariyer: Cam Tavan Sendromu
meta_description: Kadınların kariyerlerinde karşı...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Kariyer Gelişimi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-kariyer.jpg"
  },
  {
    id: "31",
    slug: "z-kusagi-ve-is-hayati-kapsamli-arastirma",
    title: `Z Kuşağı ve İş Hayatı: Kapsamlı Araştırma`,
    excerpt: `Meta Açıklama: Z Kuşağı'nın iş hayatından beklentilerini, değerlerini ve geleneksel iş modelleriyle çatışma noktalarını kapsamlı bir araştırmayla inceleyin. İşverenler için Z Kuşağını yönetme ve el...`,
    content: `# Z Kuşağı ve İş Hayatı: Kapsamlı Araştırma

**Meta Açıklama:** Z Kuşağı'nın iş hayatından beklentil...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 7,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "32",
    slug: "uzaktan-calisma-arastirmasi-turkiye-verileri-trendler-ve-ik-stratejileri",
    title: `Uzaktan Çalışma Araştırması: Türkiye Verileri, Trendler ve İK Stratejileri`,
    excerpt: `Meta Açıklaması: Türkiye'de uzaktan çalışmanın 2024 güncel verilerini, akademik araştırmaları ve İK stratejilerini inceleyen 2500 kelimelik kapsamlı rehber. Verimlilik, iş-yaşam dengesi ve yasal çe...`,
    content: `# Uzaktan Çalışma Araştırması: Türkiye Verileri, Trendler ve İK Stratejileri

**Meta Açıklaması:** T...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "33",
    slug: "calisan-bagliligi-arastirmasi-sektorel-karsilastirma-ve-turkiye-perspektifi",
    title: `Çalışan Bağlılığı Araştırması: Sektörel Karşılaştırma ve Türkiye Perspektifi`,
    excerpt: `Meta Açıklaması: Türkiye'de çalışan bağlılığı oranları sektörlere göre nasıl değişiyor? Finans, BT ve Sanayi sektörlerini bilimsel verilerle karşılaştıran bu kapsamlı rehberde, bağlılık farklılıkla...`,
    content: `# Çalışan Bağlılığı Araştırması: Sektörel Karşılaştırma ve Türkiye Perspektifi

**Meta Açıklaması:**...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 12,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "34",
    slug: "ise-alim-maliyetlerini-dusurmenin-7-yolu-bilimsel-stratejilerle-optimizasyon",
    title: `İşe Alım Maliyetlerini Düşürmenin 7 Yolu: Bilimsel Stratejilerle Optimizasyon`,
    excerpt: `İnsan kaynakları yönetiminde, İşe Alım Başına Maliyet (Cost Per Hire - CPH), bir pozisyonu doldurmak için harcanan toplam maliyeti ifade eden kritik bir metriktir. Bu maliyet, sadece ilan giderleri...`,
    content: `---
title: İşe Alım Maliyetlerini Düşürmenin 7 Yolu: Bilimsel Stratejilerle Optimizasyon
meta_descri...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 16,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "35",
    slug: "ise-alim-sure-ve-maliyetleri-sektorel-analiz",
    title: `İşe Alım Süre ve Maliyetleri: Sektörel Analiz`,
    excerpt: `İnsan Kaynakları (İK) departmanlarının stratejik öneminin giderek arttığı günümüz iş dünyasında, bir şirketin başarısını doğrudan etkileyen iki temel metrik öne çıkmaktadır: İşe Alım Süresi (Time-t...`,
    content: `---
title: İşe Alım Süre ve Maliyetleri: Sektörel Analiz
meta_description: İşe alım süresi (Time-to-...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "36",
    slug: "tukenmislik-sendromu-turkiyede-durum",
    title: `Tükenmişlik Sendromu: Türkiye'de Durum`,
    excerpt: `Modern iş yaşamının hızla değişen ve artan talepleri, bireylerin fiziksel ve psikolojik sınırlarını zorlamaktadır. Bu zorlanmanın en somut ve yaygın sonuçlarından biri, tükenmişlik sendromu (burnou...`,
    content: `---
title: Tükenmişlik Sendromu: Türkiye'de Durum
meta_description: Türkiye'de tükenmişlik sendromun...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "37",
    slug: "ik-dijital-donusum-olgunluk-seviyesi-arastirmasi-turkiye-ve-kuresel-perspektifler",
    title: `İK Dijital Dönüşüm Olgunluk Seviyesi Araştırması: Türkiye ve Küresel Perspektifler`,
    excerpt: `Günümüz iş dünyasında, dijital dönüşüm (DT) sadece bir teknoloji trendi değil, aynı zamanda organizasyonların hayatta kalması ve rekabet avantajı elde etmesi için zorunlu bir stratejik gereklilik h...`,
    content: `# İK Dijital Dönüşüm Olgunluk Seviyesi Araştırması: Türkiye ve Küresel Perspektifler

## Giriş

Günü...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İK Teknolojisi",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-ik-teknoloji.jpg"
  },
  {
    id: "38",
    slug: "yetenek-yonetimi-kuresel-ve-yerel-trendler",
    title: `Yetenek Yönetimi: Küresel ve Yerel Trendler`,
    excerpt: `Günümüz iş dünyası, benzeri görülmemiş bir hızla değişiyor. Dijital dönüşüm, jeopolitik belirsizlikler ve yeni nesil çalışanların beklentileri, organizasyonların en değerli varlığı olan yetenek yön...`,
    content: `---
title: Yetenek Yönetimi: Küresel ve Yerel Trendler
meta_description: 2026 ve sonrası için yetene...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 8,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "39",
    slug: "stres-yonetimi-is-hayatinda-basari-icin-stratejiler",
    title: `Stres Yönetimi: İş Hayatında Başarı İçin Stratejiler`,
    excerpt: `Meta Açıklama: İş hayatında stresi bilimsel yöntemlerle yönetin. Başarı için bireysel ve kurumsal stratejileri, nörobilimsel yaklaşımları ve kanıta dayalı teknikleri keşfedin.`,
    content: `# Stres Yönetimi: İş Hayatında Başarı İçin Stratejiler

**Meta Açıklama:** İş hayatında stresi bilim...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Psikoloji & Kişisel Gelişim",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-psikoloji.jpg"
  },
  {
    id: "40",
    slug: "motivasyon-teorileri-maslowdan-gunumuze",
    title: `Motivasyon Teorileri: Maslow'dan Günümüze`,
    excerpt: `Meta Açıklama: Motivasyon teorilerinin evrimini keşfedin: Maslow'un temel hiyerarşisinden Herzberg, McClelland ve modern Öz-Belirleme Teorisi'ne kadar. Çalışan motivasyonunu bilimsel temellerle anl...`,
    content: `# Motivasyon Teorileri: Maslow'dan Günümüze

**Meta Açıklama:** Motivasyon teorilerinin evrimini keş...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Psikoloji & Kişisel Gelişim",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-psikoloji.jpg"
  },
  {
    id: "41",
    slug: "iletisim-becerileri-etkili-iletisimin-7-kurali",
    title: `İletişim Becerileri: Etkili İletişimin 7 Kuralı`,
    excerpt: `İnsanlık tarihi boyunca iletişim, bireysel ve toplumsal gelişimin temel taşı olmuştur. Modern iş dünyasında ise, etkili iletişim becerileri sadece bir \"artı\" değil, kritik bir yetkinlik olarak kabu...`,
    content: `# İletişim Becerileri: Etkili İletişimin 7 Kuralı

## Giriş: İletişim, Başarının Anahtarı

İnsanlık ...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "42",
    slug: "liderlik-psikolojisi-etkili-liderler-nasil-dusunur",
    title: `Liderlik Psikolojisi: Etkili Liderler Nasıl Düşünür?`,
    excerpt: `Liderlik, genellikle karizma, otorite veya stratejik vizyon gibi dışsal özelliklerle ilişkilendirilir. Ancak modern bilim, etkili liderliğin köklerinin, liderin zihinsel ve duygusal süreçlerinde ya...`,
    content: `---
title: Liderlik Psikolojisi: Etkili Liderler Nasıl Düşünür?
meta_description: Etkili liderlerin ...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Psikoloji & Kişisel Gelişim",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-psikoloji.jpg"
  },
  {
    id: "43",
    slug: "takim-dinamikleri-yuksek-performansli-takimlar-olusturma",
    title: `Takım Dinamikleri: Yüksek Performanslı Takımlar Oluşturma`,
    excerpt: `Günümüzün hızla değişen ve karmaşık iş dünyasında, bir organizasyonun başarısı artık tek tek bireylerin yeteneklerinden çok, yüksek performanslı takımların kolektif gücüne bağlıdır. Bireysel dehala...`,
    content: `---
title: Takım Dinamikleri: Yüksek Performanslı Takımlar Oluşturma
meta_description: Google'ın Pro...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "44",
    slug: "tukenmislik-sendromu-belirtileri-nedenleri-ve-kanita-dayali-cozumleri",
    title: `Tükenmişlik Sendromu: Belirtileri, Nedenleri ve Kanıta Dayalı Çözümleri`,
    excerpt: `Modern iş yaşamının kronik stresi, sürekli artan beklentiler ve dijitalleşmenin getirdiği kesintisiz bağlantı hali, çalışanların ruh sağlığı üzerinde ciddi bir baskı oluşturmaktadır. Bu baskının en...`,
    content: `---
title: Tükenmişlik Sendromu: Belirtileri, Nedenleri ve Kanıta Dayalı Çözümleri
meta_description:...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Araştırma",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-arastirma.jpg"
  },
  {
    id: "45",
    slug: "z-kusagi-adaylar-ise-alimda-nelere-dikkat-etmeli",
    title: `Z Kuşağı Adaylar: İşe Alımda Nelere Dikkat Etmeli?`,
    excerpt: `Z Kuşağı (Gen Z), genellikle 1990'ların ortalarından 2010'ların başlarına kadar doğan bireyleri kapsar ve günümüz iş gücünün en hızlı büyüyen kesimini oluşturmaktadır. Tamamen dijital bir dünyada b...`,
    content: `---
title: Z Kuşağı Adaylar: İşe Alımda Nelere Dikkat Etmeli?
meta_description: Z Kuşağı adayları iş...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "46",
    slug: "ise-alimda-onyargilari-azaltmanin-bilimsel-yontemleri-kanita-dayali-bir-rehber",
    title: `İşe Alımda Önyargıları Azaltmanın Bilimsel Yöntemleri: Kanıta Dayalı Bir Rehber`,
    excerpt: `Meta Açıklaması: İşe alımda önyargıları bilimsel yöntemlerle nasıl azaltacağınızı öğrenin. Yapılandırılmış mülakatlar, kör işe alım ve iş örneklemesi testlerinin kanıta dayalı etkilerini keşfedin.`,
    content: `# İşe Alımda Önyargıları Azaltmanın Bilimsel Yöntemleri: Kanıta Dayalı Bir Rehber

**Meta Açıklaması...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 12,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "47",
    slug: "onboarding-sureci-yeni-calisanlari-basariyla-entegre-etme-rehberi",
    title: `Onboarding Süreci: Yeni Çalışanları Başarıyla Entegre Etme Rehberi`,
    excerpt: `Meta Açıklama: Yeni çalışanlarınızı başarıyla entegre etmek için bilimsel temellere dayanan kapsamlı bir rehber. Onboarding sürecinin aşamalarını, örgütsel sosyalleşme teorisini ve elde tutma oranı...`,
    content: `# Onboarding Süreci: Yeni Çalışanları Başarıyla Entegre Etme Rehberi

**Meta Açıklama:** Yeni çalışa...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "İşe Alım",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-ise-alim.jpg"
  },
  {
    id: "48",
    slug: "performans-degerlendirme-sistemleri-gelenekselden-moderne",
    title: `Performans Değerlendirme Sistemleri: Gelenekselden Moderne`,
    excerpt: `Performans değerlendirme, iş dünyasının en köklü ve aynı zamanda en çok tartışılan süreçlerinden biridir. Yüzyılı aşkın bir süredir, organizasyonlar çalışanlarının katkılarını ölçmek, ücretlendirme...`,
    content: `---
title: Performans Değerlendirme Sistemleri: Gelenekselden Moderne
meta_description: Performans d...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 10,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "49",
    slug: "psikometrik-testler-turleri-kullanim-alanlari-ve-guvenilirlik",
    title: `Psikometrik Testler: Türleri, Kullanım Alanları ve Güvenilirlik`,
    excerpt: `İnsan kaynakları ve örgütsel psikoloji alanında, bireylerin yeteneklerini, kişilik özelliklerini ve iş performansına etki eden diğer psikolojik yapılarını objektif ve sistematik bir şekilde ölçmek ...`,
    content: `# Psikometrik Testler: Türleri, Kullanım Alanları ve Güvenilirlik

## Giriş: Psikometrik Testler Ned...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "50",
    slug: "oyun-tabanli-degerlendirme-gamification-gelecegin-yontemi",
    title: `Oyun Tabanlı Değerlendirme (Gamification): Geleceğin Yöntemi`,
    excerpt: `İnsan Kaynakları (İK) ve yetenek yönetimi alanları, teknolojinin ve değişen iş gücü dinamiklerinin etkisiyle sürekli bir dönüşüm içindedir. Bu dönüşümün en dikkat çekici ve yenilikçi unsurlarından ...`,
    content: `---
Title: Oyun Tabanlı Değerlendirme (Gamification): Geleceğin Yöntemi
Meta Description: Oyun Taban...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-degerlendirme.jpg"
  },
  {
    id: "51",
    slug: "bilissel-yetenek-testleri-ve-is-performansi-iliskisi-bilimsel-kanitlar-ve-ik-stratejileri",
    title: `Bilişsel Yetenek Testleri ve İş Performansı İlişkisi: Bilimsel Kanıtlar ve İK Stratejileri`,
    excerpt: `İnsan kaynakları profesyonelleri için en kritik görevlerden biri, bir pozisyonda başarılı olacak adayı doğru bir şekilde seçmektir. Yanlış işe alımın maliyeti, sadece finansal kayıplarla sınırlı ka...`,
    content: `---
title: Bilişsel Yetenek Testleri ve İş Performansı İlişkisi: Bilimsel Kanıtlar ve İK Stratejiler...`,  // İçerik markdown dosyasından okunacak
    author: {
      name: "Reflektif Ekibi",
      role: "İK ve Kariyer Uzmanları",
      avatar: "/images/authors/reflektif-team.jpg"
    },
    category: "Değerlendirme",
    tags: [],
    publishedAt: "2026-01-30",
    readingTime: 11,
    image: "/images/blog/hero-degerlendirme.jpg"
  }
];

export const blogCategories = [
  { id: "ise-alim", name: "İşe Alım", description: "İşe alım süreçleri, en iyi uygulamalar ve trendler" },
  { id: "degerlendirme", name: "Değerlendirme", description: "Test ve değerlendirme yöntemleri, araçları" },
  { id: "ik-teknoloji", name: "İK Teknolojisi", description: "HR Tech trendleri, dijital dönüşüm" },
  { id: "kariyer", name: "Kariyer Gelişimi", description: "Kariyer planlama, kişisel gelişim" },
  { id: "arastirma", name: "Araştırma", description: "Sektör araştırmaları ve raporlar" },
  { id: "psikoloji-kisisel-gelisim", name: "Psikoloji & Kişisel Gelişim", description: "Kişilik, motivasyon, stres yönetimi ve kariyer tatmini" }
];

// Helper fonksiyonlar
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}
