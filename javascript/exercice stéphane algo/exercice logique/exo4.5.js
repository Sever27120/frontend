let age=prompt("Entrer un age");
let permis=prompt("Entrer combien de temps l'obtention du permis");
let acident=false;
let nbreaccident=prompt("entrer le nombre d'accident");
let temps=prompt("Entrer le nombre d'année assurer à l'agence");
let rouge;
let orange;
let vert;
let bleu;
if ((age<25)&&(permis>2)&&(acident==false)){
    console.log("assurer "+ rouge);

}

if ((age<25)&&(permis>2)&&(acident==false)||(age>25)&&(permis<2)&&(acident==false)){
    console.log("Assurer"+ orange);
}
else{
    console.log("Assurer"+rouge);
}

if ((age>25)&&(permis>2)&&()){
    console.log("Assurer "+vert);
}
else if(nbreaccident==1){
    console.log("Assurer"+orange);
}
else if (nbreaccident==2){
    console.log("Assurer "+rouge);
}
else {
    console.log("Ne pas assurer");
}

if (temps>5){
console.log(rouge==orange);
}

else if{
console.log(vert==bleu);
}

else if{
    console.log(orange==vert);
    }

