import { act, renderHook } from '@testing-library/react';
import { useFavoriteStore } from '../useFavoriteStore';
import { Product } from '@/types';

// 1. Mock Data: Testlerde kullanılacak veriyi bir sabit olarak tanımlamak daha temizdir.
const MOCK_PRODUCT: Product = {
  id: '1',
  name: 'Aydın Dağ İnciri',
  price: 285,
  slug: 'aydin-inciri',
  image: '/images/test.jpg',
  region: 'Ege',
  producer: 'Nazilli Yöresel',
  rating: 4.9,
  category: 'Kuru Meyve',
  description: 'Test amaçlı açıklama.'
};

describe('useFavoriteStore (Global State Management)', () => {
  
  // 2. Setup: Her testten önce store'u tertemiz bir hale getiriyoruz.
  beforeEach(() => {
    act(() => {
      useFavoriteStore.getState().clearFavorites();
    });
  });

  // 3. Test: İlk durumun (initial state) doğruluğu
  it('başlangıçta favori listesi boş olmalıdır', () => {
    const { result } = renderHook(() => useFavoriteStore());
    expect(Object.keys(result.current.favorites).length).toBe(0);
  });

  // 4. Test: Ekleme mantığı
  it('ürünü favorilere eklemeli ve isFavorite durumunu güncellenmelidir', () => {
    const { result } = renderHook(() => useFavoriteStore());

    act(() => {
      result.current.toggleFavorite(MOCK_PRODUCT);
    });

    // Normalize edilmiş yapı kontrolü
    expect(result.current.favorites[MOCK_PRODUCT.id]).toEqual(MOCK_PRODUCT);
    expect(result.current.isFavorite(MOCK_PRODUCT.id)).toBe(true);
  });

  // 5. Test: Çıkarma (Toggle) mantığı
  it('zaten favori olan bir ürün tekrar eklendiğinde listeden çıkarılmalıdır', () => {
    const { result } = renderHook(() => useFavoriteStore());

    // Önce ekle
    act(() => {
      result.current.toggleFavorite(MOCK_PRODUCT);
    });
    
    // Sonra tekrar toggle yaparak çıkar
    act(() => {
      result.current.toggleFavorite(MOCK_PRODUCT);
    });

    expect(result.current.favorites[MOCK_PRODUCT.id]).toBeUndefined();
    expect(result.current.isFavorite(MOCK_PRODUCT.id)).toBe(false);
  });

  // 6. Test: Toplu Temizleme
  it('clearFavorites fonksiyonu tüm favorileri silmelidir', () => {
    const { result } = renderHook(() => useFavoriteStore());

    act(() => {
      result.current.toggleFavorite(MOCK_PRODUCT);
      result.current.clearFavorites();
    });

    expect(Object.keys(result.current.favorites).length).toBe(0);
  });
});