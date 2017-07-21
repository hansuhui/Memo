window.onload = function() {

	/*------------------[object 오브젝트]----------------------------
	
	 ----------------------------------------------------*/

	var obj = new Object();
	var number = new Number();
	var oneArray = new Array();
	var string = new String();

	/*
	 * js.log(ObjectTostring(obj)); js.log(ObjectTostring(number));
	 * js.log(ObjectTostring(oneArray)); js.log(ObjectTostring(string));
	 */

	/*------------------[글로벌 오브젝트]----------------------------
	 ----------------------------------------------------*/

	/*
	 * js.log(undefined); js.log(Infinity); js.log(NaN);
	 */
	/*------------------[isNaN()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * //숫자이므로 false js.log(isNaN(12)); //문자열 이지만 숫자로 변환할 수 있으므로 fasle
	 * js.log(isNaN("123")); //문자열이므로 true js.log(isNaN("AB")); //값을 지정하지 않으면
	 * true js.log(isNaN()); //null은 0으로 변환 되므로 false js.log(isNaN(null));
	 * //NaN과 NaN이 같이 않음 js.log(NaN === NaN);
	 */

	/*------------------[paresInt()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * //문자 타입이지만 숫자로 변환되며 변환된 값 반환 js.log(parseInt('-12'));
	 * 
	 * //10진수 정수로 변환하여 변환 js.log(parseInt('-12.345'));
	 * 
	 * 
	 * //13이 16진수 값이므로 19반환 0x는 16진수 표기 js.log(parseInt(13,16));
	 * js.log(parseInt("0x13"));
	 * 
	 * //101이 2진수 값이므로 5를 반환함 js.log(parseInt(101,2));
	 * 
	 * //파라미터 값을 지정하지 않으면 NaN js.log(parseInt());
	 * 
	 * //숫자로 변환하므로 첫 자리 0이 없어짐. 공백은 변환 제외 js.log(parseInt("011"));
	 * js.log(parseInt(" 123"));
	 * 
	 * //앞의 숫자만 변환하고 영문자 이후의 숫자는 변환하지 않음 js.log(parseInt("12345B444"));
	 */

	/*------------------[parseFloat()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * js.log(parseFloat("-123.45"));
	 * 
	 * js.log(parseFloat("-12e3"));
	 * 
	 * js.log(parseFloat(" 123 45 "));
	 */

	/*------------------[eval()]----------------------------
	 ----------------------------------------------------*/

	/* eval("js.log(parseFloat(' 123 45 '));"); */

	/*------------------[new Stringl()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var obj = new String(123); js.log(obj); // js.log(typeof obj);
	 */

	/*------------------[Stringl()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = String(123);
	 * 
	 * js.log(value); js.log(typeof value);
	 * 
	 * 
	 * js.log('123'===value);
	 * 
	 * js.log(String(false));
	 * 
	 * js.log(String(new Number(456)));
	 * 
	 * js.log(String(new Object()));
	 * 
	 */

	/*------------------[length ]----------------------------
	 ----------------------------------------------------*/

	/*
	 * //String 인스턴스생성 var value = "ABC"; js.log(value.length);
	 * 
	 * //Number 인스턴스생성 value = 12345; //Number에는 length가 없음
	 * js.log(value.length);
	 * 
	 * 
	 * //Nenber 인스턴스를 String으로 변경!! //변환시 String 오브젝트 생성하면서 //값은 프리미티브 속성으로 값이
	 * 들어간다.!! js.log(value.toString().length);
	 * 
	 * 
	 * //자바스크립트는 KeyValue 값을 각각 가지고 있다. //index로 값이 각각 분리 되어있음. value = "ABC";
	 * js.log(value[0]); js.log(value[1]); js.log(value[2]);
	 * 
	 * var len = value.length;
	 * 
	 * for(var k=0;k<len;k++){ js.log(value[l]); };
	 */

	/*------------------[valueOf() ]----------------------------
	 ----------------------------------------------------*/
	/*
	 * //123을 문자열로 변환하여 인스턴스 생성 //인스턴스의 프리미티브벨류 값이 출력됨 var obj = new
	 * String(123); js.log(obj);
	 * 
	 * //인스턴스 생성과 메소드 호출을 연결하여 작성 js.log(new Strign("ABC".valueOf()));
	 * 
	 * //문자열을 작성한 형태 js.log("문자열".valueOf());
	 */

	/*------------------[charAt() ]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = "SPORTS"; js.log(value.charAt(1));
	 * 
	 * //12번째가 존재하지 않으므로 빈 문자열 반환 js.log(value.charAt(12));
	 * 
	 * //ES5에서 사용 가능 js.log(value[3]);
	 * 
	 * 
	 * //31번째가 존재하지 않으며 undefined 반환 //chatAt()이 빈문자열을 반환하는 것과 차이있음 // 개념적으로 볼 때
	 * undefined를 반환하는 것이 맞다. //인덱스 번째에 빈 문자열을 작성할 수있다. js.log(value[31]);
	 */

	/*------------------[charCodeAt()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "azAZ소녀시대"; for(var k=0;k< value.length;k++){
	 * js.log(value.charCodeAt(k)); }
	 * 
	 * //인덱스를 넘어가면 NaN js.log(value.charCodeAt(12));
	 */

	/*------------------[fromCharCode()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "azAZ소녀시대"; var s = ""; for(var k=0;k< value.length;k++){ s =
	 * value.charCodeAt(k); js.log(String.fromCharCode(s)); };
	 */

	/*------------------[concat()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * //작성한 순서로 문자열은 연결하여 반환 js.log("sports :".concat(" 축구:11"));
	 * 
	 * //인스턴스를 생성하고 프리미티브 값과 ABC 연결 js.log(new String(123).concat("ABC"));
	 */

	/*------------------[indexOf()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "123123";
	 * 
	 * //왼쪽에서 3번쟤 값 반환 //두번째 파라미터를 지정하지 않았으므로 처음부터 검색 js.log(value.indexOf(3));
	 * 
	 * //4번째부터 3을 검색하므로 5변환 js.log(value.indexOf(3,4));
	 * 
	 * //두번째 파라미터 값이 0보다 작으면 처음부터 검색 js.log(value.indexOf(3,-1)); //두번째 파라미터 값이
	 * length 보다크면 //검색되지 않으므로 -1반환 js.log(value.indexOf(3,15)); //NaN이므로 처음부터
	 * 검색 js.log(value.indexOf(3,"A"));
	 * 
	 * var result = isContain("12345",3,0); js.log(result ? "있음" : "없음");
	 * 
	 * js.log(isContain('12345',3,11)? "있음":"없음");
	 */

	/*------------------[lastIndexOf()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "123";
	 * 
	 * //뒤에서 부터 검색 시작 js.log(value.lastIndexOf(3));
	 */

	/*
	 * js.log("123".indexOf(null)); // -1 js.log("123".indexOf(undefined)); //
	 * -1 js.log("123".indexOf(1)); //1이 0번째 인텍스에 있으므로 0
	 * js.log("123".indexOf("1")); //1이 0번째 인텍스에 있으므로 0
	 * js.log("123".indexOf("ggg")); //일치하는 값이 없으니 -1 js.log("123".indexOf(3)); //
	 * 3이 2번째 인덱스에 있으니 2 js.log("123".indexOf(true)); // -1
	 * js.log("1230-1".indexOf(false)); // -1
	 * js.log("1230-1false".indexOf(false.toString())); // -1
	 * js.log("1301+12".indexOf(1+1)); // 계산해서 변환
	 */

	/*------------------[localeCompare()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "가";
	 * 
	 * js.log(value.localeCompare("나"));
	 */

	/*------------------[match()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "Sports"; //대소문자를 구문하므로 수문자 s를 매치 var result =
	 * value.match(/s/); js.log(result);
	 * 
	 * 
	 * 
	 * //매치 결과가 배열로 반환되는 것을 확인 js.log(Array.isArray(result));
	 * 
	 * 
	 * //대소문자를 구분하지 않고 매치 js.log(value.match(/S/g));
	 */

	/*------------------[replace()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "abcabc";
	 * 
	 * js.log(value.replace(/a/g,"바뀜"));
	 */

	/*------------------[trim()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = " abce";
	 * 
	 * js.log(value.length);
	 * 
	 * var result = value.trim(); js.log(result.length);
	 * 
	 */

	/*------------------[search()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "cbacba"; // 매치된 첫 번째 인덱스 바환 js.log(value.search(/a/g));
	 */
	// 매치되지 않으면 -1 반환
	/*------------------[substring()]----------------------------
	 ----------------------------------------------------*/

	// 파라미터 값이 음
	/*
	 * var value = "12345";
	 * 
	 * //음수 값이면 0으로 간주 js.log(value.substring(-1,2));
	 * 
	 * //1번째 파라미터가 그면 값을 2번째와 바꿔서 처리 js.log(value.substring(5,2));
	 * 
	 * //NaN은 0으로 간주
	 */

	/*------------------[substr()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "01234567"; // 012 js.log(value.substr(0, 3)); // 34567 3번째
	 * 인덱스부터 시작 js.log(value.substr(3));
	 */

	/*------------------[split()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = "_012_345"; // _ 단위로 문자열을 분리하여 배열로 반환 //처음에 빈 문자열이 반환된 것은
	 * //분리자 앞 또는 뒤에 문자열이 없으면 빈 문자열을 반환 하기 때문 js.log(value.split('_'));
	 * 
	 * //반환 수가 2이고 앞에서 부터 반환하므로 //세번째인 345가 반횐되지 않는다.
	 * js.log(value.split('_',2));
	 * 
	 * //빈문자열 전부 자름 js.log(value.split(""));
	 */

	/*------------------[대소문자 변환]----------------------------
	 ----------------------------------------------------*/
	/*
	 * js.log("ss".toLowerCase()); //소문자 js.log("ss".toUpperCase()); // 대문자
	 */

	/*------------------[new Number()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var obj = new Number(123);
	 * 
	 * js.log(obj); //NaN js.log(new Number('ABC'));
	 */

	/*------------------[Number()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * js.log(Number(456));
	 * 
	 * js.log(Number());//파라미터 없으면 0 js.log(Number(0x14)); // 16진수 10진수로 변환
	 * js.log(Number(null)); // 0으로 변환 js.log(Number(undefined)); // NaN
	 * js.log(Number(true)); // 1 js.log(Number(false)); // 0
	 * 
	 * //인스턴스를 지정하면 프리미티브 값을 반환 js.log(Number(new Number(789)));
	 */

	/*------------------[Number toString()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value =17;
	 * 
	 * js.log(17 === value.toString());
	 * 
	 * //17을 16진수로 변환 js.log(value.toString(16));
	 */

	/*------------------[Number toExponential()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = 34;
	 * 
	 * js.log(value.toExponential(1)); // 3.4e+1
	 * 
	 * value = 123456789; js.log(value.toExponential());
	 */

	/*------------------[Number [toFixed()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * 
	 * var value = 1234567;
	 * 
	 * //소수 두 자리까지 표시하며 셋째자리에서 반올림 js.log(value.toFixed(2));
	 * 
	 * //파라미터를 지정하지 않으면 소수이하 첫 자리에서 반올림 js.log(value.toFixed(0));
	 */

	/*------------------[Array length 프로퍼티]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [1,2,3];
	 * 
	 * js.log(value.length);
	 * 
	 * //length 프로퍼티 값을 변경하면 배열에 반영됨 //length 값을 5로 늘리면 엘리면트에 undefined 설정
	 * value.length = 5; js.log(value);
	 */

	/*------------------[Array 엘리먼트 추가]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = [1,2];
	 * 
	 * //인덱스 [4]에 5을 삽입하면 배열이 늘어나면서 //[2]와 [3]에 undefined 설정 data[4] = 5;
	 * js.log(data);
	 * 
	 * //변수 값을 인덱스로 사용 //(value +1)은 표현식으로 먼저 표현식을 평가하고
	 */
	/*------------------[delete 연산자]----------------------------
	 ----------------------------------------------------*/

	/*
	 * //변수 삭제
	 * 
	 * var value = 123; js.log(delete value);
	 * 
	 * //var 키워드를 사용하지 않으면 글로벌 변수가 되며 //delete 연산자로 삭제할 수 있다.
	 * 
	 * globalVar = 123; js.log(delete globalVar);
	 * 
	 * try{ js.log("globalVar : ",globalVar); }catch(e){js.log("globalVar
	 * 삭제됨");}
	 * 
	 * 
	 * var book = { title : "책", author : "저자" }
	 * 
	 * //오브젝트의 title 프로퍼티가 삭제된다. //삭제 되었으므로 undefined가 반환 js.log(delete
	 * book.title); js.log(book.title);
	 * 
	 * //var 키워드로 오브젝트를 생성했으므로 삭제 불가 js.log(delete book);
	 * 
	 * //따라서 author 프로퍼티 값인 "저자"가 출력됨 js.log(book.author);
	 * 
	 * 
	 * //배열 삭제
	 * 
	 * var arrayValue = [12,34,56,78,9]; //배열의 [2]를 삭제한다 . true가 반환되므로 삭제 성공
	 * js.log(delete arrayValue[2]);
	 * 
	 * //삭제를 했으면 length 값이 5에서 4로 줄어야 하는데.. js.log(arrayValue.length);
	 * 
	 * //삭제한 인덱스에 undefined가설정된다. //이는 배열 삭제에 있어 프로그램 언어의 일반적인 메커니즘 //삭제를 하면 배일의
	 * 엘리먼트 위치를 당겨야 한다. //하지만 당기지 않고 undefuned를 설정한다.
	 * 
	 * for(var i=0;i<arrayValue.length;i++){ js.log(arrayValue[i]); }
	 * 
	 * //위 논리를 바탕으로 arrayValue[2]에 undefined를 설정하면 //배열 엘리먼트 위치의 조정 처리를 하지 않게
	 * 된다. arrayValue = [12,34,56,78,9]; arrayValue[2] = undefined;
	 * js.log(arrayValue[2]);
	 * 
	 * 
	 * //함수 프로퍼티 삭제 Sports.prototype.baseball ="야구"; var obj = new Sports();
	 * 
	 * //prototype 오브젝트로 생성한 인스턴스의 프로퍼티 삭제 불가 //ture가 반환되므로 삭제된 것으로 인식할 수 있다.
	 * js.log(delete obj.baseball );
	 * 
	 * //프로퍼티가 삭제되지 않고 프로퍼티 값이 출력된다. //이유는 Sports.prototype에 baseball 프로퍼티가 존재하기
	 * 떄문 //Sports.prototype에 연결되 프로퍼티는 다른 인스턴스에서 참조하므로 //생성한 모든 인스턴스의 baseball
	 * 프로퍼티를 삭제해야 하는데 논리에 어긋남 js.log(obj.baseball);
	 * 
	 * //prototype에 연결된 프로퍼티 삭제 , 삭제된다. js.log(delete
	 * Sports.prototype.baseball);
	 * 
	 * //prototype에 연결된 프로퍼티를 삭제한다면 인스턴스의 //프로퍼티도 삭제된다.
	 * js.log(Sports.prototype.baseball); js.log(obj.baseball);
	 */

	/*------------------[new Array()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * js.log(new Array());
	 * 
	 * js.log(new Array(12,34,56));
	 * 
	 * js.log(new Array([1,2,3])); //2차 배열
	 * 
	 * js.log(new Array(2)); //크기가 2인 배열 생성
	 */
	/*------------------[Array toString()]----------------------------
	 ----------------------------------------------------*/

	/* var result = [A,B,C].toString(); // A,B,C로 나옴 */

	/*------------------[Array concat()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [1,2];
	 * 
	 * //[1,2,3,4] //value 배열의 끝에 3과 4를 엘리먼트로 첨부하여 반환 js.log(value.concat(3,4));
	 * 
	 * //value 배열은 변경되지 않는다. js.log(value);
	 * 
	 * //[1,2,5,6] //파라미터가 배열이라도 값만 반영 js.log(value.concat([5],[6]));
	 */

	/*------------------[Array push()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [1,2];
	 * 
	 * js.log(value); js.log(value.push(3)); // 배열 끝에 추가 후 length 반환
	 * js.log(value[2]);
	 */

	/*------------------[Array unshift()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [1,2];
	 * 
	 * js.log(value); js.log(value.push(3)); // 배열 처음에 추가 후 length 반환
	 * js.log(value[2]);
	 */

	/*------------------[Array join()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [1,2];
	 * 
	 * //파라미터를 지정하지 않았으로 콤마를 분리자로 사용하여 //각 엘리먼트에 연결하고 연결된 것을 문자열로 연결하여 반환
	 * js.log(value.join());
	 * 
	 * //엘리먼트와 "##"을 연결 js.log(value.join("##"));
	 * 
	 * //엘리먼트와 빈 문자열을 연결, 사용 빈도수 높음 js.log(value.join(""));
	 * 
	 * js.log(ArrayJoin(value,"연결"));
	 */

	/*------------------[Array join(),push()테스트]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var htmlArray = [];
	 * 
	 * htmlArray.push("<ul>"); for(var i =1;i<=10;i++){ htmlArray.push("<li id=id"+i+">id"+i+"</li>"); }
	 * htmlArray.push("</ul>");
	 * 
	 * document.body.innerHTML = htmlArray.join("");
	 */

	/*------------------[Array pop()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = [1,2,345];
	 * 
	 * //마지막 엘리먼트를 삭제하고 삭제한 엘리먼트를 반환 var result = value.pop();
	 * 
	 * //삭제 후 value 배열 js.log(value);
	 * 
	 * //삭제한 엘리먼트 값 js.log(result);
	 * 
	 * //빈 배열은 삭제할 수 없으며 undefind가 반환됨 js.log([].pop());
	 */

	/*------------------[Array shift()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [ 1, 2, 345 ];
	 *  // 마지막 엘리먼트를 삭제하고 삭제한 엘리먼트를 반환 var result = value.shift();
	 *  // 삭제 후 value 배열 js.log(value);
	 *  // 삭제한 엘리먼트 값 js.log(result);
	 *  // 빈 배열은 삭제할 수 없으며 undefind가 반환됨 js.log([].shift());
	 */

	/*------------------[Array shift()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = [ 4,3,2,1]; var result = value.sort();
	 * 
	 * //sort한 후 반환된 배열 js.log(result);
	 * 
	 * //sort 대상인 value 배열도 sort된다. js.log(value);
	 * 
	 * //왼쪽에서 오른쪽으로 문자 하나씩 정렬 //따라서 A01이 A1보다 앞에 온다.
	 * js.log(['A1','A01','B2','B02'].sort());
	 * 
	 * 
	 * //null,undefiend는 끝으로 이동 js.log([,78,12,null].sort());
	 * 
	 * var value = [101,26,7,1234]; value.sort();
	 * 
	 * //sort 결과를 보면 사람이 생각하는 것과 다르다. //[7,26,101,1234]가 사람이 생각하는 sort이다.
	 * //유니코드를 기준으로 비교하기 때문에 순서가 다르다 js.log(value);
	 * 
	 * //이렇게 정렬된 이유는 자바스크립트가 숫자를 문자열로 변환하고 //앞에서 부터 하나씩 유니코드로 비교하여 sort하기 때문이다.
	 * 
	 * //즉 101과 23에서 1이 2보다 작ㅈ으므로 다음 값은 바교하지 않고 //101이 26보다 작다고 인식하기 떄문이다.
	 * 
	 * //두번째 파라미터에 함수를 작성하여 //사람이 인식하는 정렬방법으로 바꿔야 한다.
	 * 
	 * value = [101,26,7,1234];
	 * 
	 * value.sort(function(one,two){ return one-two; });
	 * 
	 * //작은 값부터 표시되었으므로 정산으로 sort가 된것이다. js.log(value);
	 * 
	 * 
	 * 
	 * *sort 알고리즘 **
	 * 
	 * 1.sort()에서 function(){}를 호출하면 101과 26을 파라미터 값으로 넘겨준다.
	 * 
	 * 2.(101-26) 결과는 양수이며 0보다 큰 값을 반환한다. -sort()는 0보다 큰 값이 반환되면 배열에서 값의 위치를
	 * 바꾼다. -따라서 [26,101,7,1234]가 된다.
	 * 
	 * 3.다시 함수를 호출하면서 101과 7을 넘겨 준다. -(101-7)은 양수이며 0보다 큰 값을 반환한다. -반환 값이 0보다
	 * 크므로 배열에서 값의 위치를 바꾼다. -따라서 [26,7,101,1234]가 된다.
	 * 
	 * 4.다시 함수를 호출하면서 101과 1234를 넘겨준다. -(101-1234)는 음수이며 0보다 작은 값을 반환한다. -sort()
	 * 0보다 작거나 같으면 배열에서 값의 위치를 바꾸지 않는다. -따라서 [26,7,101,1234]가 된다.
	 * 
	 * 5.이와 같은 방법으로 다시 처음으로 돌아가 바뀌는 것이 없을때까지 배열의 엘리먼트 위치를 조정한다.
	 * 
	 * 
	 * 
	 * 
	 * value = [101,26,7,1234];
	 * 
	 * //역순으로 계산하기 value.sort(function(one,two){ return -(one-two_; });
	 * js.log(value);
	 */

	/*------------------[Array reverse()]----------------------------
	 ----------------------------------------------------*/
	/*
	 * var value = [101,26,7,1234,1,2,3,4];
	 * 
	 * js.log(value); value.reverse();
	 * 
	 * js.log(value);
	 */

	/*------------------[Array slice()]----------------------------
	 ----------------------------------------------------*/

	/*
	 * var value = [1,2,3,4,5,6,7];
	 * 
	 * //[1]부터 [3]직전까지 반환 js.log(value.slice(1,3));
	 * 
	 * //[4]부터 끝까지 반환 js.log(value.slice(4));
	 * 
	 * //첫 번째 파라미터 값이 두번째 보다 크면 빈 배열 반환 js.log(value.slice(4,3));
	 * 
	 * //파라미터 값이 음수면 length 값을 더해 사용 //length가 7이므로 (3,5)
	 * js.log(value.slice(-4,-2));
	 * 
	 * 
	 * //파라미터 값이 음수이므로 length 값을 더하면(5,3) //첫 번째 파라미터 값이 두 번째보다 크면 빈 배열 반환
	 * js.log(value.slice(-2,-4));
	 */

	/*------------------[Array splice()]----------------------------
	----------------------------------------------------*/
	
	/*
	var value = [1,2,3,4,5,6];
	var result = value.splice(1,3);
	
	//삭제한 엘리먼트
	js.log(result);
	
	//삭제 후의 value 배열
	js.log(value);
	
	//[1]부터 3개 엘리먼트를 삭제하고 'A'와 'B'를 삽입
   value = [1,2,3,4,5,6];
   value.splice(1,3,'A','B');
   
   js.log(value);
   
   
   //음수 값은 length 프로퍼티 값을 더해 사용
   //(6-3)이 되어 [3]부터 끝까지 삭제
   value =  [1,2,3,4,5,6];
   value.splice(-3);
   js.log(value);
   
   //음수 값에 length 프로퍼티 값을 더해도 음수가 되면 0으로 간주
   //[]부터 2개 삭제
   value =  [1,2,3];
   value.splice(-7,2);
   js.log(value);
   
   //두 번째 파라미터가 삭제할 수를 나타내며 0이므로 삭제할 것이 없다.
   //[1]에 456을 삽입하므로 [1,456,2,3]이 된다.
   value =  [1,2,3];
   value.splice(1,0,456);
   js.log(value);*/
   
   /*------------------[Array isArray()]----------------------------
	----------------------------------------------------*/
  /* js.log(typeof [1,2] );
   
   js.log(Array.isArray([1,2]));
   
   //fallback 함수
  //함수가 없을때 대신 호출되는 함수를 의미한다.
   
   //현재 환경은 ES5를 지원하므로 Array.isArray가 존재한다.
   //따라서 존재하는 것으로 체크해야 함수 코드가 대체된다.
   if(!Array.isArray){
	   Array.isArray = function(args){
		   return Object.prototype.toString().call(args) ==="[object Array]";
	   };
   };
   
   //반환 값이 true이며 배열을 나타낸다
   js.log(Array.isArray([1,2]));*/
	
	
	/*------------------[Array forEach()]----------------------------
	----------------------------------------------------*/
	
	[1,2,3].forEach(function(element, index ,list){
		js.log("value:" +element+";index:"+index);
	});
	
	
};

// 함수 프로퍼티 삭제

function ArrayJoin(array, set) {
	return array.join(set);
}

function Sports() {
};

function ObjectTostring(obj) {
	// debugger
	return obj.toString().replace("object", "").replace("[ ", "").replace("]",
			"");

}

function isContain(value, compare, start) {
	return value.indexOf(compare, start) > -1;
}
