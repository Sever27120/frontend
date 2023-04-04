


var alea=Math.round(Math.random()*(10-1+1))+1;



    
while (alea!=""){
/*var element=document.getElementById("textBoxl");
element.addEventListener("alea",verif())*/
 { 
    x=prompt("Entrez un nombre");

    console.log(x);

    if (x < alea ){
        var element=document.getElementsByTagName("div");
        alert( x+"plus petit");
    }
    else {

        var element=document.getElementsByTagName("div");
        aleert(x+"plus grand");
    } 
   
   }   
  };
  