"use client"

import * as React from "react"
import { Link } from 'react-router-dom';


import { cn } from "../lib/utils"
import { Button } from "./import_shadcn/button";

export default function MainNav() {

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-6 text-sm">
        <h1 className="m-2">Tournois de Badminton</h1>
      {/* <Link to="/test"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button variant="outline" >Test</Button>
        
        </Link>
        <Link to="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button variant="outline" >Home</Button>
        </Link>
        <Link to="/NouveauProjet"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          <Button variant="outline" >Nouveau Projet</Button>
        </Link>
        <Link to="/archive"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button variant="outline" >Archive</Button>
        </Link>
        <Link to="/equipe"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button variant="outline" >Archive</Button>
        </Link> */}

        {/* <Link to="/test"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button variant="ghost" >Test</Button>
        
        </Link>
        <Link to="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button>Home</Button>
        </Link>
        <Link to="/NouveauProjet"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          <Button>Nouveau Projet</Button>
        </Link>
        <Link to="/archive"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button>Archive</Button>
        </Link>
        <Link to="/equipe"
          className={cn(
            "transition-colors hover:text-foreground/80",
            // pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
        <Button>Equipe</Button>
        </Link> */}

      </nav>
    </div>
  )
}
