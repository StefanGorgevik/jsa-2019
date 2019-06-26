var routes = {
    get: [
        { route: "/students", func: getAllStudents },
        { route: "/students/:id", func: getStudent }
    ],
    post: [
        { route: "/students", func: storeStudent }
    ],
    put: [
        { route: "/students/:id", func: updateStudents }
    ],
    patch: [
        { route: "/students/:id", func: patchStudents }
    ],
    delete: [
        { route: "/students/:id", func: deleteStudents }
    ]
}

var getAllStudents = () => {};
var getStudent = () => {};
var storeStudent = () => {};
var deleteStudent = () => {};
var updateStudent = () => {};
var patchStudent = () => {};

// /students/:id

//    /\/students\/([a-zA-Z0-9\-])/

req.method = "get";
req.url = "/students/23";
if(routs[req.method][0].route == req.url) {
    routes[req.method][0].func();
}