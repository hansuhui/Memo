/*=====================================
*Split 함수
SELECT dbo.fn_SplitString('123-4567','-',0)
=======================================*/

CREATE FUNCTION FN_SplitString
(@str varchar(1000),@spliter varchar(10),@idx int)
RETURNS varchar(1000)

AS
BEGIN
	DECLARE @NextString NVARCHAR(40)
	DECLARE @Pos int
	DECLARE @NextPos int
	DECLARE @STRING NVARCHAR(40)
	DECLARE @Delimiter NVARCHAR(40)
	DECLARE @Loop INT

SET @STRING = @str
SET @Delimiter = @spliter
SET @STRING = @STRING + @Delimiter
SET @Pos = CHARINDEX(@Delimiter,@STRING)
SET @Loop = 0 
SET @NextString = ''

WHILE(@Pos <> 0)
Begin
SET @NextString = substring(@STRING,1,@Pos-1)
if(@Loop = @idx) break;
-- selct @NextString --결과보기
SET @STRING = SUBSTRING(@STRING ,@Pos+1,LEN(@STRING))
SET @Pos = CHARINDEX(@Delimiter,@STRING)
SET @Loop = @Loop +1
END

RETURN @NextString
END

