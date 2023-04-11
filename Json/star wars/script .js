let characterList = new Array();
let movieList=new Array()
let RecordsList=new Array();
let RecordsMovieList=new Array();
var starWarsList= document.getElementById('liste');



function AjouteBtnPeople(people){
    let listItem = document.createElement('button'); // créer un bouton pour chaqyue personnages créer
    listItem.id=people.name;
    listItem.innerHTML =   people.name ; 
  
    listItem.addEventListener("click", createDetailPerso(people.url));
    starWarsList.appendChild(listItem);  
    return listItem;
}

function ShowInfosFilms(film){
   
    

    console.log(film.title);
}
function createDetailPerso(url){
console.log(RecordsList);


fetchAPI(url,"people",true);
     

}
 

async function fetchAPI (url,type,urldonne){
    try{
    if (type!="" && urldonne==false){
        url+=type;
    }
    await fetch(url) 
        .then( async function(response) {   
        
            return   await response.json(); 
        })
        .then(function(json) {
            let result;
            if (urldonne){
                //l'url est donné donc on affiche qu'un élément... il n'y a pas de results dans le retour du json
                result=json;
            }else{
                result = json.results; 
            }

            
            console.log(result);
            switch(type){
                case "films":
                        movieList=movieList.concat(result);
                        console.log(movieList);

                        if (urldonne){
                            var detail=document.getElementById('Detail');

                            let NameFilmsItem=document.createElement('div');
                            NameFilmsItem.id=result.title;
                            NameFilmsItem.innerHTML=result.title;
                            detail.appendChild(NameFilmsItem);
                        }
                        
           
        /* Appelons notre fonction */
                    break;


                case "people":
                    //Chaque résultat est concaténé pour apparaître dans un tableau
                    characterList = characterList.concat(result);

                    if (urldonne){
                        // RecordsList= new Array();
                        RecordsList=result;

                        var detail=document.getElementById('Detail');

                        let NameItem=document.createElement('div');
                        NameItem.id=result.name;
                        NameItem.innerHTML=result.name;
                        detail.appendChild(NameItem);

                        for (i=0;i<result.films.length;i++){
                            console.log (result.films[i]);
                            fetchAPI(result.films[i],"films",true);

                        }


                    }
                    else {
                        for(r of result) {
                            // console.log(r.name);
                            console.log(r);
                            currentItem=AjouteBtnPeople(r);
                           
                           
                            RecordsList.push(r);
                        }
                }
                   
               
            
            }
      });
    } catch (error) {
        console.log("Error", error)
      }
}

function affiche(Records)
{
    for (r of Records){
        console.log(r.name);
    }
}

 fetchAPI('https://swapi.dev/api/',"people",false);


// console.log(RecordsList);


