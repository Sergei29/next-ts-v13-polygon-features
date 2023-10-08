import { useState, useEffect, useCallback, useTransition } from "react"

import { IServerActionResult } from "@/types"

interface IState {
  loading?: boolean
  error?: string
  message?: string
}

interface IHookProps<Arg = any> {
  asyncAction: (arg: Arg) => Promise<IServerActionResult>
  initialState?: IState
}

export const useAsyncAction = <A>({
  asyncAction,
  initialState = {},
}: IHookProps<A>) => {
  const [status, setStatus] = useState(() => initialState)
  const [isPending, startTransition] = useTransition()

  const handleAsync = async (param: A) => {
    setStatus({ loading: true })
    const response = await asyncAction(param)
    setStatus(response)
  }

  const handleAsyncTransition = (param: A) => {
    startTransition(() => {
      handleAsync(param)
    })
  }

  return {
    handleAsync,
    handleAsyncTransition,
    status: { ...status, loading: status.loading || isPending },
  }
}
