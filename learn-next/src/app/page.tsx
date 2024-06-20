import { authConfig } from "@/src/app/lib/auth";
import { getServerSession } from "next-auth";
import UserCard from "@/src/app/components/UserCard";

export default async function Home() {
  const session = await getServerSession(authConfig);
  return <div>
    {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
      </div>;
}