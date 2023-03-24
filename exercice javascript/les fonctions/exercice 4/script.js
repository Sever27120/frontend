// var prenom;
// var prenoms = "";
// var nbprenoms = 0;

// while (prenom != "") {
//   prenom = prompt("saisir prénom n°" + (nbprenoms + 1));

//   if (prenom != "") {
//     prenoms += prenom + "\n";
//     nbprenoms++;
//   }
// }

// console.log(prenoms);
// console.log("nb prenoms : " + nbprenoms);

// var nb1, nb2;
// var somme = 0;

// nb1 = prompt("saisir nb1:");
// nb2 = prompt("saisir nb2:");

// for (var i = nb1; i <= nb2; i++) {
//   somme += parseInt(i);
// }

// console.log(somme);

var mot = prompt("Saisir un mot:");

var count = 0;

// for (i = 0; i < mot.length; i++) {
for (var i in mot) {
  console.log(mot[i]);

  if (
    mot[i] == "a" ||
    mot[i] == "e" ||
    mot[i] == "i" ||
    mot[i] == "o" ||
    mot[i] == "u" ||
    mot[i] == "y"
  ) {
    count++;
  }
}
console.log("nombre de voyelles dans le mot " + mot + ": " + count);
