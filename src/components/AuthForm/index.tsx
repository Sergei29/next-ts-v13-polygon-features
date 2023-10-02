"use client"

import React from "react"
import { signIn } from "next-auth/react"

const registerNewUser = async (formData: FormData) => {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const data = await res.json()
    console.log("data: ", data)
  } catch (error) {
    console.log("error", error)
  }
}

interface IProps {
  isRegister: boolean
}

const AuthForm = ({ isRegister }: IProps): JSX.Element => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (isRegister) {
      registerNewUser(formData)
    } else {
      const response = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      })

      console.log("response: ", response)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 mx-auto mt-10 max-w-md"
    >
      <input
        type="email"
        name="email"
        className="border border-black px-2 py-1 rounded"
      />
      <input
        type="password"
        name="password"
        className="border border-black px-2 py-1 rounded"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded w-full bg-black text-white font-semibold"
      >
        {isRegister ? "register" : "login"}
      </button>
    </form>
  )
}

export default AuthForm
