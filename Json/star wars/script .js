let characterList = new Array();
let movieList = new Array()
let planetList = new Array();
let RecordsList = new Array();
let RecordsMovieList = new Array();
var starWarsList = document.getElementById('liste');
//const loader=document.querySelector("loader")chargement de la page mais ne s'arrête pas ;



function AjouteBtnPeople(people) {
    let listItem = document.createElement('button'); // créer un bouton pour chaque personnages créer
    listItem.setAttribute("id", people.name);
    listItem.innerHTML = people.name;
    listItem.addEventListener("click", createDetailPerso(people.url));
    starWarsList.appendChild(listItem);
    return listItem;
}

function AjouteBTnFilms(films) {
    let listItem1 = document.createElement("button");
    listItem1.setAttribute("id", films.title);
    listItem1.innerHTML = films.title;
    listItem1.addEventListener("click", createDetailFilm(films.url));
    starWarsList.appendChild(listItem1);
    return listItem1;
}

function AjouteBtnPlanete(planets) {
    let listItem2 = document.createElement("button");
    listItem2.setAttribute("id", planets.name);
    listItem2.innerHTML = planets.name;
    listItem2.addEventListener("click", creatDetailPlanet(planets.url));
    starWarsList.appendChild(listItem2);
    return listItem2;

}

function ShowInfosFilms(film) {



    console.log(film.title);
}
function createDetailPerso(url) {
    console.log(RecordsList);


    fetchAPI(url, "people", true);

}


async function fetchAPI(url, type, urldonne) {
    try {
        if (type != "" && urldonne == false) {
            url += type;
        }
        await fetch(url)
            .then(async function (response) {

                return await response.json();
            })
            .then(function (json) {
                let result;
                if (urldonne) {
                    //l'url est donné donc on affiche qu'un élément... il n'y a pas de results dans le retour du json
                    result = json;
                } else {
                    result = json.results;
                }


                console.log(result);
                switch (type) {
                    case "films":
                        movieList = movieList.concat(result);
                        console.log(movieList);

                        if (urldonne) {
                            var detail = document.getElementById('Detail');

                            let NameFilmsItem = document.createElement('div');
                            NameFilmsItem.setAttribute("id", result.title);
                            NameFilmsItem.innerHTML = result.title;
                            detail.appendChild(NameFilmsItem);
                        }

                        else {
                            for (b of result) {
                                console.log(b);
                                currentItem = AjouteBtnFilms(b);


                                RecordsList.push(b);
                            }
                        }

                        break;


                    case "people":
                        //Chaque résultat est concaténé pour apparaître dans un tableau
                        characterList = characterList.concat(result);

                        if (urldonne) {

                            RecordsList = result;

                            var detail = document.getElementById('Detail');

                            let NameItem = document.createElement('div');
                            NameItem.id = result.name;
                            NameItem.innerHTML = result.name;
                            detail.appendChild(NameItem);

                            for (i = 0; i < result.films.length; i++) {
                                console.log(result.films[i]);
                                fetchAPI(result.films[i], "films", true);

                            }


                        }
                        else {
                            for (r of result) {
                                // console.log(r.name);
                                console.log(r);
                                currentItem = AjouteBtnPeople(r);


                                RecordsList.push(r);
                            }

                            break;
                        }
                    case "planets":
                        //Chaque résultat est concaténé pour apparaître dans un tableau
                        planetList = planetList.concat(result);

                        if (urldonne) {



                            var detail = document.getElementById('Detail');

                            let NameItem = document.createElement('div');
                            NameItem.id = result.name;
                            NameItem.innerHTML = result.name;
                            detail.appendChild(NameItem);

                            for (i = 0; i < result.planets.length; i++) {
                                console.log(result.planets[i]);
                                fetchAPI(result.planets[i], "planets", true);

                            }


                        }
                        else {
                            for (a of result) {
                                // console.log(r.name);
                                console.log(a);
                                currentItem = AjouteBtnPlanets(a);


                                RecordsList.push(a);
                            }

                            break;
                        }



                }
            });
    } catch (error) {
        console.log("Error", error)
    }
}

function affiche(Records) {
    for (r of Records) {
        console.log(r.name);
    }
}

function affiche(Records) {
    for (a of Records) {
        console.log(a.name);
    }
}
function affiche(Records) {
    for (b of Records) {
        console.log(b.title);
    }
}

fetchAPI('https://swapi.dev/api/', "people", false);

fetchAPI('https://swapi.dev/api/', "films", false);

fetchAPI('https://swapi.dev/api/', "planets", false);
 /*function search() {
 try {
   var parameters = location.search.substring(1).split("/");

   var temp = parameters[0].split("/");
   console.log(temp[1]);

   l = decodeURI(temp[1]);

   temp = parameters[1].split("/");
   c = decodeURI(temp[1]);

   document.getElementById("Parametre1").innerHTML = l;
   document.getElementById("Parametre2").innerHTML = c;
 } catch (error) {
   console.log("Il n'y a pas de paramètres");
 }
}

search();
voir après pour pouvoir effectuer une recherche  sur tous ce qui reste non afficher sur le site*/

// se code ne fonctionne pas pas afficher les détails de chaque personnages et la liste des planètes ainsi que les films ne sont pas afficher.