"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false)
  // const [email, setEmail] = useState<string | string>("")

  // async function signInWithEmail(event: React.SyntheticEvent) {
  //   event.preventDefault()
  //   setIsLoading(true)

  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000)

    // const signInResult = await signIn("email", {
    //   email: email,
    //   callbackUrl: `${window.location.origin}`,
    //   redirect: false,
    // });

    // if (!signInResult?.ok) {
    //   return toast({
    //     title: "Error",
    //     description: "Something went wrong.",
      
    //     duration: 3000,
    //   });
    // }
    // return toast({
    //   title: "Success",
    //   description: "Check your email for the sign in link.",
    //   duration: 3000,

    // });
  // }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(event) => setEmail(event.target.value)}
              
            />
          </div>
          <Button >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form> */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={() => signIn("github", {
        callbackUrl: `${window.location.origin}/dashboard`
      })} variant="outline" type="button" >
        {/* {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : ( */}
          <Icons.gitHub className="mr-2 h-4 w-4" />
        {/* )}{" "} */}
        GitHub
      </Button>
    </div>
  )
}