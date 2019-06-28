// var http = require("http");

//     var getAllStudents = () => { console.log("All students!"); };
//     var getStudent = () => {console.log("Here is a student with id!")};
//     var storeStudent = () => {console.log("You have posted a student!" )};
//     var deleteStudent = () => {console.log("Student deleted!" )};
//     var updateStudent = () => {console.log("Student updated!")};
//     var patchStudent = () => {console.log("Student patched!" )};

//     var routes = {
//         GET: [
//             {route: '/students', func: getAllStudents},
//             {route: '/students/:id', func: getStudent}
//         ],
//         POST: [
//             {route: '/students', func: storeStudent}
//         ],
//         PUT: [
//             {route: '/students/:id', func: updateStudent}
//         ],
//         PATCH: [
//             {route: '/students/:id', func: patchStudent}
//         ],
//         DELETE: [
//             {route: '/students/:id', func: deleteStudent}
//         ]
//      };

// ovoj kod raboti, no na primer, za delete students raboti i /students, i /students/:id

// var server = http.createServer(function(req, res) {
//         var method = req.method;
//         var link = req.url;
//         var regex = /\/students\/([a-zA-Z0-9\-_]*)/;
//         // var idRegex = /\/students\/([a-zA-Z0-9\-_])*:([a-zA-Z0-9])*\s*/;
//         // var idRegex2 = /\/students\/([a-zA-Z0-9\-_])*([0-9])\s*/;

//         if(routes[method][0].route === link){
//             routes[method][0].func();
//         }
//         else if ( regex.test(routes[method][0].route) ){           
//             routes[method][0].func();
//         }
//         else if ( regex.test(routes[method][1].route) ){          
//             routes[method][1].func();
//         }

//     res.write(req.url + " " + req.method);
//     res.end();
// });

// server.listen(8080, (err) =>{
//     if(err) {
//         console.log(err);
//     }
//     console.log("Server started successfully!");
// });




// //attempt for solution


// var http = require("http");

//     var getAllStudents = () => { console.log("All students!"); };
//     var getStudent = () => {console.log("Here is a student with id!")};
//     var storeStudent = () => {console.log("You have posted a student!" )};
//     var deleteStudent = () => {console.log("Student deleted!" )};
//     var updateStudent = () => {console.log("Student updated!")};
//     var patchStudent = () => {console.log("Student patched!" )};



//     var routes = {
//         GET: [
//             {route: '/students', func: getAllStudents},
//             {route: '/students/:id', func: getStudent}
//         ],
//         POST: [
//             {route: '/students', func: storeStudent}
//         ],
//         PUT: [
//             {route: '/students/:id', func: updateStudent}
//         ],
//         PATCH: [
//             {route: '/students/:id', func: patchStudent}
//         ],
//         DELETE: [
//             {route: '/students/:id', func: deleteStudent}
//         ]
//      };

// var server = http.createServer(function(req, res) {
//         var method = req.method;
//         var link = req.url;
        
//         var regex = /^\/students\/s([a-zA-Z0-9\-_]*)$/;
//         var idRegex = /^\/students\/([a-zA-Z0-9\-_])*([a-zA-Z0-9])*\s*$/;
//         var idRegex2 = /^\/students\/([a-zA-Z0-9])*([a-z0-9])\s*$/m;                  ///^\/students\/([a-zA-Z0-9\-_])*([0-9])\s*$/;
//         var idreg = /\/([a-z0-9]*)\s$/
//         for(var i in routes) {
//             for(var j = 0; j < routes[i].length; j++) {  
//                 if(method === i) {
//                     if (regex.test(routes[i][j].route) && routes[i][j].route.length <= 9){          
//                         routes[i][j].func();
//                         break;
//                     }else if(idRegex2.test(routes[i][j].route) && routes[i][j].route.length > 9) {
//                         routes[i][j].func();
//                         break;
//                     }
//             }
//             }
//         }
//     res.write(link + " " + method);
//     res.end();
// });

// server.listen(8080, (err) =>{
//     if(err) {
//         console.log(err);
//     }
//     console.log("Server started successfully!");
// });

//attempt for solution 2


// var http = require("http");

//     var getAllStudents = () => { console.log("All students!"); };
//     var getStudent = () => {console.log("Here is a student with id!")};
//     var storeStudent = () => {console.log("You have posted a student!" )};
//     var deleteStudent = () => {console.log("Student deleted!" )};
//     var updateStudent = () => {console.log("Student updated!")};
//     var patchStudent = () => {console.log("Student patched!" )};



//     var routes = {
//         GET: [
//             {route: '/students', func: getAllStudents},
//             {route: '/students/:id', func: getStudent}
//         ],
//         POST: [
//             {route: '/students', func: storeStudent}
//         ],
//         PUT: [
//             {route: '/students/:id', func: updateStudent}
//         ],
//         PATCH: [
//             {route: '/students/:id', func: patchStudent}
//         ],
//         DELETE: [
//             {route: '/students/:id', func: deleteStudent}
//         ]
//      };

// var server = http.createServer(function(req, res) {
//         var method = req.method;
//         var link = req.url;
        
//         var regex = /^\/students\/s([a-zA-Z0-9\-_]*)$/;
//         var idRegex = /^\/students\/([a-zA-Z0-9\-_])*([a-zA-Z0-9])*\s*$/;
//         var idRegex2 = /^\/students\/([a-zA-Z0-9])*([a-z0-9])\s*$/m;                  ///^\/students\/([a-zA-Z0-9\-_])*([0-9])\s*$/;
//         var idreg = /\/([a-z0-9]*)\s$/
//         for(var i in routes) {
//             for(var j = 0; j < routes[i].length; j++) {  
//                 if(method === i && regex.test(routes[i][j].route) ) {
//                         routes[i][j].func();
//                         break;
//                     }
//                     if(method === i && regex+idreg.test(routes[i][j].route)) {
//                         routes[i][j].func();
//                         break;
//                     }
//                 }
//             }
        
//     res.write(link + " " + method);
//     res.end();
// });

// server.listen(8080, (err) =>{
//     if(err) {
//         console.log(err);
//     }
//     console.log("Server started successfully!");
// });