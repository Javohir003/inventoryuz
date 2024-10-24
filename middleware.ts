import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Agar robots.txt ga murojaat qilingan bo'lsa
  if (pathname.endsWith('/robots.txt')) {
    const locale = pathname.split('/')[1]; // Tilni URL'dan ajratamiz

    // public katalogiga statik faylni bevosita qaytarish
    return NextResponse.next();
  }

  // next-intl bilan bog'liq middlewareni chaqirish
  return createMiddleware({
    locales: ['en', 'uz', 'ru'],
    defaultLocale: 'ru',
  })(req);
}

export const config = {
  matcher: ['/', '/(uz|en|ru)/:path*'], // Qo'shimcha: robots.txt
};
