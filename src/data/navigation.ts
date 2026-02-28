import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  {
    label: "Modüller",
    href: "/moduller",
    children: [
      { label: "Reflektif Öğrenci", href: "/moduller/ogrenci" },
      { label: "Reflektif Üniversite", href: "/moduller/universite" },
      { label: "Reflektif Kariyer", href: "/moduller/kariyer" },
      { label: "Reflektif İK", href: "/moduller/ik" },
      { label: "Reflektif Kurum", href: "/moduller/kurum" },
      { label: "Reflektif Engelsiz", href: "/moduller/engelli-mesleki-eslestirme" },
    ],
  },
  {
    label: "Testler",
    href: "/testler",
    children: [
      { label: "Kişilik Envanteri - RiT", href: "/testler/kisilik-envanteri" },
      { label: "Genel Yetenek Testleri", href: "/testler/genel-yetenek" },
      { label: "Dil Yeterlilik Testleri", href: "/testler/dil-testleri" },
      { label: "Teknik Testler", href: "/testler/teknik-testler" },
      { label: "Oyun Tabanlı Değerlendirme", href: "/testler/oyun-tabanli" },
      { label: "Dijital Simülasyon", href: "/testler/dijital-simulasyon" },
      { label: "Kariyer Risk Analizi", href: "/testler/kariyer-risk-analizi" },
    ],
  },
  {
    label: "Özellikler",
    href: "/ozellikler",
    children: [
      { label: "Video Mülakat", href: "/ozellikler/video-mulakat" },
      { label: "Başvuru Takip (ATS)", href: "/ozellikler/basvuru-takip-sistemi" },
      { label: "360 Derece Değerlendirme", href: "/ozellikler/360-derece-degerlendirme" },
      { label: "Yetkinlik Bazlı Değerlendirme", href: "/ozellikler/yetkinlik-bazli-degerlendirme" },
    ],
  },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Kaynaklar", href: "/kaynaklar" },
  { label: "Fiyatlandırma", href: "/fiyatlandirma" },
  { label: "Kalite", href: "/kalite-politikasi" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerNavigation = {
  moduller: [
    { label: "Reflektif Öğrenci", href: "/moduller/ogrenci" },
    { label: "Reflektif Üniversite", href: "/moduller/universite" },
    { label: "Reflektif Kariyer", href: "/moduller/kariyer" },
    { label: "Reflektif İK", href: "/moduller/ik" },
    { label: "Reflektif Kurum", href: "/moduller/kurum" },
    { label: "Reflektif Engelsiz", href: "/moduller/engelli-mesleki-eslestirme" },
  ],
  testler: [
    { label: "Kişilik Envanteri - RiT", href: "/testler/kisilik-envanteri" },
    { label: "Genel Yetenek Testleri", href: "/testler/genel-yetenek" },
    { label: "Dil Yeterlilik Testleri", href: "/testler/dil-testleri" },
    { label: "Teknik Testler", href: "/testler/teknik-testler" },
    { label: "Oyun Tabanlı", href: "/testler/oyun-tabanli" },
    { label: "Kariyer Risk Analizi", href: "/testler/kariyer-risk-analizi" },
  ],
  ozellikler: [
    { label: "Video Mülakat", href: "/ozellikler/video-mulakat" },
    { label: "Başvuru Takip (ATS)", href: "/ozellikler/basvuru-takip-sistemi" },
    { label: "360 Derece Değerlendirme", href: "/ozellikler/360-derece-degerlendirme" },
    { label: "Yetkinlik Bazlı", href: "/ozellikler/yetkinlik-bazli-degerlendirme" },
  ],
  sirket: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Referanslar", href: "/referanslar" },
    { label: "Kaynaklar", href: "/kaynaklar" },
    { label: "Kalite Politikası", href: "/kalite-politikasi" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Karşılaştırma", href: "/karsilastirma" },
    { label: "Bilimsel Temel", href: "/bilimsel-temel" },
    { label: "Süreç", href: "/surec" },
  ],
  destek: [
    { label: "Sıkça Sorulan Sorular", href: "/#faq" },
    { label: "Demo Talep Et", href: "/demo" },
    { label: "Fiyatlandırma", href: "/fiyatlandirma" },
    { label: "İletişim", href: "/iletisim" },
  ],
  yasal: [
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
    { label: "İmha Politikası", href: "/imha-politikasi" },
    { label: "Çerez Politikası", href: "/cerezler" },
  ],
};
