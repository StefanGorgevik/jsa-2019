//npm init
//start: "node index.js"
// npm start

//install express: npm install express --save
 //                                      save the folder node_modules in package.json


var express = require("express");

var api = express(); //kreiranje instanca
var students = require("./handlers/students");
var calc = require("./handlers/calculator");

//kreiras folder handlers file students.js i export na funkcii

api.get("/students", students.getAllStudents);
api.get("/students/:id", students.getStudentByID);
api.get("/students/:id/:name", students.getStudentByIDName);
api.get("/students/:id/grades/:subject", students.getStudentsSubjGrades);

api.post("/students", students.postStudent);

//calculator 

api.get("/calc/:op/:a/:b", calc.calculator );



api.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Server started successfully!");
});

