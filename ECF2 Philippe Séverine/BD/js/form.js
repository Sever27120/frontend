function validerFormulaire() {
    let nom = document
        .getElementById("nom")
        .value;
    let prenom = document
        .getElementById("prenom")
        .value;
    let adresse = document
        .getElementById("adresse")
        .value;
    let codepostal = document
        .getElementById("codepostal")
        .value;
    let ville = document
        .getElementById("ville")
        .value;
    let email = document
        .getElementById("email")
        .value;
    let motdepasse = document
        .getElementById("mot de passe")
        .value;
        let confirmermotdepasse = document
        .getElementById("confirmermotdepasse")
        .value;
    if (nom.length < 1) {
        alert("Veuillez entrer votre nom.");
        return false;
    }
    if (prenom.length < 1) {
        alert("Veuillez entrer votre prénom.");
        return false;
    }
    if (isNaN(codepostal) || codepostal.length != 5) {
        alert("Veuillez entrer un code postal valide de 5 chiffres.");
        return false;
    }
    if (ville.length < 1) {
        alert("Veuillez entrer le nom de votre ville.");
        return false;
    }
    if (!checkEmail(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false;
    }
    if (!checkEmail(motdepasse)) {
        alert("Veuillez entrer un mot de passe avec 6 caractères, un chiffre, un caractère et une majuscule.");
        return false;
        return false;
    }
    if (!checkEmail(confirmermotdepasse)) {
        alert(" Veuillez entrer le mot de passe identique à celui du dessus");
        return false;
    }

    return true;
}

function checkEmail(email){
    var re=new RegExp("[a-z0-9]+(\.[a-z0-9]+)+@ [a-z0-9-]+(\.[a-z0-9]+)$");
    
    return re.test(email);
}
function validate(){
    var email=
email=document.getElementById("email").value;

if (checkEmail(email)){
    alert("Adresse e-mail valide");
}

else{
    alert("Adresse e-mail non valide")
}
}
return false;

function checkmotdepasse(motdepasse){
    var mp=new RegExp("/^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])(?!.*[iIoO])\S{6,12}$/");
    
    return mp.test(motdepasse);
}
function validate(motdepasse){
    var motdepasse=
motdepasse=document.getElementById("motdepasse").value;

if (checkmotdepasse(motdepasse)){
    alert("le mot de passe est valide");
}

else{
    alert("le mot de passe non valide: il faut 6 caractère, un chiffre, un caractères et une majuscule")
}
}
return false;

function validate(){
    var confirmermotdepasse=
confirmermotdepasse=document.getElementById("confirmermotdepasse").value;

if (checkEmail(confirmermotdepasse==motdepasse)){
    alert("le mot de passe est identique");
}

else{
    alert("Le mot de passe est différent du précédent");
}
}
return false;
