'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { FavoriteButton } from '../atoms/FavoriteButton';
import { useFavoriteStore } from '@/store/useFavoriteStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  // Zustand store'dan gerekli fonksiyonları ve state'i çekiyoruz
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  
  // Bu ürünün favori olup olmadığını kontrol ediyoruz
  const favoriteStatus = isFavorite(product.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      
      {/* Görsel Alanı */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
        
        {/* Bölge Rozeti (Yöresel Bilgi) */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand shadow-sm backdrop-blur-sm dark:bg-black/80">
            {product.region}
          </span>
        </div>

        {/* Favori Butonu */}
        <div className="absolute right-3 top-3">
          <FavoriteButton 
            isFavorite={favoriteStatus} 
            onClick={(e) => {
              e.preventDefault(); // Sayfa yönlendirmesini engeller
              toggleFavorite(product);
            }} 
          />
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1">
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-tighter">
            {product.producer}
          </p>
          <h3 className="line-clamp-2 min-h-[40px] text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-brand transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Alt Kısım: Fiyat ve Rating */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-zinc-900 dark:text-white">
              {product.price} <span className="text-sm font-normal">TL</span>
            </span>
          </div>
          
          <div className="flex items-center gap-1 rounded-md bg-orange-50 px-2 py-1 dark:bg-orange-900/20">
            <span className="text-xs font-bold text-orange-600">★ {product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};