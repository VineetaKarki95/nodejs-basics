var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
//properties...
host:'localhost',
user:'root',
password:'mysql',
port:'3306',
database:'mydb' 
})

connection.connect(function(error){
if(error){
console.error('Error..not connecting');
}else{
console.log('Connected');
}
});



//about mysql
connection.query("select * from superhero",function(error,rows,fields){
if(!!error)
{
console.log("error...table not found!!");
}
else
{
console.log("successful!!");
console.log(rows);
}
});

