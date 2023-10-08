"use client"

import { useFormData } from "@/lib/hooks/useFormData"
import { createTodoAction } from "@/lib/serverActions"

const NewTodoForm = (): JSX.Element => {
  const { handleSubmit, status, formRef } = useFormData({
    serverAction: createTodoAction,
  })

  return (
    <div className="min-h-[150px] flex flex-col justify-between">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="p-2 bg-slate-200 rounded max-w-[350px] flex flex-col justify-center items-center my-2"
      >
        <input name="content" type="text" className="w-full rounded-md p-1" />
      </form>
      {status.loading && (
        <p className="pl-2 font-semibold text-blue-600 my-2">loading...</p>
      )}
      {status.error && (
        <p className="pl-2 font-semibold text-red-600 my-2">{status.error}</p>
      )}
    </div>
  )
}

export default NewTodoForm
