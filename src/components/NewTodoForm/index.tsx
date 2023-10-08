"use client"

import { useState } from "react"

interface IProps {}

const NewTodoForm = ({}: IProps): JSX.Element => {
  return (
    <div>
      <form>
        <input name="content" type="text" />
      </form>
    </div>
  )
}

export default NewTodoForm
