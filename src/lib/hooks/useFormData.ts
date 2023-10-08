import { useState, useCallback, FormEvent, useRef } from "react"

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

export const useFormData = ({
  serverAction,
  initialState = {},
}: IHookProps) => {
  const [status, setStatus] = useState(() => initialState)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setStatus({ loading: true })

      const formData = new FormData(event.currentTarget)
      const response = await serverAction(formData)

      setStatus(response)
      formRef.current && formRef.current.reset()
    },
    [serverAction],
  )

  return { status, handleSubmit, formRef }
}
