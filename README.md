🛒 Meşhur – Yöresel Ürünler PazaryeriBu proje, Türkiye'nin eşsiz yöresel ürünlerini son kullanıcıyla buluşturan modern bir pazaryeri platformu çalışmasıdır. Performans, ölçeklenebilirlik ve sürdürülebilirlik odaklı en güncel teknolojiler kullanılarak bir test case çalışması olarak geliştirilmiştir.
🌐 Canlı Demo (Vercel): 👉 https://pazaryeri-testcase-qf7g.vercel.app/
🚀 Öne Çıkan Özellikler
🌍 Çok Dillilik (i18n)next-intl kullanılarak Türkçe ve İngilizce dil desteği sağlanmıştır.Dil geçişi (language switcher) ile dinamik ve SEO dostu bir çeviri altyapısı kurulmuştur.
🌙 Karanlık Mod (Dark Mode)next-themes ile sistem tercihini algılayan veya manuel değiştirilebilir tema desteği sunulmuştur.
⚡ Gelişmiş Durum YönetimiFavori ürünlerin yönetimi için Zustand kullanılmıştır.persist middleware ile veriler LocalStorage üzerinde kalıcı hale getirilmiş, sayfa yenilemelerinde veri bütünlüğü korunmuştur.
🎨 Modern UI / UX & PerformansTailwind CSS ve Framer Motion ile akıcı animasyonlara sahip, mobil uyumlu (responsive) bir arayüz tasarlanmıştır.React Compiler Optimizasyonu: React 19 ile gelen React Compiler'dan yararlanarak manuel memoization (useMemo, useCallback) yükünü azalttım ve render performansını otomatik olarak optimize ettim.
📖 Bileşen DokümantasyonuUI bileşenleri Storybook 8 kullanılarak izole şekilde geliştirilmiş ve teknik standartlara uygun olarak belgelenmiştir.
🛠️ Teknik Yığın (Tech Stack)AlanKullanılan TeknolojiFrameworkNext.js 15 (App Router)KütüphaneReact 19DilTypeScript (Strict Mode)State ManagementZustandStil / AnimasyonTailwind CSS & Framer Motionİkon SetiLucide Icons
🏗️ Mimari Yapı (Atomic Design)Projede bileşenlerin sürdürülebilirliğini artırmak adına Atomic Design prensipleri benimsenmiştir:Plaintextsrc/
├── components/
│    ├── atoms/        # En küçük yapı taşları (Button, Badge, Icon)
│    ├── molecules/    # Atomların birleşimi (ProductCard, SearchBar)
│    └── organisms/    # Karmaşık yapılar (Navbar, ProductGrid, Footer)
├── store/             # Global State yönetimi (Zustand)
├── services/          # Mock API ve veri servisleri
├── types/             # TypeScript interface tanımlamaları
└── app/               # Sayfa yönlendirmeleri ve i18n yapılandırması
🛡️ Bilgisayar mühendisi  olarak, süreçler profesyonel standartlarda ele alınmıştır:CI/CD Pipeline: GitHub ile entegre Vercel deployment hattı kurulmuştur. 
Her push işleminde otomatik build ve deploy süreçleri tetiklenmektedir.Bağımlılık Yönetimi: Storybook ve React 19 arasındaki sürüm uyumsuzlukları, derleme aşamasında --legacy-peer-deps yapılandırması ile optimize edilmiştir.Tip Güvenliği: Projenin tamamı TypeScript ile yazılmış; tüm veri modelleri ve API dönüşleri interface’ler ile güvence altına alınmıştır.Root Directory Konfigürasyonu: Projenin alt klasörde bulunmasına rağmen Vercel build ayarları başarıyla optimize edilmiştir.
⚙️ Kurulum ve ÇalıştırmaProjeyi yerel makinenizde çalıştırmak için:
1️⃣ Bağımlılıkları yükleyin:Bash
npm install --legacy-peer-deps
2️⃣ Geliştirme sunucusunu başlatın:Bashnpm run dev
3️⃣ Storybook’u görüntüleyin:Bashnpm run storybook
👤 Hazırlayan Metehan Özbek bilgisayar mühendisi 
