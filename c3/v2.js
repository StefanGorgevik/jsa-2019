var fs = require("fs");

//console.log(fs);


// fs.writeFile("test.txt", "Node.js is the best", (err) =>{
//              // filename - string inside file - callback 
//     if(err) {
//         console.error(err);
//     }
// });

fs.readFile("test.txt", "utf8", (err,data) => { // without utf === <Buffer 4e 6f 64 65 2e 6a 73 20 69 73 20 74 68 65 20 62 65 73 74>
    if(err) {
        console.log(err);
    }
    console.log(data);
})

//Callback func

// var pero = (cb) => {
//     var sum = 0;
//     for(var i = 0; i < 100; i++){
//         sum += i;
//     }
//     cb(sum);
// }

// //1
// // log((num) => {
// //     console.log(num);
// // })
// //same as
// var log = (num) => {
//     console.log(num);
// }

// pero(log);
