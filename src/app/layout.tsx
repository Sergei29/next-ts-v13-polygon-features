import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Navigation from "@/components/Navigation"
import { IParentProps } from "@/types"
import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "Image gallery using pexel api and Next.js",
}

const RootLayout = ({ children }: IParentProps) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        <main className="max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
