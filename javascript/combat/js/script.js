
class Personnage {
    #vie = 0;
    #attaque = 0;
    #defense = 0;
    #nom = "";
    #existe = false;

    constructor(_nom) {
        this.setnom(_nom);
        this.setvie(Personnage.nbAleatoire());
        this.setattaque(Personnage.nbAleatoire());
        this.setdefense(Personnage.nbAleatoire());
        this.setexiste(false);

        if (this.getnom() != "") {
            this.setexiste(true);
            console.log('Nouveau personnage ' + this.getnom() + " créé !");
        }
        else {
            alert("Message d'erreur");
        }
    }
    getexiste() {
        return this.#existe;
    }
    setexiste(_existe) {
        this.#existe = _existe;
    }
    getnom() {
        return this.#nom;
    }
    setnom(_nom) {
        this.#nom = _nom;
    }
    getvie() {
        return this.#vie;
    }
    setvie(_vie) {
        this.#vie = _vie;
        if (this.#vie <= 0) {
            this.#existe = false;
            this.#vie = 0;
            ColorLog("%c" + this.#nom + " est mort", "red");
        }
    }
    getattaque() {
        return this.#attaque;
    }
    setattaque(_attaque) {
        this.#attaque = _attaque;
    }
    getdefense() {
        return this.#defense;
    }
    setdefense(_defense) {
        this.#defense = _defense;
    }

    info() {
        return "Le personnage " + this.getnom() + " à pour vie " + this.getvie() + "\nà pour attaque " + this.getattaque() + "\nà pour défense " + this.getdefense();
    }
    attaquer(defenseur) {
        console.log("Le personnage " + this.getnom() + " attaque " + defenseur.getnom());
        if (this.getattaque() > defenseur.getdefense()) {
            defenseur.setvie(defenseur.getvie() - 10);
        }
        if (this.getattaque() == defenseur.getdefense()) {
            defenseur.setvie(defenseur.getvie() - 5);
        }
        if (this.getattaque() < defenseur.getdefense()) {
            this.setvie(this.getvie() - 5);
        }

    }

    static nbAleatoire() {
        return Math.round((100 - 20)
            * Math.random() + 20);
    }
}
var nbrJoueur = 3;
class Match {
    #joueurs = new Array();
    #winner;
    #nbjoueurs;


    constructor(_nbjoueur) {
        this.setnbJoueurs(_nbjoueur);
        this.setWinner("");

    }

    getWinner() {
        return this.#winner;
    }
    setWinner(_winner) {
        this.#winner = _winner;
    }

    getnbJoueurs() {
        return this.#nbjoueurs;
    }
    setnbJoueurs(_nbjoueur) {
        this.#nbjoueurs = _nbjoueur;
    }
    verifNomPersonnage(_nom) {
        var nomExist = false;
        for (var i = 0; i < this.#joueurs.length; i++) {
            if (_nom == this.#joueurs[i].getnom()) {

                alert("Le nom est déjà saisie");
                nomExist = true;

            }
                  

        }

    }    
        return nomExist;
}

    init() {
        var nbrjoueurcree = 0;
        var nomSaisie = "";
        var perso;


       /* while ((nbrjoueurcree < this.getnbJoueurs())) {
            nomSaisie = prompt(" Saisissez un nom ");

            if (nomSaisie != "") {
                var nomExist = false;
                if (this.#joueurs.length > 0) {

                    nomExist = this.verifNomPersonnage(nomSaisie);
                }
                if (nomExist == false) {
                    perso = new Personnage(nomSaisie);
                    console.log(perso.info());
                    this.#joueurs.push(perso);
                    nomSaisie = "";
                    nbrjoueurcree += 1;
                }
                console.log(nbrjoueurcree);

            }

        }*/
        for (let i=0;i<this.#tailleEquipes * 2; i++){
            let perso;
            switch (this.getNewtType()){
                case "CRS":
                    perso = new CRS (CRS.getNombreCRS()+1);
                    this.#setNextType("GJ");   
                    break;
                case "GJ":
                    perso =new GJ (GJ.getNombreGJ()+1);
                    this.#setNextType("CRS";)     
            }
            this.#addPlayer(perso);
       }
    }

    run() {
        var randomAtq, randomDef;
        var randomAncienAtq = -1;
        var nbround = 0;
        // tant qu'il reste plus d'un joueur -------------

        while (this.#joueurs.length > 1) {
            //definit l'attaquant de façon aléatoire -----------

            randomAtq = this.joueurAleatoire(this.#joueurs.length);
            // défini le défenseur  ----------------------

            randomDef = this.joueurAleatoire(this.#joueurs.length);
            // vérifie si l'attaquant est différent du défenseur  -----------

            if (randomAtq != randomDef) {
                // vérifie si l'attaquant est différent du défenseur ------------

                if (randomAtq != randomDef) {

                    // attaque  ------------------------------------------------
                    console.log("Round numéro: " + (nbround + 1));
                    this.#joueurs[randomAtq].attaquer(this.#joueurs[randomDef]);

                    nbround++;
                    try {
                        // Si l'attaquant est mort on le supprime du tableau 
                        if (this.#joueurs[randomAtq].getexiste() == false) {
                            this.#joueurs.splice(randomAtq, 1);
                        }
                        // si le défenseur est mort on le suprime du tableau
                        if (this.#joueurs[randomDef].getexiste() == false) {
                            this.#joueurs.splice(randomDef, 1);
                        }
                        // On intercepte l'erreur si la donnée du tableau n'existe plus
                    } catch (error) { }

                    // L'attaquant devient l'ancien attaquant 
                    randomAncienAtq = randomAtq;
                }
            }
        }

        this.setWinner(this.#joueurs[0].getnom().toString() + " ( " + this.#joueurs[0].info() + " ) ");
        this.win(nbround)

    }

    win(_nbrounds) {
        ColorLog("%c Le gagnant est " + this.getWinner() + " en " + _nbrounds + " rounds", 'green');

    }

    joueurAleatoire(length) {
        return Math.floor(Math.random() * length);
    }

}
//  ----------------------- FONCTION RANDOM  --------------- 

let m = new Match(nbrJoueur);
m.init();
m.run();


function ColorLog(_message, _color) {
    console.log(_message, 'color:' + _color);
}

class CRS extends Personnage {

 

    constructor(_nom) {
        super(_nom, "CRS");
        if (this.setexiste()) {
            this.setvie(this.getvie() - 4);
            this.setdefense(this.getdefense() + 3);
           
        }
    }


    attaquer(GJ) {
        let chance = nombreAleatoire(1, 10);
        if (chance > 6 && chance <= 9) {
            this.fumigene(gj);
        }
        else if (chance == 10) {
            this.canonAEau(gj);
        }
        else {
            super.attaquer(gj);
        }
    }

    fumigene(GJ){
        
        GJ.setvie(GJ.getvie() - 5);
    }

    canonAEau(GJ) {
      
        GJ.setvie(GJ.getvie() - 10);
    }

  

}


class GJ extends Personnage{

    constructor(nom)
{
    super(nom,"Gilet Jaune");
    if(this.setexiste()){
        this.setvie(thisgetvie()+6);
        this.setattaque(this.getattaque()-3);
        this.setdefense(this.getdefense()-3);
        
    }
}
attaquer(CRS){
    let chance=nombreAleatoire(1,10);
    if (chance >6 && chance <=9){
        this.caillassage(crs);
    }
    else if (chance ==10){
        this.mouvementDeFoule(crs);
    }
    else{
        super.attaquer(crs);
    
    }
}
caillassage(CRS){
   
    CRS.setvie(CRS.getvie()-5);
}
mouvementDeFoule(CRS){

 CRS.setvie(CRS.getvie()-15);
}



}



