import { Metadata } from "next"
import Link from "next/link"

import { UserAuthForm } from "@/app/components/user-auth-form"
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default async function AuthRoute() {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect("/")
  }
  return (
    <>
      <Header />
      <div className="container relative  h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">       
        <div className="lg:p-44 pt-24">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Please sign in
              </h1>
              <p className="text-sm text-muted-foreground">
                To access you have to be authenticated.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}