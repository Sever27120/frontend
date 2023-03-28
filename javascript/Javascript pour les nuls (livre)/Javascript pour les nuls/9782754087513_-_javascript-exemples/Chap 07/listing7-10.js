var myVariable = "Je me trouve en dehors de la fonction.";
  (function() {
  var myVariable = "Je me trouve dans cette fonction anonyme";
  document.write(myVariable + "<br>");
  })();
document.write(myVariable);