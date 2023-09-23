import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

import { ICart, ICartState } from "@/types"

const initialState: ICartState = {
  cart: {
    products: [],
  },
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ICart>) => {
      state.cart = action.payload
    },
  },
})

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
    devTools: true,
  })

export const { setCart } = cartSlice.actions

export type StoreType = ReturnType<typeof createStore>
export type RootState = ReturnType<StoreType["getState"]>
export type AppDispatch = StoreType["dispatch"]

export const useCart = () => useSelector((state: RootState) => state.cart.cart)
