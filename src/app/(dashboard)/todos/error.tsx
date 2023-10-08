"use client"

interface IErrorPageProps {
  error: { digest: string; message: string; stack: string }
  reset: () => void
}

const ErrorTodos = (props: IErrorPageProps): JSX.Element => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="tex-3xl font-bold text-center text-red-600">
        {props.error.message}
      </h1>
    </div>
  )
}

export default ErrorTodos
