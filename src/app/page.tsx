import React from "react"
import type { NextPage } from "next"

import Chat from "@/components/Chat"
interface IPageProps {
  [x: string]: any
}

const Homepage: NextPage<IPageProps> = ({}) => {
  return (
    <>
      <Chat />
    </>
  )
}

export default Homepage
