import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/organisms/Navbar';

// DÜZELTME: globals.css bir üst klasörde (src/app) olduğu için yol güncellendi.
import '../globals.css'; 

// 1. SEO ve Metadata Yapılandırması (Madde 7)
export const metadata = {
  title: {
    default: 'Meşhur - Yöresel Pazaryeri',
    template: '%s | Meşhur'
  },
  description: 'Türkiye’nin en meşhur yöresel ürünleri, doğrudan üreticisinden kapınıza.',
  robots: 'index, follow',
};

// Next.js 15'te Viewport ayrı bir sabit olarak tanımlanır
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Next.js 15+ için params mutlaka await edilmelidir
  const { locale } = await params;
  
  // Dil dosyalarını sunucu tarafında çekiyoruz
  const messages = await getMessages();

  return (
    // suppressHydrationWarning: next-themes'in hydration mismatch hatasını önlemek için şarttır
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased selection:bg-orange-100 selection:text-orange-900">
        {/* 2. Dark Mode Sağlayıcısı (Madde 5) */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          {/* 3. i18n Sağlayıcısı (Madde 3) */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            
            <div className="flex min-h-screen flex-col bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
              
              {/* Ortak Navigasyon */}
              <Navbar />

              {/* Sayfa İçerikleri */}
              <main className="flex-grow">
                {children}
              </main>

              {/* Opsiyonel Footer buraya gelebilir */}
            </div>

          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}