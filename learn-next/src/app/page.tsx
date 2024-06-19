import { GoogleSignInButton } from "../components/authButtons";
import { GithubSignInButton } from "../components/authButtons";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-4xl my-3">Next Auth</h1>

      <GoogleSignInButton />
      <GithubSignInButton />
    </div>
  )
}