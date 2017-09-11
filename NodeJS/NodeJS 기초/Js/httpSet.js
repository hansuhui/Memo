var http = require("http");

http.createServer(function(request,response){

   /*
     HTTP ��� ����
     HTTP Status : 200(OK)
     Content Type : text/plain
   */
   response.writeHead(200,{'Content-Type': 'text/plain'});

   /*
     Response Body �� "Hello Wolrd"�� ����
   */
   response.end("Hello Wolrd\n");

}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");