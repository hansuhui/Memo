<!-- #include virtual="/Include/CharSet.asp" -->
<%



Function ExcelRead(strExcelPath)

	Dim xlDb
	Dim oRs
	Dim strExtenstion, connectString , arrTmp , strSQL


	Set xlDb = Server.CreateObject("ADODB.Connection")  
	Set oRs = Server.CreateObject("ADODB.RecordSet")  
	
	
	strExtenstion  =Mid(strExcelPath, InStrRev(strExcelPath, ".") + 1)

	If strExtenstion = "xlsx" then
		connectString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source="&strExcelPath&"; Extended Properties=""Excel 12.0;HDR=YES;IMEX=1;""" 
	Else
		connectString = "Provider=Microsoft.JET.OLEDB.4.0;Data Source="&strExcelPath&"; Extended Properties=""Excel 8.0;HDR=YES;IMEX=1;""" 
	End if

	xlDb.Open connectString
	 
	strSQL = "SELECT * FROM [Sheet1$]"
	oRs.Open strSQL,xlDb ,1

	If Not(oRs.Eof Or oRs.Bof) then
		arrTmp = oRs.GetRows()
	End if
	oRs.Close
	xlDb.Close
	ExcelRead = arrTmp
End Function

%>