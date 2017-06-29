
with RetnGroup (retnDate, saleCnt,retnCnt,saleAmt,retnAmt)
as
(

	select 
		retnDate
		, sum(case when retnType = '2' then cnt else 0 end) as saleCnt
		, sum(case when retnType = '1' then cnt else 0 end) as retnCnt
		, sum(case when retnType = '2' then Amt else 0 end) as saleAmt
		, sum(case when retnType = '1' then Amt else 0 end) as retnAmt
	from (
		select ReturnDate as retnDate, count(*) as cnt, case when RemainAmt=0 then sum(Jong*1000) else sum(RemainAmt) end as Amt  , '1' as retnType from GiftMst where GiftState = '30' group by ReturnDate,RemainAmt
		union all
		select DisuseDate as retnDate, count(*) as cnt , sum(RemainAmt) as Amt  ,'1' as retnType from GiftMst where GiftState = '99' group by DisuseDate
		union all
		select SaleDate as retnDate, count(*) as cnt , sum(a.RemainAmt) as Amt  , '2' as retnType from GiftMst a group by SaleDate
		
	) a
	group by retnDate
)


select isnull(a.RegDate,b.StmDate) as RegDate,a.SaleCnt,a.retnCnt,a.TotalCnt,a.saleAmt,a.retnAmt,a.TotalAmt
		,a.ShopQty,a.RetnQty,a.UseAmt,a.MaUseAmt,A.provisionAmt,b.ExpiredQty,b.ExpiredAmt
		from
(
select isnull(a.RegDate,b.StmDate) as RegDate,a.SaleCnt,a.retnCnt,a.TotalCnt,a.saleAmt,a.retnAmt,a.TotalAmt
		,a.ShopQty,a.RetnQty,a.UseAmt,b.MaUseAmt,b.provisionAmt
		from
(
select isnull(a.RegDate,b.RetnDate) as RegDate,a.SaleCnt,a.retnCnt,a.TotalCnt,a.saleAmt,a.retnAmt,a.TotalAmt
		,b.ShopQty,b.RetnQty,b.UseAmt
 from
(
--미지급건,금액 누계
select distinct
a.RegDate
,  (select sum(saleCnt) from RetnGroup where a.RegDate >= retnDate) as saleCnt	
,  (select sum(retnCnt) from RetnGroup where a.RegDate >= retnDate) as retnCnt
,  (select sum(saleCnt) - sum(retnCnt) from RetnGroup where a.RegDate >= retnDate) as TotalCnt
,  (select sum(saleAmt) from RetnGroup where a.RegDate >= retnDate) as saleAmt	
,  (select sum(retnAmt) from RetnGroup where a.RegDate >= retnDate) as retnAmt
,  (select sum(saleAmt) - sum(retnAmt) from RetnGroup where a.RegDate >= retnDate) as TotalAmt
from 
(
select a.ReturnDate as RegDate from GiftMst a where GiftState = '30' group by a.ReturnDate
 union all
select a.SaleDate as RegDate from GiftMst a group by a.SaleDate  
union all
select a.DisuseDate as RegDate from GiftMst a where GiftState = '99' group by a.DisuseDate  
)a
--where a.RegDate  between convert(datetime, @Sdate + ' 00:00:00', 120) and convert(datetime, @Edate + ' 23:59:59', 120)
)a
full outer join
			(
				--회수금액 ,회수건,회수가맹점
				select a.RetnDate, Count(a.ShopQty) as ShopQty ,b.RetnQty,b.UseAmt from
				(
					select a.RetnDate,a.ShopCode as ShopQty from retnmst a with (nolock) 
					--where a.RetnDate  between convert(datetime, @Sdate + ' 00:00:00', 120) and convert(datetime, @Edate + ' 23:59:59', 120)
					group by a.RetnDate,a.ShopCode
			
				)a
				full outer join

					(
					select a.RetnDate,sum(a.UseAmt) as UseAmt ,sum(a.RetnQty) as RetnQty from
					(
					select a.RetnDate,count(Idx) as RetnQty,case when a.RetnType='10' then  sum(a.UseAmt) else sum(a.UseAmt)+sum(a.RemainAmt) end as UseAmt from retnmst a with (nolock) 
					--where a.RetnDate  between convert(datetime, @Sdate + ' 00:00:00', 120) and convert(datetime, @Edate + ' 23:59:59', 120)
					group by a.RetnDate,a.RetnType
					)a
					group by a.RetnDate
					) b on(a.RetnDate = b.RetnDate)
				group by a.RetnDate,b.RetnQty,b.UseAmt

				)b on (a.RegDate = b.RetnDate)
			)a
			full outer join
			(
			select a.StmDate ,sum (a.MaUseAmt) as MaUseAmt, sum(a.provisionAmt) as provisionAmt from 
					(
						select a.StmDate,(sum(a.MaUseAmt)+sum(a.CancelAmt)) as MaUseAmt,(a.provisionAmt- a.FeeRate) as provisionAmt from
							(
						--회수마감 
								select 
								a.StmDate
								,Sum(e.UseAmt) as MaUseAmt
								, (isnull(a.FeeRate,0)/100)*sum(e.UseAmt)  as FeeRate
								,case when a.StmState = '1' then sum(e.UseAmt) else 0 end as provisionAmt 
								,sum(isNull(case when e.RetnType = '20' then e.RemainAmt  else 0 end, 0)) as CancelAmt
								from SettlementDay a with (nolock)
								join RetnRelSettlement c with (nolock) on (a.StmCode = c.StmCode)
								join Retnmst e with (nolock) on (c.idx = e.idx and a.ShopCode = e.ShopCode)
								--where a.StmDate  between convert(datetime, @Sdate + ' 00:00:00', 120) and convert(datetime, @Edate + ' 23:59:59', 120)
								group by a.StmDate,a.FeeRate,a.StmState
							)a
						group by a.StmDate,a.provisionAmt, a.FeeRate
						)a
						group by a.StmDate
						) b on (a.RegDate = b.StmDate)
				)a
				full outer join
				(
				--퇴장/만료
				select
				a.StmDate
				,Sum(a.RemainAmt) as ExpiredAmt
				,count(a.GiftNo) as ExpiredQty
				from ExpiredSettlement a with (nolock) 
				--where a.StmDate  between convert(datetime, @Sdate + ' 00:00:00', 120) and convert(datetime, @Edate + ' 23:59:59', 120)
				group by  a.StmDate
				)b on(a.Regdate = b.StmDate)
				order by RegDate desc