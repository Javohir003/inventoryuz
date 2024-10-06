import '@/app/[locale]/globals.css'
import '@/styles/MediaQuery.css'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('Contact')
  return (
    <>
      <div className="pt-[130px] contact-page">
        <h1 className="container text-[40px] font-[500] mb-7">{t('title')}</h1>
        <div className="bg-white py-5 contact-wrapper">
          <div className="container flex justify-between mb-8 contact-child1">
            <article>
              <h2 className="text-[20px] font-[600]">{t('phone')}</h2>
              <a href="tel: +99893 137 0603"><p className="text-[#8f8d8d] text-[18px] tel-anim">+998 93 137 06 03</p></a>
            </article>
            <article>
              <h2 className="text-[20px] font-[600]">{t('addres')}</h2>
              <a href="https://maps.app.goo.gl/BQ3cPYxEDayA4Wvy5" target="_blank"><p className="text-[#8f8d8d] text-[18px] max-w-[70%]">Ziyolilar street, 9, Mirzo-Ulugbek district, Tashkent</p></a>
            </article>
            <article>
              <h2 className="text-[20px] font-[600]">{t('email')}</h2>
              <p className="text-[#fbb533] text-[18px]">info@inventory.uz </p>
            </article>
          </div>
          <div className='container w-full h-[400px] pb-8 contact-child2'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.239259422759!2d69.33216277624457!3d41.33897457130609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48a7d39f42b%3A0x48130b95c32f2cdc!2sZiyolilar%20ko&#39;chasi%209%2C%20100170%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e1!3m2!1suz!2sus!4v1727371399340!5m2!1suz!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}