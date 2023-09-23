"use client"

import { useState, useContext, createContext } from "react"

import { IParentProps, IReview } from "@/types"

const useReviewsState = (initialReviews: IReview[]) =>
  useState<IReview[]>(() => initialReviews)

const ReviewsContext = createContext<ReturnType<typeof useReviewsState> | null>(
  null,
)

interface IProps extends IParentProps {
  reviews: IReview[]
}

export const ReviewsProvider = ({ children, reviews }: IProps): JSX.Element => {
  const state = useReviewsState(reviews)

  return (
    <ReviewsContext.Provider value={state}>{children}</ReviewsContext.Provider>
  )
}

export const useReviews = () => {
  const ctx = useContext(ReviewsContext)

  if (!ctx) {
    throw new Error(
      "Reviews context not found. Check your ReviewsProvider scope.",
    )
  }

  return ctx
}
