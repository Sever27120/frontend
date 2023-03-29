
// je créer une variable tableau pour indiquer les nom des élémets
var tableau=["element1","element2","element3","element4"];

//créer un élément ul  pour contenir les li renseigner par les éléments
var ul= document.createElement("ul");

// créer une boucle pour indiquer tous les éléments du tableau

for (i=0;i<tableau.length;i++)
{
    var li=document.createElement("li");

    li.className="red";

    li.innerHTML = tableau[i];

    if(tableau[i]=="element3")
    {

           var ul2=document.createElement("ul");

           for (j=1;j<=3;j++)
           {

            var li2=document.createElement("li")

            li2.className ="blue";

            li2.innerText = "Coucou" + j;

            ul2.appendChild(li2);
           }
        li.appendChild(ul2);
    }
    ul.appendChild(li);
}

document.getElementsByTagName("body")[0].appendChild(ul);

