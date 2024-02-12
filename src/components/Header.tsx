import  MainNav  from "./MainNav"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "./import_shadcn/button"




export default function SiteHeader( { onClick } : any) {


  const handleModeClick = () => {
    onClick();
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            
          </div>
          <nav className="flex items-center">
          <Button onClick={() => handleModeClick()} variant="ghost" className="w-9 px-0">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
