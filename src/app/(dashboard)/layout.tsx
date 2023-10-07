import { IParentProps } from "@/types"

const DashboardLayout = ({ children }: IParentProps): JSX.Element => {
  return (
    <div className=" bg-slate-200 rounded h-[70vh] p-2">
      <h2 className="text-2xl font-bold">Dashboard layout</h2>
      {children}
    </div>
  )
}

export default DashboardLayout
