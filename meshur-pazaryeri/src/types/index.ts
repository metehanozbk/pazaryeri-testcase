// src/types/index.ts

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  region: string; // Örn: Gaziantep
  producer: string; // Örn: Meşhur Baklavacı
  rating: number;
  category: string;
  description: string;
}

export interface LocaleParams {
  params: Promise<{ locale: string }>;
}