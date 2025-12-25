import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

interface FavoriteState {
  favorites: Record<string, Product>;
  toggleFavorite: (product: Product) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: {},
      toggleFavorite: (product) => {
        const state = get();
        const exists = !!state.favorites[product.id];

        if (exists) {
          // ESLint hatasını önlemek için destructuring yerine 
          // objenin bir kopyasını alıp delete operatörünü kullanıyoruz.
          const newFavorites = { ...state.favorites };
          delete newFavorites[product.id];
          set({ favorites: newFavorites });
        } else {
          set({
            favorites: { ...state.favorites, [product.id]: product },
          });
        }
      },
      isFavorite: (id) => !!get().favorites[id],
      clearFavorites: () => set({ favorites: {} }),
    }),
    { name: 'favorites-storage' }
  )
);