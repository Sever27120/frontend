
var nbr=prompt("Saisir un chiffre!");

for(var i = 2; i < nbr; i++)
{
if(nbr%i === 0) {

alert("faux");
}
else{

    alert("Le nombre est premier!");
}
}

// cela ne fonctionne pas pur 1 et 2
