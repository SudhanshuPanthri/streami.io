import { UserButton } from "@clerk/nextjs"


//protected route
export default function Home() {
  return (
    <p className='text-xl text-red-300'>
      Hello World
      <UserButton />
    </p>
  )
}
