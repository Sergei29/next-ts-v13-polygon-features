import { ReactNode } from "react"

export interface PageProps<
  P = Record<string, string>,
  Q = Record<string, string>,
> {
  params: P
  searchParams: Q
}

export interface ParentProps {
  children: ReactNode
}
