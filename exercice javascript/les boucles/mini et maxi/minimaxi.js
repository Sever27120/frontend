

var tab = [];

var saisie ;

var mini, maxi;

while (saisie != 0) {

  saisie = parseInt(prompt("Saisir un entier"));

  if (saisie != 0) {



    if (mini == undefined) {
      mini = saisie;
    }
    if (maxi == undefined) {
      maxi = saisie;
    }


    if (mini > saisie) {

      mini = saisie;
    }


    if (maxi < saisie) {

      maxi = saisie;
    }
  }
}

console.log("mini:" + mini);
console.log("maxi:" + maxi);





