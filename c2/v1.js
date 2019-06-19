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
//             console.log("1" + i);  
//             j = 0;
//         }
//     }
// };
//everyThird(4);




// //exercise 2   

var niza = [248,239,220]; //14,3,14,14,10; 5,3,5,5,1, --19
// function arraySum(niza) {
    var arr = [];
    var zbir = 0;
    var num;
    var i = 0;
    for(var j = 0; j < niza.length; j++){
        num = 0;
        console.log(zbir);
        console.log(num);
        num = niza[j];
        console.log(num);
        console.log("this is array : " + niza);
        var digits = (""+num).split("").map(Number);
        console.log("This is digit: " + digits);
        niza.shift();
        console.log("this is array after shift: " + niza);
   while(i < digits.length) {           
        zbir += digits[i];   
        console.log(zbir);
        i++; 
    }
    arr.push(zbir); 
    zbir = 0;
    console.log("arr after push: " + arr);
 }  
    //console.log(arr);  
//}
// arraySum(array);
//console.log(arr);
//arraySum(arr);


//14,3,14,14,10

//5,3,5,5,1

//19


// for(var i = 0; i < digits.length; i++) {
//     // if(digits[i].length > 1) {
//         zbir += digits[i];  
//         arr.push(zbir);
//         console.log("arr after push: " + arr);
//         array.shift();
//         console.log("this is array after shift: " + array);
//     // }
// }  }

// function arrSum(niza) {
//     var c = 0;
//     for(var i = 0; i < niza.length;i++) {
//         if(niza[i].toString().length > 1) {
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

// module.exports = {
//     arraySum,
//     everyThird
// };