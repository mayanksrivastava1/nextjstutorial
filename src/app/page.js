import Image from 'next/image'
import '../app/globals.css'
import Profile from '../../public/next.svg'

export default function Home() {
  return (
    <>
      <h1>Image Optimizations in Next Js</h1>
      <Image src={Profile} />
      {/* <img src={Profile.src}/> */}
      
    </>
  )
}

