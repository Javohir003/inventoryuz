
import TeamListBox from "@/components/wsteam/teams";
import "@/styles/About.css";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <div className="w-full h-full pt-[120px]">
        <div className="container mx-auto">
          <div className="about-pages mb-[80px]">
            <div className="grid grid-cols-grid-fit-2 gap-9 transition-all duration-300 justify-center">
              <article className="max-w-[85%]">
                <h1 className="text-3xl font-bold lines mb-16">{t("title")}</h1>
                <ul className=" list-disc ml-5 text-gray-600 mb-4">
                  <li className="mb-2">{t("title_desc1")}</li>
                  <li className="mb-2">{t("title_desc2")}</li>
                  <li className="mb-2">{t("title_desc3")}</li>
                </ul>
              </article>

              <article>
                <h1 className="text-3xl font-bold lines mb-20 ">
                  {t('title_left')}
                </h1>

                <ul className="list-podxod max-w-[70%]">
                  <li className="flex gap-3 items-start">
                    <p className="w-[15px] h-[15px] p-3 bg-orange-400 flex items-center justify-center rounded-full font-normal text-white">
                      1
                    </p>
                    <span className="text-gray-500">
                      {t("title_left_desc1")}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <p className="w-[15px] h-[15px] p-3 bg-orange-400 flex items-center justify-center rounded-full font-normal text-white">
                      2
                    </p>
                    <span className="text-gray-500">
                      {t("title_left_desc2")}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <p className="w-[15px] h-[15px] p-3 bg-orange-400 flex items-center justify-center rounded-full font-normal text-white">
                      3
                    </p>
                    <span className="text-gray-500">
                      {t("title_left_desc3")}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <p className="w-[15px] h-[15px] p-3 bg-orange-400 flex items-center justify-center rounded-full font-normal text-white">
                      4
                    </p>
                    <span className="text-gray-500">
                      {t("title_left_desc4")}
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="video-wrapper mb-6">
            <TeamListBox />
          </div>
        </div>
        <div className="Sklad-Aloqa">
          <article className="container mx-auto title-aloqa">
            <h1 className="text-[40px] leading-[50px] text-white font-bold mb-6">
              {t("card_title")}
            </h1>
            <p className="text-[22px] mb-5 max-w-[70%] text-white">
              {t("card_desc")}
            </p>
            <button className="px-[25px] py-[10px] text-white font-medium btn bg-[#ffc000] rounded-md cursor-pointer">
              {t("btn")}
            </button>
          </article>
        </div>
      </div>
    </>
  );
}