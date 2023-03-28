function greetVisitor(phrase) { 

  var welcome = phrase + ". Content de vous voir !"; // Local variable 
  var sayWelcome = function() { 
  alert(welcome); 
  } 
    return sayWelcome; 
} 

var personalGreeting = greetVisitor('Bienvenue, ami'); 
personalGreeting(); // affiche "Bienvenue, ami. Content de vous voir !"