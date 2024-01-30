// page d'acceuil

import { useState } from "react";
import { Button } from "src/components/import_shadcn/button";
import { Input } from "src/components/import_shadcn/input";

export default function Main() {  

  // liste des joueurs
  const [ joueurs, setJoueurs ] = useState<string[]>([])
  const nbjoueurs = joueurs.length

  const handleclickjoueur = () => {
    // ouvre une fenetre pour ajouter un joueur

    
    
    setJoueurs([...joueurs, "joueur"])
    console.log(joueurs)  
  }

  return (
    <div className="grid grid-cols-3">
        <div className="h-[100%] border-2 text-center ">
            <div className="grid grid-cols-2">
                <p className="my-auto">ajouter un joueur </p>
                <Button  onClick={handleclickjoueur}className="m-3"> + </Button>
            </div>
            {Array.from({ length: nbjoueurs }, (_, i) => (
              <p key={i} className="my-auto">Joueur {i}</p>
            ))}


        </div>
        <div className="h-[100%] border-2">
        <p className="text-center" >Visualisation des matchs </p>

        </div>
        <div className="h-[100%] border-2">
        <p className="text-center" >scores des joueurs </p>

        </div>
    </div>
  );
}


                    