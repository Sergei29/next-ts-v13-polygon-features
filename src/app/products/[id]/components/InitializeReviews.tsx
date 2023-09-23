"use client"

import { useRef } from "react"
import { useStore } from "react-redux"
import { setReviews, RootState } from "@/store/store"

import { IReview, IParentProps } from "@/types"

interface IProps extends IParentProps {
  initialReviews: IReview[]
}

const InitializeReviews = ({
  children,
  initialReviews,
}: IProps): JSX.Element => {
  const store = useStore<RootState>()
  const initialized = useRef(false)

  if (!initialized.current) {
    store.dispatch(setReviews(initialReviews))
    initialized.current = true
  }

  return <>{children}</>
}

export default InitializeReviews
