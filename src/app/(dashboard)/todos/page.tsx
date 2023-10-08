import { db } from "@/lib/db"
import { ITodo } from "@/types"
import TodoList from "@/components/TodoList"

const getTodos = async (): Promise<[ITodo[], null] | [null, string]> => {
  try {
    const todos = await db.todo.findMany({})
    return [todos, null]
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to get todos"
    return [null, errorMessage]
  }
}

const TodosPage = async () => {
  const [todos, error] = await getTodos()

  return (
    <>
      <h1 className="text-3xl font-bold underline">Todos Page</h1>
      {error && (
        <p className=" text-center text-red-600 font-bold my-2">{error}</p>
      )}
      {todos && <TodoList todos={todos} />}
    </>
  )
}

export default TodosPage
