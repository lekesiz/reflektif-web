# Reflektif - AI Destekli Yetkinlik Değerlendirme Platformu

Türkiye'nin ilk yapay zeka destekli yetkinlik değerlendirme ve meslek eşleştirme platformu.

## 🚀 Özellikler

- **AI Destekli Değerlendirme**: Yapay zeka ile kişilik, yetenek ve ilgi analizi
- **Meslek Eşleştirme**: Holland (RIASEC) modeli ile kariyer önerileri
- **Video Mülakat**: AI tabanlı video mülakat analizi
- **ATS Entegrasyonu**: İşe alım süreçleri için entegre sistem
- **Çoklu Modüller**: Öğrenci, Üniversite, Kariyer, İK, Kurum ve Engelsiz modülleri

## 🛠️ Teknoloji Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **Form Validation**: Zod
- **Email**: Resend
- **Rate Limiting**: Upstash Redis
- **Testing**: Vitest, Testing Library, Playwright
- **Code Quality**: ESLint, Prettier, Husky

## 📋 Gereksinimler

- Node.js 20+
- npm veya pnpm

## 🔧 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/lekesiz/reflektif-web.git
cd reflektif-web

# Bağımlılıkları yükleyin
npm install

# Environment variables oluşturun
cp .env.example .env.local

# Geliştirme sunucusunu başlatın
npm run dev
```

## 🌍 Environment Variables

Aşağıdaki environment variables'ları `.env.local` dosyasında tanımlayın:

```env
# Resend (Email)
RESEND_API_KEY=your_resend_api_key

# Upstash Redis (Rate Limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Optional: Database
DATABASE_URL=your_database_url

# Optional: Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://reflektif.net
```

## 📜 Komutlar

```bash
# Geliştirme
npm run dev              # Development server (http://localhost:3000)

# Build
npm run build            # Production build
npm run start            # Production server

# Kod Kalitesi
npm run lint             # ESLint kontrolü

# Testing
npm run test             # Unit testler
npm run test:ui          # Test UI
npm run test:coverage    # Test coverage
npm run test:e2e         # E2E testler
npm run test:e2e:ui      # E2E test UI
```

## 🏗️ Proje Yapısı

```
reflektif-web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Auth route group
│   │   ├── api/            # API routes
│   │   ├── moduller/       # Module pages
│   │   ├── testler/        # Test pages
│   │   └── ...
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # UI components
│   ├── data/               # Static data
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript types
├── public/                 # Static assets
└── ...config files
```

## 🧪 Testing

Proje, kapsamlı test altyapısına sahiptir:

- **Unit Tests**: Vitest + Testing Library
- **E2E Tests**: Playwright
- **Coverage**: %80+ hedef

```bash
# Tüm testleri çalıştır
npm test

# Coverage raporu
npm run test:coverage

# E2E testler
npm run test:e2e
```

## 🔒 Güvenlik

- ✅ XSS koruması (ReactMarkdown, input sanitization)
- ✅ CSRF koruması (SameSite cookies)
- ✅ Rate limiting (Upstash Redis)
- ✅ Input validation (Zod)
- ✅ Security headers (CSP, X-Frame-Options, vb.)
- ✅ HTTPS zorunlu (HSTS)

## 📈 SEO

- ✅ Structured Data (Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Meta tags (Open Graph, Twitter Card)
- ✅ Semantic HTML

## 🚀 Deployment

Proje, Vercel üzerinde deploy edilmiştir:

```bash
# Vercel CLI ile deploy
vercel

# Production deploy
vercel --prod
```

## 📝 Lisans

Bu proje NETZ Informatique tarafından geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📞 İletişim

- **Website**: https://reflektif.net
- **Email**: info@reflektif.net
- **Telefon**: 0507 43 43 253
- **Adres**: Zaim Teknopark, Halkalı, İstanbul

## 🙏 Teşekkürler

Reflektif'i kullandığınız için teşekkür ederiz!
