import { NextRequest, NextResponse } from "next/server"

import { ICredentials } from "@/types"
import { isEmpty } from "@/lib/common"
import { findUserByEmail, addNewUser } from "@/lib/api"

export const POST = async (req: NextRequest) => {
  const { email, password } = (await req.json()) as ICredentials

  if (isEmpty(email) || isEmpty(password)) {
    return new Response(null, {
      status: 401,
      statusText: "Missing credentials",
    })
  }

  const existingUser = await findUserByEmail(email)

  if (!!existingUser) {
    return new Response(null, {
      status: 401,
      statusText: `User '${email}', already exists`,
    })
  }

  const created = await addNewUser({ email, password })

  return NextResponse.json({ id: created.id, email: created.email })
}
