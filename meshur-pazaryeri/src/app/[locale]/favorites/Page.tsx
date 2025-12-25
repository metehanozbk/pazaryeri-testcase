'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import Link from 'next/link';

export default function FavoritesPage() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const { favorites } = useFavoriteStore();
  const favoriteProducts = Object.values(favorites);

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold dark:text-white">
          {t('favoritesTitle') || 'Favori Ürünlerim'}
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          {t('favoritesDescription') || 'Beğendiğiniz tüm yöresel lezzetler burada saklanır.'}
        </p>
      </header>

      {favoriteProducts.length > 0 ? (
        <ProductGrid products={favoriteProducts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 text-6xl">❤️</div>
          <h2 className="text-xl font-semibold dark:text-white">
            {t('noFavorites') || 'Henüz favori ürününüz yok.'}
          </h2>
          <Link 
            href={`/${locale}`}
            className="mt-6 rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition-transform hover:scale-105"
          >
            {t('exploreProducts') || 'Ürünleri Keşfet'}
          </Link>
        </div>
      )}
    </div>
  );
}