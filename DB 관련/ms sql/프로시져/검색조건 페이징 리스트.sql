USE [Test]
GO
/****** Object:  StoredProcedure [dbo].[usp_BoardList]    Script Date: 2016-03-18 오후 3:11:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*******************************************************************
* 1.Programmed by	: H
* 2.Date			: 2016-03-18
* 3.Role			: 게시판 
* 4.Parameters		:
* 5.Modification History
*====================================================================
*  WHO		WHEN		WHAT
*====================================================================
* H		2016-03-18		초기작성


*====================================================================

*********************************************************************/

--exec usp_BoardList 10,0,'','','1' , null,null, 0

--exec usp_BoardList  10,0,'','','1','2016-03-13','2016-03-18',1

  
 

ALTER PROCEDURE [dbo].[usp_BoardList]
/*********************************************************************
* Interface Part
*********************************************************************/
(
		@PageSize			int			= 0
,		@CurrentPage			int		= 0
,		@KeyCode			varchar(10) = ''
,		@Keyword			varchar(50) = ''
,       @DateColumn			varchar(50) 
,		@SDate				varchar(10) 
,		@EDate				varchar(10) 
,		@IsSecret			bit   

)
AS
set nocount on

/*********************************************************************
* transaction header
*********************************************************************/
declare	@origin_tranCount	int
declare	@error			int
declare	@rowCount		int
set	@origin_tranCount	= @@tranCount
set	@error			= 0
set	@rowCount		= 0

declare	@errorCode	int
declare	@errorText	varchar(1000)
set	@errorCode	= 0
set	@errorText	= 'Error Issue'


/*********************************************************************
* Pre-Condition Check Part
*********************************************************************/



/*********************************************************************
* Variable Part
*********************************************************************/

if (@DateColumn is null or @DateColumn = '')
begin
 set @DateColumn = '1'
end


if (@Sdate is null or @Sdate = '')
	begin
		if(@DateColumn = '1')
		begin
			 select @Sdate =  min(Convert(varchar(10),RegDate,120)) from Board 
		 end
		 else if(@DateColumn = '2')
		 begin
			select @Sdate =  min(Convert(varchar(10),UpdateDate,120)) from Board 
		 end
	 end
	 

if (@Edate is null or @Edate = '')
	begin
		if(@DateColumn = '1')
		begin
		 select @Edate =  max(Convert(varchar(10),RegDate,120)) from Board ;
		end
		 else if(@DateColumn = '2')
		begin
		 select @Edate =  max(Convert(varchar(10),UpdateDate,120)) from Board ;
		end
	 end
	 


/*********************************************************************
* Implementation Part
*********************************************************************/


----------------------------------------------------------------------
-- Board 리스트
----------------------------------------------------------------------
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED

			select top  (@PageSize)  Seq,Name,Title,IsSecret,Convert(varchar(10),RegDate,120) as RegDate 
			,Convert(varchar(10),Updatedate,120) as  UpdateDate from Board
			where not Seq in (select top (@CurrentPage)  Seq from Board
					where  (case @DateColumn when  '1' then convert(varchar(10),RegDate,120)  when '2' then convert(varchar(10),UpdateDate,120) else convert(varchar(10),RegDate,120) end)  
					between @SDate and @EDate
					and (case @KeyCode when '1' then Title when '2' then Name else '' end)
					like (case when @KeyCode = '' then '' else '%'+ @Keyword+'%'  end)
					and (case @IsSecret when  0 then IsSecret when  1 then IsSecret else '' end) =  (case @IsSecret when  0 then 0 when  1 then 1 else '' end)
					order by Seq   desc
			 )
			and  (case @DateColumn when  '1' then convert(varchar(10),RegDate,120)  when '2' then convert(varchar(10),UpdateDate,120) else convert(varchar(10),RegDate,120) end)  
			between @SDate and @EDate
			and (case @KeyCode when '1' then Title when '2' then Name else '' end)
			like (case when @KeyCode = '' then '' else '%'+ @Keyword+'%'  end)
			and (case @IsSecret when  0 then IsSecret when  1 then IsSecret else '' end) =  (case @IsSecret when  0 then 0 when  1 then 1 else '' end)
			order by Seq   desc


/*********************************************************************
* transaction tail
*********************************************************************/
transSuccess:
	if @@tranCount > @origin_tranCount commit tran
	return 0


transFail:
	if @@tranCount > @origin_tranCount rollback tran
	set @errorText = convert(varchar(11), @errorCode) + ' : ' + @errorText
	raiserror (@errorText, 16, 1)
	return @errorCode


/*********************************************************************
* End of usp
*********************************************************************/
set nocount off