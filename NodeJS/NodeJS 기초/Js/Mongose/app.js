// [LOAD PACKAGES]

var express 	=  require("express");
var app 	=  express();
var bodyParser 	=  require("body-parser");
var mongoose	=  require("mongoose");
mongoose.Promise = global.Promise ;


// [CONFIGURE APP TO USE bodyParser]

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;


// [RUN SERVER]
var server = app.listen(port,function(){
   console.log("Express server has started on port "+ port);
});


// [CONFIGURE mongoose]

// CONNECT TO MONGODB SERVER
var db = mongoose. connection;
db.on("error", console.error);
mongoose.connect("mongodb://localhost/poixgks",{useMongoClient: true});

// DEFINE MODEL
var Book = require("./models/book");

// [CONFIGURE ROUTER]
var router = require("./routes")(app,Book);
