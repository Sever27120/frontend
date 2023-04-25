let a=prompt("Ecrire un score");
let b=prompt("Ecrire un score");
let c=prompt("Ecrire un score");
let d=prompt("Ecrire un score");


if (a>50){
    console.log("Elu au premier tour");
}

else if(( b>50 || c>50 || d>50) || (a<12.5)){

console.log("Battu");

}

else if( (a=b) && (a=c) && (a=d)){

console.log("Ballotage favorable");

else {
    console.log("Ballotage défavorable");
}
}

// se code fonctionne pas.






