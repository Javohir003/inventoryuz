import { MetadataRoute } from 'next';
import uzPages from '@/message/uz.json';
import ruPages from '@/message/ru.json';
import enPages from '@/message/en.json';

interface Page {
  path: string,
  priority: number,
  lastModified: string
}

export async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://audit-sklad.uz';

  // Tillar va sahifalar
  const languages: Record<string, Page[]> = {
    uz: uzPages.pagesSitemap as Page[],
    ru: ruPages.pagesSitemap as Page[],
    en: enPages.pagesSitemap as Page[]
  };

  const sitemap: MetadataRoute.Sitemap = [];

  // Har bir til uchun URL-larni yaratish
  for (const locale in languages) {
    const pages = languages[locale];
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`, // URL yaratish
        lastModified: page.lastModified || new Date().toISOString(), // Sahifaning oxirgi o'zgarishi
        priority: page.priority, // priority qiymati
      });
    });
  }

  return sitemap;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return generateSitemap();
}   
