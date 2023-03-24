

  
  
  var min,max,i;

  i=0;

  min=0;

  max=0;

   while(entier!=0){
  
      var entier=prompt("Saisir un entier");
  
      console.log(entier);

      if(entier[i]<min){

        min=entier[i];

        console.log(min);
      } 
      else if (entier[i]>max){
        max=entier[i];
        console.log(max);
      }  
    }
      
      
      alert(min);
      alert(max);
      
  // mon code ne fonctionne pas pour me donner le min et max.
 
   

