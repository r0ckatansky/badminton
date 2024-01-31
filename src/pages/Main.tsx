// page d'acceuil

import { useState } from "react";
import { Button } from "src/components/import_shadcn/button";
// import { Input } from "src/components/import_shadcn/input";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "src/components/import_shadcn/alert-dialog"
import { Label } from "src/components/import_shadcn/label";
import { Input } from "src/components/import_shadcn/input";
import { RadioGroup, RadioGroupItem } from "src/components/import_shadcn/radio-group";


export default function Main() {  

  interface Joueur {
    nom: string;
    sexe: string;
    niveau: string;
  }
  // liste des joueurs
  const [ joueurs, setJoueurs ] = useState<Joueur[]>([])
  const nbjoueurs = joueurs.length

  const [ nom, setNom ] = useState<string>("")
  const [ sexe, setSexe ] = useState<string>("")
  const [ niveau, setNiveau ] = useState<string>("0")

  const handleclickjoueur = () => {
    // ouvre une fenetre pour ajouter un joueur
    setJoueurs([...joueurs, {nom: nom, sexe: sexe, niveau: niveau}])

    // il faut ajouter le joueurs dans le local storage 
    localStorage.setItem('joueurs', JSON.stringify(joueurs))
    console.log(joueurs)  
  }

  return (
    <div className="grid grid-cols-3">
        <div className="h-[100%] border-2 text-center ">
            <div className="grid grid-cols-2">
                <p className="my-auto">ajouter un joueur </p>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button className="my-4">+</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Ajouter un joueur</AlertDialogTitle>
                      <AlertDialogDescription>
                        Formulaire d'ajout de joueur
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    
                    <Label>Nom</Label>
                    <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNom(event.target.value.toString())}></Input>

                    {/* <p>nom du joueur : {nom}</p> */}

                    <Label>Niveau</Label>
                    <RadioGroup >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem onClick={(event: any) => setNiveau(event.target.value.toString())} value="1" />
                        <Label htmlFor="1" >niveau 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem onClick={(event: any) => setNiveau(event.target.value.toString())} value="2" />
                        <Label>niveau 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem onClick={(event: any) => setNiveau(event.target.value.toString())}  value="3" />
                        <Label>niveau 3</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem onClick={(event: any) => setNiveau(event.target.value.toString())} value="4" />
                        <Label>niveau 4</ Label>
                      </div>
                    </RadioGroup>

                    {/* <Label>niveau : {niveau}</Label> */}


                    <Label>Sexe</Label>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                      <RadioGroupItem onClick={(event: any) => setSexe(event.target.value.toString())} value="1" id="option-one" />
                        <Label>Homme</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                      <RadioGroupItem onClick={(event: any) => setSexe(event.target.value.toString())} value="0" id="option-one" />
                        <Label>Femme</Label>
                      </div>
                    </RadioGroup>

                    {/* <Label>sexe : {sexe}</Label> */}



                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleclickjoueur} >Ajouter le joueur</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
            </div>
          {joueurs.map((joueur, index) => (
            <p key={index} className="my-auto">{joueur.nom}, {joueur.sexe === "0" ? " Femme de" : " Homme de "} niveau {joueur.niveau}</p>
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


                    