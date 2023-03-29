

var compteur_minutes = 0;

var compteur_heures = 0;


function tourne() {

    heures = document.getElementById("aiguilleheure");

    minutes = document.getElementById("aiguilleminute");


    switch (compteur_minutes) {
        case 0: minutes.styles.top = "123px"; minutes.styles.left = "250px"; break;
        case 1: minutes.styles.top = "160px"; minutes.styles.left = "287px"; break;
        case 2: minutes.styles.top = "210px"; minutes.styles.left = "300px"; break;
        case 3: minutes.styles.top = "260px"; minutes.styles.left = "287px"; break;
        case 4: minutes.styles.top = "297px"; minutes.styles.left = "250px"; break;
        case 5: minutes.styles.top = "310px"; minutes.styles.left = "200px"; break;
        case 6: minutes.styles.top = "297px"; minutes.styles.left = "150px"; break;
        case 7: minutes.styles.top = "260px"; minutes.styles.left = "113px"; break;
        case 8: minutes.styles.top = "210px"; minutes.styles.left = "100px"; break;
        case 9: minutes.styles.top = "160px"; minutes.styles.left = "113px"; break;
        case 10: minutes.styles.top = "123px"; minutes.styles.left = "150px"; break;
        case 11: minutes.styles.top = "110px"; minutes.styles.left = "200px"; break;
        default: alert("Il y a un problème"); break;
    }
    compteur_minutes = (compteur_minutes + 1) % 12;

    if (compteur_minutes == 0) {

        switch (compteur_heures) {
            case 0: heures.styles.top = "123px"; mheures.styles.left = "250px"; break;
            case 1: heures.styles.top = "160px"; heures.styles.left = "287px"; break;
            case 2: heures.styles.top = "210px"; heures.styles.left = "300px"; break;
            case 3: heures.styles.top = "260px"; heures.styles.left = "287px"; break;
            case 4:heures.styles.top = "297px"; heures.styles.left = "250px"; break;
            case 5: heures.styles.top = "310px"; heures.styles.left = "200px"; break;
            case 6: heures.styles.top = "297px"; heures.styles.left = "150px"; break;
            case 7: heures.styles.top = "260px"; heures.styles.left = "113px"; break;
            case 8: heures.styles.top = "210px"; heures.styles.left = "100px"; break;
            case 9: heures.styles.top = "160px"; heures.styles.left = "113px"; break;
            case 10: heures.styles.top = "123px"; heures.styles.left = "150px"; break;
            case 11: heures.styles.top = "110px"; heures.styles.left = "200px"; break;
            default: alert("Il y a un problème"); break;
        }
        compteur_heures=(compteur_heures+1) % 12;
    }
    if (indic) window.setTimeout("tourne()", "1000");
		}

