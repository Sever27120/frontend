//variables globales du projet
const srcImg = "images/"; // emplacement des images de l'appli
const albumDefaultMini = srcImg + "noComicsMini.jpeg";
const albumDefault = srcImg + "noComics.jpeg";
const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
const srcAlbum = "albums/"; // emplacement des images des albums en grand
var albumskey = albums.keys();// sélection des clefs dans fichier"album.js"
var btnRadiotitre = document.getElementById("titre"); //sélection bouton radio titre album BD
var btnRadioauteur = document.getElementById("auteur"); //sélection bouton radio auteur album BD
var btnRadioserie = document.getElementById("serie"); //sélection bouton radio série album BD
var selectliste = document.getElementById("recherche"); //sélection liste recherche album BD


// chargement automatique de la page dès l'ouverture
window.addEventListener("load",ChargeListe());

// sélection + affichage de la liste par titre de l'album bd
btnRadiotitre.addEventListener("click",function(){ChargeListetitre()});

//sélection + affichege de la liste par auteur de l'album bd
btnRadioauteur.addEventListener("click",function(){ChargeListeauteur()});

//sélection + affichage de la liste par serie del'album bd
btnRadioserie.addEventListener("click",function(){ChargeListeserie});

// Création liste albums BD à partir du dossier data"albums,serie et auteurs"
function ChangeListe(){
//Récupérer liste albums de bd

var key = keys.next().value;// sélection numéro clef dans le fichier "albums.js"
const nomcouverture = serie.nom + "-" + album.numero + "-" + album.titre // récupérer nom du fichier de chaque image 
var nomimage = srcAlbumMini + nomcouverture;// sélection nom fichier petites images
var imagesbd = document.getElementsByClassName("img");// sélection class balise "img"

albums.forEach(album => {
	//sélection fichier dans le dossier data "serie et auteurs" par leur id
	serie = series.get(album.idSerie);// sélection serie "serie.js"
	auteur = auteurs.get(album.idAuteur);// selection auteur "auteurs.js"

	var ListeBd = document.createElement("card",);

	//créer une classe à la balise card pour afficher les cards à l'horizontal
	ListeBd.setAttribute("class", "horizontal card");
	


// insertion images dans la balise "card" class "horizontal card"
// si clef album exitante

if (key != "") {
	scr = nomimage+ ".jpg"; // attribution petite image associé
}
// pour image bd non existante alors

for (i = 0; i < imagesbd.length; i++) {
	//si erreur images alors appel fonction "prbImg"
	imagesbd[i].addEventListener("error", function () { prbImg(this) });
}



ListeBd.innerHTML = ("<img class='imagesbd' id ='img-" + key + "'scr='" + src + "'/>" + "<br>"+"Titre:" + album.titre + "<br> " + "Auteur:" + auteurs.get(album.idAuteur).nom + "<br>" + "Prix:" + album.prix + "€"+"<button id='btnAjoutBD-" + key + "' class='btnAjoutPanier'>Ajoutez au panier</button>");



});
//mettre dan le body la liste recherche pour l'afficher dans le HTML
document.body.appendChild(ListeBd);
}

// Affichage petites images BD par défaut (albums inexistants)
function prbImg(_imgDefault) {
	_imgDefault.src = albumDefaultMini;
}
