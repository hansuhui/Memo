select * from Shops where IsUse = '0'
select StmDate1 from Shops  

--update Shops set FeeRate = '15' where ShopCode = '20000004'




exec usp_shops_list_r

exec usp_common_openkey
/*
declare @a varbinary(200)
select @a = dbo.uf_EncData('1114050006013561')
select @a
select dbo.uf_DecData(@a)
*/





