//console.log("Hi!");

//exercise 1

// function everyThird() {
//     var i = 0;
//     var j = 0;
//     while(i < 100) {
//         i++;
//         if(i % 2 === 0){
//             j++;                 
//         }
//         if(i % 2 === 0 && j === 3) {
//             console.log(i);  
//             j = 0;
//         }
//     }
// };
// everyThird();

// function everyThird(c) {
//     var i = 0;
//     var j = 0;
//     while(i < 100) {
//         i++;
//         if(i % 2 === 0){
//             j++;                 
//         }
//         if(i % 2 === 0 && j === c) {
//             console.log(i);  
//             j = 0;
//         }
//     }
// };
// everyThird(4);




// //exercise 2   
var arr = [];
var array = [248,21,68,239,46];
function arraySum(niza) {
    var zbir = 0;
    var num;
    for(var j = 0; j < niza.length; j++){
        num = 0;
        num = niza[j];
        var digits = (""+num).split("").map(Number) ;
        for(var i = 0; i < digits.length; i++) {
            zbir += digits[i];
        }
        arr.push(zbir);
        zbir = 0;
    }
    return arr;
}
arraySum(array);
console.log(arr);
//arraySum(arr);


//14,3,14,14,10

//5,3,5,5,1

//19


// function arrSum(niza) {
//     var c = 0;
//     for(var i = 0; i < niza.length;i++) {
//         if(niza[i].toString().length > 1]) {
//             c++;
//             niza[i] = niza[i].toString().split("").reduce((a,b) => parseInt(a) + parseInt(b));
//         }
//     }
//     if(c > 0) {
//         return arrSum(niza);
//     }else {
//         return niza.reduce((a,b) => a + b);
//     }
// }
// var r = arrSum([248,21,68,239,46]);
// console.log(r);

//homework

