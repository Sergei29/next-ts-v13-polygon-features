import React from "react"
import type { NextPage } from "next"

interface IPageProps {
  [x: string]: any
}

const Homepage: NextPage<IPageProps> = ({}) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Next.JS v13</h1>
    </>
  )
}

export default Homepage
