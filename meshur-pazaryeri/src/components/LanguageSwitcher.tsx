'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    // Mevcut yoldan dil kodunu (en/tr) çıkartıp yenisini ekliyoruz
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1 w-14 h-8 transition-colors focus:outline-none"
    >
      {/* Kayan Buton Animasyonu */}
      <motion.div
        className="absolute w-6 h-6 bg-white dark:bg-primary rounded-full shadow-md flex items-center justify-center text-[10px] font-bold text-black dark:text-white"
        animate={{ x: locale === 'tr' ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {locale.toUpperCase()}
      </motion.div>
      
      <div className="flex justify-between w-full px-2 text-[10px] font-medium text-gray-500">
        <span className={locale === 'tr' ? 'opacity-0' : 'opacity-100'}>TR</span>
        <span className={locale === 'en' ? 'opacity-0' : 'opacity-100'}>EN</span>
      </div>
    </button>
  );
}