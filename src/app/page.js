"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h1>Products</h1>
      <Link href='/productlist'>Go to product page</Link>
    </main>
  )
}

