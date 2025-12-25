import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meshur-pazaryeri.vercel.app';
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/tr`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/favorites`, lastModified: new Date() },
  ];
}