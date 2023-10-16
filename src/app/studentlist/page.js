import Link from 'next/link'
import React from 'react'

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
           <Link href={'/studentlist/anil'}>Anil</Link> 
        </li>
        <li>
           <Link href={'/studentlist/ram'}>Ram</Link> 
        </li>
        <li>
           <Link href={'/studentlist/shyam'}>Shyam</Link> 
        </li>
        <li>
           <Link href={'/studentlist/mahesh'}>Mahesh</Link> 
        </li>
      </ul>
    </div>
  )
}
