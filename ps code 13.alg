<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (sexe==M Et age>20 Ou sexe==F Et age&lt;=35) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" nbDecimales="8" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="sexe EST_DU_TYPE NOMBRE" code="1#NOMBRE#sexe"/>
        <item algoitem="age EST_DU_TYPE NOMBRE" code="1#NOMBRE#age"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez le sexe (M/F)&quot;" code="4#Entrez le sexe (M/F)#0"/>
        <item algoitem="LIRE sexe" code="2#sexe#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez l'age&quot;" code="4#Entrez l'age#0"/>
        <item algoitem="LIRE âges" code="2#âges#pasliste"/>
        <item algoitem="SI (sexe==M Et age>20 Ou sexe==F Et age&lt;=35) ALORS" code="6#sexe==M Et age>20 Ou sexe==F Et age&lt;=35">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;impossable &quot;" code="4#impossable #0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;non impossable&quot;" code="4#non impossable#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
