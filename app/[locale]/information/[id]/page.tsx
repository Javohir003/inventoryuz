import { useTranslations } from "next-intl";
import '@/app/[locale]/globals.css'
import Image from "next/image";
import { notFound } from "next/navigation";
import post1 from '@/public/IMG/BlogImg/blog1.png';
import post2 from '@/public/IMG/BlogImg/blog2.jpg';
import post3 from '@/public/IMG/BlogImg/blog3.jpg';
import post4 from '@/public/IMG/BlogImg/blog4.jpg';
import post5 from '@/public/IMG/BlogImg/blog5.png';
import post6 from '@/public/IMG/BlogImg/blog6.jpg';

interface Post {
    id: number;
    titlesing: string;
    descsing: string;
    descriptionTitle: string,
    descChild1: string,
    descChild2: string,
    descChild3: string,
    descChild4: string,
    images: string | any;
}

// Postlar ro'yxati

export default function PostPage({ params }: { params: { id: string } }) {
    const t = useTranslations("Information");

    const posts: Post[] = [
        {
            id: 1,
            images: post1,
            titlesing: t('singleCard.title1'),
            descsing: t('singleCard.description1'),
            descriptionTitle: t("singleCard.descriptionTitle1"),
            descChild1: t("singleCard.descChild1"),
            descChild2: t("singleCard.descChild2"),
            descChild3: t("singleCard.descChild3"),
            descChild4: t("singleCard.descChild4")
        },
        {
            id: 2,
            images: post2,
            titlesing: t('singleCard.title2'),
            descsing: t('singleCard.description2'),
            descriptionTitle: t("singleCard.descriptionTitle2"),
            descChild1: t("singleCard.descChild5"),
            descChild2: t("singleCard.descChild6"),
            descChild3: t("singleCard.descChild7"),
            descChild4: t("singleCard.descChild8"),
            // descChild5: t("descChild9")
        },
        {
            id: 3,
            images: post3,
            titlesing: t('singleCard.title3'),
            descsing: t('singleCard.description3'),
            descriptionTitle: t("singleCard.descriptionTitle3"),
            descChild1: t("singleCard.descChild10"),
            descChild2: t("singleCard.descChild11"),
            descChild3: t("singleCard.descChild12"),
            descChild4: t("singleCard.descChild13"),
        },
        {
            id: 4,
            images: post4,
            titlesing: t('singleCard.title4'),
            descsing: t('singleCard.description4'),
            descriptionTitle: t("singleCard.descriptionTitle4"),
            descChild1: t("singleCard.descChild14"),
            descChild2: t("singleCard.descChild15"),
            descChild3: t("singleCard.descChild16"),
            descChild4: t("singleCard.descChild17"),
        },
        {
            id: 5,
            images: post5,
            titlesing: t('singleCard.title5'),
            descsing: t('singleCard.description5'),
            descriptionTitle: t("singleCard.descriptionTitle5"),
            descChild1: t("singleCard.descChild18"),
            descChild2: t("singleCard.descChild19"),
            descChild3: t("singleCard.descChild20"),
            descChild4: t("singleCard.descChild21"),
        },
        {
            id: 6,
            images: post6,
            titlesing: t('singleCard.title6'),
            descsing: t('singleCard.description6'),
            descriptionTitle: t("singleCard.descriptionTitle6"),
            descChild1: t("singleCard.descChild23"),
            descChild2: t("singleCard.descChild4"),
            descChild3: t("singleCard.descChild7"),
            descChild4: t("singleCard.descChild8"),
        },
    ];
    

    // URL dan olingan id'ga qarab postni topamiz
    const postId = parseInt(params.id, 10); // id raqamga o'giriladi
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        // Agar post topilmasa, 404 sahifani ko'rsatamiz
        notFound();
    }

    return (
        <div className="container mx-auto">
            <div className="single-card flex flex-col items-center pt-28 pb-8">
                <h1 className="text-2xl font-bold mb-6">{post.titlesing}</h1>
                <p className=" w-full h-[1px] bg-gray-400 mb-5 opacity-15"></p>
                <div className="w-full flex justify-around">
                    <Image
                        width={parseInt("300px")}
                        src={post.images}
                        alt={post.titlesing}
                        className="rounded-lg mb-6"
                    />
                    <article className="max-w-[60%]">
                        <h4 className="mb-5 text-[19px] font-bold text-orange-400 leading-6">{post.descriptionTitle}</h4>
                        <ul className="list-disc ml-8 leading-6">
                            <li className="text-[15px]">{post.descChild1}</li>
                            <li className="text-[15px]">{post.descChild2}</li>
                            <li className="text-[15px]">{post.descChild3}</li>
                            <li className="text-[15px]">{post.descChild4}</li>
                        </ul>
                    </article>
                </div>
                <p className="desc-sing text-lg text-gray-700 mb-3">{post.descsing}</p>
            </div>
        </div>
    );
}
