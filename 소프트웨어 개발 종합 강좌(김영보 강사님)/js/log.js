/**
 * method js.log id가 result인 div태그를 찾는다. 있다면 없다면 div 생성하고 id에 result를 준다. 그리고
 * 들어갈 div를 생성하고 줄번호를 넣어준다. 그후 파라미터가 배열인지 검사하여서 배열이라면 값이 공백인지 체크하고 텍스트를 추가한다
 * 배열구분은 ,로 작성 배열이 아니라면 [내용을] 넣는다
 * 
 * @param (String) text , 받은 내용
 * @return (String) 줄번호.[내용] or 줄번호.[내용,내용,내용]
 */
var js = {
	lineNumber : 1
};
js.log = function(text) {

	var k, node, child, lineText;
	node = document.getElementById("result");
	if (!node) {
		node = document.createElement("div");
		node.id = "result";
		document.body.appendChild(node);
	}

	child = document.createElement("div");

	lineText = js.lineNumber + ".";

	if (Array.isArray(text)) {
		lineText += "[";
		for (k = 0; k < text.length; k++) {
			lineText += text[k] === "" ? "" : text[k];
			if (k < (text.length - 1)) {
				lineText += ",";
			}
		}
		lineText += "]";
	} else {
		lineText += text;
	}

	if (arguments.length > 1) {
		for ( var k = 1; k < arguments.length; k++) {
			lineText += arguments[k];
		}
	}

	child.innerText === undefined ? child.textContent = lineText
			: child.innerText = lineText;

	node.appendChild(child);
	js.lineNumber += 1;
	return this;

};

var Util = {};

Util.GetById = function (id){
	return document.getElementById(id);
};

Util.Selector =  function (pattern){
	var NodeList =  document.querySelectorAll(pattern);
	if(NodeList.length == 1){
		NodeList = NodeList[0];
	}
	return NodeList;
};




