import { NextResponse } from "next/server"

export const GET = (req: Request) => {
  return NextResponse.json({ message: "Hello world!" })
}

/**
 * @description
 *
 * for getting request body: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body
 *
 * for dynamic route segments: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
 *
 * for search params: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#redirects,
 *  https://nextjs.org/docs/app/building-your-application/routing/route-handlers#opting-out-of-caching
 *
 * for cookies and headers: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
 *
 * setting cookies: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cookies
 *
 * for redirects: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#redirects
 *
 *
 */
