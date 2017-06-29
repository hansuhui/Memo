/*
�ۼ��� H
�ۼ��� 2015-11-12
*/

--use [TKK]


Declare @TABLE_NAME  varchar(100)
set @TABLE_NAME = 'ADMINMENU'; --�ش� ���̺��

select a.TABLE_NAME as ���̺��̸� , a.COLUMN_NAME as �÷��̸� , a.DATATYPE as ������Ÿ��
      ,a.Description as �÷��ּ� , a.TableDescription as ���̺��ּ�, a.CONSTRAINT_NAME as ��������ID
	  ,a.PKCONSTRAINT_NAME as �ܷ�Ű�ش�PKID , b.PKTABLE as �ش�PKID���̺� ,b.PKCOLUMN as �ش����̺�PK 
from
(
select a.*,b.PKCONSTRAINT_NAME from
(
select a.*,b.CONSTRAINT_NAME  from 
(
--�÷� ����
select a.*,b.value as TableDescription from 
(
select a.*,b.value as Description from 
(
select TABLE_NAME,COLUMN_NAME,isnull((upper(DATA_TYPE)+'('+cast(CHARACTER_MAXIMUM_LENGTH as varchar)+')'),upper(DATA_TYPE)) as DATATYPE from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = @TABLE_NAME
) a  left outer join
(
SELECT * FROM ::FN_LISTEXTENDEDPROPERTY(NULL, 'SCHEMA', 'DBO', 'TABLE', @TABLE_NAME, 'COLUMN', DEFAULT)
) b on( a.COLUMN_NAME = b.objname COLLATE Korean_Wansung_CI_AS) 
)a left outer join
(
SELECT * FROM ::FN_LISTEXTENDEDPROPERTY (NULL, 'SCHEMA', 'DBO', 'TABLE', @TABLE_NAME, DEFAULT, DEFAULT)
) b on( a.TABLE_NAME = b.objname COLLATE Korean_Wansung_CI_AS) 
)a left outer join 
(
select CONSTRAINT_NAME,COLUMN_NAME,TABLE_NAME from INFORMATION_SCHEMA.KEY_COLUMN_USAGE
) b on( a.COLUMN_NAME = b.COLUMN_NAME and a.TABLE_NAME = b.TABLE_NAME ) 
)a left outer join 
(
select CONSTRAINT_NAME ,UNIQUE_CONSTRAINT_NAME as PKCONSTRAINT_NAME from INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS
) b on( a.CONSTRAINT_NAME = b.CONSTRAINT_NAME) 
) a left outer join 
(
select TABLE_NAME as PKTABLE,COLUMN_NAME as  PKCOLUMN ,CONSTRAINT_NAME   from INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
) b on( a.PKCONSTRAINT_NAME = b.CONSTRAINT_NAME) 







