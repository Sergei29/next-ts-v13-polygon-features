import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export const middleware = (request: NextRequest) => {
  console.log("middleware/pathname: ", request.nextUrl.pathname)

  if (request.nextUrl.pathname === "/never-shown") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/todos", "/docs", "/never-shown"],
}

/**
 * @description more on middleware:
 * - https://nextjs.org/docs/app/building-your-application/routing/middleware
 */
