"use client"

import * as React from "react"
import { useState } from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "./import_shadcn/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./import_shadcn/dropdown-menu"


interface ModeToggleProps {
  onToggle: (mode: string) => void; // Précisez ici le type de la fonction de rappel
}


export function ModeToggle({onToggle} :  ModeToggleProps) {
//   const { setTheme } = useTheme()

  const [mode, setMode] = useState<string>();

  const handleModeClick = (mode : string) => {
    setMode(mode);
    onToggle(mode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleModeClick}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleModeClick}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}