import { ICart } from "@/types"
import { readFileFromDb, writeFileToDb } from "./fs"
import { getProductById } from "./products"

export const getCart = async (): Promise<ICart> =>
  await readFileFromDb<ICart>("cart")

export const addToCart = async (productId: number): Promise<ICart> => {
  const product = await getProductById(productId)
  const cart = await getCart()

  if (product) {
    cart.products.push({
      name: product.name,
      id: product.id,
      image: product.image,
      price: product.price,
    })
  }

  await writeFileToDb("cart", cart)

  return await getCart()
}

export const clearCart = async (): Promise<ICart> => {
  const cart = await getCart()
  cart.products = []
  await writeFileToDb("cart", cart)

  return await getCart()
}
