import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml', // sitemap.xml manzilini API-ga yo'naltirish
        destination: '/api/sitemap.xml',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
