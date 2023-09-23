"use client"

import { useRef } from "react"
import { Provider } from "react-redux"

import { setCart, createStore } from "@/store/store"
import { IParentProps, ICart } from "@/types"

interface IProps extends IParentProps {
  cart: ICart
}

const StoreProvider = ({ children, cart }: IProps): JSX.Element => {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null)

  if (!storeRef.current) {
    storeRef.current = createStore()
    storeRef.current.dispatch(setCart(cart))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
