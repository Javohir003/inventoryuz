"use client";


import '@/app/[locale]/globals.css'
import NProgress from 'nprogress';
import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import 'nprogress/nprogress.css';

const ProgressBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();

    handleStart();

    const handlePathnameChange = () => {
      handleComplete();
    };

    handlePathnameChange();

    return () => {
      handleComplete();
    };
  }, [pathname]);

  return null;
};

export default ProgressBar;
