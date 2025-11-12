import Image from "next/image"
import Link from "next/link"

// localhost:3000/helloWorld
// h-screen: takes screen size = viewport (great for debugging, care for production)
// gap: related to flex (spacing between items)

// Flex-direction: Dictates Axis (x or y)
// justify-center: Main Axis (relation towards flex-direction)
// items-center: Cross Axis (relation towards flex-direction)

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center text-sky-500">
        <Link href="/about">About</Link>
        <Link href="/about">TBD</Link>
        <Link href="/about">TBD</Link>
      </div>

      <div className=" h-screen flex flex-col justify-center gap-4 bg-amber-950">
        <p>Hello 0</p>
        <p>Hello 1</p>
        <p>Hello 2</p>
      </div>

      <div className=" h-screen flex flex-row justify-center items-center gap-4  bg-amber-800">
        <p>Hello 0</p>
        <p>Hello 1</p>
        <p>Hello 2</p>
      </div>
    </div>
  )
}
