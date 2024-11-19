"use client";

import '@/styles/MediaQuery.css';
import Image from "next/image";
import post1 from '@/public/IMG/BlogImg/blog1.png';
import post2 from '@/public/IMG/BlogImg/blog2.jpg';
import post3 from '@/public/IMG/BlogImg/blog3.jpg';
import post4 from '@/public/IMG/BlogImg/blog4.jpg';
import post5 from '@/public/IMG/BlogImg/blog5.png';
import post6 from '@/public/IMG/BlogImg/blog6.jpg';
import { useTranslations, useLocale } from "next-intl"; // `useLocale`ni import qiling
import Link from 'next/link';

interface Post {
    id: number;
    title: string;
    desc: string;
    images: string | any;
}

export default function About() {
    const t = useTranslations('Information');
    const locale = useLocale(); // `useLocale` orqali joriy tilni oling

    const posts: Post[] = [
        {
            id: 1,
            images: post1,
            title: t('card1_title'),
            desc: t('card1_desc'),
        },
        {
            id: 2,
            images: post2,
            title: t('card2_title'),
            desc: t('card2_desc'),
        },
        {
            id: 3,
            images: post3,
            title: t('card3_title'),
            desc: t('card3_desc'),
        },
        {
            id: 4,
            images: post4,
            title: t('card4_title'),
            desc: t('card4_desc'),
        },
        {
            id: 5,
            images: post5,
            title: t('card5_title'),
            desc: t('card5_desc'),
        },
        {
            id: 6,
            images: post6,
            title: t('card6_title'),
            desc: t('card6_desc'),
        },
    ];

    return (
        <>
            <div className="container mb-10">
                <h1 className="title-infor transition-all duration-500 pt-[130px] pb-10 text-[40px] font-[500]">
                    {t('title')}
                </h1>
                <div className="grid grid-cols-repeat-grid gap-7 news-wrapper">
                    {posts.map((item: Post) => (
                        <Link href={`/${locale}/information/${item.id}`} key={item.id}>
                            <div className="grid grid-cols-auto-fit-minmax gap-4 group border-b pb-3 group">
                                <Image
                                    className="w-[170px] rounded-lg"
                                    src={item.images}
                                    alt={item.title}
                                />
                                <article className="col-span-1">
                                    <p className="text-[22px] leading-[25px] font-[600] line-clamp-2 mb-4 duration-300 group-hover:text-orange-300">
                                        {item.title}
                                    </p>
                                    <p className="text-[15px] leading-[20px] line-clamp-4 text-[gray]">
                                        {item.desc}
                                    </p>
                                </article>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
