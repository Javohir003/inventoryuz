import { useTranslations } from "next-intl"


export default function AboutLayout({ children }: { children: React.ReactNode }){

    const t = useTranslations('About');

    const metadata = {
        title: t('titleMeta'),
        description: t('description'),
        
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