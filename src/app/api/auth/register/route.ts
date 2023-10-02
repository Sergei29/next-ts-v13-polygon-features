import { NextRequest, NextResponse } from "next/server"

import { ICredentials } from "@/types"
import { isEmpty } from "@/lib/common"

export const POST = async (req: NextRequest) => {
  const { email, password } = (await req.json()) as ICredentials

  if (isEmpty(email) || isEmpty(password)) {
    return new Response(null, {
      status: 401,
      statusText: "Missing credentials",
    })
  }

  console.log("/register api endpoint: ", { email, password })

  return NextResponse.json({ email, password })
}
