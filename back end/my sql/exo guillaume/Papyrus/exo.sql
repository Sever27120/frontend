papyrus ex 11:
select  p.libart, e.numcom, e.obscom

from ligcom as l join produit as p on l.codart=p.codart
join entcom as e on l.numcom=e.numcom
where e.obscom like '%urgent%';

ex 13:
select numfou from entcom where numcom='70210';


select numcom, numfou from entcom where numfou in (select numfou from entcom where numcom='70210' );

select numcom, e.numfou from entcom as e join (select numfou from entcom where numcom='70210' ) as four on e.numfou=four.numfou


ex 19:
select e.numcom,sum(qtecde* priuni) as prixht,sum(qtecde* priuni) *1.20 as prixttc from entcom as e
join ligcom as l on e.numcom=l.numcom

where year(datcom)=2018