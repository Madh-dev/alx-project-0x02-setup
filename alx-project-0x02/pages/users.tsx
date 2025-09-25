import React from "react";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

// ✅ Define props interface
interface UsersPageProps {
  users: UserProps[];
}

// ✅ Use named function (not arrow)
function Users({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Users Page 👥</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Users;

// ✅ Static data fetching
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
