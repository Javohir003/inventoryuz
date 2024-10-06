import { useTranslations } from "next-intl"


export default function ServicesLayout({ children }: { children: React.ReactNode }){

    const t = useTranslations('Services');

    const metadata = {
        title: t('titleMeta'),
        description: t('description')
    }

    return (
        <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} /> {/* Descriptionni qo'shish */}
            <meta property="og:description" content={metadata.description} />
            <main>{children}</main>
        </>
    )
}