// page d'acceuil

import { useEffect, useState } from "react";
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
import { set } from "react-hook-form";
import { loadavg } from "os";


export default function Main() {  

 
  interface Joueur {
    id: string;
    nom: string;
    sexe: string;
    niveau: string;
  }
  // liste des joueurs
  const [ joueurs, setJoueurs ] = useState<Joueur[]>([])

  const [ nom, setNom ] = useState<string>("")
  const [ sexe, setSexe ] = useState<string>("")
  const [ niveau, setNiveau ] = useState<string>("0")

  const wipe = () => {

      // ajouter le joueur dans la liste des joueurs
      const x = parseInt(localStorage.getItem('compteur_joueur') ?? "0",10)

      for (let i = 1; i < x+1; i++) {
        localStorage.removeItem('joueur_' + i)
        console.log("je remove le joueur " + i)
      }

      localStorage.removeItem('compteur_joueur')

      peuple()


  }


  const affiche_tout = () => {
  
    const x = parseInt(localStorage.getItem('compteur_joueur') ?? "0",10)

    console.log("compteur de joueurs : " + x)

    for (let i = 1; i < x+1; i++) {
      console.log(localStorage.getItem('joueur_' + i))
    }
  
  }

  const peuple = () => {
    // ajouter le joueur dans la liste des joueurs
    const x = parseInt(localStorage.getItem('compteur_joueur') ?? "0",10)

    
    setJoueurs([])
    
      for (let i = 1; i < x+1; i++) {
        const joueur = localStorage.getItem('joueur_' + i)
        console.log(joueur)
        if (joueur !== null) {
          const joueur_split = joueur.split(" ")
          const joueur_obj = {id: joueur_split[1], nom: joueur_split[2], sexe: joueur_split[3], niveau: joueur_split[4]}
          setJoueurs([...joueurs, joueur_obj])
        }
      }
  }
  
  const suppr_joueur = (index: number) => {
    console.log("je supprime le joueur " + index)
    localStorage.removeItem('joueur_' + index)
    peuple()
  }

  const handleclickjoueur = async () => {

    // incrementer le compteur de joueurs dans le local storage
    await localStorage.setItem('compteur_joueur', JSON.stringify(parseInt(localStorage.getItem('compteur_joueur') ?? "0",10)+1))
    
    // ajouter le joueur dans le local storage
    await localStorage.setItem("joueur_" + localStorage.getItem('compteur_joueur') ?? "0", JSON.stringify(" "+localStorage.getItem('compteur_joueur')+" "+nom +" "+niveau+" "+sexe + " "))

    // ajouter le joueur dans la liste des joueurs
    peuple()
  }



        
  const affiche_joueurs = () => {
    return (
      <div>
        {joueurs.map((joueur, index) => (
          <div className="grid grid-cols-2" key={index}>
            <p> id: {joueur.id} ,{joueur.nom}, {joueur.sexe === "0" ? "femme" : "homme"} de niveau {joueur.niveau}</p>
            <Button onClick={() => suppr_joueur(Number(joueur.id))}>Supprimer</Button>
          </div>
        ))}
      </div>
    );
  };
  

    return (
      <>
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


          {affiche_joueurs()}


        </div>
        <div className="h-[100%] border-2">
        <p className="text-center" >Visualisation des matchs </p>

        </div>
        <div className="h-[100%] border-2">
        <p className="text-center" >scores des joueurs </p>

        </div>
    </div>
    <div>
      <Button className="m-2" onClick={ () => affiche_tout()}>test</Button>
      <Button className="m-2"onClick={ () => wipe() }>effacer le stockage</Button>
    </div>
    </>
  );
}


                    