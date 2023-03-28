nbpersonne1=0;

nbpersonne2=0;

nbpersonne3=0;

while(age!=100){

    var age=prompt("Saisir un entier");

    console.log(age);


     if (age<20) {
    
            nbpersonne1++;
            alert("Le nombre de personnes jeunes est:"+nbpersonne1);
     }
            else if (age> 40){

            nbpersonne2++;
            alert("Le nombre de personnes vieux est de:"+nbpersonne2);
         }   
      
            else if (age<20 && age<40) {

            nbpersonne3++;
            alert ("Le nombre de personnes moyens est de:"+nbpersonne3);
    }           
     }
   
    
    // ne calcul que quandon indique un ge pour les vieux ou jeune mais ne calcule pas tous le reste.
