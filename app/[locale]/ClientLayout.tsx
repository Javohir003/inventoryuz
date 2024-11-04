"use client";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFoundPage = pathname === "/not-found" || pathname.includes("not-found");git 
  return (
    <>
      {/* Agar shouldShowNavbarAndFooter true bo'lsa, Navbar ko'rsatilsin */}
      {!isNotFoundPage && <Navbar />}
      
      {/* Asosiy bolalar (children) */}
      {children}
      
      {/* Agar shouldShowNavbarAndFooter true bo'lsa, Footer ko'rsatilsin */}
      {!isNotFoundPage && <Footer />}
    </>
  );
}
