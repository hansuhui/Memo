
var mysql = require('../db/db_con');


var Name ="/test";
module.exports = function(app){
  app.get(Name+'/list',function(req , res){
    mysql.exec('select * from test',function (err,result) {
      res.status(200).json(result);
    });
  });

  app.get(Name+'/test',function(req , res){
    if(req.query['s']){
      console.log(req.query['s']) 

    }else{
      console.log("없음") 
    }
   console.log(req.query) 
   //req.body['s']
  });
}