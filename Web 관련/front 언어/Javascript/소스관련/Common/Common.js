// 전역변수
var _width = 580;
var _height = 480;
var _title = "";
var _onclickflag = 0; // 원클릭 링크용 변수

/*****************************************************
*	Date : 2003-08-29 금요일 (오전) 08:19:35 By Zeus
*	Desc : 공백문자와 빈문자열 checking
*	parameter : field, errMsg
******************************************************/
function chkEmpty(field, errMsg) {

	if (errMsg == "") {
		return false;
	} else {
		if (get(field).val() == "") {
			alertAndfocus(get(field).get(0), errMsg);
			return false;
		}
	}

	return true;
}


/*****************************************************
*	Date : 2003-08-29 금요일 (오전) 08:19:35 By Zeus
*	Desc : alert and focusing
*	parameter : field, errMsg
******************************************************/
function alertAndfocus(field, errMsg) {
	alert(errMsg);
	field.focus();
}


/*****************************************************
*	Date : 2013-05-15 By Zeus
*	Desc : HTML 요소를 jquery 객체로 반환하며 입력요소를 찾는 용도로 사용한다.
*	parameter : field - id 혹은 네임
******************************************************/
function get(field) {

	var $obj = $("#" + field + "");

	// 모든 요소 (input, textarea, select, button)에서 반환
	if ($obj.length < 1)
		$obj = $(":input[name=" + field + "]")

	if ($obj.length < 1) {
		alert("[" + field + "] 검색된 요소가 없습니다.");
		return false;
	}

	return $obj;
}

/************************************************************************
함수명		: fn_CheckClickFlag(args.....)
Parameter 	: 서브밋 넘겨줄 인자값들
작성목적	: mousedown 후 mousemove 없이 mouseup 이면 submit
작 성 자	: 박현열
최초작성일	: 2013-02-13
최종작성일	:
예제        : fn_CheckClickFlag(ShopCode) 
*************************************************************************/
function fn_CheckClickFlag(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
	if (event.type == 'mousedown') {
		_onclickflag = 1;
		return false;
	}
	else if (_onclickflag == 1 && event.type == 'mousemove') {
		_onclickflag = 0;
		return false;
	}
	else if (_onclickflag == 1 && event.button == 1 && event.type == 'mouseup') {
		fn_ViewDetail(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
	}
}

/************************************************************************
함수명		: fn_JongToAmt(jong)
Parameter 	: 상품권종의 금액
작성목적	: 권종을 받아 금액을 리턴한다
작 성 자	: 박현열
최초작성일	: 2013-02-06
최종작성일	:
예제        : fn_Replace('11') 
*************************************************************************/
function fn_JongToAmt(jong) {
	var JongAmt = 0;
	switch (jong.toString()) {
		case "11":
			JongAmt = 10000;
			break;
		case "15":
			JongAmt = 50000;
			break;
		case "21":
			JongAmt = 100000;
			break;
		case "23":
			JongAmt = 300000;
			break;
		case "25":
			JongAmt = 500000;
			break;
	}
	return JongAmt;
}
/************************************************************************
함수명		: fn_JongQtyToAmt( jong, qty )
Parameter 	: 권종과 곱할 수량
작성목적	: 권종과 그 수량을 받아 금액을 리턴한다
작 성 자	: 박현열
최초작성일	: 2013-02-06
최종작성일	:
예제        : fn_Replace('11', 5) 
*************************************************************************/
function fn_JongQtyToAmt(jong, qty) {
	var JongAmt = 0;
	var qty = parseInt(qty);
	switch (jong.toString()) {
		case "11":
			JongAmt = 10000;
			break;
		case "15":
			JongAmt = 50000;
			break;
		case "21":
			JongAmt = 100000;
			break;
		case "23":
			JongAmt = 300000;
			break;
		case "25":
			JongAmt = 500000;
			break;
	}
	var ReqAmt = qty * JongAmt;
	return ReqAmt;
}
/************************************************************************
함수명		: fn_JongQtyToObj( jong, qty, obj )
Parameter 	: 권종과 곱할 수량과 반영할 객체
작성목적	: 권종과 그 수량을 받아 적용될 object에 금액을 반영한다
작 성 자	: 박현열
최초작성일	: 2013-02-06
최종작성일	:
예제        : fn_Replace('11', 5, txtAmt) 
*************************************************************************/
function fn_JongQtyToObj(jong, qty, obj) {
	var JongAmt = 0;
	switch (jong.toString()) {
		case "11":
			JongAmt = 10000;
			break;
		case "15":
			JongAmt = 50000;
			break;
		case "21":
			JongAmt = 100000;
			break;
		case "23":
			JongAmt = 300000;
			break;
		case "25":
			JongAmt = 500000;
			break;
	}

	var ReqAmt = qty * JongAmt;

	if (obj.get(0).tagName != "INPUT")
		obj.text(fn_Number_Format(ReqAmt.toString()));
	else
		obj.val(fn_Number_Format(ReqAmt.toString()));
}

/************************************************************************
함수명		: fn_Replace(원본, 찾을문자, 바뀔문자)  
Parameter 	: 
작성목적	: 원본내의 모든 찾을문자를 바뀔문자로 대체한다.
작 성 자	: 박현열
최초작성일	: 2013-01-29
최종작성일	:
예제        : fn_Replace(원본, 찾을문자, 바뀔문자) 
*************************************************************************/
function fn_Replace(str, source, copy) {
	if (str != "") {
		while (str.indexOf(source) != -1) {
			str = str.substring(0, str.indexOf(source)) + copy + str.substring(str.indexOf(source) + source.length);
		}
	}
	return str;
}

/************************************************************************
함수명		: fn_Number_Format(val)  
Parameter 	: 
작성목적	: 숫자형태를 ##,###,### 으로 보여준다
작 성 자	: 박현열
최초작성일	: 2012-01-14
최종작성일	:
예제        : fn_Number_Format("1000");
*************************************************************************/
function fn_Number_Format(input)   //
{
	input = String(input);
	input = input.replace(/,/g, "");

	var input = String(input);
	var reg = /(\-?\d+)(\d{3})($|\.\d+)/;
	if (reg.test(input))    //
	{
		return input.replace(reg, function (str, p1, p2, p3) {
			return fn_Number_Format(p1) + "," + p2 + "" + p3;
		}
);
	} else {
		return input;
	}
}
function fn_Format_Number(input)   //
{
	input = fn_Replace(input, ",", "");
	return parseInt(input);
}

function fn_Number_Format2(obj)   //
{
	var inputValue = obj.value;
	inputValue = inputValue.replace(/,/g, "");

	var inputValue = String(inputValue);
	var reg = /(\-?\d+)(\d{3})($|\.\d+)/;
	if (reg.test(inputValue))    //
	{
		return inputValue.replace(reg, function (str, p1, p2, p3) {
			return fn_Number_Format(p1) + "," + p2 + "" + p3;
		}
);
	} else {
		$(obj).val(inputValue);
	}
}


/************************************************************************
함수명		: fn_PopupPosition()  
Parameter 	: 
작성목적	: 디테일 Div 숨김처리
작 성 자	: 박현열
최초작성일	: 2012-01-07
최종작성일	:
예제        : fn_divDetailClose();
*************************************************************************/
function fn_PopupPosition(target, id) {
	var tInput = $("#" + target).offset();
	var tHeight = $("#" + target).outerHeight();
	var tWidth = $("#" + target).outerWidth();

	if (tInput != null) {
		$("#" + id).css({ "top": tInput.top + tHeight, "left": tInput.left });
	}
}
/************************************************************************
함수명		: fn_divDetailClose()  
Parameter 	: 
작성목적	: 디테일 Div 숨김처리
작 성 자	: 박현열
최초작성일	: 2012-01-07
최종작성일	:
예제        : fn_divDetailClose();
*************************************************************************/
function fn_divDetailClose() {
	document.getElementById('divDetail').style.display = 'none';
}

/************************************************************************
함수명		: fn_onBusiType1(val)  
Parameter 	: 
작성목적	: 업종1 > 업종2 > 업종3 형식의 select 에서 클릭시 하위 업종을 갱신한다.
작 성 자	: 박현열
최초작성일	: 2012-01-02
최종작성일	:
예제        : fn_onBusiType1(val);
*************************************************************************/
function fn_onBusiType1(val) {
	var attrCnt = 0;
	$('#BtypeCode2').css('display', 'none');
	$('#BtypeCode3').css('display', 'none');
	if (document.getElementById('BtypeCode1').value != '') {

		//리스트 초기화
		$('#BtypeCode2').html('');

		//업종분류(중) Select Option 추가
		$("<option value=''>-선택-</option>").appendTo("#BtypeCode2");
		for (var i = 0; i < BusiType.length; i++) {
			if (BusiType[i][0].charAt(0) == val.charAt(0)) {
				if (BusiType[i][0].charAt(1) != '0' && BusiType[i][0].charAt(2) == '0' && BusiType[i][0].charAt(3) == '0') {
					$("<option value='" + BusiType[i][0] + "'>" + BusiType[i][1] + "</option>").appendTo("#BtypeCode2");
					attrCnt++;
				}
			}
		}
		if (attrCnt > 0) {
			//화면에 표시
			$('#BtypeCode2').css('display', '');
		}
	}
}
function fn_onBusiType2(val) {
	var attrCnt = 0;
	$('#BtypeCode3').css('display', 'none');
	if (document.getElementById('BtypeCode2').value != '') {

		//리스트 초기화
		$('#BtypeCode3').html('');

		//업종분류(소) Select Option 추가
		$("<option value=''>-선택-</option>").appendTo("#BtypeCode3");
		for (var i = 0; i < BusiType.length; i++) {
			if (BusiType[i][0].charAt(0) == val.charAt(0) && BusiType[i][0].charAt(1) == val.charAt(1)) {
				if (BusiType[i][0].charAt(2) != '0' || BusiType[i][0].charAt(3) != '0') {
					$("<option value='" + BusiType[i][0] + "'>" + BusiType[i][1] + "</option>").appendTo("#BtypeCode3");
					attrCnt++;
				}
			}
		}
		if (attrCnt > 0) {
			//화면에 표시
			$('#BtypeCode3').css('display', '');
		}
	}
}

/************************************************************************
함수명		: fn_CurrentDate2(mask)  
Parameter 	: 
	
작성목적	: 날짜를 yyyy-mm-dd 형식으로 포멧.
작 성 자	: richzeus
최초작성일	: 2009.08.06
최종작성일	:
예제        : fn_CurrentDate2(mask);
*************************************************************************/
function getDateFormat(strDate, str) {

	var returnVal = "";
	var len = strDate.length;

	if (len == 8) {
		returnVal = strDate.substr(0, 4) + str + strDate.substr(4, 2) + str + strDate.substr(6, 2);
	} else if (strDate.length == 10) {
		returnVal = strDate
	}

	return returnVal;
}


/************************************************************************
함수명		: fn_CurrentDate2(mask)  
Parameter 	: 
	
작성목적	: 현재일자를 yyyy-mm-dd 형식으로 포멧.
작 성 자	: 이웅철
최초작성일	: 2009.08.06
최종작성일	:
예제        : fn_CurrentDate2(mask);
*************************************************************************/
function fn_CurrentDate2(mask) {
	var now = "";

	var tDate = new Date();
	var cYear = tDate.getFullYear();
	var cMonth = "0" + (tDate.getMonth() + 1);
	var cDay = "0" + tDate.getDate();

	if (cMonth.length < 3)
		cMonth = cMonth.substring(0);
	else
		cMonth = cMonth.substring(1);

	if (cDay.length < 3)
		cDay = cDay.substring(0);
	else
		cDay = cDay.substring(1);

	now = cYear + mask + cMonth + mask + cDay

	return now;
}

/* ----------------------------------------------------------------------------
* 특정 날짜에 대해 지정한 값만큼 가감(+-)한 날짜를 반환
* 
* 입력 파라미터 -----
* pInterval : "yyyy" 는 연도 가감, "m" 은 월 가감, "d" 는 일 가감
* pAddVal  : 가감 하고자 하는 값 (정수형)
* pYyyymmdd : 가감의 기준이 되는 날짜
* pDelimiter : pYyyymmdd 값에 사용된 구분자를 설정 (없으면 "" 입력)
* 
* 반환값 ----
* yyyymmdd 또는 함수 입력시 지정된 구분자를 가지는 yyyy?mm?dd 값
*
* 사용예 ---
* 2008-01-01 에 3 일 더하기 ==> addDate("d", 3, "2008-08-01", "-");
* 20080301 에 8 개월 더하기 ==> addDate("m", 8, "20080301", "");
--------------------------------------------------------------------------- */
function addDate(pInterval, pAddVal, pYyyymmdd, pDelimiter) {
	var yyyy;
	var mm;
	var dd;
	var cDate;
	var oDate;
	var cYear, cMonth, cDay;

	if (pDelimiter != "") {
		pYyyymmdd = pYyyymmdd.replace(eval("/\\" + pDelimiter + "/g"), "");
	}


	yyyy = pYyyymmdd.substr(0, 4);
	mm = pYyyymmdd.substr(4, 2);
	dd = pYyyymmdd.substr(6, 2);

	if (pInterval == "yyyy") {
		yyyy = (yyyy * 1) + (pAddVal * 1);
	} else if (pInterval == "m") {
		mm = (mm * 1) + (pAddVal * 1);
	} else if (pInterval == "d") {
		dd = (dd * 1) + (pAddVal * 1);
	}


	cDate = new Date(yyyy, mm - 1, dd) // 12월, 31일을 초과하는 입력값에 대해 자동으로 계산된 날짜가 만들어짐.
	cYear = cDate.getFullYear();
	cMonth = cDate.getMonth() + 1;
	cDay = cDate.getDate();

	cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
	cDay = cDay < 10 ? "0" + cDay : cDay;



	if (pDelimiter != "") {
		return cYear + pDelimiter + cMonth + pDelimiter + cDay;
	} else {
		return cYear + cMonth + cDay;
	}
}

/*****************************************************************************
* Date	:	2012.06.25  by jaewoo
* Desc	:	그리드 박스 동적 높이 조절
  @Param
	addOffset : 추가로 옵셋
	minHeight : 창의 최높이
  예제	: fn_GetGridHeight(400, 200);
*****************************************************************************/
function fn_GetObjectHeight(obj) {

	try {
		// 해당 오프젝트의 실제 높이
		if (cur_height < 1) {
			cur_height = obj.get(0).offsetHeight;
		}

		var minHeight = cur_height;

		var bodyHeight = document.body.offsetHeight;
		var height = bodyHeight - (obj.offset().top + 20);


		if (height < minHeight)
			height = minHeight;

		obj.attr("style", "height:" + height + "px;");
	} catch (e) {
	}
}


/*****************************************************
*	Date : 2003-08-29 금요일 (오전) 08:19:35 By Zeus
*	Desc : 공백(space) 문자 check
*	parameter : field
******************************************************/
function isSpace(field) {
	var fmt = /\s$/;

	if (fmt.exec(field)) {
		return true;
	} else {
		return false;
	}
}

/*****************************************************
*	Date : 2003-12-11 목요일 (오전) 11:44:51 By Zeus
*	Desc : 영문 숫자만 허용
*	parameter : field, errMsg
******************************************************/
function onlyEngANDnum(field, errMsg) {
	var fmt2 = /^[A-Za-z0-9]{4,15}$/;	// 영문, 숫자만 허용

	if (!fmt2.exec(field.value)) {
		alertAndfocus(field, errMsg);
		return true;
	}
}

/*****************************************************
*	Date : 2003-12-11 목요일 (오전) 11:44:51 By Zeus
*	Desc : 숫자만 허용
*	parameter : field, errMsg
******************************************************/
// 객체의 value 의 전체를 검색하여 숫자가 char 은 제거하고 숫자만 리턴한다.
function onlyNumber(obj) {
	var num = "0123456789"
	var check = 0
	var str = obj.value
	var len = obj.value.length
	var retnvalue = "";

	for (var i = 0; i < len; i++) {
		if (num.indexOf(str.substring(i, i + 1)) >= 0) {
			retnvalue += str.substring(i, i + 1)
		}
	}

	if (retnvalue.length == 0) {
		obj.value = "0";
		obj.select();
	}
	else {


		if (retnvalue.length != len) {
			//alert('숫자만 입력이 가능합니다')
			obj.value = retnvalue
		}
	}
}
// 숫자와 점(.)만
function onlyNumberDot(obj) {
	var num = "0123456789."
	var check = 0
	var str = obj.value
	var len = obj.value.length
	var retnvalue = "";

	for (var i = 0; i < len; i++) {
		if (num.indexOf(str.substring(i, i + 1)) >= 0) {
			retnvalue += str.substring(i, i + 1)
		}
	}
	if (retnvalue.length == 0) {
		obj.value = "0";
		obj.select();
	}
	else {
		if (retnvalue.length != len) {
			//alert('숫자만 입력이 가능합니다')
			obj.value = retnvalue
		}
	}
}

function onlyNumber3(field, errMsg) {
	if (/[^0-9,]/g.test(field.value))  //
	{
		var text1 = field.value.substring(0, field.value.length - 1);
		//alert("0-9의 정수만 허용합니다.");
		//alert(errMsg);
		field.focus();
		field.value = text1;
		return false;
	}
	return true;
}

function onlyNumber2(field, errMsg) {
	var fmt = /^[0-9]{0,99999}$/;

	if (!fmt.exec(field.value)) {
		alertAndfocus(field, errMsg);

		return true;
	}
}


/*****************************************************
*	Date : 2003-12-11 목요일 (오전) 11:39:11 By Zeus
*	Desc : 한글만 허용
*	parameter 
*		- s : 문자
******************************************************/
function isHangle(s) {	// 한글만 허용
	var len = s.length;

	for (var i = 0; i < len; i++) {
		if (s.charCodeAt(i) != 32 && (s.charCodeAt(i) < 44032 || s.charCodeAt(i) > 55203))
			return 0;
	}

	return 1;
}


/*************************************************************************
   형식화된 내용의 심볼들을 없애고 원래의 내용만을 보여준다.
   
   ex)
   var str = "31,000";
   var res = removeFormat(str, ",");
   
   result : res -> 31000
*************************************************************************/
function removeFormat(content, sep) {
	var real = "";
	var contents = content.split(sep);

	for (var i = 0; i < contents.length; i++) {
		real += contents[i];
	}

	return real;
}


/***************************************************************************
   Input type="Text"를 돈에 관련된 내용으로 사용
   돈에 '100,000'과 같이 ','을 추가 시켜준다.
  
   Event Handlers : onBlur  
   관련 함수 : removeFormattedMoney(), isNumber(), util.js::reverse()
   사용 방법 : onBlur="formattedMoney(this)"
***************************************************************************/
function parseInt10(data) {
	return parseInt(data, 10);
}

function formatMoney(v) {

	var format = "";
	var a = removeFormat(v.toString(), ',');
	a = parseInt10(a);

	var money = a.toString();

	money = reverse(money);

	for (var i = money.length - 1; i > -1; i--) {
		if ((i + 1) % 3 == 0 && money.length - 1 != i) format += ",";
		format += money.charAt(i);
	}
	return format;
}

/**************************************************************************
   String을 꺼꾸로 만들어 준다.
**************************************************************************/
function reverse(s) {
	var rev = "";

	for (var i = s.length - 1; i >= 0 ; i--) {
		rev += s.charAt(i);
	}

	return rev;
}


/**************************************************************************
*	Date : 2007-07-13 금요일 (오전) 11:39:11 By Zeus
*	Desc : 지정해준 길이만큼 다음 포커스로 이동
*	parameter 
*		- pStart : 현재 필드
*		- pLen : 길이
*		- pNext : 다음필드명
*
*		ex) onKeyUp="NextFocus(this, 6, "jumin2");";
**************************************************************************/
function NextFocus(pStart, pLen, pNext) {

	// 뒤로가기 탭을 눌렀을 경우는 무시(shift + tab 키)
	if (event.keyCode == 9 || event.keyCode == 16)
		return;

	if (pStart.value.length == parseInt(pLen))
		GetObj(pNext).focus();

}



/************************************************************************
함수명		: fn_OnlyNumber()
작성목적	: text box에 입력값이 숫자만 가능하다.
ex) document.all.txtPrice.onkeypress = fn_OnlyNumber
Parameter	:
Return      :
작 성 자	: 이광민( (주) 일공일시스템 )
최초작성일	: 2007.08.20
최종작성일	:Modify By Yang.ChunJiang 2011-05-26
수정내역	:
*************************************************************************/
function fn_OnlyNumber() {
	if (event.shiftKey == true && event.keyCode >= 48 && event.keyCode <= 57) {
		event.returnValue = false;
		return false;
	}
	else if (event.ctrlKey == true && event.keyCode == 86) {//Ctrl + V
		var content = clipboardData.getData("Text");
		if (fn_IsNumberOnly(content) == false) {
			event.returnValue = false;
			return false;
		}
	}
	else if (event.ctrlKey == true && (event.keyCode == 88 || event.keyCode == 67))//Ctrl + X,Ctrl + C
	{
		return true;
	}
	else if ((event.keyCode < 48 || event.keyCode > 57)) {
		if (event.keyCode == 8 || event.keyCode == 46) return true; //Backspace OR Delete Add By Yang.ChunJiang 2011-05-25
		if (event.keyCode == 37 || event.keyCode == 39) return true; //LEFT OR Right Key Add By Yang.ChunJiang 2011-05-25
		if (event.keyCode == 9) return true; //Tab Key Add By Park.hyunlyul 2012-10-31

		event.returnValue = false;
		return false;
	}
	return true;
}

/************************************************************************
함수명		: fn_OnlyNumberAndMinus()
작성목적	: text box에 입력값이 숫자만 가능하다.
ex) document.all.txtPrice.onkeypress = fn_OnlyNumber
Parameter	:
Return      :
작 성 자	: 이광민( (주) 일공일시스템 )
최초작성일	: 2007.08.20
최종작성일	:
수정내역	:
*************************************************************************/
function fn_OnlyNumberAndMinus() {
	if ((event.keyCode < 48 || event.keyCode > 57)) {
		//if(event.keyCode == '109' || event.keyCode == '189')

		if (event.keyCode == '45' || event.keyCode == '189') {//'-' Modify By Yang.ChunJiang 2011-05-25
			return true;
		}
		else if (event.ctrlKey == true && (event.keyCode == 88 || event.keyCode == 67))//Ctrl + X,Ctrl + C
		{
			return true;
		}
		else if (event.keyCode == '8' || event.keyCode == '46') {//Backspace OR Delete Add By Yang.ChunJiang 2011-05-25
			return true;
		}
		else if (event.keyCode == '37' || event.keyCode == '39') {//LEFT OR Right Key Add By Yang.ChunJiang 2011-05-25
			return true;
		}
		else {
			event.returnValue = false;
			return false;
		}
	}
	return true;
}



/************************************************************************
함수명		: isCurrency()
작성목적	: 1234567890,. 만 입력가능
ex) document.getElementById("txtAmt").onkeypress = isCurrency; 
document.getElementById("txtAmt").style.cssText = "ime-mode:disabled";    
Parameter	:
Return      :
작 성 자	: 박진명
최초작성일	: 2008.01.23
최종작성일	:
수정내역	:
*************************************************************************/
function isCurrency() {
	if ((event.keyCode < 48 || event.keyCode > 57)) {
		if (event.keyCode == 44 || event.keyCode == 46) {
			event.returnValue = true;
			return true;
		}
		else {
			event.returnValue = false;
			return false;
		}
	}
	return true;
}


/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 주소검색 팝업창
*************************************************************************/
function fn_PopupZipcodeFinder(val) {
	_title = "주소검색";
	_width = 580;
	_height = 480;

	$("#ifrmPopup").attr({ src: "/Common/PopupZipcodeFinder", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");

}


/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 주소검색 팝업창
*************************************************************************/
function fn_PopupCenterZipcodeFinder() {
	_title = "주소검색";
	_width = 580;
	_height = 480;

	$("#ifrmPopup").attr({ src: "/Admin/Shop/PopupZipcodeFinder", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");

}

/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 프론트 주소검색 팝업창
*************************************************************************/
function fn_frontPopupZipcodeFinder() {
	_title = "주소검색";
	_width = 580;
	_height = 480;

	$("#ifrmPopup").attr({ src: "/Member/PopupZipcodeFinder", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}

/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 고객검색 팝업창
*************************************************************************/
function fn_PopupCustFinder(userID) {
	_title = "고객검색";
	_width = 580;
	_height = 480;

	$("#ifrmPopup").attr({ src: "/Admin/Common/PopupCustFinder?UserID=" + userID, style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}


/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 모집인 팝업창
*************************************************************************/
function fn_PopupAgentFinder() {
	_title = "모집인 검색";
	_width = 580;
	_height = 480;

	$("#ifrmPopup").attr({ src: "/Admin/Common/PopupAgentFinder", style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}

/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 가맹점 팝업창
*************************************************************************/
function fn_PopupShopFinder(ShopGubun, retnObjName, retnObjCode) {
	if (ShopGubun == null || ShopGubun.length == 0) {
		ShopGubun = "01";
	}

	if (retnObjName == null || retnObjName.length == 0) {
		retnObjName = "ReqShopName";
	}
	if (retnObjCode == null || retnObjCode.length == 0) {
		retnObjCode = "ReqShopCode";
	}
	$("#" + retnObjName).blur();

	switch (ShopGubun) {
		case "09":
			_title = "가맹점 검색";
			break;
		case "08":
			_title = "판매점 검색";
			break;
		case "10":
			_title = "회수처 검색";
			break;
		default:
			_title = "가맹점 검색";
			ShopGubun = "09";
			break;
	}
	//_title = "가맹점 검색";
	_width = 580;
	_height = 480;

	$("#ifrmPopup").attr({ src: "/Admin/Common/PopupReqShopFinder?ShopGubun=" + ShopGubun + "&retnObjName=" + retnObjName + "&retnObjCode=" + retnObjCode, style: "width:" + _width + "px; height: " + _height + "px;" });

	$("#divPopup").dialog({ title: _title, width: _width + 15 });
	$("#divPopup").dialog("open");
}


/************************************************************************
	Date : 2013-02-07 by zeus
	Desc : 가맹점 팝업창
*************************************************************************/
function fn_PopupShopFinder_pop(ShopGubun, retnObjName, retnObjCode, isPop) {
	var _title = "";

	//if (ShopGubun == null || ShopGubun.length == 0) {
	//	ShopGubun = "1";
	//}

	if (retnObjName == null || retnObjName.length == 0) {
		retnObjName = "ReqShopName";
	}
	if (retnObjCode == null || retnObjCode.length == 0) {
		retnObjCode = "ReqShopCode";
	}
	$("#" + retnObjName).blur();

	switch (ShopGubun) {
		case "1":
			_title = "가맹점 검색";
			break;
		case "2":
			_title = "판매점 검색";
			break;
		case "3":
			_title = "회수처 검색";
			break;
		default:
			_title = "거래처 검색";
			break;
	}

	if (isPop == "") isPop = false;

	var width = 850;
	var height = 480;


	var url = "/Admin/Common/PopupReqShopFinder?ShopGubun=" + ShopGubun + "&retnObjName=" + retnObjName + "&retnObjCode=" + retnObjCode + "&isPop=" + isPop;


	win = window.open(url, "거래처검색", 'width=' + width + ', height=' + height + ',scrollbars=yes');
	win.focus();
}



/**************************************************************************
*	Date : 2011-06-01  By Zeus
*	Desc : max size를 초과하면 이미지를 줄여준다
*	parameter 
*		- imgObj : 이미지 오브젝트
*		- mHeight : 최대 높이
*		- mWidth : 최대 길인
**************************************************************************/
function resizeImg(imgObj, mHeight, mWidth) {
	// 이미지 별도 로딩으로 원래 사이즈 추출
	var maxHight = mHeight;  // 최대 이미지 사이즈
	var maxWidth = mWidth;  // 최대 이미지 사이즈
	var imgOriginal = new Image();
	imgOriginal.src = imgObj.src;
	// 가로와 세로 중 어느걸 기준으로 줄일지 결정
	if (imgOriginal.width >= maxWidth && imgOriginal.height >= maxHight) {

		var baseAxis;
		if ((imgOriginal.width / maxWidth) > (imgOriginal.height / maxHight)) {
			baseAxis = 'width';
		} else {
			baseAxis = 'height';
		}
		//baseAxis = 'width';

		// 결정된 기준을 바탕으로 나머지 길이를 리사이징
		if (baseAxis == 'width') {
			imgObj.height = Math.round(imgOriginal.height * (maxWidth / imgOriginal.width));
			imgObj.width = Math.round(imgOriginal.width * (imgObj.height / imgOriginal.height));
		} else { // baseAxis == 'height' 
			imgObj.width = Math.round(imgOriginal.width * (maxHight / imgOriginal.height));
			imgObj.height = Math.round(imgOriginal.height * (imgObj.width / imgOriginal.width));
		}

	} else if (imgOriginal.width >= maxWidth && imgOriginal.height < maxHight) {
		imgObj.width = maxWidth;
		imgObj.height = Math.round(imgOriginal.height * (maxWidth / imgOriginal.width));

	} else if (imgOriginal.width < maxWidth && imgOriginal.height >= maxHight) {
		imgObj.width = Math.round(imgOriginal.width * (maxHight / imgOriginal.height));
		imgObj.height = maxHight;
	} else {
		imgObj.height = imgOriginal.height;
		imgObj.width = imgOriginal.width;
	}
}


/***************************************************************************
 * getToday(delim)
 * : 현재 날짜를 지정된 구분자로 구분표시하여 반환한다.
 *
 * 파라미터 :
 *   delim - 년,월,일을 구분하여 표시되는 구분자
 *
 * 반환값 :
 *   현재 날짜(년,월,일)
 ***************************************************************************/
function getToday(delim) {
	var today = new Date();             // 현재 날짜의 Date객체를 생성한다.
	var day = today.getDate();          // 현재 '일'을 반환받는다.
	var month = today.getMonth() + 1;   // 현재 '월'을 반환받는다.
	var year = today.getFullYear();     // 현재 '년'을 반환받는다.
	var strToday;
	// '월'과 '일'을 2자리 숫자로 표현한다.
	if ((month / 10) < 1) month = "0" + month;
	if ((day / 10) < 1) day = "0" + day;

	// 년,월,일로 이루어진 문자열로 변환한다.
	if (delim == null) delim = "-";
	strToday = year + delim + month + delim + day;

	return strToday;
}


function getCalculatedDate(iYear, iMonth, iDay, seperator) {
	//현재 날짜 객체를 얻어옴.
	var gdCurDate = new Date();
	//현재 날짜에 날짜 게산.
	gdCurDate.setYear(gdCurDate.getFullYear() + iYear);
	gdCurDate.setMonth(gdCurDate.getMonth() + iMonth);
	gdCurDate.setDate(gdCurDate.getDate() + iDay);

	//실제 사용할 연, 월, 일 변수 받기.
	var giYear = gdCurDate.getFullYear();
	var giMonth = gdCurDate.getMonth() + 1;
	var giDay = gdCurDate.getDate();
	//월, 일의 자릿수를 2자리로 맞춘다.
	giMonth = "0" + giMonth;
	giMonth = giMonth.substring(giMonth.length - 2, giMonth.length);
	giDay = "0" + giDay;
	giDay = giDay.substring(giDay.length - 2, giDay.length);
	//display 형태 맞추기.
	return giYear + seperator + giMonth + seperator + giDay;
}


/*
 *	2014.02.26 by zeus
 *	날짜계산
 */
function SetSearchDate(month) {

	var sdate = "";
	var edate = "";

	if (month == 'today') {
		sdate = getToday("-");
		edate = sdate;
	}
	else if (month == "1w") {
		edate = getToday("-");
		sdate = getCalculatedDate(0, 0, -7, "-");
	}
	else if (month == "15d") {
		edate = getToday("-");
		sdate = getCalculatedDate(0, 0, -15, "-");
	}
	else if (month != "") {
		edate = getToday("-");
		sdate = getCalculatedDate(0, -month, 0, "-");
	}

	$("#searchSdate").val(sdate);
	$("#searchEdate").val(edate);

	return false;
}
function SetSearchDateAll() {
	$("#searchSdate").val('ALL');
	$("#searchEdate").val('ALL');
}

function SetSearchDateQuarter(val) {
	var gdCurDate = new Date();
	var sdate = "";
	var edate = "";
	if (val == '0') {
		sdate = getToday("-");
		edate = sdate;
	}

	if (val == '1') {
		sdate = gdCurDate.getFullYear() + "-01-01"
		edate = gdCurDate.getFullYear() + "-03-31"
	}
	if (val == '2') {
		sdate = gdCurDate.getFullYear() + "-04-01"
		edate = gdCurDate.getFullYear() + "-06-30"
	}
	if (val == '3') {
		sdate = gdCurDate.getFullYear() + "-07-01"
		edate = gdCurDate.getFullYear() + "-09-30"
	}
	if (val == '4') {
		sdate = gdCurDate.getFullYear() + "-10-01"
		edate = gdCurDate.getFullYear() + "-12-31"
	}

	$("#searchSdate").val(sdate);
	$("#searchEdate").val(edate);
}

function SetSearchDate2(month) {

	var sdate = "";
	var edate = "";

	if (month == 'today') {
		sdate = getToday("-");
		edate = sdate;
	}
	else if (month == "1w") {
		edate = getToday("-");
		sdate = getCalculatedDate(0, 0, -7, "-");
	}
	else if (month == "15d") {
		edate = getToday("-");
		sdate = getCalculatedDate(0, 0, -15, "-");
	}
	else if (month != "") {
		edate = getToday("-");
		sdate = getCalculatedDate(0, -month, 0, "-");
	}

	$("#SDate").val(sdate);
	$("#EDate").val(edate);
	return false;
}

function to_date2(date_str) {
	var yyyyMMdd = String(date_str);
	var sYear = yyyyMMdd.substring(0, 4);
	var sMonth = yyyyMMdd.substring(5, 7);
	var sDate = yyyyMMdd.substring(8, 10);

	//alert("sYear :"+sYear +"   sMonth :"+sMonth + "   sDate :"+sDate);
	return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
}


function getFilename(url) {
	var pattern = /(^.*\/)([^&#?]*)/;
	var m = url.match(pattern);
	var setname = m[1].split('/');
	var filename = "/" + setname[3] + "/" + setname[4] + "/" + m[2];
	return filename;
}



/**************************************************************************
*	Date : 2014-05-29  By H
*	Desc : 쿠키에 원하는 값을 넣는다
*	parameter 
*		- cName 
*		- cValue
*		- cDay 
**************************************************************************/

function setCookie(cNAme, cValue, cDay) {
	var expire = new Date();
	expire.setDate(expire.getDate() + cDay);
	cookies = cNAme + '=' + escape(cValue) + ';path=/';
	if (typeof cDay != 'undefined') cookies += ';expires =' + expire.toGMTString() + ';';
	document.cookie = cookies;
}

function getCookie(cNAme) {
	cNAme = cNAme + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cNAme);
	var cValue = '';
	if (start != -1) {
		start += cNAme.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1) end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);

}


/************************************************************************
함수명		: getNameFromPath(파일경로)  
작 성 자	: H
최초작성일	: 2014-07-11
최종작성일	:
예제        : getNameFromPath(파일경로) 
*************************************************************************/

function getNameFromPath(strFilepath) {
	var objRE = new RegExp(/([^\/\\]+)$/);
	var strName = objRE.exec(strFilepath);
	if (strName == null) {
		return null;
	}
	else {
		return strName[0];
	}
}

 


