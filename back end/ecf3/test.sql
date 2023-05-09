CREATE TABLE livraison(
   num_bl VARCHAR(50),
   date_bl DATE,
   cp_bl BYTE,
   ville_bl VARCHAR(20),
   adresse_bl VARCHAR(40),
   PRIMARY KEY(num_bl)
);

CREATE TABLE Facture(
   num_fact VARCHAR(50),
   date_fact DATE NOT NULL,
   PRIMARY KEY(num_fact)
);

CREATE TABLE commerciale(
   num_com INT,
   nom_com VARCHAR(50),
   PRIMARY KEY(num_com)
);

CREATE TABLE Type_client(
   num_type_cli VARCHAR(50),
   nom_type_cli VARCHAR(30),
   taux_pena BYTE,
   PRIMARY KEY(num_type_cli)
);

CREATE TABLE fournisseur(
   ref_four INT,
   nom_four VARCHAR(25) NOT NULL,
   nom_cate VARCHAR(25),
   PRIMARY KEY(ref_four)
);

CREATE TABLE categorie_produit(
   num_cate INT,
   nom_cate VARCHAR(25),
   PRIMARY KEY(num_cate)
);

CREATE TABLE sous_categorie_produit(
   num_sous_cate INT,
   nom_sous_cate VARCHAR(25) NOT NULL,
   PRIMARY KEY(num_sous_cate)
);

CREATE TABLE Reglement(
   num_reg INT,
   type_regl VARCHAR(25),
   moyen_regl VARCHAR(25),
   PRIMARY KEY(num_reg)
);

CREATE TABLE Produit(
   num_pro INT,
   desi_pro VARCHAR(25) NOT NULL,
   photo_pro VARCHAR(50),
   Pu_HT BYTE,
   ref_four INT NOT NULL,
   PRIMARY KEY(num_pro),
   FOREIGN KEY(ref_four) REFERENCES fournisseur(ref_four)
);

CREATE TABLE CLIENT(
   num_cli INT,
   ref_cli INT NOT NULL,
   nom_cli VARCHAR(30) NOT NULL,
   adresse_cli VARCHAR(40) NOT NULL,
   CP_cli INT NOT NULL,
   ville_cli VARCHAR(20) NOT NULL,
   tel_cli INT,
   coef_cli INT NOT NULL,
   num_type_cli VARCHAR(50) NOT NULL,
   num_com INT NOT NULL,
   PRIMARY KEY(num_cli),
   FOREIGN KEY(num_type_cli) REFERENCES Type_client(num_type_cli),
   FOREIGN KEY(num_com) REFERENCES commerciale(num_com)
);

CREATE TABLE COMMANDE(
   num_com VARCHAR(50),
   date_com DATE,
   etat_com VARCHAR(20),
   num_bl VARCHAR(50) NOT NULL,
   num_cli INT NOT NULL,
   PRIMARY KEY(num_com),
   FOREIGN KEY(num_bl) REFERENCES livraison(num_bl),
   FOREIGN KEY(num_cli) REFERENCES CLIENT(num_cli)
);

CREATE TABLE appartient(
   num_cate INT,
   num_pro INT,
   PRIMARY KEY(num_cate, num_pro),
   FOREIGN KEY(num_cate) REFERENCES categorie_produit(num_cate),
   FOREIGN KEY(num_pro) REFERENCES Produit(num_pro)
);

CREATE TABLE saisie(
   num_com VARCHAR(50),
   num_pro INT,
   quantite INT,
   PRIMARY KEY(num_com, num_pro),
   FOREIGN KEY(num_com) REFERENCES COMMANDE(num_com),
   FOREIGN KEY(num_pro) REFERENCES Produit(num_pro)
);

CREATE TABLE correspond(
   num_cate INT,
   num_sous_cate INT,
   PRIMARY KEY(num_cate, num_sous_cate),
   FOREIGN KEY(num_cate) REFERENCES categorie_produit(num_cate),
   FOREIGN KEY(num_sous_cate) REFERENCES sous_categorie_produit(num_sous_cate)
);

CREATE TABLE payer(
   num_fact VARCHAR(50),
   num_reg INT,
   PRIMARY KEY(num_fact, num_reg),
   FOREIGN KEY(num_fact) REFERENCES Facture(num_fact),
   FOREIGN KEY(num_reg) REFERENCES Reglement(num_reg)
);

CREATE TABLE associer(
   num_bl VARCHAR(50),
   num_fact VARCHAR(50),
   PRIMARY KEY(num_bl, num_fact),
   FOREIGN KEY(num_bl) REFERENCES livraison(num_bl),
   FOREIGN KEY(num_fact) REFERENCES Facture(num_fact)
);
