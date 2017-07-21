//작성자 H
//작성일 2015-12=12




/* 
  알아두기
var obj = new object(12345); //넘버오브젝트
alert(obj); //12345
var obj = new object("String"); //스트링오브젝트
alert(obj); //String
var obj = new object(true); //블리언오브젝트
alert(obj); //ture
인스턴스지만 바로 값을 출력하는 이유는 내부적으로 Primitive 값을 반환하기 떄문이다.

var obj = {} // Object Literal라고 칭함

[함수와 메소드]

함수와 메소드의 차이점은
함수는 오브젝트에 연결
메소는 Object.prototype에 연결

[Object.prototype 상속]
-모든 인스턴스에 object 인스턴스 상속
var obj = new Number(123);
Object.prototype에 연결된 메소드로 
인스턴스를 생성하여 obj에 상속

obj.__proto__; // object Number
obj.toString(); //하면 obj.prototype.toString()에 연결되는 구조

[prototype chain]
prototype 오브젝트에 오브젝트를 연결하고
연결된 오브젝트의 prototype에 다시 오브젝트를 연결
따라서 세 개의 오브젝트가 연결된 형태가 되며
이를 prototype chain 이라고 합니다.

연결법
function Sports(){}
Sports.prototype = {soccer : function(){}};

*/


//함수와 메소드의 차이!!
function Test() { };
Test.fn_Val = "Test 오브젝트 값";
Test.fn_Test = function () { alert("나는 Object에 속하니까 함수야."); }
//사용 하려면 Test.fn_Test()
//인스턴스에선 접근 불가!!!
//사용 하려면 var s = new Test() 인스턴스를 생성
//그후에 s.protoTest();

Test.prototype = { protoTest: function () { alert("나는 prototype에 속하니까 메소드야."); }, protoTestVal: "값도 들어가지" };

//그러니 이런씩으로 만들면 될꺼 같다.
var ObjTest = { s: 1, st: function () { return this.s; } };
ObjTest.prototype = {s : 1};



//new 연산자로 인스턴스를 생성하면
//해당 오브젝트의 prototype에 연결된 메소드로 인스턴스를 생성
//s는 Test.prototpye에 연결되었지요

//만약 s = new Number(123); 으로 Number 오브젝트를 생성하면
// s는 Number 오브젝트가 된다.



