import { ITodo } from "@/types"
import Todo from "@/components/Todo"

interface IProps {
  todos: ITodo[]
}

const TodoList = ({ todos }: IProps): JSX.Element => (
  <div className="my-4 flex flex-wrap justify-center gap-2">
    {todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />
    })}
  </div>
)

export default TodoList
