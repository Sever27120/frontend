


function cube(n,p)
{
    var resultat= p*p*p;
    
    return resultat;
    var resultat2=cube(p);

}


var x=prompt("Ecrire le chiffre x!");

var y=prompt("Ecrire le chiffre de y!");


console.log( "Le cube de" +y+ "est égale à" + cube(y) );