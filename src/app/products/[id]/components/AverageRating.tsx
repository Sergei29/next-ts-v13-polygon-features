"use client"

import { useReviews } from "@/providers/ReviewsProvider"

const AverageRating = (): JSX.Element => {
  const [reviews] = useReviews()

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
