import { Product } from '@/types';

// Dokümandaki api.meshur.co/docs yapısına uygun mock 
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'aydin-inciri',
    name: 'Aydın Dağ İnciri',
    price: 285,
    image: 'https://images.unsplash.com/photo-1595111162232-949ec308696b?q=80&w=800',
    region: 'Aydın',
    producer: 'Nazilli Yöresel',
    rating: 4.9,
    category: 'Kuru Meyve',
    description: 'Aydın dağlarında doğal yollarla kurutulmuş, işlem görmemiş incir.'
  },
  {
    id: '2',
    slug: 'antep-fistigi',
    name: 'Gaziantep Duble Antep Fıstığı',
    price: 640,
    image: 'https://images.unsplash.com/photo-1536620302334-9343063f1011?q=80&w=800',
    region: 'Gaziantep',
    producer: 'Şahinbey Kuruyemiş',
    rating: 4.8,
    category: 'Kuruyemiş',
    description: 'Yeni mahsul, tam dolgun ve iri taneli Antep fıstığı.'
  },
  {
    id: '3',
    slug: 'ezine-peyniri',
    name: 'Tam Yağlı Ezine Peyniri',
    price: 320,
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?q=80&w=800',
    region: 'Çanakkale',
    producer: 'Ezine Mandıra',
    rating: 4.7,
    category: 'Süt Ürünleri',
    description: 'En az 12 ay dinlendirilmiş hakiki Ezine peyniri.'
  }
];

/**
 * Ürünleri getiren mock servis. 
 * Gerçek bir API isteğini (REST) simüle eder.
 */
export const getProducts = async (): Promise<Product[]> => {
  // Gecikme ekleyerek Loading state'lerini test etmemizi sağlar
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 800);
  });
};

/**
 * ID bazlı ürün detayı getiren servis
 */
export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
    setTimeout(() => resolve(product), 300);
  });
};