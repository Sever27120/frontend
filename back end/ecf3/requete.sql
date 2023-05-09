select sum(Pu_HT*quantite),nom_four
from commande as a join saisie as s on c.num_com=s.num_com
join produit as p on p.num_pro=s.num_pro
join fournisseur on f.ref_four=p.ref_four
group by nom_four;


select num_pro,desi_pro,quantite,date_com,nom_four
from commande