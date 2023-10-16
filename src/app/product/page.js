import React from 'react'
import { useState,useEffect } from 'react'

export default function page() {
    useEffect( async () => {
      let data = await fetch('')
      data = await data.json()
    }, [])
    
  return (
    <div>
      
    </div>
  )
}
