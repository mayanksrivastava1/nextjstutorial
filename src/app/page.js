'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <main >
      <h1>Event , Functions and State</h1>
      <Link href="/login"> Go to login page</Link>
      <br/>
      <br/>
      <Link href="/about"> Go to About page</Link>
      <br/>
      <br/>
      <button onClick={()=>router.push('/login')}>Go to login page</button>
    </main>
  )
}

