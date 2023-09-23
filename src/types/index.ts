import { ReactNode } from "react"

export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>,
> {
  params: P
  searchParams: Q
}

export interface IParentProps {
  children: ReactNode
}

export interface IReview {
  rating: number
  text: string
}

export interface IProduct {
  id: number
  image: string
  name: string
  price: number
  description: string
  reviews: IReview[]
}
export interface ICart {
  products: Pick<IProduct, "id" | "name" | "image" | "price">[]
}
