"use client"

import { useState } from "react"

interface IProps {}

const NewTodoForm = ({}: IProps): JSX.Element => {
  const [state, setState] = useState("")

  return (
    <div>
      <form action="">
        <input type="text" />
      </form>
    </div>
  )
}

export default NewTodoForm
