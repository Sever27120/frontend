var a = window.prompt("Saisissez un premier nombre entier");

var b = window.prompt("Saisissez un deuxième nombre entier");

var c = window.prompt("Saisissez un opérateur entre +,-,* ou /");



// switch pour faire pour vérifier les différent calcule.
switch (c) {
    case "+":
        alert(parseInt(a) + parseInt(b));
        break;

// vérifier l'addition et mettre des parseInt pour convertir en chiffre sinon l'ordi pence à une chaîne de caractère
    case "-":
        alert(a - b);
        break;

// vérifier la soustraction

    case "*":
        alert(a * b);
        break;

// vérifier la multiplication
    case "/":
    if(b==0)
    {
        alert("erreur");
    }
    else{

        alert(a / b);
    }    
    break;
// vérifier la division avec comme erreur si montant est égal à 0,comme b ==0 donc erreur car celà marche que si b est à zero car quand ce résultat est effectuer par la calculatrice un code erreur apparaît.
    default:
        alert("erreur");



}

