CREATE TABLE IF NOT EXISTS 'petshow\' (

'id' int (21) NOT NULL AUTO INCREMENT,
'nome' varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
'raca' double DEFAULT NULL,
'createdAT' datetime NOT NULL,
'updatedAT' datetime NOT NULL,
PRIMARY KEY (id )

) ENGINE=INNODB AUTO INCREMENT=2 DEFAULT CHARSET=ULTB COLLATE=utf8_unicode_ci;


INSERT INTO 'pagamentos': ("id", 'nome','raca', 'createdAT', 'updatedAT') VALUES
(1, 'zico','SHITZU', '2019-05-05 17:07:07','2019-05-05 119:09:09');
COMMIT;