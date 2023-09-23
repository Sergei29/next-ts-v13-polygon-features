"use client"

import { useDispatch } from "react-redux"
import { setCart } from "@/store/store"
import { type ICart } from "@/types"

interface IProps {
  addToCartAction: () => Promise<ICart>
}

const AddToCart = ({ addToCartAction }: IProps) => {
  const dispatch = useDispatch()

  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => {
        const newCart = await addToCartAction()
        dispatch(setCart(newCart))
      }}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart
