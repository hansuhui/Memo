/**************************************************************************
*	Date : 2014-07-02  By H
*	Desc : 체크박스 전체선택
*	parameter 
*		- Name 
*		- state
**************************************************************************/
function checkAll(Name, state) {

	$('input[name=' + Name + ']').prop('checked', state);

}


/**************************************************************************
*	Date : 2014-07-02  By H
*	Desc : 삭제
**************************************************************************/

$("#DeleteSubmit").click(function () {
	var ans = confirm("삭제 하시겠습니까?");
	if (ans == true) {
		$("#Delete").val("Delete");
		$("#frm").submit();
	}
});

/**************************************************************************
*	Date : 2014-07-02  By H
*	Desc : 검색조건 엔터처리
**************************************************************************/


$("#formSearch input").keypress(function () {
	if (event.keyCode == 13) {
		$("#formSearch").submit();
	}
});

/**************************************************************************
*	Date : 2014-07-02  By H
*	Desc : 값설정하기
*	parameter 
*		- Name 
*		- state
**************************************************************************/

function valSetting(Name, val) {
	$('#' + Name + '').val(val);
}

function AllStateChange() {
	$("#AllState").val("AllState");
	$("#frm").submit();

}

function StateChange() {
	$("#State").val("State");
}
function State2Change() {
	$("#State2").val("State2");
}

function SearchAllStateChange() {
	$("#AllState").val("AllState");
	$("#formSearch").submit();

}


function DeleteSubmit() {
	var ans = confirm("삭제 하시겠습니까?");
	if (ans == true) {
		$("#Delete").val("Delete");
		$("#frm").submit();
	}
}

function btnfrmSubmit() {
	$("#frm").submit();
}

function formSearchSubmit() {
	$("#formSearch").submit();
}



/**************************************************************************
*	Date : 2014-07-02  By H
*	Desc : 유효성 검사
*	parameter 
*		- Name 
*		- state
**************************************************************************/


function fn_Save() {
	var $f = $("#frm");
	var isSearch = true;

	// 유효성 검사 목록 확인
	$f.find(":input").each(function () {
		$el = $(this);
		if ($el.attr("validate") == "true") {

			if ($el.val() == "") {
				alert($el.parent().prev().text() + "을(를) 입력하세요.");
				$el.focus();

				isSearch = false;
				return false;
			}

		}

		if ($el.attr("svalidate") == "true") {

			if ($el.val() == "") {
				alert($el.parent().prev().text() + "을(를) 선택하세요.");
				$el.focus();

				isSearch = false;
				return false;
			}

		}



	});
	if (isSearch) {

		$f.submit();

	}

	return isSearch;
}


/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 팝업 닫기
*	parameter 
*		- Name 
*		- state
**************************************************************************/


function PopupClose() {
	this.parent.$("#divPopup").dialog("close");
	this.parent.location.reload();
}


/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 코드등록 팝업
*	parameter 
*		- Name 
*		- state
**************************************************************************/


function fn_SCodeCreate() {

	_title = "코드등록";
	_width = 500;
	_height = 350;

	$("#ifrmPopup").attr({ src: "/Config/SCodeCreate", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}


/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 분류추가 팝업
*	parameter 
*		- Name 
*		- state
**************************************************************************/

function fn_GroupCreate() {

	_title = "분류추가";
	_width = 500;
	_height = 200;

	$("#ifrmPopup").attr({ src: "/Config/GroupCreate", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}



/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 코드등록 팝업
*	parameter 
*		- Name 
*		- state
**************************************************************************/


function fn_CodeDetail(COSEQ,COCODE) {

	_title = "코드상세";
	_width = 500;
	_height = 350;

	$("#ifrmPopup").attr({ src: "/Config/CodeDetail?COSEQ=" + COSEQ + "&COCODE=" + COCODE + "", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}


/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 분류추가 팝업
*	parameter 
*		- Name 
*		- state
**************************************************************************/

function fn_GroupDetail(COGROUP) {

	_title = "분류상세";
	_width = 500;
	_height = 200;

	$("#ifrmPopup").attr({ src: "/Config/GroupDetail?COGROUP=" + COGROUP + "", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}



/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 상품권코드상세보기 팝업
*	parameter 
*		- Name 
*		- state
**************************************************************************/


function fn_GiftCodeDetail(COSEQ, COCODE) {

	_title = "코드상세";
	_width = 500;
	_height = 350;

	$("#ifrmPopup").attr({ src: "/Gift/CodeDetail?COSEQ=" + COSEQ + "&COCODE=" + COCODE + "", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}


/**************************************************************************
*	Date : 2014-07-04  By H
*	Desc : 상품권코드코드등록 팝업
*	parameter 
*		- Name 
*		- state
**************************************************************************/


function fn_GiftSCodeCreate() {

	_title = "코드등록";
	_width = 500;
	_height = 350;

	$("#ifrmPopup").attr({ src: "/Gift/GiftCodeCreate", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}

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