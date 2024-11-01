/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

interface Album {
    userId: number,
    id: number,
    title: string
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UsersProps {
    users: User[]
}

interface UserProps {
    user: User
}

export default function Cards({users}: UsersProps) {
  console.log("I'm a Client component.");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {users.map((user: User) => (
        <div key={user.id} className="bg-slate-900 text-white shadow-md rounded-lg p-4 transition">
            <Image
                src={`https://i.pravatar.cc/250?u=mail@${user.email}`}
                alt={`${user.name}'s avatar`}
                width={64} // Set width
                height={64} // Set height
                className="rounded-full mx-auto mb-4"
            />

            <Link href={`/dashboard/users/${user.id}`}>
                <h2 className="text-lg font-bold text-center block">{user.name}</h2>
            </Link>
            <p className="text-sm text-gray-400 text-center">@{user.username}</p>
            <p className="text-sm text-gray-300 mt-2 text-center">{user.email}</p>
            <p className="text-xs text-gray-500 mt-1 text-center">
            {user.address.city}, {user.address.street}
            </p>
            <p className="text-xs text-gray-500 mt-1 italic text-center">{user.company.name}</p>
        </div>
      ))}
    </div>
  )
}

export function Card({user}: UserProps) {
  console.log("I'm a Client component.");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

        <div key={user.id} className="bg-slate-900 text-white shadow-md rounded-lg p-4 transition">
            <Image
                src={`https://i.pravatar.cc/250?u=mail@${user.email}`}
                alt={`${user.name}'s avatar`}
                width={64} // Set width
                height={64} // Set height
                className="rounded-full mx-auto mb-4"
            />

            <Link href={`/dashboard/users/${user.id}`}>
                <h2 className="text-lg font-bold text-center block">{user.name}</h2>
            </Link>
            <p className="text-sm text-gray-400 text-center">@{user.username}</p>
            <p className="text-sm text-gray-300 mt-2 text-center">{user.email}</p>
            <p className="text-xs text-gray-500 mt-1 text-center">
            {user.address.city}, {user.address.street}
            </p>
            <p className="text-xs text-gray-500 mt-1 italic text-center">{user.company.name}</p>
        </div>
    </div>
  )
}
