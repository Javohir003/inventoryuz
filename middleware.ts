import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'uz', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'ru',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(uz|en|ru)/:path*']
};