var nb1,nb2;
//indiquer la somme de départ est égale à0
var somme=0;
//saisir le nombre 1
nb1=prompt("Saisisr nb1:");
//saisir le nombre 2
nb2=prompt("Saisir nb2:");
// pour déclarer iprend la valeur de nombre 1,i inférieur =au nombre de 2 
//rajouter les chiffres suivant avec i++
for (var i=nb1;i<=nb2;i++){
    somme+=parseInt(i);
    //calcul de la somme avec parseInt pour convertir en chiffre au lieu de chaine de caractère de base
}
//afficher la somme dans la console
console.log(somme);