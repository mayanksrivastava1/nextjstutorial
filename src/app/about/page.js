import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Go to home page</Link>
      <br/>
      <Link href={"/about/aboutCollege"}> Go to About college page</Link>
    </div>
  )
}

export default About
