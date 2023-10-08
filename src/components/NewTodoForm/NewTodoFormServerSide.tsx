import { createTodoAction } from "@/lib/serverActions"

const NewTodoFormServerSide = (): JSX.Element => {
  return (
    <form
      action={createTodoAction as unknown as string}
      className="p-2 bg-slate-200 rounded h-[10vh] max-w-[350px] flex flex-col justify-center items-center my-2"
    >
      <input name="content" type="text" className="w-full rounded-md p-1" />
    </form>
  )
}

export default NewTodoFormServerSide
