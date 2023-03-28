var mot=prompt("Saisir un mot!");

var count=0;

for (i=0;i<mot.length; i++){
    console.log(mot[i]);

    if(
    
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
console.log("nombre de voyelles dans le mot"+mot+":"+count);