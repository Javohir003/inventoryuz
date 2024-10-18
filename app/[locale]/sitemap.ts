import { Metadata, MetadataRoute } from 'next';
import uzPages from '@/message/uz.json';
import ruPages from '@/message/ru.json';
import enPages from '@/message/en.json';

interface Page {
  path: string,
  priority: number,
  lastModified: string
}


export async function generateSitemap(locale: string): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://audit-sklad.uz';

  // Tillar va sahifalar
  const languages: Record<string, Page[]> = {
    uz: uzPages.pagesSitemap as Page[],
    ru: ruPages.pagesSitemap as Page[],
    en: enPages.pagesSitemap as Page[]
  };

  const pages = languages[locale]
  const sitemap: MetadataRoute.Sitemap = [];

  // Har bir til uchun URL-larni yaratish
  pages.forEach((page) => {
    sitemap.push({
      url: `${baseUrl}/${locale}${page.path}`, // URL yaratish
      lastModified: page.lastModified || new Date().toISOString(), // Sahifaning oxirgi o'zgarishi
      priority: page.priority, // Sahifa priority qiymati
    });
  });

  return sitemap;
}

export default async function sitemap(context: any): Promise<MetadataRoute.Sitemap> {
  const locale = context.locale || 'en'; // Default locale 'en' sifatida berilgan.
  console.log('Locale in use: ', locale); // Bu yerda locale qiymatini tekshirish
  return generateSitemap(locale);
}