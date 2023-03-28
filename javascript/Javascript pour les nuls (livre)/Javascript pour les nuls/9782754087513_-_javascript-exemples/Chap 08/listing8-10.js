// créée un objet Personne générique
var Personne = {
  eyes: 2,
  arms: 2,
  feet: 2
}

// créée l'objet SandyDurand, basé sur Personne
var SandyDurand = Object.create(Personne);

// teste une propriété héritée
document.write (SandyDurand.feet); // retourne la valeur 2