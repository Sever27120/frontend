function Personne(){
  this.eyes = 2;
  this.ears = 2;
  this.arms = 2;
  this.hands = 2;
  this.feet = 2;
  this.legs = 2;
  this.species = "Homo sapiens";
}

var SandyDurand = new Person();
var LouisDupont = new Person();
var JeanBon = new Person();

// Personne a besoin de plus de propriétés !
Personne.prototype.knees = 2;
Personne.prototype.toes = 10;
Personne.prototype.elbows = 2;

// Vérifie les valeurs des nouvelles propriétés pour un objet existant
document.write (JeanBon.toes); // donne la valeur 10