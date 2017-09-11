var http = require('http');
var fs = require('fs');
var url = require('url');

//���� ����
http.createServer(function(req,res){
   var pathname = url.parse(req.url).pathname;

   console.log("Requst for "+ pathname + "received.");

   // ���� �̸��� ����ִٸ� index.html�� ����
   if(pathname == "/"){
     pathname = "/index.htm";
   }


   // ������ �б�
   fs.readFile(pathname.substr(1), function(err , data){
      if(err){
	console.log(err);
        // �������� ã�� �� ����
        // HTTP Status : 404 : NOT FOUND
        // Content Type : text/plain
	res.writeHead(404,{'Content-Type' : 'text/html'});
      }else{
        // �������� ã��
        // HTTP Status : 200 : OK
        // Content Type : text/plain
	res.writeHead(200,{'Content-Type' : 'text/html'});

        // ������ �о�ͼ� responseBody�� �ۼ�
        res.write(data.toString());
       }
     // responseBody ����
    res.end();
   });   
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");