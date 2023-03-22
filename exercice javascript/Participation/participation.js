var par = 0

var s = window.prompt("Saissir le montant de votre salaire net")
// le salarié à le droit à 10% de participation si son salairte est inférieur à 1200€
if (s<1200)

{
    par+=0.10;

}
// l'utilisateur confirme qu'il est célibataire
if (window.confirm("Etes vous célibataire?")==true)

{
   par+=0.20;

}
//l'utilisateur confirme qui l'ai marié
else if (window.confirm ("Etes vous marié?")==true)

{
  par+=0.25;
}
// le salarié confirme si il a des enfants
if (window.confirm("Avez vous des enfants?")==true)

{//le salarié indique le nombre d'enfant
    var nbr=window.prompt("Combien d'enfants avez vous?");
}
// si un enfant 10%
if (nbr==1)

{
   par+=0.10;
}
else if (nbr>1)
//si plusieurs enfants calcul le nombre  *10%
{
    par+=nbr*0.10;
}
//indiquer le nombre participation en indiquent le += pour additionner toute les conditions si il sont rempli
alert("Le salarié aura le droit à "+par+"de participation de son employeur");