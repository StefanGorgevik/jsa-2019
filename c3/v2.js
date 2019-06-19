var fs = require("fs");

//console.log(fs);


// fs.writeFile("test.txt", "Node.js is the best", (err) =>{
//              // filename - string inside file - callback 
//     if(err) {
//         console.error(err);
//     }
// });

//Callback func

var pero = (cb) => {
    var sum = 0;
    for(var i = 0; i < 100; i++){
        sum += i;
    }
    cb(sum);
}

//1
// log((num) => {
//     console.log(num);
// })
//same as
var log = (num) => {
    console.log(num);
}

pero(log);
