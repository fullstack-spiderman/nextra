import Link from "next/link"

export default function UsersPage() {
  const userIds = [1, 2, 3, 4, 5]
  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl">Users dashboard page</h1>
      <ul className="m-10">
        {userIds.map(id => <li key={id}><Link href={`/dashboard/users/${id}`}>User {id}</Link></li>)}
      </ul>
    </div>
  )
}
