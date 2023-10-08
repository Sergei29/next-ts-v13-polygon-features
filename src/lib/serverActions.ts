"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { IServerActionResult } from "@/types"

export const createTodoAction = async (
  formData: FormData,
): Promise<IServerActionResult> => {
  try {
    const content = formData.get("content") as string
    if (!content) {
      throw new Error("No content provided")
    }
    await db.todo.create({
      data: { content },
    })

    revalidatePath("/todos")
    return { message: "ok" }
  } catch (err) {
    const error = err instanceof Error ? err.message : "Failed to create todo"
    return { error }
  }
}

export const toggleTodoCompleted = async (
  todoId: string,
): Promise<IServerActionResult> => {
  try {
    const current = await db.todo.findUnique({ where: { id: todoId } })

    if (!current) {
      throw new Error(`Todo by id: ${todoId} not found`)
    }

    await db.todo.update({
      where: { id: todoId },
      data: {
        completed: !current.completed,
      },
    })

    revalidatePath("/todos")
    return { message: "ok" }
  } catch (err) {
    const error =
      err instanceof Error
        ? err.message
        : `Failed to update todo by id: ${todoId}`
    return { error }
  }
}

export const deleteTodo = async (
  todoId: string,
): Promise<IServerActionResult> => {
  try {
    await db.todo.delete({
      where: { id: todoId },
    })

    revalidatePath("/todos")
    return { message: "ok" }
  } catch (err) {
    const error =
      err instanceof Error
        ? err.message
        : `Failed to delete todo by id: ${todoId}`
    return { error }
  }
}
