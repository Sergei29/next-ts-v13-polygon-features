import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

import { ICart, ICartState, IReview, IReviewsState } from "@/types"

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

const initialReviews: IReviewsState = {
  reviews: null,
}

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialReviews,
  reducers: {
    setReviews: (state, action: PayloadAction<IReview[]>) => {
      state.reviews = action.payload
    },
  },
})

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
      reviews: reviewsSlice.reducer,
    },
    devTools: true,
  })

export const { setCart } = cartSlice.actions
export const { setReviews } = reviewsSlice.actions

export type StoreType = ReturnType<typeof createStore>
export type RootState = ReturnType<StoreType["getState"]>
export type AppDispatch = StoreType["dispatch"]

export const useCart = () => useSelector((state: RootState) => state.cart.cart)
export const useReviews = () =>
  useSelector((state: RootState) => state.reviews.reviews)
