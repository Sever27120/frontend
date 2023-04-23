function addParametersInForm() {
    try {
      var parameters = location.search.substring(1).split("&");

      var temp = parameters[0].split("=");
      console.log(temp[1]);

      l = decodeURI(temp[1]);

      temp = parameters[1].split("=");
      c = decodeURI(temp[1]);

      document.getElementById("Parametre1").innerHTML = l;
      document.getElementById("Parametre2").innerHTML = c;
    } catch (error) {
      console.log("Il n'y a pas de paramètres");
    }
  }

  addParametersInForm();