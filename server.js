var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();

//var connection = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "root",
//    database: "usertasklist"
//});

app.use(bodyParser.json());
app.use(cors());



var server = app.listen(3000, (err) => {
    if(err) throw err;
    console.log("Server start on port 3000!");
});
