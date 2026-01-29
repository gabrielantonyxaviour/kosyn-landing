import type { MetadataRoute } from 'next';

const BASE_URL = 'https://kosyn.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ar'];
  const lastModified = new Date();

  // Generate entries for each locale variant
  const pages = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${BASE_URL}`])
        ),
      },
    },
  ];

  return pages;
}
