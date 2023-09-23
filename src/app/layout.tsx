import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { CartProvider } from "@/providers/CartProvider"
import Header from "@/components/Header"
import { getCart, clearCart } from "@/lib"
import { IParentProps } from "@/types"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Donuts & Dragoons Store",
  description: "T-shirts Store by create next app",
}

export const dynamic = "force-dynamic"

const RootLayout = async ({ children }: IParentProps) => {
  const cart = await getCart()

  const clearCartAction = async () => {
    "use server"
    return await clearCart()
  }

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <CartProvider cart={cart}>
          <Header clearCartAction={clearCartAction} />
          <main className="mx-auto max-w-3xl">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}

export default RootLayout
