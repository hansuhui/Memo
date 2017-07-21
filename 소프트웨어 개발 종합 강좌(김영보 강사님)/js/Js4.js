window.onload = function() {

	/*-----------------------[ ]-----------------------*/
};


/*-----------------------[함수 선언문]-----------------------*/

/*function myHome(book,video,audio){
	return book+" "+video+" "+audio;
}

js.log(myHome("책","비디오","오브젝트"));*/

/*-----------------------[함수 표현식]-----------------------*/

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

/*-----------------------[함수 해석 순서]-----------------------*/

/*
function sports(){
	debugger;
	var player = 11;
	
	function soccer(){
		return player;
	}
	var swim = function(){}
	soccer();
}
debugger;
sports();

*/

/*
	[코드 작성형태]
	1. player 변수 선언
	2. 다음에 함수 선언문 작성
	{코드} function soccer(){return player;}
	3.다음에 함수 표현식 작성
	{코드} var swim = function(){}
	4, 마지막 줄에서 soccer(); 함수 호출

	[해석 순서 및 설명]
	1. 마지막 줄에서 sports 함수를 호출하면
	-두번째  줄에서 debugger에서 실행이 멈춥니다.
	2. 이때 player와 swim 값은 undefined 이고
	soccer는 function soccer(){} 입니다.
	3. 첫번째 줄에서 멈추었는데 soccer에 Function 오브젝트가
   	설정된 것은 function soccer(){} 문장을 수행한 것을 의미합니다.
   	또한 player 와 swim에 설정된 undefined도 값이며 수행한 것을 의미
   	수행하지 않았다면 player와 swim 자체가 표시되지 않습니다.
   
 4. swim은 현재 변수만 선언된 상태이며 다음 창에서 이에 대해 살펴봅니다.
   
*/

/*-----------------------[함수 앞에서 호출]-----------------------*/

//baseball 함수 앞에서 baseball 함수를 호출 하지만
//함수를 호출하기 전에
//함수 선언문을 Funcion 오브젝트로 생성하므로 호출 가능
//호이스팅(hoisting)

/*
function sports(){
	baseball(); //3단계 실행 이므로 실행됨
	function baseball(){console.log("야구");} //1단계 선언!!!
}
sports();

*/

/*-----------------------[함수 선언문 오버라이딩]-----------------------*/

/*
function sports(){
	function soccer(){
		js.log("축구1");
	}
	//여기서 호출
	soccer();
	
	function soccer(){
		js.log("축구2");
	}
	
}
 sports();

*/
/*
//[테스트]
//아래의 함수 코드를 작성하세요.
//함수 표현식과 함수 선언문 사용 이해

// - 함수 작성 순서
// 함수 이름이 같으며 가운데에서 함수를 호출

// 함수 선언문 , 함수 호출 , 함수 선언문
// 함수 표현식 , 함수 호출 , 함수 표현식
// 함수 선언문 , 함수 호출 , 함수 표현식
// 함수 표현식 , 함수 호출 , 함수 선언문

*/

/*function ss (){
	function s1(){console.log("s1");}
	s1();
	function s1(){console.log("s1_2");}
	
	var s2 = function (){console.log("s2");};
	s2();
	s2 = function (){console.log("s2_2");};
	
	function s3(){console.log("s3");}
	s3();
	var s3 = function (){console.log("s3_2");};
	
	var s4 = function (){console.log("s4");};
	s4();
	function s4 (){console.log("s4_2");}
	
	
}
ss();*/

 /*-----------------------[파라미터 매핑]-----------------------*/
/*
function getTotal(qty,price){
	if(qty !== undefined && price !== undefined 
			&& !isNaN(Number(qty))&&!isNaN(Number(price)))
	{return qty * price;}
	return undefined;
}

js.log(getTotal(100));
js.log(getTotal(100,77));
js.log(getTotal(100,60,5000));
*/


/*-----------------------[arguments]-----------------------*/
/*
function get(){
	if(arguments[0] !== undefined 
	&& arguments[1] !== undefined 	 	
	){ return arguments[0] * arguments[1]; }
	return undefined;
}

js.log(get(50,70));
*/

/*
[함수 호출]
1. get(50,70) 함수를 호출합니다.
-[설명] 50,70을 파라미터로 넘겨 줍니다.

//함수 실행
2. 호출받는 함쉐 파라미터를 작성하지 않았으르로
-호출한 함수의 파라미터 값을 할당할 수 없습니다.
3. 호출받은 함수 안에 arguments 오브젝트를 생성하여 설정합니다.
-[설명]  함수가 Function 오브젝트이므로
- arguments 오브젝트를 설정할 수 있습니다.

5,get 함수 안에 작성한 코드를 실행합니다.
6.arguments 오브젝트에 설정한 값을 파라미터 값으로 사용합니다.
7.호출된 함수를 종료합니다.
-[설명] arguments 오브젝트에 null을 설정합니다.
-오브젝트에 null 설정은 삭제와 같습니다.
8.함수에서 처리한 결과를 호출한 함수에 반환합니다.

*/

/*-----------------------[오브젝트 ,배열 형태]-----------------------*/
/*
function get(){
	var k , key , param , total = 0; 
	for(k = 0; k<arguments.length;k++){
		param = arguments[k];
		if(Array.isArray(param)){
			param.forEach(function(value){total += value;},this);
			js.log("total:",total);
		}else if(typeof param === 'object'){
			for(key in param){
				js.log('key : ', param[key]);
			}
		}else{
			js.log(param);
		}
	}
}

get({soccer: 11},[1,2,3],789);
*/


/*-----------------------[Scope]-----------------------*/


/*function sales(){
	function get(){
		function discount(){
			
		}
		discount();
	};
	get();
}
sales();

*/

/*-----------------------[strict 모드]-----------------------*/

/*
 * 'use struct';
outside = 'global';
var getValue = function (){
	inside = 'local';
		return inside;		
};
js.log(getValue());
*/

/*-----------------------[스코프 바인딩]-----------------------*/

/*
function sports(){
	var value = 123;
	function soccer(){
		return value;
	};
	var baseball = function (){};
	console.log(baseball());
	debugger;
	baseball();
}

sports();
*/

/*-----------------------[동적 바인딩]-----------------------*/

/*
var soccer = {player : '11명'};
function sports(){
	var player = 123;
	with(soccer){ // 새로운 스코프 생성
		js.log("soccer : "+ player);
	}
	js.log("sports 지역변수 : "+player);
	
}

sports();
*/


/*-----------------------[실행 콘텍스트]-----------------------*/

/*function music(title){
	var musucTitle  = title; 
	
}
music('음악');
*/
/*
  1. music('음악'); 형태로 함수를 호출하면
  -엔진은 실행 콘텍스트를 생성하고 실행 콘텍스트 안으로 이동합니다.
  -실행 콘텍스트에서 함수 코드를 해석하고 실행합니다.
  -개념적으로 실행 콘텍스트에서 아래 처리를 합니다.
  -번호는 순서가 아닌 나열을 위한 것으로 특별하게 의미가 없습니다.
  
  //실행 콘텍스트 처리
  1. music() 함수를 호출하면서 "음악"을 파라미터로 넘겨줍니다.
  2.실행 콘텍스트를 생성합니다.
  3.렉시컬 환경 컴포넌트를 생성합니다.
  4.변수 환경 컴포넌트를 생성합니다.
  5.this 바인딩 컴포넌트를 생성합니다.
  6.호출한 함수 앞에 작성한 오브젝트를 this 바인딩 컴포넌트에 설정합니다.
  -설명 this.value 형태로 프로퍼티를 처리할 수 있게 됩니다.
  
  7.렉시컬 환경을 생성합니다.
  8.환경 레코드를 생성하여 렉시컬 환경에 첨부합니다.
  -설명 여기에 함수 안에 작성한 함수,변수를 바인딩합니다.
  9. 외부 렉시컬 환경 참조를 생성하여 렉시컬 환경에 첨부합니다.
  10.Function 오브젝트의 [[Scope]]를 외부 렉시컬 환경 참조에 설정합니다.
  11.렉시컬 환경을 렉시컬 환경 컴포넌트와 변수 환경 컴포넌트에 설정합니다.
  12.호출한 함수의 파라미터 값을 호출된 함수의 파라미터 이름에 매핑합니다.
  13.함수 선언문을 Function 오브젝트로 생성합니다.
  14.함수 표현식과 변수에 초깂값을 설정합니다.
  15.함수 안의 자바스크립트 코드를 실행합니다.
  
  // 추가 설명
  1.3번에서 11번까지 준비 단계이고
  --12번 , 13번 , 14번이 초기화 단계입니다.
  
  2.15번 이외의 모든 처리는 자바스크립트 엔진 내부 처리입니다.
  -따라서 실행 콘텍스트와 렉시컬 환경을 이해하지 못하고
  -함수에 작성된 코드를 논하는 것은 근거없는 논쟁이  될 수 있습니다.
  
  3. 실행 콘텍스트와 렉시컬 환경을 정확하게 이해하게 되면
  - 실행 결과에 대한 처리 과정을 증명할 수 있습니다.
  
  
*/


/*-----------------------[렉시컬 환경]-----------------------*/
/*
var value = 123;

var sports = function(){
	var value = 456;
	var getMember = function (){
		return value;
	};
	
};
sports();
*/
/*
   마지막 줄에서 sports 함수가 호출되면 렉시컬  환경(LE)을 생성합니다.
   
	1. sports 함수를 호출합니다.
	2.실행 콘텍스트를 생성합니다.
	3.렉시컬 환경(LE)을 생성합니다.
	4.환경 레코드 생성하여 렉시컬 환경에 첨부합니다.
	렉시컬환경(LE) = {
	환경 레코드(ER) : {}
	}

	5.외부 렉시컬 환경 참조를 생성하여 렉시컬 환경에 첨부합니다.
	렉시컬환경(LE) = {
	환경 레코드(ER) : {},
	외부 렉시컬 환경 참조(OLER) : null
	}
	
	6.외부 렉시컬 환경 참조를 설정합니다.
	렉시컬환경(LE) = {
	환경 레코드(ER) : {},
	외부 렉시컬 환경 참조(OLER) : 글로벌 렉시컬 환경
	}
	
	
*/

/*-----------------------[검색 메커니즘]-----------------------*/
/*
var sports = function (){
	var value = 123;
	function baseball(){
		js.log(value);
	};
	function swim(){
		js.log(value);
	}
	baseball();
	swim();
};
sports();
*/
/*
	1. 마지막 줄에서 sports 함수를 호출합니다.
	2.sports 실행 콘텍스트를 생성합니다.
	3. 렉시컬 환경(LE)을 생성합니다.
	4.환경 레코드를 생성하여 렉시컬 환경에 첨부합니다.
	-설명 : 함수 안에 작성한 변수 ,함수를 환경 레코드에 기록하지만
	- 이시점에서 함수 안에 코드를 해석하지 않았으므로 기록할 수 없으며
	- 환경 레코드만 생성합니다.
	5. 외부 렉시컬 환경을 참조를 생성하여 렉시컬 환경에 첨부합니다.
	6.외부 렉시컬 환경 참조에 값을 설정합니다.
	- 설명 : sports Function 오브젝트의 [[Scope]]를 외부 렉시컬 환경
			  참조에 설정
			  
	sports 렉시컬 환경 = {
	환경 레코드 = {},
	외부 렉시컬 환경 참조(OLER) : 글로벌 렉시컬 환경
	}
	//초기화 단계
	7.	함수 선언문을 Function 오브젝트로 생성하여 
	환경 레코드에 설정합니다.
	-코드 :  function scooer(){} function swim (){}
	8.value 변수를 환경 레코드에 바인딩 합니다. 값은 undefined	
	 sports 렉시컬 환경 = {
	환경 레코드 = {
	baseball : function(){},
	swim : function(){},
	value : undefined
	},
	외부 렉시컬 환경 참조(OLER) : 글로벌 렉시컬 환경
	}
			  
	// 실행 단계
	9. value 변수에 123을 할당합니다.
	-코드 : var value = 123;
	- 설명 : 환경 레코드의 value프로퍼티 값이 123이로 변경 됩니다.
	
	10.baseball 함수를 호출합니다.
	-함수가 호출되면 앞에서 sports() 함수를 처리했던 과정을 수행합니다.
	
	11.swim 함수를 호출합니다.
	-함수가 호출되면 앞에서 sports() 함수를 처리했던 과정을 수행합니다.
	
	//추가 설명
	1) baseball 함수에서 js.log(value) 문장을 실행하게 되면
	-함수 안에 value 변수가 없으므로
	-외부 환경 렉시컬 참조에서 검색하게 되며
	- value가 있으므로 값을 사용하게 됩니다.
	-swim 함수도 마찬가지입니다.
	
	2) baseball 렉시컬 환경이라는 하나의 통 속에
	-baseball 오브젝트의 변수/함수와
	sports 오브젝트의 변수/함수를 넣어두고 사용하는 모습입니다.
			  
			  
*/


/*-----------------------[검색 메커니즘]-----------------------*/

