import {Card, User} from "@nextra/app/components/cards"
import Link from "next/link"
import {notFound} from "next/navigation"

interface Props {
  params: {id: string}
}
export default async function Users({params}: Props) {
  const {id} = await Promise.resolve(params)
  const userId = parseInt(id)

  if (isNaN(userId) || userId > 10) {
    notFound()
  }

  const URL = `https://jsonplaceholder.typicode.com/users/${userId}`

  const response: Response = await fetch(URL)

  if (!response.ok) throw new Error("Failed to fetch data.");

  const user: User = await response.json()

  if (!user) return <p>No user found.</p>


  return (
    <>
      <Link href="/">
        <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded my-4">
          Home
        </button>
      </Link>
      <Card user={user} />
    </>
  )
}
