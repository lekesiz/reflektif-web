import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  {
    label: "Moduller",
    href: "/moduller",
    children: [
      { label: "Reflektif Ogrenci", href: "/moduller/ogrenci" },
      { label: "Reflektif Universite", href: "/moduller/universite" },
      { label: "Reflektif Kariyer", href: "/moduller/kariyer" },
      { label: "Reflektif IK", href: "/moduller/ik" },
      { label: "Reflektif Kurum", href: "/moduller/kurum" },
    ],
  },
  { label: "Fiyatlandirma", href: "/fiyatlandirma" },
  { label: "Hakkimizda", href: "/hakkimizda" },
  { label: "Iletisim", href: "/iletisim" },
];

export const footerNavigation = {
  moduller: [
    { label: "Reflektif Ogrenci", href: "/moduller/ogrenci" },
    { label: "Reflektif Universite", href: "/moduller/universite" },
    { label: "Reflektif Kariyer", href: "/moduller/kariyer" },
    { label: "Reflektif IK", href: "/moduller/ik" },
    { label: "Reflektif Kurum", href: "/moduller/kurum" },
  ],
  sirket: [
    { label: "Hakkimizda", href: "/hakkimizda" },
    { label: "Kariyer", href: "/kariyer" },
    { label: "Blog", href: "/blog" },
    { label: "Basin Kiti", href: "/basin-kiti" },
  ],
  destek: [
    { label: "Yardim Merkezi", href: "/yardim" },
    { label: "Iletisim", href: "/iletisim" },
    { label: "SSS", href: "/sss" },
    { label: "API Dokumantasyonu", href: "/api-docs" },
  ],
  yasal: [
    { label: "Gizlilik Politikasi", href: "/gizlilik" },
    { label: "Kullanim Sartlari", href: "/kullanim-sartlari" },
    { label: "KVKK Aydinlatma", href: "/kvkk" },
    { label: "Cerez Politikasi", href: "/cerezler" },
  ],
};
