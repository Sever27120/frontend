let age = prompt("Entrer un âge svp");

let sexe= parelnt(prompt)("Entrer un sexe H/F svp");

if ((sexe==H) && (age>20)){
    console.log("La personne paye des impôt");

}

else if((sexe==F) && (age>=18 || age <=35)){
    console.log("La personne paye des impôts");

}

else {
    console.log("La personne ne paye pas d'impôt");
}

// ne fonctionne pas 