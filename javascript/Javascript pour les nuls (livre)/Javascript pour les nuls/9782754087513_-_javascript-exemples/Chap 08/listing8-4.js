var myObject = new Object(); // créée un nouvel objet

// ajoute des propriétés à l'objet
myObject.var1 = "la valeur";
myObject.var2 = "une autre valeur";
myObject.var3 = "encore une autre";

// supprime var2 de myObject
delete myObject.var2;

// essaie d'écrire la valeur de var2
document.write(var2 in myObject); // le résultat est une erreur