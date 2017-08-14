
SELECT CONCAT('SELECT * FROM ',TABLE_NAME,'; #',TABLE_COMMENT)
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_SCHEMA = 'cuub'
AND TABLE_NAME LIKE '%s_order%';

SELECT CONCAT('private '
,(CASE 
WHEN DATA_TYPE = 'int' then 'int'
WHEN DATA_TYPE = 'varchar' then 'String'
WHEN DATA_TYPE = 'text' then 'String'
else '' end
)
,' ', lower(COLUMN_NAME) , ';'
)
 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 's_order';



