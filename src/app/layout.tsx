import '@/styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from '@/components/Header'
import { getCart, clearCart } from "@/lib";
import { IParentProps } from "@/types";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        <Header cart={cart} clearCartAction={clearCartAction} />
        <main className="mx-auto max-w-3xl">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout
