

CREATE DATABASE greengarden;

USE greengarden;


CREATE TABLE 'livraison'(
    num_bl INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_bl date,
    cp_bl INT,
    ville_bl VARCHAR(20),
    adresse_bl VARCHAR (40),
     
);

CREATE TABLE 'facture' (
    num_fact int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_fact DATE NOT NULL
);

CREATE TABLE 'commerciale'(
    num_com INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_com VARCHAR(25)NOT NULL

);


CREATE TABLE 'type_client'(
    num_type_cli INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_type_cli VARCHAR(25),
    taux_pena INT,

);

CREATE TABLE 'fournisseur' (
    ref_four INT NOT NULL PRIMARY KEY,
    nom_four VARCHAR(25),
    nom_cate VARCHAR(25)
);

CREATE TABLE 'Categorie_produit'(
    num_cate INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_cate VARCHAR(25) NOT NULL,
 
);

CREATE TABLE 'sous_categorie_produit'(
    num_sous_cate INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_sous_cate VARCHAR(25)
);

CREATE TABLE 'reglement'(
    num_regl INT NOT NULL PRIMARY KEY AUTO8INCREMENT,
    type_regl VARCHAR (25),
    moyen_regl VARCHAR (25)
);

create table 'Produit'(
    num_pro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    desi_pro VARCHAR (25) NOT NULL,
    photo_pro VARCHAR(50) NOT NULL,
    Pu_HT INT NOT NULL,
    ref_four INT,
    
    FOREIGN KEY (reffour) REFERENCES Fournisseur (ref_four)
    );


CREATE TABLE client(
    num_cli INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ref_cli INT NOT NULL,
    nom_cli VARCHAR(30)NOT NULL,
    adresse_cli VARCHAR(40)NOT NULL,
    CP_cli INT NOT NULL,
    ville_cli VARCHAR(20)not null,
    tel_cli INT,
    num_type_cli INT,
    num_com INT,

    FOREIGN KEY (numtypecli) REFERENCES type_client(num_type_cli),
    FOREIGN KEY (numcom) REFERENCES Commande(num_com)

);

CREATE TABLE 'commande'(
    num_com INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_com DATE NOT NULL,
    etat_com VARCHAR (20)NOT NULL,
    num_cli INT,
    num_bl INT,
   

    FOREIGN KEY (num_bl) REFERENCES livraison(num_bl),
    FOREIGN KEY (num_cli) REFERENCES client(num_cli)

);

CREATE TABLE 'appartient'(
    num_cate INT,
    num_pro INT,
    PRIMARY KEY(num_cate,num_pro),

    
    FOREIGN KEY (numcate) REFERENCES Categorie_produit(num_cate),
    FOREIGN KEY (numpro) REFERENCES Produit(num_pro)
);

CREATE TABLE 'saisie'(
    num_com INT,
    num_pro INT,
    quantite INT,
    PRIMARY KEY(num_com,num_pro),
    
    FOREIGN KEY (numcom) REFERENCES Commande(num_com),
    FOREIGN KEY (numpro) REFERENCES Produit(num_pro)
);


CREATE TABLE 'correspond'(
    num_cate INT,
    num_sous_cate INT,
    PRIMARY KEY(num_cate,num_sous_cate),
    
    FOREIGN KEY (numcate) REFERENCES Categorie_produit(num_cate),
    FOREIGN KEY (numsouscate) REFERENCES sous_categorie_produit(num_sous_cate)
);

CREATE TABLE 'payer'(
    num_reg INT,
    num_fact INT,
    
    PRIMARY KEY(num_reg,num_fact),
    
    FOREIGN KEY (numreg) REFERENCES reglement(num_reg),
    FOREIGN KEY (numfact) REFERENCES facture(num_fact)
);

CREATE TABLE 'associer'(
    num_bl INT,
    num_fact INT,
    
    PRIMARY KEY(num_bl,num_fact),
    
    FOREIGN KEY (numbl) REFERENCES livraison(num_bl),
    FOREIGN KEY (numfact) REFERENCES facture(num_fact)
);


