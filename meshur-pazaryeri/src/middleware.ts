import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Desteklenen diller
  locales: ['tr', 'en'],
 
  // Eğer dil belirtilmezse kullanılacak varsayılan dil
  defaultLocale: 'tr'
});
 
export const config = {
  // Sadece bu yollarda middleware çalışsın (statik dosyaları ve api yollarını hariç tutar)
  matcher: ['/', '/(tr|en)/:path*']
};