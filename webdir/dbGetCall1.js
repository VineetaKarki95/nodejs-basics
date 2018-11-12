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
app.get('/saviours/:id',function(req,resp){
connection.query("select * from superhero where id = ?",[req.params.id],function(error,rows,fields){
if(!!error)
{
console.log("error...table not found!!");
}
else
{
console.log("successful!!");
console.log(rows);
resp.json(rows);//for displalying in json format
//resp.send(rows);// this displays in simple/raw data if u dont have json formatter in browser
}
 });
})



//deleting a specific employee with id
app.delete('/saviours/:id',function(req,resp){
connection.query("delete from superhero where id = ?",[req.params.id],function(error,rows,fields){
if(!!error)
{
console.log("error...table not found!!");
}
else
{
console.log("deleted successfully!!!");
resp.send("Employee with id: "+ req.params.id+ " deleted successfully!!");
}
});
})





app.listen(1337);

