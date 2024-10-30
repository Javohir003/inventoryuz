import { useTranslations } from "next-intl"


export default function ContactLayout({ children }: { children: React.ReactNode }){

    const t = useTranslations('Contact');

    const metadata = {
        title: t('titleMeta'),
        description: t('description')
    }

    return (
        <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} /> {/* Descriptionni qo'shish */}
            <meta property="og:description" content={metadata.description} />
            <link rel="canonical" href="https://audit-sklad.uz/contact" />
            <main>{children}</main>
        </>
    )
}