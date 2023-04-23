//On recherche ici la source du fichier pour la redirection rapide des images
var a = location.href;
var b = a.split('/');
var c = b.pop('/');
var chemin_img = "";
//Si c'est index
if(c == "index.html"){
	var chemin_img = "images/meteo/";
}
//Sinon
else{
	var chemin_img = "../images/meteo/";
}
//On attribu à chaque variable un chemin d'image
var img_brouillard = chemin_img+"brouillard.png";
var img_soleil = chemin_img+"soleil.png";
var img_soleil_petit_nuage = chemin_img+"soleil_petit_couvert.png";
var img_soleil_nuage = chemin_img+"soleil_couvert.png";
var img_soleil_gros_nuage = chemin_img+"soleil_gros_couvert.png";
var img_entre_nuage_soleil = chemin_img+"entre_nuage_soleil.png";
var img_nuage = chemin_img+"couvert.png";
var img_nuage_vergla = chemin_img+"couvert_vergla.png";
var img_pluie_nuage = chemin_img+"pluie_couvert.png";
var img_pluie = chemin_img+"pluie.png";
var img_petite_pluie = chemin_img+"petite_pluie.png";
var img_pluie_vergla = chemin_img+"pluie_vergla.png";
var img_petite_neige = chemin_img+"petite_neige.png";
var img_neige = chemin_img+"neige.png";
var img_orage_pluie = chemin_img+"orage_pluie.png";

//Récupération des coordonnées
function coordonnees(pos) {
    let crd = pos.coords;
	console.log(crd);
    //votre Latitude
    let latitude = crd.latitude;
	//votre longitude
    let longitude = crd.longitude;
	//Je réalise un fetch pour aller récup l'affichage du lien -> Le fetch sert à interroger
	fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=1&timezone=auto')
	     //Je dis que l'affichage est du json
		 //Je fait une "promess" pour créer la variable reponse et pour lui assigner l'affichage
		.then(reponse => reponse.json())
		//
		.then(data => {
			console.log(data);
			CreateMeteo(data);
		});
	//On veut récupérer la ville où on est... API du gouv !! SiSi ! la 5G ! On nous espionne !
	fetch('https://geo.api.gouv.fr/communes?lat='+latitude+'&lon='+longitude)
  			.then(reponse_geo => reponse_geo.json())
		//
		.then(data_geo => {
			console.log(data_geo);
			CreateCity(data_geo);
		});
}

//On lance la géolocalisation (demande/autorisation du navigateur)
navigator.geolocation.getCurrentPosition(coordonnees); //par la fonction coordonnées

//Function pour créer et mettre à jour les datas météo
function CreateMeteo(data){
	//On veut récupérer la températeur dans les datas et l'afficher
	console.log(data.current_weather.temperature);
	document.getElementById("temperature_actuel").innerHTML = data.current_weather.temperature+"°C";
    //Situation météo	
	console.log(data.current_weather.weathercode);
	//On lance pour trouver la bonne situation selon l'indice
	SituationMeteo(data.current_weather.weathercode);	//On appel la function SitationMeteo qui comportement comme première valeur : weathercode
}

function SituationMeteo(weathercode){
	//On cible notre situation météo qui sera édité via un "const"
	const situation_cible = document.getElementById("situation_meteo");
	//On cible notre image météo qui sera édité via un "const"
	const situation_img = document.getElementById("image_meteo");
	//on convertie notre weathercode en chaine de caractère, car cela n'est pas que des chiffres, car on doit prendre en compte l'étoile *
	const value_search = weathercode.toString();
	//On switch/recherche notre value_search
	switch(value_search){
		case '0': // Si value_search est égale à 0
			situation_cible.innerHTML = "Ciel clair"; // on reprendre notre const -> situation_cible -> en gros c'est pour éviter à chaque fois de réécrire : document.getElementById("situation_meteo")
			situation_img.setAttribute("src", img_soleil); // On change l'image
			break;
		case '1':
			situation_cible.innerHTML = "Ciel plutôt dégagé";
			situation_img.setAttribute("src", img_soleil_petit_nuage);
			break;
		case '2':
			situation_cible.innerHTML = "Ciel partiellement nuageux";
			situation_img.setAttribute("src", img_soleil_nuage);
			break;
		case '3':
			situation_cible.innerHTML = "Ciel couvert";
			situation_img.setAttribute("src", img_soleil_gros_nuage);
			break;
		case '45':
			situation_cible.innerHTML = "Brouillard";
			situation_img.setAttribute("src", img_brouillard);
			break;
		case '48':
			situation_cible.innerHTML = "Dépôt de brouillard givré";
			situation_img.setAttribute("src", img_brouillard);
			break;
		case '51':
			situation_cible.innerHTML = "Brouillard légère";
			situation_img.setAttribute("src", img_brouillard);
			break;
		case '53':
			situation_cible.innerHTML = "Brouillard modérée";
			situation_img.setAttribute("src", img_brouillard);
			break;
		case '55':
			situation_cible.innerHTML = "Brouillard dense";
			situation_img.setAttribute("src", img_brouillard);
			break;
		case '56':
			situation_cible.innerHTML = "Brouillard verglaçant d'intensité légère";
			situation_img.setAttribute("src", img_nuage_vergla);
			break;
		case '57':
			situation_cible.innerHTML = "Brouillard verglaçant à forte intensité";
			situation_img.setAttribute("src", img_nuage_vergla);
			break;
		case '61':
			situation_cible.innerHTML = "Petite pluie";
			situation_img.setAttribute("src", img_petite_pluie);
			break;
		case '63':
			situation_cible.innerHTML = "Pluie";
			situation_img.setAttribute("src", img_pluie_nuage);
			break;
		case '65':
			situation_cible.innerHTML = "Forte pluie";
			situation_img.setAttribute("src", img_pluie);
			break;
		case '66':
			situation_cible.innerHTML = "Petite pluie verglaçante";
			situation_img.setAttribute("src", img_pluie);
			break;
		case '67':
			situation_cible.innerHTML = "Grosse pluie verglaçante";
			situation_img.setAttribute("src", img_pluie);
			break;
		case '71':
			situation_cible.innerHTML = "Petite chute de neige";
			situation_img.setAttribute("src", img_petite_neige);
			break;
		case '73':
			situation_cible.innerHTML = "Chute de neige";
			situation_img.setAttribute("src", img_neige);
			break;
		case '75':
			situation_cible.innerHTML = "Grosse chute de neige";
			situation_img.setAttribute("src", img_neige);
			break;
		case '77':
			situation_cible.innerHTML = "Flocon de neige";
			situation_img.setAttribute("src", img_petite_neige);
			break;
		case '80':
			situation_cible.innerHTML = "Légère averses de pluie";
			situation_img.setAttribute("src", img_petite_pluie);
			break;
		case '81':
			situation_cible.innerHTML = "Averses de pluie";
			situation_img.setAttribute("src", img_pluie);
			break;
		case '82':
			situation_cible.innerHTML = "Forte averses de pluie";
			situation_img.setAttribute("src", img_pluie);
			break;
		case '85':
			situation_cible.innerHTML = "Légère averses de neige";
			situation_img.setAttribute("src", img_neige);
			break;
		case '86':
			situation_cible.innerHTML = "Forte averses de neige";
			situation_img.setAttribute("src", img_neige);
			break;
		case '95':
		case '95 *':
			situation_cible.innerHTML = "Orage";
			situation_img.setAttribute("src", img_orage_pluie);
			break;
		case '96':
			situation_cible.innerHTML = "Orage avec grêle";
			situation_img.setAttribute("src", img_orage_pluie);
			break;
		case '99':
		case '99 *':
			situation_cible.innerHTML = "Fort orage avec grêle";
			situation_img.setAttribute("src", img_orage_pluie);
			break;
	    // On peut aussi afficher exactement le même message/comportement pour deux (ou plusieurs) situation en réalisant cette méthode
		// CECI EST UN EXEMPLE !!!
		case '404':
		case '500':
		case '504':
		case '504 *':
			situation_cible.innerHTML = "Tempête de code !!!!";
			break;
		// FIN DE L'EXEMPLE MULTIPLE
	//Si notre valeur n'est pas identifié on affiche des valeurs par défaut
	default:
		console.log("switch id :"+weathercode);
		situation_cible.innerHTML = "inconnu";
	}
}

function CreateCity(data_geo){
	var city = data_geo[0].nom; // Pourquoi data_geo[0] ?? Parce que c'est la "key" renvoyer dans le console.log précédent -> Clique droit inspecté et déplié le message json qui à été 
	//Message pour notre ville actuel
	console.log(city);
	//On l'insert dans notre id city
	document.getElementById("city").innerHTML = city;
}

// Création d'une fonction pour afficher l'heure actuel
function HeureNow(){
	//On initialise la Date actuelle avec toutes ses infos
	var now = new Date();
	//On cible l'heure
	var heure = now.getHours();
	var minute = now.getMinutes();
	var seconde = now.getSeconds();
	//On veut afficher un 0 avant le chiffre si il est inférieur à 10, pour un visuel plus sympa
	if(heure<10){
		heure = "0"+heure;
	}	
	if(minute<10){
		minute = "0"+minute;
	}
	if(seconde<10){
		seconde = "0"+seconde;
	}	
	//On change l'heure dans notre id "heure"
	document.getElementById("heure").innerHTML = heure+":"+minute+":"+seconde;
	//On relance la fonction toute le 1 seconde
	setTimeout(HeureNow,1000);
}

//On lance l'heure actuel au chargement de fichier / page
HeureNow();

// Si on click sur le bouton modal_meteo
document.getElementById("modal_meteo").addEventListener('click', function() {
	//On relance la géolocalisation (demande/autorisation du navigateur)
	navigator.geolocation.getCurrentPosition(coordonnees); //par la fonction coordonnées
});