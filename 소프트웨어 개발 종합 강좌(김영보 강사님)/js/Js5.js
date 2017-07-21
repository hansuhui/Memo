

window.onload = function() {
	
};

/*-----------------------[this 바인딩 컴포넌트]-----------------------*/

/*var obj = {value : 123};
obj.getValue = function (){
 var amount = this. value;
 debugger;
}; 

obj.gerValue();
*/

/*
  설명
  소스의 목적은
  getValue 함수의 amount 변숫값이 123이 되는 원리를 알아보는 것이다.
  
  //123이 amount 변수에 할당되는 과정을 설펴봅니다.
  1.마지막 줄의 obj.getValue()를 만나 함수를 호출합니다.
  2.실행 콘텍스트를 생성합니다.
  3.3개의 컴포넌트를 생성합니다.
  -설명 : 컴포넌트 : 렉시컬/변수 환경 컨포넌트 , this 바인딩 컴포넌트
  
  4. this 바인딩 컴포넌트에 obj.getValue()에서 
  obj의 모든 프로퍼티를 설정합니다.
  this 바인딩 컴포넌트 = {
  value : 123,
  getValue : function (){...};
  }
  
  5.렉시컬 환경을 생성합니다.
  6.환경 레코드를 생성하여 렉시컬 환경에 첨부합니다.
  7.외부 렉시컬 환경 참조를 생성하여 렉시컬 환경에 첨부합니다.
  
  8.함수 선언문이 없으므로 함수의 첫 문장으로 이동합니다.
  9.var amount에서 amount를 렉시컬 환경의 선언적 환경 
    레코드에 바인딩합니다.
    - 설명 : 프로퍼티 이름이 amount이고 값은 undefuned입니다.
    
    10.함수의 첫 문장으로 이동하여 var amount = this.value를 실행합니다.
    
    11. this 바인딩 컴포넌트에서 value 프로퍼티를 검색합니다.
    - 설명  : 4번에서 호출한 함수가 속한 오브젝트의 프로퍼티를
    		   this 바인딩 컴포넌트에 설정한 성태입니다.
    12. this 바인딩 컴포넌트에 value 프로퍼티가 있으므로 123을 반환
    13. 반환받은 123을 amount 변수에 할당합니다.
    
    // 추가설명
    1) 함수가 호출되면 호출한 함수 앞에 작성한 오브젝트
    -즉, obj.getValue()에서 obj의 모든 프로퍼티를
     실행 콘텍스트의 this 바인딩 컴포넌트에 설정합니다.
  
 */

/*-----------------------[스택 흐름]-----------------------*/


/*
함수 실행 순차적으로 쌓인다 !! 
크롬에서 Call Stack을 보면 나온다 !!!
리턴을 만나면 빠져 나오면서 스택에서 빠진다.
*/

/*-----------------------[글로벌 코드 준비 단계]-----------------------*/
/*
debugger;
var value = 123;
function sports(){
	
};

var music = function(){};
sports();
*/
/*
  실행 콘텍스트 = {
  	글로벌 환경 : {
  		환경 레코드 : {
  		오브젝트 환경 레코드 : {
  			빌트인 글로벌 오브젝트 : {NaN : NaN , },
  			}
  		},
  		외부 렉시컬 환경: {글로벌 환경 : 글로벌 오브젝트 }
  	},
  }
  
  실행 콘텍스트 = {
  	렉시컬 환경 컴포넌트 = {
  			글로벌 환경 : {
  				환경 레코드 : {
  					오브젝트 환경 레코드 : {
  						빌트인 글로벌 오브젝트 : {NaN : NaN , },
  			}
  		}
  		, 
  	}
  }
  
  debugger로 멈춘 시점에서 Global 프로퍼티를 간단하게 설명
  Global 오브젝트의 프로퍼티와 함수도 같이 살펴봅니다.
   
   //글로벌 코드 실행 준비 과정
  1.글로벌 환경을 생성합니다.
  2.환경 레코드를 생성하여 글로벌 환경에 첨부합니다.
  
  3.오브젝트 환경 레코드를 생성하여 환경 레코드에 첨부합니다.
  1)빌트인 글로벌 오브젝트를 오브젝트에 환경 레코드를 바인딩합니다.
  2)따라서 빌트인 오브젝트의 값 프로퍼티(NaN,undefind, Infinity)와
    함수 프로퍼티(eval , parseInt , isNaN 등의 함수)가
    오브젝트 환경 레코드에 존재하게 됩니다.
    
   4.외부 렉시컬 환경 참조를 생성하여 글로벌 환경에 첨부합니다.
   - 설명 : 참조할 외부가 없으므로 외부 렉시컬 환경 참조에 null이 설정됩니다.
   
   5.글로벌 오브젝트를 생성합니다.
   -설명 : 글로벌 오브젝트에 설정됩니다.
   -설명 : 글로벌 환경과 글로벌 오브젝트 생성 순서가
      	     ES5 스펙에 작성되어 있지 않으므로 순서가 바뀔수 있지만
      	     순서가 바뀌더라도 처리에 영향을 주지 않습니다.
      	     
   6.실행 콘텍스트를 생성하고 엔진이 실행 콘텍스트 안으로 이동합니다.
   - 설명 : 글로벌 코드를 파라미터로 실행 콘텍스트에 넘겨 줍니다.
   
   7.렉시컬 환경 컴포넌트를 생성합니다.
   8. 1번에서 생성한 글로벌 환경을 렉시컬 환경 컴포넌트에 설정합니다.
   
   9.변수 환경 컴포넌트를 생성합니다.
   10.1번에서 생성한 글로벌 환경을 변수 환경 컴포는트에 설정합니다.
   
   11.this 바인딩 컴포넌트를 생성합니다.
   12. 5번에서 생성한 글로벌 오브젝트를 this 바인딩 컴포넌트에 설정합니다.
   1)글로벌 오브젝트를 this 바인딩 컴포넌트에 설정하므로
   -실행 콘텍스트에서 this.propertyName 형태로
    글로벌 오브젝트의 변수와 함수를 사용할 수 있습니다.
    2)실행 콘텍스트 안에서 호출된 함수에서 글로벌 오트젝트의 프로퍼티를
    -변동(추가,삭제,변경)힌 후 돌아왔을 때
    -this 바인딩 컴포넌트에 반영되어 있으므로 즉시 사용할 수 있습니다.
    
   
*/


/*-----------------------[함수 코드 환경 설정]-----------------------*/
/*
var obj = {};
obj .price = 100;
obj.music = function (one, two)
{
return one + two;	
};
obj.music(10,20);
*/
/*
  
  실행 콘텍스트 : {
   렉시컬 환경 컴포넌트 : {
  		환경 레코드 {
  			선언적 환경 : {one : 11 , two: 22}
  		},
  		외부 렉시컬 환경 : obj;
   },
  변수 환경 컴포넌트 : {
  	환경 레코드 {
  		선언적 환경 : {}
  			}
  		,외부 렉시컬 환경 : obj;
  },
  this 바인딩 컴포넌트 : {obj:{price: 100 ,music : function(){...}}}
}

  
  //함수 코드 실행 환경 설정
  1.실행 콘텍스트 생성합니다.
  2.세 개의 파라미터를 갖고 실행 콘텍스트 안으로 들어갑니다.
  -호출한 함수가 속한 오브젝트 , 함수 코드 , 호출한 함수의 파라미터 값
  
  3.렉시컬 환경 컴포넌트(LEC)를 생성합니다.
  4.변수 환경 컴포넌트(VEC)를 생성합니다.
  5.this바인딩 컴포넌트를 생성합니다.
  6.호출한 함수가 속한 오브젝트의 프로퍼티를 this 바인딩 컴포넌트에
    설정합니다.
    
    7.새로운 렉시컬 환경(LE)을 생성합니다.
    - 설명 : 7번 추가 설명을 참조하세요
    
    8.환경 레코드를 생성하여 생성한 렉시컬 환경에 첨부합니다.
    9.선언적 환경 레코드를 생성하여 환경 레코드에 첨부합니다.
    -설명 : 아직 함수 코드를 해석하지 않았으므로 빈 상태입니다.
    10.외부 렉시컬 환경 참조를 생성하여 렉시컬 환경에 첨부합니다.
    11.호출한 함수 오브젝트의 [[Scope]]를 외부 렉시컬 환경 참조에 설정합니다.
    
    12.렉시컬 환경(LE)을 렉시컬 환경 컴포넌트에 설정합니다.
    13.렉시컬 환경(LE)을 변수 환경 컴포넌트에 설정합니다.
    -설명 : 렉시컬 환경 컴포넌트와 변수 환경 컴포넌트의 초기값이 같게 됩니다.
    
    //7번의 추가 설명
    1) 빌트인 형태의 렉시컬 환경을 인스턴스로 생성합니다.
    2)오브젝트를 인스턴스로 생성하면 프로퍼티를 공유하게 되지만
    -공유가 아닌 단지 같은 형태의 헥시컬 환경을 생성한다는 의미입니다.
    
    
    이어서 ~
    [파라미터 값 매핑]
    
    1.호출한 함수에서 실행 콘텍스트에 넘겨준 파라미터 값을
    values라고 하겠습니다.
    -코드 : obj.sports(11,22,55)
    
    2.sports 오브젝트
	3.인덱스(index)로 values의 값을 구하기 위해 index에 0을
	  설정합니다.
	  
    
    
    */



/*
 파라미터 값을 선언적 환경 레코드에 설정한 후 아래를 처리합니다.
 1. 모든 함수 선언물을 Function 오브젝트로 생성하여
   - 선언적 호나경 레코드에 설정합니다.
  2.arguments 오브젝트를 선언적 환경 레코드에 바인딩합니다.
  3.모든 변수과 함수 표현식을 선언적 호나경 레코드에 바인딩 합니다.
  
  //함수 선언문 설정
  1.함수 코드의 첫 번째 줄부터 한 줄씩 아래로 내려가면서
    함수 선언문을 처리합니다.
 2.함수 선언문으로 Function 오브젝트를 생성합니다.
 3. 함수 이름과 Function 오브젝트를 선언적 환경 레코드에 설정 합니다.
  
  //arguments 오브젝트 바인딩
  1.선언적 환경 레코드에서 'arguments' 존재 여부 체크
  2.존재하면 3번과 4번을 처리하지 않습니다.
  -사용하면 안된다 구조가 깨짐
  3.arguments 오브젝트를 생성합니다.
  4. 생성한 arguments 오브젝트를 선언적 환경 레코드에 설정
  
  //변수 이름 바인딩
  1.함수 코드의 첫 번째 줄부터 한 줄씩 아래로 내려가면서 변수를
  바인딩 합니다.
  2.선언적 환경 레코드에서 변수 이름을 바인딩합니다.
  3.변수의 이름이 존재하면 설정하지 않습니다.
  - 설명 : 변수 이름과 함수 선언문의 함수 이름 또는 
  			 파라미터 이름이 같더라도 값이 대체되지 않고 유지됩니다.
  4. 변수 이름이 존재하지 않으면 값을 설정합니다.
  -설명 : 변수 초깃값으로 undefined를 설정합니다.
  
  
*/


/*-----------------------[try ~ catch]-----------------------*/

/*
function sprots(){
	try{
		var check = member;
	}catch(e){
		debugger;
		js.log(e.message);
		return "에러 메세지 실행";	
		}
}*/



/*-----------------------[Function 오브젝트 생성]-----------------------*/

/*
function sports(value){
	this.value = value;
}

sports.prototype.getValue = function(){
	return this.value +300;
};

var sportsObj = new sports(123);
js.log(sprtsObj.value);
js.log(sprtsObj.getValue());

*/
/*
   //인스턴스 생성 순서 및 방법
   1.sports 오브젝트를 생성합니다.
   - 코드 : function sports(value){...}
   2.sports.prototype에 getValue를 연결하고 function(){}을
   설정 합니다.
     sports.prototype.getValue = function(){
     	return this.value + 300;
     }
     - 설명 : sports.prototype이 오브젝트이므로
     			프로퍼티를 추가 할수 있습니다.
    3.sprots 오브젝트로 인스턴스를 생성하여 sportsObj에 할당합니다.
    - 코드 : var sportsObj = new sports(123);
    4.생성한 인스턴스에서 프로퍼티 이름으로 값을 출력합니다.
    -js.log(sportsObj.value);
    
    5.생성한 인스턴스의 메소드를 호출합니다.
    -js.log(sportsObj.getValue());
    -this.value + 300;에서 this는 sportsObj 인스턴스를 참조합니다.
    -prototype에 연결된 function(){}은 함수가 아닌 method 입니다.
 */


/*-----------------------[생성자 함수]-----------------------*/

/*
function Baseball(point){
	this.pont = point;
}

Baseball.prototype.getPoint = function(){
	return this.point;
}
var BaseballObj = new Baseball(7); 

*/

/*
	//new 연산자와 생성자 함수 실행 과정
	1. 엔진이 new 연산자를 만납니다.
	2.표현식(생성자 함수)을 편가하고 결과를 반환합니다.
	3.평가 결과 값이 오브젝트가 아니면 더이상 처리하지 않습니다.
	- 설명 : 오브젝트가 아니면 프로퍼티를 추가할 수 없기 떄문입니다.
	4. 평가한 오브젝트 
	- Baseball Function 오브젝트를 생성할 때
	   Baseball 함수를 참조하도록 [[Construct]]에 설정하였습니다.
	
	5.[[Construct]]에서 인스턴스를 생성하여 반환합니다.
	-설명 : 아래에서 처리과정을 다름니다.
	6.5번에서 반환된 오브젝트(인스턴스)를 반환합니다.
	'7.new라는 단어의 선입견으로 인해
	-new 연산자가 인스턴스를 생성하는 것으로 생각 할 수 있습니다.
	하지만 Baseball Function 오브젝트의 [[Construct]]를 실행하여
	인스턴스를 생성합니다.
	
	
	//[[Construct]]의 인스턴스 생성과정
	1.새로운 Objct 오브젝트를 생성합니다.
	2.생성한 오브젝트에 자바스크립트 내부 처리용 메소드를 설정합니다.
	3.오브젝트의 [[Class]]에 Object를 설정합니다
	- 따라서 생성한 인스턴스 타입은 object가 됩니다.
	4.Baseball 오브젝트의 [[Prototype]]에 설정된 프로퍼티를
	생성한 오브젝의 [[Prototype]]에 설정합니다.
	prototype 아래에 constructor가 있으며 같이 설정합니다.
	
	
*/


/*-----------------------[프로퍼티 공유 시점]-----------------------*/
/*
var sport = function(){};
sports.prototype.member = 123;
var sportsObj = new sports();

sports.prototpye.getMember = function(){
	return this.member;
}

debugger;
js.log(sportsObj.getMember());
*/

/*
	var sportsObj = new sports();
	1.sports 인스턴스를 생성하여 sports();
	--------------------------
	sports.prototype.getMember = function(){
	return this.member;
	}
	1.sportsObj의 원본인 sports.prototype에 getMember를 추가합니다.
	2.이미 생성한 모든 인스턴스에서 getMember를 호출하기 때문
	
	---------------
	sportsObj.getMember()
	1.sportsObj를 생성하는 시점에는 prototype에 getMember가
	없었으나 getMember()를 호출하기 전에 추가했으므로 사용할 수
	있습니다.
	
	******
    1.결과적으로 prototype에 연결된 프로퍼티로
      인스턴스를 생성하는 이유가 모호하다고 생각할 수있지만
      -원본에는 prototype 이외에도 프로퍼티를 연결할 수 있으며
       함수가 대표적인 경우입니다.
*/


/*-----------------------[인스턴스 프로퍼티]-----------------------*/
/*
var sports =  function(){};
sports.prototype.member = 123;
var sportsObj = new sports();
debugger;

sportsObj.member = 456;

js.log(sportsObj.member);
js.log(sportsObj.__proto__.member);
js.log(sports.prototype.member);
*/

/*-----------------------[this와 글로벌 오브젝트]-----------------------*/

/* js.log(this ===window);
 
 var price = 100;
 var globalPrice = this.price;
 this.amount = 123;
 
 js.log(this.amount);
 js.log(window.amount);
 js.log(this.price);
*/

 /*-----------------------[ this 참조 범위]-----------------------*/
/*
var sports = {
		value : 123,
		get :function (){
			js.log(this === window); //true
			js.log(this.value); // undefined;
		}
};

var Comp = sports.get();
Comp();

*/

/*
function get(){
	js.log("사과");	
}

var sports =function () {
		function get(){
			js.log("애플");	
		};
		this.get(); //사과
		get(); // 애플
};
sports();
*/

/*-----------------------[Function 오브젝트 생성 , 호출]-----------------------*/

/*
  var bonus = {
		value : 123,
		get : function(){
			return this.value;
		}
};
js.log(bonus.get()); //123

var fnObj = bonus.get.bind();
js.log(typeof fnObj); // function
js.log(fnObj());  //undefuned

fnObj = bonus.get.bind(bonus); 
js.log(fnObj); //123
*/
/*-----------------------[파라미터 병합]-----------------------*/
/*
var bonus = {
		get : function(){
			return Array.prototype.slice.call(arguments);
		}
};


var fnObj = bonus.get.bind(this,20,30);
js.log(fnObj(40,50));  //[20,30,40,50]
*/

/*-----------------------[bind() 할용]-----------------------*/
/*
window.onload = function(){
	var el = document.getElementById('clickID');
	el.onclick = show.bind(sports,el);
};

var sports = {
		value : 123
};
function show(element , event){
	js.log(element.textContent);
	js.log(event.target.id);
	js.log(this.value);
}
*/
/*
	var el = document.getElementById('clickID');
	el.onclick = show.bind(sports,el);
	1.buttib#clickID로 엘리먼트 오브젝트를 생성합니다.
	2.버튼을 클릭하면 onclick 이벤트가 발생하며
	-show.bind()가 실행되면 Function 오브젝트를 생성하여
	-onclick에 핸들러 함수로 설정합니다.
	4.sports는 show 함수에서 this로 참조하게 되며
	5. el은 파라미터 값으로 넘겨줍니다.
*/


/*-----------------------[Object 연결]-----------------------*/

/*
var baseball = {
		value : 123,
		getValue : function(){
			return this.value;
		}
};

var sports = {
		value : 456,
		getValue : function(){
			return this.value;
		},
		baseball : baseball
};
*/
//좋은 방법 아님!!



/*-----------------------[인스턴스 연결]-----------------------*/
/*
var baseball = {
		value : 123,
		getValue : function(){
			return this.value;
		}
};

var sports = {
		value : 456,
		getValue : function(){
			return this.value;
		},
		baseball : new baseball()
};
*/

/*-----------------------[Object.create()]-----------------------*/

/*
var baseball = {
		member : 123,
		setValue : function(param){
			this.member = param; //sports!!!
		}
};

var sports = Object.create(baseball,{
	member : {value : 456, writable : true},
	getValue : {
		value : function(){
			return this.member;
		}
	}
});

js.log(sports.getValue());
sports.setValue(789);
js.log(sports.getValue());

*/

/*-----------------------[재귀 함수]-----------------------*/
/*
var sports = {
		soccer : {member : 11, time : 90}
		,basketball : {member : 5,time :48}
};

function showValuse(sports){
	var type , obj;
	for(type in sports){
		obj = sports[type];
		typeof obj === 'object' ? 
				showValuse(obj) : js.log(type,":",obj);
	}
}
showValuse(sports);

*/

/*-----------------------[함수 자동 실행 과정]-----------------------*/
/*
var total = (1+2);
var value  = function(){
	return 123;
};
js.log("함수 호출 : ", value());
var value  = function(){
	return 465;
}();

js.log("자동실행 : ", value);
value = (function(){
	return 798;
})();

js.log(value);
(function(){
	js.log("ABC");
})();
*/





/*-----------------------[]-----------------------*/
