function modif_paragraphe() {

    var para=document.getElementById("premier");

    para.innerHTML="Premier paragraphe <i>corrigé</i>."
    
}

function centrage_h1()
{
    titre=(document.getElementsByTagName("h1"))[0];
    titre.setAttribute("align", "center");
}
