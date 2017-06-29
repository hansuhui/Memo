
/************************************************************************
함수명		: fn_TableToExcel(objTable)
작성목적	: Excel Export시 Table의 정보를 문자열 형태로 리턴한다.
Parameter	: objTable  -> Table object
Return		: 문자열
작 성 자	: Lyul
최초작성일	: 
최종작성일	:
수정내역	:
*************************************************************************/
function fn_GetExcelParameterInfo(objContext, arrNotExists, sTitle, Count) {
	var objGrid = objContext;
	// 그리드의 Render정보를 문자열로 변환한다.
	var GridData = objGrid.outerHTML;

	var excelUrl = "/Common/ExportExcel";
	var eventGubun = "Excel2";
	var HeaderCount = objGrid.rows(0).cells.length;
	var Title = sTitle;
	//var Title = fn_GetCtlValue(document.getElementById(fn_GetFullID(sTitle)));        
	var Search = "";

	if (Count != "" && Count != null) {
		if (parseInt(Count) > 0) {
			HeaderCount = Count;
		}
	}

	//Search = "&lt;Controls&gt;" + fn_GetExcelArguments(arguments) + "&lt;/Controls&gt;";     

	// 엑셀로 Export하기 위한 IFRAME 객체를 생성하기 위해서
	//var aaa = document.getElementById('ifrExcel');
	if (document.getElementById('ifrExcel') == null) {
		var iFrmExcel = "<iframe id='ifrExcel' style='width:1024px; height:768px;display:none;'></iframe>";
		$("body").append(iFrmExcel);


		document.getElementById('ifrExcel').contentWindow.document.write("<script> function fn_ExcelSubmit(){ document.all('excelForm').submit(); } <\/script>");

		document.getElementById('ifrExcel').contentWindow.document.write("<form action='" + excelUrl + "' id='excelForm' method='post'>");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' id='fnName' name='fnName' value='" + eventGubun + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' id='Excel' name='Excel' value='" + escape(GridData) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' id='Search' name='Search' value='" + escape(Search) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' id='HeaderCount' name='HeaderCount' value='" + escape(HeaderCount) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' id='Title' name='Title' value='" + escape(Title) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='button' id='btnExcel' name='btnExcel' onclick='fn_ExcelSubmit();' />");
		document.getElementById('ifrExcel').contentWindow.document.write("</form>");

		document.getElementById('ifrExcel').contentWindow.document.getElementById('btnExcel').click();
	}
	else {
		var aa = document.getElementById('ifrExcel').contentWindow.document;
		document.getElementById('ifrExcel').contentWindow.document.forms.excelForm.action = excelUrl;
		document.getElementById('ifrExcel').contentWindow.document.getElementById('fnName').value = eventGubun;
		document.getElementById('ifrExcel').contentWindow.document.getElementById('Excel').value = escape(GridData);
		document.getElementById('ifrExcel').contentWindow.document.getElementById('Search').value = escape(Search);
		document.getElementById('ifrExcel').contentWindow.document.getElementById('HeaderCount').value = escape(HeaderCount);
		document.getElementById('ifrExcel').contentWindow.document.getElementById('Title').value = escape(Title);

		try {
			document.getElementById('ifrExcel').contentWindow.document.getElementById('btnExcel').click();
		} catch (e) {

		}
	}

}
// report용
function fn_GetExcelParameterInfoReport(objContext, arrNotExists, sTitle) {
	var objGrid = objContext;
	// 그리드의 Render정보를 문자열로 변환한다.
	var GridData = objGrid.outerHTML;

	var excelUrl = "/Common/ExportExcelReport";
	var eventGubun = "Excel2";
	var HeaderCount = objGrid.rows(0).cells.length;
	var Title = sTitle;
	//var Title = fn_GetCtlValue(document.getElementById(fn_GetFullID(sTitle)));        
	var Search = "";

	//Search = "&lt;Controls&gt;" + fn_GetExcelArguments(arguments) + "&lt;/Controls&gt;";     

	// 엑셀로 Export하기 위한 IFRAME 객체를 생성하기 위해서
	//var aaa = document.getElementById('ifrExcel');
	if (document.getElementById('ifrExcel') == null) {

		var iFrmExcel = "<iframe id='ifrExcel' style='width:1024px; height:768px;display:;'></iframe>";
		$("body").append(iFrmExcel);

		document.getElementById('ifrExcel').contentWindow.document.write("<script> function fn_ExcelSubmit(){ document.all('excelForm').submit(); } <\/script>");

		document.getElementById('ifrExcel').contentWindow.document.write("<form action='" + excelUrl + "' id='excelForm' method='post' >");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' name='fnName' id='fnName' value='" + eventGubun + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' name='Excel' id='Excel'='' value='" + escape(GridData) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' name='Search' id='Search' value='" + escape(Search) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' name='HeaderCount' id='HeaderCount' value='" + escape(HeaderCount) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='hidden' name='Title' id='Title' value='" + escape(Title) + "' />");
		document.getElementById('ifrExcel').contentWindow.document.write("<input type='button' name='btnExcel' id='btnExcel' onclick='fn_ExcelSubmit();' />");
		document.getElementById('ifrExcel').contentWindow.document.write("</form>");

		document.getElementById('ifrExcel').contentWindow.document.getElementById('btnExcel').click();
	}
	else {
		document.getElementById('ifrExcel').contentWindow.document.forms.excelForm.action = excelUrl;
		document.getElementById('ifrExcel').contentWindow.document.getElementById('fnName').value = eventGubun;
		document.getElementById('ifrExcel').contentWindow.document.getElementById('Excel').value = escape(GridData);
		document.getElementById('ifrExcel').contentWindow.document.getElementById('Search').value = escape(Search);
		document.getElementById('ifrExcel').contentWindow.document.getElementById('HeaderCount').value = escape(HeaderCount);
		document.getElementById('ifrExcel').contentWindow.document.getElementById('Title').value = escape(Title);

		try {
			document.getElementById('ifrExcel').contentWindow.document.getElementById('btnExcel').click();
		} catch (e) {

		}
	}

}
/************************************************************************
함수명		: fn_GetExcelGirdData(objGrid, arrNotExists)
작성목적	: 배열로 지정된 컬럼을 제외한 그리드의 객체 정보를 가져온다. 
Parameter	: objGrid  -> GridView객체, arrNotExists -> 제외될 컬럼 배열
Return		: GridView객체
작 성 자	: 이명우과장
최초작성일	: 2008.04.10
최종작성일	:
수정내역	:
*************************************************************************/
function fn_GetExcelGirdData(objGrid, arrNotExists) {

	var objDiv = objGrid.parentElement;
	var objCloneGrid = objGrid.cloneNode(true);

	// 제외될 컬럼 정보에 그리드 상태 컬럼를 추가( 확인 필요 !!! null인 경우와 그렇지 않을 경우를 분리 하여 처리 프로세서를 잡아야 한다.)
	//arrNotExists = fn_SetAddStatusColumn(objCloneGrid, arrNotExists);

	objCloneGrid = fn_GetNotExists(objGrid, objCloneGrid, arrNotExists);

	return objCloneGrid;
}

/************************************************************************
함수명		: fn_GetNotExists(objGrid, objCloneGrid, arrNotExists)
작성목적	: 배열로 지정된 컬럼을 제외한 그리드의 객체 정보를 가져온다. 
Parameter	: objGrid  -> GridView객체, objCloneGrid -> Deep Copy한 GridView객체, arrNotExists -> 제외될 컬럼 배열
Return		: GridView객체
작 성 자	: 이명우과장
최초작성일	: 2008.04.10
최종작성일	:
수정내역	:
*************************************************************************/
function fn_GetNotExists(objGrid, objCloneGrid, arrNotExists) {
	var iArrCnt = arrNotExists.length;

	// GridUtil에 정의 되어 있음
	var arrCol = fn_GetHeaderArrayID(objCloneGrid);

	// GridUtil에 정의 되어 있음 (헤더의 컬럼정보를 배열로 받는다.)
	var arrHeaderCol = fn_GetHeaderArray(objGrid);

	// 그리드의 총 Row개수            
	var iTotRow = objCloneGrid.rows.length;

	//var iCloneCells = objCloneGrid.rows(0).cells.length;

	for (iCloneCell = 0; iCloneCell < arrHeaderCol.length; iCloneCell++) {
		var stColName = arrHeaderCol[iCloneCell];
		var objCtl = fn_GetCell(objGrid, 1, stColName);

		if (objCtl == null) {
			objCtl = {};
			objCtl.tagName = {};
		}


		if (objCtl.tagName == "SELECT" || objCtl.tagName == "INPUT") {
			for (iRow = 1; iRow < iTotRow; iRow++) {
				var objCell = objCloneGrid.rows(iRow).cells(iCloneCell);

				var objSubCtl = fn_GetCell(objGrid, iRow, stColName);

				if (objCtl.tagName == "SELECT")
					stValue = fn_GetCtlValue(objSubCtl, true);
				else
					//이웅철 추가 (09-07-02) : 엑셀로 넘길때 비밀번호 노출안되도록 처리
					if (objCtl.tagName == "INPUT" && objSubCtl.type == "password") {
						stValue = fn_GetCtlValue(objSubCtl);
						if (stValue != "") {
							stValue = stValue.replace(stValue, '**********');
						}
					}
					else {
						stValue = fn_GetCtlValue(objSubCtl);
					}
				objCell.innerHTML = "";
				objCell.innerHTML = stValue;
			}
		}
	}


	// ColIndex배열
	var arrColIndex = new Array(iArrCnt);

	for (i = 0; i < iArrCnt; i++) {
		var sColumn = arrNotExists[i];

		// 컬럼 Index
		var iColIndex = arrCol[sColumn];
		arrColIndex[i] = iColIndex;
	}

	// sort는 기본이 오름차순 설정되어 있음 
	arrColIndex = arrColIndex.sort(fn_SetDesc);

	for (iCol = 0; iCol < iArrCnt; iCol++) {
		var colIndex = arrColIndex[iCol];

		for (iRow = 0; iRow < iTotRow; iRow++) {
			var objCell = objCloneGrid.rows(iRow).cells(colIndex);

			objCloneGrid.rows(iRow).removeChild(objCell);
		}

	}



	return objCloneGrid;

}


/************************************************************************
함수명		: fn_setTableTotal(args)
작성목적	: 테이블의 합계항목을 계산하여 채워준다
Parameter	: tableID  -> 테이블 아이디, 그다음부턴 sub할 클래스 명이다.
작 성 자	: 양재우
최초작성일	: 2013.05.22
*************************************************************************/
function fn_setTableTotal() {
	var args = arguments;
	if (args.length < 1)
		return;

	// 세팅할 테이블 아이디
	var tableID = args[0];

	// 파라미터명의 객체 생성
	var tdClassName = new Object;
	for (var i = 1; i < args.length; i++) {
		tdClassName[args[i]] = 0;
	}


	// 숫자 sum
	$("#" + tableID + " tbody td").each(function () {

		for (var j = 1; j < args.length; j++) {

			// 자식요소중 input 요소를 가지고있는지 확인
			if ($(this).children("input[type=text]").length > 0) {

				if ($(this).children("input[type=text]").hasClass("" + args[j] + "")) {
					tdClassName[args[j]] += parseInt10(removeFormat($(this).children("input:eq(0)").val(), ","));
				}
			} else {

				if ($(this).hasClass("" + args[j] + "")) {
					tdClassName[args[j]] += parseInt10(removeFormat($(this).text(), ","));
				}
			}
		}
	});

	// 합계 setting
	for (var j = 1; j < args.length; j++) {
		var val = formatMoney(tdClassName[args[j]]);
		$("#" + tableID + " tfoot ." + args[j] + "").text(val);
	}
}



/************************************************************************
함수명		: GetGiftNo14(args)
작성목적	: 14자리의 상품권번호를 반환한다.
Parameter	: giftno - 상품권번호
작 성 자	: 양재우
최초작성일	: 2013.06.12
*************************************************************************/
function GetGiftNo14(giftno) {
	var temp = "";

	if (giftno.length == 16)
		temp = giftno.substr(0, 6) + giftno.substr(7, 8);
	else
		temp = giftno;


	return temp;
}


// 상품권번호 길이 확인
function ChkGiftnoLegth(obj) {
	var val = obj.val();

	if (val == "" || val == "0") {
		alert("번호를 입력하세요");
		obj.focus();
		return false;
	}

	if (val.length < 14) {
		alert("정확한 상품권번호를 입력하세요");
		obj.focus();
		return false;
	}

	return true;
}


// 시작번호 끝번호 수량확인
function ChkRequestQty(reqQty, startObj, endObj) {
	var startNo = $.trim(startObj.val());
	var endNo = $.trim(endObj.val());

	if (startNo.length < 14) {
		alert("정확한 상품권번호를 입력하세요");
		startObj.focus();
		return false;
	}

	if (endNo.length < 14) {
		alert("정확한 상품권번호를 입력하세요");
		endObj.focus();
		return false;
	}

	startNo = parseInt10(GetGiftNo14(startNo));
	endNo = parseInt10(GetGiftNo14(endNo));

	var isCompare = false;
	var tempQty = (endNo - startNo) + 1;

	if (startNo == endNo)
		tempQty = 1;

	if (reqQty == tempQty)
		isCompare = true;

	if (!isCompare) {

		alert("입력수량과(" + reqQty + ") 연번호의 수량이(" + tempQty + ")  일치하지 않습니다.");
		endObj.focus();
		return false;
	}

	return true;
}

function fn_Excel() {
	$("#Excel").val("Excel");
	$("#formSearch").submit();
	$("#Excel").val("");
	return false;
}
function PrintSet() {
	_title = "인쇄";
	_width = 1050;
	_height = 700;
	$("#ifrmPopup").attr({ src: "PringPage", style: "width:" + _width + "px; height: " + _height + "px;" });
	$("#divPopup").dialog({ title: _title, width: _width + 30 });
	$("#divPopup").dialog("open");
}


function TableDataCheck()
{
	var text = $("#tblList1 tbody tr td");

	for (i = 0; i < text.length; i++) {
		if (text[i].outerHTML.trim() == "<td></td>") {
			text[i].innerText = "-";
		}
		if (text[i].outerHTML.trim() == '<td class="ac"></td>') {
			text[i].innerText = "-";
		}
		if (text[i].outerHTML.trim() == '<td class="al"></td>') {
			text[i].innerText = "-";
		}
		if (text[i].outerHTML.trim() == '<td class="ar"></td>') {
			text[i].innerText = "-";
		}
		if (text[i].outerHTML.trim() == '<td class="bn"></td>') {
			text[i].innerText = "-";
		}
	}
}

function PagesizeSetting() {
	$("#pageSize").val($("#PagesizeSet").val());
}
