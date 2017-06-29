--그리고 SQL 서버에 다음의 두 쿼리를 날려서 SP 두개를 생성합니다.

create PROCEDURE FindReplace
 (
 @TABLE  VARCHAR(200),
 @Field  VARCHAR(200),
 @WHERE VARCHAR(100),
 @Find  VARCHAR(500),
 @REPLACE  VARCHAR(500)
 )
 AS
 DECLARE @query VARCHAR(8000)
 SET @query  =  'UPDATE ' +  @TABLE +
                ' SET ' +  @Field + '= REPLACE(CONVERT(varchar(8000),'
               + @Field + '),''' +  @Find + ''',''' + @REPLACE  +''')'
 IF(@WHERE <> '')
         SET @query = @query + ' WHERE '+@WHERE
       
 EXECUTE (@query)
 GO


create Procedure RemoveStringFinal
 @FIND  VARCHAR(500),
 @REPLACE  VARCHAR(500)
as
DECLARE @TABLE_NAME VARCHAR(500)
DECLARE @COLUMN_NAME VARCHAR(500)
DECLARE @DATA_TYPE VARCHAR(500)
DECLARE db_cursor CURSOR FOR
  select  TABLE_NAME, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
OPEN db_cursor 
FETCH NEXT FROM db_cursor INTO @TABLE_NAME, @COLUMN_NAME, @DATA_TYPE
WHILE @@FETCH_STATUS = 0 
BEGIN 
       if @DATA_TYPE = 'varchar' or @DATA_TYPE = 'text' or @DATA_TYPE = 'ntext' or @DATA_TYPE = 'nvarchar'
          begin
     print @TABLE_NAME
            print @COLUMN_NAME
     print @DATA_TYPE
  
              EXEC FindReplace @TABLE_NAME,@COLUMN_NAME,'',@FIND,@REPLACE
          end     
       FETCH NEXT FROM db_cursor INTO @TABLE_NAME, @COLUMN_NAME, @DATA_TYPE
END
CLOSE db_cursor 
DEALLOCATE db_cursor

이제 exec로 SP를 써먹어 DB에 들어간 코드들을 지워줍니다.
제 서버에는 아래 <script>로 쌓인 데이터가 있어서 아래와 같이.. 싹 날려줬져...
심심하지 않은 이틀이었네요...

Run stored procedure example
EXEC RemoveStringFinal '<script src=http://www.alzhead.com/b.js></script>',''
EXEC RemoveStringFinal '<script src=http://www.chkbnr.com/b.js></script>',''
EXEC RemoveStringFinal '<script src=http://www.adwbnr.com/b.js></script>',''
EXEC RemoveStringFinal '<script src=http://www.coldwop.com/b.js></script>',''
EXEC RemoveStringFinal '<script src=http://www.chkadw.com/b.js></script>',''