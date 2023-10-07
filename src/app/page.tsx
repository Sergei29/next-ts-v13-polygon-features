import React from "react"
import type { NextPage } from "next"

import NewTodoForm from "@/components/NewTodoForm"
interface IPageProps {
  [x: string]: any
}

const Homepage: NextPage<IPageProps> = ({}) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Todo app</h1>
      <NewTodoForm />
    </>
  )
}

export default Homepage
