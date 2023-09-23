"use client"

import { useState, useContext, createContext } from "react"

import { IParentProps, ICart } from "@/types"

const useCartState = (initialCart: ICart) => useState<ICart>(() => initialCart)

const CartContext = createContext<ReturnType<typeof useCartState> | null>(null)

interface IProps extends IParentProps {
  cart: ICart
}

export const CartProvider = ({ children, cart }: IProps): JSX.Element => {
  const state = useCartState(cart)

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)

  if (!ctx) {
    throw new Error("Cart context not found. Check your CartProvider scope.")
  }

  return ctx
}
