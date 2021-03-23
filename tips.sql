Concaténation:
Varchar2 : 'test' || ' test'
Clob : utiliser le package dbms_lob (risque de trunc si on utilise ||)

dbms_lob.append(txt, 'texte')

Utiliser from dual 
