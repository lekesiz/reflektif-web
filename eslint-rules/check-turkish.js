#!/usr/bin/env node
/**
 * Türkçe Karakter Kontrol Scripti
 *
 * Kullanım:
 *   node eslint-rules/check-turkish.js              # Tüm src dosyalarını kontrol et
 *   node eslint-rules/check-turkish.js src/app      # Belirli klasörü kontrol et
 *
 * Bu script, Türkçe metinlerde eksik özel karakterleri tespit eder.
 */

const fs = require('fs');
const path = require('path');

// Yaygın hatalı Türkçe kelimeler ve doğru karşılıkları
const turkishWordMap = {
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
  'Populer': 'Popüler',
  'populer': 'popüler',
  'Butce': 'Bütçe',
  'butce': 'bütçe',
  'Modul': 'Modül',
  'modul': 'modül',
  'Moduller': 'Modüller',
  'moduller': 'modüller',
  'Ihtiyac': 'İhtiyaç',
  'ihtiyac': 'ihtiyaç',
  'Farkli': 'Farklı',
  'farkli': 'farklı',
  'Sifre': 'Şifre',
  'sifre': 'şifre',
  'Hos': 'Hoş',
  'hos': 'hoş',
};

function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];

  function walk(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walk(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const issues = [];

  lines.forEach((line, index) => {
    for (const [wrong, correct] of Object.entries(turkishWordMap)) {
      const regex = new RegExp(`\\b${wrong}\\b`, 'g');
      let match;
      while ((match = regex.exec(line)) !== null) {
        issues.push({
          line: index + 1,
          column: match.index + 1,
          wrong: match[0],
          correct,
        });
      }
    }
  });

  return issues;
}

// Main
const targetDir = process.argv[2] || 'src';
const fullPath = path.resolve(process.cwd(), targetDir);

if (!fs.existsSync(fullPath)) {
  console.error(`Hata: "${fullPath}" bulunamadı`);
  process.exit(1);
}

console.log(`\n🔍 Türkçe karakter kontrolü: ${fullPath}\n`);

const files = findFiles(fullPath);
let totalIssues = 0;

for (const file of files) {
  const issues = checkFile(file);
  if (issues.length > 0) {
    const relativePath = path.relative(process.cwd(), file);
    console.log(`📄 ${relativePath}`);
    for (const issue of issues) {
      console.log(`   Satır ${issue.line}: "${issue.wrong}" → "${issue.correct}"`);
    }
    console.log('');
    totalIssues += issues.length;
  }
}

if (totalIssues === 0) {
  console.log('✅ Türkçe karakter sorunu bulunamadı!\n');
} else {
  console.log(`\n⚠️  Toplam ${totalIssues} sorun bulundu.\n`);
}

process.exit(totalIssues > 0 ? 1 : 0);
