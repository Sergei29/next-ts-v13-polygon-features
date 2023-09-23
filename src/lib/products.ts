import { IProduct, IReview } from "@/types"
import { readFileFromDb, writeFileToDb } from "./fs"

export const getProducts = async (): Promise<IProduct[]> =>
  await readFileFromDb<IProduct[]>("products")

export const addReview = async (
  id: number,
  review: {
    rating: number
    text: string
  },
): Promise<IReview[] | undefined> => {
  const allProducts = await getProducts()

  const newProducts = allProducts.map((current) => {
    if (current.id === id) {
      return { ...current, reviews: [...current.reviews, review] }
    }
    return current
  })

  await writeFileToDb("products", newProducts)
  const updatedProduct = await getProductById(id)

  return updatedProduct?.reviews
}

export const getProductById = async (
  id: number,
): Promise<IProduct | undefined> =>
  getProducts().then((products) => products.find((p) => p.id === id))
