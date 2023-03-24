


var alea=Math.round(Math.random()*(10-1+1))+1;


while (alea!="")

 { 
    x=prompt("Entrez un nombre");

    console.log(x);

    if (x < alea ){
        alert( x+"plus petit");
    }
    else {
        alert(x+"plus grand");
    } 
   
   }     