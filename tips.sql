---------------------- PL/SQL ----------------------
-- Affichage de valeurs sans table
select 2 from dual;

-- Concatenation
Varchar2 : 'test' || ' test';
dbms_lob.append(txt, 'texte') -- Type clob : utiliser le package dbms_lob (risque de trunc si on utilise ||)

-- Sequences
select SEQ_EMP_ID.nextval from dual;

-- Regles de nommage
Trigger: suffixe INS et UPD (insert et update)