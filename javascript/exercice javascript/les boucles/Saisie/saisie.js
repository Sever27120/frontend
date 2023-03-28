

var prenom;

var prenoms="";

var nbprenom=0;

//tan que les prénoms sont saisies continue
while (prenom!="")
{
    prenom=prompt("Saisir un prenom");

//si le prenom est vide "" (c'est vide) alors mettre condition 
    if(prenom!="")
    {
        //indiquer le nombre saisie ++ (c'est les prenoms saisie à la suite)
        nbprenom++;

   // indiquer les prénoms saisies
        prenoms+=prenom + "\n";
    }

}
console.log("le nombre de prénoms saisies est de "+nbprenom);
console.log(prenoms);



