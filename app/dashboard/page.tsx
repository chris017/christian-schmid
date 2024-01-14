import { auth } from "auth"

import { SessionProvider } from "next-auth/react"
import Header from "@/components/header"
import { Dashboardv2 } from "@/components/dashboardv2"

export default async function ClientPage() {
  const session = await auth()
  if (session?.user) {
    // @ts-expect-error TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider session={session}>
        <Header />
        {/* <Dashboard /> */}
        <Dashboardv2 />
    </SessionProvider>
  )
}
