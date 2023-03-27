
var somme=0;

var moyenne=0;

var nbentier=0;


 while(entier!=0){

    var entier=prompt("Saisir un entier");

    somme+=parseInt(entier);

    console.log(somme);

    nbentier++;
    
    if(entier==0){

    moyenne=somme/(nbentier-1);

    console.log(moyenne);

    break;

}
 }
 



