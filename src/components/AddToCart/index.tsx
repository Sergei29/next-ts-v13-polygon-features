"use client"

import { type ICart } from "@/types"

interface IProps {
  addToCartAction: () => Promise<ICart>
}

const AddToCart = ({ addToCartAction }: IProps) => {
  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => {}}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart
