var N = prompt("saississez un chiffre");
var somme = 0;

for(var i = 0; i < N; i++){
    //calcul de la somme + et = i pour additionner chaque valeur de la boucle.
    somme += i;
    console.log(i);
}
alert(somme);