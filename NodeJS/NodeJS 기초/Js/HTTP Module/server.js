var http = require('http');
var fs = require('fs');
var url = require('url');

//서버 생성
http.createServer(function(req,res){
   var pathname = url.parse(req.url).pathname;

   console.log("Requst for "+ pathname + "received.");

   // 파일 이름이 비어있다면 index.html로 설정
   if(pathname == "/"){
     pathname = "/index.htm";
   }


   // 파일을 읽기
   fs.readFile(pathname.substr(1), function(err , data){
      if(err){
	console.log(err);
        // 페이지를 찾을 수 없음
        // HTTP Status : 404 : NOT FOUND
        // Content Type : text/plain
	res.writeHead(404,{'Content-Type' : 'text/html'});
      }else{
        // 페이지를 찾음
        // HTTP Status : 200 : OK
        // Content Type : text/plain
	res.writeHead(200,{'Content-Type' : 'text/html'});

        // 파일을 읽어와서 responseBody에 작성
        res.write(data.toString());
       }
     // responseBody 전송
    res.end();
   });   
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");