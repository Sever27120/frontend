var PU = window.prompt("Saisissez le Prix Unitaire");

var QTECOM = window.prompt("Saisissez la quantitée");
var REMISE = 0;
var TOT = PU * QTECOM;

var PAP = 0;
var PORT = 0;

// si le total est supérieur et égal à 500 par de frais de port
alert(TOT);

if (TOT >= 500) {
    PORT = 0;
}
// si le total est inférieur à 500 le frais de port doit être 
else if (TOT < 500) {
    PORT = (TOT * (2 / 100));

// si les frais de port sont inférieur à 6 alors faire une si pour mettre le frais de port à 6 et non moin 
    if (PORT < 6) {
        PORT = 6;
    }

}
// si le total est compris entre 100 et 200 alors la reemise est de 5%

if (TOT >= 100 && TOT <= 200) {
    REMISE = (TOT * (5 / 100));
}
// si le total est compris est supérieur à 200 alors la remise est de 10%

else if (TOT > 200) {
    REMISE = (TOT * (10 / 100));
}
// détail sur de calcul pour obtenir le prix ttc.
console.log("Total: " + TOT);
console.log("Port: " + PORT);
console.log("Remise: " - REMISE);
PAP = TOT + PORT - REMISE;
alert(PAP);
