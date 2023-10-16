"use client"

export default function Product({price}) {
  return (
    <div>
      <button onClick={()=>alert(`${price} dollars`)}> Check Price</button>
    </div>
  )
}
