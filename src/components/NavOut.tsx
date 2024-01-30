import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"
// import {useKindeAuth} from '@kinde-oss/kinde-auth-react';


export default function NavOut() {
  // const { login } = useKindeAuth();
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
            <a className=" w-full items-center py-2 text-lg font-semibold" href="/">
              Home
            </a>
            <a className=" w-full items-center py-2 text-lg font-semibold" href="/blog">
              Blog
            </a>
            {/* <Button variant="ghost" className="btn text-lg font-semibold btn-ghost sign-in-btn font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient" onClick={() => login()}>
              Sign in
            </Button> */}
            <div className=" w-full items-center py-2 text-lg font-semibold">
              <ModeToggle/>
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
        <a className="mr-6 lg:flex hidden text-sm font-medium hover:underline" href="/blog">
          Blog
        </a>
      <nav className="ml-auto hidden lg:flex gap-6 items-center">
        {/* <Button variant="ghost" className="btn btn-ghost sign-in-btn font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient" onClick={() => login()}>
              Sign in
            </Button> */}
       
        <ModeToggle />
      </nav>
    </header>
  )
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