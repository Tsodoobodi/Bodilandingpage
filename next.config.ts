import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en-US', 'mn', 'fr'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.mn',
        defaultLocale: 'mn',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
        http: true,
      },
    ],
  },
};

export default nextConfig;
