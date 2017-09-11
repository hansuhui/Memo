var http = require('http');

// HTTPRequest 의 옵션 설정
var options = {
   host : 'localhost',
   port : '8081',
   path : '/index.htm'
}


//콜백 함수로 Response를 받아온다.
var callback = function(response){
  //response 이벤트가 감지되면 데이터를 body에 받아온다.
  var body = '';
  response.on('data',function(data){
     body += data;
  });


  // end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다.
  response.on('end',function(){
     //데이터 수신 완료
     console.log(body);
  });

var req = http.request(option, callback);
req.end();


}