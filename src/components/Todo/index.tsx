"use client"

import React from "react"

import { useAsyncAction } from "@/lib/hooks/useAsyncAction"
import { deleteTodo, toggleTodoCompleted } from "@/lib/serverActions"
import { ITodo } from "@/types"

interface IProps {
  todo: ITodo
}

const Todo = ({ todo }: IProps): JSX.Element => {
  const deleteAction = useAsyncAction({ asyncAction: deleteTodo })
  const toggleAction = useAsyncAction({ asyncAction: toggleTodoCompleted })
  const { completed, content, id } = todo

  return (
    <div className="flex flex-col gap-1 p-2 bg-slate-300 rounded min-w-[230px]">
      <p>
        Status:{" "}
        <span
          className={
            completed
              ? " text-green-700 border-2 border-green-700 rounded px-1  text-sm"
              : " text-orange-600 border-2 border-orange-600 rounded px-1  text-sm"
          }
        >
          {completed ? "completed" : "in progress..."}
        </span>
      </p>
      <p>{content}</p>
      <div className="flex justify-between gap-2">
        <button
          onClick={() => toggleAction.handleAsync(id)}
          className={`px-1 text-white font-bold rounded text-sm ${
            !completed
              ? " bg-green-600 hover:bg-green-700"
              : "bg-orange-600 hover:bg-orange-700"
          }`}
          disabled={!!toggleAction.status.loading}
        >
          {completed ? "in progress" : "completed"}
        </button>
        <button
          onClick={() => deleteAction.handleAsync(id)}
          className="px-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded text-sm"
          disabled={!!deleteAction.status.loading}
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default Todo
