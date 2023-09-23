"use client"

import { IReview } from "@/types"

interface IProps {
  reviews: IReview[]
}

const AverageRating = ({ reviews }: IProps): JSX.Element => {
  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  )
}

export default AverageRating
