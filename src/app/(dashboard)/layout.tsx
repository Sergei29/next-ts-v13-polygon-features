import { IParentProps } from "@/types"

import NewTodoFormServerSide from "@/components/NewTodoForm/NewTodoFormServerSide"
import NewTodoForm from "@/components/NewTodoForm"

const DashboardLayout = ({ children }: IParentProps): JSX.Element => {
  return (
    <div className=" bg-slate-200 rounded h-[70vh] p-2">
      <NewTodoFormServerSide />
      {/* <NewTodoForm /> */}
      {children}
    </div>
  )
}

export default DashboardLayout
