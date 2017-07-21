<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang=ko>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Html5Api</title>
<style>
#result {
	border: 1px solid gray;
}

#result div {
	border: 1px solid gray;
	padding: 4px;
}
</style>
</head>
<body id="mainBody">
	<script src="../js/log.js" charset="utf-8"></script>
	<script src="../HtmlApiJs/HtmlApi1.js" charset="utf-8"></script>

	<button id=insert type=button>surroundContents() 실행</button>
	<button id=extract type=button>extractContenxt() 실행</button>
	<div id=id01>처음<i id=id02>중간</i>끝</div>
</body>
</html>

