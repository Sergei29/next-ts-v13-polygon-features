import { ReactNode } from "react"

export interface PageProps<
  P = Record<string, string>,
  Q = Record<string, string>,
> {
  params: P
  searchParams: Q
}

export interface IParentProps {
  children: ReactNode
}

export interface ITodo {
  id: string
  createdAt: Date
  completed: boolean
  content: string
}

export type IServerActionResult = { message: "ok" } | { error: string }
