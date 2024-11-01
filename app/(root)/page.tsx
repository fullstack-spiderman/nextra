/* eslint-disable @next/next/no-img-element */
import Cards from "../components/cards";

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

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export default async function Home() {
  const URL = "https://jsonplaceholder.typicode.com/users"

  const response: Response = await fetch(URL)

  if (!response.ok) throw new Error("Failed to fetch data.");

  const users: User[] = await response.json()

  if (!users) return <p>No users found.</p>

  return (
    <Cards users={users} />
  );
}
