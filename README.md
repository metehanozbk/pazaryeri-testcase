🛒 Meşhur - Yöresel Ürünler Pazaryeri
Bu proje, Türkiye'nin yöresel ürünlerini son kullanıcıyla buluşturan modern bir pazaryeri platformu test çalışmasıdır. Proje; performans, ölçeklenebilirlik ve sürdürülebilirlik odaklı en güncel teknolojilerle geliştirilmiştir.

🚀 Öne Çıkan Özellikler
🌍 Çok Dillilik (i18n): next-intl kullanılarak Türkçe ve İngilizce dil desteği tam olarak yapılandırılmıştır.

🌙 Karanlık Mod (Dark Mode): next-themes ile sistem tercihine duyarlı veya manuel değiştirilebilir tema desteği.

⚡ Gelişmiş State Management: Favori ürün yönetimi için Zustand kullanılmıştır. Veriler persist middleware ile tarayıcıda (LocalStorage) kalıcı hale getirilmiştir.

🎨 Modern UI/UX: Tailwind CSS, Framer Motion ve Lucide Icons ile akıcı ve duyarlı (responsive) arayüz.

📖 Bileşen Dokümantasyonu: UI bileşenleri Storybook ile izole edilerek belgelenmiştir.

🔍 SEO Optimizasyonu: Dinamik sitemap.ts ve robots.ts yapılandırması ile arama motoru dostu yapı.

🛠️ Teknik Yığın (Tech Stack)
Framework: Next.js 15 (App Router)

Library: React 19

Language: TypeScript (Strict Mode)

State Management: Zustand

Styling: Tailwind CSS (v4)

Animations: Framer Motion

UI Documentation: Storybook 8

Testing: Jest & React Testing Library

🏗️ Mimari Yapı (Atomic Design)
Projede bileşenlerin tekrar kullanılabilirliğini artırmak adına Atomic Design prensipleri benimsenmiştir:

Plaintext

src/
 ├── components/
 │    ├── atoms/      # En küçük yapı taşları (Button, Badge vb.)
 │    ├── molecules/  # Atomların birleşimi (ProductCard)
 │    └── organisms/  # Karmaşık yapılar (Navbar, ProductGrid)
 ├── store/           # Global State (Zustand)
 ├── services/        # API ve veri servisleri
 ├── types/           # TypeScript arayüz tanımlamaları
 └── app/             # Sayfa yönlendirmeleri (File-based Routing)
⚙️ Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

Bağımlılıkları Yükleyin:

Bash

npm install --legacy-peer-deps
Geliştirme Sunucusunu Başlatın:

Bash

npm run dev
Storybook'u Görüntüleyin:

Bash

npm run storybook
Üretim Derlemesi (Build) Alın:

Bash

npm run build
🛡️ DevOps ve Kalite Kontrol
Bir mühendislik yaklaşımı olarak, projenin her aşamasında kalite standartları korunmuştur:

Linting: next lint ile kod standartları denetlenmiştir.

Type Checking: Tüm veri modelleri TypeScript interface'leri ile tanımlanmıştır.

Build Optimization: Gereksiz paket bağımlılıkları temizlenmiş ve SWC optimizasyonları yapılmıştır.

Error Management: Kullanılmayan değişkenler ve tip hataları derleme (build) aşamasında tamamen temizlenmiştir.

👤 Hazırlayan
Metehan - Bilgisayar Mühendisi & DevOps Engineer Adayı
