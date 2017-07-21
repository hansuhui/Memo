window.onload = function() {

	/*------------------[Array every()메소드 ]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [ 20, 10, 30 ];
	 * 
	 * var result = value.every(function(element, index, list)
        { js.log("value:" + element); return element > 15; });
	 *  js.log(result);
	 */

	/*------------------[Array some()메소드 ]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [ 10, 20, 30 ];
	 * 
	 *  var result = value.every(function(element, index, list) { js.log("value:" + element); return element < 15; });
	 *  js.log(result);
	 */

	/*------------------[Array filter()메소드 ]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [ 10, 20, 30,40 ];
	 * 
	 * var result = value.filter(function(element, index, list) { return element < 30; });
	 *  js.log(result); js.log(value);
	 */

	/*------------------[Array map()메소드 ]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [ 10, 20, 30 ];
	 * 
	 * //값을 변환하여 새로운 벼앨에 설정하여 반환한다. 
	 * var result = value.map(function(element, index, list) { return element *7; });
	 *  js.log(result); js.log(value);
	 */

	/*------------------[Array reduce()메소드 ]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = [ 10, 20, 30,40 ];
	 * 
	 * //두 번째 파라미터를 작성하지 않은 경우 
	 * var result = value.reduce(function(previous,current, index, list) {
	 * js.log("pre:"+previous+" , cur:"+current); return previous + current; });
	 * 
	 * js.log(result); js.log(value);
	 */

	/*
	 * 1. 처음 콜백 함수를 호출할 때 (previous : 10 , current : 20 , index: 1, 반환값 30) 
	 * 2. 두번째 함수를 호출할 때 (previous : 30 , current : 30 , index: 2, 반환값 60)
	 *  3. 세번째 함수를 호출할 때 (previous : 60 , current : 40 , index: 3, 반환값 100) 
	 * 4. reduce() 최종값 반환(100)
	 */

	/*
	 * var value = [ 10, 20, 30];
	 * 
	 * //두 번째 파라미터에 초깃값(50)을 작성한 경우 
	 * var result = value.reduce(function(previous,current, index, list) {
	 * js.log("pre:"+previous+" , cur:"+current); return previous + current;
	 * },50);
	 * 
	 * js.log(result); js.log(value);
	 */

	/*
	 * 1. 처음 콜백 함수를 호출할 때 두 번째 파리미터 값을 previous에 설정 
	 * (previous : 50 , current :10 , index: 1, 반환값 60) 
	 * 2. 두번째 함수를 호출할 때 
	 * (previous : 60 , current : 20 ,index: 1, 반환값 80) 
	 * 3. 세번째 함수를 호출할 때 
	 * (previous : 80 , current : 30 , index:2, 반환값 110) 
	 * 4. reduce() 최종값 반환(110)
	 */

	/*------------------[Array reduceRight()메소드 ]----------------------------
	 ----------------------------------------------------*/

	/*var value = [ 10, 20, 30 ];

	// 두 번째 파라미터에 초깃값(50)을 작성한 경우
	var result = value.reduceRight(function(previous, current, index, list) {
		js.log("pre:" + previous + " , cur:" + current);
		return previous + current;
	}, 50);

	js.log(result);
	js.log(value);*/
	
	/*
	 * 1. 처음 콜백 함수를 호출할 때 
	 * 두 번째 파리미터 값을 previous에 설정 
	 * (previous : 50 , current : 30 , index: 2, 반환값 80)
	 * 2. 두번째 함수를 호출할 때 
	 * (previous : 80 , current : 20 ,index: 1, 반환값 100)
	 *  3. 세번째 함수를 호출할 때 
	 *  (previous : 100 , current : 10 , index:0, 반환값 110)
	 *  4. reduce() 최종값 반환(110)
	 * 
	 */
	
	/*------------------[Array indexOf()메소드 ]----------------------------
	 ----------------------------------------------------*/
	
/*
	var value = [ 1,2,3,1,2,3 ];
	
	
	//왼쪽부터 오른쪽으로 검색. 앞의 3이 검색된다.
	js.log(value.indexOf(3));
	//데이터 타입까찌 체크하므로 문자열 "3"이 없음
	js.log(value.indexOf("3"));
	
	//[4]부터 3을 검색하게 되므로 마지막의 3이 매치된다.
	js.log(value.indexOf(3,4));
	
	//[12]에 엘리먼트가 존재하지 않으므로 -1반환
	js.log(value.indexOf(3,12));
	
    //음수이면 length를 더해 인덱스로 사용하며
	//(6-1) 인덱스부터 검색하게 되어 마지막 3의 인덱스 반환
	js.log(value.indexOf(3,-1));
	
	//String오브젝트와 Array 오브젝트의 indexOf()가 있음
	//두 번째 파라미터에 음수 값을 지정했을 때 반환 값이 다르므로
	//호출하기 전에 체크할 필요가 있다.
	
	//String 오브젝트에서 두 번째 파라미터에 음수 값을 지정하면
	//0번 인덱스로 간주하여 처음부터 검색
	js.log('ABCABC',indexOf('c',-1));
	
	//Array 오브젝트에서 두 번째 파리미터에 음수 값을 지정하면
	//음수 값에 배열 length를 더해 인덱스로 사용
	js.log(['A','B','C','A','B','C'].indexOf('C',-1));
	*/

	/*------------------[Array lastIndexOf()메소드 ]----------------------------
	 ----------------------------------------------------*/
	
	/*js.log( [1,2,3,1,2,3].lastIndexOf(2));*/
	
	/*------------------[JSON parse()]----------------------------
	 ----------------------------------------------------*/
	
/*
	// 문자열 타입 "123" Number 타입으로 변환
	
	var result = JSON.parse("123");
	js.log(result+", typeof : "+typeof result);
	
	//문자열 "ture"를 boolean 타입으로 변환
	//"TRUE","FALSE"와 같이 대문자 사용 불가. 소문자 사용
	result = JSON.parse("true");
	js.log(result +",typeof : "+typeof result);
	
	//문자열 "[]"를 배열 오브젝트로 변환 , 작은 따옴표,큰 따옴표 사용 가능
	js.log(JSON.parse("[]")+"typeof : "+typeof JSON.parse("[]"));
	
	//"ABC"와 같은 값에 큰따옴표를 사용하면
	//배열은 '[]'과 같이 작은 따옴표를 사용
	result = JSON.parse('["ABC","가나다"]');
	for(var k=0; k<result.length;k++){
		js.log(result[k]);
	}
	
	//null 일때
	result = JSON.parse("null");
	js.log(result +",typeof : "+typeof result);
	
	//undefined 일때 에러
	result = JSON.parse("undefined");
	js.log(result +",typeof : "+typeof result);
	
	
	//Object 타입으로 변환하고 for~in 문으로 출력
	//자바스크립트는 프리퍼티 이름인 "sports"에 따옴표를 사용하지 않으나
	//다른 곳에서 보내 줄 때에 따옴표를 사용해야 한다.
	//기본적으로 큰따옴표를 사용한다.
	result = JSON.parse('{"sports":"soccer","이름":"한수희"}');
	for(var name in result){
		js.log("name: "+name+", value :"+result[name]);
	};
	
	
	//두 번째 파라미터에 함수를 작성한 형태
	//파싱 대상 문자열에서 에러가 발생할 수 있으므로
	// try~catch 문 사용은 필수라고 할 수 있다.
	try{
		var tt = JSON.parse('{"soccer":"55","ball":"22"}',
		function(key,value){
			//undefined은 값을 삭제해서 오브젝트에서 날라가고
			//null은 값에 null을 넣는다
			//3번 걸림
			debugger;
			if(key === 'ball'){return 1+1; }
			
			return key === 'soccer' ? 11 : value;
		});		
	}catch(e){consloe.log("JSON 파싱 에러");}
	
	for(var key in tt){
		js.log("name: "+key+", value :"+tt[key]);
	};
	
	
	 * 1. 첫 번째 파리미터의 JSON 형태의 문자열을 파싱하면
	 * {soccer:55,ball:22}형태가 된다.
	 * 2. 두 번째 파리머티에 함수를 작성했으므로
	 * 파싱한 오브젝트를 하나씩 읽어가면서 함수를 실행한다.
	 * 3.함수에서 값을 반환하면 파싱한 값에 반영한다.
	 * 4.값이 변경되지 않으면 반환할 필요가 없다고 생각할 수 있으나
	 * 값을 반환하지 않으면 프로퍼티{이름:값}를 삭제한다.
	 * 또한 undefined를 반환하면 삭제한다.
	 * 5. 이렇게 편집한 오브젝트를 반환한다.
	 

	*/
	

	/*------------------[JSON stringify()]----------------------------
	 ----------------------------------------------------*/
	
	/*
	 
	  //숫자 타입을 문자열 타입으로 변환
	var result = JSON.stringify(123);
	js.log(result);
	js.log(typeof result);
	
	//Infinity , NaN , null은 문자열 "null"로 변환	
	js.log(JSON.stringify([Infinity,NaN,null]));
	
	//true , fasle는 값은 변하지 않고 문자열로 변환
	js.log(JSON.stringify([true,false]));
	//공백
	js.log(JSON.stringify(""));
	
	
	//undefined는 다양하게 변환된다.
	
	//파라미터에 직접 작성하면 문자열 "undefined"로 변환
	js.log(JSON.stringify(undefined));
	
	//배열에 작성하면 "null"로 변환
	js.log(JSON.stringify([undefined]));
	
	//프로퍼티 값으로 작성하면 프로퍼티(이름:값)를 제외시킴
	js.log(JSON.stringify({sports:undefined}));
	
	//[] 기호는 문자열로 변환되며
	//[] 안에 작은 따옴표가 큰따옴표를 변환된다.
	js.log(JSON.stringify(['ABC','가나다']));
	
	//'soccer'에서 작은따옴표가 큰따옴표를 변환되며
	//문자열 타입의 프로퍼티 이름과 값이 큰따옴표 안에 작성된다.
	//프로퍼티 값이 숫자, true, fasle , null은 변환하지 않는다
	js.log(JSON.stringify({sports:'soccer',player:11}));
	
	//두 번째 파라미터에 함수를 작성한 형태
	//함수에서 반환된 값을 프로퍼티 값으로 사용
	
	var result = JSON.stringify({sports:'soccer',player:55},
			function(key,val){
		//val 객체 자신이 넘어옴
		//alert(key);
		//debugger;
		return key === 'player' ? 11: val;
	});
	
	js.log(result);
	
	//세 번째 파라미터에 값을 작성한 형태
	// 세 번째 파라미터에 사람이 데이터를 보기 쉽게 하기 위한 것이다.
	
	//js.log()에서 오나전하게 표시되지 않으므로 consolo.log() 사용
	
	//오브젝트의 프로퍼티가 줄이 분리되어 표시
	// '\r'은 분리자
	console.log(JSON.stringify({sports:'soccer',player:11},'','\r'));
	
	
	//세 번째 파라미터에 숫자를 지정하면
	// 줄을 바꾸면서 숫자 값만큼 들여쓰기를 한다.
	console.log(JSON.stringify({sports:'soccer',player:11},'',4));
	
	//세 번째 파라비에 문자열을 작성하면
	//프로퍼티 이름 앞에 문자열을 삽입한다.
	//문자 수가 10이 넘으면 10까지만 표시한다.
	console.log(JSON.stringify({sports:'soccer',player:11},'','##'));
	*/

	
	/*------------------[Function new Function()]----------------------------
	 ----------------------------------------------------*/
	
/*	var obj = new Function('book','title',"return book+':'+title;");
	js.log(obj('책','자바스크립트','alert();'));
	
	obj = new Function('return 1+2;');
	js.log(obj());
	*/
	
	/*------------------[함수 선언문]----------------------------
	 ----------------------------------------------------*/
	
	/*function myHoome(book,video,audio){
		return book+video+audio;
	}
	
	js.log(myHoome('책,','비디오,','오디오'));
	*/
	
	
	/*------------------[함수 표현식]----------------------------
	 ----------------------------------------------------*/
	
	//함수 표현식으로 변수 이름이 함수 이름이 된다.
	/*var myHome = function(book,video,audio){
		return book+video+audio;
	};
	js.log(myHome('책,','비디오,','오디오'));*/
	
	/*
	 * 변수 할당과 함수 이름을 작성한 형태
	 * 1.inside 이름으로 Function 인스턴스를 생성하고 
	 *  outside에 할당한다.
	 *  2.함수 밖에서 inside() 함수를 호출하면 에러가 발생하므로
	 *  outside()를 호출하여 안으로 이동한 후 호출
	 *  3.함수 안에서 inside() 함수를 호출하는 것은 자신을 호출하는 것이며
	 *  무한으로 호출하게 되므로 함수가 종료되도록 조치를 취해야 한다.
	 *  자신을 호출하는 형태를 재귀 함수라고 한다.
	 *  4.변수 할당과 함수 이름을 같이 사용하는 것은 좋은 형태가 아니며
	 *  재귀 함수 호출은 다른 방법으로 할 수 있다.
	 *  좋은 방식 아님!!!
	 */
	
	/*var outside = function inside(param){
		if(param ===102){return param;}
		js.log(param);
		return inside(param+1);
	};
	js.log(outside(100));
	*/
	/*------------------[Function toString()]----------------------------
	 ----------------------------------------------------*/
	
/*	function getTotal(qty,price){
		var amount = qty * price;
		return amount - (amount / 10);
	};
	
	//js.log()는 들여쓰기가 표시되지 않으므로 consoloe.log()를 사용
	console.log(getTotal.toString());*/
	
	//개발 환경이 좋지 않은 웹 개발 초창기에 디버깅 용으로 사용
	
	/*------------------[Function call()]----------------------------
	 ----------------------------------------------------*/
	
/*	
	function getTotal(one,two){
		return one+two;
	};
	
    js.log(getTotal.call(this,10,20));*/
    
    
    /*------------------[Function apply()]----------------------------
	 ----------------------------------------------------*/
    
	/*function getTotal(){
		var total = 0;
		
		for(var k=0;k < arguments.length;k++){
			total += arguments[k];
		}
		return total;
	};
	
    js.log(getTotal.apply(this,[10,20,30]));*/
	
	
	/*------------------[Boolean  Boolean()]----------------------------
	 ----------------------------------------------------*/
	
	/*
	//문자열이고 값이 있으며로 ture 반환
	js.log("Boolean('1') :"+Boolean("1"));
	js.log("Boolean('0') :"+Boolean("0"));
	
	//문자열이지만 값이 없으므로 false 반환
	js.log("Boolean('') :"+Boolean(""));
	
	//0은 false
	js.log("Boolean(0) :"+Boolean(0));
	js.log("Boolean(1) :"+Boolean(1));
	*/
	
	/*------------------[Math abs()]----------------------------
	 ----------------------------------------------------*/
	
	/*js.log(Math.abs(-123));
	*/
	
	/*------------------[Math floor()]----------------------------
	 ----------------------------------------------------*/
/*
	//소수 이하 값을 버리고 정숫값을 반환
	js.log(Math.floor(5.3));
	
	//음수 값은 01을 더해 반환
	js.log(Math.floor(-1.7));
	
	
	js.log(Math.floor(NaN));
	js.log(Math.floor(Infitity));*/
	
	
	/*------------------[Math ceil()]----------------------------
	 ----------------------------------------------------*/
	/*
	//소수 이하 값을 버리고
	//남은 값이 양수이면 1을 더하여 반환
	js.log(Math.ceil(5.1));
	
	//남은 값이 음수이면 그대로 반환
	js.log(Math.ceil(-1.7));
	
	//0보다 작고 -1보다 크면 0을 반환
	js.log(Math.ceil(-0.3));
	*/
	
	/*------------------[Math round()]----------------------------
	 ----------------------------------------------------*/
	
	/*
	//값이 양수이면 소수 첫째 자리에서 반올림
	js.log("Math.round(5.1) :"+Math.round(5.1));
	js.log("Math.round(5.5) :"+Math.round(5.5));
	
	//값이 음수이면 소수 첫째 자리에서 반내림
	js.log("Math.round(-1.6) :"+Math.round(-1.6));
	js.log("Math.round(-1.3) :"+Math.round(-1.3));
	
	//0보다 크면서 0.5보다 작으면 +0을 반환
	js.log("Math.round(0.3) :"+Math.round(0.3));
	js.log("Math.round(0.6) :"+Math.round(0.6));

	//0보다 작으면서 -0.5이상이면 -0반환
	js.log("Math.round(-0.3) :"+Math.round(-0.3));
	js.log("Math.round(-0.6) :"+Math.round(-0.6));
	*/
	
	/*------------------[Math max()]----------------------------
	 ----------------------------------------------------*/
	/*
	
	//파라미터 값 중에서 가장 큰 값
	js.log("Math.max(5,3,9) :"+ Math.max(5,3,9));
	//배열 테스트
	js.log("Math.max([5,3,9]) :"+Math.max([5,3,9]));

	//파라미터를 작성하지 않으면 음수 무한대
	js.log("Math.max() :"+Math.max());
	
	//NaN이 하나라도 있으면 NaN
	js.log("Math.max(5,3,'AB') :"+Math.max(5,3,"AB"));
	
	//양수 무한대는 숫자에서 가장 큰 값
	js.log("Math.max(5,3,Infinity) :"+Math.max(5,3,Infinity));*/
	
	
	/*------------------[Math min()]----------------------------
	 ----------------------------------------------------*/
/*
	//파라미터 값 min에서 가장 큰 값
	js.log("Math.max(5,3,9) :"+ Math.min(5,3,9));
	//배열 테스트
	js.log("Math.min([5,3,9]) :"+Math.min([5,3,9]));

	//파라미터를 작성하지 않으면 양수 무한대
	js.log("Math.min() :"+Math.min());
	
	//NaN이 하나라도 있으면 NaN
	js.log("Math.min(5,3,'AB') :"+Math.min(5,3,"AB"));
	
	//양수 무한대는 숫자에서 가장 큰 값
	js.log("Math.min(5,3,Infinity) :"+Math.min(5,3,Infinity));*/
	
	/*------------------[Math randow()]----------------------------
	 ----------------------------------------------------*/

/*	js.log(Math.randow());
	js.log(Math.randow());
*/	
	

	/*------------------[Math log()]----------------------------
	 ----------------------------------------------------*/

/*	//5의 자연 로그 값
	js.log(Math.log(5));
	
	
	// 파라미터 값이 음수 또는 NaN 이면 NaN 반환
	js.log(Math.log(-1));
	
	// 0이면 음수 무한대
	js.log(Math.log(0));
	
	//1의 자연 로그 값은 0
	js.log(Math.log(1));
	*/
	
	/*------------------[Math cos()]----------------------------
	 ----------------------------------------------------*/
	/*
	js.log(Math.cos(Math.PI));
	
	js.log(Math.cos(Math.PI*2));
	
	//브라우저 마다 끝 자리 값이 차이나 날 수 있으므로 체크 필요
	//IE10과 3대 브라우저 값은 701
	js.log(Math.cos(90));
	
	//0은 1을 반환
	js.log(Math.cos(90));*/
	
	
	/*------------------[Math acos()]----------------------------
	 ----------------------------------------------------*/
	
	/*
	
   js.log(Math.acos(-1));
   
   js.log(Math.acos(0));
	
	js.log(Math.acos(1));
	*/

	/*------------------[Math sin()]----------------------------
	 ----------------------------------------------------*/
	/*
	js.log(Math.sin(Math.PI/2));
	js.log(Math.sin(0));
	js.log(Math.sin(1));
	*/
	
	/*------------------[Math asin()]----------------------------
	 ----------------------------------------------------*/
	
/*	
	js.log(Math.asin(1));
	js.log(Math.asin(-1));
	js.log(Math.asin(0));
	js.log(Math.asin(2));
*/	
	
	
	/*------------------[Math tan()]----------------------------
	 ----------------------------------------------------*/
	
/*	js.log(Math.tan(90));
	js.log(Math.tan(-90));
	js.log(Math.tan(0));
*/	
	
	/*------------------[Math atan()]----------------------------
	 ----------------------------------------------------*/
	
	/*js.log(Math.atan(1));
	js.log(Math.atan(-1));
	js.log(Math.atan(0));
	
	*/
	
	/*------------------[Math atan2()]----------------------------
	 ----------------------------------------------------*/
	/*
	js.log(Math.atan2(20,90));
	js.log(Math.atan2(90,20));
	*/
	
	/*------------------[Math sqrt()]----------------------------
	 ----------------------------------------------------*/
	/*
	js.log(Math.sqrt(25));
	js.log(Math.sqrt(0));
	js.log(Math.sqrt(-25));
	js.log(Math.sqrt(16));
	*/

	/*------------------[Math exp()]----------------------------
	 ----------------------------------------------------*/
	
	/*
	js.log(Math.exp(1));
	js.log(Math.exp(2));
	js.log(Math.exp(0));
	*/
	/*------------------[Math pow()]----------------------------
	 ----------------------------------------------------*/
	
	/*
	//10의 2승이므로 100 반환
	js.log(Math.pow(10,3));
	
	//10의 0승이므로 1반환
	js.log(Math.pow(10,0));
	
	//두 번째 파라미터를 지정하지 않으면 NaN
	js.log(Math.pow(10));
	
	js.log(Math.pow(-2,0.1));

*/	
	
	/*------------------[Date new Date()]----------------------------
	 ----------------------------------------------------*/
/*
	//현재 시간
	js.log(new Date());
	
	//날짜 지정
	js.log(new Date(2015 ,01));
	js.log(new Date(2015 ,00,25));
	js.log(new Date(2015 ,01,25,09));
	js.log(new Date(2015 ,01,25,09,11));
	js.log(new Date(2015 ,01,25,09,11,23));
	js.log(new Date(2015 ,01,25,09,11,23,123));
	
	
	//자동 넘김 
	//12월 33일을 지정하면 31일이 넘치므로 2를 남기고 
	//월 값에 1을 더한다.
	//월에 더한 결과가 11이 넘으면 다시 연도 값에 1을 더한다.
	js.log(new Date(2015 ,11,33));
	
	*/
	
	/*------------------[ES5 Object defineProperty()]----------------------------
	 ----------------------------------------------------*/
/*

	//오브젝트에 프로퍼티 추가
	var obj = {};
	Object.defineProperty(obj,"book",{value : 123});
	
	js.log(obj.book);
	
	//for문의 열거 불가
	for(var name in obj){
		js.log(name);
	}
	
	var obj2 = {};
	//for문의 열거 가능 처리
	Object.defineProperty(obj2,"book",{value : 123
	,enumerable : true	
	});
	
	//for문의 열거 가능
	for(var name in obj2){
		js.log(name);
	}
	
	
	var bookValue,obj = {};
	Object.defineProperty(obj,'book',{
	get:function(){
	return bookValue;
	},set:function(param){
		param = param + "(걸림)";
		bookValue = param;
	}
	
	});
	obj.book = "set작동";
	result = obj.book;
	js.log(result);
	
	*/
	
	/*------------------[ES5 Object [defineProperties()]----------------------------
	 ----------------------------------------------------*/

	/*var obj = Object.defineProperties({},{
		soccer:{value:'축구',eunmerable:true},
		basketball : {value:'농구'}
	});
	
	for(var name in obj){
		js.log(name);
	}*/
	
	
	/*------------------[ES5 Object getOwnPropertyNames()]----------------------------
	 ----------------------------------------------------*/
/*
	var obj = Object.defineProperties({},{
		soccer:{value:'축구',eunmerable:false},
		basketball : {value:'농구'}
	});
	
	var name2 = Object.getOwnPropertyNames(obj);
	
	for(var name in name2){
		js.log(name);
	}*/

	
	
};

