import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, DoorClosed, Home, Settings, BookOpen, Gauge, ArrowRightIcon } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "./ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const navItems = [
  { name: "Home", href: "/", icon: Home },
 
  { name: "Dashboard", href: "/dashboard", icon: Gauge },

  { name: "Blog", href: "/dashboard/blog", icon: BookOpen },
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between">
    <a className="flex items-center py-4 lg:hidden text-xl" href="/">
      CS
      <span className="sr-only">Acme Inc</span>
    </a>
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" size="icon" variant="ghost">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[540px]">
        <div className="grid gap-2 pt-24  text-center justify-center ">
          <a className="w-full items-center text-lg font-semibold">
            Hello
            <br />
            <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">{name}</span>
          </a>
          <Separator />
          <a className=" w-full items-center text-lg font-semibold" href="/">
              Home
            </a>
            <a className=" w-full items-center text-lg font-semibold" href="/dashboard">
              Dashboard
            </a>
            <a className=" w-full items-center text-lg font-semibold" href="/dashboard/blog">
              Blog
            </a>
            <LogoutLink>
            <span className="w-full items-center text-lg font-semibold">Log Out{" "}</span>
            </LogoutLink>
          <div className=" w-full items-center text-lg font-semibold">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
    <a className="mr-6 hidden lg:flex text-2xl" href="/">
        CS
        <span className="sr-only">Acme Inc</span>
      </a>
      <a className="mr-6 lg:flex hidden text-sm font-medium hover:underline" href="/">
          Home
        </a>
        <a className="mr-6 lg:flex hidden text-sm font-medium hover:underline" href="/dashboard">
        Dashboard
        </a>
        <a className="mr-6 lg:flex hidden text-sm font-medium hover:underline" href="/dashboard/blog">
        Blog
        </a>
    <nav className="ml-auto hidden lg:flex gap-6 items-center">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={image ?? ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="w-full flex justify-between items-center"
            asChild
          >
          <LogoutLink>
            Sign out
            </LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </header>
  );
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}