// 현재날짜
var cur_date = fn_CurrentDate2("-");
var cur_height = 0;
var ori_textAlign = "left";
var obj_lastFocus;

jQuery(function () {

	//텍스트박스 포커스시 내용 모두 선택
	$(document).on("click", "input[type=text]", function () {
		
		if ($(this).attr("readonly")) {
			return false;
		}
		
		if (obj_lastFocus != this) {
			$(this).select();
			obj_lastFocus = this;
		}
	});

	//텍스트 박스 포커스시 좌정렬
	$(document).on("focusin", "input[type=text]", function () {

		if ($(this).attr("readonly")) {
			return false;
		}

		ori_textAlign = $(this).css("text-align");
		$(this).css("text-align", "left");
		$(this).val($(this).val());
	});

	//텍스트 박스 포커스떠날시 본래정렬
	$(document).on("focusout", "input[type=text]", function () {

		if ($(this).attr("readonly")) {
			return false;
		}

		$(this).css("text-align", ori_textAlign);
		$(this).val($(this).val());
		ori_textAlign = "left";
		obj_lastFocus = null;
	});

	$("input[class=date]").focusout(function () {
		var val = getDateFormat($(this).val(), "-");
		$(this).val(val);
	});

	$("#searchSdate:text, #searchEdate:text, #SaleDate:text").datepicker();
	$("#s_sdate:text, #s_edate:text").datepicker();


	// 기본 검색일자 setting
	if ($("#searchSdate").val() == '') {
		$("#searchSdate").val(addDate("m", -1, cur_date, "-"));
	}
	if ($("#searchEdate").val() == '') {
		$("#searchEdate").val(cur_date);
	}

	if ($("#s_sdate").val() == '') {
	    $("#s_sdate").val(addDate("d", -7, cur_date, "-"));
	}
	if ($("#s_edate").val() == '') {
	    $("#s_edate").val(cur_date);
	}




	// search button
	$("#btnSearch").click(function () {

		// 검색시 검색조건을 받아야 한다면 아래 function을 추가하여 체크한다.
		try {
			if (!fn_ValidateSearch()) return false;
		} catch (e) {}

		$("#formSearch").submit();
	});

	//frm Submit
	$("#btnfrmSubmit").click(function () {
		$("#frm").submit();
	});


	// search reset button
	$("#btnReset").click(function () {
		document.location.href = document.location.pathname;
		return false;
	});

	// 리스트 하이라이트
	try {
		$("#tblList1 tbody tr").hover(function () {
			$(this).toggleClass("highlight");
		});
	} catch (e) {
		
	}
	

	// 모든폼에 엔터입력시 자동 submit 막기 (ie10 에서는 강제 submit시 작동안함)
	//$("form").attr("onsubmit", "return false;");

	// 컨텐츠 동적 높이 조절
	//$(window).resize(function () {
		//fn_GetObjectHeight($(".contentarea"));
	//}).trigger("resize");

	// readonly 속성 포커스 안되도록 설정
	$("input[readonly]").bind("focus keypress click mousedown", function (e) {
		//e.preventDefault();
		$(this).blur();
		return false;
	}).css("cursor", "default");


	/**********************************************************************************
	*	Date : 2013.02.13 by zeus
	*	Desc : 팝업기본 설정
	**********************************************************************************/
	var popHtml = "";
	popHtml += '<div id="divPopup" style="display: none;">';
	popHtml += '	<iframe id="ifrmPopup" name="ifrmPopup" style="width: 0px; height: 0px;" class="" frameborder="0" marginheight="0" marginwidth="0"></iframe>';
	popHtml += '</div>';
	$("body").append(popHtml)
	
	$("#divPopup").dialog({
		modal: true,
		autoOpen: false,
		show: "fade",
		resizable: false
	});
});



