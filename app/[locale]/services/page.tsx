import Image from "next/image";
import Post1 from '@/public/IMG/cards/imgSklad.png'
import Post2 from '@/public/IMG/cards/komandaSklad.png'
import Post3 from '@/public/IMG/cards/konsultatsiya.png'
import Post4 from '@/public/IMG/cards/post4.png'

import '@/styles/Services.css'
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('Services')
    return (
        <>
            <div>
                <div className="container">
                    <div className="pt-[130px] pb-[50px] service-parent">
                        <h1 className="font-[500] mb-7 text-[40px] title-ser">{t('title')}</h1>
                        <div className="services-wrapper">
                            <div className="card">
                                <Image className="h-[100%] object-cover" src={Post1} alt={t('card1_title')} />
                                <article className="p-5">
                                    <h3 className="text-[24px] mb-[10px] font-semibold leading-7">{t('card1_title')}</h3>
                                    <p className="text-[14px] text-[gray]">{t('card1_desc')}</p>
                                </article>
                            </div>
                            <div className="card">
                                <Image className="h-[100%] object-cover" src={Post2} alt={t('card2_title')} />
                                <article className="p-5">
                                    <h3 className="text-[24px] mb-[10px] font-semibold leading-7">{t('card2_title')}</h3>
                                    <p className="text-[14px] text-[gray]">{t('card2_desc')}</p>
                                </article>
                            </div>

                            <div className="card">
                                <Image className="h-[100%] object-cover" src={Post3} alt={t('card3_title')} />
                                <article className="p-5">
                                    <h3 className="text-[24px] mb-[10px] font-semibold leading-7">{t('card3_title')}</h3>
                                    <p className="text-[14px] text-[gray]">{t('card3_desc')}</p>
                                </article>
                            </div>
                            <div className="card">
                                <Image className="h-[100%] object-cover" src={Post4} alt={t('card4_title')} />
                                <article className="p-5">
                                    <h3 className="text-[24px] mb-[10px] font-semibold leading-7">{t('card4_title')}</h3>
                                    <p className="text-[14px] text-[gray]">{t('card4_desc')}</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}