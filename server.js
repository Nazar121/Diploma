var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Diploma"
});

app.use(bodyParser.json());
app.use(cors());


//  Повертаю всі можливі курси
app.post("/repeatCourse",(req,res) => {
    connection.query('select * from Course',(err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
});


app.post("/repeatSchedule",(req,res) => {
    connection.query('select * from Course as c join Times as t on c.id_Course=t.fk_Times_Course',(err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
});


//  Беру з БД інфу про ціни курсів
app.post("/repeatPrice",(req,res) => {
    connection.query('select * from Course as c join Price as p on c.id_Course=p.fk_Price_Course',(err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
});


//  Повертаю всю інфу про даний курс
app.post("/courseName",(req,res) => {
    var obj = {
        title_Course: req.body.title_Course
    }
    connection.query('select * from Course as c join Programs as p on c.id_Course=p.fk_Programs_Course join Times as t on c.id_Course=t.fk_Times_Course join Price as pr on c.id_Course=pr.fk_Price_Course where c.title_Course=?',[obj.title_Course],(err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
});


//  Повертаю інфу про час даного курсу
app.post("/courseNameOclock",(req,res) => {
    var obj = {
        title_Course: req.body.title_Course
    }
    connection.query('select * from Course as c join Times as t on c.id_Course=t.fk_Times_Course join Price as p on c.id_Course=p.fk_Price_Course where c.title_Course=?',[obj.title_Course],(err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
});


var server = app.listen(3000, (err) => {
    if(err) throw err;
    console.log("Server start on port 3000!");
});
