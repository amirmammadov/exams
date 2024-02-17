import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import acceptLanguage from "accept-language";

import { fallbackLng, languages, cookieName } from "./i18n/settings";

acceptLanguage.languages(languages);

export function middleware(request: NextRequest) {
  let lng;
  //@ts-ignore
  if (request.cookies.has(cookieName))
    //@ts-ignore
    lng = acceptLanguage.get(request.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(request.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (
    !languages.some((loc: any) =>
      request.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${request.nextUrl.pathname}`, request.url)
    );
  }

  if (request.headers.has("referer")) {
    //@ts-ignore

    const refererUrl = new URL(request.headers.get("referer"));
    const lngInReferer = languages.find((l: any) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  let res = NextResponse.next();

  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "localhost:3000");
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export const config = {
  matcher: [
    "/((?!(?:az|en|api|_next/static|_next/image)(?:/|$))(?!.*\\.[^.]*$).*/?)",
  ],
};
