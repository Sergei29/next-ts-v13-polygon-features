import React from "react"
import Link from "next/link"

import { getProducts } from "@/lib"
import ProductCard from "@/components/ProductCard"

const Homepage = async () => {
  const products = await getProducts()

  return (
    <div className="flex flex-wrap gap-2">
      <ul role="list" className="flex flex-row flex-wrap m-2">
        {products.map((product) => (
          <li key={product.id} className="md:w-1/3">
            <Link href={`/products/${product.id}`}>
              <ProductCard {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Homepage
