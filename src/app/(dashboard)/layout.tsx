import { IParentProps } from "@/types"

import NewTodoFormServerSide from "@/components/NewTodoForm/NewTodoFormServerSide"

const DashboardLayout = ({ children }: IParentProps): JSX.Element => {
  return (
    <div className=" bg-slate-200 rounded h-[70vh] p-2">
      <NewTodoFormServerSide />
      {children}
    </div>
  )
}

export default DashboardLayout
