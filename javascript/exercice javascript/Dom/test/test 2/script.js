

var version = navigator.appVersion;

console.log("Le code name de votre brower est:" + navigator.appCodeName);

console.log("Le nom ou la marque du brower est:" + navigator.appName);

console.log("Les informations sur la version sont:" + version);

console.log("Le brower a comme user-agent:" + navigator.userAgent);

console.log("");

if (version.indexOf('Win') > -1) {

    console.log("<br/>Vous etes sous l'environnement Windows");

    console.log("<br/>");
}

if (navigator.userAgent.indexOf('Firefox') > -1) {

    console.log("Vous utilisez un navigateur FireFox ");
}

else if (version.indexOf('Chrome') > -1) {

    console.log("Vous utilisez un navigateur Chrome");
}

else if (version.indexOf('MSIE') > -1) {

    console.log("Vous utilisez un navigateur inconnu");

}