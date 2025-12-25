export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  region: string;
  producer: string;
  rating: number;
  category: string;
  description: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'aydin-inciri',
    name: 'Aydın Dağ İnciri',
    price: 285,
    // Unsplash: Kuru incir tabağı
    image: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800',
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
    // Unsplash: Antep fıstığı kasesi
    image: 'https://images.unsplash.com/photo-1550917034-be57368d447a?q=80&w=800',
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

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 800);
  });
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
    setTimeout(() => resolve(product), 300);
  });
};