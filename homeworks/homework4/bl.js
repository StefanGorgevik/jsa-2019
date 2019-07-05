var getAllStudents = () => { console.log("All students!"); };
var getStudent = () => {console.log("Here is a student with id!")};
var storeStudent = () => {console.log("You have posted a student!" )};
var deleteStudent = () => {console.log("Student deleted!" )};
var updateStudent = () => {console.log("Student updated!")};
var patchStudent = () => {console.log("Student patched!" )};



var routes = {
    GET: [
        {route: '/students', func: getAllStudents},
        {route: '/students/:id', func: getStudent}
    ],
    POST: [
        {route: '/students', func: storeStudent}
    ],
    PUT: [
        {route: '/students/:id', func: updateStudent}
    ],
    PATCH: [
        {route: '/students/:id', func: patchStudent}
    ],
    DELETE: [
        {route: '/students/:id', func: deleteStudent}
    ]
 };
 
var met;
for(var i in routes) {
  //  console.log(routes[i]);
    for(var j = 0; j < routes[i].length; j++) {
        console.log(i)
        //console.log(routes[i][j].route.length);
    }
}

