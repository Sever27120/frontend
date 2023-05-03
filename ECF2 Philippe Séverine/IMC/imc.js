function calculIMC() {

    const poids = prompt("Allez-y, vous pesez combien de kilos ?");
    
    if (poids == 0 && poids == null) {
    
    alert("Désoler mais je ne peux rien faire si vous ne me donnez pas votre poids !")
    
    } else if (poids > 0) {
    
    const taille = prompt("Et maintenant, sans vous mettre sur la pointe des pieds et lever les bras, vous mesurez combien de mètre (n'oubliez pas le point entre le mètre et les centimètres) ?");
    
    imc = poids / (taille * taille);
    
    if (imc <= 16.5) {
    
    alert("AHHHHHHH, vous êtes avec un IMC de " + imc + " ! \n Vous êtes en dénutrition ! \n IL FAUT MANGER !!!")
    
    } else if (imc > 16.5 && imc <= 18.5) {
    
    alert("Votre imc est de " + imc.toFixed(2) + " ! \n Vous êtes maigre et ça se voit ! MANGER !!!")
    
    } else if (imc > 18.5 && imc <= 25) {
    
    alert("Votre imc est de " + imc.toFixed(2) + " ! \n Vous êtes de corpulence normale, continuer comme ça !")
    
    } else if (imc > 25 && imc <= 30) {
    
    alert("Votre imc est de " + imc.toFixed(2) + " ! \n Vous êtes en surpoids...ça va,c'est que quelques kilos à perdre ou des centimètres à prendre !")
    
    } else if (imc > 30 && imc <= 35) {
    
    alert("Votre imc est de " + imc.toFixed(2) + " ! \n Vous êtes en obésité modéré...Allez courir un peu en pleine air pour vous revitaliser et manger ces étranges fruits verts qu'on appelle \" légume \" ! ")
    
    } else if (imc > 35 && imc <= 40) {
    
    alert("Votre imc est de " + imc.toFixed(2) + " ! \n Vous êtes en obésité sévère ET IL NE VOUS RESTE QU'UNE SEULE ÉTAPE AVANT D'ÊTRE EN OBÉSITÉ MORBIDE DONC VOUS VOUS REPRENEZ EN MAIN ET VOUS ALLEZ VOIR VOTRE MÉDECIN POUR SAVOIR QUOI FAIRE !")
    
    } else {
    alert("Votre imc est de " + imc.toFixed(2) + " ! \n VOUS ÊTES EN OBÉSITÉ MORBIDE !!! C'EST UNE HONTE ET UNE TRISTESSE PACHYDERMIQUE,IL VA FALLOIR TRAVAILLER DUR POUR VOUS REMETTRE SUR PIED ET VOUS ALLEZ SOUFFRIR, AHHHHH OUI,POUR SÛR QUE VOUS ALLEZ SOUFFRIR !")
    
    }
    
    }
    
    }