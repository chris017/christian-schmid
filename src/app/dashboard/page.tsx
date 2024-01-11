import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { LogoutButton } from "../components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default async function Page() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <div className="pt-28 sm:pt-28 lg:pt-36">
      <h1>Hello, from Dashboard</h1>
      <p>This is a public Route</p>
      {session ?(
       <div>
       <p>You are signed in</p>
        <LogoutButton />
      </div>
      ):(
        <div>
        <p>You are not signed in.</p>
        <Button asChild>
          <Link href="/auth">Sign In</Link>
        </Button>
        </div>
      )}
      </div>
    </div>
  );
}
