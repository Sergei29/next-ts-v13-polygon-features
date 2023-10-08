import { useState, useCallback, FormEvent } from "react"

import { IServerActionResult } from "@/types"

interface IState {
  loading?: boolean
  error?: string
  message?: string
}

interface IHookProps {
  serverAction: (formData: FormData) => Promise<IServerActionResult>
  initialState?: IState
}

const useFormData = ({ serverAction, initialState = {} }: IHookProps) => {
  const [status, setStatus] = useState(() => initialState)

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setStatus({ loading: true })

      const formData = new FormData(event.currentTarget)
      const response = await serverAction(formData)

      setStatus(response)
    },
    [serverAction],
  )

  return { status, handleSubmit }
}

export default useFormData
