
const calculateur= document.getElementsClassName("calculateur");
const final=document.getElementsByClassName("final");

function calculimc(){


    const prenom = document.getElementById("prenom");
    const poid = document.getElementById("poid");
    const taille = document.getElementById("taille");

    if (prenom.value || poid.value || taille.value) {
        if (prenom.value && poid.value && taille.value) {
            prenom.style.border = "1px solid red";
            poid.style.border = "1px solid red";
            taille.style.border = "1px solid red";
            alert("Veuillez indiquer toute les informations nécessaire pour le calcul");

        }
        else if (prenom.value) {
            prenom.style.border = "1px solid red";
            alert("Veuillez indiquer votre prenom et nom");
        }

        else if (poid.value) {
            poid.style.border = "1px solid red";
            alert("Veuillez indiquer votre poid");
        }

        else {
            taille.style.border = "1px solid red";
            alert("Veuillez indiquer votre taille");
        }
    }
    else {

        let imc = poid.value / (taille.value * taille.value);
        const resul = document.getElementById("final");

        if ( imc <= 18.4) {

            resul.innerHTML= (prenom +"' " +'<br>'+"Votre poid est de"+ " "+poid+ "<br>"+"Votre taille est de" +" "+taille+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+ "Vous êtes maigre");
            resul.style.color="yellow";
        } 
        else if (imc > 18.5 && imc <= 24.9) {

            resul.innerHTML= (prenom +"' " +'<br>'+"Votre poid est de"+ "' "+poid+ "<br>"+"Votre taille est de" +"' "+taille+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+ "Vous êtes de corpulence normale")

        } 
        else if (imc >= 25 && imc <= 29.9) {

            resul.innerHTML= (prenom +"' " +'<br>'+"Votre poid est de"+ "' "+poid+ "<br>"+"Votre taille est de" +" '"+taille+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en surpoids")

        } else if (imc >= 30 && imc <= 34.9) {

            resul.innerHTML= (prenom +"' " +'<br>'+"Votre poid est de"+ "' "+poid+ "<br>"+"Votre taille est de" +"' "+taille+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en obésité modéré ")

        } else if (imc >= 35 && imc <= 39.9) {

            resul.innerHTML= (prenom +"' " +'<br>'+"Votre poid est de"+ " '"+poid+ "<br>"+"Votre taille est de" +"' "+taille+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en obésité sévère ")

        } else {
            resul.innerHTML= (prenom +"' " +'<br>'+"Votre poid est de"+ "' "+poid+ "<br>"+"Votre taille est de" +" '"+taille+ "<br>" +"Votre imc est de "+" "+ imc + "<br>"+  "Vous êtes en obésité morbide ")
        }
    }
}


    
    