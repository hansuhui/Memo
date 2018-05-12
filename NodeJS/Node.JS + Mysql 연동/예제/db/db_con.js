var mysql = require('mysql');
var config = require('./db_info').local;
 

var db_conn = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
  })

var db = {
    conn : db_conn,
    exec : function (sql,callback) {
        this.conn.query(sql, function (err, result) {
            callback(err, result)
         });        
    }
}


module.exports = db;
