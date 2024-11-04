"use client"; // Mijoz komponenti sifatida belgilash

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Joriy URL manzilini olish
  // URL manzilini tekshirish
  const isNotFoundPage = pathname === '/not-found' || pathname.match(/\/[a-z]{2}\/[a-z-]+/) || pathname.includes('[...not_found]');
  return (
    <>
      {/* Faqat not found sahifasi emas bo'lsa, Navbar va Footer ko'rsatilsin */}
      {!isNotFoundPage && <Navbar />}

      {children}
      {/* Faqat not found sahifasi emas bo'lsa, Footer ko'rsatilsin */}
      {!isNotFoundPage && <Footer />}
    </>
  );
}
