'use client';

import { Product } from '@/types';
import { ProductCard } from '../molecules/ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <section className="py-8">
      {title && (
        <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};