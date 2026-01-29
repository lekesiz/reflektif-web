export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Reflektif - Kariyerinin Yapay Zekası | AI Destekli Kariyer Platformu",
  description:
    "Potansiyelini keşfet, tutkunu kariyere dönüştür. Kişilik, yetenek ve hobilerini analiz eden AI motorumuzla geleceğin mesleklerine bugünden hazırlan. Türkiye'nin ilk AI destekli kariyer platformu.",
  keywords: [
    "kariyer testi",
    "meslek seçimi",
    "kişilik testi",
    "yetenek testi",
    "ai kariyer",
    "holland kodu",
    "big five",
    "kariyer danışmanlığı",
    "işe alım",
    "ik yazılımı",
  ],
  ogImage: "/images/og-image.jpg",
};

export const pageSEO: Record<string, SEOConfig> = {
  "/": {
    title: "Reflektif - Kariyerinin Yapay Zekası | AI Destekli Kariyer Platformu",
    description:
      "Potansiyelini keşfet, tutkunu kariyere dönüştür. Kişilik, yetenek ve hobilerini analiz eden AI motorumuzla geleceğin mesleklerine bugünden hazırlan.",
    keywords: [
      "kariyer testi",
      "meslek seçimi",
      "ai kariyer",
      "kişilik testi",
      "yetenek testi",
      "kariyer danışmanlığı",
    ],
  },
  "/moduller/ogrenci": {
    title: "Reflektif Öğrenci - Lise & Üniversite Öğrencileri İçin Kariyer Keşif",
    description:
      "Doğru meslek seçimi için erken başlayan kariyer yolculuğu. AI destekli analizlerle yeteneklerini keşfet, geleceğin mesleklerine bugünden hazırlan. Garantili staj ve mentorluk fırsatı.",
    keywords: [
      "lise kariyer testi",
      "üniversite bölüm seçimi",
      "meslek seçimi",
      "yks hazırlık",
      "staj programı",
      "öğrenci kariyer",
    ],
  },
  "/moduller/kariyer": {
    title: "Reflektif Kariyer - Profesyoneller İçin Kariyer Değişim Platformu",
    description:
      "Mevcut kariyerinizden mutsuz musunuz? Tutkunuzu yeniden keşfedin, yeteneklerinizi güncelleyin. AI destekli kariyer geçiş planı ve risk analizi ile yeni kariyerinize adım atın.",
    keywords: [
      "kariyer değişimi",
      "iş değiştirme",
      "sektör geçişi",
      "kariyer koçluğu",
      "upskill",
      "reskill",
      "kariyer danışmanlığı",
    ],
  },
  "/moduller/ik": {
    title: "Reflektif İK - KOBİ ve Startup'lar İçin Akıllı İşe Alım Platformu",
    description:
      "Doğru adayı değil, mutlu çalışanı bulun. AI destekli değerlendirme araçları ile işe alım sürenizi kısaltın, isabet oranınızı artırın. Video mülakat ve yetkinlik testleri.",
    keywords: [
      "işe alım yazılımı",
      "ik yazılımı",
      "video mülakat",
      "aday değerlendirme",
      "yetkinlik testi",
      "ats",
      "insan kaynakları",
    ],
  },
  "/moduller/engelli-mesleki-eslestirme": {
    title: "Reflektif Engelsiz - Engelli Bireyler İçin Erişilebilir Kariyer Platformu",
    description:
      "Türkiye'nin ilk tam erişilebilir (WCAG 2.1 AAA) kariyer platformu. Engelli bireylerin yeteneklerini keşfedip doğru işe ulaşmasını sağlayan, yetenek odaklı analiz ve engelli dostu işveren eşleştirmesi.",
    keywords: [
      "engelli istihdamı",
      "erişilebilir platform",
      "engelli kariyer",
      "wcag",
      "engelli iş bulma",
      "makul düzenleme",
    ],
  },
  "/moduller/kurum": {
    title: "Reflektif Kurumsal - Şirketler İçin Stratejik Yetenek Yönetimi Platformu",
    description:
      "İşe alımdan performans yönetimine, yedeklemeden çalışan bağlılığına kadar tüm yetenek süreçlerinizi AI ile optimize edin. 360 derece değerlendirme, öngörüsel analitik ve HRIS entegrasyonu.",
    keywords: [
      "yetenek yönetimi",
      "performans yönetimi",
      "360 derece değerlendirme",
      "işe alım yazılımı",
      "hris entegrasyonu",
      "çalışan bağlılığı",
    ],
  },
  "/testler/kisilik-envanteri": {
    title: "Kişilik Envanteri (Big Five & Holland) - Reflektif",
    description:
      "Big Five ve Holland (RIASEC) teorilerine dayalı kapsamlı kişilik envanteri. Kendinizi keşfedin, güçlü yönlerinizi ve kariyer yönelimlerinizi bilimsel yöntemlerle ortaya çıkarın.",
    keywords: [
      "kişilik testi",
      "big five",
      "holland kodu",
      "riasec",
      "kişilik envanteri",
      "meslek yönelimi",
    ],
  },
  "/testler/genel-yetenek": {
    title: "Bilişsel Yetenek Testleri (IQ Benzeri) - Reflektif",
    description:
      "Sayısal, sözel, mantıksal ve uzamsal düşünme yeteneklerinizi ölçün. Cattell-Horn-Carroll (CHC) Zeka Teorisi'ne dayalı, akademik ve profesyonel başarıyı öngören testler.",
    keywords: [
      "yetenek testi",
      "iq testi",
      "bilişsel yetenek",
      "sayısal yetenek",
      "sözel yetenek",
      "mantık testi",
    ],
  },
  "/testler/hobi-envanteri": {
    title: "Hobi & İlgi Alanı Envanteri - Tutkunu Kariyere Dönüştür",
    description:
      "Türkiye'de bir ilk! 150+ hobi ve ilgi alanını analiz ederek tutkularınızın hangi profesyonel kariyerlere dönüşebileceğini keşfedin. Oyun oynamaktan el işine kadar her şey bir kariyer olabilir.",
    keywords: [
      "hobi testi",
      "ilgi alanı envanteri",
      "meslek seçimi",
      "kariyer değişikliği",
      "tutkunu bul",
      "ne iş yapmalıyım",
    ],
  },
  "/testler/dil-testleri": {
    title: "Dil Yeterlilik Testleri (CEFR Uyumlu) - 8 Farklı Dil",
    description:
      "İngilizce, Almanca, Fransızca ve 5 farklı dilde CEFR (A1-C2) standartlarında dil yeterlilik testi. AI destekli değerlendirme ile okuma, yazma, dinleme ve konuşma becerilerinizi ölçün.",
    keywords: [
      "ingilizce testi",
      "seviye tespit sınavı",
      "cefr",
      "almanca testi",
      "yabancı dil testi",
      "dil seviyesi",
    ],
  },
  "/ozellikler/video-mulakat": {
    title: "AI Destekli Video Mülakat - Asenkron ve Objektif Aday Değerlendirme",
    description:
      "Asenkron video mülakatlar ile zaman ve mekandan bağımsız, önyargısız aday değerlendirmesi. AI motorumuz 50+ parametreyi analiz ederek işe alım sürenizi %70 kısaltır.",
    keywords: [
      "video mülakat",
      "ai işe alım",
      "asenkron mülakat",
      "dijital mülakat",
      "yapay zeka ik",
      "aday değerlendirme",
    ],
  },
  "/ozellikler/raporlama-ve-analitik": {
    title: "Kişiselleştirilmiş Raporlama ve Analitik - Reflektif",
    description:
      "15+ farklı rapor türü ile veriyi anlama, anlamlandırma ve aksiyona dönüştürme. Yönetici özetinden koçluk rehberine, görsel ve anlaşılır raporlarla karar verme sürecinizi kolaylaştırın.",
    keywords: [
      "ik analitiği",
      "yetenek raporlama",
      "performans raporu",
      "kişilik raporu",
      "insan kaynakları analitiği",
    ],
  },
};

export function getSEOConfig(pathname: string): SEOConfig {
  return pageSEO[pathname] || defaultSEO;
}
