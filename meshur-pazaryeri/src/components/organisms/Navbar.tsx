'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Heart, Store } from 'lucide-react';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import LanguageSwitcher from '../LanguageSwitcher'; 

export const Navbar = () => {
  const t = useTranslations('Index');
  const favorites = useFavoriteStore((state) => state.favorites);
  const favoriteCount = Object.keys(favorites).length;

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Bölümü */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-orange-600">
          <Store className="h-6 w-6" />
          <span>MEŞHUR</span>
        </Link>

        {/* Sağ Taraf - Aksiyonlar */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Dil Değiştirme Butonu (Yeni Eklendi) */}
          <LanguageSwitcher />

          {/* Favoriler İkonu */}
          <Link 
            href="/favorites" 
            className="relative p-2 text-zinc-600 transition-colors hover:text-orange-500 dark:text-zinc-300"
          >
            <Heart className="h-6 w-6" />
            {favoriteCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                {favoriteCount}
              </span>
            )}
          </Link>

          {/* Hoş Geldiniz Mesajı */}
          <span className="hidden text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:block">
            {t('welcome') || ''}
          </span>
        </div>
      </div>
    </nav>
  );
};