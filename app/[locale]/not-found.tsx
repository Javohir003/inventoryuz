

// app/[locale]/not-found.tsx

import Link from "next/link";
import NotFoundImg from '@/public/NotFound.png'
import Image from "next/image";

import styles from '@/app/[locale]/not-module.module.css'
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations('notFound')
  return (
      <div className={`${styles.box}`}>
          <Image src={NotFoundImg} alt="Not Found Img"/>
          <Link href="/"><button className={styles.btnsnot}>{t("titles")}</button></Link>
      </div>
  );
}
