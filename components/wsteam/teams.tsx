'use client'

import team1 from "/public/IMG/Team/murad.jpg";
import team2 from "/public/IMG/Team/Abdufattox.jpg";
import team3 from "/public/IMG/Team/Javohir.jpg";
import team4 from "/public/IMG/Team/Shohjahon.jpg";

import '@/styles/WSteam.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTranslations } from 'next-intl';

const TeamList: React.FC = () => {
  const t = useTranslations('HomePage')
  return (
    <>
      <div className="mb-24 team">
        <div className=" container mx-auto">
          <h2 className=" text-3xl font-bold lines">{t('title_Team')}</h2>
          <div className="swiper-box-parent">
            <div className="swiper-Wrap container mx-auto">
              <Swiper
                slidesPerView={4}
                modules={[Navigation, Autoplay]}
                loop={true}
                navigation={false}
                spaceBetween={50}
                className="swiper-wrapper"
                autoplay = {true}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 55,
                    autoplay: true,
                    
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    autoplay: true
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    autoplay: true
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    autoplay: false
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    autoplay: false
                  },
                }}
              >
              
                <SwiperSlide>
                  <div className="slide-child group"> 
                    <Image className="cursor-pointer grayscale transition-all border duration-500 group-hover:grayscale-0" src={team1} alt={t('Team_men1')} />
                    <article className="comand-desc">
                      <h2>{t('Team_name1')}</h2>
                      <p className="transition-all duration-300 group-hover:text-orange-400">{t('Team_men1')}</p>
                    </article>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-child group">
                    <Image className=" cursor-pointer grayscale border transition-all duration-500 group-hover:grayscale-0" src={team2} alt={t('Team_men2')} />
                    <article className="comand-desc">
                      <h2>{t('Team_name2')}</h2>
                      <p className="transition-all duration-300 group-hover:text-orange-400">{t('Team_men2')}</p>
                    </article>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-child group">
                    <Image className="cursor-pointer grayscale border transition-all duration-500 group-hover:grayscale-0" src={team3} alt={t('Team_men3')} />
                    <article className="comand-desc">
                      <h2>{t('Team_name3')}</h2>
                      <p className="transition-all duration-300 group-hover:text-orange-400">{t('Team_men3')}</p>
                    </article>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-child group">
                    <Image className="cursor-pointer grayscale border transition-all duration-500 group-hover:grayscale-0" src={team4} alt={t('Team_men4')} />
                    <article className="comand-desc">
                      <h2>{t('Team_name4')}</h2>
                      <p className="transition-all duration-300 group-hover:text-orange-400">{t('Team_men4')}</p>
                    </article>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamList;
