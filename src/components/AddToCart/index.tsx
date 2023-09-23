"use client"

import { useCart } from "@/providers/CartProvider"
import { type ICart } from "@/types"

interface IProps {
  addToCartAction: () => Promise<ICart>
}

const AddToCart = ({ addToCartAction }: IProps) => {
  const [_, setCart] = useCart()

  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => {
        const newCart = await addToCartAction()
        setCart(newCart)
      }}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart
