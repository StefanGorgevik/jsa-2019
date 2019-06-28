// class Router {
    
//     constructor(routes) {
//         this.routes = {
//             get: [],
//             post: [],
//             put: [],
//             delete: [],
//             patch: []}
//         };
//     print() {
//         console.log(this.routes)
//     }
    
// }

// var r = new Router();

// r.print();


var routes = {
    get: [],
    post: [],
    put: [],
    delete: [],
    patch: []
};

var get = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn,
        regex: prepareRegex(route)
    });
    console.log(routes.get);
}

var post = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn
    })
};

var put = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn
    })
}

var patch = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn
    })
}

var del = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn
    })
}

var prepareRegex = (str) => {
    str = str.replace('/', '\\');
    console.log(str);
    return str;
}

get("/students/:id/", () => {
    console.log("test");
})