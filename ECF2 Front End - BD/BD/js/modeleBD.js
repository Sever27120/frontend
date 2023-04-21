
	const srcImg = "images/"; // emplacement des images de l'appli
	const albumDefaultMini = srcImg + "noComicsMini.jpeg";
	const albumDefault = srcImg + "noComics.jpeg";
	const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
	const srcAlbum = "albums/"; // emplacement des images des albums en grand
    var albumskey= albums.keys();




	/*imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	var id = document.getElementById("id");
	id.addEventListener("change", function () {
		getAlbum(this)
	});

			var serie = series.get(album.idSerie);
			var auteur = auteurs.get(album.idAuteur);

			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;

			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg"
			);*/




	

//aller chercher les information dans le js albums
	albums.forEach(album => {
		serie = series.get(album.idSerie);
		auteur = auteurs.get(album.idAuteur);
		
		//créer une balise card pour afficher nos informations rechercher
	var ListeBd=document.createElement("card",);
	
	//créer une classe à la balise card pour afficher les cards à l'horizontal
	ListeBd.setAttribute("class","horizontal card");
	//mettre les titres prix et auteurs dans le html
	ListeBd.innerHTML =( "Titre:" + album.titre + "<br> " +"Auteur:"+auteurs.get(album.idAuteur).nom+ "<br>" +"Prix:"+ album.prix + "€" );
    
	//mettre dan le body la liste recherche pour l'afficher dans le HTML
	document.body.appendChild(ListeBd);
  
	for(i=0;i<ListeBd;i++){
      
	      ajouter= document.getElementById(ajouter);
	}

});	

/*var Image = serie.nom + "-" + album.numero + "-" + album.titre;

			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			Image = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg"
				album.titre,



   /*for(var [idSerie, serie] of series.entries()) {
	   // Recherche des albums de la série
	   for (var [idAlbum, album] of albums.entries()) {
		   if (album.idSerie == idSerie) {
			   ListeBd.innerHTML(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteurs.get(album.idAuteur).nom+  album.prix + "€");
		       document.body.appendChild(ListedBd);
			}
	   }
	   
   }

  /* console.log("Liste des albums par auteur");
   for(var [idAuteur, auteur] of auteurs.entries()) {
	   // Recherche des albums de l'auteur
	   for (var [idAlbum, album] of albums.entries()) {
		   if (album.idAuteur == idAuteur) {
			   console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom, + album.prix + "€");
		   }
	   }

      }
	     /*console.log("Liste des albums par titre");
	   for(var album.titre of auteurs.entries()) {
		   // Recherche des albums par titre
		   for (var [idAlbum, album] of albums.entries()) {
			   if (album.idAuteur == idAuteur) {
				   console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", titre:"+titre.get(album.titre).nom,+ album.prix + "€");
			   }
		   }
*/
	var btntitre = document.getElementById(rad1);

	var btnauteur = document.getElementById(rad2);

	var btnserie = document.getElementById(rad3);

	var recherche = document.getElementById(recherche);

	function afficher(liste) {
		if(liste.target.id == 'btnserie' && liste.taget.id =="recherche"){ 
			var Listeserie=document.createElement("card");
			//créer une classe à la balise card pour afficher les cards à l'horizontal
			Listeserie.setAttribute("id","listes");
			console.log();(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteurs.get(album.idAuteur).nom+ ",Prix:" +album.prix + "€");
			//document.body.appendChild(Listedserie);}
			console.log(Listeserie);}

			if(liste.target.id == 'btnauteur' && liste.taget.id =="recherche"){ 
			var Listeauteur=document.createElement("card");
			//créer une classe à la balise card pour afficher les cards à l'horizontal
			Listeauteur.setAttribute("id","listea");
			Listeauteur.innerHTML(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom+", Prix:"+ album.prix + "€");
			//document.body.appendChild(Listeauteur);}
			console.log(Listeauteur);}

			if(liste.target.id == 'btntitre'&& liste.taget.id =="recherche"){
				var Listetitre=document.createElement("card");
				//créer une classe à la balise card pour afficher les cards à l'horizontal
				Listetitre.setAttribute("id","listet");
				Listetitre.innerHTML(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Titre:"+ album.titre+", Prix:" + album.prix + "€");
				//document.body.appendChild(Listetitre);}
				console.log(Listetitre);}
	}
	
	
	
	/*function getAlbum(num) {
		var album = albums.get(num.value);
	
		// on initialise un nouveau tableau (qui ne contient que les clés des albums... la longueur sera la meme que la longueur de la map albums)
		var albumsKeys = albums.keys();
	
		if (album === undefined) {
		  txtSerie.value = "";
		  txtNumero.value = "";
		  txtTitre.value = "";
		  txtAuteur.value = "";
		  txtPrix.value = 0;
	
		  afficheAlbums(
			$("#albumMini"),
			$("#album"),
			albumDefaultMini,
			albumDefault
		  );
		} else {
		  var albumKey;
	
		  //on refait une boucle sur la map des albums
		  albums.forEach((album2) => {
			// sur le tableau des clés, la fonction next().value va donner la clé suivante
			// ainsi vu qu'on est dans une boucle sur les albums, à chaque passage
			// la valeur va changer
			albumKey = albumsKeys.next().value;
	
			//on compare l'album de la boucle avec l'album que l'on veut afficher
			if (album.titre == album2.titre) {
			  console.log(" Clé de l'album " + albumKey);
			  console.log(
				"La valeur de num passé en paramètre de la fonction est " + num
			  );
	
			  // on peut ainsi adapter la chose pour mettre un id dans notre balise
			  // que ce soit le bouton ajouter au panier (par exemple id="btn-" + albumKey )
			  // ou notre card pr l'affichage de la modal à qui on va passer un paramètre à savoir l'abumKey
			}
		  });
	
		  var serie = series.get(album.idSerie);
		  var auteur = auteurs.get(album.idAuteur);
	
		  txtSerie.value = serie.nom;
		  txtNumero.value = album.numero;
		  txtTitre.value = album.titre;
		  txtAuteur.value = auteur.nom;
		  txtPrix.value = album.prix;
		}
	}
	
	




	
   
	

	
   
	   
	

	
   /**
	* Affichage des images, les effets sont chainés et traités
	* en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	* pour éviter l'accumulation d'effets si défilement rapide des albums.
	* 
	* @param {object jQuery} $albumMini 
	* @param {object jQuery} $album 
	* @param {string} nomFic 
	* @param {string} nomFicBig 
	*/
/*function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
	$album.stop(true, true).clearQueue().fadeOut(100, function () {
		$album.attr('src', nomFic);
		$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
			$albumMini.attr('src', nomFicMini);
			$albumMini.slideDown(200, function () {
				$album.slideDown(200);
			});
		})
	});


}

/**
 * Affichage de l'image par défaut si le chargement de l'image de l'album
 * ne s'est pas bien passé
 * 
 * @param {object HTML} element 
 */
/*function prbImg(element) {
	// console.log(element);
	if (element.id === "albumMini")
		element.src = albumDefaultMini;
	else element.src = albumDefault;

}
*/