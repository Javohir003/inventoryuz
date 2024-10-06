import { useTranslations } from "next-intl";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('HomePage');

  const metadata = {
    title: t('title'), // O'zbekcha sarlavha
    description: t('title_Second_desc_title'), // O'zbekcha ta'rif
  };

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:description" content={metadata.description} />
      <main>{children}</main>
    </>
  );
}
