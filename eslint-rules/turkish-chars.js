/**
 * ESLint Rule: Türkçe Karakter Kontrolü
 *
 * Bu kural, Türkçe metinlerde eksik özel karakterleri tespit eder.
 * Örnek: "Giris" yerine "Giriş", "Turkce" yerine "Türkçe"
 */

// Yaygın hatalı Türkçe kelimeler ve doğru karşılıkları
const turkishWordMap = {
  // Genel kelimeler
  'Turkiye': 'Türkiye',
  'turkiye': 'türkiye',
  'Turkce': 'Türkçe',
  'turkce': 'türkçe',
  'Giris': 'Giriş',
  'giris': 'giriş',
  'Cikis': 'Çıkış',
  'cikis': 'çıkış',
  'Kayit': 'Kayıt',
  'kayit': 'kayıt',
  'Ucretsiz': 'Ücretsiz',
  'ucretsiz': 'ücretsiz',
  'Ozellik': 'Özellik',
  'ozellik': 'özellik',
  'Ozellikler': 'Özellikler',
  'ozellikler': 'özellikler',
  'Iletisim': 'İletişim',
  'iletisim': 'iletişim',
  'Fiyatlandirma': 'Fiyatlandırma',
  'fiyatlandirma': 'fiyatlandırma',
  'Degerlendirme': 'Değerlendirme',
  'degerlendirme': 'değerlendirme',
  'Basla': 'Başla',
  'basla': 'başla',
  'Baslangic': 'Başlangıç',
  'baslangic': 'başlangıç',
  'Kisilik': 'Kişilik',
  'kisilik': 'kişilik',
  'Yetenek': 'Yetenek',
  'Isletme': 'İşletme',
  'isletme': 'işletme',
  'Sirket': 'Şirket',
  'sirket': 'şirket',
  'Calisan': 'Çalışan',
  'calisan': 'çalışan',
  'Musteri': 'Müşteri',
  'musteri': 'müşteri',
  'Cozum': 'Çözüm',
  'cozum': 'çözüm',
  'Cozumler': 'Çözümler',
  'cozumler': 'çözümler',
  'Universite': 'Üniversite',
  'universite': 'üniversite',
  'Ogrenci': 'Öğrenci',
  'ogrenci': 'öğrenci',
  'Egitim': 'Eğitim',
  'egitim': 'eğitim',
  'Saglik': 'Sağlık',
  'saglik': 'sağlık',
  'Guvenlik': 'Güvenlik',
  'guvenlik': 'güvenlik',
  'Dogrulama': 'Doğrulama',
  'dogrulama': 'doğrulama',
  'Rapor': 'Rapor',
  'Surekli': 'Sürekli',
  'surekli': 'sürekli',
  'Iyilestirme': 'İyileştirme',
  'iyilestirme': 'iyileştirme',
  'Seffaf': 'Şeffaf',
  'seffaf': 'şeffaf',
  'Sikayet': 'Şikayet',
  'sikayet': 'şikayet',
  'Oneri': 'Öneri',
  'oneri': 'öneri',
  'Onerisi': 'Önerisi',
  'onerisi': 'önerisi',
  'Analiz': 'Analiz',
  'Eslestirme': 'Eşleştirme',
  'eslestirme': 'eşleştirme',
  'Danismanlik': 'Danışmanlık',
  'danismanlik': 'danışmanlık',
  'Destek': 'Destek',
  'Populer': 'Popüler',
  'populer': 'popüler',
  'Butce': 'Bütçe',
  'butce': 'bütçe',
  'Hizmet': 'Hizmet',
  'Onayli': 'Onaylı',
  'onayli': 'onaylı',
  'Sertifika': 'Sertifika',
  'Memnuniyet': 'Memnuniyet',
  'Oran': 'Oran',
  'Orani': 'Oranı',
  'orani': 'oranı',
  'Basari': 'Başarı',
  'basari': 'başarı',
  'Basarisi': 'Başarısı',
  'basarisi': 'başarısı',
  'Sure': 'Süre',
  'sure': 'süre',
  'Suresi': 'Süresi',
  'suresi': 'süresi',
  'Ingilizce': 'İngilizce',
  'ingilizce': 'ingilizce',
  'Erisim': 'Erişim',
  'erisim': 'erişim',
  'Erisimi': 'Erişimi',
  'erisimi': 'erişimi',
  'Erisebilirlik': 'Erişebilirlik',
  'erisebilirlik': 'erişebilirlik',
  'Yonetici': 'Yönetici',
  'yonetici': 'yönetici',
  'Yonetim': 'Yönetim',
  'yonetim': 'yönetim',
  'Olcekli': 'Ölçekli',
  'olcekli': 'ölçekli',
  'Buyuk': 'Büyük',
  'buyuk': 'büyük',
  'Kucuk': 'Küçük',
  'kucuk': 'küçük',
  'Sinirsiz': 'Sınırsız',
  'sinirsiz': 'sınırsız',
  'Secenegi': 'Seçeneği',
  'secenegi': 'seçeneği',
  'Kullanici': 'Kullanıcı',
  'kullanici': 'kullanıcı',
  'Modul': 'Modül',
  'modul': 'modül',
  'Moduller': 'Modüller',
  'moduller': 'modüller',
  'Modulleri': 'Modülleri',
  'modulleri': 'modülleri',
  'Ihtiyac': 'İhtiyaç',
  'ihtiyac': 'ihtiyaç',
  'Ihtiyaca': 'İhtiyaca',
  'ihtiyaca': 'ihtiyaca',
  'Farkli': 'Farklı',
  'farkli': 'farklı',
  'Hos': 'Hoş',
  'hos': 'hoş',
  'Hesabiniz': 'Hesabınız',
  'hesabiniz': 'hesabınız',
  'Sifre': 'Şifre',
  'sifre': 'şifre',
  'Sifremi': 'Şifremi',
  'sifremi': 'şifremi',
  'Hatirla': 'Hatırla',
  'hatirla': 'hatırla',
  'Unuttum': 'Unuttum',
  // Platform specific
  'Hakkimizda': 'Hakkımızda',
  'hakkimizda': 'hakkımızda',
  'Kariyer': 'Kariyer',
  'Meslek': 'Meslek',
  'Test': 'Test',
  'Profil': 'Profil',
  'Ayarlar': 'Ayarlar',
  'Bildirimler': 'Bildirimler',
  // More words
  'Ilk': 'İlk',
  'ilk': 'ilk',
  'Is': 'İş',
  'Isci': 'İşçi',
  'isci': 'işçi',
  'ISKUR': 'İŞKUR',
  'IK': 'İK',
  'Gun': 'Gün',
  'gun': 'gün',
  'Gunu': 'Günü',
  'gunu': 'günü',
  'Iade': 'İade',
  'iade': 'iade',
  'Satin': 'Satın',
  'satin': 'satın',
  'Icinde': 'İçinde',
  'icinde': 'içinde',
  'Icin': 'İçin',
  'icin': 'için',
  'Hicbir': 'Hiçbir',
  'hicbir': 'hiçbir',
};

// Regex pattern for detecting potential Turkish character issues
const suspiciousPatterns = [
  /\b[A-Z]?[a-z]*[ıİşŞğĞüÜöÖçÇ][a-z]*\b/g, // Words with Turkish chars (good)
];

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Türkçe metinlerde eksik özel karakterleri tespit eder',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
    messages: {
      missingTurkishChar: '"{{word}}" kelimesi "{{suggestion}}" olmalı',
    },
  },
  create(context) {
    function checkText(node, text, startOffset = 0) {
      if (typeof text !== 'string') return;

      // Check each word in the map
      for (const [wrong, correct] of Object.entries(turkishWordMap)) {
        // Create a regex that matches the word as a whole word
        const regex = new RegExp(`\\b${wrong}\\b`, 'g');
        let match;

        while ((match = regex.exec(text)) !== null) {
          context.report({
            node,
            messageId: 'missingTurkishChar',
            data: {
              word: match[0],
              suggestion: correct,
            },
            fix(fixer) {
              if (node.type === 'TemplateElement') {
                // For template literals, we need to handle differently
                return null;
              }
              if (node.type === 'Literal' && typeof node.value === 'string') {
                const newValue = node.value.replace(regex, correct);
                return fixer.replaceText(node, JSON.stringify(newValue));
              }
              return null;
            },
          });
        }
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          checkText(node, node.value);
        }
      },
      TemplateElement(node) {
        if (node.value && node.value.raw) {
          checkText(node, node.value.raw);
        }
      },
    };
  },
};
