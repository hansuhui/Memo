var http = require('http');

// HTTPRequest �� �ɼ� ����
var options = {
   host : 'localhost',
   port : '8081',
   path : '/index.htm'
}


//�ݹ� �Լ��� Response�� �޾ƿ´�.
var callback = function(response){
  //response �̺�Ʈ�� �����Ǹ� �����͸� body�� �޾ƿ´�.
  var body = '';
  response.on('data',function(data){
     body += data;
  });


  // end �̺�Ʈ�� �����Ǹ� ������ ������ �����ϰ� ������ ����Ѵ�.
  response.on('end',function(){
     //������ ���� �Ϸ�
     console.log(body);
  });

var req = http.request(option, callback);
req.end();


}