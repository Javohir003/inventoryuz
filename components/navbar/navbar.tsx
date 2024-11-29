'use client'

import Image from "next/image";
import "@/app/[locale]/globals.css";
import '@/styles/Navbar.css'

/*Icon flags*/

import uzb from '@/public/IMG/icons/uzbekistan.png';
import rus from '@/public/IMG/icons/russia.png';
import eng from '@/public/IMG/icons/united-kingdom.png'

/*Rasmlar*/
import Logo from '@/public/IMG/logo.png'
import WhiteLogo from '@/public/IMG/logoIn.png'
import { Link } from '@/navigation'
import ScrollToTop from "../RoutingProgres/ScrollTo";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar')

  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Default til English
  const [isnavbarmodal, setNavbarModal] = useState(false);

  const [language, setLanguage] = useState<string>(''); // Default language

  type LanguageCode = 'en' | 'ru' | 'uz';

  const languageNames: Record<LanguageCode, string> = {
    en: 'English',
    ru: 'Russian',
    uz: 'Uzbek'
  };

  useEffect(() => {
    const segments = pathname.split('/');
    const currentLang: LanguageCode = (segments[1] as LanguageCode) || 'en'; // Default to 'en'
    setLanguage(languageNames[currentLang]);
  }, [pathname]);

  // Sahifa yuklanganda localStorage dan tilni olish
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language); // Tilni localStorage ga saqlash
    setIsOpen(false)

  };

  useEffect(() => {
    // Saqlangan linkni olish
    const storedLink = sessionStorage.getItem('activeLink');
    if (storedLink) {
      setActiveLink(storedLink);
    } else {
      setActiveLink(pathname); // Agar saqlangan link yo'q bo'lsa, hozirgi sahifani saqlaymiz
    }
  }, [pathname]);

  useEffect(() => {
    // Til o'zgarganda active linkni tozalash
    setActiveLink('');
  }, [selectedLanguage]);

  const handleLinkClick = (link: string) => {
    // Link bosilganda uni localStorage ga saqlash
    sessionStorage.setItem('activeLink', link);
    setActiveLink(link); // Aktif linkni yangilash
  };

  const handleClose = () => {
    setNavbarModal(!isnavbarmodal)
  }

  return (
    <>
      <ScrollToTop />
      <div>
        {/* show navbar modal start */}
        <div className={`show-modal-navbar transform -translate-x-full transition-transform duration-300 ${isnavbarmodal ? "translate-x-0" : "-translate-x-full"}`}>
          <button onClick={handleClose} className=" translate-x-[15px] translate-y-[32px] m-0" aria-label="handle-close">
            <svg className="w-[25px]" viewBox="0 0 384 512"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
          </button>
          <Link href="/" onClick={() => setNavbarModal(false)} aria-label="link">
            <Image className="w-[260px] translate-y-[-15px] translate-x-[15px] m-auto logo" src={WhiteLogo} alt="Inventory.uz Logo" />
          </Link>
          <hr />
          <ul className="!flex flex-col items-center text-start mt-24 gap-10">
            <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-white transition-all duration-300 ${activeLink === '/about' ? 'active' : ''}`}>
              <Link href="/about" aria-label="link">
                {t('nav1')}
              </Link>
            </li>
            <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-white transition-all duration-300 ${activeLink === '/ourservice' ? 'active' : ''}`}>
              <Link href="/services" aria-label="link">
                {t('nav2')}
              </Link>
            </li>
            <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-white transition-all duration-300  ${activeLink === '/info' ? 'active' : ''}`}>
              <Link href="/information" aria-label="link">
                {t('nav3')}
              </Link>
            </li>
            <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-white transition-all duration-300 ${activeLink === '/contact' ? 'active' : ''}`}>
              <Link href="/contact-us" aria-label="link">
                {t('nav4')}
              </Link>
            </li>
          </ul>
          <div className="w-full h-full">
            <article className="w-full flex justify-center items-center gap-5 absolute bottom-7">
              <Link href="/" locale="en" onClick={() => handleLanguageChange('English')} aria-label="language"><Image width={26} src={eng} alt="Flag england" /></Link>
              <Link href="/" locale="ru" onClick={() => handleLanguageChange('Russian')} aria-label="language"><Image width={30} src={rus} alt="Flag Russian" /></Link>
              <Link href="/" locale="uz" onClick={() => handleLanguageChange('Uzbek')} aria-label="language"><Image width={30} src={uzb} alt="Flag Uzbek" /></Link>
            </article>
          </div>
        </div>
        {/* show navbar modal end */}
        <div className="fixed z-50 w-full bg-white bg-red-700">
          <nav className="max-w-[1180px] px-2 flex justify-between items-center m-auto py-[10px]">
            <Link href="/" onClick={() => handleLinkClick('/')}><Image className="w-[250px] logo" src={Logo} alt="Logo" /></Link>
            <ul className="flex gap-10  nav-item">
              <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-black transition-all duration-300 hover:text-[#fbb533] ${activeLink === '/about' ? 'active' : ''}`}>
                <Link href="/about" aria-label="link">
                  {t('nav1')}
                </Link>
              </li>

              <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-black transition-all duration-300 hover:text-[#fbb533] ${activeLink === '/ourservice' ? 'active' : ''}`}>
              <Link href="/services" aria-label="link">
                {t('nav2')}
              </Link>
            </li>
            <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-black transition-all duration-300 hover:text-[#fbb533] ${activeLink === '/info' ? 'active' : ''}`}>
              <Link href="/information" aria-label="link">
                {t('nav3')}
              </Link>
            </li>
            <li onClick={() => setNavbarModal(false)} className={`cursor-pointer text-black transition-all duration-300 hover:text-[#fbb533] ${activeLink === '/contact' ? 'active' : ''}`}>
              <Link href="/contact-us" aria-label="link">
                {t('nav4')}
              </Link>
            </li>
            </ul>
            <div className="modal-i18n-wrapper" tabIndex={0} onBlur={() => setIsOpen(false)} onFocus={() => setIsOpen(true)}>
              <article className="flex gap-2 modal-i18n close">
                <svg className="w-[18px]" viewBox="0 0 512 512">
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                </svg>
                <p>{language}</p>
              </article>
              <ul className={`modal-child transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <Link href="/" locale="en" onClick={() => handleLanguageChange('English')} aria-label="language">English</Link>
                <Link href="/" locale="ru" onClick={() => handleLanguageChange('Russian')} aria-label="language">Russian</Link>
                <Link href="/" locale="uz" onClick={() => handleLanguageChange('Uzbek')} aria-label="language">Uzbek</Link>
              </ul>
            </div>

            <button onClick={() => setNavbarModal(!isnavbarmodal)} className="burger-show" aria-label="burger-show"><svg className="w-[25px]" viewBox="0 0 448 512"><path fill="#fbb533" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg></button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar;
