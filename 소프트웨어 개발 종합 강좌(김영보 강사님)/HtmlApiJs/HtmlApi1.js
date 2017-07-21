window.onload = function() {

    /*-----------------------[HTML5스크립핑]-----------------------------*/
	
	/*-----------------------[현재의 브라우징 콘텍스트 속성]-----------------------------*/
	/*
	js.log('window.window : ',window.window);
	js.log('self : ',window.self);
	js.log('document : ',window.document);
	
	//주로 하이퍼링크와 form 타킷을 설정할 때 사용
	js.log('name : ',window.name);
	
	//window에 포함된 Document의 URL 정보를 제공한다
	//25_loading에서 다른다
	js.log('location : ',window.location);
	//window에 오브젝트에 포함된 Document의 History를 제공한다
	//25_loading에서 다른다
	js.log('history : ',window.history);
	
	//ie는 모름!!
	js.log("");
	js.log('--- BarProp.visible-----');
	js.log('locationbar.visible : ',window.locationbar.visible);
	js.log('menubar.visible : ',window.menubar.visible );
	js.log('personalbar.visible : ',window.personalbar.visible );
	js.log('scrollbars.visible : ',window.scrollbars.visible );
	js.log('statusbar.visible : ',window.statusbar.visible );
	js.log('toolbar.visible : ',window.toolbar.visible );
	js.log('status : ',window.status);
	*/
	
	
	/*-----------------------[다른 브라우징 콘텍스트 속성]-----------------------------*/
/*
	//서버에서 실행해야함
	HTML
	<!-- <iframe src="../HTML5/HTML5(2015.09.19).jsp" width=230 height=100></iframe> -->
	js.log('window.frames : ',window.frames);

	//<iframe>를 작성했으므로 1이 반환된다.
	js.log('window.length : ',window.length);
	 
	
	//PC에서 실행하면 권한 에러가 발생하므로 서버에서 실행한다.
	js.log("");
	js.log("--- window[0] ---");
	var zeroObj = window[0];
	js.log('window[0] : ',window[0]);
	js.log('window[0].innerWidth : ',window[0].innerWidth);
	js.log('window[0].innerHeight : ',window[0].innerHeight);
	
	js.log("--- window[0].top ---");
	js.log('window[0].top : ',zeroObj.top);
	js.log('window[0].top.innerWidth : ',zeroObj.innerWidth);
	
	
	js.log("");
	js.log("--- window[0].parent ---");
	js.log('window[0].parent : ',zeroObj.parent);
	js.log('window[0].parent.innerWidth : ',zeroObj.parent.innerWidth);
	js.log('window[0].parent.innerHeight : ',zeroObj.parent.innerHeight);
	
	
	js.log("");
	js.log("--- window ---");
	js.log('window.top: ',window.top);
	js.log('window.top.innerWidth: ',window.top.innerWidth);
	
	//다른 window가 현재 window을 열었을 때 open한 window를 반환
	//다른 window가 열지 않은 window이면 null 반환
	js.log('window[0].parent : ',zeroObj.parent);
	if(zeroObj.opener){
		js.log('window[0].parent.innerWidth : ',zeroObj.parent.innerWidth);
	}
	js.log("");
	var element = zeroObj.frameElement;
	js.log('window[0].frameElement : ',zeroObj.frameElemet);
	js.log('window[0].frameElement.innerWidth : ',element.width);
	*/
	
	/*-----------------------[코딩 실습]-----------------------------*/

	/*
	-요구 사항
	코딩의 편리를 위해 단축 함수를 만듭니다
	아래 함수를 호출하는 HTML과 자바스크립트 코드를 만들고
	console.log()로 함수에서 반환된 엘리먼트를 출력하세요
	진행하면서 필요한 것을 함수로 만들어 사용하세요
	
	-get() 함수
	파라미터로 엘리먼트 ID를 받아 엘리먼트 오브젝트를 반환합니다
	function get(id){
	return document.getElementById(id);
	}
	-selector() 함수
	파라미터로 셀러터 패턴을 받아 엘리먼트 오브젝트를 반환합니다
	패턴에 따라 NodeList가 반환될 수도 있습니다.
	function selector(pattern){
		return document.querySelector(patterm);
	}
	
	
	*/
	
	
	/*-----------------------[SetTimeOut]-----------------------------*/
	
	
/*
    //HTML
	<button id="set" type=button>setTimeout() 실행</button>
	<button id="clear" type=button>clearTimeout() 실행</button>

	var count =0, timerID;

	document.getElementById("set").onclick = function(){
		timerID = window.setTimeout(execTimout,100);
	};

	function execTimout(){
		js.log("count : ",++count);
	}

	document.getElementById("clear").onclick = function(){
		window.clearTimeout(timerID);
		js.log("clearTimeout");
	};
*/
	
	//2번째 예제
	/*
	//버튼을 누루는 순간 delay함수를 실행한다
	//window.timerID 아이디를 저장한다 delay에서  timerID 반환
	//scoprObj.get 함수를 delat에 넘겨서 1초후에 실행한다!!
	
	
	//HTML
	<button id="scope" type="button">SetTimeOut() 실행</button>
	
		var scoprObj ={
				value : 100,
				get: function(param){
					this.value = this.value + param + 5;
					js.log("setTimeout: ", this.value);
					window.clearTimeout(window.timerID);
				}
		};
		document.getElementById("scope").onclick = function(){
			window.timerID = delay(scoprObj.get,scoprObj,1000,20);
		}
		
		//핸들러,스코프, delaytime 순서로 작성
		//파라미터에 제한을 두지 않기 위해 auguments 사용
		
		function delay(fn,scope,time){
			var params = Array.prototype.slice.call(arguments,3);
			return setTimeout(function(){
				return fn.apply(scope ||window,params);
			},time||1000);
			
		}
		
		
		//----------[DOM 중급 에서 한거 잠시 복습]----------//
		//call() 과 this
		var get = function(value){
			return this.base * this.rate + value;
		}
		var result = get.call({base:20,rate:30},50);
		js.log(result);
		
		//apply는 배열로 던지는것!!
		//Array!!!! 
		

	*/
	
	/*-----------------------[setInterval]-----------------------------*/

	
	//HTML
/*	<button id="scope" type="button">setInterval() 실행</button>
	<button id="clear" type=button>clearInterval() 실행</button>
	*/
	/*
		var scoprObj ={
				value : 100,
				get: function(param){
					this.value = this.value + param + 5;
					js.log("setInterval: ", this.value);
				}
		};
		
		document.getElementById("scope").onclick = function(){
			window.timerID = delay(scoprObj.get,scoprObj,1000,20);
		}
		
		//핸들러,스코프, delaytime 순서로 작성
		//파라미터에 제한을 두지 않기 위해 auguments 사용
		
		function delay(fn,scope,Interval){
			var params = Array.prototype.slice.call(arguments,3);
			return setInterval(function(){
				return fn.apply(scope ||window,params);
			},Interval||1000);
			
		}
		
		document.getElementById("clear").onclick = function(){
			window.clearInterval(window.timerID);
			js.log("clearInterval (window.timerID): ", window.timerID);
		};
		*/

	
	/*-----------------------[코딩 실습]-----------------------------*/
/*
	-요구사항
	1에서 20까지 반복합니다.
	반복할 때마다 반복 값을 누적하여 출력하세요.
	1, 1+2 =3 의 형태
	this로 누적 변수를 참조할 수 있도록 코드를 구성하세요.
	
	setInterval()을 사용하며 간격은 100/1000초 압니다.
    반복을 오나료하면 누적된 값을 출력하세요
*/	
	
	/*-----------------------[Base64]-----------------------------*/
	/*
	var encodeValue = window.btoa("abcde 12345");
	js.log("base64 인코딩 : ",encodeValue);
	
	
	var decodeValue = window.atob(encodeValue);
	js.log("base64 디코딩: ",decodeValue);
	*/
	/*-----------------------[Navigator]-----------------------------*/
/*
	var obj = window.navigator;
	js.log("appCodeName : ", obj.appCodeName);
	js.log("appName : ", obj.appName);
	js.log("appVersion : ", obj.appVersion);
	js.log("platform : ", obj.platform);
	js.log("product : ", obj.product);
	js.log("productSub : ", obj.productSub);
	
	
	js.log("userAgent : ", obj.userAgent);
	js.log("vendor : ", obj.vendor);
	js.log("vendorSub : ", obj.vendorSub);
	js.log("language : ", obj.language);
	js.log("cookieEnabled : ", obj.cookieEnabled);
	*/
	/*-----------------------[onLine()]-----------------------------*/


	/*
		PC에서 실행하면 online 상태인 true가 출력된다
		연결된 상태에서 통신을 끊으면
		onoffline 이벤트가 발생되며 false가 출력된다.
		다시 통신을 하면 online 이벤트가 발생된다.
	*/
	
/*
	function showStatus(){
		js.log("onLine :",window.navigator.onLine);
	}
	
	
	
	document.addEventListener("DOMContentLoaded",function(){
		var el = document.getElementByTagName("body")[0];
		el.onload = function(event){
			js.log("type :" , event.type);
			showStatus();
		}
		el.ononline = function(event){
			js.log("type :" , event.type);
			showStatus();
		}
		el.onoffline = function(event){
			js.log("type :" , event.type);
			showStatus();
		}
	});
	*/
	
	/*-----------------------[Plugins]-----------------------------*/
	/*
	var plugins = window.navigator.plugins;
	//플러그인 전체
	js.log("plugins.length :",plugins.length);
	
	//두 번째 플러그인
	js.log("--- 두번째 플러그인 정보");

	for( var i =0;i<plugins.length;i++){
	var obj = plugins.item(i);
		js.log("=======시작=======");
	js.log("name :",obj.name);
	js.log("description :",obj.description);
	js.log("filename :",obj.filename);
	js.log("length :",obj.length);
	js.log("=======끝=======");
	}
	*/
	
	/*-----------------------[mimeTypes]-----------------------------*/
/*
	var types = window.navigator.mimeTypes;
	js.log("mimeTypes.length :",types.length);
	
	
	js.log("--- 두번째 mimeTypes 정보");
	for( var i =0;i<types.length;i++){
	var obj = types.item(i);
	js.log("=======시작=======");
	js.log("type :",obj.type);
	js.log("description :",obj.description);
	js.log("suffixes :",obj.suffixes);
	js.log("enabledPlugin.name :",obj.enabledPlugin.name);
	js.log("=======끝=======");

	}
	*/
	
	/*-----------------------[HTMLFormControlsCollection]-----------------------------*/

	
	//HTML
//	<form id="formSports">
//	<label><input type=radio name=sports value="축구"/>축구</label>
//	<label><input type=radio name=sports value="농구" checked/>농구</label>
//	<label><input type=radio name=sports value="수영"/>수영</label>
//	</form>

	/*
	var radioList , formNode = document.forms[0];
	js.log("length",formNode.length);
	
	//IE9 이상만 지원 4대 브라우저 지원하지 않음
	if(formNode.namedItem){
		radioList = formNode.namedItem("sports");
		js.log("nodeList.length",radioList.length);
		js.log("value :",radioList.value);
	}else{
		js.log("namedItem()을 지원하지 않음");
	}
	
	js.log("------formNode['sports']=========");
	
	//namedItme()과 같이 사용할 수 있으며 다수가 매치되면 다수를 반환합니다.
	//<inpu type=radio> 이면 RadioNodeList 인터페이스 형태로 반환합니다.
	radioList = formNode['sports'];
	js.log("nodeList.length : ",radioList.length);
	js.log("nodeList.value : ",radioList.value);
	js.log("nodeList[0].value : ",radioList[0].value);
	js.log("nodeList[1].value : ",radioList[1].value);
	js.log("nodeList[2].value : ",radioList[2].value);
	*/
	
	/*-----------------------[HTMLOptionsCollection]-----------------------------*/

	
	//HTML
//	<button id="add">add() 실행</button>
//	<button id="remove">remove() 실행</button>
//	<select id="sports" size=4>
//	<option id="id11" value="11">축구</option>
//	<option id="id12" value="12" selected>농구</option>
//	<option id="id21" value="21">수영</option>
//	<option id="id22" value="22">마라톤</option>
//	</select>
	
	
	/*
	
	var selectNode = document.getElementById("sports");
	js.log(".length : ",selectNode.length);
	js.log("selectedIndex : ",selectNode.selectedIndex);
	js.log("item(1).id : ",selectNode.item(1).id);

	
	if(selectNode.namedItem){
		js.log("namedItem('id12') : ",selectNode.namedItem("id12").text);
	}else{
		js.log("namedItem()을 지원하지 않음");
	}
	

	document.getElementById("add").onclick = function (){
		var node = document.createElement("option");
		node.textContent = "추가";
		selectNode.add(node,1);
	}
	
	document.getElementById("remove").onclick = function (){
		selectNode.remove(1);
	}
	*/
	
	
	/*-----------------------[matadata 속성]-----------------------------*/

	/*js.log("location : ",document.location);
	js.log("domain : ",document.domain);
	js.log("referrer : ",document.referrer);
	
	
	//크롬 미지원, 파이어폭스 지원
	//document.cookie = "book=책";
	//js.log("cookie : ",document.cookie);
	
	
	js.log("readyState : ",document.readyState);
	js.log("lastModified : ",document.lastModified);
	*/

	
	/*-----------------------[DOM Tree 프로퍼티]-----------------------------*/

	
	//HTML
//	<img src="" >축구</img>
//	<img src="" >농구</img>
//	<label><input type=radio name=sports value="축구"/>축구</label>
//	<label><input type=radio name=sports value="농구" checked/>농구</label>
//	<label><input type=radio name=sports value="수영"/>수영</label>

	
	/*js.log("dir : ",document.dir);
	js.log("head.nodeName : ",document.head.nodeName);
	js.log("title : ",document.title);
	js.log("body.nodeName : ",document.body.nodeName);
	js.log("currentScript : ",document.currentScript);
	
	
	
	
	var nodes = document.images;
	for(var i =0; i< nodes.length;i++){
		js.log("nodes[i].nodeName : ",nodes[i].nodeName);
	}
	
	nodes = document.getElementById("select아이디 입력");
	for(var i =0; i< nodes.length;i++){
		js.log("nodes[i].type : ",nodes[i].type);
	}*/
	
	/*-----------------------[markup 생성]-----------------------------*/

	
	//HTML
	//<button id=openID type=button>open() 실행</button>
	
	/*
	document.getElementById("openID").onclick = function(){
		document.open();
		document.write("<h1>open()과 write() 실행</h1>");
		document.writeln("<h2>writeln</h2>");
		document.close();
	}
	
	*/
	
	/*-----------------------[user interaction]-----------------------------*/

	//HTML
	//	<input type=text id=ss  /> 
	
	/*js.log("activeElement : ", document.activeElement);
	js.log("hasFocus() :  ",document.hasFocus());
	
	
	document.getElementById("ss").onclick = function(){
		js.log("activeElement: ", document.activeElement);
		js.log("activeElement.id: ", document.activeElement.id);
	}
	*/
	
	
	/*-----------------------[title]-----------------------------*/
/*
		var el = document.getElementsByTagName('title').item(0);
	js.log("element.text :" ,el.text);
	js.log("document.title",document.title);
	
	*/
	
	/*-----------------------[Element]-----------------------------*/

	/*-----------------------[Element user interaction]-----------------------------*/
	
	
	//HTML
//	<button id=clickID>버튼 클릭</button>
//	<button id=focusID>focus() 실행</button>
//	<button id=blurID>blur() 실행</button>
//	<p>
//	<lable>음악 : <input id=music size=5 /></lable>
//	<lable>스포츠 : <input id=sports size=5 /></lable>
//	</p>
/*	
	var clickNode = document.getElementById("clickID");
	clickNode.onclick = function(event){
		js.log("#clickID : " , event.target.id);
		js.log("pageX : " , event.pageX , ", pageY : ", event.pageY);
	}
*/	
	
	/*-----------------------[img]-----------------------------*/

	//HTML
	//<button id=clickButton>이미지 추가 클릭</button>
	//<p id=addImage></p>
/*	
	document.getElementById("clickButton").onclick = function(){
		var obj = new Image();
		obj.src = "../img/basketball_width.png";
		obj.id="imageID";
		
		var el = document.getElementById("addImage");
		el.appendChild(obj);
		
		//로딩 시간이 걸리므로 이시점에서는 false 출력
		js.log("complete : ",obj.complete);
		
		//1초 후에 완료를 체크하면 true
		window.setTimeout(function(){
			js.log("1초후 체크 : ",obj.complete);
		}, 1000);
	};
	*/

	/*-----------------------[form]-----------------------------*/

	//HTML
//	<button id=submitClick>submit()실행</button>
//	<button id=resetClick>reset()실행</button>
//	<form method=post target="_blank">
//	<label><input type=checkbox name=soccer />축구</label>
//	<label><input type=checkbox name=baseball />야구</label>
//	</form>
	/*
	var formNode = document.forms[0];
	js.log("elements.length : ",formNode.elements.length);
	
	js.log("formNode[1].neme : ",formNode[1].neme);
	
	js.log("type : ",formNode["soccer"].type);
	
	
	//submit()
	document.getElementById("submitClick").onclick = function(event){
		formNode.submit();
		js.log("submit 실행");
	};
	
	document.getElementById("resetClick").onclick = function(event){
		formNode.reset();
		js.log("rest실행");
	};
	*/
	
	
	/*-----------------------[label]-----------------------------*/

	//HTML
//	<form id=frm method=post target="_blank">
//	<label for="soccer"><input type=checkbox name=soccer id=soccer />축구</label>
//	<label for="baseball"><input type=checkbox name=baseball id=baseball />야구</label>
//	</form>
	/*
	var node = document.getElementsByTagName("label").item(0);
	
	js.log("htmlFor : ",node.htmlFor);
	
	js.log("control.id : ",node.control.id);
	js.log("control.type: ",node.control.type);
	js.log("control.form.id : ",node.form.id);
	*/
	
	
	
	
	/*-----------------------[select]-----------------------------*/

	//HTML
//	<select id=sports size=4 multiple>
//	<option id="id1" value="1">축구</option>
//	<option id="id2" value="2" selected>농구</option>
//	<option id="id3" value="3" selected>마라톤</option>
//	</select>
//	
	/*
	var node = document.querySelector("select");
	js.log("type : ", node.type);
	
	var options = node.options;
	for(var i =0;i<options.length;i++){
		js.log("options[i].id : ",options[i].id);
	}
	
	js.log("----selectedOptions----");
	
	var nodes = node.selectedOptions;
	for(var i =0;i<nodes.length;i++){
		js.log("id : ",nodes[i].id);
	}
	*/
	
	
	/*-----------------------[select]-----------------------------*/

	//HTML
//	<p>
//	<button>option 추가</button>
//</p>
//<form>
//	<select id=sports size=4 multiple>
//		<option id="id1" value="1" selected>축구</option>
//		<option id="id2" value="2">농구</option>
//	</select>
//</form>
	
	/*
	var node = document.querySelector("select");
	var options = node.options;
	for(var i =0;i<options.length;i++){
		js.log("index : ",options[i].index);
		js.log("text : ",options[i].text);
		js.log("defaultSelected : ",options[i].defaultSelected);
		js.log("form.nodeName : ",options[i].form.nodeName);
	}
	
	 document.querySelector("button").onclick = function(){
		 var optionNode = new Option("추가한 것","add",true,true);
		 node.appendChild(optionNode);
	 };
	*/
	
	/*-----------------------[textarea]-----------------------------*/

	
	
	//HTML
//	<textarea wrap=solft cols=20 rows=3 style="font-size:16px">
//	가나다라바마사ABC
//	</textarea>
/*
	var node = document.querySelector("textarea");
	node.focus();
	
	//readOnly에서 대소문자 구문
	js.log("readOnly : ",node.readOnly);

	js.log("type : ",node.type);
	js.log("defaultValue : ",node.defaultValue);
	js.log("value : ",node.value);
	
	//한글도 하나로 카운트
	js.log("textLength : ",node.textLength);
	*/
	
	
	/*-----------------------[progress]-----------------------------*/

	//HTML
//	<button>진행 값 증가</button>
//	<p id=rate>진행 30%</p>
//	<progress value=30 max=100></progress>
	
	/*
	var node =  document.querySelector("progress");
	
	js.log("value :", node.value);
	js.log("max :", node.max);
	js.log("position :", node.position);
	 
	
	js.log("클릭할  때마다 10씩 증가");
	
	var rateNode = document.getElementById("rate");
	
	document.querySelector("button").onclick = function(){
		node.value = Number(node.value) + 10;
		rateNode.textContext = "진행  "+ node.value+ "%"; 
		
		
	};
	*/
	
	
	/*-----------------------[Range]-----------------------------*/

	//HTML
//	<p><button type=button id=clickID>문자열 복사 실행</button></p>
//	<div id=beginID>가나다라<strong id=strongID>마바사아자차</strong></div>
/*	
	document.getElementById("clickID").onclick = function(){
		var rangeObj = new Range();
		var beginNode = document.getElementById("beginID");
		var strongNode = document.getElementById("strongID");
		
		rangeObj.setStart(beginNode.firstChild,2);
		rangeObj.setEnd(strongNode.firstChild,3);
		var framentObj = rangeObj.cloneContents();
		js.log(framentObj.textContent);
		
	};
*/
	
	
	
	/*-----------------------[Range 속성]-----------------------------*/

	
	//HTML
//	<ul id=ULID>ulNode
//	<li id=id01>가나다라마</li>
//	<li id=id02>바사아자차</li>
//	<li id=id03>카타파하</li>
//	</ul>
	/*
	var rangeObj = new Range();
	var id02Node =  document.getElementById("id02");
	var id03Node =  document.getElementById("id03");
	
	rangeObj.setStart(id02Node.firstChild,3);
	rangeObj.setEnd(id03Node.firstChild,2);

	js.log("startContainer : ",rangeObj.startContainer.textContent);
	js.log("endContainer : ",rangeObj.endContainer.textContent);
	js.log("startOffset : ",rangeObj.startOffset);
	js.log("endOffset : ",rangeObj.endOffset);
	js.log("collapsed : ",rangeObj.collapsed);
	js.log("commonAncestorContainer.id : ",rangeObj.commonAncestorContainer.id);
	
	*/
	
	
	//HTML
//	<ul id=ULID>ulNode
//	<li id=id01>가나다라마</li>
//	<li id=id02>바사아자차</li>
//	<li id=id03>카타파하</li>
//	</ul>
	
	/*
	 var rangeObj = new Range();
	var id01Node =  document.getElementById("id01");
	var id03Node =  document.getElementById("id03");
	
	//파라미터  앞 노드를 Range 시작 노드로 지정
	rangeObj.setStartBefore(id01Node);
	
	//파라미터의 앞 노드를 Range 끝 노드로 지정
	rangeObj.setEndBefore(id03Node);
	
	showLog();
	
	//파라미터의 다음 노드를 Range 시작 노드로 지정
	rangeObj.setStartAfter(id01Node);
	//파라미터의 다름 노드를 Range 끝 노드로 지정
	rangeObj.setEndAfter(id03Node);
	
	showLog();
	
	function showLog(){
	//DocumentFragment 를 반환한다.
		framentObj = rangeObj.cloneContents();
		js.log(framentObj.textContent);
	};
	*/
	
	

	//HTML
//	<p>
//	<button id=deleteContents type=button>콘텐츠만 삭제</button>
//	<button id=deleteAll type=button>엘리먼트 포함 삭제</button>
//	</p>
//	
//	<ul id=ul00 style="background: lime;width:150px;height: 110px">ulNode
//		<li id=id01>가나다라마</li>
//     	<li id=id02>바사아자차</li>
//	    <li id=id03>카타파하</li>
//	</ul>
	
	/*
	 	var rangeObj = new Range();
		var ul00Node =  document.getElementById("ul00");
	
		//ul은 삭제 되지 않고 남는다
		document.getElementById("deleteContents").onclick = function(){
			deleteContes("remain");
		};
		
		//전부 삭제
		document.getElementById("deleteAll").onclick = function(){
			deleteContes("all");
		};
		
		function deleteContes(range){
			if(range ==="remain"){
				rangeObj.selectNodeContents(ul00Node);
			}else{
				rangeObj.selectNode(ul00Node);
			}
			//Range 오브젝트의 DOM Tree를 삭제한다
			rangeObj.deleteContents();
		}
*/
	
	//HTML
//	<button id=insert type=button>insertNode() 실행</button>
//	<div id=id01>처음<i id=id02>중간</i>끝</div>
	
	/*
	var rangeObj = new Range();
	rangeObj.setStart(document.getElementById("id01").firstChild,0);
	rangeObj.setEnd(document.getElementById("id02").firstChild,2);
	
	var fragmentObj = rangeObj.cloneContents();
	js.log("insert 전  : ",fragmentObj.textContent);
	var node = document.createElement("strong");
	node.textContent = "추가한 노드";
	js.log("노드 존재 : ", rangeObj.intersectsNode(node));
	
	document.getElementById("insert").onclick = function(){
		rangeObj.insertNode(node);
		fragmentObj = rangeObj.cloneContents();
		js.log("insert 후  : ",fragmentObj.textContent);
		js.log("노드 존재 : ", rangeObj.intersectsNode(node));

	};
	*/
	

	//HTML
//	<div id=id01>처음<i id=id02>중간</i>끝</div>
	/*
	var rangeObj = new Range();
	var startNode = document.getElementById("id01");
	var endNode = document.getElementById("id02");
	
	
	rangeObj.setStart(startNode.firstChild,0);
	rangeObj.setEnd(endNode.firstChild,2);
	
	var cloneObj = rangeObj.cloneRange();
	var fragmentObj = cloneObj.cloneContents();
	js.log("복제 후  : ",fragmentObj.textContent);
	
	js.log("collapse() 전 : " , rangeObj.cloneContents().textContent );
	rangeObj.collapse(false);
	js.log("collapse() 후 : " , rangeObj.cloneContents().textContent );
	
	*/
	
	
	//HTML
//	<ul id=ul00>ulNode
//	<li id=id01>가나다라마</li>
// 	<li id=id02>바사아자차</li>
// 	 <li id=id03>카타파하</li>
//</ul>	
	
	/*
	var rangeObj = new Range();
	var souceOjb = new Range();
	var id01Node = document.getElementById("id01");
	var id02Node = document.getElementById("id02");
	
	rangeObj.selectNode(id01Node);
	souceOjb.selectNode(id02Node);
	
	//START_TO_START는 시작점 끼리 비교
	//rangeObj의 #id01이  souceOjb #id02보다 앞에 있으므로 -1 반환
	js.log(rangeObj.compareBoundaryPoints(Range.START_TO_START,souceOjb));
	
	//비교를 바꾸어서 비교하면
	//souceOjb의 #id02이  rangeObj #id01보다 앞에 있으므로 1 반환
	js.log(souceOjb.compareBoundaryPoints(Range.START_TO_START,rangeObj));

	js.log(rangeObj.comparePoint(id02Node,1));
	
	*/
	
	
	
	//HTML
//	<ul id=ul00>ulNode
//		<li id=id01>가나다라마</li>
//     	<li id=id02>바사아자차</li>
//     	 <li id=id03>카타파하</li>
//	</ul>	
	
	
	/*
	
	var rangeObj = new Range();
	var id01Node = document.getElementById("id01");
	
	
	rangeObj.selectNode(id01Node);
	//Range 오브젝트에 노드의 포함여부
	js.log("#id01 포함.",rangeObj.isPointInRange(id01Node,1));
	
	//
	rangeObj.detach();
	*/
	
	
	//HTML
	/*<button id=insert type=button>surroundContents() 실행</button>
	<button id=extract type=button>extractContenxt() 실행</button>
	<div id=id01>처음<i id=id02>중간</i>끝</div>*/
	/*
	var rangeObj = new Range();
	var id02Node = document.getElementById("id02");
	
	rangeObj.selectNode(id02Node);
	
	document.getElementById("insert").onclick = function(){
		var newNode = document.createElement("strong");
		//텍스트는 무시된다
		newNode.textContent = "추가한 것";
		rangeObj.surroundContents(newNode);
		var fragmentObj = rangeObj.cloneContents();
		js.log("surround 후 : ",fragmentObj.textContent);
	};
	

	document.getElementById("extract").onclick = function(){
		var extract = rangeObj.extractContents();
		js.log("extract 후 : ",extract.textContent);
	};
	
	*/
	
	
	
	
};


