
class Personnage{
    constructor(_nom){
        this.nom = _nom;
        this.vie = Personnage.nbAleatoire();
        this.attaque = Personnage.nbAleatoire();
        this.defense = Personnage.nbAleatoire();
        this.existe = false;

        if (this.nom != ""){
            this.existe = true;
            console.log('Nouveau personnage ' + this.nom + " créé !");
        }
        else{
            alert("Message d'erreur");
        }
    }
    info(){
        console.log("Le personnage " + this.nom + " à pour vie " + this.vie + "\nà pour attaque " + this.attaque + "\nà pour défense " + this.defense);
    }
    attaquer(defenseur){
        console.log("Le personnage " + this.nom + " attaque " + defenseur.nom);
        if (this.attaque > defenseur.defense){
            defenseur.vie -= 10;
        }
        if (this.attaque == defenseur.defense){
            defenseur.vie -= 5;
        }
        if(this.attaque < defenseur.defense){
            this.vie -= 5;
        }
        this.info();

        defenseur.info();

        if (this.vie <= 0){
            console.error("Le personnage " + this.nom + " est dead.");
            this.existe = false;
        }

        if (defenseur.vie <= 0){
            console.error("Le personnage " + defenseur.nom + " est dead.");
            defenseur.existe = false;
        }
    }

    static nbAleatoire(){
        return Math.round((100-20)
        *Math.random()+20);
    }
    }  
    


/*let perso1 = new Personnage("toto");

perso1.info();

let perso2 = new Personnage("tutu");

perso2.info();

perso1.attaquer(perso2);

perso2.attaquer(perso1);*/

const nbrJoueur = 2;

let nbrJoueurcree = 0;
var nom = "";

var players = [];

while (nom == "" && nbrJoueurcree < nbrJoueur){
     nom = prompt("Saisir un nom :");
     if (nom != ""){
        var perso = new Personnage(nom);
        players.push(perso);
        nbrJoueurcree += 1;
        nom = "";
     }
}
console.log(players);