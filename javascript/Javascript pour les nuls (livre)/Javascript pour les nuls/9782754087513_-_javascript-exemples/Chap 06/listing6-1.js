var languagePreference = "Espagnol"
switch (languagePreference){
 case "Anglais":
  console.log("Hello!");
  break;
 case "Espagnol":
  console.log("Hola!");
  break;
 case "Allemand":
  console.log("Guten Tag!");
  break;
 case "Français":
  console.log("Bonjour!");
  break;
 default:
  console.log("Désolé, je ne parle pas " + languagePreference + "!");
}