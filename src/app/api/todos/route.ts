import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export const GET = async (req: Request) => {
  const todos = await db.todo.findMany({})

  return NextResponse.json(todos)
}

export const POST = async (req: Request) => {
  const { content } = await req.json()
  if (!content || typeof content !== "string") {
    throw new Error("Content missing")
  }

  const newTodo = await db.todo.create({
    data: {
      content,
    },
  })

  return NextResponse.json(newTodo)
}
