import { getTranslations } from 'next-intl/server';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { getProducts } from '@/services/api';
import { Product } from '@/types';

export default async function HomePage() {
  const products: Product[] = await getProducts();
  const t = await getTranslations('Index');

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black text-zinc-900 dark:text-white sm:text-6xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-zinc-500">{t('description')}</p>
      </div>

      <ProductGrid products={products} title={t('featuredTitle')} />
    </main>
  );
}