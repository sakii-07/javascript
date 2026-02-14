// rest and spread operator

var arr = [10,20,30]
var arr1 = ["saki",33,55]

`1) rest operator - The rest operator (...) is used to collect multiple values or normal value into a single variable`
var arr2 = [...arr, ...arr1] // rest operator
console.log(arr2);

// function show(...a,b){
//     console.log(...a); // Uncaught SyntaxError SyntaxError: Rest parameter must be last formal parameter
    
// }
// show(100,27,"jagtap")


`2) spread operator - The spread operator (...) is used to expand an array or object into individual values or normal value.`
function show1(...a){
    console.log(...a); // 100 27 jagtap - spread operator
    
}
show1(100,27,"jagtap") 
