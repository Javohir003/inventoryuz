import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true
      },
      {
        source: "/information",
        destination: "/",
        permanent: true
      },
      {
        source: "/contact-us",
        destination: "/",
        permanent: true
      }
    ];
  },
};

export default withNextIntl(nextConfig);
