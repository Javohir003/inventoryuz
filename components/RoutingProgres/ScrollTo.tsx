"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname(); // Detect the current pathname

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]); // Trigger on pathname change

  return null; // No UI rendering
};

export default ScrollToTop;

