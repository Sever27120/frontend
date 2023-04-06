var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",

};

var booksList = new Array();

var authorsList = new Array();

var categoriesList = new Array();

window.addEventListener("load", jasonOnLoad());
// On lance le filtre par auteur quand on change sur la liste déroulante
document.getElementById("listAuthors").addEventListener("change", function () {
    ChargeByAuthor();
});
// on lance le filtre par categorie quand on change sur la liste déroulante
document.getElementById("listCategories").addEventListener("change", function () {
    ChargeByCategorie();
});

function jasonOnLoad() {

    fetch("books.json")
        .then((response) => {
            return response.json();
        })
        .then((booksData) => {
            console.log(booksData);
            createListe(booksData);
        });
}

function createListe(_data) {
    for (var x = 0; x < _data.length; x++) {
        var book = _data[x];
        booksList.push(book);

        // on créer la liste des auteurs 
        for (var y = 0; y < book.authors.length; y++)
            var author = book.authors[y];

        if (authorsList.indexOf(author) == -1) {
            authorsList.push(author);
        }

        //on créer la liste des catégories
       /* for (var z = 0; z < book.categories.length; z++)
            var categorie = book.categories[z];

        if (categoriesList.indexOf(categorie) == -1) {
            categoriesList.push(categorie);
        }*/// pas demander dans le cahier des charges.


    }
    //trier la liste par ordre alphabétique
    booksList.sort();
    authorsList.sort();
    categoriesList.sort();

    for (var a = 0; a < authorsList.length; a++) {
        var option = document.createElement("option");
        option.value = authorsList[a];
        option.innerText = authorsList[a];
        document.getElementById("listAuthors").appendChild(option);
    }

    for (var b = 0; b < categoriesList.length; b++) {
        var option = document.createElement("option");
        option.value = categoriesList[b];
        option.innerText = categoriesList[b];
        document.getElementById("listCategories").appendChild(option);
    }
    showBooks(booksList);
}

function showBooks(_booksList) {
    document.getElementById("booksList").innerHTML = "";

    for (var i = 0; i < _booksList.length; i++) {
        var bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card mb-4");

        if (_booksList[i].thumbnailUrl == undefined ||
            _booksList[i].thumbnailUrl == null) {
            _booksList[i].thumbnailUrl= 
                "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
        }

        var titre;
        if (_booksList[i].title.length > 20) {
            titre = _booksList[i].title.substring(0,20) + "(..)"

        }
        else {
            titre = _booksList[i].title;
        }

       
        var description;
        var descriptionshort;

        if
            (_booksList[i].shortDescription == undefined ||
            _booksList[i].shortDescription == null) 
            {
            description = "";
            descriptionshort = "";
        }
        else {
            if (booksList[i].shortDescription.length > 20) {

                descriptionshort = _booksList[i].shortDescription.substring(0,20) + "(..)";
                description = _booksList[i].shortDescription;
            }
            else {
                descriptionshort = _booksList[i].shortDescription;
                description = _booksList[i].shortDescription;
            }

            var datePubli;
            try {
                datePubli = new Date(_booksList[i].publishedDate.dt_txt)
                    .toLocaleDateString("fr-FR", options);
        
            } catch (error) {
                datePubli = "Pas date de publication";
            }
        
            bookCard.innerHTML = "<img src='" + _booksList[i].thumbnailUrl + "'/>" +
              
                "<h1 class='bookTitle'><span class='infobulle' title='" +
                _booksList[i].title + "'>" +
                titre + "</span></h1>" +
                //pas demander dans le cahier des charges comme c'est pour afficher que les 20 caractères.
                "<h4>" + datePubli + "</h4>";
            if (description != "") {
                bookCard.innerHTML += "<h4> <span class='infobulle' title='" +
                    _booksList[i].shortDescription + "'>" + description + "</span></h4>";
            }
            document.getElementById("booksList").appendChild(bookCard);
        }

    }


  
   

}

function ChargeByAuthor() {
    var e = document.getElementById("listAuthors");
    var strAuthors = e.options[e.selectedIndex].innerText;

    var booksByAuthorsList = new Array();
    if (strAuthors == "") {
        showBooks(booksList);
    }
    else {
        for (var x = 0; x < booksList.length; x++) {
            var bookByAuthor = booksList[x];
            if (bookByAuthor.authors.indexOf(strAuthors) != -1) {
                booksByAuthorsList.push(bookByAuthor);
            }
        }
    }
    booksByAuthorsList.sort();
    showBooks(booksByAuthorsList);

}

function ChargeByCategorie() {
    var e = document.getElementById("listCategories");
    var strCategories = e.options[e.selectedIndex].innerText;

    var booksByCategoriesList = new Array();
    if (strCategories == "") {
        showBooks(booksList);
    }
    else {
        for (var y = 0; y < booksList.length; y++) {
            varbookByCategorie = booksList[y];
            if (bookCategorie.categories.indexOf(strCategories) != -1) {
                booksByCategoriesList.push(bookByCategorie);
            }
        }
    }
    booksByCategoriesList.sort();
    showBooks(booksByCategoriesList);

}
