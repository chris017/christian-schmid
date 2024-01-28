import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"

export default function Nav() {
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
            <div className=" w-full items-center py-2 text-lg font-semibold">
              <ModeToggle/>
              </div>
          </div>
        </SheetContent>
      </Sheet>
      <a className="mr-6 hidden lg:flex text-xl" href="/">
        CS
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto hidden lg:flex gap-6 items-center">
        <a className="text-sm font-medium hover:underline" href="/">
          Home
        </a>
        <a className="text-sm font-medium hover:underline" href="/blog">
          Blog
        </a>
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