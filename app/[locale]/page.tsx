'use client'

import Marquee from 'react-fast-marquee';
import TeamListBox from '@/components/wsteam/teams'


/*Slide img*/
import slide2 from "/public/IMG/Partnyor/IQLogo.png";
import slide3 from "/public/IMG/Partnyor/TheThermo2.png";
import slide4 from "/public/IMG/Partnyor/Times.png";
import slide5 from "/public/IMG/Partnyor/StudioMotors.png";
import slide6 from "/public/IMG/Partnyor/manavto.png";
import slide7 from "/public/IMG/Partnyor/Part7.png";
import slide8 from "/public/IMG/Partnyor/Part9.png";
import slide9 from "/public/IMG/Partnyor/Part10.png";



import imgSklad from '@/public/IMG/cards/imgSkladhome.png'
import imgSklad2 from '@/public/IMG/Kompleks.jpg'


import '@/styles/Home.css'
import '@/styles/MediaQuery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

/*Next-Intl*/
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HomeLayout from '@/components/layouts/HomeLayout';

/*Shadcn ui Component*/





export default  function Home() {
  const t = useTranslations('HomePage')
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('');

  useEffect(() => {
    // This will only run on the client
    const locale = pathname.split('/')[1];
    setCurrentLocale(locale);
  }, [pathname]);

  return (
    <HomeLayout>
     
      <div>
        <div className='home-wrapper'>
          <div className='container'>
            <div className='title-home-w'>
              <h1 className='w-[50%] leading-[90px] text-[80px] font-black title-home'>{t("title")}</h1>
            </div>
          </div>
        </div>
        <div className='second-Page container'>
          <h2 className='font-[700] text-center text-[50px] py-[60px] title-second'>{t("title_Second")}</h2>
          <div className="container info-checked mx-auto info-checked gap-12 mb-20">
            <div className="left-info-wrapper">
              <h2 className=" text-3xl font-bold line-clamp-2 lines">
                {t('title_Second_desc_title')}
              </h2>
              <p className=" text-1xl text-[#808ea4] mb-3">
                {t("title_Second_desc1")}
              </p>
              <p className="text-xl text-[#808ea4] mb-8">
                {t('title_Second_small_Title')}
              </p>
              <p className="flex gap-4 text-[#808ea4] items-center my-3">
                <FontAwesomeIcon
                  className="text-2xl w-[21px] text-[#ffc000]"
                  icon={faHandPointRight}
                />
                {t('title_Second_desc_1')}
              </p>
              <hr className=' opacity-[0.5]' />
              <p className="flex gap-4 text-[#808ea4] items-center my-3">
                <FontAwesomeIcon
                  className="text-2xl w-[41px] text-[#ffc000]"
                  icon={faHandPointRight}
                />
                {t('title_Second_desc_2')}

              </p>
              <hr className=' opacity-[0.5]' />
              <p className="flex gap-4 text-[#808ea4] items-center my-3">
                <FontAwesomeIcon
                  className="text-2xl w-[48px] text-[#ffc000]"
                  icon={faHandPointRight}
                />
                {t('title_Second_desc_3')}
              </p>
              <hr className=' opacity-[0.5]' />
              <p className="flex gap-4 text-[#808ea4] items-center my-3">
                <FontAwesomeIcon
                  className="text-2xl w-[80px] text-[#ffc000]"
                  icon={faHandPointRight}
                />
                {t('title_Second_desc_4')}
              </p>
              <hr className=' opacity-[0.5]' />
              <p className="flex gap-4 text-[#808ea4] items-center my-3">
                <FontAwesomeIcon
                  className="text-2xl w-[48px] text-[#ffc000]"
                  icon={faHandPointRight}
                />
              {t('title_Second_desc_5')}

              </p>
              <hr className=' opacity-[0.5]' />
              <p className="flex gap-4 text-[#808ea4] items-center my-3">
                <FontAwesomeIcon
                  className="text-2xl w-[51px] text-[#ffc000]"
                  icon={faHandPointRight}
                />
                {t('title_Second_desc_6')}
              </p>
            </div>
            <div className="right-info-wrapper">
              <h2 className="text-2xl font-bold mb-4">
                {t('title_Second_right_title1')}
              </h2>
              <p className="text-[#808ea4] mb-32">
                {t('title_Second_right_desc1')}
              </p>
              <h2 className="text-2xl font-bold mb-4">{t('title_Second_right_title2')}
              </h2>
              <p className="text-[#808ea4] mb-32">
                {t('title_Second_right_desc2')}
              </p>
              <h2 className="text-2xl font-bold mb-4">
                {t('title_Second_right_title3')}
              </h2>
              <p className="text-[#808ea4] mb-32">
                {t('title_Second_right_desc3')}
              </p>
            </div>
          </div>
          
        </div>
        <div className='thirt-Page'>
          <div className="container mx-auto work-you mb-16">
            <h2 className="title text-3xl font-bold lines">{t('title_Work_Title')}</h2>
            <div className=" container mx-auto">
              <ul className="grid grid-cols-grid-fit-3 justify-center gap-5 three-item">
                <li className="mb-5">
                  <p className=" font-bold text-3xl mb-3">1.</p>
                  <p className="text-gray-400">
                    {t('title_Three_desc1')}
                  </p>
                </li>
                <li className="mb-5">
                  <p className=" font-bold text-3xl mb-3">2.</p>
                  <p className="text-gray-400">
                    {t('title_Three_desc2')}
                  </p>
                </li>
                <li className="mb-5">
                  <p className=" font-bold text-3xl mb-3">3.</p>
                  <p className="text-gray-400">
                    {t('title_Three_desc3')}
                  </p>
                </li>
                <li className="mb-5">
                  <p className=" font-bold text-3xl mb-3">4.</p>
                  <p className="text-gray-400">
                    {t('title_Three_desc4')}
                  </p>
                </li>
                <li className="mb-5">
                  <p className=" font-bold text-3xl mb-3">5.</p>
                  <p className="text-gray-400">
                    {t('title_Three_desc5')}
                  </p>
                </li>
                <li className="mb-5">
                  <p className=" font-bold text-3xl mb-3">6.</p>
                  <p className="text-gray-400">
                    {t('title_Three_desc6')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='four-Page'>
          <div className="container-w partnyors mb-20">
            <div className=" container mx-auto">
              <h2 className="title text-3xl font-bold lines">{t('title_Clinets')}</h2>
            </div>
            <div className="w-3/4 m-auto marq">
              <Marquee
                speed={50}
                direction="left"
                loop={0}
                gradient={true}
                gradientColor="rgb(240, 239, 239)"
                pauseOnHover={true}
              >
                <div className="flex gap-24 items-center py-5">
                  <a href="#1" className="ml-4 flex items-center gap-4" aria-label='partnyor'>
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5"
                    >
                      <rect width="32" height="32" rx="8" fill="#4489F7"></rect>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1915 13.1241C12.0819 13.1982 11.9751 13.2748 11.8711 13.354C11.7924 13.3952 11.7162 13.4428 11.6426 13.497C10.1144 14.6234 8.80286 16.0503 7.76402 17.4146L6.2254 15.8759C4.54118 14.1917 5.08336 12.4844 7.43665 12.0922L11.1165 11.4808C11.7279 11.377 12.4662 10.8348 12.7431 10.2696L14.7734 6.20901C15.8808 4.00568 17.6804 4.00568 18.7763 6.20901L20.8066 10.2696C21.0834 10.8348 21.8217 11.377 22.4446 11.4808L26.1245 12.0922C28.4778 12.4844 29.0315 14.1917 27.3358 15.8759L24.4749 18.7368C23.9904 19.2213 23.7251 20.1557 23.8751 20.8248L24.6941 24.3662C25.3401 27.1694 23.852 28.2538 21.3718 26.7887L18.3718 25.0128C18.5844 24.8847 18.7623 24.7653 18.9057 24.6585C19.1705 24.5253 19.43 24.3735 19.6823 24.2029C22.8011 22.0941 23.6525 17.9046 21.584 14.8452C19.5155 11.7859 15.3103 11.0153 12.1915 13.1241Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5587 15.3061C12.631 15.251 12.7053 15.1977 12.7816 15.1461C14.952 13.6786 17.8853 14.225 19.3333 16.3665C20.7813 18.5081 20.1956 21.4338 18.0252 22.9013C17.8496 23.02 17.669 23.1256 17.4846 23.2181C16.7367 23.7758 14.6341 24.8221 11.1588 25.2505L14.0894 22.5039L6.00367 25.501L12.0795 18.7042L8.02882 20.8528C8.53534 19.738 10.1186 17.0878 12.3997 15.4056C12.4508 15.3679 12.5039 15.3348 12.5587 15.3061Z"
                        fill="white"
                      ></path>
                    </svg>
                    <h2 className="text-3xl font-bold">Sharh</h2>
                  </a>
                  <a href="#2" aria-label='partnyor'>
                    <Image className="w-44 part1" src={slide2} alt="Iqtidor IT Academy" />
                  </a>
                  <a href="#3" aria-label='partnyor'>
                    <Image className="w-24 part1" src={slide3} alt="ThermoKing" />
                  </a>
                  <a href="#4" aria-label='partnyor'>
                    <Image className="w-40 part1" src={slide4} alt="Time Group" />
                  </a>
                  <a href="#5" aria-label='partnyor'>
                    <Image className="w-40 part1" src={slide5} alt="Studio Motors" />
                  </a>
                  <a href="#6" aria-label='partnyor'>
                    <Image className="w-40 part1" src={slide6} alt="MAN uz" />
                  </a>
                  <a href="#7" aria-label='partnyor'>
                    <Image className="w-35 part1" src={slide7} alt="UZAUTO Trailer" />
                  </a>
                  <a href="#8" aria-label='partnyor'>
                    <Image className="w-40 part1" src={slide8} alt="Temir yo'llar" />
                  </a>
                  <a href="#9" className="mr-20" aria-label='partnyor'>
                    <Image className="w-40 part1" src={slide9} alt="Central Asia Trans" />
                  </a>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className='mb-24'>
          <div className=" container mx-auto">
            <h2 className="title text-3xl font-bold lines">{t('title_Services')}</h2>
            <div className="grid grid-cols-repeat-grid  gap-8 usluga-wrapper">
              <div className=" border-2 w-full rounded-lg">
                <Image className="w-full rounded" src={imgSklad} alt={t('services_box_title1')} />
                <article className="p-10 child-wrapper">
                  <h2 className="text-2xl font-bold mb-5">
                    {t('services_box_title1')}
                  </h2>
                  <ul className=" list-disc ml-5 mb-5 leading-8">
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box_desc1')}
                    </li>
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box_desc2')}
                    </li>
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box_desc3')}
                    </li>
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box_desc4')}
                    </li>
                  </ul>
                  <button className="m-auto px-10 py-2 rounded-md transition-all duration-200 font-bold text-white bg-[#ffc000] hover:shadow hover:bg-[#ffbf00cf] btn" aria-label='service-btn'>
                    {t('services_box_btn')}
                  </button>
                </article>
              </div>
              <div className=" border-2 w-full rounded-lg">
                <Image className="w-full rounded" src={imgSklad2} alt={t('services_box2_titl')} />
                <article className="p-10 child-wrapper">
                  <h2 className="text-2xl font-bold mb-5">
                    {t('services_box2_titl')}
                  </h2>
                  <ul className=" list-disc ml-5 mb-5 leading-8">
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box2_desc1')}
                    </li>
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box2_desc2')}
                    </li>
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box2_desc3')}
                    </li>
                    <li className="text-[16px] font-[400] text-gray-500">
                      {t('services_box2_desc4')}
                    </li>
                  </ul>
                  <button className="m-auto px-10 py-2 rounded-md transition-all duration-200 font-bold text-white bg-[#ffc000] hover:shadow hover:bg-[#ffbf00cf] btn" aria-label='service-btn'>
                    {t('services_box_btn')}
                  </button>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="Zakaz-audit mb-20">
          <div className="container title-zakaz">
            <h3 className="title text-[40px] font-medium text-white mb-5">
              {t('order_title')}
            </h3>
            <div className="mx-auto med-Title">
              <p className="text-[20px] w-[70%] title-audit text-white mb-5">
                {t('order_desc')}
              </p>
              <button className=" m-auto px-10 py-2 rounded-md font-bold text-white bg-[#ffc000] btn" aria-label='service-btn'>
                {t('order_btn')}
              </button>
            </div>
          </div>
        </div>
        <div className=" container mx-auto">
          <h2 className="title text-3xl font-bold lines">{t('title_Project')}</h2>
        </div>
        <div className="kompleks-wrapper relative left-0 top-0 mb-20">
          <div className="container kompleks-Proekt">
            <article className="child-kompleks">
              <h2 className="text-5xl text-white font-bold mb-7">
                {t('title_Project_title')}

              </h2>
              <p className="text-gray-100 text-2xl max-w-[80%] mb-7 title-kompleks">
                {t('title_Project_desc')}
              </p>
              <a
                href={`/${currentLocale}/contact`} 
                className="px-8 py-5 rounded-xl border text-white border-[#f5bf5a] bg-[#d5d3d329] hover:bg-[#f5bf5a] hover:border transition-all duration-300"
              >
                {t('title_Project_btn')}
              </a>
            </article>
          </div>
        </div>
        <TeamListBox />
      </div>
    </HomeLayout>
  );
}
