// page d'acceuil

import { useCallback, useEffect, useState } from "react";
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



  const handleenvoie = () => {
    EnvoieJoueur()
  }


  const affiche_tout = () => {
    let string  = localStorage.getItem("listeJoueur") ?? "";
    console.log(string)
    
  }

  const initie = () => {
    localStorage.setItem("listeJoueur", "x x x x x x x x x x x x x x x x x x x x")
  }

  const EnvoieJoueur =  () => {
    let string  =  localStorage.getItem("listeJoueur") ?? "";
    // console.log(string)

    
    let liste = string.split(" ");


    for (let i=0;i<liste.length+1;i++){
      
      if (liste[i] === "x"){
        // console.log("j'ai trouvé un x à l'endroit : "+ i)
        liste[i]= `(_ ${i} _ ${nom} _ ${niveau} _ ${sexe} + _+ `
        i=liste.length+1
      }
    };

    let string2 = liste.join(" ")
    // console.log("la liste finale ")
    // console.log(string2)
    localStorage.setItem("listeJoueur",string2)
    peuple()
  }

    // fonction qui met a jour la liste local par rapport au local storage
    const peuple = useCallback(() => {
      let string  =  localStorage.getItem("listeJoueur") ?? "";
      let liste = string.split(" ");
      
      let newJoueurs: Joueur[] = [];
    
      for (let i=0;i<liste.length-1;i++){
        if (liste[i] !== "x"){
          let joueur = liste[i].split("_")
          const joueur_obj = {id: joueur[1], nom: joueur[2], sexe: joueur[4], niveau: joueur[3]}
          newJoueurs.push(joueur_obj);
        }
      };
    
      setJoueurs(newJoueurs);
    }, []); // add dependencies if any

    useEffect(() => {
      peuple();
    }, [peuple]); // Empty dependency array means this effect runs once on mount
  
  //   const peuple = () => {

  // }
 

  
  const suppr_joueur = (index: number) => {
    let string  =  localStorage.getItem("listeJoueur") ?? "";
    // console.log(string)

    
    let liste = string.split(" ");


      
    if (liste[index] !== "x"){
      console.log("j'ai trouvé un celui que je retire à l'endroit ")
      liste[index]= "x"
    }
    

    let string2 = liste.join(" ")
    // console.log("la liste finale ")
    // console.log(string2)
    localStorage.setItem("listeJoueur",string2)
    peuple()
  }




        
  const affiche_joueurs = () => {
    return (
      <div>
        {joueurs.map((joueur, index) => (
          <div className="grid grid-cols-2" key={index}>
            <p> <div className="text-bold">{joueur.nom}</div>, {joueur.sexe === "0" ? "femme" : "homme"} de niveau {joueur.niveau}</p>
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
                      <AlertDialogAction onClick={() => handleenvoie()} >Ajouter le joueur</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
            </div>

            {affiche_joueurs()  }

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
      <Button className="m-2" onClick={ () => EnvoieJoueur()}>EnvoieJoueur</Button>
      <Button className="m-2" onClick={ () => initie()}>initie</Button>

      
      {/* <Button className="m-2"onClick={ () => wipe() }>effacer le stockage</Button> */}
    </div>
    </>
  );
}


                    